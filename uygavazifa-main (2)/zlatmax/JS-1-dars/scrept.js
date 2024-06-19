let id = document.getElementById('id');

let ism = prompt("Ismingizni kiriting:");
while (ism.length === 0) {
    ism = prompt("Ismingizni kiriting:");
}

let yosh = +prompt("yoshingizni kiriting:");
while (yosh.length === 0) {
    yosh = prompt("Ismingizni kiriting: ");
}

id.innerHTML = `
    <p>${ism}</p>
    <p>${yosh}</p>
`