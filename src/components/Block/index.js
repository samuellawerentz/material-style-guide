import React from 'react'
import './styles.scss'
import PropTypes from 'prop-types'

/**
 * A block Column component which provides spacing options to all of its children.
 * It adds margin-bottom to each children as provided by the spacing prop.
 */
const Column = (props) => {
  return (
    <div
      className={[
        'sg contacto-block contacto-block-column',
        props.className,
        props.align ? `contacto-block-column--${props.align}` : '',
      ].join(' ')}
    >
      {props.spacing?.length
        ? React.Children.map(props.children, (child, i) => {
            return React.cloneElement(child, {
              style: { marginBottom: `${props.spacing[i % props.spacing.length]}px` },
            })
          })
        : props.children}
    </div>
  )
}
/**
 * A block element which provides spacing options like margin-bottom and margin-top.
 * This helps in accurate spacing.
 */
export const Block = ({ className = '', spacing, style, ...props }) => {
  return (
    <div
      className={['sg contacto-block', className].join(' ')}
      style={{ ...style, marginTop: spacing?.[1], marginBottom: spacing?.[0] }}
      {...props}
    />
  )
}

Block.Column = Column

Block.propTypes = {
  /**
   * Class name to be added
   */
  className: PropTypes.string,
  /**
   * The [margin-bototm, margin-top] value specified as an array
   */
  spacing: PropTypes.array,
  /**
   * CSS Style object
   */
  style: PropTypes.object,
}

Block.defaultProps = {}
