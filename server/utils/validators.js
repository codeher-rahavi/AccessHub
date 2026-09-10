
// Restricts registration to specific institutional domains
const COLLEGE_EMAIL_REGEX =/^[a-zA-Z0-9]+\.([a-zA-Z]+)(\d{2})@bitsathy\.ac\.in$/;
// Requires: Min 8 characters, 1 uppercase, 1 lowercase, 1 number, 1 special character
const STRONG_PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const validateSignUp = (email, password) => {
    if (!COLLEGE_EMAIL_REGEX.test(email)) {
        return { valid: false, message: "Invalid domain. Must use a valid college email." };
    }
    if (!STRONG_PASSWORD_REGEX.test(password)) {
        return { valid: false, message: "Password must be at least 8 characters and include uppercase, lowercase, number, and special character." };
    }
    return { valid: true };
};

module.exports = { validateSignUp };