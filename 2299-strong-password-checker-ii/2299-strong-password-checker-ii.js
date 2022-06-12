/**
 * @param {string} password
 * @return {boolean}
 */
var strongPasswordCheckerII = function (password) {

    // If less than 8;
    if (password.length < 8) return false;

    // Regex to check if a string
    // contains uppercase, lowercase
    // special character & numeric value
    var pattern = new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+!@#$%^&*()]).+$"
    );

    // Test it.
    if (!pattern.test(password)) {
        console.log('Hi')
        return false;
    }

    let passwordArray = password.split('');

    // Contain two of same characters
    for (let i = 0; i < passwordArray.length; i++) {
        if (passwordArray[i] === passwordArray[i + 1]) {
            console.log(passwordArray[i], passwordArray[i + 1]);
            return false;
        }
    }

    // Otherwise
    return true;
};