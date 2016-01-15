/* Center on the first element */
var selectedGraph = 0;
setTimeout(function(){
  scrollTo(document.querySelector(".dot2"), 2);
}, 1000);

/* Events */
var touchsurface = document.querySelector('#carrousel-elems');
var startX;
var startY;
var dist;
var threshold = 150; //required min distance traveled to be considered swipe

function handleswipe(nextElement){

    /* If there is a next element */
    if (nextElement && (selectedGraph + 1 <= radialCounter)){
        scrollTo(document.querySelector(".dot"+ (selectedGraph + 1)), selectedGraph + 1);
    }

    /* If there is a previous element */
    else if(!nextElement && (selectedGraph - 1 > 0)){
        scrollTo(document.querySelector(".dot"+ (selectedGraph - 1)), selectedGraph - 1);
    }
}

/* When start touching element */
touchsurface.addEventListener('touchstart', function(e){
    var touchobj = e.changedTouches[0];
    dist = 0;
    startX = touchobj.pageX;
    startY = touchobj.pageY;
}, false);

/* When we remove the finger */
touchsurface.addEventListener('touchend', function(e){
    var touchobj = e.changedTouches[0];
    dist = touchobj.pageX - startX;

    if(dist >= threshold || (dist * (-1)) >= threshold){
      if(dist > 0){
        handleswipe(false)
      }
      else{
        handleswipe(true)
      }
    }
}, false);

/* Add a new random element */
document.querySelector("#new-chart").addEventListener('click', function(e){

  /* Generate random options */
  var options = {
    label: 'Chart 0'+ radialCounter,
    minValue: 0,
    maxValue: parseInt(Math.random() * 1000000),
    currency: false
  };
  options.value = parseInt(Math.random(0) * 1000000);
  if(options.value > options.maxValue){
    options.value = options.maxValue;
  }

  /* Create new chart */
  graphs.push(new Radial("carrousel-elems", options));
});
