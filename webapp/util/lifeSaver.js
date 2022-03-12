sap.ui.define([
	"sap/ui/core/format/NumberFormat"], function(NumberFormat) {
	"use strict";

	return {
        myFormatter:function (input) {
            // return input && input.toUpperCase();
             if (input) {
               return  input.toUpperCase() 
             }
        },
        formatCurrency: function (amount, currCode) {
            var oCurrencyFormat = NumberFormat.getCurrencyInstance();
            return    oCurrencyFormat.format(amount, currCode); 
        }
    };
	
});