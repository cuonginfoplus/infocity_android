(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-auth-requestregister-requestregister-module"],{

/***/ "./src/app/pages/auth/requestregister/requestregister.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/auth/requestregister/requestregister.module.ts ***!
  \**********************************************************************/
/*! exports provided: RequestregisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestregisterPageModule", function() { return RequestregisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _requestregister_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./requestregister.page */ "./src/app/pages/auth/requestregister/requestregister.page.ts");







var routes = [
    {
        path: '',
        component: _requestregister_page__WEBPACK_IMPORTED_MODULE_6__["RequestregisterPage"]
    }
];
var RequestregisterPageModule = /** @class */ (function () {
    function RequestregisterPageModule() {
    }
    RequestregisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_requestregister_page__WEBPACK_IMPORTED_MODULE_6__["RequestregisterPage"]]
        })
    ], RequestregisterPageModule);
    return RequestregisterPageModule;
}());



/***/ }),

/***/ "./src/app/pages/auth/requestregister/requestregister.page.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/auth/requestregister/requestregister.page.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title class=\"titleRqRegister\">Request Registratrion</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n    <ion-item>\n      <ion-label>Residence (*)</ion-label>\n      <ion-input (input)=\"iresidence=$event.target.value\" type=\"text\"  ngModel name=\"residence\" value=\"{{residence}}\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Wing (*)</ion-label>\n      <ion-input (input)=\"iwing=$event.target.value\" type=\"text\"  ngModel name=\"wing\" value=\"{{wing}}\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Room</ion-label>\n      <ion-input (input)=\"iroom=$event.target.value\" type=\"text\" ngModel name=\"room\" value=\"{{room}}\" ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Part</ion-label>\n      <ion-input (input)=\"ipart=$event.target.value\" type=\"text\" ngModel name=\"part\" value=\"{{part}}\" ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Email (*)</ion-label>\n      <ion-input (input)=\"iemail=$event.target.value\"  type=\"email\" ngModel name=\"email\" value=\"{{email}}\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Mobile No (*)</ion-label>\n      <ion-input (input)=\"imobileNo=$event.target.value\" type=\"tel\" ngModel name=\"mobileNo\" value=\"{{mobileNo}}\" ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Name</ion-label>\n      <ion-input (input)=\"iname=$event.target.value\" type=\"text\" ngModel name=\"name\" value=\"{{name}}\" ></ion-input>\n    </ion-item>\n    <ion-button type=\"submit\" expand=\"full\" color=\"danger\"  (click)=\"requestRegistration()\">Register</ion-button>\n  \n</ion-content>"

/***/ }),

/***/ "./src/app/pages/auth/requestregister/requestregister.page.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/auth/requestregister/requestregister.page.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".titleRqRegister {\n  text-align: center;\n  font-size: 24px;\n  font-weight: bold;\n  color: red;\n  padding: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNvcy9EZXNrdG9wL0FQUE1PQklMRS9JbmZvQ2l0eS9zcmMvYXBwL3BhZ2VzL2F1dGgvcmVxdWVzdHJlZ2lzdGVyL3JlcXVlc3RyZWdpc3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYXV0aC9yZXF1ZXN0cmVnaXN0ZXIvcmVxdWVzdHJlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZVJxUmVnaXN0ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6IHJlZDtcbiAgICBwYWRkaW5nOiAyMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/auth/requestregister/requestregister.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/auth/requestregister/requestregister.page.ts ***!
  \********************************************************************/
/*! exports provided: RequestregisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestregisterPage", function() { return RequestregisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/env.service */ "./src/app/services/env.service.ts");





var RequestregisterPage = /** @class */ (function () {
    function RequestregisterPage(modalController, http, env) {
        var _this = this;
        this.modalController = modalController;
        this.http = http;
        this.env = env;
        var myDataEmail = localStorage['objectToPassEmail'];
        localStorage.removeItem('objectToPassEmail');
        var myDataPhone = localStorage['objectToPassPhone'];
        localStorage.removeItem('objectToPassPhone');
        if (myDataEmail != null && myDataPhone != null) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('Content-Type', 'application/json');
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set('email', myDataEmail).set('mobileNo', myDataPhone);
            this.http.get(this.env.API_URL + 'users/isUser', { headers: headers, params: params }).subscribe(function (data) {
                _this.email = data[0].email;
                _this.room = data[0].room;
                _this.name = data[0].name;
                _this.part = data[0].part;
                _this.wing = data[0].wing;
                _this.mobileNo = data[0].mobileNo;
                _this.residence = data[0].residence;
            }, function (err) {
                console.log(err);
            });
        }
        else {
        }
    }
    RequestregisterPage.prototype.ngOnInit = function () {
    };
    RequestregisterPage.prototype.dismissReqRegister = function () {
        this.modalController.dismiss();
    };
    RequestregisterPage.prototype.requestRegistration = function () {
        this.http.post(this.env.API_URL + 'users/register', { email: this.iemail, mobileNo: this.imobileNo, name: this.iname,
            residence: this.iresidence, wing: this.iwing, room: this.iroom, part: this.ipart }).subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log('Error occured');
        });
        var dvId = Math.floor(Math.random() * 20000);
        var dvType = 'Android';
        var dvName = 'SamSung s6';
        this.http.post(this.env.API_URL + 'notti/registerDevice', { deviceId: dvId, deviceType: dvType, deviceName: dvName,
            deviceLastLogin: '2019-02-23', deviceIp: '192.168.12.1' }).subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log('Error occured');
        });
        this.http.post(this.env.API_URL + 'noti/registerNoti', { userEmail: this.iemail, deviceId: dvId, deviceType: dvType,
            deviceName: dvName, tokenId: '54684552451215151' }).subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log('Error occured');
        });
    };
    RequestregisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-requestregister',
            template: __webpack_require__(/*! ./requestregister.page.html */ "./src/app/pages/auth/requestregister/requestregister.page.html"),
            styles: [__webpack_require__(/*! ./requestregister.page.scss */ "./src/app/pages/auth/requestregister/requestregister.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            src_app_services_env_service__WEBPACK_IMPORTED_MODULE_4__["EnvService"]])
    ], RequestregisterPage);
    return RequestregisterPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-auth-requestregister-requestregister-module.js.map