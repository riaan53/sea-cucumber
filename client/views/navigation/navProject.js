Template.navProject.helpers({
  projectName: function() {
    if (!Session.get('curProjectName')) {
      var projObj = Projects.findOne(Session.get('curProjectId'));
      if (!!projObj) return projObj.name;
    }
    return Session.get('curProjectName');
  }

})
