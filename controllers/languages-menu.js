// Generated by CoffeeScript 1.6.3
(function() {
  var Controller, Dropdown, LanguageManager, LanguagesMenu, template, _base, _ref, _ref1, _ref2, _ref3, _ref4, _ref5, _ref6,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Controller = ((_ref = window.zooniverse) != null ? (_ref1 = _ref.controllers) != null ? _ref1.BaseController : void 0 : void 0) || require('./base-controller');

  Dropdown = ((_ref2 = window.zooniverse) != null ? (_ref3 = _ref2.controllers) != null ? _ref3.Dropdown : void 0 : void 0) || require('./dropdown');

  LanguageManager = ((_ref4 = window.zooniverse) != null ? _ref4.LanguageManager : void 0) || require('../lib/language-manager');

  template = ((_ref5 = window.zooniverse) != null ? (_ref6 = _ref5.views) != null ? _ref6.languagesMenu : void 0 : void 0) || require('../views/languages-menu');

  LanguagesMenu = (function(_super) {
    __extends(LanguagesMenu, _super);

    LanguagesMenu.prototype.className = 'zooniverse-languages-menu';

    LanguagesMenu.prototype.template = template;

    LanguagesMenu.prototype.events = {
      'click button[name="language"]': 'onClickLanguageButton'
    };

    function LanguagesMenu() {
      this.onClickLanguageButton = __bind(this.onClickLanguageButton, this);
      var _ref7,
        _this = this;
      LanguagesMenu.__super__.constructor.apply(this, arguments);
      if ((_ref7 = LanguageManager.current) != null) {
        _ref7.on('change-language', function(e, code) {
          return _this.setLanguageButton(code);
        });
      }
    }

    LanguagesMenu.prototype.onClickLanguageButton = function(e) {
      var _ref7;
      if ((_ref7 = LanguageManager.current) != null) {
        _ref7.setLanguage(e.currentTarget.value);
      }
      return Dropdown.closeAll();
    };

    LanguagesMenu.prototype.setLanguageButton = function(code) {
      var buttons, target;
      target = this.el.find('button[value="' + code + '"]');
      if (target.length !== 0) {
        buttons = this.el.find('button[name="language"]');
        buttons.removeClass('active');
        return target.addClass('active');
      }
    };

    return LanguagesMenu;

  })(Controller);

  if (window.zooniverse == null) {
    window.zooniverse = {};
  }

  if ((_base = window.zooniverse).controllers == null) {
    _base.controllers = {};
  }

  window.zooniverse.controllers.LanguagesMenu = LanguagesMenu;

  if (typeof module !== "undefined" && module !== null) {
    module.exports = LanguagesMenu;
  }

}).call(this);
