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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _chat_chat_component__WEBPACK_IMPORTED_MODULE_2__["ChatComponent"] },
    { path: 'marvin', component: _chat_chat_component__WEBPACK_IMPORTED_MODULE_2__["ChatComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\n  font-family: 'Raleway', sans-serif;\n  text-align: center;\n}\n\nh1, h2, h3, h4{\n  font-family: 'Comfortaa', cursive;\n}\n\nfooter{\n  padding: 2em;\n  background-color: #eee;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQ0FBbUM7RUFDbkMsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0Usa0NBQWtDO0NBQ25DOztBQUVEO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtDQUN4QiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5oMSwgaDIsIGgzLCBoNHtcbiAgZm9udC1mYW1pbHk6ICdDb21mb3J0YWEnLCBjdXJzaXZlO1xufVxuXG5mb290ZXJ7XG4gIHBhZGRpbmc6IDJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h1> Marvin </h1  >\n  <h4> O Marciano </h4>\n\n  <div>\n  <router-outlet></router-outlet>\n  <div>\n\n  <footer>\n    <div> Feito com &hearts; e desespero por alan </div>\n  </footer>\n</div>\n"

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
        this.title = 'marvin';
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _chat_chat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chat/chat.service */ "./src/app/chat/chat.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _chat_chat_component__WEBPACK_IMPORTED_MODULE_7__["ChatComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"]
            ],
            providers: [_chat_chat_service__WEBPACK_IMPORTED_MODULE_4__["ChatService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/chat/chat.component.css":
/*!*****************************************!*\
  !*** ./src/app/chat/chat.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".from-user {\n  text-align: right;\n}\n\n.from-user .message-inner {\n  position: relative;\n  font-size: 1rem;\n  color: #fff;\n  letter-spacing: 0.015rem;\n  line-height: 1.3125rem;\n  background: #00B4A0;\n  border-radius: 1.25rem;\n  border-bottom-right-radius: 0;\n  text-align: left;\n  display: inline-block;\n  margin-left: 2.5rem;\n  min-width: 2.5rem;\n}\n\n.from-user .message-inner p {\n  margin: 0.3125rem;\n  padding: 0 0.9375rem;\n}\n\n.from-user .message-inner:before, .from-user .message-inner:after {\n  content: \"\";\n  position: absolute;\n}\n\n.from-user .message-inner:before {\n  z-index: -2;\n  bottom: -0.375rem;\n  right: 0;\n  height: 0.375rem;\n  width: 0.5rem;\n  background: #1cb3a0;\n}\n\n.from-watson, .message-inner {\n  position: relative;\n  border-radius: 1.5625rem;\n  font-size: 1rem;\n  color: #B5B5B5;\n  letter-spacing: 0.015rem;\n  line-height: 1.3125rem;\n}\n\n.from-watson.latest .message-inner {\n  color: #323232;\n}\n\n.from-watson p {\n  margin: 0.3125rem;\n  padding: 0 1.25rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9jaGF0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7Q0FDbkI7O0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQix1QkFBdUI7RUFDdkIsOEJBQThCO0VBQzlCLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtDQUNuQjs7QUFFRDtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7Q0FDdEI7O0FBRUQ7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxvQkFBb0I7Q0FDckI7O0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLHVCQUF1QjtDQUN4Qjs7QUFFRDtFQUNFLGVBQWU7Q0FDaEI7O0FBRUQ7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0NBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY2hhdC9jaGF0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnJvbS11c2VyIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5mcm9tLXVzZXIgLm1lc3NhZ2UtaW5uZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY29sb3I6ICNmZmY7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAxNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuMzEyNXJlbTtcbiAgYmFja2dyb3VuZDogIzAwQjRBMDtcbiAgYm9yZGVyLXJhZGl1czogMS4yNXJlbTtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDIuNXJlbTtcbiAgbWluLXdpZHRoOiAyLjVyZW07XG59XG5cbi5mcm9tLXVzZXIgLm1lc3NhZ2UtaW5uZXIgcCB7XG4gIG1hcmdpbjogMC4zMTI1cmVtO1xuICBwYWRkaW5nOiAwIDAuOTM3NXJlbTtcbn1cblxuLmZyb20tdXNlciAubWVzc2FnZS1pbm5lcjpiZWZvcmUsIC5mcm9tLXVzZXIgLm1lc3NhZ2UtaW5uZXI6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5mcm9tLXVzZXIgLm1lc3NhZ2UtaW5uZXI6YmVmb3JlIHtcbiAgei1pbmRleDogLTI7XG4gIGJvdHRvbTogLTAuMzc1cmVtO1xuICByaWdodDogMDtcbiAgaGVpZ2h0OiAwLjM3NXJlbTtcbiAgd2lkdGg6IDAuNXJlbTtcbiAgYmFja2dyb3VuZDogIzFjYjNhMDtcbn1cblxuLmZyb20td2F0c29uLCAubWVzc2FnZS1pbm5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogMS41NjI1cmVtO1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiAjQjVCNUI1O1xuICBsZXR0ZXItc3BhY2luZzogMC4wMTVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjMxMjVyZW07XG59XG5cbi5mcm9tLXdhdHNvbi5sYXRlc3QgLm1lc3NhZ2UtaW5uZXIge1xuICBjb2xvcjogIzMyMzIzMjtcbn1cblxuLmZyb20td2F0c29uIHAge1xuICBtYXJnaW46IDAuMzEyNXJlbTtcbiAgcGFkZGluZzogMCAxLjI1cmVtO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/chat/chat.component.html":
/*!******************************************!*\
  !*** ./src/app/chat/chat.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div id=\"chatbox\" >\n\n  <div *ngFor=\"let Mensagem of mensagens\">\n      <div class=\"from-{{Mensagem.autor}}\"  *ngIf=\"Mensagem.autor =='User'\">\n        <div class=\"msg\">\n          <p>{{Mensagem.texto}}</p>\n          <!--<img class=\"chatContainer_image border-image\" src=\"./assets/user_icon.jpg\">-->\n        </div>\n      </div>\n      <div class=\"from-{{Mensagem.autor}}\" *ngIf=\"Mensagem.autor !== 'User'\">\n        <div class=\"msg\">\n          <!--img class=\"chatContainer_image border-image\" src=\"./assets/computer_icon.png\">-->\n          <p>{{Mensagem.texto}}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div  class=\"inputContainer\">\n      <input type=\"text\" id=\"usermsg\" [(ngModel)]=\"mensagemUsuario\" (keydown)=\"keyMessage($event)\">\n      <input name=\"submitmsg\" type=\"button\" id=\"submitmsg\" value=\"Enviar\"\n        (click)=\"onFormSubmit($event)\"/>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/chat/chat.component.ts":
/*!****************************************!*\
  !*** ./src/app/chat/chat.component.ts ***!
  \****************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mensagem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mensagem */ "./src/app/chat/mensagem.ts");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat.service */ "./src/app/chat/chat.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChatComponent = /** @class */ (function () {
    function ChatComponent(chatService, route, router) {
        this.chatService = chatService;
        this.route = route;
        this.router = router;
        this.mensagens = [];
        this.mensagemChat = "";
        this.mensagemUsuario = "";
        this.mensagemErro = "";
    }
    ChatComponent.prototype.ngOnInit = function () {
        //  this.enviar( this.mensagemUsuario );
    };
    ChatComponent.prototype.submit = function () {
        this.mensagemChat = this.mensagemChat + "Você: " + this.mensagemUsuario;
        this.mensagens.push(new _mensagem__WEBPACK_IMPORTED_MODULE_1__["Mensagem"]("user", this.mensagemUsuario));
        this.enviar(this.mensagemUsuario);
        this.mensagemUsuario = "";
    };
    ChatComponent.prototype.onFormSubmit = function (event) {
        this.submit();
    };
    ChatComponent.prototype.keyMessage = function (event) {
        if (event.keyCode == 13) {
            this.submit();
        }
    };
    ChatComponent.prototype.enviar = function (mensagem) {
        var _this = this;
        this.chatService.enviarParaWatson(this.mensagemUsuario).subscribe(function (respostas) { return _this.respostasParser(respostas); }, function (erro) { return _this.mensagemErro = erro; });
    };
    ChatComponent.prototype.respostasParser = function (respostas) {
        for (var i = 0; i < respostas.length; i++) {
            this.mensagens.push(new _mensagem__WEBPACK_IMPORTED_MODULE_1__["Mensagem"]("watson", respostas[i]));
        }
    };
    ChatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! ./chat.component.html */ "./src/app/chat/chat.component.html"),
            styles: [__webpack_require__(/*! ./chat.component.css */ "./src/app/chat/chat.component.css")],
            providers: [_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"]]
        }),
        __metadata("design:paramtypes", [_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/chat/chat.service.ts":
/*!**************************************!*\
  !*** ./src/app/chat/chat.service.ts ***!
  \**************************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChatService = /** @class */ (function () {
    function ChatService(http) {
        this.http = http;
        this.url = "/api/marvin/";
    }
    ChatService.prototype.enviarParaWatson = function (message) {
        console.log("message: " + message);
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        var corpo = {
            context: {},
            input: { "text": message } || {}
        };
        return this.http.post(this.url, corpo, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleErrorObservable));
    };
    ChatService.prototype.extractData = function (res) {
        var body = res.json();
        console.log(body.output.text);
        return body.output.text || [];
    };
    ChatService.prototype.handleErrorObservable = function (error) {
        console.error(error.message || error);
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error.message || error);
    };
    ChatService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], ChatService);
    return ChatService;
}());



/***/ }),

/***/ "./src/app/chat/mensagem.ts":
/*!**********************************!*\
  !*** ./src/app/chat/mensagem.ts ***!
  \**********************************/
/*! exports provided: Mensagem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mensagem", function() { return Mensagem; });
var Mensagem = /** @class */ (function () {
    function Mensagem(autor, texto) {
        this.autor = autor;
        this.texto = texto;
        this.autor = autor;
        this.texto = texto;
    }
    return Mensagem;
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
    production: false
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/alan/workspace/chatbot/marvin/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map