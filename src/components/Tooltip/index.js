import React from 'react'
import './styles.scss'
import PropTypes from 'prop-types'
import { Text } from '../Typography/index'
import { Tooltip as MuiTooltip } from '@material-ui/core'
/**
 * Tag component that is used to specify status of a task
 */
export const Tooltip = ({ className = '', title, ...props }) => (
  <MuiTooltip
    className={[className, 'sg contacto-tooltip-wrapper'].join(' ')}
    classes={{ tooltip: 'sg contacto-tooltip' }}
    placement="top"
    title={<Text color="white">{title}</Text>}
    {...props}
  />
)

Tooltip.propTypes = {
  /**
   * Class to be added
   */
  className: PropTypes.string,
  title: PropTypes.any,
}
