// UNDUM EditoR
// undum-main.js
// pulls together all the modules and starts things up

var Y = YUI({
    comboBase: 'http://fuji.jetpants.com/yui/combo/yui3?',
    combine  : true,
    root     : 'build/',
    modules: {
        "undumer-core": {
            requires: ["node", "event"],
            fullpath: "assets/js/undumer-core.js"
        },
        "injection-engine":{
            requires:['node','base-base'],
            fullpath: "assets/lib/bootin/injection.js",
        },
        "bootstrap-engine": {
            requires:['node','base-base'],
            fullpath: "assets/lib/bootin/bootstrap.js",
        }
    }
}).use("undumer-core","event", function(Y){
    Y.log("undumer: in use...");
    
    Y.on("domready", function(e){
        Y.log("hi");
        
        
    })
});
