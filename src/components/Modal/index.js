import React, { useState, useEffect } from 'react'
import './styles.scss'
import PropTypes from 'prop-types'
import { Modal as MaterialModal, Backdrop, Fade } from '@material-ui/core'
import { Text } from '../Typography/index'

/**
 * Component that is used to show Modal
 */
export const Modal = ({
  className = '',
  title,
  footerButtons,
  onClose,
  visible,
  children,
  minWidth = 430,
  ...props
}) => {
  const [open, setOpen] = useState(false)
  useEffect(() => setOpen(visible), [visible])

  return (
    <MaterialModal
      className={['sg contacto-modal', className].join(' ')}
      open={open}
      onClose={(...args) => {
        onClose?.(...args) !== false && setOpen(false)
      }}
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
      {...props}
    >
      <Fade in={open}>
        <div className="contacto-modal-container" style={{ minWidth }}>
          {title && (
            <div className="contacto-modal-title">
              <Text type="title-2">{title}</Text>
            </div>
          )}
          <div className="contacto-modal-content">{children}</div>
          {footerButtons && footerButtons.length && (
            <div className="contacto-modal-footer">{footerButtons.map((button) => button)}</div>
          )}
        </div>
      </Fade>
    </MaterialModal>
  )
}

Modal.propTypes = {
  /**
   * Class to be added
   */
  className: PropTypes.string,
  /**
   * The title of the Modal
   */
  title: PropTypes.any,
  /**
   * Footer Buttons to be displayed
   */
  footerButtons: PropTypes.array,
  /**
   * Whether to show popup or not
   */
  visible: PropTypes.bool,
  /**
   * Min-width of the modal
   */
  minWidth: PropTypes.any,
  /**
   * Triggered when modal is closed
   *
   * Dev Note #1: Set the visible prop to false while this is triggered
   *
   * Dev Note #2: You can return `false` to stop the modal from closing
   */
  onClose: PropTypes.func,
  /**
   * The content of the modal
   */
  children: PropTypes.any,
}

Modal.defaultProps = {}
