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
        markup: "",
        panel: null,
        init: function(){
            Y.log("udr: init called");
            udr.bindings();
            //generateNoise(0.2); // default opacity is .2 
        },
        bindings: function(){
            Y.one("#generate").on("click", function(){
                udr.setData();
                udr.setMarkup();
                udr.showMarkup();
                udr.showPanel("output");
                });
                
            Y.one("#tb_new").on("click", function(){
               udr.showPanel("properties"); 
            });  
            
            Y.all("#preview, #tb_preview").on("click", function(){
                Y.log("preview button clicked")
                udr.showPreview();
                
            })
            
            Y.one(".ft .author").on("click", function(){
               window.location.href="http://andrewwooldridge.com"; 
            });    
        },
        setData: function(){
            var title = Y.one("#gametitle").get("value"),
                author = Y.one("#gameauthor").get("value");
                
            udr.data = {
                title: title,
                author: author
            };    
        },
        setMarkup: function(){
          var data = udr.data,
            substring = udrtemp.html;
            
          udr.markup = Y.Lang.sub(substring, data); 
          //Y.log(udr.markkup);  
        },
        showPreview:function(){
            Y.log("undumer: showPreview called");
            var container = "#preview_iframe_wrapper";
            
            
            Y.one(container).setContent("");
            
            udr.showPanel("preview");
            
            
            udr.panel = new Y.InjectionEngine({
               container: "#preview_iframe_wrapper",
               css: [
                'http://fonts.googleapis.com/css?family=Tangerine',
                'assets/lib/undum/games/media/css/undum.css'
               ],
               js: [
                'assets/lib/jquery/jquery.min.js',
                'assets/lib/undum/games/media/js/undum.js',
                'assets/lib/undum/games/media/games/tutorial/tutorial.game.en.js'
               ],
               html: udr.markup
            });
            udr.panel.boot();
            
        },
        getData: function(){
            Y.log(udr.data);
            return udr.data;
        },
        showMarkup: function(){
           
           Y.one("#output").set("value",udr.markup);
           
           
           
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
