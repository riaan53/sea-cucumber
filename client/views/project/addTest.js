Template.addTest.onRendered(function() {
  this.$('select').material_select();
})

Template.addTest.helpers({
  numScenario: function() {
    var numArray = [];
    for (var i=0;i<Session.get('numScenario');i++) {
      numArray.push(i);
    }
    return numArray;
  }
})

Template.addTest.events({
  'click #addScenario': function(e, t) {
    Session.set('numScenario', Session.get('numScenario')+1);
  }
})
