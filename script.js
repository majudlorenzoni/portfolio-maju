document.addEventListener('DOMContentLoaded', function() {
  const editor = document.getElementById('editor');
  const compraIngressos = document.getElementById('compraIngressos');
  const pet = document.getElementById('pet');
  const sistemaSolar = document.getElementById('sistemaSolar');
  const condicaoTempo = document.getElementById('condicaoTempo');
  const cursoReact = document.getElementById('cursoReact');
  const cursoIngles = document.getElementById('cursoIngles');
  const cursoAnimacao = document.getElementById('cursoAnimacao');
  const email = document.getElementById('email');
  const linkedin = document.getElementById('linkedin');
  const github = document.getElementById('github');
  const cursoGit = document.getElementById('cursoGit');
  const womanServicesAPI = document.getElementById('apiWomanServices');
  const spotifyApi = document.getElementById('spotify');
  let screenWidth = window.innerWidth;
  let screenHeight = window.innerHeight;

console.log("Largura da tela: " + screenWidth + "px");
console.log("Altura da tela: " + screenHeight + "px");

spotifyApi.onclick = function() {
  window.open('https://github.com/majudlorenzoni/monks-case?tab=readme-ov-file', '_blank');
};

editor.onclick = function() {
  window.open('https://github.com/majudlorenzoni/Computacao-Grafica', '_blank');
};

womanServicesAPI.onclick = function() {
  window.open('https://github.com/majudlorenzoni/woman-services-plataform', '_blank');
}

compraIngressos.onclick = function() {
  window.open('https://github.com/majudlorenzoni/compra_online_ingressos-BD', '_blank');
  };

  pet.onclick = function() {
    window.open('https://wp.ufpel.edu.br/petcomp/', '_blank');
  }
  
  sistemaSolar.onclick = function() {
    window.open('https://github.com/majudlorenzoni/solarSystem', '_blank');
  }

  condicaoTempo.onclick = function() {
    window.open('https://github.com/majudlorenzoni/cursoReact_ADA', '_blank');
  }
  
  cursoReact.onclick = function() {
    window.open('https://comunidade.ada.tech/cursos/b60dfd96-34d9-4880-b23e-7e3679eb5391', '_blank');
  } 
  
  cursoGit.onclick = function() {
    window.open('https://comunidade.ada.tech/cursos/37f4b5d2-dbab-4c45-ab61-aac1ba2c7d19', '_blank');
  }
  
  cursoIngles.onclick = function() {
    window.open('https://icl.com.br/curso/ingles-2-0/', '_blank');
  }
  
  cursoAnimacao.onclick = function() {
    window.open('https://mundi.ifsul.edu.br/portal/producao-de-animacao-2d.php', '_blank');
  }
  
  email.onclick = function() {
    window.open('mailto:juliamaria892@gmail.com', '_blank');
  }

  linkedin.onclick = function() {
    window.open('https://www.linkedin.com/in/maria-j%C3%BAlia-lorenzoni-b09489230/', '_blank');
  }
  
  github.onclick = function() {
    window.open('https://github.com/majudlorenzoni', '_blank');
  }
  
});