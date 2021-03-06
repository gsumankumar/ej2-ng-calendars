var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "@angular/core", "../../../src/calendar/calendar.module", "@angular/common"], function (require, exports, import0, import1, import2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CalendarModuleInjector = (function (_super) {
        __extends(CalendarModuleInjector, _super);
        function CalendarModuleInjector(parent) {
            return _super.call(this, parent, [], []) || this;
        }
        Object.defineProperty(CalendarModuleInjector.prototype, "_NgLocalization_2", {
            get: function () {
                if ((this.__NgLocalization_2 == null)) {
                    (this.__NgLocalization_2 = new import2.NgLocaleLocalization(this.parent.get(import0.LOCALE_ID)));
                }
                return this.__NgLocalization_2;
            },
            enumerable: true,
            configurable: true
        });
        CalendarModuleInjector.prototype.createInternal = function () {
            this._CommonModule_0 = new import2.CommonModule();
            this._CalendarModule_1 = new import1.CalendarModule();
            return this._CalendarModule_1;
        };
        CalendarModuleInjector.prototype.getInternal = function (token, notFoundResult) {
            if ((token === import2.CommonModule)) {
                return this._CommonModule_0;
            }
            if ((token === import1.CalendarModule)) {
                return this._CalendarModule_1;
            }
            if ((token === import2.NgLocalization)) {
                return this._NgLocalization_2;
            }
            return notFoundResult;
        };
        CalendarModuleInjector.prototype.destroyInternal = function () {
        };
        return CalendarModuleInjector;
    }(import0.ɵNgModuleInjector));
    exports.CalendarModuleNgFactory = new import0.NgModuleFactory(CalendarModuleInjector, import1.CalendarModule);
});
