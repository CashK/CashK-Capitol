// TODO
game.PlayerEntity = me.Entity.extend({
   init: function (x, y, settings){
       this._super(me.Entity, 'init', [x, y, { 
           //select image
           image: "hero1",
           //set sprite width and height
           spritewidth: "64",
           spriteheight: "64",
           width: 64,
           height: 64,
           getShape: function() {
               return(new me.Rect(0, 0, 64, 64)).toPolygon();
           }
           
           }]);
       //specify which frames are to be utilized for each action in which order
       this.renderable.addAnimation("idle", [78]);
       this.renderable.addAnimation("smallWalk", [143, 144, 145, 146, 147, 148, 149, 150, 150], 88);
       this.renderable.addAnimation("jump", [9, 10, 11], 80);
       
       this.renderable.setCurrentAnimation("idle");
               
       this.body.setVelocity(5, 20);
       me.game.viewport.follow(this.pos, me.game.viewport.AXIS.BOTH);
   },
   
   update: function(delta) {
       if (me.input.isKeyPressed('left')) {
            // flip the sprite on horizontal axis
            this.flipX(true);
            // update the entity velocity
            this.body.vel.x -= this.body.accel.x * me.timer.tick;
            // change to the walking animation
            if (!this.renderable.isCurrentAnimation("smallWalk")) {
                this.renderable.setCurrentAnimation("smallWalk");
            }
            
            this.body.update(delta);
            me.collision.check(this, true, this.collideHandler(this), true);
            
        } else if (me.input.isKeyPressed('right')) {
            // unflip the sprite
            this.flipX(false);
            // update the entity velocity
            this.body.vel.x += this.body.accel.x * me.timer.tick;
            // change to the walking animation
            if (!this.renderable.isCurrentAnimation("smallWalk")) {
                this.renderable.setCurrentAnimation("smallWalk");
            }
        } else {
            this.body.vel.x =  0;
            // change to the standing animation
            this.renderable.setCurrentAnimation("idle");
        }
     
        if (me.input.isKeyPressed('jump')) {
            // make sure we are not already jumping or falling
            if (!this.body.jumping && !this.body.falling) {
                // set current vel to the maximum defined value
                // gravity will then do the rest
                this.body.vel.y = -this.body.accel.y * me.timer.tick;
                // set the jumping flag
           }
       }
       
       
       
       this.body.update(delta);
       this._super(me.Entity, ("update"), [delta]);
       return true;
   },
    
    collideHandler: function(response){
        
    }


});
//SPAWN SETTINGS
game.LevelTrigger = me.Entity.extend({
    init: function (x, y, settings){
        this._super(me.Entity, 'init', [x, y, settings]);
        this.body.onCollision = this.onCollision.bind(this);
        this.level = settings.level;
        this.xSpawn = settings.xSpawn;
        this.ySpawn = settings.ySpawn;
    },
    
    onCollision: function(){
        this.body.setCollisionMask(me.collision.types.NO_OBJECT);
        me.levelDirector.loadLevel(this.level);
        me.state.current().resetPlayer(this.xSpawn, this.ySpawn);
    }
    
});

game.Enemy = me.Entity.extend({
    init: function(x, y, settings){
        this._super(me.Entity, 'init', [x, y, { 
           //select image
           image: "slime",
           //set sprite width and height
           spritewidth: "60",
           spriteheight: "28",
           width: 60,
           height: 28,
           getShape: function() {
               return(new me.Rect(0, 0, 60, 28)).toPolygon();
           }
           
           }]);
    },
    
    update: function(delta){
        
    }
    
});