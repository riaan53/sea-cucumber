validateEmail = function (email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
};

trimInput = function(val) {
    return val.replace(/^\s*|\s*$/g, "");
};

isValidPassword = function(val) {
    if (val.length >= 6) {
        return true;
    } else {
        return false;
    }
};
