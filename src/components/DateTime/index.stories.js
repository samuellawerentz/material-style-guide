import React from 'react'
import { DateTime } from './'
import { useArgs } from '@storybook/client-api'

export default {
  title: 'Components/DateTime',
  component: DateTime,
  decorators: [(story) => <div style={{ width: '280px' }}>{story()}</div>],
  // argTypes: {
  //  type: {
  //    options:
  //    control: { type: 'select' },
  //  },
  // },
}

const Template = (args) => {
  // eslint-disable-next-line no-unused-vars
  const [{ value }, updateArgs] = useArgs()
  return (
    <DateTime
      key="time"
      {...args}
      value={value}
      onChange={(value) => updateArgs({ value: value.format() })}
    />
  )
}

export const DateAndTime = Template.bind({})
DateAndTime.args = {
  toolbarType: 'datetime',
  value: new Date(),
}

export const OnlyDate = Template.bind({})
OnlyDate.args = {
  toolbarType: 'date',
  value: new Date(),
}

export const OnlyTime = Template.bind({})
OnlyTime.args = {
  toolbarType: 'time',
  value: new Date(),
}
