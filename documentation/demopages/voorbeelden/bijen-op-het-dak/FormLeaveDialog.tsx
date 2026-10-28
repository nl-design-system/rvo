import { ActionGroup, Button, Dialog, Heading } from '@nl-rvo/component-library-react';

const URL_VOORBEREIDING =
  'iframe.html?id=pagina-s-voorbeelden-bijen-op-het-dak-voordat-u-begint-met-aanvragen--default&viewMode=story';

interface FormLeaveDialogProps {
  isOpen: boolean;
  backUrl: string;
  onClose: () => void;
}

export const FormLeaveDialog = ({ isOpen, backUrl, onClose }: FormLeaveDialogProps) => {
  if (!isOpen) return null;

  return (
    <Dialog
      isOpen={true}
      onClose={onClose}
      actionGroup={
        <ActionGroup>
          <Button
            kind="primary"
            size="md"
            onClick={() => {
              window.location.href = URL_VOORBEREIDING;
            }}
          >
            Opslaan en sluiten
          </Button>
          <Button kind="secondary" size="md" onClick={onClose}>
            Terug
          </Button>
          <Button
            kind="warning"
            size="md"
            onClick={() => {
              window.location.href = backUrl;
            }}
          >
            Sluiten zonder opslaan
          </Button>
        </ActionGroup>
      }
    >
      <Heading type="h2">Wilt u het formulier sluiten?</Heading>
      <p className="rvo-paragraph">
        Uw wijzigingen zijn nog niet opgeslagen. Als u sluit zonder op te slaan, gaan uw wijzigingen verloren.
      </p>
    </Dialog>
  );
};
