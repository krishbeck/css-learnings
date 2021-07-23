/**
 * Validates form
 */
const validateForm = () => {
    const form = document.getElementById("registrationForm");
    const emailElement = document.getElementById("email");
    const password = document.getElementById("psw");
    const repeatPassword = document.getElementById("psw-repeat");

    event.preventDefault();

    // 1. verify email
    verifyEmail(emailElement);

    // TODO :: 2. verify password
    // 2. a. verify password is at least 6 character long
    // 2. b. verify password has at least a number and capital and symbol
    // 2. c. verify both password are same

    // TODO :: 3. prevent default, if error

    // TODO :: 4. success message, if inputs are okay
}

/**
 * Verifies email
 *
 * @param emailElement email HTML element
 */
function verifyEmail(emailElement) {
    const email = emailElement.value.trim();

    const isEmailEmpty = (email) => {
        return email === "";
    }

    const isEmailInCorrectFormat = (email) => {
        // check if email is incorrect format using regex
        return false; // TODO :: add logic
    }

    let isError = false;
    let errorMessage = "";

    if (isEmailEmpty(email)) {                              // 1. check if empty
        isError = true;
        errorMessage = "Email can not be blank";
    } else if (!isEmailInCorrectFormat(email)) {            // 2. check if correct email format
        isError = true;
        errorMessage = "Email is not in correct format";
    }

    if (isError) {
        const emailErrorDiv = document.getElementById("emailError");
        emailErrorDiv.innerText = errorMessage;
    }
}

