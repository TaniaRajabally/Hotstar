(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hello{\r\n    color:#C0C0C0,\r\n}"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<head>\n<title>About Us</title>\n</head>\n<body background=\"https://image3.mouthshut.com/images/imagesp/925755712s.jpg\">\n<div class=\"hello\">\n<h1><strong><em>ABOUT US</em></strong></h1>\n<p>Hotstar is an online video streaming platform owned by Novi Digital Entertainment Private Limited, a wholly owned subsidiary of Star India Private Limited. Hotstar currently offers over 50,000 hours of TV content and movies across 8 languages, and every major sport covered live. Highly evolved video streaming technology and a high attention to quality of experience across devices and platforms, make Hotstar the most complete video destination for Over The Top (OTT) video consumers.</p>\n\n<h2><em>A VIDEO EXPERIENCE LIKE NO OTHER</em></h2>\n<p><strong>Seamless Video Playback -</strong> Our adaptive video streaming technology ensures that the best possible video quality is played back automatically based on the available bandwidth, therefore making it a great video experience on both mobile networks as well as WiFi internet connections. Our video is optimized to play on mobile networks with inconsistent throughput so that our users don’t have to compromise on their experience on the low end, and play HD quality video on the top end of bandwidth availability. Additionally, our users can manually select the quality of video that suits their taste.</p>\n\n<p><strong>Smart Search - </strong>Content search on Hotstar has been optimized to reduce complexity and delay in accessing content. Accurate search results, with lightning fast autocomplete suggestions navigate users to video with minimal navigation friction and ease of use.</p>\n\n<p><strong>Friendly User Interface -</strong> Content organization on Hotstar is a result of a thoughtful user experience approach and strong design principles that ensure that the user is not overwhelmed with the breadth of content available. Using a mix of algorithms and human curation, users at any stage of their interaction with Hotstar will discover content and see their experience evolve with their interaction patterns over time.</p>\n\n<p><strong>Hot Content Catalogue -</strong> Hotstar offers the latest and popular TV, movies and knowledge-based content from India and the world. With content in 8 languages, spanning 15 TV channels, Hotstar is home to some of the longest running, and highest rated TV content in the country. Our roster of the biggest names in Indian cinema makes Hotstar the preferred destination for the biggest blockbusters from Bollywood and regional cinema.</p>\n\n<p><strong>Originals -</strong> In our endeavour to drive meaningful engagement with our audience, Hotstar is investing in generating content keeping in mind the sentiments and attitudes of our consumers and has enjoyed great success with original programming content such as On Air with AIB, M Bole Toh, One Tip One Hand.</p>\n\n<p><strong>Access -</strong> Hotstar is available on the Google Play Store and Apple App Store for mobile and tablet applications and can be accessed at www.hotstar.com.</p>\n</div>\n</body>\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n \n  \n    <div class=\"container\">\n      <form class=\"form\"   method=\"post\">\n        <nav class=\"navbar navbar-expand-sm bg-dark navbar-dark fixed-top\">\n        <ul class=\"navbar-nav\">\n          <!-- <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\"><strong>HOTSTAR</strong></a>\n          </li> -->\n          <a class=\"navbar-brand\" href=\"#\">\n            <img src=\"assets/hotstar.jpg\" alt=\"Logo\" style=\"width:85px;\">\n          </a>\n          <!-- <ul class = \"navbar-new\"> -->\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/starplus\" routerLinkActive=\"active\" >Star Plus</a>\n             <!-- <div class=\"dropdown-menu\"> -->\n              <!-- <a class=\"dropdown-item\" href=\"starplus.html\">Star Plus</a>\n              <a class=\"dropdown-item\" href=\"starworld.html\">Star World</a>\n              <a class=\"dropdown-item\" href=\"lifeok.html\">Life OK</a>\n              <a class=\"dropdown-item\" href=\"starvijay.html\">Star Vijay</a>\n              <a class=\"dropdown-item\" href=\"starbharat.html\">Star Bharat</a>\n            </div> -->\n          </li>\n          <li class=\"nav-item \">\n            <a class=\"nav-link\" routerLink=\"/starworld\" routerLinkActive=\"active\">Star World</a>\n            <!-- <div class=\"dropdown-menu\">\n              <a class=\"dropdown-item\" href=\"starplus.html\">Hindi</a>\n              <a class=\"dropdown-item\" href=\"starplus.html\">English</a>\n              <a class=\"dropdown-item\" href=\"starplus.html\">Bengali</a>\n              <a class=\"dropdown-item\" href=\"starplus.html\">Telugu</a>\n              <a class=\"dropdown-item\" href=\"starplus.html\">Malayalam</a>\n            </div> -->\n          </li>\n          <li class=\"nav-item \">\n              <a class=\"nav-link\" routerLink=\"/starbharat\" routerLinkActive=\"active\">Star Bharat</a>\n              <!-- <div class=\"dropdown-menu\">\n                <a class=\"dropdown-item\" href=\"starplus.html\">Hindi</a>\n                <a class=\"dropdown-item\" href=\"starplus.html\">English</a>\n                <a class=\"dropdown-item\" href=\"starplus.html\">Bengali</a>\n                <a class=\"dropdown-item\" href=\"starplus.html\">Telugu</a>\n                <a class=\"dropdown-item\" href=\"starplus.html\">Malayalam</a>\n              </div> -->\n            </li>\n            <li class=\"nav-item \">\n                <a class=\"nav-link\" routerLink=\"/lifeok\" routerLinkActive=\"active\">Life Ok</a>\n                <!-- <div class=\"dropdown-menu\">\n                  <a class=\"dropdown-item\" href=\"starplus.html\">Hindi</a>\n                  <a class=\"dropdown-item\" href=\"starplus.html\">English</a>\n                  <a class=\"dropdown-item\" href=\"starplus.html\">Bengali</a>\n                  <a class=\"dropdown-item\" href=\"starplus.html\">Telugu</a>\n                  <a class=\"dropdown-item\" href=\"starplus.html\">Malayalam</a>\n                </div> -->\n              </li>\n              <li class=\"nav-item \">\n                  <a class=\"nav-link\" routerLink=\"/starvijay\" routerLinkActive=\"active\">Star Vijay</a>\n                  <!-- <div class=\"dropdown-menu\">\n                    <a class=\"dropdown-item\" href=\"starplus.html\">Hindi</a>\n                    <a class=\"dropdown-item\" href=\"starplus.html\">English</a>\n                    <a class=\"dropdown-item\" href=\"starplus.html\">Bengali</a>\n                    <a class=\"dropdown-item\" href=\"starplus.html\">Telugu</a>\n                    <a class=\"dropdown-item\" href=\"starplus.html\">Malayalam</a>\n                  </div> -->\n                </li>\n        \n          <li class=\"nav-item dropdown\">\n            <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbardrop\" data-toggle=\"dropdown\">Sports</a>\n            <div class=\"dropdown-menu\">\n              <a class=\"dropdown-item\" href=\"https://www.cricbuzz.com/\">Cricket</a>\n              <a class=\"dropdown-item\" href=\"https://www.skysports.com/football\">FootBall</a>\n              <a class=\"dropdown-item\" href=\"https://www.flashscore.in/badminton\">Badminton</a>\n              <a class=\"dropdown-item\" href=\"https://www.flashscore.in/volleyball\">VolleyBall</a>\n              <a class=\"dropdown-item\" href=\"https://www.livescore.in/hockey\">Hockey</a>\n            </div>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\">News</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\">Premium</a>\n          </li>\n        </ul>\n        <button class=\"btn btn-success  nav-item nav-link-edit navbar-btn ml-auto\" style=\"width:85px;\" routerLink=\"/login\" routerLinkActive=\"active\"><a  >Login</a></button>\n        \n      </nav>\n    </form>\n    <br>\n  </div>\n  <!-- <div id=\"demo\" class=\"carousel slide\" data-ride=\"carousel\">\n\n \n  <ul class=\"carousel-indicators\">\n    <li data-target=\"#demo\" data-slide-to=\"0\" class=\"active\"></li>\n    <li data-target=\"#demo\" data-slide-to=\"1\"></li>\n    <li data-target=\"#demo\" data-slide-to=\"2\"></li>\n  </ul>\n\n  \n  <div class=\"carousel-inner\">\n    <div class=\"carousel-item active\">\n      <img src=\"https://s3.scoopwhoop.com/anj/monisha/d76c81da-eb76-4a73-8be8-e28d3d67e951.jpg\" alt=\"Sarabhai vs Sarabhai\" style=\"width:100%;\">\n    </div>\n    <div class=\"carousel-item\">\n      <img src=\"https://www.citytv.com/wp-content/uploads/2018/09/modern-family-11-all-shows.jpg\" alt=\"Modern Family\"  width=\"800\" height=\"200\">\n    </div>\n    <div class=\"carousel-item\">\n      <img src=\"https://secure-media1.hotstarext.com/r1/thumbs/PCTV/48/1648/PCTV-1648-hcdl.jpg\" alt=\"New York\" width=\"1100\" height=\"500\">\n    </div>\n  </div>\n\n    <a class=\"carousel-control-prev\" href=\"#demo\" data-slide=\"prev\">\n    <span class=\"carousel-control-prev-icon\"></span>\n  </a>\n  <a class=\"carousel-control-next\" href=\"#demo\" data-slide=\"next\">\n    <span class=\"carousel-control-next-icon\"></span>\n  </a>\n</div>\n<br>\n<br>\n<div class=\"card-deck\">\n  <div class=\"card\">\n    <img class=\"card-img-top\" src=\"assets/sarabhai.jpg\"  alt=\"Card image cap\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">Sarabhai vs Sarabhai</h5>\n    </div>\n    <div class=\"card-footer\">\n      <small class=\"text-muted\">Episode 1</small>\n    </div>\n  </div>\n  <div class=\"card\">\n    <img class=\"card-img-top\" src=\"assets/masterchef.jpg\" alt=\"Card image cap\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">MasterChef India</h5>\n    </div>\n    <div class=\"card-footer\">\n      <small class=\"text-muted\">Season 1</small>\n    </div>\n  </div>\n  <div class=\"card\">\n    <img class=\"card-img-top\" src=\"assets/koffee.jpg\" alt=\"Card image cap\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">Koffee with Karan</h5>\n    </div>\n    <div class=\"card-footer\">\n      <small class=\"text-muted\">Season 1</small>\n    </div>\n  </div>\n</div>\n<br>\n<br>\n<div class=\"card-deck\">\n  <div class=\"card\">\n    <img class=\"card-img-top\" src=\"assets/friends.jpg\"  alt=\"Card image cap\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">Friends</h5>\n    </div>\n    <div class=\"card-footer\">\n      <small class=\"text-muted\">Season 2</small>\n    </div>\n  </div>\n  <div class=\"card\">\n    <img class=\"card-img-top\" src=\"assets/bigbang.jpg\" alt=\"Card image cap\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">The Bing Bang Theory</h5>\n    </div>\n    <div class=\"card-footer\">\n      <small class=\"text-muted\">Last updated 3 mins ag</small>\n    </div>\n  </div>\n  <div class=\"card\">\n    <img class=\"card-img-top\" src=\"assets/indaus.jpg\" alt=\"Card image cap\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">India Vs Australia</h5>\n    </div>\n    <div class=\"card-footer\">\n      <small class=\"text-muted\">Live Match</small>\n    </div>\n  </div>\n</div>\n<br>\n<br>\n<div class=\"card-deck\">\n  <div class=\"card\">\n    <img class=\"card-img-top\" src=\"assets/ManU.jpg\"  alt=\"Card image cap\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">Manchester Vs Chelesa</h5>\n    </div>\n    <div class=\"card-footer\">\n      <small class=\"text-muted\">Live Score Update</small>\n    </div>\n  </div>\n  <div class=\"card\">\n    <img class=\"card-img-top\" src=\"assets/masterchefaustralia.jpg\" alt=\"Card image cap\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">MasterChef Australia</h5>\n    </div>\n    <div class=\"card-footer\">\n      <small class=\"text-muted\">Season 3</small>\n    </div>\n  </div>\n  <div class=\"card\">\n    <img class=\"card-img-top\" src=\".jpg\" alt=\"Card image cap\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">AB</h5>\n    </div>\n    <div class=\"card-footer\">\n      <small class=\"text-muted\">DEF</small>\n    </div>\n  </div>\n</div>\n<br>\n<br>\n<div class=\"row\">\n  <div class=\"col-md-4\">\n    <h3>Hotstar App</h3>\n    <form action=\"https://play.google.com/store/apps/details?id=in.startv.hotstar&hl=en_IN\">\n      <button style=\"font-size:24px\">Get it on Google Play<i class=\"fa fa-android\" style=\"font-size:36px\"></i></button><br><br>\n    </form>\n    <form action=\"https://itunes.apple.com/in/app/hotstar/id934459219?mt=8\">\n      <button style=\"font-size:24px\">Download it From App Store<i class=\"fa fa-apple\" style=\"font-size:36px\"></i></button>\n    </form>\n  </div>\n  <div class=\"col-md-3\">\n    <h3>Connect with us</h3>\n    <form action=\"https://www.facebook.com/hotstar/\">\n      <button style=\"font-size:24px\"><i class=\"fa fa-facebook-official\" style=\"font-size:36px\"></i></button>\n    </form>\n    <br>\n    <form actio=\"https://twitter.com/login\">\n      <button style=\"font-size:24px\"><i class=\"fa fa-twitter\" style=\"font-size:36px\"></i></button>\n    </form>\n  </div>\n  <div class=\"col-md-5\">\n    <div class=\"row\">\n      <div class=\"col-md-2\"><h6><a href=\"about.html\">About</a></h6></div>\n      <div class=\"col-md-2\"><h6><a href=\"termsofuse.html\">Terms Of Use</a></h6></div>\n      <div class=\"col-md-2\"><h6><a href=\"privacypolicy.html\">Privacy Policy</a></h6></div>\n      <div class=\"col-md-2\"><h6><a href=\"faq.html\">FAQ</a></h6></div>\n      <div class=\"col-md-2\"><h6><a href=\"feedback.html\">Feedback</a></h6></div>\n      <div class=\"col-md-2\"><h6><a href=\"careers.html\">Careers</a></h6></div>\n    </div>\n  </div>\n</div>\n<br>\n -->\n\n <router-outlet></router-outlet>\n<!--<app-login></app-login> -->\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'suven';
        this.model = {};
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _password_password_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./password/password.component */ "./src/app/password/password.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _first_first_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./first/first.component */ "./src/app/first/first.component.ts");
/* harmony import */ var _starplus_starplus_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./starplus/starplus.component */ "./src/app/starplus/starplus.component.ts");
/* harmony import */ var _starworld_starworld_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./starworld/starworld.component */ "./src/app/starworld/starworld.component.ts");
/* harmony import */ var _starbharat_starbharat_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./starbharat/starbharat.component */ "./src/app/starbharat/starbharat.component.ts");
/* harmony import */ var _lifeok_lifeok_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./lifeok/lifeok.component */ "./src/app/lifeok/lifeok.component.ts");
/* harmony import */ var _starvijay_starvijay_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./starvijay/starvijay.component */ "./src/app/starvijay/starvijay.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./form/form.component */ "./src/app/form/form.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var appRoutes = [
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"] },
    { path: 'form', component: _form_form_component__WEBPACK_IMPORTED_MODULE_18__["FormComponent"] },
    { path: 'starplus', component: _starplus_starplus_component__WEBPACK_IMPORTED_MODULE_12__["StarplusComponent"] },
    { path: 'starworld', component: _starworld_starworld_component__WEBPACK_IMPORTED_MODULE_13__["StarworldComponent"] },
    { path: 'starbharat', component: _starbharat_starbharat_component__WEBPACK_IMPORTED_MODULE_14__["StarbharatComponent"] },
    { path: 'starvijay', component: _starvijay_starvijay_component__WEBPACK_IMPORTED_MODULE_16__["StarvijayComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_17__["AboutComponent"] },
    { path: 'lifeok', component: _lifeok_lifeok_component__WEBPACK_IMPORTED_MODULE_15__["LifeokComponent"] },
    { path: 'first', component: _first_first_component__WEBPACK_IMPORTED_MODULE_11__["FirstComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'password', component: _password_password_component__WEBPACK_IMPORTED_MODULE_9__["PasswordComponent"] },
    { path: '', redirectTo: 'first', pathMatch: 'full' },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
                _password_password_component__WEBPACK_IMPORTED_MODULE_9__["PasswordComponent"],
                _first_first_component__WEBPACK_IMPORTED_MODULE_11__["FirstComponent"],
                _starplus_starplus_component__WEBPACK_IMPORTED_MODULE_12__["StarplusComponent"],
                _starworld_starworld_component__WEBPACK_IMPORTED_MODULE_13__["StarworldComponent"],
                _starbharat_starbharat_component__WEBPACK_IMPORTED_MODULE_14__["StarbharatComponent"],
                _lifeok_lifeok_component__WEBPACK_IMPORTED_MODULE_15__["LifeokComponent"],
                _starvijay_starvijay_component__WEBPACK_IMPORTED_MODULE_16__["StarvijayComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_17__["AboutComponent"],
                _form_form_component__WEBPACK_IMPORTED_MODULE_18__["FormComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuthModule"],
                angularfire2_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabaseModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"],
                //AngularFireDatabase,
                angularfire2__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].firebaseConfig),
                [_angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forRoot(appRoutes, { enableTracing: true })
                ],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/first/first.component.css":
/*!*******************************************!*\
  !*** ./src/app/first/first.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n    background:#ccffcc;\r\n  }\r\n  .carousel-inner img {\r\n        width: 100%;\r\n        height: 100%;\r\n    }\r\n  .content {\r\n    margin-left: 75px;\r\n    font-size: 30px;\r\n  }\r\n  * {box-sizing: border-box;}\r\n  body {font-family: Verdana, sans-serif;}\r\n  .mySlides {display: none;}\r\n  img {vertical-align: middle;}\r\n  .card {\r\n    background-color: #fff;\r\n  \r\n  }\r\n  .card {\r\n    overflow-x: auto;\r\n  }\r\n  .card {display: flex}\r\n  .card--content {\r\n    background-color: #e74c3c;\r\n    min-width: 200px;\r\n    margin: 5px;\r\n  }\r\n  .grid {\r\n    background-color: #8e44ad;\r\n    margin: 0;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n  .card::-webkit-scrollbar {\r\n    display: none;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/first/first.component.html":
/*!********************************************!*\
  !*** ./src/app/first/first.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n<head>\n    <meta charset=\"utf-8\">\n    <title>Hotstar</title>\n    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css\">\n    <!--<link rel=\"stylesheet\" href=\"app.component.css\">-->\n    <!--<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css\">-->\n\t<!-- <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\n\t<script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js\"></script>\n\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js\"></script> -->\n <!-- <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js\"></script>-->\n  </head>\n  <body>\n    \n  <div id=\"demo\" class=\"carousel slide\" data-ride=\"carousel\">\n\n  <!-- Indicators -->\n  <ul class=\"carousel-indicators\">\n    <li data-target=\"#demo\" data-slide-to=\"0\" class=\"active\"></li>\n    <li data-target=\"#demo\" data-slide-to=\"1\"></li>\n    <li data-target=\"#demo\" data-slide-to=\"2\"></li>\n  </ul>\n\n  <!-- The slideshow -->\n  <div class=\"carousel-inner\">\n    <div class=\"carousel-item active\">\n      <img src=\"https://s3.scoopwhoop.com/anj/monisha/d76c81da-eb76-4a73-8be8-e28d3d67e951.jpg\" alt=\"Sarabhai vs Sarabhai\" style=\"width:100%;\">\n    </div>\n    <div class=\"carousel-item\">\n      <img src=\"https://www.citytv.com/wp-content/uploads/2018/09/modern-family-11-all-shows.jpg\" alt=\"Modern Family\"  width=\"800\" height=\"200\">\n    </div>\n    <div class=\"carousel-item\">\n      <img src=\"https://secure-media1.hotstarext.com/r1/thumbs/PCTV/48/1648/PCTV-1648-hcdl.jpg\" alt=\"New York\" width=\"1100\" height=\"500\">\n    </div>\n  </div>\n\n  <!-- Left and right controls -->\n  <a class=\"carousel-control-prev\" href=\"#demo\" data-slide=\"prev\">\n    <span class=\"carousel-control-prev-icon\"></span>\n  </a>\n  <a class=\"carousel-control-next\" href=\"#demo\" data-slide=\"next\">\n    <span class=\"carousel-control-next-icon\"></span>\n  </a>\n</div>\n<br>\n<br>\n<div class=\"card-deck\">\n  <div class=\"card\">\n    <img class=\"card-img-top\" src=\"assets/sarabhai.jpg\"  alt=\"Card image cap\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">Sarabhai vs Sarabhai</h5>\n    </div>\n    <div class=\"card-footer\">\n      <small class=\"text-muted\">Episode 1</small>\n    </div>\n  </div>\n  <div class=\"card\">\n    <img class=\"card-img-top\" src=\"assets/masterchef.jpg\" alt=\"Card image cap\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">MasterChef India</h5>\n    </div>\n    <div class=\"card-footer\">\n      <small class=\"text-muted\">Season 1</small>\n    </div>\n  </div>\n  <div class=\"card\">\n    <img class=\"card-img-top\" src=\"assets/koffee.jpg\" alt=\"Card image cap\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">Koffee with Karan</h5>\n    </div>\n    <div class=\"card-footer\">\n      <small class=\"text-muted\">Season 1</small>\n    </div>\n  </div>\n</div>\n<br>\n<br>\n<div class=\"card-deck\">\n  <div class=\"card\">\n    <img class=\"card-img-top\" src=\"assets/friends.jpg\"  alt=\"Card image cap\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">Friends</h5>\n    </div>\n    <div class=\"card-footer\">\n      <small class=\"text-muted\">Season 2</small>\n    </div>\n  </div>\n  <div class=\"card\">\n    <img class=\"card-img-top\" src=\"assets/bigbang.jpg\" alt=\"Card image cap\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">The Bing Bang Theory</h5>\n    </div>\n    <div class=\"card-footer\">\n      <small class=\"text-muted\">Last updated 3 mins ag</small>\n    </div>\n  </div>\n  <div class=\"card\">\n    <img class=\"card-img-top\" src=\"assets/indaus.jpg\" alt=\"Card image cap\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">India Vs Australia</h5>\n    </div>\n    <div class=\"card-footer\">\n      <small class=\"text-muted\">Live Match</small>\n    </div>\n  </div>\n</div>\n<br>\n<br>\n<div class=\"card-deck\">\n  <div class=\"card\">\n    <img class=\"card-img-top\" src=\"assets/ManU.jpg\"  alt=\"Card image cap\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">Manchester Vs Chelesa</h5>\n    </div>\n    <div class=\"card-footer\">\n      <small class=\"text-muted\">Live Score Update</small>\n    </div>\n  </div>\n  <div class=\"card\">\n    <img class=\"card-img-top\" src=\"assets/masterchefaustralia.jpg\" alt=\"Card image cap\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">MasterChef Australia</h5>\n    </div>\n    <div class=\"card-footer\">\n      <small class=\"text-muted\">Season 3</small>\n    </div>\n  </div>\n  <div class=\"card\">\n    <img class=\"card-img-top\" src=\".jpg\" alt=\"Card image cap\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">AB</h5>\n    </div>\n    <div class=\"card-footer\">\n      <small class=\"text-muted\">DEF</small>\n    </div>\n  </div>\n</div>\n<br>\n<br>\n<div class=\"row\">\n  <div class=\"col-md-4\">\n    <h3>Hotstar App</h3>\n    <form action=\"https://play.google.com/store/apps/details?id=in.startv.hotstar&hl=en_IN\">\n      <button style=\"font-size:24px\">Get it on Google Play<i class=\"fa fa-android\" style=\"font-size:36px\"></i></button><br><br>\n    </form>\n    <form action=\"https://itunes.apple.com/in/app/hotstar/id934459219?mt=8\">\n      <button style=\"font-size:24px\">Download it From App Store<i class=\"fa fa-apple\" style=\"font-size:36px\"></i></button>\n    </form>\n  </div>\n  <div class=\"col-md-3\">\n    <h3>Connect with us</h3>\n    <form action=\"https://www.facebook.com/hotstar/\">\n      <button style=\"font-size:24px\"><i class=\"fa fa-facebook-official\" style=\"font-size:36px\"></i></button>\n    </form>\n    <br>\n    <form actio=\"https://twitter.com/login\">\n      <button style=\"font-size:24px\"><i class=\"fa fa-twitter\" style=\"font-size:36px\"></i></button>\n    </form>\n  </div>\n  <div class=\"col-md-5\">\n    <div class=\"row\">\n      <div class=\"col-md-2\" class=\"nav-link\" routerLink=\"/about\" routerLinkActive=\"active\"><h6><a >About</a></h6></div>\n      <div class=\"col-md-2\"><h6><a href=\"termsofuse.html\">Terms Of Use</a></h6></div>\n      <div class=\"col-md-2\"><h6><a href=\"privacypolicy.html\">Privacy Policy</a></h6></div>\n      <div class=\"col-md-2\"><h6><a href=\"faq.html\">FAQ</a></h6></div>\n      <div class=\"col-md-2\" class=\"nav-link\" routerLink=\"/form\" routerLinkActive=\"active\"><h6><a>Feedback</a></h6></div>\n      <div class=\"col-md-2\"><h6><a href=\"careers.html\">Careers</a></h6></div>\n    </div>\n  </div>\n</div>\n<br>\n</body>\n\n<!-- <router-outlet></router-outlet>\n<app-login></app-login> -->\n\n\n"

/***/ }),

/***/ "./src/app/first/first.component.ts":
/*!******************************************!*\
  !*** ./src/app/first/first.component.ts ***!
  \******************************************/
/*! exports provided: FirstComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstComponent", function() { return FirstComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FirstComponent = /** @class */ (function () {
    function FirstComponent() {
    }
    FirstComponent.prototype.ngOnInit = function () {
    };
    FirstComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-first',
            template: __webpack_require__(/*! ./first.component.html */ "./src/app/first/first.component.html"),
            styles: [__webpack_require__(/*! ./first.component.css */ "./src/app/first/first.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FirstComponent);
    return FirstComponent;
}());



/***/ }),

/***/ "./src/app/form/form.component.css":
/*!*****************************************!*\
  !*** ./src/app/form/form.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n    text-align: center;\r\n    background-color: #ccffcc;\r\n    font-size: 50px;\r\n  }\r\n#feedback{\r\n    font-size:50px;\r\n}\r\n#shloka{\r\n    font-size:50px;\r\n}"

/***/ }),

/***/ "./src/app/form/form.component.html":
/*!******************************************!*\
  !*** ./src/app/form/form.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<body>\n    <div class=\"jumbotron\">\n      <div class=\"container\">\n          <div class=\"row\">\n              <div class=\"col-md-6 offset-md-3\">\n                  <h3>HotStar FeedBack Form</h3>\n                  <form name=\"form\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\" novalidate>\n                      <div class=\"form-group\">\n                          <label for=\"firstName\">First Name</label>\n                          <input type=\"text\" id=\"shloka\" class=\"form-control\" name=\"firstName\" [(ngModel)]=\"model.firstName\" #firstName=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && firstName.invalid }\" required />\n                          <div *ngIf=\"f.submitted && firstName.invalid\" class=\"invalid-feedback\">\n                              <div *ngIf=\"firstName.errors.required\">First Name is required</div>\n                          </div>\n                      </div>\n                      <br>\n                      <div class=\"form-group\">\n                          <label for=\"lastName\">Last Name</label>\n                          <input type=\"text\" id=\"shloka\" class=\"form-control\" name=\"lastName\" [(ngModel)]=\"model.lastName\" #lastName=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && lastName.invalid }\" required />\n                          <div *ngIf=\"f.submitted && lastName.invalid\" class=\"invalid-feedback\">\n                              <div *ngIf=\"lastName.errors.required\">Last Name is required</div>\n                          </div>\n                      </div>\n                      <br>\n                      <div class=\"form-group\">\n                          <label for=\"email\">Email</label>\n                          <input type=\"text\" id=\"shloka\" class=\"form-control\" name=\"email\" [(ngModel)]=\"model.email\" #email=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && email.invalid }\" required email />\n                          <div *ngIf=\"f.submitted && email.invalid\" class=\"invalid-feedback\">\n                              <div *ngIf=\"email.errors.required\">Email is required</div>\n                              <div *ngIf=\"email.errors.email\">Email must be a valid email address</div>\n                          </div>\n                      </div>\n                      <br>\n                      <div class=\"form-group\">\n                          <label for=\"feedback\">FeedBack</label>\n                          <input type=\"textarea\" id=\"feedback\" class=\"form-control\" name=\"feedback\" [(ngModel)]=\"model.feedback\" #feedback=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && feedback.invalid }\" required minlength=\"20\" />\n                          <div *ngIf=\"f.submitted && feedback.invalid\" class=\"invalid-feedback\">\n                              <div *ngIf=\"feedback.errors.required\">FeedBack is required</div>\n                              <div *ngIf=\"feedback.errors.minlength\">FeedBack must be at least 20 characters</div>\n                          </div>\n                      </div>\n                      <br>\n                      <div class=\"form-group\">\n                          <button id=\"feedback\" class=\"btn btn-primary\">Submit FeedBack</button>\n                      </div>\n                  </form>\n              </div>\n          </div>\n      </div>\n    </div>\n  </body>"

/***/ }),

/***/ "./src/app/form/form.component.ts":
/*!****************************************!*\
  !*** ./src/app/form/form.component.ts ***!
  \****************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FormComponent = /** @class */ (function () {
    function FormComponent() {
    }
    FormComponent.prototype.ngOnInit = function () {
    };
    FormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form',
            template: __webpack_require__(/*! ./form.component.html */ "./src/app/form/form.component.html"),
            styles: [__webpack_require__(/*! ./form.component.css */ "./src/app/form/form.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "./src/app/lifeok/lifeok.component.css":
/*!*********************************************!*\
  !*** ./src/app/lifeok/lifeok.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*Now the styles*/\r\n* {\r\n    margin: 0;\r\n\tpadding: 0;\r\n}\r\nbody {\r\n\tbackground: #ccc;\r\n\tfont-family: arial, verdana, tahoma;\r\n}\r\n/*Time to apply widths for accordian to work\r\nWidth of image = 640px\r\ntotal images = 5\r\nso width of hovered image = 640px\r\nwidth of un-hovered image = 40px - you can set this to anything\r\nso total container width = 640 + 40*4 = 800px;\r\ndefault width = 800/5 = 160px;\r\n*/\r\n.accordian {\r\n\twidth: 805px; height: 320px;\r\n\toverflow: hidden;\r\n\r\n\t/*Time for some styling*/\r\n\tmargin: 100px auto;\r\n\tbox-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.35);\r\n\t-webkit-box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.35);\r\n\t-moz-box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.35);\r\n}\r\n/*A small hack to prevent flickering on some browsers*/\r\n.accordian ul {\r\n\twidth: 1200px;\r\n\t/*This will give ample space to the last item to move\r\n\tinstead of falling down/flickering during hovers.*/\r\n}\r\n.accordian li {\r\n\tposition: relative;\r\n\tdisplay: block;\r\n\twidth: 160px;\r\n\tfloat: left;\r\n\r\n\tborder-left: 1px solid #888;\r\n\r\n\tbox-shadow: 0 0 25px 10px rgba(0, 0, 0, 0.5);\r\n\t-webkit-box-shadow: 0 0 25px 10px rgba(0, 0, 0, 0.5);\r\n\t-moz-box-shadow: 0 0 25px 10px rgba(0, 0, 0, 0.5);\r\n\r\n\t/*Transitions to give animation effect*/\r\n\ttransition: all 0.5s;\r\n\t-webkit-transition: all 0.5s;\r\n\t-moz-transition: all 0.5s;\r\n\t/*If you hover on the images now you should be able to\r\n\tsee the basic accordian*/\r\n}\r\n/*Reduce with of un-hovered elements*/\r\n.accordian ul:hover li {width: 40px;}\r\n/*Lets apply hover effects now*/\r\n/*The LI hover style should override the UL hover style*/\r\n.accordian ul li:hover {width: 640px;}\r\n.accordian li img {\r\n\tdisplay: block;\r\n}\r\n/*Image title styles*/\r\n.image_title {\r\n\tbackground: rgba(0, 0, 0, 0.5);\r\n\tposition: absolute;\r\n\tleft: 0; bottom: 0;\r\nwidth: 640px;\r\n\r\n}\r\n.image_title a {\r\n\tdisplay: block;\r\n\tcolor: #fff;\r\n\ttext-decoration: none;\r\n\tpadding: 20px;\r\n\tfont-size: 16px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/lifeok/lifeok.component.html":
/*!**********************************************!*\
  !*** ./src/app/lifeok/lifeok.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <head>\n    <meta charset=\"utf-8\">\n    <link href=\"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n    <link href=\"//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n\n    <title>LifeOk</title>\n  </head>\n<body>\n  <div class=\"accordian\">\n      <ul>\n    \t\t<li>\n    \t\t\t<div class=\"image_title\">\n    \t\t\t\t<a href=\"https://www.youtube.com/results?search_query=amrit+manthan\">Amrit Manthan</a>\n    \t\t\t</div>\n    \t\t\t<a href=\"https://www.youtube.com/results?search_query=amrit+manthan\">\n    \t\t\t\t<img src=\"https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Amrit_Manthan_new_logo.png/250px-Amrit_Manthan_new_logo.png\" width=\"805px\" height=\"320px\"/>\n    \t\t\t</a>\n    \t\t</li>\n    \t\t<li>\n    \t\t\t<div class=\"image_title\">\n    \t\t\t\t<a href=\"https://www.youtube.com/results?search_query=baawre\">Baawre</a>\n    \t\t\t</div>\n    \t\t\t<a href=\"https://www.youtube.com/results?search_query=baawre\">\n    \t\t\t\t<img src=\"https://timesofindia.indiatimes.com/thumb/msid-40394737,width-800,height-600,resizemode-4/40394737.jpg\" width=\"805px\" height=\"320px\"/>\n    \t\t\t</a>\n    \t\t</li>\n    \t\t<li>\n    \t\t\t<div class=\"image_title\">\n    \t\t\t\t<a href=\"https://www.youtube.com/results?search_query=aasman+se+aage\">Aasman se Aage</a>\n    \t\t\t</div>\n    \t\t\t<a href=\"https://www.youtube.com/results?search_query=aasman+se+aage\">\n    \t\t\t\t<img src=\"https://i.ytimg.com/vi/8pDfr8fzYK4/hqdefault.jpg\" width=\"805px\" height=\"320px\"/>\n    \t\t\t</a>\n    \t\t</li>\n    \t\t<li>\n    \t\t\t<div class=\"image_title\">\n    \t\t\t\t<a href=\"https://www.youtube.com/results?search_query=comedy+classes\">Comedy Classes</a>\n    \t\t\t</div>\n    \t\t\t<a href=\"https://www.youtube.com/results?search_query=comedy+classes\">\n    \t\t\t\t<img src=\"https://secure-media1.hotstarext.com/r1/thumbs/PCTV/52/1652/PCTV-1652-hcdl.jpg\" width=\"805px\" height=\"320px\"/>\n    \t\t\t</a>\n    \t\t</li>\n    \t\t<li>\n    \t\t\t<div class=\"image_title\">\n    \t\t\t\t<a href=\"https://www.youtube.com/results?search_query=bahu+hamari+rajnikant\">Bahu Hamari Rajnikant</a>\n    \t\t\t</div>\n    \t\t\t<a href=\"https://www.youtube.com/results?search_query=bahu+hamari+rajnikant\">\n    \t\t\t\t<img src=\"data:image/jpeg;base64,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\" width=\"805px\" height=\"320px\"/>\n    \t\t\t</a>\n    \t</li>\n  \t</ul>\n  </div>\n</body>\n\n\n"

/***/ }),

/***/ "./src/app/lifeok/lifeok.component.ts":
/*!********************************************!*\
  !*** ./src/app/lifeok/lifeok.component.ts ***!
  \********************************************/
/*! exports provided: LifeokComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LifeokComponent", function() { return LifeokComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LifeokComponent = /** @class */ (function () {
    function LifeokComponent() {
    }
    LifeokComponent.prototype.ngOnInit = function () {
    };
    LifeokComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lifeok',
            template: __webpack_require__(/*! ./lifeok.component.html */ "./src/app/lifeok/lifeok.component.html"),
            styles: [__webpack_require__(/*! ./lifeok.component.css */ "./src/app/lifeok/lifeok.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LifeokComponent);
    return LifeokComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n    text-align: center;\r\n    border: solid;\r\n    margin-top:200px;\r\n    margin-left:400px;\r\n    margin-right: 400px;\r\n    margin-bottom: 50px;\r\n    border-color: #003300;\r\n    padding:50px;\r\n    background-color: #e6ffe6;\r\n  }\r\n  .division{\r\n    background-color: #b3ffb3;\r\n  }\r\n  #next{\r\n    margin-left: 300px;\r\n    margin-top: 20px;\r\n    font-size: 17px;\r\n    color: white;\r\n    padding: 10px;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n    background-color:#006600;\r\n    border-radius: 200px;\r\n  }\r\n  .first{\r\n    position: relative;\r\n    margin: auto;\r\n    width: 100%;\r\n    max-width: 280px;\r\n  }\r\n  .first .label {\r\n    position: absolute;\r\n    top: 1px;\r\n    left: 0;\r\n    font-size: 15px;\r\n    color: black;\r\n    font-weight: 500;\r\n    -webkit-transform-origin: 0 0;\r\n            transform-origin: 0 0;\r\n    transition: all 0.2s ease;\r\n  }\r\n  #register{\r\n    color:#003300;\r\n  }\r\n  .first input {\r\n    width: 100%;\r\n    border: 0;\r\n    font-family: inherit;\r\n    padding: 12px ;\r\n    height: 28px;\r\n    font-size: 24px;\r\n    font-weight: 500;\r\n    border-bottom: 2px solid #c8ccd4;\r\n    background: none;\r\n    border-radius: 0;\r\n    color: black;\r\n    transition: all 0.15s ease;\r\n  }\r\n  .first input:hover {\r\n    background: rgba(34,50,84,0.03);\r\n  }\r\n  .first input:not(:placeholder-shown) + span {\r\n    color: black;\r\n    -webkit-transform: translateY(-16px) scale(0.75);\r\n            transform: translateY(-16px) scale(0.75);\r\n  }\r\n  .first input:focus {\r\n    background: none;\r\n    outline: none;\r\n  }\r\n  .first input:focus + span {\r\n    color: black;\r\n    font-size:30px;\r\n    -webkit-transform: translateY(-46px) scale(1);\r\n            transform: translateY(-46px) scale(1);\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <head>\n    <meta charset=\"utf-8\">\n    <title>Email</title>\n    \n  </head>\n  <body>\n  <form method=\"post\" >\n      \n        <h2>ENTER THE DETAILS TO LOGIN</h2>\n      \n      <div class=\"division\">\n        <label class=\"first\">\n          <input  type=\"email\"  placeholder=\"&nbsp;\" required>\n          <span class=\"label\">Email Id</span>\n        </label>\n        <input id=\"next\" type=\"submit\" name=\"Next\" value=\"Next\" class=\"nav-link\" routerLink=\"/password\" routerLinkActive=\"active\" >\n        <p><i>Dont have an account?</i></p>\n        <p id=\"register\"><a class=\"nav-link\" routerLink=\"/register\" routerLinkActive=\"active\" >Click Here To Register</a></p>\n      </div>\n    \n  </form>\n</body>\n<!-- <router-outlet></router-outlet> -->\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { FireauthService } from '../shared/fireauth.service';
//import { Router } from '@angular/router';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/password/password.component.css":
/*!*************************************************!*\
  !*** ./src/app/password/password.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n    text-align: center;\r\n    border: solid;\r\n    margin-top:200px;\r\n    margin-left:400px;\r\n    margin-right: 400px;\r\n    margin-bottom: 50px;\r\n    border-color: #003300;\r\n    padding:50px;\r\n    background-color: #e6ffe6;\r\n  }\r\n  .division{\r\n    background-color: #b3ffb3;\r\n  }\r\n  #next{\r\n    margin-left: 300px;\r\n    margin-top: 20px;\r\n    font-size: 17px;\r\n    color: white;\r\n    padding: 10px;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n    background-color:#006600;\r\n    border-radius: 200px;\r\n  }\r\n  .first{\r\n    position: relative;\r\n    margin: auto;\r\n    width: 100%;\r\n    max-width: 280px;\r\n  }\r\n  .first .label {\r\n    position: absolute;\r\n    top: 1px;\r\n    left: 0;\r\n    font-size: 15px;\r\n    color: black;\r\n    font-weight: 500;\r\n    -webkit-transform-origin: 0 0;\r\n            transform-origin: 0 0;\r\n    transition: all 0.2s ease;\r\n  }\r\n  #register{\r\n    color:#003300;\r\n  }\r\n  .first input {\r\n    width: 100%;\r\n    border: 0;\r\n    font-family: inherit;\r\n    padding: 12px ;\r\n    height: 28px;\r\n    font-size: 24px;\r\n    font-weight: 500;\r\n    border-bottom: 2px solid #c8ccd4;\r\n    background: none;\r\n    border-radius: 0;\r\n    color: black;\r\n    transition: all 0.15s ease;\r\n  }\r\n  .first input:hover {\r\n    background: rgba(34,50,84,0.03);\r\n  }\r\n  .first input:not(:placeholder-shown) + span {\r\n    color: black;\r\n    -webkit-transform: translateY(-16px) scale(0.75);\r\n            transform: translateY(-16px) scale(0.75);\r\n  }\r\n  .first input:focus {\r\n    background: none;\r\n    outline: none;\r\n  }\r\n  .first input:focus + span {\r\n    color: black;\r\n    font-size:30px;\r\n    -webkit-transform: translateY(-46px) scale(1);\r\n            transform: translateY(-46px) scale(1);\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/password/password.component.html":
/*!**************************************************!*\
  !*** ./src/app/password/password.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <head>\n    <meta charset=\"utf-8\">\n    <title>Password</title>\n\n  </head>\n  <body>\n  <form >\n    \n      <p>ENTER THE DETAILS TO LOGIN</p>\n      <div class=\"division\">\n        <label class=\"first\">\n          <input  type=\"password\"  placeholder=\"&nbsp;\" required>\n          <span class=\"label\">Password</span>\n        </label>\n        <input id=\"next\" type=\"submit\" name=\"Next\" value=\"Next\" class=\"nav-link\" routerLink=\"/first\" routerLinkActive=\"active\">\n      </div>\n     \n   \n  </form>\n</body>\n  \n\n"

/***/ }),

/***/ "./src/app/password/password.component.ts":
/*!************************************************!*\
  !*** ./src/app/password/password.component.ts ***!
  \************************************************/
/*! exports provided: PasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordComponent", function() { return PasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PasswordComponent = /** @class */ (function () {
    function PasswordComponent() {
    }
    PasswordComponent.prototype.ngOnInit = function () {
    };
    PasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-password',
            template: __webpack_require__(/*! ./password.component.html */ "./src/app/password/password.component.html"),
            styles: [__webpack_require__(/*! ./password.component.css */ "./src/app/password/password.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PasswordComponent);
    return PasswordComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n    margin:15px;\r\n    background-color: #ccffcc;\r\n  }\r\n  .box{\r\n    margin:400px;\r\n    margin-bottom: 0px;\r\n    margin-top:2px;\r\n    text-align:left;\r\n    padding-left: 125px;\r\n    background-color: #e6ffe6;\r\n    border-color: red;\r\n    border: solid;\r\n  }\r\n  .box h1{\r\n    text-transform: full-width;\r\n    padding-left: 40px;\r\n    color:#3C6E71;\r\n  }\r\n  .box input[type=\"email\"],.box input[type=\"password\"],.box input[type=\"text\"]\r\n  {\r\n  /*  margin:20px auto;*/\r\n    text-align:left;\r\n    border:2px solid;\r\n    padding:10px 10px;\r\n    background:white;\r\n    border-radius:24px;\r\n    border-color:#3C6E71;\r\n    transition:0.25s;\r\n    cursor:pointer;\r\n    color:#3C6E71;\r\n    font-size: 15px;\r\n  }\r\n  .box input[type=\"email\"]:focus,.box input[type=\"password\"]:focus,.box input[type=\"text\"]:focus{\r\n    width:250px;\r\n    border-color:#003300;\r\n  }\r\n  .box input[type=\"submit\"]\r\n  {\r\n    margin:20px auto;\r\n    margin-top: 10px;\r\n    text-align:center;\r\n    background:none;\r\n    border:2px solid #54DEFD;\r\n    padding:14px 40px;\r\n    border-radius:24px;\r\n    border-color:#cacaca;\r\n    transition:0.25s;\r\n    cursor:pointer;\r\n    color:#003300;\r\n    background-color: #FFFAFF;\r\n  }\r\n  .box input[type=\"submit\"]:hover{\r\n    color:black;\r\n    background:#ccffcc;\r\n    border-color:#003300;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<head>\n\t<title>Register</title>\n</head>\n<body>\n\t<form  >\n\t\t<div class=\"box\">\n\t\t\t<h1><em>Register</em></h1>\n\t\t\t<!-- <p id='first'><strong>FIRST NAME</strong></p> -->\n      <p id='first'><strong>FIRST NAME</strong></p>\n\t\t\t<p><input  id='entry' type=\"text\" name=\"First Name\" placeholder=\"Enter your First Name\" required></p>\n\t\t\t<p id='last'><strong>LAST NAME</strong></p>\n\t\t\t<p><input  id='entry' type=\"text\" name=\"Last Name\" placeholder=\"Enter your Last Name\" required></p>\n\t\t\t<p id='password'><strong>PASSWORD</strong></p>\n\t\t\t<p><input  id='entry' type=\"password\" name=\"Password\" placeholder=\"Enter your password\" required></p>\n\t\t\t<p id='email'><strong>EMAIL ID</strong></p>\n\t\t\t<p><input  id='entry' type=\"email\" name=\"Email Id\" placeholder=\"Enter your Email Id\" required></p>\n\t\t\t<p id='gender'><strong>GENDER</strong></p>\n\t\t\t<p><input type=\"radio\" name=\"Gender\">Female</p>\n\t\t\t<p><input type=\"radio\" name=\"Gender\">Male</p>\n\t\t\t<p><input type=\"submit\" name=\"Submit\"  value=\"Register\" class=\"nav-link\" routerLink=\"/first\" routerLinkActive=\"active\"></p>\n\t\t</div>\n\t</form>\n</body>\n\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/starbharat/starbharat.component.css":
/*!*****************************************************!*\
  !*** ./src/app/starbharat/starbharat.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*Now the styles*/\r\n* {\r\n    margin: 0;\r\n\tpadding: 0;\r\n}\r\nbody {\r\n\tbackground: #ccc;\r\n\tfont-family: arial, verdana, tahoma;\r\n}\r\n/*Time to apply widths for accordian to work\r\nWidth of image = 640px\r\ntotal images = 5\r\nso width of hovered image = 640px\r\nwidth of un-hovered image = 40px - you can set this to anything\r\nso total container width = 640 + 40*4 = 800px;\r\ndefault width = 800/5 = 160px;\r\n*/\r\n.accordian {\r\n\twidth: 805px; height: 320px;\r\n\toverflow: hidden;\r\n\r\n\t/*Time for some styling*/\r\n\tmargin: 100px auto;\r\n\tbox-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.35);\r\n\t-webkit-box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.35);\r\n\t-moz-box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.35);\r\n}\r\n/*A small hack to prevent flickering on some browsers*/\r\n.accordian ul {\r\n\twidth: 1200px;\r\n\t/*This will give ample space to the last item to move\r\n\tinstead of falling down/flickering during hovers.*/\r\n}\r\n.accordian li {\r\n\tposition: relative;\r\n\tdisplay: block;\r\n\twidth: 160px;\r\n\tfloat: left;\r\n\r\n\tborder-left: 1px solid #888;\r\n\r\n\tbox-shadow: 0 0 25px 10px rgba(0, 0, 0, 0.5);\r\n\t-webkit-box-shadow: 0 0 25px 10px rgba(0, 0, 0, 0.5);\r\n\t-moz-box-shadow: 0 0 25px 10px rgba(0, 0, 0, 0.5);\r\n\r\n\t/*Transitions to give animation effect*/\r\n\ttransition: all 0.5s;\r\n\t-webkit-transition: all 0.5s;\r\n\t-moz-transition: all 0.5s;\r\n\t/*If you hover on the images now you should be able to\r\n\tsee the basic accordian*/\r\n}\r\n/*Reduce with of un-hovered elements*/\r\n.accordian ul:hover li {width: 40px;}\r\n/*Lets apply hover effects now*/\r\n/*The LI hover style should override the UL hover style*/\r\n.accordian ul li:hover {width: 640px;}\r\n.accordian li img {\r\n\tdisplay: block;\r\n}\r\n/*Image title styles*/\r\n.image_title {\r\n\tbackground: rgba(0, 0, 0, 0.5);\r\n\tposition: absolute;\r\n\tleft: 0; bottom: 0;\r\nwidth: 640px;\r\n\r\n}\r\n.image_title a {\r\n\tdisplay: block;\r\n\tcolor: #fff;\r\n\ttext-decoration: none;\r\n\tpadding: 20px;\r\n\tfont-size: 16px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/starbharat/starbharat.component.html":
/*!******************************************************!*\
  !*** ./src/app/starbharat/starbharat.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <head>\n    <meta charset=\"utf-8\">\n    <link href=\"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n    <link href=\"//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n\n    <title>StarPlus</title>\n  </head>\n<body>\n  <div class=\"accordian\">\n      <ul>\n    \t\t<li>\n    \t\t\t<div class=\"image_title\">\n    \t\t\t\t<a href=\"https://www.youtube.com/results?search_query=nimki+mukhiya\">Nimki Muhkiya</a>\n    \t\t\t</div>\n    \t\t\t<a href=\"https://www.youtube.com/results?search_query=nimki+mukhiya\">\n    \t\t\t\t<img src=\"https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/3865/143865-h\" width=\"805px\" height=\"320px\"/>\n    \t\t\t</a>\n    \t\t</li>\n    \t\t<li>\n    \t\t\t<div class=\"image_title\">\n    \t\t\t\t<a href=\"https://www.youtube.com/results?search_query=jiji+maa\">Jiji Maa</a>\n    \t\t\t</div>\n    \t\t\t<a href=\"https://www.youtube.com/results?search_query=jiji+maa\">\n    \t\t\t\t<img src=\"https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/803/220803-h\" width=\"805px\" height=\"320px\"/>\n    \t\t\t</a>\n    \t\t</li>\n    \t\t<li>\n    \t\t\t<div class=\"image_title\">\n    \t\t\t\t<a href=\"https://www.youtube.com/results?search_query=kya+haal+mr+panchaal\">Kya Haal, Mr Panchaal?</a>\n    \t\t\t</div>\n    \t\t\t<a href=\"https://www.youtube.com/results?search_query=kya+haal+mr+panchaal\">\n    \t\t\t\t<img src=\"https://upload.wikimedia.org/wikipedia/en/9/96/Kya_Haal_Mr._Paanchal-serial.jpg\" width=\"805px\" height=\"320px\"/>\n    \t\t\t</a>\n    \t\t</li>\n    \t\t<li>\n    \t\t\t<div class=\"image_title\">\n    \t\t\t\t<a href=\"https://www.youtube.com/results?search_query=om+shanti+om+star+bharat\">Om Shaanti Om</a>\n    \t\t\t</div>\n    \t\t\t<a href=\"https://www.youtube.com/results?search_query=om+shanti+om+star+bharat\">\n    \t\t\t\t<img src=\"https://i.ytimg.com/vi/FPMin6iIRAU/maxresdefault.jpg\" width=\"805px\" height=\"320px\"/>\n    \t\t\t</a>\n    \t\t</li>\n    \t\t<li>\n    \t\t\t<div class=\"image_title\">\n    \t\t\t\t<a href=\"https://www.youtube.com/results?search_query=kaal+bhairav+rahasya\">Kaal Bhairav Rahasya</a>\n    \t\t\t</div>\n    \t\t\t<a href=\"https://www.youtube.com/results?search_query=kaal+bhairav+rahasya\">\n    \t\t\t\t<img src=\"data:image/jpeg;base64,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\" width=\"805px\" height=\"320px\"/>\n    \t\t\t</a>\n    \t</li>\n  \t</ul>\n  </div>\n</body>\n\n"

/***/ }),

/***/ "./src/app/starbharat/starbharat.component.ts":
/*!****************************************************!*\
  !*** ./src/app/starbharat/starbharat.component.ts ***!
  \****************************************************/
/*! exports provided: StarbharatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarbharatComponent", function() { return StarbharatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StarbharatComponent = /** @class */ (function () {
    function StarbharatComponent() {
    }
    StarbharatComponent.prototype.ngOnInit = function () {
    };
    StarbharatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-starbharat',
            template: __webpack_require__(/*! ./starbharat.component.html */ "./src/app/starbharat/starbharat.component.html"),
            styles: [__webpack_require__(/*! ./starbharat.component.css */ "./src/app/starbharat/starbharat.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StarbharatComponent);
    return StarbharatComponent;
}());



/***/ }),

/***/ "./src/app/starplus/starplus.component.css":
/*!*************************************************!*\
  !*** ./src/app/starplus/starplus.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*Now the styles*/\r\n* {\r\n    margin: 0;\r\n\tpadding: 0;\r\n}\r\nbody {\r\n\tbackground: #ccc;\r\n\tfont-family: arial, verdana, tahoma;\r\n}\r\n/*Time to apply widths for accordian to work\r\nWidth of image = 640px\r\ntotal images = 5\r\nso width of hovered image = 640px\r\nwidth of un-hovered image = 40px - you can set this to anything\r\nso total container width = 640 + 40*4 = 800px;\r\ndefault width = 800/5 = 160px;\r\n*/\r\n.accordian {\r\n\twidth: 805px; height: 320px;\r\n\toverflow: hidden;\r\n\r\n\t/*Time for some styling*/\r\n\tmargin: 100px auto;\r\n\tbox-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.35);\r\n\t-webkit-box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.35);\r\n\t-moz-box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.35);\r\n}\r\n/*A small hack to prevent flickering on some browsers*/\r\n.accordian ul {\r\n\twidth: 1200px;\r\n\t/*This will give ample space to the last item to move\r\n\tinstead of falling down/flickering during hovers.*/\r\n}\r\n.accordian li {\r\n\tposition: relative;\r\n\tdisplay: block;\r\n\twidth: 160px;\r\n\tfloat: left;\r\n\r\n\tborder-left: 1px solid #888;\r\n\r\n\tbox-shadow: 0 0 25px 10px rgba(0, 0, 0, 0.5);\r\n\t-webkit-box-shadow: 0 0 25px 10px rgba(0, 0, 0, 0.5);\r\n\t-moz-box-shadow: 0 0 25px 10px rgba(0, 0, 0, 0.5);\r\n\r\n\t/*Transitions to give animation effect*/\r\n\ttransition: all 0.5s;\r\n\t-webkit-transition: all 0.5s;\r\n\t-moz-transition: all 0.5s;\r\n\t/*If you hover on the images now you should be able to\r\n\tsee the basic accordian*/\r\n}\r\n/*Reduce with of un-hovered elements*/\r\n.accordian ul:hover li {width: 40px;}\r\n/*Lets apply hover effects now*/\r\n/*The LI hover style should override the UL hover style*/\r\n.accordian ul li:hover {width: 640px;}\r\n.accordian li img {\r\n\tdisplay: block;\r\n}\r\n/*Image title styles*/\r\n.image_title {\r\n\tbackground: rgba(0, 0, 0, 0.5);\r\n\tposition: absolute;\r\n\tleft: 0; bottom: 0;\r\nwidth: 640px;\r\n\r\n}\r\n.image_title a {\r\n\tdisplay: block;\r\n\tcolor: #fff;\r\n\ttext-decoration: none;\r\n\tpadding: 20px;\r\n\tfont-size: 16px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/starplus/starplus.component.html":
/*!**************************************************!*\
  !*** ./src/app/starplus/starplus.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <head>\n    <meta charset=\"utf-8\">\n    <link href=\"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n    <link href=\"//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n    \n    <title>StarPlus</title>\n  </head>\n<body>\n  <div class=\"accordian\">\n      <ul>\n    \t\t<li>\n    \t\t\t<div class=\"image_title\">\n    \t\t\t\t<a href=\"https://www.youtube.com/results?search_query=yeh+rishta+kya+kehlata+hai\">Yeh Rishta Kya Kehlata Hai</a>\n    \t\t\t</div>\n    \t\t\t<a href=\"https://www.youtube.com/results?search_query=yeh+rishta+kya+kehlata+hai\">\n    \t\t\t\t<img src=\"https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Yeh_Rishta_Kya_Kehlata_Hai_Poster.jpg/250px-Yeh_Rishta_Kya_Kehlata_Hai_Poster.jpg\" width=\"805px\" height=\"320px\"/>\n    \t\t\t</a>\n    \t\t</li>\n    \t\t<li>\n    \t\t\t<div class=\"image_title\">\n    \t\t\t\t<a href=\"https://www.youtube.com/results?search_query=masterchef+india+\">Master Chef India</a>\n    \t\t\t</div>\n    \t\t\t<a href=\"https://www.youtube.com/results?search_query=masterchef+india+\">\n    \t\t\t\t<img src=\"https://secure-media1.hotstarext.com/r1/thumbs/PCTV/20/11120/PCTV-11120-hcdl.jpg\" width=\"805px\" height=\"320px\"/>\n    \t\t\t</a>\n    \t\t</li>\n    \t\t<li>\n    \t\t\t<div class=\"image_title\">\n    \t\t\t\t<a href=\"https://www.youtube.com/results?search_query=dance%2B\">Dance +</a>\n    \t\t\t</div>\n    \t\t\t<a href=\"https://www.youtube.com/results?search_query=dance%2B\">\n    \t\t\t\t<img src=\"http://www.dancewithme.in/wp-content/uploads/2016/04/Dance-With-Me-India-TV-Show-Dance-Plus-1.jpg\"width=\"805px\" height=\"320px\"/>\n    \t\t\t</a>\n    \t\t</li>\n    \t\t<li>\n    \t\t\t<div class=\"image_title\">\n    \t\t\t\t<a href=\"https://www.youtube.com/results?search_query=the+voice+india+2019\">The Voice</a>\n    \t\t\t</div>\n    \t\t\t<a href=\"https://www.youtube.com/results?search_query=the+voice+india+2019\">\n    \t\t\t\t<img src=\"https://akm-img-a-in.tosshub.com/indiatoday/images/story/201607/voice-story_647_073016060153.jpg\" width=\"805px\" height=\"320px\"/>\n    \t\t\t</a>\n    \t\t</li>\n    \t\t<li>\n    \t\t\t<div class=\"image_title\">\n    \t\t\t\t<a href=\"https://www.youtube.com/results?search_query=mahabharat+star+plus+full+episodes\">Mahabharat</a>\n    \t\t\t</div>\n    \t\t\t<a href=\"https://www.youtube.com/results?search_query=mahabharat+star+plus+full+episodes\">\n    \t\t\t\t<img src=\"http://youtubehindivideos.com/wp-content/uploads/2017/01/mahabharat-star-plus-all-episodes.jpg\" width=\"805px\" height=\"320px\"/>\n    \t\t\t</a>\n    \t</li>\n  \t</ul>\n  </div>\n</body>\n\n"

/***/ }),

/***/ "./src/app/starplus/starplus.component.ts":
/*!************************************************!*\
  !*** ./src/app/starplus/starplus.component.ts ***!
  \************************************************/
/*! exports provided: StarplusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarplusComponent", function() { return StarplusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StarplusComponent = /** @class */ (function () {
    function StarplusComponent() {
    }
    StarplusComponent.prototype.ngOnInit = function () {
    };
    StarplusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-starplus',
            template: __webpack_require__(/*! ./starplus.component.html */ "./src/app/starplus/starplus.component.html"),
            styles: [__webpack_require__(/*! ./starplus.component.css */ "./src/app/starplus/starplus.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StarplusComponent);
    return StarplusComponent;
}());



/***/ }),

/***/ "./src/app/starvijay/starvijay.component.css":
/*!***************************************************!*\
  !*** ./src/app/starvijay/starvijay.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*Now the styles*/\r\n* {\r\n    margin: 0;\r\n\tpadding: 0;\r\n}\r\nbody {\r\n\tbackground: #ccc;\r\n\tfont-family: arial, verdana, tahoma;\r\n}\r\n/*Time to apply widths for accordian to work\r\nWidth of image = 640px\r\ntotal images = 5\r\nso width of hovered image = 640px\r\nwidth of un-hovered image = 40px - you can set this to anything\r\nso total container width = 640 + 40*4 = 800px;\r\ndefault width = 800/5 = 160px;\r\n*/\r\n.accordian {\r\n\twidth: 805px; height: 320px;\r\n\toverflow: hidden;\r\n\r\n\t/*Time for some styling*/\r\n\tmargin: 100px auto;\r\n\tbox-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.35);\r\n\t-webkit-box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.35);\r\n\t-moz-box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.35);\r\n}\r\n/*A small hack to prevent flickering on some browsers*/\r\n.accordian ul {\r\n\twidth: 1200px;\r\n\t/*This will give ample space to the last item to move\r\n\tinstead of falling down/flickering during hovers.*/\r\n}\r\n.accordian li {\r\n\tposition: relative;\r\n\tdisplay: block;\r\n\twidth: 160px;\r\n\tfloat: left;\r\n\r\n\tborder-left: 1px solid #888;\r\n\r\n\tbox-shadow: 0 0 25px 10px rgba(0, 0, 0, 0.5);\r\n\t-webkit-box-shadow: 0 0 25px 10px rgba(0, 0, 0, 0.5);\r\n\t-moz-box-shadow: 0 0 25px 10px rgba(0, 0, 0, 0.5);\r\n\r\n\t/*Transitions to give animation effect*/\r\n\ttransition: all 0.5s;\r\n\t-webkit-transition: all 0.5s;\r\n\t-moz-transition: all 0.5s;\r\n\t/*If you hover on the images now you should be able to\r\n\tsee the basic accordian*/\r\n}\r\n/*Reduce with of un-hovered elements*/\r\n.accordian ul:hover li {width: 40px;}\r\n/*Lets apply hover effects now*/\r\n/*The LI hover style should override the UL hover style*/\r\n.accordian ul li:hover {width: 640px;}\r\n.accordian li img {\r\n\tdisplay: block;\r\n}\r\n/*Image title styles*/\r\n.image_title {\r\n\tbackground: rgba(0, 0, 0, 0.5);\r\n\tposition: absolute;\r\n\tleft: 0; bottom: 0;\r\nwidth: 640px;\r\n\r\n}\r\n.image_title a {\r\n\tdisplay: block;\r\n\tcolor: #fff;\r\n\ttext-decoration: none;\r\n\tpadding: 20px;\r\n\tfont-size: 16px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/starvijay/starvijay.component.html":
/*!****************************************************!*\
  !*** ./src/app/starvijay/starvijay.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <head>\n    <meta charset=\"utf-8\">\n    <link href=\"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n    <link href=\"//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n    <title>StarVijay</title>\n  </head>\n<body>\n  <div class=\"accordian\">\n      <ul>\n    \t\t<li>\n    \t\t\t<div class=\"image_title\">\n    \t\t\t\t<a href=\"https://www.youtube.com/results?search_query=big+boss+tamil\">Big Boss Tamil</a>\n    \t\t\t</div>\n    \t\t\t<a href=\"https://www.youtube.com/results?search_query=big+boss+tamil\">\n    \t\t\t\t<img src=\"https://www.thenewsminute.com/sites/default/files/styles/news_detail/public/Kamal_BiggBoss.jpg?itok=O43Rt5Pg\" width=\"805px\" height=\"320px\" />\n    \t\t\t</a>\n    \t\t</li>\n    \t\t<li>\n    \t\t\t<div class=\"image_title\">\n    \t\t\t\t<a href=\"https://www.youtube.com/results?search_query=airtel+super+singer\">Airtel Super Singer</a>\n    \t\t\t</div>\n    \t\t\t<a href=\"https://www.youtube.com/results?search_query=airtel+super+singer\" width=\"805px\" height=\"320px\">\n    \t\t\t\t<img src=\"https://i.ytimg.com/vi/Hh_LDRothdc/maxresdefault.jpg\"/>\n    \t\t\t</a>\n    \t\t</li>\n    \t\t<li>\n    \t\t\t<div class=\"image_title\">\n    \t\t\t\t<a href=\"https://www.youtube.com/results?search_query=mappillai\">Mappillai</a>\n    \t\t\t</div>\n    \t\t\t<a href=\"https://www.youtube.com/results?search_query=mappillai\">\n    \t\t\t\t<img src=\"https://upload.wikimedia.org/wikipedia/en/thumb/d/d9/Mappillai_2011.jpg/220px-Mappillai_2011.jpg\" width=\"805px\" height=\"320px\"/>\n    \t\t\t</a>\n    \t\t</li>\n    \t\t<li>\n    \t\t\t<div class=\"image_title\">\n    \t\t\t\t<a href=\"https://www.youtube.com/results?search_query=super+snger+junior\">Super Singer Junior</a>\n    \t\t\t</div>\n    \t\t\t<a href=\"https://www.youtube.com/results?search_query=super+snger+junior\" >\n    \t\t\t\t<img src=\"https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/1919/71919-h\" width=\"805px\" height=\"320px\"/>\n    \t\t\t</a>\n    \t\t</li>\n    \t\t<li>\n    \t\t\t<div class=\"image_title\">\n    \t\t\t\t<a href=\"https://www.youtube.com/results?search_query=raja+rani\">Raja Rani</a>\n    \t\t\t</div>\n    \t\t\t<a href=\"https://www.youtube.com/results?search_query=raja+rani\">\n    \t\t\t\t<img src=\"https://secure-media1.hotstarext.com/r1/thumbs/PCTV/30/14230/PCTV-14230-hcdl.jpg\" width=\"805px\" height=\"320px\"/>\n    \t\t\t</a>\n    \t</li>\n  \t</ul>\n  </div>\n</body>\n\n"

/***/ }),

/***/ "./src/app/starvijay/starvijay.component.ts":
/*!**************************************************!*\
  !*** ./src/app/starvijay/starvijay.component.ts ***!
  \**************************************************/
/*! exports provided: StarvijayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarvijayComponent", function() { return StarvijayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StarvijayComponent = /** @class */ (function () {
    function StarvijayComponent() {
    }
    StarvijayComponent.prototype.ngOnInit = function () {
    };
    StarvijayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-starvijay',
            template: __webpack_require__(/*! ./starvijay.component.html */ "./src/app/starvijay/starvijay.component.html"),
            styles: [__webpack_require__(/*! ./starvijay.component.css */ "./src/app/starvijay/starvijay.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StarvijayComponent);
    return StarvijayComponent;
}());



/***/ }),

/***/ "./src/app/starworld/starworld.component.css":
/*!***************************************************!*\
  !*** ./src/app/starworld/starworld.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*Now the styles*/\r\n* {\r\n    margin: 0;\r\n\tpadding: 0;\r\n}\r\nbody {\r\n\tbackground: #ccc;\r\n\tfont-family: arial, verdana, tahoma;\r\n}\r\n/*Time to apply widths for accordian to work\r\nWidth of image = 640px\r\ntotal images = 5\r\nso width of hovered image = 640px\r\nwidth of un-hovered image = 40px - you can set this to anything\r\nso total container width = 640 + 40*4 = 800px;\r\ndefault width = 800/5 = 160px;\r\n*/\r\n.accordian {\r\n\twidth: 805px; height: 320px;\r\n\toverflow: hidden;\r\n\r\n\t/*Time for some styling*/\r\n\tmargin: 100px auto;\r\n\tbox-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.35);\r\n\t-webkit-box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.35);\r\n\t-moz-box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.35);\r\n}\r\n/*A small hack to prevent flickering on some browsers*/\r\n.accordian ul {\r\n\twidth: 1200px;\r\n\t/*This will give ample space to the last item to move\r\n\tinstead of falling down/flickering during hovers.*/\r\n}\r\n.accordian li {\r\n\tposition: relative;\r\n\tdisplay: block;\r\n\twidth: 160px;\r\n\tfloat: left;\r\n\r\n\tborder-left: 1px solid #888;\r\n\r\n\tbox-shadow: 0 0 25px 10px rgba(0, 0, 0, 0.5);\r\n\t-webkit-box-shadow: 0 0 25px 10px rgba(0, 0, 0, 0.5);\r\n\t-moz-box-shadow: 0 0 25px 10px rgba(0, 0, 0, 0.5);\r\n\r\n\t/*Transitions to give animation effect*/\r\n\ttransition: all 0.5s;\r\n\t-webkit-transition: all 0.5s;\r\n\t-moz-transition: all 0.5s;\r\n\t/*If you hover on the images now you should be able to\r\n\tsee the basic accordian*/\r\n}\r\n/*Reduce with of un-hovered elements*/\r\n.accordian ul:hover li {width: 40px;}\r\n/*Lets apply hover effects now*/\r\n/*The LI hover style should override the UL hover style*/\r\n.accordian ul li:hover {width: 640px;}\r\n.accordian li img {\r\n\tdisplay: block;\r\n}\r\n/*Image title styles*/\r\n.image_title {\r\n\tbackground: rgba(0, 0, 0, 0.5);\r\n\tposition: absolute;\r\n\tleft: 0; bottom: 0;\r\nwidth: 640px;\r\n\r\n}\r\n.image_title a {\r\n\tdisplay: block;\r\n\tcolor: #fff;\r\n\ttext-decoration: none;\r\n\tpadding: 20px;\r\n\tfont-size: 16px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/starworld/starworld.component.html":
/*!****************************************************!*\
  !*** ./src/app/starworld/starworld.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <head>\n    <meta charset=\"utf-8\">\n    <link href=\"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n    <link href=\"//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n    \n    <title>StarWorld</title>\n  </head>\n<body>\n  <div class=\"accordian\">\n      <ul>\n    \t\t<li>\n    \t\t\t<div class=\"image_title\">\n    \t\t\t\t<a href=\"https://www.youtube.com/results?search_query=white+collar\">White Collar</a>\n    \t\t\t</div>\n    \t\t\t<a href=\"https://www.youtube.com/results?search_query=white+collar\">\n    \t\t\t\t<img src=\"https://assets.change.org/photos/8/si/ml/CQsiMLwRWLgwTuh-800x450-noPad.jpg?1484810162\" width=\"805px\" height=\"320px\"/>\n    \t\t\t</a>\n    \t\t</li>\n    \t\t<li>\n    \t\t\t<div class=\"image_title\">\n    \t\t\t\t<a href=\"https://www.youtube.com/results?search_query=proven+innocent\">Proven Innocent</a>\n    \t\t\t</div>\n    \t\t\t<a href=\"https://www.youtube.com/results?search_query=proven+innocent\">\n    \t\t\t\t<img src=\"https://m.media-amazon.com/images/M/MV5BYjkyMGVmNTctYTIwZS00ZDQ2LTliNDAtMmYzYWZjNDRkNTQ5XkEyXkFqcGdeQXVyNTM0NTU5Mg@@._V1_.jpg\" width=\"805px\" height=\"320px\"/>\n    \t\t\t</a>\n    \t\t</li>\n    \t\t<li>\n    \t\t\t<div class=\"image_title\">\n    \t\t\t\t<a href=\"https://www.youtube.com/results?search_query=koffee+with+karan\">Koffee with Karan</a>\n    \t\t\t</div>\n    \t\t\t<a href=\"https://www.youtube.com/results?search_query=koffee+with+karan\">\n    \t\t\t\t<img src=\"https://images.indianexpress.com/2018/10/koffee-with-karan-7591.jpg\" width=\"805px\" height=\"320px\"/>\n    \t\t\t</a>\n    \t\t</li>\n    \t\t<li>\n    \t\t\t<div class=\"image_title\">\n    \t\t\t\t<a href=\"https://www.youtube.com/results?search_query=modern+family\">Modern Family</a>\n    \t\t\t</div>\n    \t\t\t<a href=\"https://www.youtube.com/results?search_query=modern+family\">\n    \t\t\t\t<img src=\"https://cdn1.edgedatg.com/aws/v2/abc/ModernFamily/showimages/c3685b492d76239ef30099b998092298/1200x627-Q80_c3685b492d76239ef30099b998092298.jpg\" width=\"805px\" height=\"320px\"/>\n    \t\t\t</a>\n    \t\t</li>\n    \t\t<li>\n    \t\t\t<div class=\"image_title\">\n    \t\t\t\t<a href=\"https://www.youtube.com/results?search_query=how+i+met+your+mother\">How I Met Your Mother</a>\n    \t\t\t</div>\n    \t\t\t<a href=\"https://www.youtube.com/results?search_query=how+i+met+your+mother\">\n    \t\t\t\t<img src=\"https://m.media-amazon.com/images/M/MV5BZWJjMDEzZjUtYWE1Yy00M2ZiLThlMmItODljNTAzODFiMzc2XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg\" width=\"805px\" height=\"320px\"/>\n    \t\t\t</a>\n    \t</li>\n  \t</ul>\n  </div>\n</body>\n"

/***/ }),

/***/ "./src/app/starworld/starworld.component.ts":
/*!**************************************************!*\
  !*** ./src/app/starworld/starworld.component.ts ***!
  \**************************************************/
/*! exports provided: StarworldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarworldComponent", function() { return StarworldComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StarworldComponent = /** @class */ (function () {
    function StarworldComponent() {
    }
    StarworldComponent.prototype.ngOnInit = function () {
    };
    StarworldComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-starworld',
            template: __webpack_require__(/*! ./starworld.component.html */ "./src/app/starworld/starworld.component.html"),
            styles: [__webpack_require__(/*! ./starworld.component.css */ "./src/app/starworld/starworld.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StarworldComponent);
    return StarworldComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyC6nm2K28WSkqeeSjqaa5npofVrv7c18NA",
        authDomain: "suven-7fcd3.firebaseapp.com",
        databaseURL: "https://suven-7fcd3.firebaseio.com",
        projectId: "suven-7fcd3",
        storageBucket: "suven-7fcd3.appspot.com",
        messagingSenderId: "22186476193"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Tania Rajabally\Desktop\suven\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map