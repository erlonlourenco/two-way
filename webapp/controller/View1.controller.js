sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("ovly.two-way.controller.View1", {
		onInit: function () {
			var oModelo = new sap.ui.model.json.JSONModel({
				nome: "Erlon",
				sobrenome: "Lourenço"
			});
			this.getView().setModel(oModelo);
			window._oModelo = oMOdelo;
			
		}
	});
});