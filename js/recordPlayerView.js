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
  this.canvas = null;
  this.ctx = null;
  this.rectangle1 = null;
  

 
    Resources.load([
	'images/redRecord.png'
    ]);
	
	 function init() {

       self.readyToDraw=true;
	   self.rectangle1 = new Rectangle(0,0,
	     Resources.get('images/redRecord.png').width,
	     Resources.get('images/redRecord.png').height);
	   //console.log(self.rectangle1.containsPoint(2,2));
	  
	   
	 

    }
	Resources.onReady(init);
  
  
   
  
  
  self.playSong = function(data,event) {
  
    self.viewState = self.PLAY;
  


  };


  this.getState = function() {
  	return this.viewState;
  };
  
  this.updateView = function() {
 
  if (self.viewState==self.PLAY) {
  
  } else if (self.viewState==self.DEFAULT) {
  
  if (self.readyToDraw==true) {
    if (self.canvas==null ) {
      self.canvas = doc.getElementById('recordPlayerCanvas');
	  self.canvas.addEventListener('click', function(event) {alert(event.clientX); }, false);
	  
	  
	  
	} else 
    {

      if (self.ctx) {
	    //alert(Resources.get('images/redRecord.png').width);
        self.ctx.drawImage(Resources.get('images/redRecord.png'), 0, 0);
		self.rectangle1.x=0;
		self.rectangle1.y=0;
		//console.log(self.rectangle1.width);
		
      } else {
	        self.ctx = self.canvas.getContext('2d');
			
			
	  }
    }

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
