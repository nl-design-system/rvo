import { ITextareaFieldProps, TextareaField } from '@nl-rvo/component-library-react';
import { defaultArgs } from '@nl-rvo/component-library-react/src/components/form-field-textarea/defaultArgs';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { HTMLAttributes } from 'react';

const meta: Meta<typeof TextareaField> = {
  title: 'Componenten/Textarea field',
  component: TextareaField,
  args: defaultArgs as Partial<ITextareaFieldProps & HTMLAttributes<HTMLTextAreaElement>>,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'form-field-textarea',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=5909-2331&embed-host=share',
    },
  },
};
export default meta;

type Story = StoryObj<typeof TextareaField>;

export const Default: Story = {
  args: { ...defaultArgs, helperText: 'Helper text', maxLength: 300, maxLengthIndicator: true } as Partial<
    ITextareaFieldProps & HTMLAttributes<HTMLTextAreaElement>
  >,
  name: 'Textarea field',
};
