(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    window.opspark.collectable = window.opspark.collectable || {};
    let collectable = window.opspark.collectable;

    let type = {
        db: {assetKey: 'db', points: 10},
        max: {assetKey: 'max', points: 20},
        steve: {assetKey: 'steve', points: 30},
        grace: {assetKey: 'grace', points: 40},
grace: {assetKey: 'grace', points: 40},
        kennedi: {assetKey: 'kennedi', points: 50}
       , dogecoin: {assetKey: 'dogecoin', points: 50000000}
    };
    
    /**
     * init: Initialize all collectables.
     * 
     * GOAL: Add as many collectables as necessary to make your level challenging.
     *
        dogecoin: {assetKey: 'kennedi', points: 50}
    };
    
    /**
     * init: Initialize all collectables.
     * 
     * GOAL: Add as many collectables as necessary to make your level challenging.
     * 
     * Use the createCollectable() Function to create collectables for the level.
     * See the type Object, above, for the types of collectables and their point values.
     * 
     * createCollectable() takes these arguments:
     *      
     *      createCollectable(type, x, y, gravity, bounce);
     * 
     *      type: The type of the collectable, use the type Object above.
     *      x: The x coordineate for the collectable.
     *      y: The y coordineate for the collectable.
     *      gravity: OPTIONAL The gravitational pull on the collectable.
     *      bounce: OPTIONAL A factor effecting how much the collectable will bounce off platforms, etc.
     */ 
    function init(game) {
        let createCollectable = collectable.create;

        ////////////////////////////////////////////////////////////////////////
        // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////
        
        // example: 400, 250
        createCollectable(type.steve, 200, 450, 6, 1);
        createCollectable(type.dogecoin, 800, 200, -0.15, 1);
        createCollectable(type.db, 420, 300, -0.15, 5);
        createCollectable(type.db, 10, 300, 2, 5);
        createCollectable(type.db, 10, 305, 2, 5);
        createCollectable(type.db, 10, 310, 2, 5);
        createCollectable(type.db, 10, 315, 2, 5);
        createCollectable(type.db, 10, 320, 2, 5);
        createCollectable(type.db, 10, 325, 2, 5);
        createCollectable(type.db, 10, 330, 2, 5);
        createCollectable(type.db, 10, 300, 2, 5);
        createCollectable(type.db, 10, 305, 2, 5);
        createCollectable(type.db, 10, 310, 2, 5);
        createCollectable(type.db, 10, 315, 2, 5);
        createCollectable(type.db, 10, 320, 2, 5);
        createCollectable(type.db, 10, 325, 2, 5);
        createCollectable(type.db, 10, 330, 2, 5);
        createCollectable(type.db, 10, 305, 2, 5);
        createCollectable(type.db, 10, 310, 2, 5);
        createCollectable(type.db, 10, 315, 2, 5);
        createCollectable(type.db, 10, 320, 2, 5);
        createCollectable(type.db, 10, 325, 2, 5);
        createCollectable(type.db, 10, 330, 2, 5);
        
        
        // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////
    };
    collectable.init = init;
})(window);