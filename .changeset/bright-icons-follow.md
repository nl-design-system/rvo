---
"@nl-rvo/component-library-react": patch
"@nl-rvo/react-link": patch
---

Link icons now follow the link styling when no `iconColor` is set. The icon gets the `rvo-link__icon` class instead of defaulting to `hemelblauw`, so call-to-action links show their icon in the text color (white for the default variant, violet for the outline variant) and regular link icons pick up the hover, active and focus colors. An explicitly set `iconColor` keeps working as before.
