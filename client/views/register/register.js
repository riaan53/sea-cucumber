Template.register.events({
    'submit #register' : function(e, t) {
        e.preventDefault();
        var email = t.find('#email').value
        var password = t.find('#password').value;

        // Trim and validate the input
        email = trimInput(email).toLowerCase();
        if (!validateEmail(email)) {
            console.log('Not a valid email!');
        }

        if (!isValidPassword(password)) {
            console.log('Invalid password!');
        }

        if (validateEmail(email) && isValidPassword(password)) {
            Accounts.createUser({email: email, password : password}, function(err){
            if (err) {
                console.log('Unable to create user account'+err);
            } else {
                // Success. Account has been created and the user
                // has logged in successfully.
                console.log('User account created.');
                Router.go('projects');
            }

            });
        } else {
            console.log('Validatinos failed.');
        }
        return false;
    }
  });
