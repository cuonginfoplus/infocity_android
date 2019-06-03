(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-auth-login-login-module~pages-landing-landing-module"],{

/***/ "./src/app/pages/auth/forgotpwd/forgotpwd.page.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/auth/forgotpwd/forgotpwd.page.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title class=\"titleForgotpwd\">Reset Password</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <form id=formId (ngSubmit)=\"forgotpwd(form)\" method=\"GET\" #form=\"ngForm\">\n    <ion-item>\n      <ion-label>Email (*)</ion-label>\n      <ion-input ngModel name=\"email\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Mobile No(*)</ion-label>\n      <ion-input ngModel name=\"mobileNo\"></ion-input>\n    </ion-item>\n    <div class=\"btnResetPin\">\n      <ion-button expand=\"full\" type=\"submit\">Reset PIN</ion-button>\n    </div>\n  </form>\n  <div class=\"btnResetPin\">\n    <ion-button expand=\"full\" class=\"btnCloseResetPin\" color=\"medium\" (click)=\"dismissResetPwd()\">Close</ion-button>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/auth/forgotpwd/forgotpwd.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/auth/forgotpwd/forgotpwd.page.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".titleForgotpwd {\n  text-align: center;\n  font-size: 24px;\n  font-weight: bold;\n  color: blue;\n  padding: 20px; }\n\n.btnResetPin {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNvcy9EZXNrdG9wL0FQUE1PQklMRS9JbmZvQ2l0eS9zcmMvYXBwL3BhZ2VzL2F1dGgvZm9yZ290cHdkL2ZvcmdvdHB3ZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsYUFBYSxFQUFBOztBQUlqQjtFQUNJLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYXV0aC9mb3Jnb3Rwd2QvZm9yZ290cHdkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZUZvcmdvdHB3ZCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogYmx1ZTtcbiAgICBwYWRkaW5nOiAyMHB4O1xufVxuXG5cbi5idG5SZXNldFBpbiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/auth/forgotpwd/forgotpwd.page.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/auth/forgotpwd/forgotpwd.page.ts ***!
  \********************************************************/
/*! exports provided: ForgotpwdPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpwdPage", function() { return ForgotpwdPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var ForgotpwdPage = /** @class */ (function () {
    function ForgotpwdPage(modalController, authService, alertService, navCtrl) {
        this.modalController = modalController;
        this.authService = authService;
        this.alertService = alertService;
        this.navCtrl = navCtrl;
    }
    ForgotpwdPage.prototype.ngOnInit = function () {
    };
    ForgotpwdPage.prototype.dismissResetPwd = function () {
        this.modalController.dismiss();
    };
    ForgotpwdPage.prototype.forgotpwd = function (form) {
        var _this = this;
        this.authService.forgotpwd(form.value.email, form.value.mobileNo).subscribe(function (data) {
            _this.alertService.presentToast('Reset password');
        }, function (error) {
            console.error();
        });
    };
    ForgotpwdPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-forgotpwd',
            template: __webpack_require__(/*! ./forgotpwd.page.html */ "./src/app/pages/auth/forgotpwd/forgotpwd.page.html"),
            styles: [__webpack_require__(/*! ./forgotpwd.page.scss */ "./src/app/pages/auth/forgotpwd/forgotpwd.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])
    ], ForgotpwdPage);
    return ForgotpwdPage;
}());



/***/ }),

/***/ "./src/app/pages/auth/login/login.page.html":
/*!**************************************************!*\
  !*** ./src/app/pages/auth/login/login.page.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding class=\"background\">\n  <div class=\"logo\">\n      <img class=\"logo\" src=\"assets/img/logo/logo_1.png\" />\n  </div>\n  <form #form=\"ngForm\" (ngSubmit)=\"login(form)\" method=\"post\">\n    <ion-card>\n        <ion-item>\n            <ion-label>PIN Number</ion-label>\n            <ion-input class=\"pinNumber-txt\" type=\"password\" placeholder=\"Input Here\" ngModel name=\"pinNumber\"></ion-input>\n        </ion-item>\n    </ion-card>\n    <div class=\"div-savePIN\">\n      <ion-grid>\n          <ion-row class=\"remember-row\">\n              <ion-col class=\"remember-col\">\n                    <ion-toggle ng-model=\"rememberMe\"></ion-toggle>\n              </ion-col>\n              <ion-col>\n                    <ion-label>Remember me</ion-label>\n              </ion-col>\n          </ion-row>\n      </ion-grid>\n    </div>\n    <div class=\"center\">\n        <ion-button type=\"submit\" class=\"btn-login\" color=\"primary\">Login</ion-button>\n    </div>\n    <div class=\"center div-sso\">\n        <ion-icon class=\"icon\" src=\"assets/img/facebook.svg\" (click)=\"loginFB()\"></ion-icon>\n        <ion-icon class=\"icon\" src=\"assets/img/zalo.svg\" (click)=\"loginZalo()\"></ion-icon>\n        <ion-icon class=\"icon\" src=\"assets/img/google.svg\" (click)=\"loginGG()\"></ion-icon>\n        <ion-icon class=\"icon\" src=\"assets/img/instagram.svg\" (click)=\"loginINS()\"></ion-icon>\n    </div> \n    <div class=\"center div-forgetpwd\">\n        <ion-button color=\"primary\" (click)=\"forgotpwdModal()\">Forgot Password ?</ion-button>\n        <ion-button color=\"danger\" (click)=\"registerModal()\">Register</ion-button>\n    </div>\n  </form>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/auth/login/login.page.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/auth/login/login.page.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content.background {\n  --background: url('/assets/img/background.png') 0 0/100% 100% no-repeat; }\n\n.center {\n  text-align: center; }\n\n.no-border {\n  border-bottom: 0 !important;\n  box-shadow: none !important; }\n\n.pinNumber-txt {\n  height: 80%;\n  text-align: center;\n  vertical-align: middle;\n  background-color: transparent; }\n\n.logo {\n  text-align: center;\n  padding-top: 40px;\n  padding-bottom: 40px; }\n\n.pinNumber-lbl {\n  text-align: center;\n  vertical-align: middle; }\n\n.checkbox {\n  text-align: right;\n  margin-right: 5px; }\n\n.div-savePIN {\n  font-size: medium;\n  margin-top: 10px;\n  vertical-align: middle; }\n\n.remember-row {\n  align-items: center; }\n\n.remember-col {\n  text-align: center; }\n\n.btn-login {\n  margin-top: 50px;\n  width: 70%;\n  background-color: #39acdc; }\n\n.icon {\n  height: 40px;\n  width: 40px;\n  margin-left: 5px;\n  margin-right: 5px; }\n\n.div-sso {\n  margin-top: 15px; }\n\n.div-forgetpwd {\n  margin-top: 70px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNvcy9EZXNrdG9wL0FQUE1PQklMRS9JbmZvQ2l0eS9zcmMvYXBwL3BhZ2VzL2F1dGgvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUVBQWEsRUFBQTs7QUFHakI7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSwyQkFBMkI7RUFDM0IsMkJBQTJCLEVBQUE7O0FBRy9CO0VBQ0ksV0FBVztFQUNYLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsNkJBQTZCLEVBQUE7O0FBR2pDO0VBQ0ksa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixvQkFBb0IsRUFBQTs7QUFHeEI7RUFDSSxrQkFBa0I7RUFDbEIsc0JBQXNCLEVBQUE7O0FBRzFCO0VBQ0ksaUJBQWlCO0VBQ2pCLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsc0JBQXNCLEVBQUE7O0FBRzFCO0VBQ0ksbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVix5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSxZQUFZO0VBQ1osV0FBVztFQUNYLGdCQUFnQjtFQUNoQixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGgvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQuYmFja2dyb3VuZHtcbiAgICAtLWJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWcvYmFja2dyb3VuZC5wbmcnKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcbn1cblxuLmNlbnRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubm8tYm9yZGVyIHtcbiAgICBib3JkZXItYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ucGluTnVtYmVyLXR4dCB7XG4gICAgaGVpZ2h0OiA4MCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5sb2dvIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDQwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDQwcHg7XG59XG5cbi5waW5OdW1iZXItbGJsIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmNoZWNrYm94IHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLmRpdi1zYXZlUElOIHtcbiAgICBmb250LXNpemU6IG1lZGl1bTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5yZW1lbWJlci1yb3cge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5yZW1lbWJlci1jb2wge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJ0bi1sb2dpbiB7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICB3aWR0aDogNzAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzOWFjZGM7XG59XG5cbi5pY29uIHtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLmRpdi1zc28ge1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi5kaXYtZm9yZ2V0cHdkIHtcbiAgICBtYXJnaW4tdG9wOiA3MHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/auth/login/login.page.ts":
/*!************************************************!*\
  !*** ./src/app/pages/auth/login/login.page.ts ***!
  \************************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _forgotpwd_forgotpwd_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../forgotpwd/forgotpwd.page */ "./src/app/pages/auth/forgotpwd/forgotpwd.page.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_register_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../register/register.page */ "./src/app/pages/auth/register/register.page.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ "./node_modules/@ionic-native/facebook/ngx/index.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ "./node_modules/@ionic-native/google-plus/ngx/index.js");










var LoginPage = /** @class */ (function () {
    function LoginPage(fb, googlePlus, modalController, authService, navCtrl, alertService, nativeStorage) {
        this.fb = fb;
        this.googlePlus = googlePlus;
        this.modalController = modalController;
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.alertService = alertService;
        this.nativeStorage = nativeStorage;
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    // Dismiss Login Modal
    LoginPage.prototype.dismissLogin = function () {
        this.modalController.dismiss();
    };
    // On Register button tap, dismiss login modal and open register modal
    LoginPage.prototype.registerModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var registerModal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.dismissLogin();
                        return [4 /*yield*/, this.modalController.create({
                                component: _register_register_page__WEBPACK_IMPORTED_MODULE_4__["RegisterPage"]
                            })];
                    case 1:
                        registerModal = _a.sent();
                        return [4 /*yield*/, registerModal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    // Dismiss Login Modal
    LoginPage.prototype.forgotPwd = function () {
        this.modalController.dismiss();
    };
    // On Register button tap, dismiss login modal and open register modal
    LoginPage.prototype.forgotpwdModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var forgotpwdModal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.forgotPwd();
                        return [4 /*yield*/, this.modalController.create({
                                component: _forgotpwd_forgotpwd_page__WEBPACK_IMPORTED_MODULE_1__["ForgotpwdPage"]
                            })];
                    case 1:
                        forgotpwdModal = _a.sent();
                        return [4 /*yield*/, forgotpwdModal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LoginPage.prototype.login = function (form) {
        var _this = this;
        this.authService.login(form.value.pinNumber).subscribe(function (data) {
            _this.alertService.presentToast('Logged In');
        }, function (error) {
            console.log(error);
        }, function () {
            _this.dismissLogin();
            _this.navCtrl.navigateRoot('/dashboard');
        });
    };
    LoginPage.prototype.loginFB = function () {
        var _this = this;
        var permissions = ['public_profile', 'email'];
        this.fb.login(permissions).then(function (response) {
            var userId = response.authResponse.userID;
            _this.fb.api('/me?fields=name,email', permissions)
                .then(function (user) {
                user.picture = 'https://graph.facebook.com/' + userId + '/picture?type=large';
                _this.nativeStorage.setItem('facebook_user', {
                    name: user.name,
                    email: user.email,
                    picture: user.picture
                })
                    .then(function () {
                    _this.navCtrl.navigateRoot(['/dashboard']);
                    _this.alertService.presentToast('Login FB success');
                }, function (error) {
                    console.log(error);
                });
            });
        }, function (error) {
            console.log(error);
        });
    };
    LoginPage.prototype.loginGG = function () {
        var _this = this;
        this.googlePlus.login({
            'scopes': 'https://www.googleapis.com/auth/plus.login',
            'webClientId': 'com.googleusercontent.apps.907796142943-cl3jisj4amab9no3o8025r3gk3bcppgb',
            'offline': true
        }).then(function (user) {
            _this.nativeStorage.setItem('google_user', {
                name: user.displayName,
                email: user.email,
                picture: user.imageUrl
            })
                .then(function () {
                _this.navCtrl.navigateRoot(['/dashboard']);
            }, function (error) {
                console.log(error);
            });
        }, function (err) {
            console.log(err);
        }).catch(function (err) { return console.log(err); });
    };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/pages/auth/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/auth/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_7__["Facebook"],
            _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_9__["GooglePlus"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"],
            _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_8__["NativeStorage"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ }),

/***/ "./src/app/pages/auth/register/register.page.html":
/*!********************************************************!*\
  !*** ./src/app/pages/auth/register/register.page.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-card-header>\n    <ion-title class=\"titleRegister\">Register</ion-title>\n  </ion-card-header>\n\n\n</ion-header>\n<ion-content padding>\n  <form #form=\"ngForm\" (ngSubmit)=\"register(form)\" method=\"post\">\n    <ion-item class=\"itemEmail\">\n      <ion-label position=\"floating\">Email (*)</ion-label>\n      <ion-input (input)=\"email=$event.target.value\" type=\"email\" ngModel name=\"email\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Mobile No (*)</ion-label>\n      <ion-input (input)=\"phone=$event.target.value\" type=\"tel\" ngModel name=\"mobileNo\"></ion-input>\n    </ion-item>\n    <ion-button (click)=\"isregister()\" expand=\"full\" color=\"danger\">Next</ion-button>\n  </form>\n  <ion-button expand=\"full\" color=\"medium\" (click)=\"dismissRegister()\">Back</ion-button>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/auth/register/register.page.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/auth/register/register.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".titleRegister {\n  text-align: center;\n  font-size: 30px;\n  font-weight: bold;\n  color: red;\n  padding: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNvcy9EZXNrdG9wL0FQUE1PQklMRS9JbmZvQ2l0eS9zcmMvYXBwL3BhZ2VzL2F1dGgvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsVUFBVTtFQUNWLGFBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGgvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlUmVnaXN0ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6IHJlZDtcbiAgICBwYWRkaW5nOiAyMHB4O1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/auth/register/register.page.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/auth/register/register.page.ts ***!
  \******************************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
/* harmony import */ var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/env.service */ "./src/app/services/env.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");









var RegisterPage = /** @class */ (function () {
    function RegisterPage(modalController, authService, navCtrl, alertService, http, storage, env, router, navParams) {
        this.modalController = modalController;
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.alertService = alertService;
        this.http = http;
        this.storage = storage;
        this.env = env;
        this.router = router;
        this.navParams = navParams;
        this.arrayEmail = [];
        this.arrayPhone = [];
    }
    RegisterPage.prototype.ngOnInit = function () {
    };
    RegisterPage.prototype.dismissRegister = function () {
        this.modalController.dismiss();
    };
    RegisterPage.prototype.isregister = function () {
        var _this = this;
        this.http.get(this.env.API_URL + 'users/isUser' + '?email=' + this.email + '&mobileNo=' + this.phone).subscribe(function (data) {
            _this.lengData = Object.keys(data).length;
            for (var index = 0; index < _this.lengData; index++) {
                if (data[index].email === _this.email && data[index].mobileNo === _this.phone) {
                    _this.dismissRegister();
                    _this.router.navigate(['requestregister']);
                    _this.mydataemail = _this.email;
                    localStorage.setItem('objectToPassEmail', _this.mydataemail);
                    _this.mydataphone = _this.phone;
                    localStorage.setItem('objectToPassPhone', _this.mydataphone);
                }
                else {
                    _this.dismissRegister();
                    _this.router.navigate(['requestregister']);
                }
            }
        }, function (err) {
            console.log(err);
        });
    };
    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.page.html */ "./src/app/pages/auth/register/register.page.html"),
            styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/pages/auth/register/register.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_6__["NativeStorage"],
            src_app_services_env_service__WEBPACK_IMPORTED_MODULE_7__["EnvService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]])
    ], RegisterPage);
    return RegisterPage;
}());



/***/ })

}]);
//# sourceMappingURL=default~pages-auth-login-login-module~pages-landing-landing-module.js.map