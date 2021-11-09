import React from 'react'
import { Select } from '.'
import { Icon } from '../Icon/index'
import { Text } from '../Typography/index'
import { Block } from '../Block'

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
  size: 'small',
  placeholder: 'A simple text field',
  value: 'Cat',
  onChange: (value) => console.log(value),
  options: [
    {
      value: 'This is a long option that will create ellipsis',
    },
    { value: 'Ball' },
    {
      value: 'Cat',
      label: (
        <Block display="flex" alignItems="center">
          <Block horizontalSpacing={[0, 4]}>
            <Icon name="phone" size={16} />
          </Block>
          <Block>
            <Text>Cat</Text>
          </Block>
        </Block>
      ),
    },
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

export const SmallSelectWithIconAndBackground = Template.bind({})
SmallSelectWithIconAndBackground.args = {
  type: 'background',
  size: 'small',
  placeholder: 'A simple text field',
  value: 'Cat',
  noShadow: true,
  options: [
    {
      value: 'Cat',
      label: (
        <Block display="flex" alignItems="center">
          <Block horizontalSpacing={[0, 4]}>
            <Icon name="phone" size={16} />
          </Block>
          <Block style={{ minWidth: 0 }}>
            <Text ellipsis>Cat sfadsfasfadsfaf</Text>
          </Block>
        </Block>
      ),
    },
  ],
}
