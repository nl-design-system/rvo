#!/usr/bin/env bash
# All-in-one wrapper: stopt bestaande Storybook-server, (her)bouwt eventueel
# de dist, serveert hem op poort 6006, laadt FIGMA_TOKEN uit .env.local, en
# draait compare.mjs voor de opgegeven component.
#
# Usage:
#   ./sync.sh                  # button (default) tegen huidige Storybook-dist
#   ./sync.sh alert            # andere component
#   ./sync.sh button --build   # eerst Storybook opnieuw bouwen
#   ./sync.sh --build          # rebuild + default component (button)

set -euo pipefail

COMPONENT="button"
BUILD=false
for arg in "$@"; do
  case "$arg" in
    --build) BUILD=true ;;
    -*) echo "Onbekende optie: $arg"; exit 1 ;;
    *) COMPONENT="$arg" ;;
  esac
done

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOS_DIR="$(cd "$SCRIPT_DIR/../../.." && pwd)"
DIST_DIR="$ROOS_DIR/packages/storybook/dist"

# .env.local laden voor FIGMA_TOKEN
if [ -f "$SCRIPT_DIR/.env.local" ]; then
  set -a
  # shellcheck disable=SC1091
  source "$SCRIPT_DIR/.env.local"
  set +a
fi
if [ -z "${FIGMA_TOKEN:-}" ]; then
  echo "Fout: FIGMA_TOKEN niet gevonden. Zet hem in documentation/tools/figma-sync/.env.local"
  exit 1
fi

# Bestaande server op 6006 stoppen om port-conflicts te voorkomen
lsof -iTCP:6006 -sTCP:LISTEN -t 2>/dev/null | xargs -r kill 2>/dev/null || true
sleep 1

# Build indien gevraagd of als dist ontbreekt
if [ "$BUILD" = true ] || [ ! -d "$DIST_DIR" ]; then
  echo ">> Storybook bouwen..."
  (cd "$ROOS_DIR" && pnpm --filter @nl-rvo/storybook build)
fi

# Server starten in achtergrond — kill bij exit van dit script
echo ">> Storybook serveren op http://localhost:6006..."
(cd "$ROOS_DIR" && npx --yes http-server packages/storybook/dist -p 6006 -s > /tmp/figma-sync-server.log 2>&1) &
SERVER_PID=$!
trap "kill $SERVER_PID 2>/dev/null || true" EXIT

until curl -fsSL -o /dev/null http://localhost:6006/ 2>/dev/null; do
  sleep 1
done

# Vergelijking draaien (oude output eerst weg)
echo ">> Vergelijken: $COMPONENT"
cd "$SCRIPT_DIR"
rm -rf "output/$COMPONENT"
node compare.mjs "$COMPONENT"

REPORT="$SCRIPT_DIR/output/$COMPONENT/report.md"
echo ""
echo "Klaar."
echo "  Rapport: $REPORT"
echo "  PNG's:   $SCRIPT_DIR/output/$COMPONENT/"
