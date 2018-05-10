sap.ui.define([
	"jquery.sap.global",
	"sap/m/MessageToast",
	"sap/ui/core/Fragment",
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/Filter",
	"sap/ui/model/json/JSONModel",
	"com/gv/wo/WorkOrderApp/model/formatter"
], function(jQuery, MessageToast, Fragment, Controller, Filter, JSONModel, formatter) {
	"use strict";

	return Controller.extend("com.gv.hackathon.Hackathon3.controller.WorkOrders", {
		formatter: formatter,
		onInit: function() {
			this._woModel = new sap.ui.model.json.JSONModel("mockData/WOmasterList.json");
			this._woModel.setDefaultBindingMode(sap.ui.model.BindingMode.OneWay);
			this.getView().setModel(this._woModel);
		},

		onListSelectionChange: function(oEvent) {
			var sPath = oEvent.getParameter("listItem").getBindingContext().sPath;
			var header = this.byId("orderHeader");
			header.bindElement(sPath);
		}

	});
});