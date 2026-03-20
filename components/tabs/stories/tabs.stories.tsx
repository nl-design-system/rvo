import { Icon, LayoutFlow, PageNumberNavigation, TabItem, Tabs } from '@nl-rvo/component-library-react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

const meta: Meta<typeof Tabs> = {
  title: 'Componenten/Tabs',
  component: Tabs,
  args: {
    ariaLabel: 'Voorbeeld tabs',
    defaultActiveTab: 0,
    size: 'md',
    activationMode: 'auto',
    panelPadding: true,
    panelBorder: true,
    items: [
      {
        label: 'Tab 1',
        panel: (
          <>
            <h2 className="utrecht-heading-2 rvo-heading rvo-heading--margin-1 rvo-heading--gap-sm">Tab 1</h2>
            <p className="rvo-paragraph rvo-paragraph--grijs-900">Content van tab 1</p>
          </>
        ),
      },
      {
        label: 'Tab 2',
        panel: (
          <>
            <h2 className="utrecht-heading-2 rvo-heading rvo-heading--margin-1 rvo-heading--gap-sm">Tab 2</h2>
            <p className="rvo-paragraph rvo-paragraph--grijs-900">Content van tab 2</p>
          </>
        ),
      },
      {
        label: 'Tab 3 met icoon',
        before: (
          <span
            className="utrecht-icon rvo-icon rvo-icon-home rvo-icon--md rvo-icon--hemelblauw"
            role="img"
            aria-label="Home"
          />
        ),
        panel: (
          <>
            <h2 className="utrecht-heading-2 rvo-heading rvo-heading--margin-1 rvo-heading--gap-sm">Tab 3</h2>
            <p className="rvo-paragraph rvo-paragraph--grijs-900">Content van tab 3</p>
          </>
        ),
      },
    ],
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'radio' },
    },
    activationMode: {
      options: ['auto', 'manual'],
      control: { type: 'radio' },
    },
    panelPadding: {
      control: { type: 'boolean' },
      description: 'Voegt standaard panel padding toe.',
    },
    panelBorder: {
      control: { type: 'boolean' },
      description: 'Voegt standaard panel border toe.',
    },
  },
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'tabs',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=3669-2&embed-host=share',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Default: Story = { name: 'Tabs' };

export const WithTabItemChildren: Story = {
  name: 'Tabs met html tabitem',
  args: {
    items: undefined,
  },
  render: (args) => (
    <Tabs {...args}>
      <TabItem label="Tab 1">
        <>
          <h2 className="utrecht-heading-2 rvo-heading rvo-heading--margin-1 rvo-heading--gap-sm">Tab 1</h2>
          <p className="rvo-paragraph rvo-paragraph--grijs-900">Content van tab 1</p>
        </>
      </TabItem>
      <TabItem label="Tab 2">
        <>
          <h2 className="utrecht-heading-2 rvo-heading rvo-heading--margin-1 rvo-heading--gap-sm">Tab 2</h2>
          <p className="rvo-paragraph rvo-paragraph--grijs-900">Content van tab 2</p>
        </>
      </TabItem>
      <TabItem
        label="Tab 3 met icoon"
        before={<span className="utrecht-icon rvo-icon rvo-icon-home rvo-icon--md rvo-icon--hemelblauw" role="img" />}
      >
        <>
          <h2 className="utrecht-heading-2 rvo-heading rvo-heading--margin-1 rvo-heading--gap-sm">Tab 3</h2>
          <p className="rvo-paragraph rvo-paragraph--grijs-900">Content van tab 3</p>
        </>
      </TabItem>
    </Tabs>
  ),
};

export const WithTableInPanel: Story = {
  name: 'Tabs met tabel',
  args: {
    items: undefined,
    panelPadding: false,
    panelBorder: false,
  },
  render: (args) => (
    <Tabs {...args}>
      <TabItem label="Overzicht">
        <LayoutFlow gap="xl">
          <div className="rvo-table--responsive">
            <table className="rvo-table">
              <thead className="rvo-table-head">
                <tr className="rvo-table-row">
                  <th scope="col" className="rvo-table-header">
                    Naam
                  </th>
                  <th scope="col" className="rvo-table-header ">
                    Status
                  </th>
                  <th scope="col" className="rvo-table-header ">
                    Referentienummer
                  </th>
                  <th scope="col" className="rvo-table-header">
                    Laatste wijziging
                  </th>
                  <th scope="col" className="rvo-table-header"></th>
                </tr>
              </thead>
              <tbody className="rvo-table-body">
                <tr className="rvo-table-row">
                  <td className="rvo-table-cell">
                    <a className="rvo-link rvo-link--no-underline">LEADER 2023</a>
                  </td>
                  <td className="rvo-table-cell">
                    <LayoutFlow row={true} gap="sm">
                      <span
                        className="utrecht-icon rvo-icon rvo-icon-waarschuwing rvo-icon--sm rvo-status-icon-waarschuwing"
                        role="img"
                        aria-label="Waarschuwing"
                      ></span>{' '}
                      Actie nodig
                    </LayoutFlow>
                  </td>
                  <td className="rvo-table-cell">ERTKV23-04546009</td>
                  <td className="rvo-table-cell">14 dec 2023</td>
                  <td className="rvo-table-cell">
                    <LayoutFlow alignItems="end">
                      <a href="#">
                        <Icon icon="delta-naar-rechts" size="sm"></Icon>
                      </a>
                    </LayoutFlow>
                  </td>
                </tr>
                <tr className="rvo-table-row">
                  <td className="rvo-table-cell">
                    <a className="rvo-link rvo-link--no-underline">Extra betaling jonge landbouwers GL..</a>
                  </td>
                  <td className="rvo-table-cell">In behandeling</td>
                  <td className="rvo-table-cell">ERTKV23-04546009</td>
                  <td className="rvo-table-cell">14 dec 2023</td>
                  <td className="rvo-table-cell">
                    <LayoutFlow alignItems="end">
                      <a href="#">
                        <Icon icon="delta-naar-rechts" size="sm"></Icon>
                      </a>
                    </LayoutFlow>
                  </td>
                </tr>
                <tr className="rvo-table-row">
                  <td className="rvo-table-cell">
                    <a className="rvo-link rvo-link--no-underline">ANLb-Subsidie 2022</a>
                  </td>
                  <td className="rvo-table-cell">Bezwaar</td>
                  <td className="rvo-table-cell">ERTKV23-04546009</td>
                  <td className="rvo-table-cell">14 dec 2023</td>
                  <td className="rvo-table-cell">
                    <LayoutFlow alignItems="end">
                      <a href="#">
                        <Icon icon="delta-naar-rechts" size="sm"></Icon>
                      </a>
                    </LayoutFlow>
                  </td>
                </tr>
                <tr className="rvo-table-row">
                  <td className="rvo-table-cell">
                    <a className="rvo-link rvo-link--no-underline">Eco-regeling 2023</a>
                  </td>
                  <td className="rvo-table-cell">
                    <LayoutFlow row={true} gap="sm">
                      <span
                        className="utrecht-icon rvo-icon rvo-icon-waarschuwing rvo-icon--sm rvo-status-icon-waarschuwing"
                        role="img"
                        aria-label="Waarschuwing"
                      ></span>{' '}
                      Actie nodig
                    </LayoutFlow>
                  </td>
                  <td className="rvo-table-cell">ERTKV23-04546009</td>
                  <td className="rvo-table-cell">14 dec 2023</td>
                  <td className="rvo-table-cell">
                    <LayoutFlow alignItems="end">
                      <a href="#">
                        <Icon icon="delta-naar-rechts" size="sm"></Icon>
                      </a>
                    </LayoutFlow>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <PageNumberNavigation numberOfPages={5} activePage={3} />
        </LayoutFlow>
      </TabItem>
      <TabItem label="Details">
        <p className="rvo-paragraph rvo-paragraph--grijs-900">Tweede tab met normale tekst content.</p>
      </TabItem>
    </Tabs>
  ),
};
