const charRange = document.getElementById('charRange');
const charCount = document.getElementById('charCount');
const uppercaseCheckbox = document.getElementById('uppercase');
const lowercaseCheckbox = document.getElementById("lowercase");
const specialCharactersCheckbox = document.getElementById("specialCharacters");
const numbersCheckbox = document.getElementById("numbers");
const submitButton = document.getElementById("Submit");
const passwordDisplay = document.getElementById("Password");
const copyImage = document.getElementById("copy")

charRange.value = 0;
charCount.textContent = charRange.value;

submitButton.addEventListener('click', generatePassword);
charRange.addEventListener('input', updateCharCount);

copy.addEventListener('click',copyPassword)


function copyPassword(){
    const selectedText = document.getSelection();
    const range = document.createRange();
    range.selectNodeContents(passwordDisplay);
    selectedText.removeAllRanges();
    selectedText.addRange(range);

    // Execute o comando de cópia
    document.execCommand('copy');

    // Limpe a seleção
    selectedText.removeAllRanges();

    // Opcional: exiba uma mensagem ou realce visual para indicar que foi copiado

}

function generatePassword() {
    const length = charRange.value;
    const uppercase = uppercaseCheckbox.checked;
    const lowercase = lowercaseCheckbox.checked;
    const specialCharacters = specialCharactersCheckbox.checked;
    const numbers = numbersCheckbox.checked;

    const charSet = createCharSet(uppercase, lowercase, specialCharacters, numbers);
    const password = generateRandomPassword(charSet, length);

    // Exibir a senha gerada
    passwordDisplay.textContent = password !== "" ? password : "Por favor selecione uma das opções abaixo";
}

function createCharSet(uppercase, lowercase, specialCharacters, numbers) {
    let charSet = '';
    if (uppercase) charSet += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (lowercase) charSet += 'abcdefghijklmnopqrstuvwxyz';
    if (specialCharacters) charSet += '!@#$%^&*()_+[]{}|;:,.<>?';
    if (numbers) charSet += '0123456789';
    return charSet;
}

// Função para gerar uma senha aleatória com base no conjunto de caracteres e no comprimento

function generateRandomPassword(charSet, length) {
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charSet.length);
        password += charSet.charAt(randomIndex);
    }
    return password;
}

function updateCharCount() {
    
    charCount.textContent = charRange.value;
}
