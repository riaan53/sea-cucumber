Meteor.methods({
  addProject: function (name, description, numCucumbers) {
    Projects.insert({userId: this.userId, name: name, createdOn: new Date(), cucumbers: numCucumbers, description: description});
  }
})
