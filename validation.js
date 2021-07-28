/**
 * Validates form
 */
const validateForm = () => {

    const form = document.getElementById("registrationForm");
    const emailElement = document.getElementById("email");
    const passElement = document.getElementById("psw");
    const repeatPassElement = document.getElementById("psw-repeat");

    event.preventDefault();

    // 1. verify email
    const isEmailSuccess = verifyEmail(emailElement);

    // 2. a. verify password is at least 6 character long
    // 2. b. verify password has at least a number and capital and symbol
    const isPasswordSuccess = verifyPassword(passElement);

    // 2. c. verify both password are same
    const isRepeatPasswordSuccess = verifyRepeatPassword(passElement,repeatPassElement);

    // Form successful message if all fields are successful
    // hides error after inputs are correct
    const isSuccess = isEmailSuccess && isPasswordSuccess && isRepeatPasswordSuccess;
    if(isEmailSuccess){
        document.getElementById("emailError").style.display="none";
    }
    else if(isPasswordSuccess) {
        document.getElementById("passError").style.display="none";
    }
    else if(isRepeatPasswordSuccess) {
        document.getElementById("repeatPassError").style.display="none";
    }
    else if(isSuccess){
        const formSuccessDiv = document.getElementById("formSuccessMsg");
        formSuccessDiv.innerText = "Your form has been successfully submitted!!";
    }
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
        let regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regexEmail.test(email);
    }

    let isError = false;
    let errorMessage = "";

    if (isEmailEmpty(email)) {                              // 1. check if empty
        isError = true;
        errorMessage = "Email can not be blank";
    }
    else if (!isEmailInCorrectFormat(email)) {            // 2. check if correct email format
        isError = true;
        errorMessage = "Email is not in correct format";
    }
    if (isError) {
        const emailErrorDiv = document.getElementById("emailError");
        emailErrorDiv.innerText = errorMessage;
    }
    return !isError;
}

/**
 * Verify password
 *
 * @param passElement
 */
function verifyPassword(passElement) {
    const password = passElement.value.trim()

    const isPasswordEmpty = (password) => password === "";

    const isPasswordStrengthCorrect = (password)=>{
        // check if password is of correct format using regex
        let regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        return regexPass.test(password);
    }

    let isError = false;
    let errorMessage = "";

    if (isPasswordEmpty(password)) {                                    // 1. Check if password is empty
        isError = true;
        errorMessage = "Password can not be blank"
    } else if (!isPasswordStrengthCorrect(password)) {                 //2. Check if password has max length and upper and lower character
        isError = true;
        errorMessage = "Password should be at least 8 characters long with one upper and one lower letter and one number"
    }
    if (isError) {
        const emailErrorDiv = document.getElementById("passError");
        emailErrorDiv.innerText = errorMessage;
    }
    return !isError;
}

/**
 * Verify repeat password
 *
 * @param passElement
 * @param repeatPassElement
 */
function verifyRepeatPassword(passElement,repeatPassElement) {
    const repeatPassword = repeatPassElement.value.trim();
    const password = passElement.value.trim();

    const isRepeatPasswordEmpty = (repeatPassword)=>{
        return repeatPassword ==="";
    }

    let isError = false;
    let errorMessage = "";

    if(isRepeatPasswordEmpty(repeatPassword)){                        // 1. Check if repeat password is empty
        isError = true;
        errorMessage = "Repeat Password can not be blank"
    }
    else if (repeatPassword!==password){                               //2. Check if repeat password is equal to password
        isError = true;
        errorMessage = "Repeat password is not same as password"
    }
    if (isError) {
        const emailErrorDiv = document.getElementById("repeatPassError");
        emailErrorDiv.innerText = errorMessage;
    }
    return !isError;
}

