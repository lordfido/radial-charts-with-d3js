
/* UTILS */
/* Place dots on numbers 1000 -> 1.000 */
var parseNumber = function(number, currency){
  number = ""+ number;
  var temp = "";


  if(number.length > 3){
    temp = "." + number.substring(number.length - 3, number.length - 0) + temp;
  }else if(number.length <= 3 && number.length > 0){
    temp = number.substring(number.length - 3, number.length - 0) + temp;
  }

  if(number.length > 6){
    temp = "." + number.substring(number.length - 6, number.length - 3) + temp;
  }else if(number.length <= 6 && number.length > 3){
    temp = number.substring(number.length - 6, number.length - 3) + temp;
  }

  if(number.length > 9){
    temp = "." + number.substring(number.length - 9, number.length - 6) + temp;
  }else if(number.length <= 9 && number.length > 6){
    temp = number.substring(number.length - 9, number.length - 6) + temp;
  }

  if(number.length > 12){
    temp = "." + number.substring(number.length - 12, number.length - 9) + temp;
  }else if(number.length <= 12 && number.length > 9){
    temp = number.substring(number.length - 12, number.length - 9) + temp;
  }

  if(number.length > 15){
    temp = "." + number.substring(number.length - 15, number.length - 12) + temp;
  }else if(number.length <= 15 && number.length > 12){
    temp = number.substring(number.length - 15, number.length - 12) + temp;
  }

  if(number.length > 18){
    temp = "." + number.substring(number.length - 18, number.length - 15) + temp;
  }else if(number.length <= 18 && number.length > 15){
    temp = number.substring(number.length - 18, number.length - 15) + temp;
  }

  if(currency){
    temp += currency;
  }
  return temp;
};

var scrollTo = function(elem, chart){

  var container = document.querySelector("#carrousel-elems");
  var target = document.querySelector("#radial" + chart);

  /* Modify margin left (horizontal scroll) */
  var pos = target.offsetLeft + (target.offsetWidth / 2);
  var newMargin = (window.innerWidth / 2) - pos - 25;
  container.style.marginLeft = newMargin;

  /* Remove previous active */
  if(document.querySelector(".dot.active")){
    var index = document.querySelector(".dot.active").classList.remove("active");
    // document.querySelector(".dot.active").classList.splice(index, 1);
  }

  /* Mark as active */
  selectedGraph = chart;
  elem.classList.add("active");
}
