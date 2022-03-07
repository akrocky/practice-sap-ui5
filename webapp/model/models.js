sap.ui.define([
	
], function() {
	"use strict";
       return {
        createJSONModel:function () {
            var oModel= new sap.ui.model.json.JSONModel()
            //load or set data to model
            // oModel.setData()   
            oModel.loadData('mockdata/sample.json')
            return oModel;
         },
         createXMLModel:function () {
             
         },
         createResourceModel:function () {
             
         }
       }
});