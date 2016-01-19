var RecordPlayerView = function() {
  this.name = ko.observable("Record Player");
  var self = this;
  this.DEFAULT="DEFAULT";
  this.PLAY="PLAY";
  this.viewState = self.DEFAULT;
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
   
    var recursiveAnim = function() {
        mainloop();
        animFrame( recursiveAnim );
    };

    
    animFrame( recursiveAnim );


/** Syntax
 * var Engine = (function(global) {
 * })(this);
 */

};
