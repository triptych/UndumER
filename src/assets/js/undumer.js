/** generate background noise 
  * http://net.tutsplus.com/tutorials/javascript-ajax/how-to-generate-noise-with-canvas/ 
  * **/ 
  
function generateNoise(opacity) {  
   if ( !!!document.createElement('canvas').getContext ) {  
      return false;  
   }  
  
   var canvas = document.createElement("canvas"),  
   ctx = canvas.getContext('2d'),  
   x, y,  
   number,  
   opacity = opacity || 0.2;  
  
   canvas.width = 45;  
   canvas.height = 45;  
  
   for ( x = 0; x < canvas.width; x++ ) {  
      for ( y = 0; y < canvas.height; y++ ) {  
         number = Math.floor( Math.random() * 60 );  
  
         ctx.fillStyle = "rgba(" + number + "," + number + "," + number + "," + opacity + ")";  
         ctx.fillRect(x, y, 1, 1);  
      }  
   }  
  
   document.body.style.backgroundImage = "url(" + canvas.toDataURL("image/png") + ")";  
}  
 
  


YUI().use("node", "event", function(Y){
    udr = Y.namespace("udr");

    
    udr = {
        data: {},
        init: function(){
            Y.log("udr: init called");
            udr.bindings();
            generateNoise(0.2); // default opacity is .2 
        },
        bindings: function(){
            Y.one("#generate").on("click", function(){
                udr.getData();
                udr.showData();
                });
        },
        getData: function(){
            
            udr.data = { title: Y.one("#gametitle").get("value") };
            Y.log(udr.data);
        },
        showData: function(){
            Y.one("#output").set("value",udr.data.title);
        }
    };
    
    Y.on("domready", function(Y){
        
        udr.init();
    });
});
