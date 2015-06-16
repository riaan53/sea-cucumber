Template.projects.helpers({
  projects: function() {
   return Projects.find();
  }
})

Template.projects.events({
  'click .selectProject': function(event, template) {
    event.preventDefault();
    Session.set('curProjectId',this._id);
    Session.set('curProjectName',this.name);
    Router.go('/app/projects/'+this._id);
  }

})
