Template.navLandingProfile.helpers({
  userName: function() {
    var userObj = Meteor.users.findOne(Meteor.userId());
    if (!!userObj && userObj.emails) return userObj.emails[0].address;
  }
})

Template.navLandingProfile.events({
  'click #logout': function (event) {
    event.preventDefault();
    Router.go('landing');
    Meteor.logout();
  }
})

Template.navLandingProfile.onRendered(function () {
  this.$(".dropdown-button").dropdown();
});
