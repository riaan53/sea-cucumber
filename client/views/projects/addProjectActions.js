Template.addProjectActions.events({
  'click #done': function(event, event) {
    Meteor.call('addProject', $('#first_name').val(), $('#description').val(), $('#cucumbers').val(), function(err, res) {
      if (err) console.log(err);
      Router.go('projects');
    });
  },
  'click #cancel': function(event) {
    Router.go('projects');
  }
});
