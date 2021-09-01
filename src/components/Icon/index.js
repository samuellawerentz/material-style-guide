import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

const Loading = ({ size = 24 }) => {
  return (
    <span className="sg contacto-loader" style={{ width: size }}>
      <svg viewBox="0 0 1024 1024" focusable="false">
        <path
          d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"
          fill="currentColor"
        />
      </svg>
    </span>
  )
}
/**
 * Google Icons that are used in the application.
 *
 * Please visit https://fonts.google.com/icons to find different icons and their names
 */
export const Icon = ({ className = '', name, size, color, style, hoverColor, ...props }) => {
  const [iconColor, setIconColor] = useState(color ? `var(--${color})` : undefined)
  let iconEventProps = {}
  if (color && hoverColor) {
    iconEventProps = {
      onMouseEnter: () => setIconColor(`var(--${hoverColor})`),
      onMouseLeave: () => setIconColor(`var(--${color})`),
    }
  }
  return (
    <span
      className={['sg contacto-icon', 'material-icons-round', className].join(' ')}
      style={{
        color: iconColor,
        fontSize: size,
        cursor: hoverColor && 'pointer',
        overflow: 'hidden',
        maxHeight: size,
        maxWidth: size,
        lineHeight: 1,
        ...style,
      }}
      {...props}
      {...iconEventProps}
    >
      {name}
    </span>
  )
}

Icon.Loading = Loading

Icon.propTypes = {
  /**
   * Class to be added
   */
  className: PropTypes.string,
  /**
   * Name of the icon taken from https://fonts.google.com/icons
   */
  name: PropTypes.string,
  /**
   * Size of the icon in pixels. If its 24x24 enter 24.
   */
  size: PropTypes.number,
  /**
   * Color is usuall inherited from the parent.
   * If you want specific color, enter the variable name of the color.
   *
   * The variable names can be found here -
   * https://samuellawerentz.github.io/style-guide/?path=/docs/colors-color-palette--page
   */
  color: PropTypes.string,
  /**
   * Color to be applied when the icon is hovered. It should be a variable name.
   */
  hoverColor: PropTypes.string,
  style: PropTypes.object,
}

Icon.defaultProps = {
  name: 'emoji_emotions',
}
