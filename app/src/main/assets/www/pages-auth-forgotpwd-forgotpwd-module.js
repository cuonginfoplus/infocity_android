(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-auth-forgotpwd-forgotpwd-module"],{

/***/ "./src/app/pages/auth/forgotpwd/forgotpwd.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/auth/forgotpwd/forgotpwd.module.ts ***!
  \**********************************************************/
/*! exports provided: ForgotpwdPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpwdPageModule", function() { return ForgotpwdPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _forgotpwd_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgotpwd.page */ "./src/app/pages/auth/forgotpwd/forgotpwd.page.ts");







var routes = [
    {
        path: '',
        component: _forgotpwd_page__WEBPACK_IMPORTED_MODULE_6__["ForgotpwdPage"]
    }
];
var ForgotpwdPageModule = /** @class */ (function () {
    function ForgotpwdPageModule() {
    }
    ForgotpwdPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_forgotpwd_page__WEBPACK_IMPORTED_MODULE_6__["ForgotpwdPage"]]
        })
    ], ForgotpwdPageModule);
    return ForgotpwdPageModule;
}());



/***/ }),

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



/***/ })

}]);
//# sourceMappingURL=pages-auth-forgotpwd-forgotpwd-module.js.map