sap.ui.define([
'sap/ui/model/json/JSONModel',
'sap/ui/model/xml/XMLModel'	
], function(JSONModel,XMLModel) {
	"use strict";
       return {
        createJSONModel:function (sFilePath) {
            var oModel= new JSONModel()
            //load or set data to model
            // oModel.setData()    n
            oModel.loadData(sFilePath)
            return oModel;
         },
         createXMLModel:function (sFilePath) {
              var oModel= new XMLModel()
              //load or set data to model
              // oModel.setData()    n
              oModel.loadData(sFilePath)
              return oModel;
             
         },
         createResourceModel:function () {
             
         }
       }
});