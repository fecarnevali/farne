// Exibe um alerta quando a página é carregada
window.onload = function() {
    alert("Bem-vindo à sua primeira página!");
};

// Seleciona o botão e adiciona um evento de clique
document.getElementById('changeTextButton').addEventListener('click', function() {
    // Altera o texto do parágrafo
    document.getElementById('description').innerText = "Texto alterado com sucesso!";
});