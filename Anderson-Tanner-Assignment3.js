function isStrongPassword(password) {
    // Check if password is at least 8 characters
    if (password.length < 8) {
        return "No good. Password must be at least 8 characters long";
    }

    // Check if password contains "password" or "1234"
    if (password.indexOf("password") !== -1) {
        return "No good. Password cannot contain the word 'password'";
    }

    if (password.indexOf("1234") !== -1) {
        return "No good. Password cannot contain the sequence '1234'";
    }

    // Check if password contains at least one digit
    for (let i = 0; i < password.length; i++) {
        let charCode = password.charCodeAt(i);

        if (charCode >= 48 && charCode <= 57) {
            return "Good password!";
        }
    }

    // No digit was found
    return "No good. Password must contain at least one number";
}

console.log(isStrongPassword("qwerty1"));
console.log(isStrongPassword("qwertypassword1"));
console.log(isStrongPassword("qwertyABC"));
console.log(isStrongPassword("qwerty123"));