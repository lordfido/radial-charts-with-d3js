/* This array will storage all graphs JS objects */
var graphs = new Array();

/* Loop into mock-data */
for(var x in response){
  var elem = response[x];

  /* Create the object */
  graphs[x] = new Radial("carrousel-elems", elem);
}
