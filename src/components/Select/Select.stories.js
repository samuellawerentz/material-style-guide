import React from 'react'
import { Select } from '.'

export default {
  title: 'Components/Select',
  component: Select,
  argTypes: {
    size: {
      options: ['small', 'default', 'large'],
      control: { type: 'select' },
    },
  },
  decorators: [(story) => <div style={{ width: '280px' }}>{story()}</div>],
}

const Template = (args) => <Select {...args} />

export const Default = Template.bind({})
Default.args = {
  type: 'input',
  size: 'default',
  placeholder: 'A simple text field',
  value: 'Cat',
  onChange: (value) => console.log(value),
  options: [
    {
      value: 'This is a long option that will create ellipsis',
    },
    { value: 'Ball' },
    { value: 'Cat' },
    { value: 'Duck' },
    { value: 'Egg' },
    { value: 'Fish' },
    { value: 'Goat' },
    { value: 'Hen' },
  ],
}

export const LoadingState = Template.bind({})
LoadingState.args = {
  type: 'input',
  size: 'default',
  loading: true,
  placeholder: 'A simple text field',
  options: [
    { value: 'Apple' },
    { value: 'Ball' },
    { value: 'Cat' },
    { value: 'Duck' },
    { value: 'Egg' },
    { value: 'Fish' },
    { value: 'Goat' },
    { value: 'Hen' },
  ],
}

export const SmallSize = Template.bind({})
SmallSize.args = {
  size: 'small',
  placeholder: 'A small select',
  showSearch: true,
  allowClear: true,
}

export const WithLabel = Template.bind({})
WithLabel.args = {
  type: 'input',
  size: 'default',
  placeholder: 'A textfield with an icon',
  icon: 'search',
  label: 'An example label',
}

export const Disabled = Template.bind({})
Disabled.args = {
  size: 'default',
  placeholder: 'An disabled textfield',
  disabled: true,
}

export const ReadOnly = Template.bind({})
ReadOnly.args = {
  size: 'default',
  placeholder: 'An read-only textfield',
  value: 'Read only',
  readOnly: true,
  options: [
    {
      value: 'Read only',
    },
  ],
}
