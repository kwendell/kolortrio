/* Constructor for knockout.js ViewModel
 */
var ViewModel = function() {

  var self = this;
  // Use observable array to hold the views, Home, Map and History
  this.viewList = ko.observableArray([]);

  // Constructor invocations for each of the constituent views Home,
  // Map and History.
  var homeView = new HomeView();
  var recordPlayerView = new RecordPlayerView();
  var aboutView = new AboutView();
  var signUpView = new SignUpView();

  self.viewList.push(homeView);
  self.viewList.push(recordPlayerView);
  self.viewList.push(signUpView);
  self.viewList.push(aboutView);

  this.homeView = homeView;
  this.recordPlayerView = recordPlayerView;
  this.aboutView = aboutView;
  this.signUpView = signUpView;

  // Initialize the current view to the Home view.
  this.currentView = ko.observable(this.viewList()[0]);

  // Set up computed observables to switch to the views
  // from the nav selection.
  this.isHome = ko.computed(function() {
    var retval = "Home" == self.currentView().name();
    return retval;
  });
  this.isRecordPlayer = ko.computed(function() {
    var retval = "Record Player" == self.currentView().name();
	
    return retval;
  });
  this.isSignUp = ko.computed(function() {
    var retval = "Sign Up" == self.currentView().name();
    return retval;
  });
  this.isAbout = ko.computed(function() {
    var retval = "About" == self.currentView().name();
    return retval;
  });


  // method to keep track of currently selected view.
  this.setView = function(clickedView) {
    //alert(clickedView.name());
    self.currentView(clickedView);
  };



  this.playSong = function() {
           alert("playSong");
  };
};



ko.applyBindings(new ViewModel());