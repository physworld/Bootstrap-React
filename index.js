var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TestModal = function (_React$Component) {
  _inherits(TestModal, _React$Component);

  function TestModal() {
    _classCallCheck(this, TestModal);

    var _this = _possibleConstructorReturn(this, (TestModal.__proto__ || Object.getPrototypeOf(TestModal)).call(this));

    _this.state = { showFirst: false };
    _this.state = { showSecond: false };
    return _this;
  }

  _createClass(TestModal, [{
    key: "handleCloseFirst",
    value: function handleCloseFirst() {
      this.setState(function (state) {
        return {
          showFirst: false
        };
      });
    }
  }, {
    key: "handleShowFirst",
    value: function handleShowFirst() {
      this.setState(function (state) {
        return {
          showFirst: true
        };
      });
    }
  }, {
    key: "handleCloseSecond",
    value: function handleCloseSecond() {
      this.setState(function (state) {
        return {
          showSecond: false
        };
      });
    }
  }, {
    key: "handleShowSecond",
    value: function handleShowSecond() {
      this.setState(function (state) {
        return {
          showSecond: true
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          Button,
          { variant: "primary", onClick: this.handleShowFirst.bind(this) },
          "Launch first demo modal"
        ),
        ' ',
        React.createElement(
          Button,
          { variant: "primary", onClick: this.handleShowSecond.bind(this) },
          "Launch second demo modal"
        ),
        React.createElement(
          Modal,
          { show: this.state.showFirst, onHide: this.handleCloseFirst.bind(this), backdrop: "static", keyboard: "false", size: "sm" },
          React.createElement(
            Modal.Header,
            { closeButton: true },
            React.createElement(
              Modal.Title,
              null,
              "Demo modal"
            )
          ),
          React.createElement(
            Modal.Body,
            null,
            React.createElement(
              "p",
              null,
              "It's a model for testing this component of react-bootstrap and his features."
            )
          ),
          React.createElement(
            Modal.Footer,
            null,
            React.createElement(
              Button,
              { variant: "danger", onClick: this.handleCloseFirst.bind(this) },
              "Close"
            )
          )
        ),
        React.createElement(
          Modal,
          { show: this.state.showSecond, onHide: this.handleCloseSecond.bind(this), animation: false, size: "lg" },
          React.createElement(
            Modal.Header,
            { closeButton: true },
            React.createElement(
              Modal.Title,
              null,
              "Demo modal"
            )
          ),
          React.createElement(
            Modal.Body,
            null,
            React.createElement(
              "p",
              null,
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue consectetur viverra. Nulla facilisi. Suspendisse tincidunt imperdiet magna non semper. Sed porta molestie nisl sed consectetur. Donec ut scelerisque nisl. Pellentesque dapibus, ligula id tempor condimentum, ex tellus pretium neque, eu commodo enim tortor id est. Nam pretium, elit et finibus placerat, tellus dolor dictum nisl, quis mollis lacus urna in purus. Nunc lacinia lacinia arcu sit amet ornare."
            )
          ),
          React.createElement(
            Modal.Footer,
            null,
            React.createElement(
              Button,
              { variant: "danger", onClick: this.handleCloseSecond.bind(this) },
              "Close"
            )
          )
        )
      );
    }
  }]);

  return TestModal;
}(React.Component);

ReactDOM.render(React.createElement(TestModal, null), document.getElementById('root'));