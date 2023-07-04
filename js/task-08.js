
const form = document.querySelector(".login-form");
form.addEventListener("submit", onSubmit);
function onSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("Please, всі поля повинні бути заповнені!");
  } 
  const obj = {};
  obj.Email = email.value;
  obj.password = password.value;
//   object.entries(`Login: ${email.value}, Password: ${password.value}`);
console.log(obj);
  event.currentTarget.reset();
};