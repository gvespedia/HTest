sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"com/gv/hackathon/Hackathon3/model/models"
], function(UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("com.gv.hackathon.Hackathon3.Component", {

		metadata: {
			manifest: "json"
			/*routing: {
				config: {
					viewPath: "com.gv.hackathon.Hackathon3.views",
					viewType: "XML",
					controlId: "shell",
					controlAggregation: "app"
				},
				routes: [{
					pattern: "",
					name: "home",
					target: "homeApp"
				}, {
					pattern: "0",
					name: "splitview",
					target: "homeSplit"
				}],
				targets: {
					homeApp: {
						viewName: "Authorization",
						viewLevel: "1"
					},
					homeSplit: {
						viewName: "WorkOrders"
					}
				}
			}*/
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// enable routing
			this._router = this.getRouter();
			//this.getRouter().initialize();
			this._routeHanlder = new sap.m.routing.RouteMatchedHandler(this._router);
			this._router.initialize();

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
		}
	});
});