(function () {

'use strict';

angular.module('calcApp', [])
.controller('calcController', calcController);

function calcController () {
	var ctrl = this;
	ctrl.numb = "";
	ctrl.facteurs = [];
	ctrl.termes = [];
	ctrl.expression = "";
	ctrl.operator = "";
	ctrl.resultat = 0;

	ctrl.un = function (){
		if(ctrl.resultat){ctrl.initialise();}
		ctrl.expression = ctrl.expression + "1";
		if (ctrl.operator=="-") {
			ctrl.numb="-1";
		}
		else ctrl.numb +="1";
	}
	ctrl.deux = function (){
		if(ctrl.resultat){ctrl.initialise();}
		ctrl.expression = ctrl.expression + "2";
		if (ctrl.operator=="-") {
			ctrl.numb="-2";
		}
		else ctrl.numb +="2";
	}
	ctrl.trois = function (){
		if(ctrl.resultat){ctrl.initialise();}
		ctrl.expression = ctrl.expression + "3";
		if (ctrl.operator=="-") {
			ctrl.numb="-3";
		}
		else ctrl.numb +="3";
	}
	ctrl.quatre = function (){
		if(ctrl.resultat){ctrl.initialise();}
		ctrl.expression = ctrl.expression + "4";
		if (ctrl.operator=="-") {
			ctrl.numb="-4";
		}
		else ctrl.numb +="4";
	}
	ctrl.cinq = function (){
		if(ctrl.resultat){ctrl.initialise();}
		ctrl.expression = ctrl.expression + "5";
		if (ctrl.operator=="-") {
			ctrl.numb="-5";
		}
		else ctrl.numb +="5";
	}
	ctrl.six = function (){
		console.log(ctrl.expression);
		if(ctrl.resultat){ctrl.initialise();}
		ctrl.expression = ctrl.expression + "6";
		if (ctrl.operator=="-") {
			ctrl.numb="-6";
		}
		else ctrl.numb +="6";
	}
	ctrl.sept = function (){
		if(ctrl.resultat){ctrl.initialise();}
		ctrl.expression = ctrl.expression + "7";
		if (ctrl.operator=="-") {
			ctrl.numb="-7";
		}
		else ctrl.numb +="7";
	}
	ctrl.huit = function (){
		if(ctrl.resultat){ctrl.initialise();}
		ctrl.expression = ctrl.expression + "8";
		if (ctrl.operator=="-") {
			ctrl.numb="-8";
		}
		else ctrl.numb +="8";
	}
	ctrl.neuf = function (){
		if(ctrl.resultat){ctrl.initialise();}
		ctrl.expression = ctrl.expression + "9";
		if (ctrl.operator=="-") {
			ctrl.numb="-9";
		}
		else ctrl.numb +="9";
	}
	ctrl.zero = function (){
		if (ctrl.numb || ctrl.operator) {
			ctrl.expression = ctrl.expression + "0";
			if (ctrl.operator=="-") {
			ctrl.numb="-0";
		}
		else ctrl.numb +="0";
		}
		
		
	}
	ctrl.plus = function (){
		ctrl.expression = ctrl.expression + "+";
		if (ctrl.operator=="+" || ctrl.operator=="-" || !ctrl.operator) {
			ctrl.termes.push(parseFloat(ctrl.numb));
			ctrl.numb = "";
		}
		else if (ctrl.operator=="*") {
			ctrl.facteurs.push(parseFloat(ctrl.numb));
			console.log(ctrl.facteurs);

			var produit=1;
			for(var i=0;i<ctrl.facteurs.length;i++){
				produit *=ctrl.facteurs[i];
			}
			ctrl.termes.push(produit);
			ctrl.facteurs = [];
			console.log(ctrl.facteurs);
			console.log(ctrl.termes);
		}
		ctrl.operator = "+";
		console.log(ctrl.termes);

	}
	ctrl.moins = function (){
		ctrl.expression = ctrl.expression + "-";
		if (ctrl.operator=="+" || ctrl.operator=="-" || !ctrl.operator) {
			ctrl.termes.push(parseFloat(ctrl.numb));
			ctrl.numb = "";
		}
		else if (ctrl.operator=="*") {
			ctrl.facteurs.push(parseFloat(ctrl.numb));
			console.log(ctrl.facteurs);

			var produit=1;
			for(var i=0;i<ctrl.facteurs.length;i++){
				produit *=ctrl.facteurs[i];
			}
			ctrl.termes.push(produit);
			ctrl.facteurs = [];
			ctrl.numb = "";
			console.log(ctrl.facteurs);
			console.log(ctrl.termes);
		}
		ctrl.operator = "-";
		console.log(ctrl.termes);

	}
	ctrl.fois = function (){
		ctrl.expression = ctrl.expression + "x";
		ctrl.facteurs.push(parseFloat(ctrl.numb));
		ctrl.numb = "";
		ctrl.operator="*";
		console.log(ctrl.facteurs);

	}
	ctrl.evalue = function () {
		if (ctrl.operator == "+" || ctrl.operator == "-" || ctrl.operator == "") {
			ctrl.termes.push(parseFloat(ctrl.numb));
		}

		if (ctrl.operator == "*" && ctrl.numb != "") {
			ctrl.facteurs.push(parseFloat(ctrl.numb));
			var produit=1;
			for(var i=0;i<ctrl.facteurs.length;i++){
				produit *=ctrl.facteurs[i];
			}
			ctrl.termes.push(produit);
		}

		for (var i = 0; i < ctrl.termes.length; i++) {
			ctrl.resultat +=  ctrl.termes[i]
		}
		ctrl.expression = ctrl.resultat;
		// ctrl.resultat = 0;
		// console.log(ctrl.expression.split("+"));
	}

	ctrl.initialise = function () {
		ctrl.resultat = 0;
		ctrl.numb = "";
		ctrl.expression = "";
		ctrl.operator = "";
		ctrl.facteurs=[];
		ctrl.termes=[];
	}

}



})();