//Definição de Variáveis
let spanNivel = document.getElementById('spanNivel');
let spanPontos = document.getElementById('spanPontos');
let spanPulos = document.getElementById('spanPulos');
let spanErros = document.getElementById('spanErros');
let spanMateriaEscolhida = document.getElementById('spanMateriaEscolhida');

let h3Pergunta = document.getElementById('h3Pergunta');

let labelResposta01 = document.getElementById('labelResposta01');
let labelResposta02 = document.getElementById('labelResposta02');
let labelResposta03 = document.getElementById('labelResposta03');
let labelResposta04 = document.getElementById('labelResposta04');

let buttonConfirmar = document.getElementById('buttonConfirmar');
let buttonPular = document.getElementById('buttonPular');
let buttonParar = document.getElementById('buttonParar');

let nivel = 'A';
let pontos = 0;
let pulos = 0;
let erros = 0;
let materiaEscolhida = sessionStorage.getItem("materia");
let respostaEscolhida;
let perguntas = [];
let perguntasFiltradas = [];
let index;

//Exemplo de Criação do Evento onClick do Botão por meio do JavaScript
//btnParar.addEventListener('click', () => parar());
//btnParar.onclick = () => parar();

spanMateriaEscolhida.innerText = materiaEscolhida == 'A' ? 'Anime' :
                                 materiaEscolhida == 'G' ? 'Gundam' :
                                 materiaEscolhida == 'T' ? 'Tokusatsu' :
                                 materiaEscolhida == 'F' ? 'Filmes e Games' :
                                 materiaEscolhida == 'D' ? 'Dance Music' :
                                 materiaEscolhida == 'H' ? 'HQ/Mangás/Literatura' :
                                 'Todos';
//https://github.com/Narutex216Bits/narutex216bits.github.io/blob/main/perguntas

fetch('https://quiz.em3soft.com.br/questao/questoes')
  .then(resposta => resposta.json())
  .then(dados => {
    perguntas = dados;
    sortear();  
  })
  .catch(error => {
    console.log('Errouuuu!!!: ', error);
  });

function sortear() {
    resetRespostaEscolhida();
    perguntasFiltradas = perguntas.filter(pergunta => {
      return pergunta.materia == materiaEscolhida &&
             pergunta.nivel == nivel &&
             pergunta.jaFoi == 'N';
    });

    index = Math.floor(Math.random() * perguntasFiltradas.length);

    h3Pergunta.innerText = perguntasFiltradas[index].pergunta;
    labelResposta01.innerText = perguntasFiltradas[index].resp1;
    labelResposta02.innerText = perguntasFiltradas[index].resp2;
    labelResposta03.innerText = perguntasFiltradas[index].resp3;
    labelResposta04.innerText = perguntasFiltradas[index].resp4;

    let pergunta = perguntas.find(p => p.pergunta == perguntasFiltradas[index].pergunta);
    pergunta.jaFoi = 'S';
}

function validarResposta() {
  obterRespostaEscolhida();

  if (respostaEscolhida == null) {
    alert('O zé burrão, você tem que escolher uma antes de confirmar!!!');
    return;
  }

  if (respostaEscolhida.value == perguntasFiltradas[index].certa) {
    alert('Até que enfim... Você Acertou!!!');
    pontos++;

    if (pontos == 20) {
      alert('Aleluia... VOCÊ GANHOU!!!');
      history.back();
      return;
    } else {
      nivel = pontos <= 4 ? 'A' :
              pontos <= 9 ? 'B' :
              pontos <= 14 ? 'C' :
              'D';
    }
  }
  else
  {
    let respostaCorreta;

    switch (perguntasFiltradas[index].certa) {
      case 1:
        respostaCorreta = perguntasFiltradas[index].resp1;        
        break;    
      case 2:
        respostaCorreta = perguntasFiltradas[index].resp2;        
        break;    
      case 3:
        respostaCorreta = perguntasFiltradas[index].resp3;        
        break;    
      default:
        respostaCorreta = perguntasFiltradas[index].resp4;        
        break;
    }

    alert(`Que Burro dá zero pra ele!!! \n\nResposta Correta: ${respostaCorreta}`);

    erros++;

    if (erros == 3)
    {
      alert('Fim de Jogo!!!');
      history.back();
      return;
    }
  }

  atualizarPlacar();
  sortear();
}

function atualizarPlacar() {
    spanNivel.innerText = `Nível: ${nivel}`;
    spanPontos.innerText = `Pontos: ${pontos}`;
    spanPulos.innerText = `Pulos: ${pulos}`;
    spanErros.innerText = `Erros: ${erros}`;
}

function parar() {
  alert('Que pena, você desistiu!!!');
  history.back();
}

function pular() {
  pulos++;
  if (pulos == 3) {
    buttonPular.disabled = true;
  }

  obterRespostaEscolhida();
  atualizarPlacar();
  sortear();
}

function obterRespostaEscolhida() {
  respostaEscolhida = document.querySelector('input[name="resposta"]:checked');
}

function resetRespostaEscolhida() {
  if (respostaEscolhida != null)
    respostaEscolhida.checked = false;
}

atualizarPlacar();