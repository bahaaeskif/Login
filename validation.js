// validation script here

let inputs = document.querySelectorAll("input");

const pattern = {
    telephone: /^\+963\d{9}$/,
    slug: /^[a-z\d-]{8,20}$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    username: /^[a-zA-Z\d_]{5,12}$/,
    email: /^(https?:\/\/)?(www\.)?(\w+)(\.(com|org|sa))$/gi
}

function validate(filed, regExp) {
    if (regExp.test(filed.value)) {
        filed.className = "valid";
    } else {
        filed.className = "invalid";
    }
}

inputs.forEach((items) => {
    items.addEventListener("keyup", (e) => {
        validate(e.target, pattern[e.target.getAttribute("name")]);
    })
})