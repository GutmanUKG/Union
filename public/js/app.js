'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
document.addEventListener('DOMContentLoaded', function () {
  var body = document.body;
  function clearClass(items, clearClass) {
    for (var i = 0; i < items.length; i++) {
      items[i].classList.remove(clearClass);
    }
  }
  Fancybox.bind("[data-fancybox]", {
    // Your custom options
  });
  var burgerDefault = document.querySelector('.burger-toggle');
  var headerMenu = document.querySelector('.header--menu');
  var headerMenuLi = headerMenu.querySelectorAll('li');
  headerMenuLi.forEach(function (item) {
    if (item.querySelector('.menu--sub')) {
      item.classList.add('menu--item_children');
      var btnToggle = document.createElement('button');
      btnToggle.classList.add('item--toggle_popup');
      item.appendChild(btnToggle);
      btnToggle.addEventListener('click', function (e) {
        e.preventDefault();
        clearClass(btnToggle, 'active');
        clearClass(headerMenuLi, 'menu--item_children--open');
        btnToggle.classList.toggle('active');
        if (btnToggle.classList.contains('active')) {
          item.classList.add('menu--item_children--open');
          item.classList.add('active');
        } else {
          item.classList.remove('menu--item_children--open');
          item.classList.remove('active');
        }
      });
    }
  });
  burgerDefault.addEventListener('click', function (e) {
    e.preventDefault();
    burgerDefault.classList.toggle('active');
    if (burgerDefault.classList.contains('active')) {
      headerMenu.classList.add('active');
      body.style.cssText += 'overflow: hidden; position: fixed; width: 100%;';
      headerMenu.style.cssText += "max-width: ".concat(body.clientWidth, "px;");
    } else {
      headerMenu.classList.remove('active');
      body.style.cssText += 'overflow: visible; position: static;';
    }
  });
  var Accardion = /*#__PURE__*/function () {
    function Accardion(_ref) {
      var _ref$parentElement = _ref.parentElement,
        parentElement = _ref$parentElement === void 0 ? null : _ref$parentElement,
        _ref$childList = _ref.childList,
        childList = _ref$childList === void 0 ? null : _ref$childList;
      _classCallCheck(this, Accardion);
      this.parentElement = document.querySelectorAll(parentElement);
      this.childList = childList;
    }
    _createClass(Accardion, [{
      key: "init",
      value: function init() {
        var _this = this;
        this.parentElement.forEach(function (item) {
          var childrenItems = item.querySelectorAll(_this.childList);
          childrenItems.forEach(function (i, idx) {
            i.addEventListener('click', function (e) {
              i.parentNode.classList.toggle('active');
            });
          });
        });
      }
    }]);
    return Accardion;
  }();
  try {
    var faqServicesDetail = new Accardion({
      parentElement: '.faq-list',
      childList: '.item--title'
    });
    faqServicesDetail.init();
  } catch (e) {}
});
//# sourceMappingURL=app.js.map
