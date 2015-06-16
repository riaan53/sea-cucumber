Template.project.helpers({
  features: function() {
    return Features.find({projId: Session.get('curProjectId')});
  },
  scenarios: function() {
    return Scenarios.find({featureId: this._id});
  },
  steps: function() {
    return Steps.find({_id: {$in: this.steps}});
  }
})

Template.project.onRendered(function() {
  this.bla = "gs";
  this.grid = $('.grid').masonry({
    // options
    itemSelector: '.grid-item',
    columnWidth: 450
  });

  $('.collapsible').collapsible({
    accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
  });
})

Template.project.events({
  'click .grid-item': function(e, t) {
    setTimeout(function() {
      t.grid.masonry('layout');
    },200)
  }

})
