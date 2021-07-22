

const validateForm = () => {

    const form = document.getElementById("form");
    const email = document.getElementById("email");
    const password = document.getElementById("pass");
    const repeatPassword = document.getElementById("repeatPass");

    form.addEventListener("submit", (e)=>({
        e.preventDefault();

        checkInput();
    });


    function checkInput(){

    }
}



