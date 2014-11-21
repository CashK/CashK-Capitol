// TODO
game.PlayerEntity = me.Entity.extend({
   init: function (x, y, settings){
       this._super(me.Entity, 'init', [x, y, { 
           image: "hero1",
           spritewidth: "128",
           spriteheight: "128",
           width: 128,
           height: 128,
           getShape: function() {
               return(new me.Rect(0, 0, 128, 128)).toPolygon();
           }
           
           }]);
       
       this.renderable.addAnimation("idle", [3]);
       this.renderable.addAnimation("smallWalk", [8, 9, 10, 11, 12, 13]);
       this.renderable.addAnimation("jump", [9, 10, 11]);
       this.renderable.addAnimation("walk", [8, 9, 10, 11, 12, 13]);
       
       this.renderable.setCurrentAnimation("idle");
               
       this.body.setVelocity(5, 20);       
   },
   
   update: function(delta) {
       if (me.input.isKeyPressed('left')) {
            // flip the sprite on horizontal axis
            this.flipX(true);
            // update the entity velocity
            this.body.vel.x -= this.body.accel.x * me.timer.tick;
            // change to the walking animation
            if (!this.renderable.isCurrentAnimation("walk")) {
                this.renderable.setCurrentAnimation("walk");
            }
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
            this.body.vel.x = 0;
            // change to the standing animation
            this.renderable.setCurrentAnimation("idle");
        }
     
        if (me.input.isKeyPressed('jump')) {
            // make sure we are not already jumping or falling
            if (!this.body.jumping && !this.body.falling) {
                // set current vel to the maximum defined value
                // gravity will then do the rest
                this.body.vel.y = -this.body.maxVel.y * me.timer.tick;
                // set the jumping flag
           }
       }
       this.body.update(delta);
       this._super(me.Entity, ("update"), [delta]);
       return true;
   }
    
});