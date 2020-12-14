sap.ui.define([
	"com/hcl/CFIN-Report/controller/BaseController"
], function (BaseController) {
	"use strict";

	return BaseController.extend("com.hcl.CFIN-Report.controller.ReportDetails", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf com.hcl.CFIN-Report.view.ReportDetails
		 */
		onInit: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("ReportDetails").attachMatched(this._onRouteMatched, this);
			
			if(!this._oRouter) {
				this._oRouter = oRouter;
			}
		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf com.hcl.CFIN-Report.view.ReportDetails
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf com.hcl.CFIN-Report.view.ReportDetails
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf com.hcl.CFIN-Report.view.ReportDetails
		 */
		//	onExit: function() {
		//
		//	}
		
		_onRouteMatched : function (oEvent) {
			// var oArgs = oEvent.getParameter("arguments");
			// var navLocation = oArgs["?navLoc"];
			// var tabLevelOneKey = navLocation.tabLevelOne;
			// var tabLevelTwoKey = navLocation.tabLevelTwo;
			
			// BaseController._navigateToReportLocation(tabLevelOneKey, tabLevelTwoKey);
		},
		
		onSelectLevelOneTab: function(oEvent) {
			var reportDetailsIconTabBar = this.getView().byId("iconTabBarDetails");
			var selectedTabKey = oEvent.getSource().getSelectedKey();
			var iconTabBarKeysArray = this._getIconTabBarKeys(reportDetailsIconTabBar);
			var selectedKeyIndex = iconTabBarKeysArray.indexOf(selectedTabKey,0);
			if(selectedKeyIndex === 0) {
				this.getView().byId("btnPrevious").setVisible(false);
				this.getView().byId("btnNext").setVisible(true);
			} else if(selectedKeyIndex === iconTabBarKeysArray.length - 1) {
				this.getView().byId("btnPrevious").setVisible(true);
				this.getView().byId("btnNext").setVisible(false);
			} else {
				this.getView().byId("btnPrevious").setVisible(true);
				this.getView().byId("btnNext").setVisible(true);
			}
			
			this._navigateToTab(selectedTabKey);
		},
		
		_navigateToTab: function(tabKey) {
			switch(tabKey) {
				case "Overview":
					this._oRouter.navTo("OverviewIntro",{
						"?navLoc": {
							tabLevelOne: tabKey,
							tabLevelTwo: "intro"
						}
					}, true);
					break;
				case "ExSummary":
					this._oRouter.navTo("ExSummaryCFINConnections",{
						"?navLoc": {
							tabLevelOne: tabKey,
							tabLevelTwo: "intro"
						}
					}, true);
					break;
				case "SourceSystem":
					this._oRouter.navTo("SourceSystemFindings",{
						"?navLoc": {
							tabLevelOne: tabKey,
							tabLevelTwo: "intro"
						}
					}, true);
					break;
				case "SLT":
					this._oRouter.navTo("SLTFindings",{
						"?navLoc": {
							tabLevelOne: tabKey,
							tabLevelTwo: "intro"
						}
					}, true);
					break;
				case "TargetSystem":
					this._oRouter.navTo("TargetSystemFindings",{
						"?navLoc": {
							tabLevelOne: tabKey,
							tabLevelTwo: "intro"
						}
					}, true);
					break;
				case "AIF":
					this._oRouter.navTo("AIFFindings",{
						"?navLoc": {
							tabLevelOne: tabKey,
							tabLevelTwo: "intro"
						}
					}, true);
					break;
				case "MDG":
					this._oRouter.navTo("MDGFindings",{
						"?navLoc": {
							tabLevelOne: tabKey,
							tabLevelTwo: "intro"
						}
					}, true);
					break;
				case "NonSAP":
					this._oRouter.navTo("NonSAPFindings",{
						"?navLoc": {
							tabLevelOne: tabKey,
							tabLevelTwo: "intro"
						}
					}, true);
					break;
				case "WhatsNext":
					this._oRouter.navTo("WhatsNextOverview",{
						"?navLoc": {
							tabLevelOne: tabKey,
							tabLevelTwo: "intro"
						}
					}, true);
					break;
			}
		},
		
		onPressPreviousTab: function(oEvent) {
			var reportDetailsIconTabBar = this.getView().byId("iconTabBarDetails");
			var selectedTabKey = reportDetailsIconTabBar.getSelectedKey();
			var iconTabBarKeysArray = this._getIconTabBarKeys(reportDetailsIconTabBar);
			var selectedKeyIndex = iconTabBarKeysArray.indexOf(selectedTabKey,0);
			
			if(selectedKeyIndex === 0) {
				oEvent.getSource().setVisible(false);
			} else if(selectedKeyIndex === iconTabBarKeysArray.length - 1) {
				this.getView().byId("btnPrevious").setVisible(false);
			} else {
				reportDetailsIconTabBar.setSelectedKey(iconTabBarKeysArray[selectedKeyIndex - 1]);
			}
		},
		
		onPressNextTab: function(oEvent) {
			var reportDetailsIconTabBar = this.getView().byId("iconTabBarDetails");
			var selectedTabKey = reportDetailsIconTabBar.getSelectedKey();
			var iconTabBarKeysArray = this._getIconTabBarKeys(reportDetailsIconTabBar);
			var selectedKeyIndex = iconTabBarKeysArray.indexOf(selectedTabKey,0);
			if(selectedKeyIndex === 0) {
				this.getView().byId("btnPrevious").setVisible(false);
			} else if(selectedKeyIndex === iconTabBarKeysArray.length - 1) {
				oEvent.getSource().setVisible(false);
			} else {
				reportDetailsIconTabBar.setSelectedKey(iconTabBarKeysArray[selectedKeyIndex + 1]);
			}
			
			this._oRouter.navTo(selectedTabKey,{
				"?navLoc": {
					tabLevelOne: selectedTabKey,
					tabLevelTwo: "Dummy"
				}
			}, true);
		},
		
		_getIconTabBarKeys: function(iconTabBarRef) {
			var iconTabBarKeysArray = [];
			var tabBarItemsCount = iconTabBarRef.getItems().length;
			
			for (var i=0;i<tabBarItemsCount;i=i+2) {
				iconTabBarKeysArray.push(iconTabBarRef.getItems()[i].getKey());
			}
			return iconTabBarKeysArray;
		}
	});
});