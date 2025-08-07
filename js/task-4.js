const registerForm = document.querySelector(".login-form");
const formMessage = document.querySelector(".form-message");

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const login = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();
    const userData = {
        email: login,
        password
    };

    if (!login || !password) {
        showMessage("You need to fill in all form fields!", "red");
        console.log("All form fields must be filled in");
        return; 
    } 

    console.log(userData);
    showMessage("");
    form.reset(); 
    
}

function showMessage(text, color = "black") {
        formMessage.textContent = text;
        formMessage.style.color = color;
    }



