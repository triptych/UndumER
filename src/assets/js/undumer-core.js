// UNDUM EditoR
// undumer-core.js
// the core engine
YUI().add("undumer-core", function(Y) {
    Y.log("undumer: undum-core...");
    var und = Y.namespace("UND");
    // local functions
    var init = function() {
            Y.log("undumer: local init called");
        };
        
    // Set up the model
    //Y.GameModel = Y.Base.create('gameModel',Y.Model, [], {});
    
    /** **/
    Y.GameModel = Y.Base.create('gameModel', Y.Model, [], {
        // prototype methods - avail to all instances of model
        // save the game up to this point
        gameSave: function() {
            Y.log("undumer: gameSave called");
        },
        // load an existing game (only one game saved for now)
        gameLoad: function() {
            Y.log("undumer: gameLoad called");
        },
        // set up a new game
        gameNew: function() {
            Y.log("undumer: gameNew called");
        }
    }, {
        ATTRS: {
            author: {
                value: "Joe Author",
                validator: function(val) {
                    return Y.Lang.isString(val);
                }
            },
            title: {
                value: "Great American IF",
                validator: function(val) {
                    return Y.Lang.isString(val);
                }
            }
        }
    });
    /**/
    
    // public functions
    und.init = function() {
        Y.log("undumer: public init");
    };
}, "0.0.1", {
    requires: ["node", "event"]
});