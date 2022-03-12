sap.ui.define([
'sap/ui/model/json/JSONModel',
'sap/ui/model/xml/XMLModel',
'sap/ui/model/resource/ResourceModel'	
], function(JSONModel,XMLModel,ResourceModel) {
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
            var oModel=new ResourceModel({
               bundleUrl: "i18n/i18n.properties"   
            })
            return  oModel;
         }
       }
});