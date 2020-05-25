// JavaScript File

// variables assigned
function runTotal() {
var large = document.getElementById("large");
var xlarge = document.getElementById("xlarge");
var top1 = document.getElementById("top1");
var top2 = document.getElementById("top2");
var top3 = document.getElementById("top3");
var top4 = document.getElementById("top4");
var pprice = document.getElementById("pprice")
var tprice = document.getElementById("tprice")
if ("pizza"==large) {
  pprice = 6;
} else if ("pizza"==xlarge) {
  pprice = 10;
}
if ("toppings"==top1) {
  tprice = 1;
} else if ("toppings"==top2) {
  tprice = 10;
} else if ("toppings"==top3) {
  tprice = 2.50;
} else if ("toppings"==top4) {
	tprice = 3.35;
} else {
  tprice = 0;
}
var result1 = "pizza"+"toppings";
var result2 = result1*0.13;
var result3 = result1*1.13;
var divresult1 = document.getElementById("divresult1");
var divresult2 = document.getElementById("divresult2");
var divresult3 = document.getElementById("divresult3");
divresult1.innerHTML = result1;
divresult2.innerHTML = result2;
divresult3.innerHTML = result3;
}