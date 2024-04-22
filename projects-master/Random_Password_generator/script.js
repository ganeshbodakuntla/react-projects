const passwordBox = document.querySelector("#password");
const length = 8;
const upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM";
const lowerCase = "qwertyuiopasdfghjklzxcvbnm";
const numbers = "1234567890";
const symbols = "~!@#$%^&*()";
const AllChars = upperCase + lowerCase + numbers + symbols;

function createRandomPassword() {
    let password = ""
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];
    while (length > password.length) {
        password += AllChars[Math.floor(Math.random() * AllChars.length)];
        
    }
    passwordBox.value=password
}
function copyPassword() {
    passwordBox.select();
    document.execCommand("copy")
}
