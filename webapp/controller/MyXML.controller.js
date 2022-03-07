sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'chip/model/models'
], function(Controlle,models) {
    'use strict';
    Controlle.extend  ("chip.controller.MyXML",{
        
        onInit:function (params) {
           this.oView=this.getView()
           //create model obeject 
           var oModel=models.createJSONModel("model/mockdata/sample.json")
        //    oModel.setDefaultBindingMode("OneWay")
           //make the model aware to the application
           sap.ui.getCore().setModel(oModel);
           //second model
           var oMode2=models.createJSONModel("model/mockdata/dataset.json")
           sap.ui.getCore().setModel(oMode2,"got");
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
            // this.oView.byId("idEmpId").setValue("100");
            // this.oView.byId("idEmpName").setValue("sujon");
            // this.oView.byId("idEmpSal").setValue("9500");
            // this.oView.byId("idCurr").setValue("USD")
            //get the model object
            var oModel = sap.ui.getCore().getModel()
          var  oData=oModel.getProperty("/empStr")
          console.log(oData);
               oModel.setProperty("/empStr/empName","Spiderman")
            //change the property
        },
        onShowMe:function  () {
            var oModel = sap.ui.getCore().getModel()
            var  oData=oModel.getProperty("/")
            console.log(oData);
        }
    })
    
});