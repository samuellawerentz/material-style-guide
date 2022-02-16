import React from 'react'
import { Text } from '../Typography'
import { Tooltip } from './'

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  argTypes: {
    type: {
      control: { type: 'select' },
    },
  },
}

const Template = (args) => <Tooltip {...args} />

export const Default = Template.bind({})
Default.args = {
  children: <Text>Hover Me!</Text>,
  title: 'Im the tooltip',
}
