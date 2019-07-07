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

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  width: 100%;\n'], ['\n  width: 100%;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  max-height: 400px;\n  width: 100%;\n  overflow: scroll;\n'], ['\n  max-height: 400px;\n  width: 100%;\n  overflow: scroll;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FormControl = require('@material-ui/core/FormControl');

var _FormControl2 = _interopRequireDefault(_FormControl);

var _FormGroup = require('@material-ui/core/FormGroup');

var _FormGroup2 = _interopRequireDefault(_FormGroup);

var _FormControlLabel = require('@material-ui/core/FormControlLabel');

var _FormControlLabel2 = _interopRequireDefault(_FormControlLabel);

var _Checkbox = require('@material-ui/core/Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _core = require('@material-ui/core');

var _movieGenres = require('../static/movieGenres.json');

var _movieGenres2 = _interopRequireDefault(_movieGenres);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SuperFormControl = (0, _styledComponents2.default)(_FormControl2.default)(_templateObject);

var Genres = _styledComponents2.default.div(_templateObject2);

var ToggleGenre = function (_Component) {
  (0, _inherits3.default)(ToggleGenre, _Component);

  function ToggleGenre() {
    (0, _classCallCheck3.default)(this, ToggleGenre);
    return (0, _possibleConstructorReturn3.default)(this, (ToggleGenre.__proto__ || (0, _getPrototypeOf2.default)(ToggleGenre)).apply(this, arguments));
  }

  (0, _createClass3.default)(ToggleGenre, [{
    key: 'renderFormGroup',
    value: function renderFormGroup() {
      var _this2 = this;

      var peepsInvolved = _movieGenres2.default.genres;
      var jones = peepsInvolved.map(function (peep) {
        return _react2.default.createElement(_FormControlLabel2.default, {
          key: peep.id,
          control: _react2.default.createElement(_Checkbox2.default, {
            checked: _this2.props.selectedGenres.includes(peep.id.toString()),
            onChange: _this2.props.toggleGenre,
            value: peep.id.toString()
          }),
          label: peep.name
        });
      });

      return _react2.default.createElement(
        _FormGroup2.default,
        null,
        jones
      );
    }
  }, {
    key: 'render',
    value: function render() {
      console.log("this.props", this.props);
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          SuperFormControl,
          { component: 'fieldset' },
          _react2.default.createElement(
            _core.Typography,
            { variant: 'h6' },
            'Genres'
          ),
          _react2.default.createElement(
            Genres,
            null,
            this.renderFormGroup()
          )
        )
      );
    }
  }]);
  return ToggleGenre;
}(_react.Component);

exports.default = ToggleGenre;