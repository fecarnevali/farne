// Exibe um alerta quando a página é carregada
window.onload = function() {
    alert("Bem-vindo à Farne Projects!");
};

// Seleciona o botão e adiciona um evento de clique
document.getElementById('changeTextButton').addEventListener('click', function() {
    // Altera o texto do parágrafo
    document.getElementById('description').innerText = "Projetos de sucesso.";
});