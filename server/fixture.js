if ((Features.find().count() === 0) && (Projects.find().count() === 0)) {

   var aId = Accounts.createUser({
      email: 'riaan53@gmail.com',
      password: '123456',
      profile: {
          name: 'Riaan Jacobs'
      }
  });

  var projId = Projects.insert({userId: aId, name: 'Test Project', createdOn: new Date(), cucumbers: '5', description: 'This is the project description'});
  for (var i=0; i< 15;i++) {
    var fId = Features.insert({userId: aId, projId: projId, name: 'This is the feature', description: 'This is the feature description', tags: []});
    var step1 = Steps.insert({userId: aId, projId: projId, name: 'Given I have a iPhone 5'});
    var step2 = Steps.insert({userId: aId, projId: projId, name: 'When I click on the register button'});
    var step3 = Steps.insert({userId: aId, projId: projId, name: 'Then I should be registered'});

    var step4 = Steps.insert({userId: aId, projId: projId, name: 'Given I have a iPhone 6'});
    var step5 = Steps.insert({userId: aId, projId: projId, name: 'When I click on the unregister button'});
    var step6 = Steps.insert({userId: aId, projId: projId, name: 'Then I should be unregistered'});
    var scId = Scenarios.insert({userId: aId, projId: projId, featureId: fId, name: 'This is the first one', tags: [], steps: [step1, step2, step3], examples: []});
    var scId = Scenarios.insert({userId: aId, projId: projId, featureId: fId, name: 'This is the second one', tags: [], steps: [step4, step5, step6], examples: []});

    var fId = Features.insert({userId: aId, projId: projId, name: 'Addition', description: 'This is the also a feature description', tags: []});
    var step1 = Steps.insert({userId: aId, projId: projId, name: 'Given I have entered 50 on the calculator'});
    var step2 = Steps.insert({userId: aId, projId: projId, name: 'And I have enteed 70 on the calculator'});
    var step3 = Steps.insert({userId: aId, projId: projId, name: 'When I press add'});
    var step4 = Steps.insert({userId: aId, projId: projId, name: 'Then the results should be 120 on the screen'});

    var step5 = Steps.insert({userId: aId, projId: projId, name: 'Given I have entered 60 on the calculator'});
    var step6 = Steps.insert({userId: aId, projId: projId, name: 'And I have enteed 70 on the calculator'});
    var step7 = Steps.insert({userId: aId, projId: projId, name: 'When I press add'});
    var step8 = Steps.insert({userId: aId, projId: projId, name: 'Then the results should be 120 on the screen'});

    var scId = Scenarios.insert({userId: aId, projId: projId, featureId: fId, name: 'This is the first one', tags: [], steps: [step1, step2, step3, step4], examples: []});
    var scId = Scenarios.insert({userId: aId, projId: projId, featureId: fId, name: 'This is the second one', tags: [], steps: [step5, step6, step7, step8], examples: []});
  }
}
