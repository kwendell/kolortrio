var RecordPlayerView = function() {
  this.name = ko.observable("Record Player");
  var self = this;
  this.DEFAULT="DEFAULT";
  this.PLAY="PLAY";
  this.viewState = self.DEFAULT
  this.lastTime;
  function init() {
       
        self.lastTime = Date.now();
       
    }
   Resources.load([
        'images/record-player-black-and-white-simple-reduced.png',
        'images/redRecord.png'
        
    ]);
	// call init callback when resource is loaded
    Resources.onReady(init);
  this.playSong = function(data,event) {
    //console.log(event.toElement.id);
    //console.log(self.getState());
    self.viewState = self.PLAY;
    //console.log(self.getState());


  };


  this.getState = function() {
  	return this.viewState;
  };
  
  this.updateView = function() {
  //alert("updateView::method");
   
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
