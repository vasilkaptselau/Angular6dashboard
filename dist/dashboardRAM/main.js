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
		var e = new Error('Cannot find module "' + req + '".');
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
/*! exports provided: AppRoutingModule, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inventory/inventory.component */ "./src/app/inventory/inventory.component.ts");
/* harmony import */ var _promo_promo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./promo/promo.component */ "./src/app/promo/promo.component.ts");
/* harmony import */ var _shipping_shipping_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shipping/shipping.component */ "./src/app/shipping/shipping.component.ts");
/* harmony import */ var _new_order_new_order_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-order/new-order.component */ "./src/app/new-order/new-order.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
    { path: 'inventory', component: _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_2__["InventoryComponent"] },
    { path: 'promo', component: _promo_promo_component__WEBPACK_IMPORTED_MODULE_3__["PromoComponent"] },
    { path: 'shipping', component: _shipping_shipping_component__WEBPACK_IMPORTED_MODULE_4__["ShippingComponent"] },
    { path: 'addorder', component: _new_order_new_order_component__WEBPACK_IMPORTED_MODULE_5__["NewOrderComponent"] }
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

var routingComponents = [_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_2__["InventoryComponent"], _promo_promo_component__WEBPACK_IMPORTED_MODULE_3__["PromoComponent"], _shipping_shipping_component__WEBPACK_IMPORTED_MODULE_4__["ShippingComponent"], _new_order_new_order_component__WEBPACK_IMPORTED_MODULE_5__["NewOrderComponent"]];


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

module.exports = "\n<router-outlet></router-outlet>\n"

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
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_inventory_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/inventory.service */ "./src/app/services/inventory.service.ts");
/* harmony import */ var _tables_inventory_table_inventory_table_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tables/inventory-table/inventory-table.component */ "./src/app/tables/inventory-table/inventory-table.component.ts");
/* harmony import */ var _tables_shipping_table_shipping_table_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tables/shipping-table/shipping-table.component */ "./src/app/tables/shipping-table/shipping-table.component.ts");
/* harmony import */ var _tables_promo_list_table_promo_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tables/promo-list-table/promo-list.component */ "./src/app/tables/promo-list-table/promo-list.component.ts");
/* harmony import */ var _services_shipping_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/shipping.service */ "./src/app/services/shipping.service.ts");
/* harmony import */ var _services_promo_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/promo.service */ "./src/app/services/promo.service.ts");
/* harmony import */ var _tables_new_order_table_new_order_table_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./tables/new-order-table/new-order-table.component */ "./src/app/tables/new-order-table/new-order-table.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_new_order_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/new-order.service */ "./src/app/services/new-order.service.ts");
/* harmony import */ var _pop_up_window_pop_up_window_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pop-up-window/pop-up-window.component */ "./src/app/pop-up-window/pop-up-window.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["routingComponents"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_8__["NavigationComponent"],
                _tables_inventory_table_inventory_table_component__WEBPACK_IMPORTED_MODULE_11__["InventoryTableComponent"],
                _tables_shipping_table_shipping_table_component__WEBPACK_IMPORTED_MODULE_12__["ShippingTableComponent"],
                _tables_promo_list_table_promo_list_component__WEBPACK_IMPORTED_MODULE_13__["PromoListComponent"],
                _tables_new_order_table_new_order_table_component__WEBPACK_IMPORTED_MODULE_16__["NewOrderTableComponent"],
                _pop_up_window_pop_up_window_component__WEBPACK_IMPORTED_MODULE_19__["PopUpWindowComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
            ],
            providers: [_services_inventory_service__WEBPACK_IMPORTED_MODULE_10__["InventoryService"],
                _services_shipping_service__WEBPACK_IMPORTED_MODULE_14__["ShippingService"],
                _services_promo_service__WEBPACK_IMPORTED_MODULE_15__["PromoService"],
                _services_new_order_service__WEBPACK_IMPORTED_MODULE_18__["NewOrderService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard-service.service.ts":
/*!**********************************************!*\
  !*** ./src/app/dashboard-service.service.ts ***!
  \**********************************************/
/*! exports provided: DashboardServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardServiceService", function() { return DashboardServiceService; });
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

var DashboardServiceService = /** @class */ (function () {
    function DashboardServiceService() {
        this.tiles = [
            { text: 'Promo', cols: 2, rows: 2, color: '', url: '/promo' },
            { text: 'Inventory', cols: 2, rows: 2, color: '#fff', url: '/inventory' },
            { text: 'Add Order', cols: 2, rows: 2, color: '#fff', url: '/addorder' },
            { text: 'Shipping', cols: 2, rows: 2, color: '', url: '/shipping' },
        ];
    }
    DashboardServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], DashboardServiceService);
    return DashboardServiceService;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n  <mat-toolbar-row class=\"logo\">\n    <span><a href=\"#\" ></a></span>\n  </mat-toolbar-row>\n  <mat-toolbar-row class=\"subtitle\">\n    <span>Dashboard</span>\n  </mat-toolbar-row>\n</mat-toolbar>\n\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
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

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a:-webkit-any-link {\r\n  text-decoration: none;\r\n  font-size: 4rem;\r\n  font-weight: 900;\r\n  background: linear-gradient(-45deg, #98f74a 25%, #0887cc 100%);\r\n  -webkit-background-clip: text;\r\n  -webkit-text-fill-color: transparent;\r\n  text-fill-color: transparent;\r\n\r\n}\na:-moz-any-link {\r\n  text-decoration: none;\r\n  font-size: 4rem;\r\n  font-weight: 900;\r\n  background: linear-gradient(-45deg, #98f74a 25%, #0887cc 100%);\r\n  -webkit-background-clip: text;\r\n  -webkit-text-fill-color: transparent;\r\n  text-fill-color: transparent;\r\n\r\n}\na:any-link {\r\n  text-decoration: none;\r\n  font-size: 4rem;\r\n  font-weight: 900;\r\n  background: linear-gradient(-45deg, #98f74a 25%, #0887cc 100%);\r\n  -webkit-background-clip: text;\r\n  -webkit-text-fill-color: transparent;\r\n  text-fill-color: transparent;\r\n\r\n}\r\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<mat-grid-list cols=\"4\" rowHeight=\"100px\" gutterSize=\"60\">\n  <mat-grid-tile\n    *ngFor=\"let tile of tiles\"\n    [colspan]=\"tile.cols\"\n    [rowspan]=\"tile.rows\"\n    [style.background]=\"tile.color\">\n    <a routerLink=\"{{tile.url}}\">{{tile.text}}</a>\n  </mat-grid-tile>\n</mat-grid-list>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dashboard_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dashboard-service.service */ "./src/app/dashboard-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(dashboardService) {
        this.dashboardService = dashboardService;
        console.log(dashboardService);
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.tiles = this.dashboardService.tiles;
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_dashboard_service_service__WEBPACK_IMPORTED_MODULE_1__["DashboardServiceService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/inventory/inventory.component.css":
/*!***************************************************!*\
  !*** ./src/app/inventory/inventory.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n"

/***/ }),

/***/ "./src/app/inventory/inventory.component.html":
/*!****************************************************!*\
  !*** ./src/app/inventory/inventory.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<app-navigation></app-navigation>\n<app-inventory-table></app-inventory-table>\n\n\n"

/***/ }),

/***/ "./src/app/inventory/inventory.component.ts":
/*!**************************************************!*\
  !*** ./src/app/inventory/inventory.component.ts ***!
  \**************************************************/
/*! exports provided: InventoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryComponent", function() { return InventoryComponent; });
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

var InventoryComponent = /** @class */ (function () {
    function InventoryComponent() {
    }
    InventoryComponent.prototype.ngOnInit = function () {
    };
    InventoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-inventory',
            template: __webpack_require__(/*! ./inventory.component.html */ "./src/app/inventory/inventory.component.html"),
            styles: [__webpack_require__(/*! ./inventory.component.css */ "./src/app/inventory/inventory.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InventoryComponent);
    return InventoryComponent;
}());



/***/ }),

/***/ "./src/app/navigation/navigation.component.css":
/*!*****************************************************!*\
  !*** ./src/app/navigation/navigation.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-icon {\r\n  color: red;\r\n}\r\n.mat-icon-button {\r\n  margin-left: 95%;\r\n  margin-top: -50px;\r\n  margin-right: auto;\r\n  position: absolute;\r\n}\r\na:-webkit-any-link {\r\n  text-decoration: none;\r\n  color: #000;\r\n}\r\n"

/***/ }),

/***/ "./src/app/navigation/navigation.component.html":
/*!******************************************************!*\
  !*** ./src/app/navigation/navigation.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-menu #appMenu=\"matMenu\"  color=\"accent\" xPosition=\"before\">\n  <ng-template matMenuContent>\n    <button mat-menu-item><a routerLink=\"\">Home</a></button>\n    <button mat-menu-item><a routerLink=\"/promo\">Promo</a></button>\n    <button mat-menu-item><a routerLink=\"/inventory\">Inventory</a></button>\n    <button mat-menu-item><a routerLink=\"/addorder\">Add Order</a></button>\n    <button mat-menu-item><a routerLink=\"/shipping\">Shipping</a></button>\n  </ng-template>\n\n</mat-menu>\n<button mat-icon-button [matMenuTriggerFor]=\"appMenu\">\n  <mat-icon>more_vert</mat-icon>\n</button>\n"

/***/ }),

/***/ "./src/app/navigation/navigation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
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

var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.css */ "./src/app/navigation/navigation.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/new-order/new-order.component.css":
/*!***************************************************!*\
  !*** ./src/app/new-order/new-order.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/new-order/new-order.component.html":
/*!****************************************************!*\
  !*** ./src/app/new-order/new-order.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<app-navigation></app-navigation>\n<app-new-order-table></app-new-order-table>\n<span class=\"toolbar-spacer\"></span>\n<span class=\"add\">Add</span> <mat-icon (click)=\"addContact()\">add</mat-icon>\n<app-pop-up-window></app-pop-up-window>\n"

/***/ }),

/***/ "./src/app/new-order/new-order.component.ts":
/*!**************************************************!*\
  !*** ./src/app/new-order/new-order.component.ts ***!
  \**************************************************/
/*! exports provided: NewOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewOrderComponent", function() { return NewOrderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_new_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/new-order.service */ "./src/app/services/new-order.service.ts");
/* harmony import */ var _pop_up_window_pop_up_window_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pop-up-window/pop-up-window.component */ "./src/app/pop-up-window/pop-up-window.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewOrderComponent = /** @class */ (function () {
    function NewOrderComponent(dialog, newOrderService) {
        this.dialog = dialog;
        this.newOrderService = newOrderService;
        this.isPopUpOpened = true;
    }
    NewOrderComponent.prototype.ngOnInit = function () { };
    NewOrderComponent.prototype.addOrder = function () {
        var _this = this;
        this.isPopUpOpened = true;
        var dialogRef = this.dialog.open(_pop_up_window_pop_up_window_component__WEBPACK_IMPORTED_MODULE_3__["PopUpWindowComponent"], {
            data: {}
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.isPopUpOpened = false;
        });
    };
    NewOrderComponent.prototype.editOrder = function (id) {
        var _this = this;
        this.isPopUpOpened = true;
        var order = this.newOrderService.getAllContacts().find(function (c) { return c.id === id; });
        var dialogRef = this.dialog.open(_pop_up_window_pop_up_window_component__WEBPACK_IMPORTED_MODULE_3__["PopUpWindowComponent"], {
            data: order
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.isPopUpOpened = false;
        });
    };
    NewOrderComponent.prototype.deleteOrder = function (id) {
        this.newOrderService.deleteContact(id);
    };
    NewOrderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-order',
            template: __webpack_require__(/*! ./new-order.component.html */ "./src/app/new-order/new-order.component.html"),
            styles: [__webpack_require__(/*! ./new-order.component.css */ "./src/app/new-order/new-order.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _services_new_order_service__WEBPACK_IMPORTED_MODULE_2__["NewOrderService"]])
    ], NewOrderComponent);
    return NewOrderComponent;
}());



/***/ }),

/***/ "./src/app/pop-up-window/pop-up-window.component.css":
/*!***********************************************************!*\
  !*** ./src/app/pop-up-window/pop-up-window.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pop-up-window/pop-up-window.component.html":
/*!************************************************************!*\
  !*** ./src/app/pop-up-window/pop-up-window.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card-header>\n  <mat-toolbar class=\"toolbar\" color=\"accent\">\n    <mat-card-title>Student Information</mat-card-title>\n    <span class=\"toolbar-spacer\"></span>\n    <mat-icon (click)=\"onClick()\">cancel</mat-icon>\n  </mat-toolbar>\n</mat-card-header>\n<mat-card-content>\n  <div class=\"container\">\n    <form [formGroup]=\"newOrderForm\" (submit)=\"onSubmit()\">\n      <div class=\"form-group\">\n        <div class=\"row\">\n          <div class=\"col-md-4 col-lg-4\">\n            <label>MerchantId</label>\n            <input type=\"text\" formControlName=\"merchantId\" class=\"form-control\">\n          </div>\n          <div class=\"col-md-4 col-lg-4\">\n            <label>Quantity Ordered</label>\n            <input type=\"text\" formControlName=\"qtyOrdered\" class=\"form-control\">\n          </div>\n          <div class=\"col-md-4 col-lg-4\">\n            <label>Name</label>\n            <input type=\"text\" formControlName=\"name\" class=\"form-control\">\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md- col-lg-4\">\n            <label>Description</label>\n            <input type=\"text\" formControlName=\"description\" class=\"form-control\">\n          </div>\n          <div class=\"col-md-4 col-lg-4\">\n            <label>Price</label>\n            <input type=\"text\" formControlName=\"price\" class=\"form-control\">\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6 col-lg-12\">\n            <button type=\"submit\" class=\"btn btn-outline-success btn-block mt-4 mb-0\"><mat-icon>save</mat-icon></button>\n          </div>\n        </div>\n      </div>\n\n    </form>\n  </div>\n</mat-card-content>\n"

/***/ }),

/***/ "./src/app/pop-up-window/pop-up-window.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pop-up-window/pop-up-window.component.ts ***!
  \**********************************************************/
/*! exports provided: PopUpWindowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopUpWindowComponent", function() { return PopUpWindowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_new_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/new-order.service */ "./src/app/services/new-order.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var PopUpWindowComponent = /** @class */ (function () {
    function PopUpWindowComponent(formBuilder, dialogRef, newOrderService, data) {
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.newOrderService = newOrderService;
        this.data = data;
    }
    PopUpWindowComponent.prototype.onClick = function () {
        this.dialogRef.close();
    };
    PopUpWindowComponent.prototype.ngOnInit = function () {
        this.newOrderForm = this.formBuilder.group({
            transactionId: [this.data.transactionId],
            merchantId: [this.data.merchantId, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            qtyOrdered: [this.data.qtyOrdered, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            name: [this.data.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            description: [this.data.description, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            price: [this.data.price, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            itemId: [this.data.itemId, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            taxTotal: [this.data.taxTotal, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            shippingTotal: [this.data.shippingTotal, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            discountTotal: [this.data.discountTotal, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            orderSubTotal: [this.data.orderSubTotal, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            promoAmt: [this.data.promoAmt, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            promoId: [this.data.promoId, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            promotionName: [this.data.promotionName, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            start: [this.data.start, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            end: [this.data.end, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            minimumOrderValue: [this.data.minimumOrderValue, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            promotionType: [this.data.promotionType, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            merchantOrderReference: [this.data.merchantOrderReference, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            orderDate: [this.data.orderDate, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            signature: [this.data.signature, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    };
    PopUpWindowComponent.prototype.onSubmit = function () {
        this.newOrderService.addNewOrder(this.newOrderForm.value);
        this.dialogRef.close();
    };
    PopUpWindowComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pop-up-window',
            template: __webpack_require__(/*! ./pop-up-window.component.html */ "./src/app/pop-up-window/pop-up-window.component.html"),
            styles: [__webpack_require__(/*! ./pop-up-window.component.css */ "./src/app/pop-up-window/pop-up-window.component.css")]
        }),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"],
            _services_new_order_service__WEBPACK_IMPORTED_MODULE_2__["NewOrderService"], Object])
    ], PopUpWindowComponent);
    return PopUpWindowComponent;
}());



/***/ }),

/***/ "./src/app/promo/promo.component.css":
/*!*******************************************!*\
  !*** ./src/app/promo/promo.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/promo/promo.component.html":
/*!********************************************!*\
  !*** ./src/app/promo/promo.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<app-navigation></app-navigation>\n<app-promo-list></app-promo-list>\n"

/***/ }),

/***/ "./src/app/promo/promo.component.ts":
/*!******************************************!*\
  !*** ./src/app/promo/promo.component.ts ***!
  \******************************************/
/*! exports provided: PromoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromoComponent", function() { return PromoComponent; });
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

var PromoComponent = /** @class */ (function () {
    function PromoComponent() {
    }
    PromoComponent.prototype.ngOnInit = function () {
    };
    PromoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-promo',
            template: __webpack_require__(/*! ./promo.component.html */ "./src/app/promo/promo.component.html"),
            styles: [__webpack_require__(/*! ./promo.component.css */ "./src/app/promo/promo.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PromoComponent);
    return PromoComponent;
}());



/***/ }),

/***/ "./src/app/services/inventory.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/inventory.service.ts ***!
  \***********************************************/
/*! exports provided: InventoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryService", function() { return InventoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InventoryService = /** @class */ (function () {
    function InventoryService(http) {
        this.http = http;
    }
    InventoryService.prototype.getInventory = function () {
        var _url = 'http://jst.edchavez.com/api/inventory/getInventory/';
        return this.http.get(_url);
    };
    InventoryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], InventoryService);
    return InventoryService;
}());



/***/ }),

/***/ "./src/app/services/new-order.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/new-order.service.ts ***!
  \***********************************************/
/*! exports provided: NewOrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewOrderService", function() { return NewOrderService; });
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

var NewOrderService = /** @class */ (function () {
    function NewOrderService() {
        this.newOrder = [];
    }
    NewOrderService.prototype.addNewOrder = function (order) {
        this.newOrder.push(order);
    };
    NewOrderService.prototype.deleteContact = function (_id) {
        var contact = this.newOrder.findIndex(function (c) { return c.id === _id; });
        this.newOrder.splice(contact, 1);
    };
    NewOrderService.prototype.getAllContacts = function () {
        return this.newOrder;
    };
    NewOrderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], NewOrderService);
    return NewOrderService;
}());



/***/ }),

/***/ "./src/app/services/promo.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/promo.service.ts ***!
  \*******************************************/
/*! exports provided: PromoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromoService", function() { return PromoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PromoService = /** @class */ (function () {
    function PromoService(http) {
        this.http = http;
        this._url = 'http://jst.edchavez.com/api/promo/';
    }
    PromoService.prototype.getPromo = function () {
        return this.http.get(this._url);
    };
    PromoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PromoService);
    return PromoService;
}());



/***/ }),

/***/ "./src/app/services/shipping.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/shipping.service.ts ***!
  \**********************************************/
/*! exports provided: ShippingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShippingService", function() { return ShippingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShippingService = /** @class */ (function () {
    function ShippingService(http) {
        this.http = http;
        this._url = 'http://jst.edchavez.com/api/shipping/';
    }
    ShippingService.prototype.getShipping = function () {
        return this.http.get(this._url);
    };
    ShippingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ShippingService);
    return ShippingService;
}());



/***/ }),

/***/ "./src/app/shipping/shipping.component.css":
/*!*************************************************!*\
  !*** ./src/app/shipping/shipping.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shipping/shipping.component.html":
/*!**************************************************!*\
  !*** ./src/app/shipping/shipping.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<app-navigation></app-navigation>\n<app-shipping-table></app-shipping-table>\n"

/***/ }),

/***/ "./src/app/shipping/shipping.component.ts":
/*!************************************************!*\
  !*** ./src/app/shipping/shipping.component.ts ***!
  \************************************************/
/*! exports provided: ShippingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShippingComponent", function() { return ShippingComponent; });
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

var ShippingComponent = /** @class */ (function () {
    function ShippingComponent() {
    }
    ShippingComponent.prototype.ngOnInit = function () {
    };
    ShippingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shipping',
            template: __webpack_require__(/*! ./shipping.component.html */ "./src/app/shipping/shipping.component.html"),
            styles: [__webpack_require__(/*! ./shipping.component.css */ "./src/app/shipping/shipping.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ShippingComponent);
    return ShippingComponent;
}());



/***/ }),

/***/ "./src/app/tables/inventory-table/inventory-table.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/tables/inventory-table/inventory-table.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Structure */\r\n.container {\r\n  position: relative;\r\n  width: 90%;\r\n}\r\n.table-container {\r\n  position: relative;\r\n  overflow: auto;\r\n  margin-top: 5%;\r\n  margin-left: 10%;\r\n  margin-right: auto;\r\n}\r\ntable {\r\n  width: 100%;\r\n}\r\n.loading-shade {\r\n  position: absolute;\r\n  top: -200px;\r\n  left: 0;\r\n  bottom: 56px;\r\n  right: 0;\r\n  height: 100vh;\r\n  width: 100vw;\r\n  background: rgba(0, 0, 0, 0.25);\r\n  z-index: 1;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n.mat-header-cell {\r\n  font-size: 16px;\r\n  color: black;\r\n}\r\n.mat-column-created {\r\n  max-width: 124px;\r\n}\r\n.mat-paginator {\r\n  max-width: 90%;\r\n  margin-left: 10%;\r\n  margin-right: auto;\r\n}\r\n.mat-row:nth-child(even){\r\n  background-color: rgb(219, 219, 219);\r\n}\r\n.mat-row:nth-child(odd){\r\n  background-color: rgb(237, 238, 239);\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/tables/inventory-table/inventory-table.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/tables/inventory-table/inventory-table.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\">\r\n  <div class=\"loading-shade\"\r\n       *ngIf=\"isLoadingResults\">\r\n    <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\r\n\r\n  </div>\r\n\r\n  <div class=\"table-container\">\r\n    <div class=\"display-1\"><h1>Inventory</h1></div>\r\n    <mat-form-field  color=\"accent\">\r\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n    </mat-form-field>\r\n\r\n    <table mat-table [dataSource]=\"dataSource\" class=\"example-table\"\r\n           matSort matSortActive=\"itemId\" matSortDirection=\"asc\" matSortDisableClear>\r\n\r\n      <!-- itemId Column -->\r\n      <ng-container matColumnDef=\"itemId\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header disableClear>ID</th>\r\n        <td mat-cell *matCellDef=\"let row\">{{row.itemId}}</td>\r\n      </ng-container>\r\n\r\n      <!-- Name Column -->\r\n      <ng-container matColumnDef=\"name\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Name</th>\r\n        <td mat-cell *matCellDef=\"let row\">{{row.name}}</td>\r\n      </ng-container>\r\n\r\n      <!-- Description Column -->\r\n      <ng-container matColumnDef=\"description\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Description</th>\r\n        <td mat-cell *matCellDef=\"let row\">{{row.description}}</td>\r\n      </ng-container>\r\n\r\n      <!-- Price Column -->\r\n      <ng-container matColumnDef=\"price\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Price</th>\r\n        <td mat-cell *matCellDef=\"let row\">{{row.price}}</td>\r\n      </ng-container>\r\n\r\n      <!-- inStock Column -->\r\n      <ng-container matColumnDef=\"inStock\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Stock</th>\r\n        <td mat-cell *matCellDef=\"let row\" [ngStyle]=\"{ 'color': (row.inStock ? 'green' : 'red') }\">\r\n          <mat-icon>{{row.inStock ? 'check' : 'error'}}</mat-icon>\r\n        </td>\r\n      </ng-container>\r\n\r\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n    </table>\r\n  </div>\r\n\r\n  <mat-paginator class=\"  mat-elevation-z8\" [length]=\"resultsLength\" showFirstLastButtons></mat-paginator>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/tables/inventory-table/inventory-table.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/tables/inventory-table/inventory-table.component.ts ***!
  \*********************************************************************/
/*! exports provided: InventoryTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryTableComponent", function() { return InventoryTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_inventory_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/inventory.service */ "./src/app/services/inventory.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var InventoryTableComponent = /** @class */ (function () {
    function InventoryTableComponent(inventoryService, http) {
        this.inventoryService = inventoryService;
        this.http = http;
        this.displayedColumns = ['itemId', 'name', 'description', 'price', 'inStock'];
        this.dataSource = [];
        this.isLoadingResults = true;
    }
    InventoryTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.exampleDatabase = new _services_inventory_service__WEBPACK_IMPORTED_MODULE_3__["InventoryService"](this.http);
        this.sort.sortChange.subscribe(function () { return _this.paginator.pageIndex = 0; });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(this.sort.sortChange, this.paginator.page)
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])({}), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () {
            _this.isLoadingResults = true;
            return _this.exampleDatabase.getInventory();
        }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (data) {
            _this.isLoadingResults = false;
            _this.resultsLength = data.total_count;
            return data.items;
        }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function () {
            _this.isLoadingResults = false;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([]);
        })).subscribe(function (data) { return _this.dataSource = data; });
    };
    InventoryTableComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], InventoryTableComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], InventoryTableComponent.prototype, "paginator", void 0);
    InventoryTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-inventory-table',
            template: __webpack_require__(/*! ./inventory-table.component.html */ "./src/app/tables/inventory-table/inventory-table.component.html"),
            styles: [__webpack_require__(/*! ./inventory-table.component.css */ "./src/app/tables/inventory-table/inventory-table.component.css")]
        }),
        __metadata("design:paramtypes", [_services_inventory_service__WEBPACK_IMPORTED_MODULE_3__["InventoryService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], InventoryTableComponent);
    return InventoryTableComponent;
}());



/***/ }),

/***/ "./src/app/tables/new-order-table/new-order-table.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/tables/new-order-table/new-order-table.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Structure */\r\n.example-container {\r\n  position: relative;\r\n}\r\n.table-container {\r\n  position: relative;\r\n  max-height: 400px;\r\n  overflow: auto;\r\n  width: 95%;\r\n  margin-top: 5%;\r\n  margin-left: 2.5%;\r\n  margin-right: auto;\r\n}\r\n.example-loading-shade {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 56px;\r\n  right: 0;\r\n  background: rgba(0, 0, 0, 0.15);\r\n  z-index: 1;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n.mat-header-cell {\r\n  font-size: 16px;\r\n  color: black;\r\n}\r\n.mat-row:nth-child(even){\r\n  background-color: rgb(219, 219, 219);\r\n}\r\n.mat-row:nth-child(odd){\r\n  background-color: rgb(237, 238, 239);\r\n}\r\n.hideLoader {\r\n  display: none;\r\n}\r\nmat-footer-row mat-footer-cell {\r\n  justify-content: center;\r\n  font-style: italic;\r\n}\r\n.mat-form-field {\r\n  font-size: 16px;\r\n  width: 100%;\r\n}\r\nbutton.mat-fab.mat-accent {\r\n  margin-left: 48%;\r\n  transition: color 0.2s ease, background-color 0.2s ease, -webkit-transform 0.3s ease;\r\n  transition: color 0.2s ease, background-color 0.2s ease, transform 0.3s ease;\r\n  transition: color 0.2s ease, background-color 0.2s ease, transform 0.3s ease, -webkit-transform 0.3s ease;\r\n}\r\nbutton.mat-fab:hover {\r\n  -webkit-transform: rotate(460deg);\r\n          transform: rotate(460deg);\r\n  box-shadow: 10px 0 20px rgba(0, 0, 0, 0.19), 6px 0 6px rgba(0, 0, 0, 0.23);\r\n}\r\n"

/***/ }),

/***/ "./src/app/tables/new-order-table/new-order-table.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/tables/new-order-table/new-order-table.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"table-container\">\n  <div class=\"display-1\"><h1>New Order</h1></div>\n  <button mat-fab color=\"accent\" ><mat-icon (click)=\"addOrder()\">add</mat-icon></button>\n  <mat-form-field  color=\"accent\">\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n  </mat-form-field>\n  <mat-table [dataSource]=\"dataSource\" matSort matSortActive=\"shipOptionId\" matSortDirection=\"asc\" matSortDisableClear>\n\n    <!-- PromoId Column -->\n    <ng-container matColumnDef=\"transactionId\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Trans ID </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.transactionId}} </mat-cell>\n    </ng-container>\n\n    <!-- Promotion Name Column -->\n    <ng-container matColumnDef=\"merchantId\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Merchant ID </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.merchantId}} </mat-cell>\n    </ng-container>\n\n    <!-- Promo Amount Column -->\n    <ng-container matColumnDef=\"qtyOrdered\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Quantity </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.qtyOrdered}} </mat-cell>\n    </ng-container>\n\n    <!-- Minimum Order Value Column -->\n    <ng-container matColumnDef=\"name\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\n    </ng-container>\n\n    <!-- Order SubTotal Column -->\n    <ng-container matColumnDef=\"description\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Description </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.description}} </mat-cell>\n    </ng-container>\n\n    <!-- Start Promo Date Column -->\n    <ng-container matColumnDef=\"price\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Price </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.price}} </mat-cell>\n    </ng-container>\n\n    <!-- End Promo Date Column -->\n    <ng-container matColumnDef=\"itemId\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Item ID </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.itemId}} </mat-cell>\n    </ng-container>\n\n    <!-- Promotion Type Column -->\n    <ng-container matColumnDef=\"taxTotal\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Tax Total </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.taxTotal}} </mat-cell>\n    </ng-container>\n\n    <!-- Promotion Type Column -->\n    <ng-container matColumnDef=\"shippingTotal\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Ship Total </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.shippingTotal}} </mat-cell>\n    </ng-container>\n\n    <!-- Promotion Type Column -->\n    <ng-container matColumnDef=\"discountTotal\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Discount Total </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.discountTotal}} </mat-cell>\n    </ng-container>\n\n    <!-- Promotion Type Column -->\n    <ng-container matColumnDef=\"orderSubTotal\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Order SubTotal </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.orderSubTotal}} </mat-cell>\n    </ng-container>\n\n    <!-- Promotion Type Column -->\n    <ng-container matColumnDef=\"promoAmt\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Promo Amt </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.promoAmt}} </mat-cell>\n    </ng-container>\n\n    <!-- Promotion Type Column -->\n    <ng-container matColumnDef=\"promoId\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Promo ID </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.promoId}} </mat-cell>\n    </ng-container>\n\n    <!-- Promotion Type Column -->\n    <ng-container matColumnDef=\"promotionName\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Promotion Name </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.promotionName}} </mat-cell>\n    </ng-container>\n\n    <!-- Promotion Type Column -->\n    <ng-container matColumnDef=\"start\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Start </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.start}} </mat-cell>\n    </ng-container>\n\n    <!-- Promotion Type Column -->\n    <ng-container matColumnDef=\"end\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> End </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.end}} </mat-cell>\n    </ng-container>\n\n    <!-- Promotion Type Column -->\n    <ng-container matColumnDef=\"minimumOrderValue\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Min Order </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.minimumOrderValue}} </mat-cell>\n    </ng-container>\n\n    <!-- Promotion Type Column -->\n    <ng-container matColumnDef=\"promotionType\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Promo Type </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.promotionType}} </mat-cell>\n    </ng-container>\n    <!-- Promotion Type Column -->\n    <ng-container matColumnDef=\"merchantOrderReference\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Reference </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.merchantOrderReference}} </mat-cell>\n    </ng-container>\n    <!-- Promotion Type Column -->\n    <ng-container matColumnDef=\"orderDate\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Order Date </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.orderDate}} </mat-cell>\n    </ng-container>\n    <!-- Promotion Type Column -->\n    <ng-container matColumnDef=\"signature\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Signature </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.signature}} </mat-cell>\n    </ng-container>\n\n    <!-- Loader -->\n    <ng-container matColumnDef=\"loading\">\n      <mat-footer-cell *matFooterCellDef colspan=\"6\"> Loading data...</mat-footer-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"noData\">\n      <mat-footer-cell *matFooterCellDef colspan=\"6\"> Data no found</mat-footer-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n    <mat-footer-row *matFooterRowDef=\"['loading']\" [ngClass]=\"{'hideLoader': dataSource!=null}\"></mat-footer-row>\n    <mat-footer-row *matFooterRowDef=\"['noData']\" [ngClass]=\"{'hideLoader': !(dataSource!=null && dataSource.data.length==0)}\"></mat-footer-row>\n\n  </mat-table>\n  <mat-paginator class=\"mat-elevation-z8\" [pageSizeOptions]=\"[5, 10, 25, 100]\" [pageSize]=\"5\" showFirstLastButtons></mat-paginator>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/tables/new-order-table/new-order-table.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/tables/new-order-table/new-order-table.component.ts ***!
  \*********************************************************************/
/*! exports provided: NewOrderTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewOrderTableComponent", function() { return NewOrderTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewOrderTableComponent = /** @class */ (function () {
    function NewOrderTableComponent() {
        this.displayedColumns = ['transactionId',
            'merchantId',
            'qtyOrdered',
            'name',
            'description',
            'price',
            'itemId',
            'taxTotal',
            'shippingTotal',
            'discountTotal',
            'orderSubTotal',
            'promoAmt',
            'promoId',
            'promotionName',
            'start',
            'end',
            'minimumOrderValue',
            'promotionType',
            'merchantOrderReference',
            'orderDate',
            'signature'];
    }
    NewOrderTableComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], NewOrderTableComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], NewOrderTableComponent.prototype, "paginator", void 0);
    NewOrderTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-order-table',
            template: __webpack_require__(/*! ./new-order-table.component.html */ "./src/app/tables/new-order-table/new-order-table.component.html"),
            styles: [__webpack_require__(/*! ./new-order-table.component.css */ "./src/app/tables/new-order-table/new-order-table.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NewOrderTableComponent);
    return NewOrderTableComponent;
}());



/***/ }),

/***/ "./src/app/tables/promo-list-table/promo-list.component.css":
/*!******************************************************************!*\
  !*** ./src/app/tables/promo-list-table/promo-list.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Structure */\r\n.example-container {\r\n  position: relative;\r\n}\r\n.table-container {\r\n  position: relative;\r\n  max-height: 400px;\r\n  overflow: auto;\r\n  width: 80%;\r\n  margin-top: 5%;\r\n  margin-left: 10%;\r\n  margin-right: auto;\r\n}\r\n.example-loading-shade {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 56px;\r\n  right: 0;\r\n  background: rgba(0, 0, 0, 0.15);\r\n  z-index: 1;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n.mat-header-cell {\r\n  font-size: 16px;\r\n  color: black;\r\n}\r\n.mat-row:nth-child(even){\r\n  background-color: rgb(219, 219, 219);\r\n}\r\n.mat-row:nth-child(odd){\r\n  background-color: rgb(237, 238, 239);\r\n}\r\n.hideLoader {\r\n  display: none;\r\n}\r\nmat-footer-row mat-footer-cell {\r\n  justify-content: center;\r\n  font-style: italic;\r\n}\r\n.mat-form-field {\r\n  font-size: 16px;\r\n  width: 100%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/tables/promo-list-table/promo-list.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/tables/promo-list-table/promo-list.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"table-container\">\n  <div class=\"display-1\"><h1>Promotion List</h1></div>\n  <mat-form-field  color=\"accent\">\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n  </mat-form-field>\n  <mat-table [dataSource]=\"dataSource\" matSort matSortActive=\"shipOptionId\" matSortDirection=\"asc\" matSortDisableClear>\n\n    <!-- PromoId Column -->\n    <ng-container matColumnDef=\"promoId\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Promo ID </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.promoId}} </mat-cell>\n    </ng-container>\n\n    <!-- Promotion Name Column -->\n    <ng-container matColumnDef=\"promotionName\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Promotion Name </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.promotionName}} </mat-cell>\n    </ng-container>\n\n    <!-- Promo Amount Column -->\n    <ng-container matColumnDef=\"promoAmt\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Amount </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.promoAmt}} </mat-cell>\n    </ng-container>\n\n    <!-- Minimum Order Value Column -->\n    <ng-container matColumnDef=\"minimumOrderValue\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Minimum Order Value </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.minimumOrderValue}} </mat-cell>\n    </ng-container>\n\n    <!-- Order SubTotal Column -->\n    <ng-container matColumnDef=\"orderSubTotal\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Order Sub Total </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.orderSubTotal}} </mat-cell>\n    </ng-container>\n\n    <!-- Start Promo Date Column -->\n    <ng-container matColumnDef=\"start\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Start Promo </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.start}} </mat-cell>\n    </ng-container>\n\n    <!-- End Promo Date Column -->\n    <ng-container matColumnDef=\"end\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> End Promo </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.end}} </mat-cell>\n    </ng-container>\n\n    <!-- Promotion Type Column -->\n    <ng-container matColumnDef=\"promotionType\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Promotion Type </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.promotionType}} </mat-cell>\n    </ng-container>\n\n    <!-- Loader -->\n    <ng-container matColumnDef=\"loading\">\n      <mat-footer-cell *matFooterCellDef colspan=\"6\"> Loading data...</mat-footer-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"noData\">\n      <mat-footer-cell *matFooterCellDef colspan=\"6\"> Data no found</mat-footer-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n    <mat-footer-row *matFooterRowDef=\"['loading']\" [ngClass]=\"{'hideLoader': dataSource!=null}\"></mat-footer-row>\n    <mat-footer-row *matFooterRowDef=\"['noData']\" [ngClass]=\"{'hideLoader': !(dataSource!=null && dataSource.data.length==0)}\"></mat-footer-row>\n\n  </mat-table>\n  <mat-paginator class=\"mat-elevation-z8\" [pageSizeOptions]=\"[5, 10, 25, 100]\" [pageSize]=\"5\" showFirstLastButtons></mat-paginator>\n\n</div>\n"

/***/ }),

/***/ "./src/app/tables/promo-list-table/promo-list.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/tables/promo-list-table/promo-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: PromoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromoListComponent", function() { return PromoListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_promo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/promo.service */ "./src/app/services/promo.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PromoListComponent = /** @class */ (function () {
    function PromoListComponent(promoService) {
        this.promoService = promoService;
        this.displayedColumns = ['promoId',
            'promotionName',
            'promoAmt',
            'minimumOrderValue',
            'orderSubTotal',
            'start',
            'end',
            'promotionType'];
    }
    PromoListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.promoService.getPromo().subscribe(function (results) {
            if (!results) {
                return;
            }
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](results);
            _this.dataSource.sort = _this.sort;
            _this.dataSource.paginator = _this.paginator;
        });
    };
    PromoListComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], PromoListComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], PromoListComponent.prototype, "paginator", void 0);
    PromoListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-promo-list',
            template: __webpack_require__(/*! ./promo-list.component.html */ "./src/app/tables/promo-list-table/promo-list.component.html"),
            styles: [__webpack_require__(/*! ./promo-list.component.css */ "./src/app/tables/promo-list-table/promo-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_promo_service__WEBPACK_IMPORTED_MODULE_2__["PromoService"]])
    ], PromoListComponent);
    return PromoListComponent;
}());



/***/ }),

/***/ "./src/app/tables/shipping-table/shipping-table.component.css":
/*!********************************************************************!*\
  !*** ./src/app/tables/shipping-table/shipping-table.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Structure */\r\n.example-container {\r\n  position: relative;\r\n}\r\n.table-container {\r\n  position: relative;\r\n  max-height: 400px;\r\n  overflow: auto;\r\n  width: 80%;\r\n  margin-top: 5%;\r\n  margin-left: 10%;\r\n  margin-right: auto;\r\n}\r\n.example-loading-shade {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 56px;\r\n  right: 0;\r\n  background: rgba(0, 0, 0, 0.15);\r\n  z-index: 1;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n.mat-header-cell {\r\n  font-size: 16px;\r\n  color: black;\r\n}\r\n.mat-row:nth-child(even){\r\n  background-color: rgb(219, 219, 219);\r\n}\r\n.mat-row:nth-child(odd){\r\n  background-color: rgb(237, 238, 239);\r\n}\r\n.hideLoader {\r\n  display: none;\r\n}\r\nmat-footer-row mat-footer-cell {\r\n  justify-content: center;\r\n  font-style: italic;\r\n}\r\n.mat-form-field {\r\n  font-size: 16px;\r\n  width: 100%;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/tables/shipping-table/shipping-table.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/tables/shipping-table/shipping-table.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"table-container\">\n  <div class=\"display-1\"><h1>Shipping List</h1></div>\n  <mat-form-field  color=\"accent\">\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n  </mat-form-field>\n<mat-table [dataSource]=\"dataSource\" matSort matSortActive=\"shipOptionId\" matSortDirection=\"asc\" matSortDisableClear>\n\n  <!-- Position Column -->\n  <ng-container matColumnDef=\"shipOptionId\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header> Ship Option Id </mat-header-cell>\n    <mat-cell *matCellDef=\"let element\"> {{element.shipOptionId}} </mat-cell>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"shipOptionName\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header> Ship Option Name </mat-header-cell>\n    <mat-cell *matCellDef=\"let element\"> {{element.shipOptionName}} </mat-cell>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container matColumnDef=\"carrierName\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header> Carrier </mat-header-cell>\n    <mat-cell *matCellDef=\"let element\"> {{element.carrierName}} </mat-cell>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container matColumnDef=\"shipCost\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header> Cost </mat-header-cell>\n    <mat-cell *matCellDef=\"let element\"> {{element.shipCost}} </mat-cell>\n  </ng-container>\n  <ng-container matColumnDef=\"loading\">\n    <mat-footer-cell *matFooterCellDef colspan=\"6\"> Loading data...</mat-footer-cell>\n  </ng-container>\n  <ng-container matColumnDef=\"noData\">\n    <mat-footer-cell *matFooterCellDef colspan=\"6\"> Data no found</mat-footer-cell>\n  </ng-container>\n\n  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n  <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n  <mat-footer-row *matFooterRowDef=\"['loading']\" [ngClass]=\"{'hideLoader': dataSource!=null}\"></mat-footer-row>\n  <mat-footer-row *matFooterRowDef=\"['noData']\" [ngClass]=\"{'hideLoader': !(dataSource!=null && dataSource.data.length==0)}\"></mat-footer-row>\n\n</mat-table>\n  <mat-paginator class=\"mat-elevation-z8\" [pageSizeOptions]=\"[5, 10, 25, 100]\" [pageSize]=\"5\" showFirstLastButtons></mat-paginator>\n\n</div>\n"

/***/ }),

/***/ "./src/app/tables/shipping-table/shipping-table.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/tables/shipping-table/shipping-table.component.ts ***!
  \*******************************************************************/
/*! exports provided: ShippingTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShippingTableComponent", function() { return ShippingTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_shipping_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/shipping.service */ "./src/app/services/shipping.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShippingTableComponent = /** @class */ (function () {
    function ShippingTableComponent(shippingService) {
        this.shippingService = shippingService;
        this.displayedColumns = ['shipOptionId', 'shipOptionName', 'carrierName', 'shipCost'];
    }
    ShippingTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.shippingService.getShipping().subscribe(function (results) {
            if (!results) {
                return;
            }
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](results);
            _this.dataSource.sort = _this.sort;
            _this.dataSource.paginator = _this.paginator;
        });
    };
    ShippingTableComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], ShippingTableComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], ShippingTableComponent.prototype, "paginator", void 0);
    ShippingTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shipping-table',
            template: __webpack_require__(/*! ./shipping-table.component.html */ "./src/app/tables/shipping-table/shipping-table.component.html"),
            styles: [__webpack_require__(/*! ./shipping-table.component.css */ "./src/app/tables/shipping-table/shipping-table.component.css")]
        }),
        __metadata("design:paramtypes", [_services_shipping_service__WEBPACK_IMPORTED_MODULE_2__["ShippingService"]])
    ], ShippingTableComponent);
    return ShippingTableComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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

module.exports = __webpack_require__(/*! C:\Users\geomi\SPA_projects\dashboardRAM\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map