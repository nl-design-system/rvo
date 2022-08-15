import { Header } from '@nl-rvo/components/header/css/template';
import { LayoutColumnRow } from '@nl-rvo/components/layout-column-row/css/template';
import { MaxWidthLayout } from '@nl-rvo/components/max-width-layout/css/template';
import { MenuBar } from '@nl-rvo/components/menubar/css/template';
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
                  <div className="rvo-icon rvo-icon-info rvo-icon--lg rvo-icon--hemelblauw"></div>
                  <div className="rvo-alert-text">
                    <p>This is an example of an info alert.</p>
                  </div>
                </div>
                <div className="rvo-alert rvo-alert--info">
                  <div className="rvo-icon rvo-icon-info rvo-icon--lg rvo-icon--hemelblauw"></div>
                  <div className="rvo-alert-text">
                    <strong>Info with heading</strong>
                    <br />
                    <p>This is an example of an info alert with a heading.</p>
                  </div>
                </div>
                <div className="rvo-alert rvo-alert--info">
                  <div className="rvo-icon rvo-icon-info rvo-icon--lg rvo-icon--hemelblauw"></div>
                  <div className="rvo-alert-text">
                    <p>This is an example of an info alert with a button.</p>
                    <button className="utrecht-button utrecht-button--primary-action rvo-button--sm">Button</button>
                  </div>
                </div>
                <div className="rvo-alert rvo-alert--info">
                  <div className="rvo-icon rvo-icon-info rvo-icon--lg rvo-icon--hemelblauw"></div>
                  <div className="rvo-alert-text">
                    <p>This is an example of an info alert with an optional close button.</p>
                  </div>
                  <button className="utrecht-button rvo-button--close">
                    <div className="rvo-icon rvo-icon-kruis rvo-icon--md rvo-icon--zwart"></div>
                  </button>
                </div>
                <div className="rvo-alert rvo-alert--warning">
                  <div className="rvo-icon rvo-icon-waarschuwing rvo-status-icon-waarschuwing rvo-icon--lg"></div>
                  <div className="rvo-alert-text">
                    <p>This is an example of a warning alert.</p>
                  </div>
                </div>
                <div className="rvo-alert rvo-alert--warning">
                  <div className="rvo-icon rvo-icon-waarschuwing rvo-status-icon-waarschuwing rvo-icon--lg"></div>
                  <div className="rvo-alert-text">
                    <strong>Warning with heading</strong>
                    <br />
                    <p>This is an example of a warning alert with a heading.</p>
                  </div>
                </div>
                <div className="rvo-alert rvo-alert--warning">
                  <div className="rvo-icon rvo-icon-waarschuwing rvo-status-icon-waarschuwing rvo-icon--lg"></div>
                  <div className="rvo-alert-text">
                    <p>This is an example of a warning alert with a button.</p>
                    <button className="utrecht-button utrecht-button--primary-action rvo-button--sm">Button</button>
                  </div>
                </div>
                <div className="rvo-alert rvo-alert--warning">
                  <div className="rvo-icon rvo-icon-waarschuwing rvo-status-icon-waarschuwing rvo-icon--lg"></div>
                  <div className="rvo-alert-text">
                    <p>This is an example of a warning alert with an optional close button.</p>
                  </div>
                  <button className="utrecht-button rvo-button--close">
                    <div className="rvo-icon rvo-icon-kruis rvo-icon--md rvo-icon--zwart"></div>
                  </button>
                </div>
                <div className="rvo-alert rvo-alert--error">
                  <div className="rvo-icon rvo-icon-foutmelding rvo-status-icon-foutmelding rvo-icon--lg"></div>
                  <div className="rvo-alert-text">
                    <p>This is an example of a error alert.</p>
                  </div>
                </div>
                <div className="rvo-alert rvo-alert--error">
                  <div className="rvo-icon rvo-icon-foutmelding rvo-status-icon-foutmelding rvo-icon--lg"></div>
                  <div className="rvo-alert-text">
                    <strong>error with heading</strong>
                    <br />
                    <p>This is an example of a error alert with a heading.</p>
                  </div>
                </div>
                <div className="rvo-alert rvo-alert--error">
                  <div className="rvo-icon rvo-icon-foutmelding rvo-status-icon-foutmelding rvo-icon--lg"></div>
                  <div className="rvo-alert-text">
                    <p>This is an example of a error alert with a button.</p>
                    <button className="utrecht-button utrecht-button--primary-action rvo-button--sm">Button</button>
                  </div>
                </div>
                <div className="rvo-alert rvo-alert--error">
                  <div className="rvo-icon rvo-icon-foutmelding rvo-status-icon-foutmelding rvo-icon--lg"></div>
                  <div className="rvo-alert-text">
                    <p>This is an example of a error alert with an optional close button.</p>
                  </div>
                  <button className="utrecht-button rvo-button--close">
                    <div className="rvo-icon rvo-icon-kruis rvo-icon--md rvo-icon--zwart"></div>
                  </button>
                </div>
                <div className="rvo-alert rvo-alert--succes">
                  <div className="rvo-icon rvo-icon-bevestiging rvo-status-icon-bevestiging rvo-icon--lg"></div>
                  <div className="rvo-alert-text">
                    <p>This is an example of a succes alert.</p>
                  </div>
                </div>
                <div className="rvo-alert rvo-alert--succes">
                  <div className="rvo-icon rvo-icon-bevestiging rvo-status-icon-bevestiging rvo-icon--lg"></div>
                  <div className="rvo-alert-text">
                    <strong>succes with heading</strong>
                    <br />
                    <p>This is an example of a succes alert with a heading.</p>
                  </div>
                </div>
                <div className="rvo-alert rvo-alert--succes">
                  <div className="rvo-icon rvo-icon-bevestiging rvo-status-icon-bevestiging rvo-icon--lg"></div>
                  <div className="rvo-alert-text">
                    <p>This is an example of a succes alert with a button.</p>
                    <button className="utrecht-button utrecht-button--primary-action rvo-button--sm">Button</button>
                  </div>
                </div>
                <div className="rvo-alert rvo-alert--succes">
                  <div className="rvo-icon rvo-icon-bevestiging rvo-status-icon-bevestiging rvo-icon--lg"></div>
                  <div className="rvo-alert-text">
                    <p>This is an example of a succes alert with an optional close button.</p>
                  </div>
                  <button className="utrecht-button rvo-button--close">
                    <div className="rvo-icon rvo-icon-kruis rvo-icon--md rvo-icon--zwart"></div>
                  </button>
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
