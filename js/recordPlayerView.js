var RecordPlayerView = function(viewModel) {
  this.name = ko.observable("Record Player");
  this.viewModel=viewModel;
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
  this.rectangle2 = null;



    Resources.load([
	'images/redRecord.png',
  'images/record-player-black-and-white-simple-reduced.png'
    ]);

	 function init() {

       self.readyToDraw=true;
	   self.rectangle1 = new Rectangle(0,0,
	     Resources.get('images/redRecord.png').width,
	     Resources.get('images/redRecord.png').height);

     self.rectangle2 = new Rectangle(0,0,
       Resources.get('images/record-player-black-and-white-simple-reduced.png').width,
       Resources.get('images/record-player-black-and-white-simple-reduced.png').height);
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
  if (self.viewModel.isRecordPlayer()) {
  if (self.viewState==self.PLAY) {
  //console.log("PLAY "+self.viewModel.isRecordPlayer());

  } else if (self.viewState==self.DEFAULT) {

  if (self.readyToDraw==true) {
    if (self.canvas==null ) {
      self.canvas = doc.getElementById('recordPlayerCanvas');
	  self.canvas.addEventListener('click',
	                               function(event) {

								     var canvasRect =  self.canvas.getBoundingClientRect();
									 var relY = event.clientY-canvasRect.top;
									 var relX =event.clientX-canvasRect.left;

								     var contains = self.rectangle1.containsPoint(relX,relY);
									 if (contains) {self.viewState=self.PLAY;}
								      },
									 false);



	} else
    {

      if (self.ctx) {
	    //alert(Resources.get('images/redRecord.png').width);
        self.ctx.drawImage(Resources.get('images/redRecord.png'), 0, 0);
        self.ctx.drawImage(Resources.get('images/record-player-black-and-white-simple-reduced.png'), 200,0);
		//self.rectangle1.x=0;
		//self.rectangle1.y=0;
		//console.log(self.rectangle1.width);

      } else {
	        self.ctx = self.canvas.getContext('2d');


	  }
    }

  }



  }
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
