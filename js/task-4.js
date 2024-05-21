const inputForm = document.querySelector(".login-form");

inputForm.addEventListener("submit", (event) => {
 event.preventDefault();

 const currentForm = event.target;
 const password = currentForm.elements.password.trim();
 const email = currentForm.elements.email.trim();

 const user = {};

 if (email === "" || password === "") {
    return alert('All form fields must be filled in');
 }

 user.email = email;
 user.password = password;

 console.log(user);

 currentForm.reset();
});


