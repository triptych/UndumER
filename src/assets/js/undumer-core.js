// UNDUM EditoR
// undumer-core.js
// the core engine

YUI().add("undumer-core", function(Y){
    Y.log("undumer: undum-core...");
    var und = Y.namespace("UND");
    
    // local functions
    var init = function(){
        Y.log("undumer: local init called");
    }
    
    
    
    
    
    
    // public functions
    und.init = function(){
        Y.log("undumer: public init")
    }
}, "0.0.1",{
    requires: ["node", "event"]
}
);