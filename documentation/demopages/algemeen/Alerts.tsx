import { Button, Header, Icon, LayoutColumnRow, MaxWidthLayout, MenuBar } from '@nl-rvo/components';
import '../common/style.scss';
import { defaultMenuBarItems } from '../common/defaultMenuBarItems';

const Alerts = () => {
  return (
    <div className="rvo-demo-page">
      <Header />
      <LayoutColumnRow size="md">
        <MenuBar items={defaultMenuBarItems} size="md" useIcons={true} iconPlacement="before" />

        <MaxWidthLayout size="sm">
          <main>
            <div className="rvo-alerts">
              <LayoutColumnRow size="md">
                <div className="rvo-alert rvo-alert--info">
                  <Icon icon="info" color="hemelblauw" size="lg" />
                  <div className="rvo-alert-text">
                    <p>This is an example of an info alert.</p>
                  </div>
                </div>
                <div className="rvo-alert rvo-alert--info">
                  <Icon icon="info" color="hemelblauw" size="lg" />
                  <div className="rvo-alert-text">
                    <strong>Info with heading</strong>
                    <br />
                    <p>This is an example of an info alert with a heading.</p>
                  </div>
                </div>
                <div className="rvo-alert rvo-alert--info">
                  <Icon icon="info" color="hemelblauw" size="lg" />
                  <div className="rvo-alert-text">
                    <p>This is an example of an info alert with a button.</p>
                    <Button kind="primary" size="sm">
                      Button
                    </Button>
                  </div>
                </div>
                <div className="rvo-alert rvo-alert--info">
                  <Icon icon="info" color="hemelblauw" size="lg" />
                  <div className="rvo-alert-text">
                    <p>This is an example of an info alert with an optional close button.</p>
                  </div>
                  <Button kind="subtle" className="rvo-button--close">
                    <Icon icon="kruis" size="md" />
                  </Button>
                </div>
                <div className="rvo-alert rvo-alert--warning">
                  <Icon icon="waarschuwing" size="lg" className="rvo-status-icon-waarschuwing" />
                  <div className="rvo-alert-text">
                    <p>This is an example of a warning alert.</p>
                  </div>
                </div>
                <div className="rvo-alert rvo-alert--warning">
                  <Icon icon="waarschuwing" size="lg" className="rvo-status-icon-waarschuwing" />
                  <div className="rvo-alert-text">
                    <strong>Warning with heading</strong>
                    <br />
                    <p>This is an example of a warning alert with a heading.</p>
                  </div>
                </div>
                <div className="rvo-alert rvo-alert--warning">
                  <Icon icon="waarschuwing" size="lg" className="rvo-status-icon-waarschuwing" />
                  <div className="rvo-alert-text">
                    <p>This is an example of a warning alert with a button.</p>
                    <Button kind="primary" size="sm">
                      Button
                    </Button>
                  </div>
                </div>
                <div className="rvo-alert rvo-alert--warning">
                  <Icon icon="waarschuwing" size="lg" className="rvo-status-icon-waarschuwing" />
                  <div className="rvo-alert-text">
                    <p>This is an example of a warning alert with an optional close button.</p>
                  </div>
                  <Button kind="subtle" className="rvo-button--close">
                    <Icon icon="kruis" size="md" />
                  </Button>
                </div>
                <div className="rvo-alert rvo-alert--error">
                  <Icon icon="foutmelding" size="lg" className="rvo-status-icon-foutmelding" />
                  <div className="rvo-alert-text">
                    <p>This is an example of a error alert.</p>
                  </div>
                </div>
                <div className="rvo-alert rvo-alert--error">
                  <Icon icon="foutmelding" size="lg" className="rvo-status-icon-foutmelding" />
                  <div className="rvo-alert-text">
                    <strong>error with heading</strong>
                    <br />
                    <p>This is an example of a error alert with a heading.</p>
                  </div>
                </div>
                <div className="rvo-alert rvo-alert--error">
                  <Icon icon="foutmelding" size="lg" className="rvo-status-icon-foutmelding" />
                  <div className="rvo-alert-text">
                    <p>This is an example of a error alert with a button.</p>
                    <Button kind="primary" size="sm">
                      Button
                    </Button>
                  </div>
                </div>
                <div className="rvo-alert rvo-alert--error">
                  <Icon icon="foutmelding" size="lg" className="rvo-status-icon-foutmelding" />
                  <div className="rvo-alert-text">
                    <p>This is an example of a error alert with an optional close button.</p>
                  </div>
                  <Button kind="subtle" className="rvo-button--close">
                    <Icon icon="kruis" size="md" />
                  </Button>
                </div>
                <div className="rvo-alert rvo-alert--succes">
                  <Icon icon="bevestiging" size="lg" className="rvo-status-icon-bevestiging" />
                  <div className="rvo-alert-text">
                    <p>This is an example of a succes alert.</p>
                  </div>
                </div>
                <div className="rvo-alert rvo-alert--succes">
                  <Icon icon="bevestiging" size="lg" className="rvo-status-icon-bevestiging" />
                  <div className="rvo-alert-text">
                    <strong>succes with heading</strong>
                    <br />
                    <p>This is an example of a succes alert with a heading.</p>
                  </div>
                </div>
                <div className="rvo-alert rvo-alert--succes">
                  <Icon icon="bevestiging" size="lg" className="rvo-status-icon-bevestiging" />
                  <div className="rvo-alert-text">
                    <p>This is an example of a succes alert with a button.</p>
                    <Button kind="primary" size="sm">
                      Button
                    </Button>
                  </div>
                </div>
                <div className="rvo-alert rvo-alert--succes">
                  <Icon icon="bevestiging" size="lg" className="rvo-status-icon-bevestiging" />
                  <div className="rvo-alert-text">
                    <p>This is an example of a succes alert with an optional close button.</p>
                  </div>
                  <Button kind="subtle" className="rvo-button--close">
                    <Icon icon="kruis" size="md" />
                  </Button>
                </div>
              </LayoutColumnRow>
            </div>
          </main>
        </MaxWidthLayout>
      </LayoutColumnRow>
    </div>
  );
};

export default Alerts;
