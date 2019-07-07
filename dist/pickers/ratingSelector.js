'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Slider = require('@material-ui/lab/Slider');

var _Slider2 = _interopRequireDefault(_Slider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RatingSelector = function (_Component) {
  (0, _inherits3.default)(RatingSelector, _Component);

  function RatingSelector() {
    (0, _classCallCheck3.default)(this, RatingSelector);
    return (0, _possibleConstructorReturn3.default)(this, (RatingSelector.__proto__ || (0, _getPrototypeOf2.default)(RatingSelector)).apply(this, arguments));
  }

  (0, _createClass3.default)(RatingSelector, [{
    key: 'render',


    //TODO: figure out how to make range; possible custom component? IDEK 
    value: function render() {
      var _props = this.props,
          selectedRating = _props.selectedRating,
          setRating = _props.setRating;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('br', null),
        'Minimum Rating: ',
        selectedRating,
        _react2.default.createElement(_Slider2.default, {
          value: selectedRating,
          onChange: function onChange(_event, value) {
            setRating(value);
          },
          step: 0.5,
          min: 1,
          max: 10
        })
      );
    }
  }]);
  return RatingSelector;
}(_react.Component);

exports.default = RatingSelector;