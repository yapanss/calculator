(function () {

'use strict';

angular.module('calcApp', [])
.controller('calcController', calcController)
.service('calcService', calcService);

calcController.$inject = ["calcService"];

function calcController (calcService) {
	var ctrl = this;
	ctrl.toucheCourante = "";
	ctrl.numb = "";
	ctrl.facteurs = [];
	ctrl.termes = [];
	ctrl.expression = "0";
	ctrl.expression2 = "0";
	ctrl.operator = "";
	ctrl.resultat = 0;
	ctrl.etat = 0;
	ctrl.pointActive = false;

	ctrl.un = function (){
		if(ctrl.etat){
			ctrl.initialise();
		}
		ctrl.numb +="1"
		ctrl.toucheCourante = "1";
		ctrl.expression2 += "1";
		if (ctrl.expression == "0") {
			ctrl.expression = "1";
		}
		else {
			ctrl.expression = ctrl.expression + "1";
		}
		
	}
	ctrl.deux = function (){
		if(ctrl.etat){
			ctrl.initialise();
		}
		ctrl.numb +="2";

		ctrl.toucheCourante = "2";
		ctrl.expression2 += "2";
		if (ctrl.expression == "0") {
			ctrl.expression = "2";
		}
		else {
			ctrl.expression = ctrl.expression + "2";
		}
		
	}
	ctrl.trois = function (){
		if(ctrl.etat){
			ctrl.initialise();
		}
		ctrl.numb +="3";

		ctrl.toucheCourante = "3";
		ctrl.expression2 += "3";
		if (ctrl.expression == "0") {
			ctrl.expression = "3";
		}
		else {
			ctrl.expression = ctrl.expression + "3";
		}
		
	}
	ctrl.quatre = function (){
		if(ctrl.etat){
			ctrl.initialise();
		}
		ctrl.numb +="4";

		ctrl.toucheCourante = "4";
		ctrl.expression2 += "4";
		if (ctrl.expression == "0") {
			ctrl.expression = "4";
		}
		else {
			ctrl.expression = ctrl.expression + "4";
		}
		
	}
	ctrl.cinq = function (){
		if(ctrl.etat){
			ctrl.initialise();
		}
		ctrl.numb +="5";

		ctrl.toucheCourante = "5";
		ctrl.expression2 += "5";
		if (ctrl.expression == "0") {
			ctrl.expression = "5";
		}
		else {
			ctrl.expression = ctrl.expression + "5";
		}
		
	}
	ctrl.six = function (){
		if(ctrl.etat){
			ctrl.initialise();
		}
		ctrl.numb +="6";

		ctrl.toucheCourante = "6";
		ctrl.expression2 += "6";
		if (ctrl.expression == "0") {
			ctrl.expression = "6";
		}
		else {
			ctrl.expression = ctrl.expression + "6";
		}
		
	}
	ctrl.sept = function (){
		if(ctrl.etat){
			ctrl.initialise();
		}
		ctrl.numb +="7";

		ctrl.toucheCourante = "7";
		ctrl.expression2 += "7";
		if (ctrl.expression == "0") {
			ctrl.expression = "7";
		}
		else {
			ctrl.expression = ctrl.expression + "7";
		}
		
	}
	ctrl.huit = function (){
		if(ctrl.etat){
			ctrl.initialise();
		}
		ctrl.numb +="8";

		ctrl.toucheCourante = "8";
		ctrl.expression2 += "8";
		if (ctrl.expression == "0") {
			ctrl.expression = "8";
		}
		else {
			ctrl.expression = ctrl.expression + "8";
		}
		
		
	}
	ctrl.neuf = function (){
		if(ctrl.etat){
			ctrl.initialise();
		}
		ctrl.numb +="9";

		ctrl.toucheCourante = "9";
		ctrl.expression2 += "9";
		if (ctrl.expression == "0") {
			ctrl.expression = "9";
		}
		else {
			ctrl.expression = ctrl.expression + "9";
		}
		
	}
	ctrl.zero = function (){

		if(ctrl.etat){
			ctrl.initialise();
		}
		ctrl.numb +="0";

		ctrl.toucheCourante = "0";
		if (ctrl.expression != "0") {
			ctrl.expression = ctrl.expression + "0";
			ctrl.expression2 = ctrl.expression2 + "0";
		}	
	}
	ctrl.plus = function (){

		if (["+", "-", "*", "/"].indexOf(ctrl.toucheCourante)!=-1) {
			if (ctrl.toucheCourante=="-") {
				ctrl.expression = ctrl.expression.slice(0, -1) + "+";
				ctrl.expression2 = ctrl.expression2.slice(0, -2) + "+";
			} else {
				ctrl.expression = ctrl.expression.slice(0, -1) + "+";
				ctrl.expression2 = ctrl.expression2.slice(0, -1) + "+";
			}
		}
		else {
			ctrl.expression = ctrl.expression + "+";
			ctrl.expression2 = ctrl.expression2 + "+";
		}
		ctrl.operator = true;
		
		ctrl.toucheCourante = "+";
		ctrl.etat = 0;
		ctrl.pointActive=false;		
		ctrl.numb = "";
	}
	ctrl.moins = function (){

		if (["+", "-", "*", "/"].indexOf(ctrl.toucheCourante)!=-1) {
			if (ctrl.toucheCourante=="-") {
				ctrl.expression = ctrl.expression.slice(0, -1) + "-";
				ctrl.expression2 = ctrl.expression2.slice(0, -2) + "+-";
			} else {
				ctrl.expression = ctrl.expression.slice(0, -1) + "-";
				ctrl.expression2 = ctrl.expression2.slice(0, -1) + "+-";
			}
			
		}
		else {
			ctrl.expression = ctrl.expression + "-";
			ctrl.expression2 = ctrl.expression2 + "+-";
		}
		ctrl.operator = true;

		ctrl.toucheCourante = "-";	
		ctrl.pointActive=false;
		ctrl.etat=0;
		ctrl.numb = "";	
	}
	ctrl.fois = function (){
		if (["+", "-", "*", "/"].indexOf(ctrl.toucheCourante)!=-1) {

			if (ctrl.toucheCourante=="-") {
				ctrl.expression = ctrl.expression.slice(0, -1) + "x";
				ctrl.expression2 = ctrl.expression2.slice(0, -2) + "*";
			} else {
				ctrl.expression = ctrl.expression.slice(0, -1) + "x";
				ctrl.expression2 = ctrl.expression2.slice(0, -1) + "*";
			}
		}
		else {
			ctrl.expression = ctrl.expression + "x";
			ctrl.expression2 = ctrl.expression2 + "*";
		}
		ctrl.operator = true;

		ctrl.toucheCourante = "*";
		ctrl.etat = 0;
		ctrl.pointActive=false;
		ctrl.numb = "";
	}
	ctrl.divise = function (){
		if (["+", "-", "*", "/"].indexOf(ctrl.toucheCourante)!=-1) {
			if (ctrl.toucheCourante=="-") {
				ctrl.expression = ctrl.expression.slice(0, -1) + "/";
				ctrl.expression2 = ctrl.expression2.slice(0, -2) + "/";
			} else {
				ctrl.expression = ctrl.expression.slice(0, -1) + "/";
				ctrl.expression2 = ctrl.expression2.slice(0, -1) + "/";
			}
		}
		else {
			ctrl.expression = ctrl.expression + "/";
			ctrl.expression2 = ctrl.expression2 + "/";
		}
		ctrl.operator = true;
		ctrl.toucheCourante = "/";
		ctrl.etat = 0;
		ctrl.pointActive=false;
		ctrl.numb = "";
	}
	ctrl.point = function(){
		if(ctrl.etat){
			ctrl.initialise();
		}
		if (!ctrl.pointActive) {
			ctrl.expression2 = ctrl.expression2 + ".";
			ctrl.pointActive = true;
			if(["+", "*", "/", "-"].indexOf(ctrl.toucheCourante)!=-1) {
				ctrl.expression  +="0."
			} else	ctrl.expression = ctrl.expression + ".";
			
		}
		ctrl.toucheCourante = ".";
		ctrl.numb += ".";
		
	}
	ctrl.evalue = function () {
		
		var arr = ctrl.expression2.split("+");		
		var multiArr = [],
			numbArr = [],
			divArr = [],
			multiDivArr = [];

		for(var i=0; i<arr.length; i++) {
			if (arr[i].match(/\*/) || arr[i].match(/\//)) {
				multiDivArr.push(arr[i]);
			}
			
			else numbArr.push(parseFloat(arr[i]));
		}

		for (var i = 0; i < multiDivArr.length; i++) {
			if (multiDivArr[i].match(/\//)) {
					divArr.push(multiDivArr[i]);
			}
			else multiArr.push(multiDivArr[i]);
		}

		for(var i = 0; i<multiArr.length; i++) {
			var multiArrI = multiArr[i].split("*");
			numbArr.push(calcService.multiplie(multiArrI));
		}
		for(var i = 0; i < divArr.length; i++){
			var divArrI = divArr[i].split("*");
			var c=1;
			for(var j=0; j<divArrI.length; j++){
				
				if(divArrI[j].match(/\//)) {
					divArrI[j]=calcService.divise(divArrI[j].split("/"));
				}
				c=c*divArrI[j];
			}
		divArr[i] = c;
		numbArr.push(divArr[i]);
		console.log(numbArr);
		}
	
		ctrl.resultat = calcService.additionne(numbArr);
		ctrl.expression = ctrl.resultat;
		ctrl.expression2 = ctrl.resultat;
		ctrl.etat = 1;
		numbArr = [0];
		multiArr = [];
		divArr = [];
		multiDivArr = [];
		ctrl.numb = "";
		ctrl.toucheCourante = "";
	}

	ctrl.initialise = function () {
		ctrl.etat = 0;
		ctrl.resultat = 0;
		ctrl.numb = "";
		ctrl.expression = "0";
		ctrl.expression2 = "0";
		ctrl.operator = "";
		ctrl.facteurs=[];
		ctrl.termes=[];
		ctrl.pointActive=false;
	}
	ctrl.supprimeNombreCourant = function() {
		if(!ctrl.operator && ["+", "*", "/", "-"].indexOf(ctrl.toucheCourante)==-1) {
			ctrl.expression = "0";
			ctrl.expression2 = "0";
		}
		else {
			console.log(ctrl.numb, ctrl.expression);
		ctrl.expression = ctrl.expression.slice(0,ctrl.expression.length-ctrl.numb.length);
		ctrl.expression2 = ctrl.expression2.slice(0,ctrl.expression2.length-ctrl.numb.length);
		
		}
		ctrl.numb = "";
		
	}

}
function calcService () {
	var service = this;

	service.multiplie = function (facteurs) {
		var produit = 1;
		for(var i = 0; i<facteurs.length ; i++) {
			produit *= parseFloat(facteurs[i]);
		}
		return Math.round(produit*1000000000)/1000000000;
	}
	service.divise = function (diviseurs) {
		var quotient = parseFloat(diviseurs[0]);
		for (var i = 1; i < diviseurs.length; i++) {
			quotient = quotient/diviseurs[i];
		}
		return Math.round(quotient*1000000000)/1000000000;
	}
	service.additionne = function (termes) {
		var somme = 0;
		for(var i = 0; i < termes.length; i++) {
			somme+=termes[i];
		}
		return somme;
	}
}

})();









