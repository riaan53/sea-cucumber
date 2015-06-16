Meteor.publish("projects", function () {
  return Projects.find({userId: this.userId});
});

Meteor.publish("projectData", function (projId) {
  return [Projects.find({_id: projId, userId: this.userId}), Features.find({userId: this.userId, projId: projId}), Scenarios.find({userId: this.userId, projId: projId}), Steps.find({userId: this.userId, projId: projId})];
});
