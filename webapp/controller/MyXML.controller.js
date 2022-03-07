sap.ui.define([
    'sap/ui/core/mvc/Controller'
], function(Controlle) {
    'use strict';
    Controlle.extend  ("chip.controller.MyXML",{
        
        onInit:function (params) {
           this.oView=this.getView()
           //create model obeject 
           var oModel= new sap.ui.model.json.JSONModel()
           //load or set data to model
           oModel.setData({
            "empStr":{
                 "empId":5000,
                 "empName":"kocju",
                 "salary":6500,
                 "currency":"EUR"
            } ,
            "empTab":[
                   {
                    "empId":9000,
                    "empName":"hiki",
                    "salary":3500,
                    "currency":"USD"
                   },{
                    "empId":9001,
                    "empName":"tunku",
                    "salary":4500,
                    "currency":"USD"
                   }
            ]  
           })
           //make the model aware to the application
           sap.ui.getCore().setModel(oModel);
           //binding syntax
           var Osalary=this.getView().byId("idEmpSal")
           Osalary.bindValue('/empStr/salary')

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