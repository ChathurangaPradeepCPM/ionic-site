/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
import * as import0 from './tab-button';
import * as import1 from '@angular/core/src/change_detection/change_detection';
import * as import3 from '@angular/core/src/linker/view_utils';
export var Wrapper_TabButton = (function () {
    function Wrapper_TabButton(p0, p1, p2) {
        this._changed = false;
        this.context = new import0.TabButton(p0, p1, p2);
        this._expr_0 = import1.UNINITIALIZED;
        this._expr_1 = import1.UNINITIALIZED;
        this._expr_2 = import1.UNINITIALIZED;
        this._expr_3 = import1.UNINITIALIZED;
        this._expr_4 = import1.UNINITIALIZED;
        this._expr_5 = import1.UNINITIALIZED;
        this._expr_6 = import1.UNINITIALIZED;
        this._expr_7 = import1.UNINITIALIZED;
        this._expr_8 = import1.UNINITIALIZED;
        this._expr_9 = import1.UNINITIALIZED;
    }
    Wrapper_TabButton.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_TabButton.prototype.ngOnDestroy = function () {
        (this.subscription0 && this.subscription0.unsubscribe());
    };
    Wrapper_TabButton.prototype.check_tab = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.tab = currValue;
            this._expr_0 = currValue;
        }
    };
    Wrapper_TabButton.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_TabButton.prototype.checkHost = function (view, componentView, el, throwOnChange) {
        var currVal_1 = this.context.tab._btnId;
        if (import3.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            view.renderer.setElementAttribute(el, 'id', ((currVal_1 == null) ? null : currVal_1.toString()));
            this._expr_1 = currVal_1;
        }
        var currVal_2 = this.context.tab._tabId;
        if (import3.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            view.renderer.setElementAttribute(el, 'aria-controls', ((currVal_2 == null) ? null : currVal_2.toString()));
            this._expr_2 = currVal_2;
        }
        var currVal_3 = this.context.tab.isSelected;
        if (import3.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            view.renderer.setElementAttribute(el, 'aria-selected', ((currVal_3 == null) ? null : currVal_3.toString()));
            this._expr_3 = currVal_3;
        }
        var currVal_4 = this.context.hasTitle;
        if (import3.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            view.renderer.setElementClass(el, 'has-title', currVal_4);
            this._expr_4 = currVal_4;
        }
        var currVal_5 = this.context.hasIcon;
        if (import3.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            view.renderer.setElementClass(el, 'has-icon', currVal_5);
            this._expr_5 = currVal_5;
        }
        var currVal_6 = this.context.hasTitleOnly;
        if (import3.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            view.renderer.setElementClass(el, 'has-title-only', currVal_6);
            this._expr_6 = currVal_6;
        }
        var currVal_7 = this.context.hasIconOnly;
        if (import3.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            view.renderer.setElementClass(el, 'icon-only', currVal_7);
            this._expr_7 = currVal_7;
        }
        var currVal_8 = this.context.hasBadge;
        if (import3.checkBinding(throwOnChange, this._expr_8, currVal_8)) {
            view.renderer.setElementClass(el, 'has-badge', currVal_8);
            this._expr_8 = currVal_8;
        }
        var currVal_9 = this.context.disHover;
        if (import3.checkBinding(throwOnChange, this._expr_9, currVal_9)) {
            view.renderer.setElementClass(el, 'disable-hover', currVal_9);
            this._expr_9 = currVal_9;
        }
    };
    Wrapper_TabButton.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.onClick() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    Wrapper_TabButton.prototype.subscribe = function (view, _eventHandler, emit0) {
        this._eventHandler = _eventHandler;
        if (emit0) {
            (this.subscription0 = this.context.ionSelect.subscribe(_eventHandler.bind(view, 'ionSelect')));
        }
    };
    return Wrapper_TabButton;
}());
//# sourceMappingURL=tab-button.ngfactory.js.map