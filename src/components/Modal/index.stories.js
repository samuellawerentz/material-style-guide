import React from 'react'
import { Modal } from './'
import { Button } from '../Button/index'
export default {
  title: 'Components/Modal',
  component: Modal,
  // argTypes: {
  //  type: {
  //    options:
  //    control: { type: 'select' },
  //  },
  // },
}

const Template = (args) => <Modal {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'Sample Modal',
  content: 'This is the content',
  visible: true,
  footerButtons: [
    <Button key="Cancel" type="secondary">
      Cancel
    </Button>,
    <Button key="save">Save</Button>,
  ],
}
