Template.addTestActions.events({
  'click #done': function(event, event) {
    Meteor.call('addTest', $('#first_name').val(), $('#description').val(), $('#cucumbers').val(), function(err, res) {
      if (err) console.log(err);
      Router.go('/app/projects/'+Session.get('curProjectId'));
    });
  },
  'click #cancel': function(event) {
    console.log(Session.get('curProjectId'));
    Router.go('/app/projects/'+Session.get('curProjectId'));
  }
});
