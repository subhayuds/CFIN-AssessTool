sap.ui.define([
	"com/hcl/CFIN-Report/controller/BaseController"
], function (BaseController) {
	"use strict";

	return BaseController.extend("com.hcl.CFIN-Report.controller.Overview", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf com.hcl.CFIN-Report.view.Overview
		 */
		onInit: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("ReportDetails").attachMatched(this._onRouteMatched, this);
			
			if(!this._oRouter) {
				this._oRouter = oRouter;
			}
		},
		
		_onRouteMatched : function (oEvent) {
			var oArgs, oView;
			oArgs = oEvent.getParameter("arguments");
			oView = this.getView();
		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf com.hcl.CFIN-Report.view.Overview
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf com.hcl.CFIN-Report.view.Overview
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf com.hcl.CFIN-Report.view.Overview
		 */
		//	onExit: function() {
		//
		//	}

	});

});