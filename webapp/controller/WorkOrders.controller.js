sap.ui.define([
	"jquery.sap.global",
	"sap/m/MessageToast",
	"sap/ui/core/Fragment",
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/Filter",
	"sap/ui/model/json/JSONModel"
], function(jQuery, MessageToast, Fragment, Controller, Filter, JSONModel) {
	"use strict";

	return Controller.extend("com.gv.hackathon.Hackathon3.controller.WorkOrders", {
		onInit: function() {
			this._woModel = new sap.ui.model.json.JSONModel("mockData/WOmasterList.json");
			this._woModel.setDefaultBindingMode(sap.ui.model.BindingMode.OneWay);
			this.getView().setModel(this._woModel);
		},

		onListSelectionChange: function(oEvent) {
			var sPath = oEvent.getParameter("listItem").getBindingContext().sPath;
			var header = this.byId("orderHeader");
			header.bindElement(sPath);
			var infoForm = this.byId("infoForm");
			infoForm.bindElement(sPath);
			debugger;
			//sap.ui.getCore().byId("myList").getBinding("items").refresh();
		},

		onBackToAuthorization: function(oEvent) {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("authorization");
		},
		
		priorityFormatter: function(prior) {
			if (prior === "High") {
				//return "Error";
				return sap.ui.core.ValueState.Error;
			} else if (prior === "Medium") {
				//return "Warning";
				return sap.ui.core.ValueState.Warning;
			} else if (prior === "Low") {
				//return "Success";
				return sap.ui.core.ValueState.Success;
			} else {
				//return "None";
				return sap.ui.core.ValueState.None;
			}
		}

	});
});