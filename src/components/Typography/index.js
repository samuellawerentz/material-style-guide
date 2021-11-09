import React from 'react'
import { Typography } from '@material-ui/core'
import PropTypes from 'prop-types'
import './typography.scss'
import { TEXT_TYPES } from './TEXT_TYPES'
import { Block } from '../Block/index'

/**
 * Typography for Contacto Apps
 */
export const Text = ({
  type,
  children,
  className,
  variant,
  color,
  style,
  align,
  ellipsis,
  component,
  skeletonText,
  highlightColor,
  ...props
}) => {
  return (
    <Typography
      className={[
        'sg',
        'contacto-typography',
        type ? 'contacto-typography--' + type : '',
        variant ? 'contacto-typography--' + variant : '',
        align ? 'contacto-typography--' + align + ' contacto-typography--block' : '',
        className,
      ].join(' ')}
      // eslint-disable-next-line react/prop-types
      noWrap={props.noWrap || ellipsis}
      component={component}
      style={{
        ...style,
        backgroundColor: highlightColor ? `var(--${highlightColor})` : undefined,
        color: color ? `var(--${color})` : undefined,
      }}
      skeletonText={skeletonText}
      {...props}
    >
      {children}
    </Typography>
  )
}

const SkeletonText = (props) => (
  <Text {...props}>
    <span
      className={[
        'contacto-skeleton contacto-skeleton--text',
        props.showSkeleton ? 'skeleton--show' : '',
      ].join(' ')}
    >
      {props.children || props.skeletonText}
    </span>
  </Text>
)

const TextBlock = ({
  className = '',
  spacing,
  style,
  display,
  justifyContent,
  alignItems,
  horizontalSpacing,
  padding,
  ...props
}) => {
  const blockProps = {
    className,
    spacing,
    style,
    display,
    justifyContent,
    alignItems,
    horizontalSpacing,
    padding,
  }
  return (
    <Block {...blockProps}>
      <Text {...props}>{props.children}</Text>
    </Block>
  )
}

Text.Skeleton = SkeletonText
Text.Block = TextBlock

Text.propTypes = {
  /**
   * This indicates the type of the text that is to be used
   */
  type: PropTypes.oneOf(TEXT_TYPES.map((type) => type.name)),
  /**
   * This indicates the children of the text node
   */
  children: PropTypes.any,

  className: PropTypes.string,
  /**
   * This indicates whether the text is primary or secondary.
   */
  variant: PropTypes.oneOf(['primary', 'secondary']),
  /**
   * Color of the text. Please specify a variable name. Hex colors won't work here.
   */
  color: PropTypes.string,
  /**
   * CSS Style property
   */
  style: PropTypes.object,
  /**
   * Text align
   */
  align: PropTypes.oneOf(['left', 'right', 'center']),
  ellipsis: PropTypes.bool,
  component: PropTypes.string,
  skeletonText: PropTypes.string,
  highlightColor: PropTypes.string,
}

Text.defaultProps = {
  type: 'body',
  component: 'span',
}
