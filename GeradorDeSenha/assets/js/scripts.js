// Elements
const generatePasswordButton = document.querySelector("#generate-password");
const generatedPasswordElement = document.querySelector("#generated-password");

// Functions
const getLetterLowerCase = () => String.fromCharCode(Math.floor(Math.random() * 26) + 97);
const getLetterUpperCase = () => String.fromCharCode(Math.floor(Math.random() * 26) + 65);
const getNumber = () => Math.floor(Math.random() * 10).toString();
const getSymbol = () => {
    const symbols = "(){}[]=<>/,.!@#$%&*+-";
    return symbols[Math.floor(Math.random() * symbols.length)];
};

const generatePassword = (getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol) => {
    let password = "";
    const passwordLength = 20;
    const generators = [getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol];

    for(i = 0; i < passwordLength; i = i + 4){
        generators.forEach(() => {
            const randomValue = generators[Math.floor(Math.random() * generators.length)]();
            password += randomValue;
        });
    }

    password.slice(0, password.length);

    generatedPasswordElement.style.display = "block";
    generatedPasswordElement.querySelector("h4").innerText = password;
}

// Events
generatePasswordButton.addEventListener("click", () => {
    generatePassword(getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol);
})
