import React from 'react'
import './styles.scss'
import PropTypes from 'prop-types'
import { Text } from '../Typography/index'

export const TAG_TYPES = ['success', 'danger', 'disabled', 'progress', 'default', 'warning']
/**
 * Tag component that is used to specify status of a task
 */
export const Tag = ({ className = '', type, label, children, ...props }) => {
  return (
    <span className={['sg contacto-tag', className, `contacto-tag--${type}`].join(' ')} {...props}>
      <Text type={type === 'default' ? 'caption' : 'caption-capital'}>{label || children}</Text>
    </span>
  )
}

Tag.propTypes = {
  /**
   * Class to be added
   */
  className: PropTypes.string,
  /**
   * The type of tag
   */
  type: PropTypes.oneOf(TAG_TYPES),
  /**
   * The text to be displayed
   */
  label: PropTypes.string,
  children: PropTypes.any,
}

Tag.defaultProps = {
  type: 'default',
}
