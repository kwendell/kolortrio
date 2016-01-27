var RecordPlayerView = function() {
  this.name = ko.observable("Record Player");
  var self = this;
  this.DEFAULT="DEFAULT";
  this.PLAY="PLAY";
  this.viewState ="DEFAULT";
  var doc = document
        win = window;
  //this.canvas = doc.getElementById('recordPlayerCanvas');
  //this.ctx = self.canvas.getContext('2d');
  this.readyToDraw = false;
  
    Resources.load([
	'images/redRecord.png'
    ]);
	
	 function init() {

self.readyToDraw=true;

    }
	Resources.onReady(init);
  
  
   
  
  
  self.playSong = function(data,event) {
  
    self.viewState = self.PLAY;
  


  };


  this.getState = function() {
  	return this.viewState;
  };
  
  this.updateView = function() {
  //alert("updateView::method");
  if (self.viewState==self.PLAY) {
  //console.log("move record...");
  } else {
  //console.log("trying to draw
  //self.ctx.drawImage(Resources.get('images/redRecord.png'), 0, 0);
  if (self.readyToDraw==true) {
  var canvas = doc.getElementById('recordPlayerCanvas');
  if (canvas!=null) {
  var theCtx = canvas.getContext('2d');
  if (theCtx) {
  theCtx.drawImage(Resources.get('images/redRecord.png'), 0, 0);
  }
  }
    //console.log("ready to draw");
  } else {
  //console.log("not ready to draw");
  }

  
  //self.ctx.drawImage(self.recordImg, 20, 20);
  //console.log(self.recordImg.src);
  }
   
  };
   
  var mainloop  = function(global) {
   
	
	self.updateView();
	
   };
   var animFrame = window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            window.oRequestAnimationFrame      ||
            window.msRequestAnimationFrame     ||
            null ;
   if ( animFrame !== null ) {
    var recursiveAnim = function() {
        mainloop();
        animFrame( recursiveAnim );
    };
    animFrame( recursiveAnim );
	} else {
	  var ONE_FRAME_TIME = 1000.0 / 60.0 ;
      setInterval( mainloop, ONE_FRAME_TIME );
	
	}


/** Syntax
 * var Engine = (function(global) {
 * })(this);
 */

};
