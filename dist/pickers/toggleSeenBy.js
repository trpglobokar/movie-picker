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

var _FormLabel = require('@material-ui/core/FormLabel');

var _FormLabel2 = _interopRequireDefault(_FormLabel);

var _FormControl = require('@material-ui/core/FormControl');

var _FormControl2 = _interopRequireDefault(_FormControl);

var _FormGroup = require('@material-ui/core/FormGroup');

var _FormGroup2 = _interopRequireDefault(_FormGroup);

var _FormControlLabel = require('@material-ui/core/FormControlLabel');

var _FormControlLabel2 = _interopRequireDefault(_FormControlLabel);

var _Checkbox = require('@material-ui/core/Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ToggleSeenBy = function (_Component) {
  (0, _inherits3.default)(ToggleSeenBy, _Component);

  function ToggleSeenBy() {
    (0, _classCallCheck3.default)(this, ToggleSeenBy);
    return (0, _possibleConstructorReturn3.default)(this, (ToggleSeenBy.__proto__ || (0, _getPrototypeOf2.default)(ToggleSeenBy)).apply(this, arguments));
  }

  (0, _createClass3.default)(ToggleSeenBy, [{
    key: 'toggleSeenBy',
    value: function toggleSeenBy(event) {
      var toggleBy = event.currentTarget.value;

      var currentSeenBy = this.state.seenBy;

      if (currentSeenBy.includes(toggleBy)) {
        currentSeenBy = currentSeenBy.filter(function (csb) {
          return csb !== toggleBy;
        });
      } else {
        currentSeenBy.push(toggleBy);
      }

      this.setState({ "seenBy": currentSeenBy });
    }
  }, {
    key: 'renderFormGroup',
    value: function renderFormGroup() {
      /*const peepsInvolved = ["Jake", "Rocky"]
       const jones = peepsInvolved.map(peep => {
        return (
          <FormControlLabel
            key={peep}
            control={
              <Checkbox
                checked={this.props.seenBy.includes(peep)}
                onChange={this.props.toggleSeenBy}
                value={peep}
              />
            }
            label={peep}
          />
        )
      })
       return (
        <FormGroup>
          {jones}
        </FormGroup>
      )*/
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _FormControl2.default,
          { component: 'fieldset' },
          _react2.default.createElement(
            _FormLabel2.default,
            { component: 'legend' },
            'Seen By'
          )
        )
      );
    }
  }]);
  return ToggleSeenBy;
}(_react.Component);

exports.default = ToggleSeenBy;