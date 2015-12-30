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



};
