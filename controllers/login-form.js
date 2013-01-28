// Generated by CoffeeScript 1.4.0
(function() {
  var Api, BaseController, LoginForm, User, enUs, template, _base, _base1, _ref, _ref1, _ref2,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  if ((_ref = window.zooniverse) == null) {
    window.zooniverse = {};
  }

  if ((_ref1 = (_base = window.zooniverse).controllers) == null) {
    _base.controllers = {};
  }

  if ((_ref2 = (_base1 = window.zooniverse).views) == null) {
    _base1.views = {};
  }

  BaseController = zooniverse.controllers.BaseController || require('./base-controller');

  template = zooniverse.views.loginForm || require('../views/login-form');

  Api = zooniverse.api || require('../lib/api');

  User = zooniverse.models.User || require('../models/user');

  enUs = zooniverse.enUs || require('../lib/en-us');

  LoginForm = (function(_super) {

    __extends(LoginForm, _super);

    LoginForm.prototype.template = template;

    LoginForm.prototype.events = {
      'submit*': 'onSignInSubmit',
      'click* button[name="sign-up"]': 'onClickSignUp',
      'click* button[name="sign-out"]': 'onClickSignOut'
    };

    LoginForm.prototype.elements = {
      'input[name="username"]': 'usernameInput',
      'input[name="password"]': 'passwordInput',
      'button[type="submit"]': 'signInButton',
      'button[name="sign-out"]': 'signOutButton',
      '.error-message': 'errorContainer'
    };

    function LoginForm() {
      var _this = this;
      LoginForm.__super__.constructor.apply(this, arguments);
      User.on('change', function() {
        return _this.onUserChange.apply(_this, arguments);
      });
    }

    LoginForm.prototype.onSignInSubmit = function() {
      var login,
        _this = this;
      this.el.addClass('logging-in');
      this.signInButton.attr({
        disabled: true
      });
      login = User.login({
        username: this.usernameInput.val(),
        password: this.passwordInput.val()
      });
      login.done(function(_arg) {
        var message, success;
        success = _arg.success, message = _arg.message;
        if (!success) {
          return _this.showError(message);
        }
      });
      login.fail(function() {
        return _this.showError(enUs.user.signInFailed);
      });
      return login.always(function() {
        return _this.el.removeClass('logging-in');
      });
    };

    LoginForm.prototype.onClickSignOut = function() {};

    LoginForm.prototype.onUserChange = function(e, user) {
      this.usernameInput.val((user != null ? user.name : void 0) || '');
      if ((user != null ? user.api_key : void 0) || '') {
        this.passwordInput.val;
      }
      this.errorContainer.html('');
      this.usernameInput.attr({
        disabled: user != null
      });
      this.passwordInput.attr({
        disabled: user != null
      });
      this.signInButton.attr({
        disabled: user != null
      });
      return this.signOutButton.attr({
        disabled: !(user != null)
      });
    };

    LoginForm.prototype.showError = function(message) {
      console.log("SHOW ERROR", message);
      return this.errorContainer.html(message);
    };

    return LoginForm;

  })(BaseController);

  window.zooniverse.controllers.LoginForm = LoginForm;

  if (typeof module !== "undefined" && module !== null) {
    module.exports = LoginForm;
  }

}).call(this);
