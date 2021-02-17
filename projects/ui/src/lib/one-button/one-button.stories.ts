// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { OneButtonComponent } from './one-button.component';

export default {
  title: 'Components/Button',
  component: OneButtonComponent,
} as Meta;

const template: Story<OneButtonComponent> = (args: OneButtonComponent) => ({
  component: OneButtonComponent,
  props: args,
});

export const primary = template.bind({});
primary.args = {
  type: 'primary',
  size: 'medium',
  label: 'Primary Button'
};

export const secondary = template.bind({});
secondary.args = {
  type: 'secondary',
  size: 'medium',
  label: 'Secondary Button'
};

export const disabled = template.bind({});
disabled.args = {
  type: 'primary',
  size: 'medium',
  label: 'Disabled Button',
  disabled: 'disabled'
};

export const loading = template.bind({});
loading.args = {
  type: 'primary',
  size: 'medium',
  label: 'Loading Button',
  loading: 'true'
};

export const full = template.bind({});
full.args = {
  type: 'primary',
  size: 'medium',
  label: 'Full Button',
  full: 'true'
};
