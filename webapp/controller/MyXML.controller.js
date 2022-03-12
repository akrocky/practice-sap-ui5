sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'chip/model/models',
    'chip/util/lifeSaver'
], function(Controlle,models,lifeSaver) {
    'use strict';
    Controlle.extend  ("chip.controller.MyXML",{
        formatter:  lifeSaver,
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
           var oModelResource=models.createResourceModel();
           sap.ui.getCore().setModel(oModelResource,"i18n");
               
        //    var oXmlModel=models.createXMLModel("model/mockdata/mydemo.xml")
        //    sap.ui.getCore().setModel(oXmlModel);
           //binding syntax
        //    var Osalary=this.getView().byId("idEmpSal")
        //    Osalary.bindValue('/empStr/salary')
        //    var OCurr=this.getView().byId("idCurr")
        //    OCurr.bindProperty('value','/empStr/currency')
  

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
        },
        onFlip:function () {
           var oModel = sap.ui.getCore().getModel();
           var oGOTModel= sap.ui.getCore().getModel("got") 
           sap.ui.getCore().setModel(oGOTModel)
           sap.ui.getCore().setModel(oModel,"got")

        },
        onRowSelect:function (oEvent) {
         this. useingElementBinding(oEvent)  
        },
        useingElementBinding: function (oEvent) {
            // step what is the row was selected by user
               
            var oRowContext=oEvent.getParameter("rowContext");
                 
    
            //step2 adress element
            var sPath=oRowContext.getPath()
            //step3 get object simple form
            var oSimpleForm= this.getView().byId("idSimple")
            
            //step 4 perform element binding
            oSimpleForm.bindElement(sPath);  
        },
        myFormatter:function (input) {
            return input && input.toUpperCase();
            // if (input) {
            //   return  input.toUpperCase() 
            // }
        }
    })
    
    
});