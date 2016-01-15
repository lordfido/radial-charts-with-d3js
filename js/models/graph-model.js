/* Number of circles */
var radialCounter = 0;

/* Object class */
var Radial = function(containerId, options){
  var self = this;

  /* Set default values */
  this.counter = 0;
  this.label = options.label ? options.label : '';
  this.minValue = options.minValue ? options.minValue : 0;
  this.maxValue = options.maxValue ? options.maxValue : 0;
  this.value = options.value ? options.value : 0;
  this.currency = options.currency ? options.currency : false;
  this.parsedTotal = parseNumber(this.maxValue, this.currency);

  /* Constructor */
  this.init = function(){

    /* Increase count */
    radialCounter++;
    this.counter = radialCounter;

    /* Add to the DOM */
    var newHTML = '<div id="radial'+ this.counter +'"></div>';
    document.getElementById(containerId).innerHTML += newHTML;

    setTimeout(function(){
      self.update();
    }, 100);
  };

  /* Update graph */
  this.update = function(){

    radialProgress(document.getElementById("radial"+ this.counter))
      .label(this.label)
      .diameter(200)
      .minValue(this.minValue)
      .maxValue(this.maxValue)
      .value(this.value)
      .render();

    /* Add width to carrousel container */
    document.querySelector("#carrousel-elems").style.width = ((340 + 80) * radialCounter);

    /* Add a new dot to carrousel-paginator */
    document.querySelector("#carrousel-paginator").innerHTML += '<span class="dot dot'+ this.counter +'" onclick="javascript:scrollTo(this, '+ this.counter +')"></span>';

    /* Center graph */
    document.querySelector("#radial"+ this.counter +" svg g").setAttribute("transform", "translate(60,0)");

    /* Update texts' positions */
    document.querySelector("#radial"+ this.counter +" .component text.label").setAttribute("y", "-130");

    /* Update texts' contents */
    this.updateTexts();
  };

  /* Update % text with selected one */
  this.updateTexts = function(){

    /* Update texts' contents */
    document.querySelector("#radial"+ this.counter +" .labels text.label").textContent = this.parsedTotal;

    setTimeout(function(){

      /* If animation fididn't finished */
      if(/%/.test(document.querySelector("#radial"+ self.counter +" .labels text.label").textContent)){
        self.updateTexts();
      }

      /* If animation already finished */
      else{

        /* Absolut values */
        var mobileVal = self.value;
        var tabletVal = self.maxValue - mobileVal;

        /* Percentages */
        var mobilePer = mobileVal * 100 / self.maxValue;
        mobilePer = Math.round(mobilePer * 100) / 100;
        var tabletPer = 100 - mobilePer;
        if(tabletPer < 0){ tabletPer = tabletPer * (-1); }
        tabletPer = Math.round(tabletPer * 100) / 100;

        /* Place containers for details */
        document.querySelector("#radial" + self.counter).innerHTML += "<div class='values'><div class='tablet'></div><div class='mobile'></div></div>";

        /* Write info */
        document.querySelector("#radial" + self.counter +" .values .tablet").innerHTML += "<h1>Tablet</h1>";
        document.querySelector("#radial" + self.counter +" .values .tablet").innerHTML += "<p>"+ tabletPer +"% <span class='muted'>" + parseNumber(tabletVal, self.currency) + "</span></p>";
        document.querySelector("#radial" + self.counter +" .values .mobile").innerHTML += "<h1>Smartphones</h1>";
        document.querySelector("#radial" + self.counter +" .values .mobile").innerHTML += "<p>"+ mobilePer +"% <span class='muted'>" + parseNumber(mobileVal, self.currency) + "</span></p>";
      }
    }, 100);
  };

  self.init();
};
