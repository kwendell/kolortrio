var RecordPlayerView = function() {
  this.name = ko.observable("Record Player");
  var self = this;
  this.DEFAULT="DEFAULT";
  this.PLAY="PLAY";
  this.viewState ="DEFAULT";
  
  
   
  
  
  self.playSong = function(data,event) {
   alert("record player");
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
  //console.log("do nothing");
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
