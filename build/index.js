'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var PropTypes = require('prop-types');
var core = require('@material-ui/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$6 = ".sg.contacto-icon {\n  user-select: none;\n  display: inline-block; }\n\n.sg.contacto-loader {\n  border-radius: 50%;\n  position: relative;\n  display: inline-block;\n  line-height: 0;\n  animation: rotate-loading 1s infinite linear; }\n\n@keyframes rotate-loading {\n  to {\n    transform: rotate(360deg); } }\n";
styleInject(css_248z$6);

var _excluded$6 = ["className", "name", "size", "color", "style", "hoverColor"];

var Loading = function Loading(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size;
  return /*#__PURE__*/React__default['default'].createElement("span", {
    className: "sg contacto-loader",
    style: {
      width: size
    }
  }, /*#__PURE__*/React__default['default'].createElement("svg", {
    viewBox: "0 0 1024 1024",
    focusable: "false"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z",
    fill: "currentColor"
  })));
};
/**
 * Google Icons that are used in the application.
 *
 * Please visit https://fonts.google.com/icons to find different icons and their names
 */


var Icon = function Icon(_ref2) {
  var _ref2$className = _ref2.className,
      className = _ref2$className === void 0 ? '' : _ref2$className,
      name = _ref2.name,
      size = _ref2.size,
      color = _ref2.color,
      style = _ref2.style,
      hoverColor = _ref2.hoverColor,
      props = _objectWithoutProperties(_ref2, _excluded$6);

  var _useState = React.useState(color ? "var(--".concat(color, ")") : undefined),
      _useState2 = _slicedToArray(_useState, 2),
      iconColor = _useState2[0],
      setIconColor = _useState2[1];

  var iconEventProps = {};

  if (color && hoverColor) {
    iconEventProps = {
      onMouseEnter: function onMouseEnter() {
        return setIconColor("var(--".concat(hoverColor, ")"));
      },
      onMouseLeave: function onMouseLeave() {
        return setIconColor("var(--".concat(color, ")"));
      }
    };
  }

  return /*#__PURE__*/React__default['default'].createElement("span", _extends({
    className: ['sg contacto-icon', 'material-icons-round', className].join(' '),
    style: _objectSpread2({
      color: iconColor,
      fontSize: size,
      cursor: hoverColor && 'pointer',
      overflow: 'hidden',
      maxHeight: size,
      maxWidth: size,
      lineHeight: 1
    }, style)
  }, props, iconEventProps), name);
};
Icon.Loading = Loading;
Icon.propTypes = {
  /**
   * Class to be added
   */
  className: PropTypes__default['default'].string,

  /**
   * Name of the icon taken from https://fonts.google.com/icons
   */
  name: PropTypes__default['default'].string,

  /**
   * Size of the icon in pixels. If its 24x24 enter 24.
   */
  size: PropTypes__default['default'].number,

  /**
   * Color is usuall inherited from the parent.
   * If you want specific color, enter the variable name of the color.
   *
   * The variable names can be found here -
   * https://samuellawerentz.github.io/style-guide/?path=/docs/colors-color-palette--page
   */
  color: PropTypes__default['default'].string,

  /**
   * Color to be applied when the icon is hovered. It should be a variable name.
   */
  hoverColor: PropTypes__default['default'].string,
  style: PropTypes__default['default'].object
};
Icon.defaultProps = {
  name: 'emoji_emotions'
};

var css_248z$5 = ".sg.cnto-btn.contacto-button {\n  min-width: 60px;\n  padding: 8px 16px;\n  height: 36px;\n  line-height: 18px;\n  border: 0;\n  border-radius: 0;\n  display: flex;\n  align-items: center;\n  text-transform: none;\n  font-family: Poppins, sans-serif;\n  font-weight: 400; }\n  .sg.cnto-btn.contacto-button--primary {\n    background-color: var(--primary-color);\n    color: var(--white); }\n    .sg.cnto-btn.contacto-button--primary:hover {\n      color: var(--white);\n      background-color: var(--primary-color-5); }\n    .sg.cnto-btn.contacto-button--primary[disabled], .sg.cnto-btn.contacto-button--primary[disabled]:hover {\n      color: var(--white);\n      background-color: var(--primary-color-2); }\n  .sg.cnto-btn.contacto-button--secondary {\n    color: var(--primary-color);\n    border: 1px solid var(--primary-color); }\n    .sg.cnto-btn.contacto-button--secondary:hover {\n      color: var(--primary-color);\n      background-color: var(--dark-bg);\n      border: 1px solid var(--primary-color); }\n    .sg.cnto-btn.contacto-button--secondary[disabled], .sg.cnto-btn.contacto-button--secondary[disabled]:hover {\n      color: var(--primary-color-2);\n      background-color: var(--white);\n      border: 1px solid var(--primary-color-2); }\n  .sg.cnto-btn.contacto-button--secondary-gray {\n    border: 1px solid var(--border-color-1); }\n    .sg.cnto-btn.contacto-button--secondary-gray:hover {\n      background-color: var(--dark-bg);\n      border: 1px solid var(--primary-color); }\n  .sg.cnto-btn.contacto-button--danger-primary {\n    color: var(--white);\n    background-color: var(--danger-color); }\n    .sg.cnto-btn.contacto-button--danger-primary:hover {\n      color: var(--white);\n      background-color: var(--danger-color-5); }\n    .sg.cnto-btn.contacto-button--danger-primary[disabled], .sg.cnto-btn.contacto-button--danger-primary[disabled]:hover {\n      color: var(--white);\n      background-color: var(--danger-color-2); }\n  .sg.cnto-btn.contacto-button--danger-secondary {\n    color: var(--danger-color);\n    border: 1px solid var(--danger-color); }\n    .sg.cnto-btn.contacto-button--danger-secondary:hover {\n      color: var(--danger-color);\n      background-color: var(--danger-color-4);\n      border: 1px solid var(--danger-color); }\n    .sg.cnto-btn.contacto-button--danger-secondary[disabled], .sg.cnto-btn.contacto-button--danger-secondary[disabled]:hover {\n      color: var(--danger-color-2);\n      border: 1px solid var(--danger-color-2);\n      background-color: var(--white); }\n  .sg.cnto-btn.contacto-button--link {\n    color: var(--primary-color);\n    font-weight: 600; }\n    .sg.cnto-btn.contacto-button--link:hover {\n      color: var(--primary-color-5); }\n    .sg.cnto-btn.contacto-button--link[disabled], .sg.cnto-btn.contacto-button--link[disabled]:hover {\n      color: var(--primary-color-2);\n      background-color: var(--white); }\n  .sg.cnto-btn.contacto-button[class*=\"link\"]:hover {\n    background-color: transparent; }\n  .sg.cnto-btn.contacto-button--link-danger {\n    color: var(--danger-color);\n    font-weight: 600; }\n    .sg.cnto-btn.contacto-button--link-danger:hover {\n      color: var(--danger-color-5); }\n    .sg.cnto-btn.contacto-button--link-danger[disabled], .sg.cnto-btn.contacto-button--link-danger[disabled]:hover {\n      color: var(--danger-color-2);\n      background-color: var(--white); }\n  .sg.cnto-btn.contacto-button--small {\n    height: 28px;\n    padding: 4px 8px; }\n  .sg.cnto-btn.contacto-button--large {\n    height: 44px;\n    padding: 12px 16px;\n    font-size: 16px; }\n  .sg.cnto-btn.contacto-button--extra-large {\n    height: 56px;\n    padding: 16px; }\n  .sg.cnto-btn.contacto-button--full-width {\n    width: 100%;\n    justify-content: center; }\n  .sg.cnto-btn.contacto-button--center {\n    justify-content: center; }\n  .sg.cnto-btn.contacto-button--left {\n    justify-content: flex-start; }\n  .sg.cnto-btn.contacto-button--with-icon {\n    padding-left: 8px; }\n  .sg.cnto-btn.contacto-button--table-action-link {\n    color: var(--secondary-text-color);\n    padding: 8px 0px;\n    padding-left: 0;\n    min-width: auto; }\n    .sg.cnto-btn.contacto-button--table-action-link:hover {\n      color: var(--primary-color);\n      background-color: #fff; }\n  .sg.cnto-btn.contacto-button .contacto-icon {\n    margin-right: 8px; }\n  .sg.cnto-btn.contacto-button--only-icon {\n    padding: 8px;\n    min-width: auto;\n    width: auto; }\n    .sg.cnto-btn.contacto-button--only-icon .contacto-icon {\n      margin-right: 0; }\n      .sg.cnto-btn.contacto-button--only-icon .contacto-icon.small {\n        font-size: 20px; }\n  .sg.cnto-btn.contacto-button .MuiButton-startIcon {\n    margin: 0; }\n    .sg.cnto-btn.contacto-button .MuiButton-startIcon .sg.contacto-loader {\n      margin-right: 8px; }\n";
styleInject(css_248z$5);

var _excluded$5 = ["type", "size", "label", "icon", "fullWidth", "align", "className", "loading", "disabled", "children"];
var BUTTON_TYPES = ['primary', 'secondary', 'secondary-gray', 'danger-primary', 'danger-secondary', 'link', 'link-danger', 'table-action-link'];
var getButtonClassName = function getButtonClassName(type) {
  var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'default';
  var icon = arguments.length > 2 ? arguments[2] : undefined;
  var className = arguments.length > 3 ? arguments[3] : undefined;
  var onlyIcon = arguments.length > 4 ? arguments[4] : undefined;
  var fullWidth = arguments.length > 5 ? arguments[5] : undefined;
  var align = arguments.length > 6 ? arguments[6] : undefined;
  return ['sg', 'cnto-btn', 'contacto-button', type ? "contacto-button--".concat(type) : '', size ? "contacto-button--".concat(size) : '', icon ? "contacto-button--with-icon" : '', onlyIcon ? 'contacto-button--only-icon' : '', fullWidth ? 'contacto-button--full-width' : '', align ? "contacto-button--".concat(align) : '', className].join(' ');
};
/**
 * Primary UI component for user interaction
 */

var Button = function Button(_ref) {
  var type = _ref.type,
      size = _ref.size,
      label = _ref.label,
      icon = _ref.icon,
      fullWidth = _ref.fullWidth,
      align = _ref.align,
      className = _ref.className,
      loading = _ref.loading,
      disabled = _ref.disabled,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded$5);

  return /*#__PURE__*/React__default['default'].createElement(core.Button, _extends({
    className: getButtonClassName(type, size, icon, className, !(label || children) && icon, fullWidth, align),
    startIcon: loading ? /*#__PURE__*/React__default['default'].createElement(Icon.Loading, {
      size: 20
    }) : icon ? /*#__PURE__*/React__default['default'].createElement(Icon, {
      name: icon,
      className: size
    }) : null,
    disabled: loading || disabled
  }, props), label || children);
};
Button.propTypes = {
  /**
   * This indicates what type of button should be rendered
   */
  type: PropTypes__default['default'].oneOf(BUTTON_TYPES),
  className: PropTypes__default['default'].string,

  /**
   * How large should the button be?
   */
  size: PropTypes__default['default'].oneOf(['small', 'default', 'large', 'extra-large']),

  /**
   * Button Text
   */
  label: PropTypes__default['default'].string,

  /**
   * Material UI icon name taken from https://fonts.google.com/icons
   */
  icon: PropTypes__default['default'].string,

  /**
   * Disable the button
   */
  disabled: PropTypes__default['default'].bool,

  /**
   * Set to true, if the button needs to expand to full width of the container
   */
  fullWidth: PropTypes__default['default'].bool,

  /**
   * How to align the text inside the button. Default is center.
   */
  align: PropTypes__default['default'].oneOf(['left', 'right', 'center']),
  children: PropTypes__default['default'].any,
  loading: PropTypes__default['default'].bool
};
Button.defaultProps = {
  size: 'default',
  type: 'primary'
};

var css_248z$4 = ".caption, .sg.contacto-typography--caption, .sg.contacto-typography--caption-bold, .sg.contacto-typography--caption-italic, .sg.contacto-typography--caption-capital {\n  font-size: 12px;\n  line-height: 18px; }\n\n.sg.contacto-typography {\n  color: var(--primary-text-color);\n  font-family: 'Poppins', sans-serif;\n  letter-spacing: normal; }\n  .sg.contacto-typography--large-title {\n    font-size: 26px;\n    line-height: 38px;\n    font-weight: 400; }\n  .sg.contacto-typography--title-1 {\n    font-size: 22px;\n    line-height: 32px;\n    font-weight: 400; }\n  .sg.contacto-typography--title-2 {\n    font-size: 18px;\n    line-height: 26px;\n    font-weight: 400; }\n  .sg.contacto-typography--title-3 {\n    font-size: 16px;\n    line-height: 24px;\n    font-weight: 400; }\n  .sg.contacto-typography--headline {\n    font-size: 14px;\n    line-height: 20px;\n    font-weight: 600; }\n  .sg.contacto-typography--subtitle {\n    font-size: 12px;\n    line-height: 18px;\n    font-weight: 500; }\n  .sg.contacto-typography--body {\n    font-size: 14px;\n    line-height: 20px;\n    font-weight: 400; }\n  .sg.contacto-typography--caption {\n    font-weight: 400; }\n  .sg.contacto-typography--caption-bold {\n    font-weight: 600; }\n  .sg.contacto-typography--caption-italic {\n    font-style: italic; }\n  .sg.contacto-typography--caption-capital {\n    text-transform: uppercase;\n    font-weight: 600; }\n  .sg.contacto-typography--primary {\n    color: var(--primary-color); }\n  .sg.contacto-typography--secondary {\n    color: var(--secondary-text-color); }\n  .sg.contacto-typography[class*=\"title\"], .sg.contacto-typography--block {\n    display: block; }\n  .sg.contacto-typography--left {\n    text-align: left; }\n  .sg.contacto-typography--right {\n    text-align: right; }\n  .sg.contacto-typography--center {\n    text-align: center; }\n";
styleInject(css_248z$4);

var TEXT_TYPES = [{
  name: 'large-title',
  fontSize: '26px',
  lineHeight: '38px',
  fontWeight: 400
}, {
  name: 'title-1',
  fontSize: '22px',
  lineHeight: '32px',
  fontWeight: 400
}, {
  name: 'title-2',
  fontSize: '18px',
  lineHeight: '26px',
  fontWeight: 400
}, {
  name: 'title-3',
  fontSize: '16px',
  lineHeight: '24px',
  fontWeight: 400
}, {
  name: 'headline',
  fontSize: '14px',
  lineHeight: '20px',
  fontWeight: 600
}, {
  name: 'subtitle',
  fontSize: '12px',
  lineHeight: '18px',
  fontWeight: 500
}, {
  name: 'body',
  fontSize: '14px',
  lineHeight: '20px',
  fontWeight: 400
}, {
  name: 'caption',
  fontSize: '12px',
  lineHeight: '18px',
  fontWeight: 400
}, {
  name: 'caption-bold',
  fontSize: '12px',
  lineHeight: '18px',
  fontWeight: 600
}, {
  name: 'caption-italic',
  fontSize: '12px',
  lineHeight: '18px',
  fontWeight: 400
}, {
  name: 'caption-capital',
  fontSize: '12px',
  lineHeight: '18px',
  fontWeight: 600
}];

var _excluded$4 = ["type", "children", "className", "variant", "color", "style", "align", "ellipsis", "component"];
/**
 * Typography for Contacto Apps
 */

var Text = function Text(_ref) {
  var type = _ref.type,
      children = _ref.children,
      className = _ref.className,
      variant = _ref.variant,
      color = _ref.color,
      style = _ref.style,
      align = _ref.align,
      ellipsis = _ref.ellipsis,
      component = _ref.component,
      props = _objectWithoutProperties(_ref, _excluded$4);

  return /*#__PURE__*/React__default['default'].createElement(core.Typography, _extends({
    className: ['sg', 'contacto-typography', type ? 'contacto-typography--' + type : '', variant ? 'contacto-typography--' + variant : '', align ? 'contacto-typography--' + align + ' contacto-typography--block' : '', className].join(' ') // eslint-disable-next-line react/prop-types
    ,
    noWrap: props.noWrap || ellipsis,
    component: component,
    style: _objectSpread2(_objectSpread2({}, style), {}, {
      color: color ? "var(--".concat(color, ")") : undefined
    })
  }, props), children);
};
Text.propTypes = {
  /**
   * This indicates the type of the text that is to be used
   */
  type: PropTypes__default['default'].oneOf(TEXT_TYPES.map(function (type) {
    return type.name;
  })),

  /**
   * This indicates the children of the text node
   */
  children: PropTypes__default['default'].any,
  className: PropTypes__default['default'].string,

  /**
   * This indicates whether the text is primary or secondary.
   */
  variant: PropTypes__default['default'].oneOf(['primary', 'secondary']),

  /**
   * Color of the text. Please specify a variable name. Hex colors won't work here.
   */
  color: PropTypes__default['default'].string,

  /**
   * CSS Style property
   */
  style: PropTypes__default['default'].object,

  /**
   * Text align
   */
  align: PropTypes__default['default'].oneOf(['left', 'right', 'center']),
  ellipsis: PropTypes__default['default'].bool,
  component: PropTypes__default['default'].string
};
Text.defaultProps = {
  type: 'body',
  component: 'span'
};

var css_248z$3 = ".sg.contacto-input-wrapper .contacto-input {\n  --height: 36px;\n  width: 100%; }\n  .sg.contacto-input-wrapper .contacto-input .MuiInputBase-input {\n    padding: 0;\n    height: calc(var(--height) - 2px); }\n  .sg.contacto-input-wrapper .contacto-input .MuiInputBase-root {\n    font-family: Poppins, sans-serif;\n    font-size: 14px;\n    letter-spacing: normal;\n    border-radius: 0;\n    box-shadow: 0px 0px 8px rgba(106, 110, 128, 0.15);\n    border: 1px solid var(--border-color-1);\n    height: var(--height);\n    padding-left: 12px;\n    width: 100%; }\n    .sg.contacto-input-wrapper .contacto-input .MuiInputBase-root:hover, .sg.contacto-input-wrapper .contacto-input .MuiInputBase-root:active, .sg.contacto-input-wrapper .contacto-input .MuiInputBase-root:focus, .sg.contacto-input-wrapper .contacto-input .MuiInputBase-root[class*='focused'] {\n      border: 1px solid var(--primary-color); }\n    .sg.contacto-input-wrapper .contacto-input .MuiInputBase-root[class*='focused'] .contacto-icon {\n      color: var(--primary-color); }\n  .sg.contacto-input-wrapper .contacto-input::placeholder {\n    color: var(--gray-2); }\n  .sg.contacto-input-wrapper .contacto-input > [class*='disabled'],\n  .sg.contacto-input-wrapper .contacto-input > [class*='disabled']:hover {\n    background-color: var(--gray-6);\n    border: 1px solid var(--border-color-1);\n    box-shadow: none; }\n  .sg.contacto-input-wrapper .contacto-input--readonly:not(.increase-specificity),\n  .sg.contacto-input-wrapper .contacto-input--readonly:not(.increase-specificity) input {\n    box-shadow: none;\n    background-color: var(--gray-6);\n    color: var(--primary-text-color); }\n  .sg.contacto-input-wrapper .contacto-input.contacto-input--small {\n    --height: 28px; }\n  .sg.contacto-input-wrapper .contacto-input.contacto-input--large {\n    --height: 44px; }\n    .sg.contacto-input-wrapper .contacto-input.contacto-input--large, .sg.contacto-input-wrapper .contacto-input.contacto-input--large::placeholder {\n      font-size: 16px; }\n  .sg.contacto-input-wrapper .contacto-input.contacto-input--search-box .MuiInputBase-root {\n    box-shadow: none;\n    padding-left: 8px; }\n  .sg.contacto-input-wrapper .contacto-input.contacto-input--no-shadow .MuiInputBase-root {\n    box-shadow: none; }\n\n.sg.contacto-input-wrapper .contacto-input-label-wrapper {\n  margin-bottom: 4px;\n  line-height: 0; }\n\n.sg.contacto-input-wrapper .contacto-icon--input-prefix {\n  color: var(--gray-1);\n  font-size: 20px;\n  margin-right: 4px; }\n";
styleInject(css_248z$3);

var _excluded$3 = ["type", "label", "icon", "size", "disabled", "placeholder", "readOnly", "password", "noShadow", "className"];
var TEXTFIELD_TYPES = ['input', 'search-box', 'no-shadow'];
/**
 * This is used to get text input from the user
 */

var TextField = /*#__PURE__*/React__default['default'].forwardRef(function TextField(_ref, ref) {
  var type = _ref.type,
      label = _ref.label,
      icon = _ref.icon,
      size = _ref.size,
      disabled = _ref.disabled,
      placeholder = _ref.placeholder,
      readOnly = _ref.readOnly;
      _ref.password;
      var noShadow = _ref.noShadow,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      props = _objectWithoutProperties(_ref, _excluded$3);

  icon = type === 'search-box' ? 'search' : icon;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "sg contacto-input-wrapper"
  }, label && /*#__PURE__*/React__default['default'].createElement("div", {
    className: "contacto-input-label-wrapper"
  }, /*#__PURE__*/React__default['default'].createElement(Text, {
    type: "caption-bold"
  }, label)), /*#__PURE__*/React__default['default'].createElement(core.TextField, _extends({
    ref: ref,
    className: ['contacto-input', 'contacto-input--' + type, 'contacto-input--' + size, noShadow ? 'contacto-input--no-shadow' : '', readOnly ? 'contacto-input--readonly' : '', className].join(' '),
    InputProps: {
      disableUnderline: true,
      fullWidth: true,
      startAdornment: icon ? /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement("span", {
        className: "material-icons-round contacto-icon contacto-icon--input-prefix"
      }, icon)) : null
    },
    disabled: readOnly || disabled,
    placeholder: placeholder
  }, props)));
});
TextField.propTypes = {
  /**
   * This indicates the type of textfield
   */
  type: PropTypes__default['default'].oneOf(TEXTFIELD_TYPES),
  className: PropTypes__default['default'].string,

  /**
   * How large should the textfield be?
   */
  size: PropTypes__default['default'].oneOf(['small', 'default', 'large']),

  /**
   * Placeholder Text
   */
  placeholder: PropTypes__default['default'].string,

  /**
   * Label for the Input
   */
  label: PropTypes__default['default'].string,

  /**
   * Material UI icon name taken from https://fonts.google.com/icons
   */
  icon: PropTypes__default['default'].string,

  /**
   * Disable the textfield
   */
  disabled: PropTypes__default['default'].bool,

  /**
   * Show the value as readonly
   */
  readOnly: PropTypes__default['default'].bool,

  /**
   * Set to true, if you don't want the shadow.
   */
  noShadow: PropTypes__default['default'].bool,

  /**
   * Is it a password field?
   */
  password: PropTypes__default['default'].bool
};
TextField.defaultProps = {
  size: 'default',
  type: 'input'
};

var css_248z$2 = ".sg.contacto-select-wrapper {\n  position: relative;\n  --height: 36px; }\n  .sg.contacto-select-wrapper .contacto-select {\n    border-radius: 0;\n    box-shadow: 0px 0px 8px rgba(106, 110, 128, 0.15);\n    border: 1px solid var(--border-color-1);\n    height: var(--height);\n    width: 100%; }\n    .sg.contacto-select-wrapper .contacto-select--no-shadow {\n      box-shadow: none; }\n    .sg.contacto-select-wrapper .contacto-select .MuiSelect-outlined.MuiSelect-outlined {\n      height: calc(var(--height) - 2px);\n      padding: 0 12px;\n      line-height: calc(var(--height) - 2px);\n      background-color: #fff;\n      padding-right: 28px;\n      display: flex;\n      align-items: center; }\n      .sg.contacto-select-wrapper .contacto-select .MuiSelect-outlined.MuiSelect-outlined.Mui-disabled {\n        background-color: var(--gray-6); }\n    .sg.contacto-select-wrapper .contacto-select fieldset {\n      display: none; }\n    .sg.contacto-select-wrapper .contacto-select:hover:not(.Mui-disabled), .sg.contacto-select-wrapper .contacto-select:active:not(.Mui-disabled), .sg.contacto-select-wrapper .contacto-select:focus:not(.Mui-disabled), .sg.contacto-select-wrapper .contacto-select[class*='focused']:not(.Mui-disabled) {\n      box-shadow: none;\n      border: 1px solid var(--primary-color); }\n    .sg.contacto-select-wrapper .contacto-select .contacto-select-caret {\n      position: absolute;\n      right: 8px;\n      cursor: pointer;\n      pointer-events: none;\n      color: var(--gray-3); }\n    .sg.contacto-select-wrapper .contacto-select[class*='focused'] .contacto-icon {\n      color: var(--primary-color); }\n    .sg.contacto-select-wrapper .contacto-select[class*=\"disabled\"], .sg.contacto-select-wrapper .contacto-select[disabled]:hover {\n      background-color: var(--gray-6);\n      border: 1px solid var(--gray-6);\n      box-shadow: none; }\n    .sg.contacto-select-wrapper .contacto-select--readonly:not(.increase-specificity) {\n      box-shadow: none;\n      background-color: var(--gray-6);\n      color: var(--primary-text-color); }\n  .sg.contacto-select-wrapper .contacto-select-placeholder {\n    position: absolute;\n    bottom: 0;\n    transform: translateX(12px);\n    z-index: 1;\n    height: var(--height);\n    line-height: var(--height);\n    display: inline-block;\n    pointer-events: none; }\n  .sg.contacto-select-wrapper .contacto-select-label-wrapper {\n    margin-bottom: 4px;\n    line-height: 0; }\n  .sg.contacto-select-wrapper.contacto-select--small {\n    --height: 28px; }\n  .sg.contacto-select-wrapper .sg.contacto-loader {\n    position: absolute;\n    right: 8px; }\n\n.sg.contacto-select-listbox {\n  padding: 0;\n  border-radius: 0;\n  max-height: 238px; }\n  .sg.contacto-select-listbox .MuiListItem-root {\n    border-bottom: 1px solid var(--border-color); }\n    .sg.contacto-select-listbox .MuiListItem-root:hover, .sg.contacto-select-listbox .MuiListItem-root.Mui-selected {\n      background-color: var(--background-highlight-color); }\n      .sg.contacto-select-listbox .MuiListItem-root:hover .selected-item, .sg.contacto-select-listbox .MuiListItem-root.Mui-selected .selected-item {\n        font-weight: 600;\n        color: var(--primary-color); }\n  .sg.contacto-select-listbox .select-item {\n    line-height: 33px; }\n    .sg.contacto-select-listbox .select-item-no-data {\n      padding: 0 12px; }\n  .sg.contacto-select-listbox .MuiList-padding {\n    padding: 4px 0; }\n";
styleInject(css_248z$2);

var _excluded$2 = ["label", "icon", "disabled", "placeholder", "readOnly", "className", "dropdownWidth", "dropdownClassName", "listHeight", "size", "onIconClick", "loading", "noShadow", "options", "children", "onChange", "renderValue", "value"];
/**
 * This is used to select a value from the list of options
 */

var Select = /*#__PURE__*/React__default['default'].forwardRef(function Select(_ref, ref) {
  var label = _ref.label;
      _ref.icon;
      var disabled = _ref.disabled,
      placeholder = _ref.placeholder,
      readOnly = _ref.readOnly,
      className = _ref.className,
      dropdownWidth = _ref.dropdownWidth,
      dropdownClassName = _ref.dropdownClassName;
      _ref.listHeight;
      var size = _ref.size,
      onIconClick = _ref.onIconClick,
      loading = _ref.loading,
      noShadow = _ref.noShadow,
      options = _ref.options,
      children = _ref.children,
      onChange = _ref.onChange,
      renderValue = _ref.renderValue,
      value = _ref.value,
      props = _objectWithoutProperties(_ref, _excluded$2);

  var _useState = React.useState(value || ''),
      _useState2 = _slicedToArray(_useState, 2),
      selectedValue = _useState2[0],
      setSelectedValue = _useState2[1];

  var wrapperRef = React.useRef(null);

  var handleChange = function handleChange(e) {
    setSelectedValue(e.target.value);
    onChange === null || onChange === void 0 ? void 0 : onChange(e.target.value);
  };

  React.useEffect(function () {
    return setSelectedValue(value || '');
  }, [value]);

  var handleRenderValue = function handleRenderValue(value) {
    var selectedOption = options.find(function (option) {
      return option.value === value;
    });
    return renderValue(value, selectedOption);
  };

  var generatedOptions = options.map(function (option) {
    return /*#__PURE__*/React__default['default'].createElement(core.MenuItem, {
      value: option.value,
      key: option.value
    }, /*#__PURE__*/React__default['default'].createElement(Text, {
      className: selectedValue === option.value ? 'select-item selected-item' : 'select-item',
      align: "left",
      ellipsis: true
    }, option.label ? option.label : option.value));
  });
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: ['sg contacto-select-wrapper ', "contacto-select--".concat(size), className].join(' '),
    ref: wrapperRef
  }, label && /*#__PURE__*/React__default['default'].createElement("div", {
    className: "contacto-select-label-wrapper"
  }, /*#__PURE__*/React__default['default'].createElement(Text, {
    type: "caption-bold"
  }, label)), placeholder && !selectedValue && /*#__PURE__*/React__default['default'].createElement(Text, {
    color: "gray-2",
    className: "contacto-select-placeholder"
  }, placeholder), /*#__PURE__*/React__default['default'].createElement(core.Select, _extends({
    className: ['contacto-select', readOnly ? 'contacto-select--readonly' : '', noShadow ? 'contacto-select--no-shadow' : ''].join(' '),
    ref: ref,
    onChange: handleChange,
    renderValue: renderValue ? handleRenderValue : undefined,
    MenuProps: {
      classes: {
        paper: "sg contacto-select-listbox ".concat(dropdownClassName || '')
      },
      anchorEl: function anchorEl() {
        return wrapperRef.current;
      },
      TransitionProps: {
        onEnter: function onEnter(element) {
          element.style.width = dropdownWidth || wrapperRef.current.offsetWidth + 'px';
        }
      },
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'left'
      },
      getContentAnchorEl: null
    },
    value: selectedValue,
    variant: "outlined",
    disabled: readOnly || disabled,
    IconComponent: function IconComponent() {
      return loading ? /*#__PURE__*/React__default['default'].createElement(Icon.Loading, null) : /*#__PURE__*/React__default['default'].createElement(Icon, {
        name: "expand_more",
        onClick: onIconClick,
        className: "contacto-select-caret",
        size: 20
      });
    }
  }, props), children || generatedOptions.length ? generatedOptions : /*#__PURE__*/React__default['default'].createElement("option", {
    disabled: true,
    className: "select-item select-item-no-data"
  }, ' ', "No Data")));
});
Select.propTypes = {
  /**
   * How large should the textfield be?
   */
  size: PropTypes__default['default'].oneOf(['small', 'default', 'large']),

  /**
   * Placeholder Text
   */
  placeholder: PropTypes__default['default'].string,

  /**
   * Label for the Input
   */
  label: PropTypes__default['default'].string,

  /**
   * Material UI icon name taken from https://fonts.google.com/icons
   */
  icon: PropTypes__default['default'].string,

  /**
   * Disable the textfield
   */
  disabled: PropTypes__default['default'].bool,

  /**
   * Show the value as readonly
   */
  readOnly: PropTypes__default['default'].bool,

  /**
   * Class name to be added
   */
  className: PropTypes__default['default'].string,

  /**
   * Class name to be added for the list-box
   */
  dropdownClassName: PropTypes__default['default'].string,

  /**
   * Height of the dropdown listbox
   */
  listHeight: PropTypes__default['default'].number,

  /**
   * Show the loader
   */
  loading: PropTypes__default['default'].bool,

  /**
   * Click handler for the icon
   */
  onIconClick: PropTypes__default['default'].func,

  /**
   * Set it to true to remove shadow
   */
  noShadow: PropTypes__default['default'].bool,

  /**
   * Options
   */
  options: PropTypes__default['default'].any,
  children: PropTypes__default['default'].any,
  onChange: PropTypes__default['default'].func,
  renderValue: PropTypes__default['default'].func,
  value: PropTypes__default['default'].any,
  dropdownWidth: PropTypes__default['default'].any
};
Select.defaultProps = {
  size: 'default',
  options: []
};

var css_248z$1 = ".sg.contacto-block {\n  display: block;\n  line-height: 1; }\n  .sg.contacto-block.contacto-block-column {\n    display: flex;\n    flex-flow: column nowrap;\n    line-height: 1; }\n    .sg.contacto-block.contacto-block-column--start {\n      align-items: flex-start; }\n    .sg.contacto-block.contacto-block-column--end {\n      align-items: flex-end; }\n";
styleInject(css_248z$1);

var _excluded$1 = ["className", "spacing", "style"];

var Column = function Column(props) {
  var columnRef = React.useRef(null);
  React.useEffect(function () {
    var _props$spacing, _columnRef$current;

    if ((_props$spacing = props.spacing) !== null && _props$spacing !== void 0 && _props$spacing.length && (_columnRef$current = columnRef.current) !== null && _columnRef$current !== void 0 && _columnRef$current.children.length) {
      var _columnRef$current2;

      Array.from((_columnRef$current2 = columnRef.current) === null || _columnRef$current2 === void 0 ? void 0 : _columnRef$current2.children).forEach(function (child, i) {
        return child.style.marginBottom = "".concat(props.spacing[i % props.spacing.length], "px");
      });
    }
  }, [props.spacing]);
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: ['sg contacto-block contacto-block-column', props.className, props.align ? "contacto-block-column--".concat(props.align) : ''].join(' '),
    ref: columnRef
  }, props.children);
};
/**
 * A block element which provides spacing options like margin-bottom and margin-top.
 * This helps in accurate spacing.
 */


var Block = function Block(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      spacing = _ref.spacing,
      style = _ref.style,
      props = _objectWithoutProperties(_ref, _excluded$1);

  return /*#__PURE__*/React__default['default'].createElement("div", _extends({
    className: ['sg contacto-block', className].join(' '),
    style: _objectSpread2(_objectSpread2({}, style), {}, {
      marginTop: spacing === null || spacing === void 0 ? void 0 : spacing[1],
      marginBottom: spacing === null || spacing === void 0 ? void 0 : spacing[0]
    })
  }, props));
};
Block.Column = Column;
Block.propTypes = {
  /**
   * Class name to be added
   */
  className: PropTypes__default['default'].string,

  /**
   * The [margin-bototm, margin-top] value specified as an array
   */
  spacing: PropTypes__default['default'].array,

  /**
   * CSS Style object
   */
  style: PropTypes__default['default'].object
};
Block.defaultProps = {};

var css_248z = ".sg.contacto-alert {\n  display: flex;\n  padding: 16px;\n  gap: 16px;\n  --base-color: var(--primary-color);\n  border: 1px solid var(--base-color);\n  font-size: 0;\n  line-height: 0;\n  color: var(--base-color);\n  background-color: var(--primary-color-4); }\n  .sg.contacto-alert--success {\n    --base-color: var(--success-color);\n    background-color: var(--success-color-4); }\n  .sg.contacto-alert--warning {\n    --base-color: var(--warning-color);\n    background-color: var(--warning-color-4); }\n  .sg.contacto-alert--danger {\n    --base-color: var(--danger-color);\n    background-color: var(--danger-color-4); }\n";
styleInject(css_248z);

var _excluded = ["className", "type", "message"];
var iconMap = {
  info: 'info',
  warning: 'error',
  danger: 'report',
  success: 'check_circle'
};
/**
 * Component that is used to show alert messages
 */

var Alert = function Alert(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      type = _ref.type,
      message = _ref.message,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React__default['default'].createElement("div", _extends({
    className: ['sg contacto-alert', "contacto-alert--".concat(type), className].join(' ')
  }, props), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "contacto-alert-icon"
  }, /*#__PURE__*/React__default['default'].createElement(Icon, {
    name: iconMap[type],
    size: 20
  })), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "contacto-alert-message"
  }, /*#__PURE__*/React__default['default'].createElement(Text, null, message)));
};
Alert.propTypes = {
  /**
   * Class to be added
   */
  className: PropTypes__default['default'].string,

  /**
   * The type of alert
   */
  type: PropTypes__default['default'].oneOf(['info', 'success', 'danger', 'warning']),

  /**
   * The alert message to be displayed
   */
  message: PropTypes__default['default'].string
};
Alert.defaultProps = {};

exports.Alert = Alert;
exports.BUTTON_TYPES = BUTTON_TYPES;
exports.Block = Block;
exports.Button = Button;
exports.Icon = Icon;
exports.Select = Select;
exports.TEXTFIELD_TYPES = TEXTFIELD_TYPES;
exports.Text = Text;
exports.TextField = TextField;
exports.getButtonClassName = getButtonClassName;
//# sourceMappingURL=index.js.map
