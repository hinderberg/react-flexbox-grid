'use strict';

exports.__esModule = true;
exports.default = Col;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _createProps = require('../createProps');

var _createProps2 = _interopRequireDefault(_createProps);

var _flexboxgrid = require('flexboxgrid');

var _flexboxgrid2 = _interopRequireDefault(_flexboxgrid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ModificatorType = _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.bool]);

var propTypes = {
  xs: ModificatorType,
  sm: ModificatorType,
  md: ModificatorType,
  lg: ModificatorType,
  xsOffset: _react.PropTypes.number,
  smOffset: _react.PropTypes.number,
  mdOffset: _react.PropTypes.number,
  lgOffset: _react.PropTypes.number,
  reverse: _react.PropTypes.bool,
  className: _react.PropTypes.string,
  tagName: _react.PropTypes.string,
  children: _react.PropTypes.node,
  first: _react.PropTypes.string,
  last: _react.PropTypes.string
};

var classMap = {
  xs: 'col-xs',
  sm: 'col-sm',
  md: 'col-md',
  lg: 'col-lg',
  xsOffset: 'col-xs-offset',
  smOffset: 'col-sm-offset',
  mdOffset: 'col-md-offset',
  lgOffset: 'col-lg-offset'
};

function getClassNames(props) {
  var extraClasses = [];

  if (props.className) {
    extraClasses.push(props.className);
  }

  if (props.reverse) {
    extraClasses.push(_flexboxgrid2.default.reverse);
  }

  if (props.first) {
    extraClasses.push(_flexboxgrid2.default['first-' + props.first]);
  }

  if (props.last) {
    extraClasses.push(_flexboxgrid2.default['last-' + props.last]);
  }

  return Object.keys(props).filter(function (key) {
    return classMap[key];
  }).map(function (key) {
    return _flexboxgrid2.default[Number.isInteger(props[key]) ? classMap[key] + '-' + props[key] : classMap[key]];
  }).concat(extraClasses).join(' ');
}

function Col(props) {
  var className = getClassNames(props);

  return _react2.default.createElement(props.tagName || 'div', (0, _createProps2.default)(propTypes, props, className));
}

Col.propTypes = propTypes;