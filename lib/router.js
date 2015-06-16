Router.configure({
  layoutTemplate: 'layout'
});

var IR_BeforeHooks = {
  loginRequired: function() {
    if (!Meteor.userId()) {
      this.render('login');
    } else {
      if (this.params.projId) {
        console.log('this.params.projId: '+this.params.projId)
        Session.set('curProjectId',this.params.projId);
      }
      this.next();
    }
  }
};

Router.onBeforeAction(IR_BeforeHooks.loginRequired, {
    only: ['projects', 'project', 'settings', 'addTest', 'addProject']
});



Router.map(function() {
    this.route('landing', {
      path: '/',
      template: 'landing',
      yieldTemplates: {
        'navLanding': {to: 'menu'}
      }
    });

    this.route('projects', {
      path: '/app/projects',
      template: 'projects',
      yieldTemplates: {
        'navApp': {to: 'menu'}
      },
      waitOn: function () {
        return Meteor.subscribe('projects');
      },
    });

    this.route('project', {
      path: '/app/projects/:projId?',
      template: 'project',
      yieldTemplates: {
        'navProject': {to: 'menu'},
        'rightMenu': {to: 'right'}
      },
      waitOn: function () {
        return Meteor.subscribe('projectData', this.params.projId);
      }
    });

    this.route('addTest', {
      path: '/app/addtest',
      template: 'addTest',
      yieldTemplates: {
        'navProject': {to: 'menu'},
        'rightMenu': {to: 'right'}
      },
      waitOn: function () {
        return Meteor.subscribe('projectData', this.params.projId);
      }
    });

    this.route('addProject', {
      path: '/app/addproject',
      template: 'addProject',
      yieldTemplates: {
        'navApp': {to: 'menu'}
      }
    });

    this.route('login', {
      path: '/login',
      template: 'login',
      yieldTemplates: {
        'navLanding': {to: 'menu'}
      }
    });

    this.route('register', {
      path: '/register',
      template: 'register',
      yieldTemplates: {
        'navLanding': {to: 'menu'}
      }
    });

    this.route('settings', {
      path: '/app/settings',
      template: 'settings',
      yieldTemplates: {
        'navApp': {to: 'menu'}
      }
    });

})
