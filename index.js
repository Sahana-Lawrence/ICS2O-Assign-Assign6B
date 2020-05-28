// JavaScript File

// variables assigned
function runTotal() {
  var large = document.getElementById("large");
  var xlarge = document.getElementById("xlarge");
  var top1 = document.getElementById("top1");
  var top2 = document.getElementById("top2");
  var top3 = document.getElementById("top3");
  var top4 = document.getElementById("top4");
  var pizzaprice = document.getElementById("pizzaprice");
  var toppingsprice = document.getElementById("toppingsprice");
  
  if (large.checked) {
    pizzaprice = +6;
  } else if (xlarge.checked) {
    pizzaprice = +10;
  }
  
  if (top1.checked) {
    toppingsprice = +1;
  } else if (top2.checked) {
    toppingsprice = +10;
  } else if (top3.checked) {
    toppingsprice = +2.50;
  } else if (top4.checked) {
  	toppingsprice = +3.35;
  } else {
    toppingsprice = +0;
  }
  
  var result1 = ("pizzaprice"+"toppingsprice");
  var result2 = (result1*0.13);
  var result3 = (result1*1.13);
  var divresult1 = document.getElementById("divresult1");
  var divresult2 = document.getElementById("divresult2");
  var divresult3 = document.getElementById("divresult3");
  divresult1.innerHTML = result1;
  divresult2.innerHTML = result2;
  divresult3.innerHTML = result3;
}