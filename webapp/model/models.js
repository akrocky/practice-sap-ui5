sap.ui.define([
'sap/ui/model/json/JSONModel'	
], function(JSONModel) {
	"use strict";
       return {
        createJSONModel:function (sFilePath) {
            var oModel= new JSONModel()
            //load or set data to model
            // oModel.setData()    n
            oModel.loadData(sFilePath)
            return oModel;
         },
         createXMLModel:function () {
             
         },
         createResourceModel:function () {
             
         }
       }
});