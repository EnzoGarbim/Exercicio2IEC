// src/app.js

function add(a, b) {
    return a + b;
}

function setupButton() {
    const button = document.getElementById("btn");
    const message = document.getElementById("message");
    
    if (button && message) {
        button.addEventListener("click", function() {
            message.textContent = "Você clicou no botão!";
        });
    }
}

// Chame a função setupButton quando o DOM estiver carregado
document.addEventListener("DOMContentLoaded", function() {
    setupButton();
});

module.exports = { add, setupButton };
