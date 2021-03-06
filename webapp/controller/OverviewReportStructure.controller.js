sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.hcl.CFIN-Report.controller.OverviewReportStructure", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf com.hcl.CFIN-Report.view.OverviewReportStructure
		 */
		onInit: function () {
			var oView = this.getView();
			this.oProcessFlow1 = oView.byId("processflow1");
			var dataModel = new sap.ui.model.json.JSONModel("model/ProcessFlow.json");
			oView.setModel(dataModel);

			dataModel.attachRequestCompleted(this.oProcessFlow1.updateModel.bind(this.oProcessFlow1));
		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf com.hcl.CFIN-Report.view.OverviewReportStructure
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf com.hcl.CFIN-Report.view.OverviewReportStructure
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf com.hcl.CFIN-Report.view.OverviewReportStructure
		 */
		//	onExit: function() {
		//
		//	}

	});

});