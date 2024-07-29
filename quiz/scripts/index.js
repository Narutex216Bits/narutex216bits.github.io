function definirMateria(materiaEscolhida) {
    sessionStorage.setItem('materia', materiaEscolhida);
    window.location.href = '/pages/pergunta.html'
}

function definirMateriaComTagLink(materiaEscolhida) {
    sessionStorage.setItem('materia', materiaEscolhida);
}