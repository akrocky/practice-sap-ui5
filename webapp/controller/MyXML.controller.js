sap.ui.define([
    'sap/ui/core/mvc/Controller'
], function(Controlle) {
    'use strict';
    Controlle.extend  ("chip.controller.MyXML",{
        
        onInit:function (params) {
            
        },
        onBtnClick:function () {
            var oInp=this.getView().byId("idInp")
            alert(oInp.getValue())
        }
    })
    
});