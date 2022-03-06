sap.ui.define([
    'sap/ui/core/mvc/Controller'
], function(Controlle) {
    'use strict';
    Controlle.extend  ("chip.controller.MyXML",{
        
        onInit:function (params) {
           this.oView=this.getView() 
        },
        onBtnClick:function () {
            var oInp=this.getView().byId("idInp")
            alert(oInp.getValue())
        },
        onReload:function () {
            this.oView.byId("idEmpId").setValue("100");
            this.oView.byId("idEmpName").setValue("sujon");
            this.oView.byId("idEmpSal").setValue("9500");
            this.oView.byId("idCurr").setValue("USD")
        }
    })
    
});