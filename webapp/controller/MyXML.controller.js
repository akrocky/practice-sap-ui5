sap.ui.define([
    'sap/ui/core/mvc/Controller'
], function(Controlle) {
    'use strict';
    Controlle.extend  ("chip.controller.MyXML",{
        
        onInit:function (params) {
           this.oView=this.getView()
           //create model obeject 
           
           //make the model aware to the application
           sap.ui.getCore().setModel(oModel);
           //binding syntax
           var Osalary=this.getView().byId("idEmpSal")
           Osalary.bindValue('/empStr/salary')
           var OCurr=this.getView().byId("idCurr")
           OCurr.bindProperty('value','/empStr/currency')
 

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