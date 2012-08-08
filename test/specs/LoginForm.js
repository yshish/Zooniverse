// Generated by CoffeeScript 1.3.3
(function() {
  var LoginForm;

  LoginForm = require('./controllers/LoginForm');

  describe('LoginForm', function() {
    beforeEach(function() {
      return this.loginForm = new LoginForm;
    });
    describe('#onSubmit', function() {
      beforeEach(function() {
        return this.loginForm.onSubmit();
      });
      it('should show a progress indicator', function() {
        var progress;
        progress = $('@loginForm.el p progress').css('display');
        return expect(progress).not.toBe('hide');
      });
      it('forgets any previous errors', function() {});
      return it('submits a username and password to the authentication iframe', function() {});
    });
    describe('on login error', function() {
      it('gets an "error" class', function() {});
      it('loses its "waiting" class', function() {});
      return it('displays the error', function() {});
    });
    describe('when given a bad username/password combo', function() {
      it('gets an "error" class', function() {});
      it('loses its "waiting" class', function() {});
      return it('displays the error', function() {});
    });
    return describe('on successful login', function() {
      it('updates the logged in username', function() {});
      return it('clears the login form', function() {});
    });
  });

}).call(this);
