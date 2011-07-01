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
 
  /**
   * emb.Panel = new Y.InjectionEngine({
             css: [
                    'http://yui.yahooapis.com/3.3.0/build/cssreset/reset-min.css',
                    '.hd {display: none;}',
                    theCSS
                ],
                js: [
                   'http://yui.yahooapis.com/3.3.0/build/yui/yui-min.js',
                   localInjection,
                   theJS
                ],
                beacons: beaconsData,
                embConfigs: emb.CONFIGS,
                dynamicAttrs: ["beacons","embConfigs"],
                html: emb.Data.fetch,
                container: ifContainer
           });
            
               
            emb.Panel.boot(); 
   */





YUI({
    modules: {
        "injection-engine":{
            requires:['node','base-base'],
            fullpath: "assets/lib/bootin/injection.js",
        },
        "bootstrap-engine": {
            requires:['node','base-base'],
            fullpath: "assets/lib/bootin/bootstrap.js",
        }
    }
}).use("node", "event", "injection-engine", "bootstrap-engine", function(Y){
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
                udr.showPanel("output");
                });
                
            Y.one("#tb_new").on("click", function(){
               udr.showPanel("properties"); 
            });  
            
            Y.one("#preview, #tb_preview").on("click", function(){
                Y.log("preview button clicked")
                udr.showPanel("preview");
            })
            
            Y.one(".ft .author").on("click", function(){
               window.location.href="http://andrewwooldridge.com"; 
            });    
        },
        getData: function(){
            
            udr.data = { 
                title: Y.one("#gametitle").get("value"),
                author: Y.one("#gameauthor").get("value")
                };
            Y.log(udr.data);
        },
        showData: function(){
           // 
           var substring = udrtemp.html;
           var string = "";
           var obj = udr.data;
           string = Y.Lang.sub(substring, obj);
           Y.one("#output").set("value",string);
           
           
        },
        showPanel: function(pnl){
            Y.log(pnl);
            Y.all(".bd .panels ul li").setStyle("display", "none");
            Y.all(".bd .panels ul li."+pnl).setStyle("display", "block");
        }
    };
    
    Y.on("domready", function(Y){
        
        udr.init();
    });
});
