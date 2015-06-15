Template.login.events({
    'submit #login' : function(e, t){
        e.preventDefault();
        // retrieve the input field values
        var email = t.find('#email').value
        var password = t.find('#password').value;

        // Trim and validate the input
        email = trimInput(email).toLowerCase();
        if (!validateEmail(email)) {
            console.log('Not a valid email!');
        }

        if (validateEmail(email)) {
            Meteor.loginWithPassword(email, password, function(err){
                if (err) {
                    console.log('Login error: '+err);
                } else {
                    console.log('Login successful.');
                    Router.go('projects');
                }
            });
        } else {
            console.log('Invalid email');
        }
        return false;
    }
});
