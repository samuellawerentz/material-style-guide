import React, { useState } from 'react'
import './styles.scss'
import PropTypes from 'prop-types'
import { Icon } from '../Icon/index'
import { Text } from '../Typography/index'

/**
 * Component that is used to show note messages on the UI
 */
export const Note = ({ className = '', iconName, iconSvg, message, hasLongText, ...props }) => {
  const [hasCollapsed, setHasCollapsed] = useState(false)
  const handleCollapse = () => {
    setHasCollapsed(!hasCollapsed)
  }
  return (
    <div
      className={['sg contacto-note', `${hasCollapsed ? 'expand' : ''}`, className].join(' ')}
      {...props}
    >
      <div className="contacto-note-icon">
        <Icon name={iconName} size={20} color="secondary-color" />
      </div>
      <div className="contacto-note-message">
        <Text ellipsis={!hasCollapsed && hasLongText} type="caption">
          {message}
        </Text>
      </div>
      {hasLongText ? (
        <div className="contacto-note-collapse-box expand-icon" onClick={handleCollapse}>
          <Icon name={` ${hasCollapsed ? 'expand_less' : 'expand_more'}`} size={20} />
        </div>
      ) : null}
    </div>
  )
}

Note.propTypes = {
  /**
   * Class to be added
   */
  className: PropTypes.string,
  /**
   * The note's iconName will be used for icon
   */
  iconName: PropTypes.string,
  /**
   * The note custom iconSvg will be used for icon
   */
  iconSvg: PropTypes.any,
  /**
   * The note message to be displayed
   */
  message: PropTypes.string,
  /**
   * The note hasLongText will allow to handle long text with collapse toggle
   */
  hasLongText: PropTypes.bool,
}

Note.defaultProps = {}
