
function abrirMenu(){
    document.getElementById("nav-vertical").style.transform = "translateX(50%)";
}

function fecharMenu() {
    var menu = document.getElementById("nav-vertical");
    if (menu.style.display === "block") {
        menu.style.display = "none"; // Mostra o menu
    }
};

var userPiloto = "primeirousuario@gmail.com"
var senhaPiloto = "#MinhaSenha10"

function testarLogin(){
    var inpEmail = document.getElementById('user');
    var inpSenha = document.getElementById('senha');

    var email = inpEmail.value;
    var senha = inpSenha.value;

    var arroba = email.includes("@");
    var ponto = email.includes(".");

    if(!arroba || !ponto){
        alert("Email Inválido, um email válido precisa apresentar '.' e '@'!");
    }
    else{
        var tamSenha = senha.length;
        if(tamSenha < 6){
            alert("Senha Inválida, nossas senhas precisam ter pelo menos 6 caracteres");
        }
        else{
            if(senha != senhaPiloto || email != userPiloto){
                alert("Senha ou usuário incorreto");
            }
            else{
                var ret = window.confirm("Olá " + email + "! deseja logar com esta conta?");
                if(ret){
                    alert("Seja bem-vindo/a " + email + "!");
                }
                else{
                    alert("Seu login foi cancelado!");
                }
            }
        }
    }
}

function toggleLista(id) {
    var lista = document.getElementById('lista-' + id);
    lista.style.display = (lista.style.display === 'none') ? 'block' : 'none';
}

function obterExerciciosPorMembro(membro) {
    switch (membro) {
        case 'Ombro':
            return ['Desenvolvimento', 'Elevação lateral', 'Remada alta', 'Elevação frontal'];
        case 'Tríceps':
            return ['Tríceps testa', 'Tríceps na polia', 'Francês', 'Tríceps coice'];
        case 'Peito':
            return ['Supino reto com barra', 'Supino inclinado com halteres', 'Crossover', 'Crucifixo reto'];
        case 'Costas':
            return ['Pulley costas', 'Remada curvada', 'Remada baixa', 'Pulley com triângulo'];
        case 'Bíceps':
            return ['Rosca bíceps barra', 'Rosca bíceps martelo no banco inclinado', 'Bíceps corda', 'Rosca bíceps unilateral'];
        default:
            return [];
    }
}
function exibirExercicios(membro) {
    var exerciciosContainer = document.getElementById('exercicios-container');
    var exerciciosList = document.getElementById('exercicios-list');
    var membros = document.querySelectorAll('.lista-membros li');

    exerciciosList.innerHTML = '';

    var exercicios = obterExerciciosPorMembro(membro);
    exercicios.forEach(function (exercicio) {
        var listItem = document.createElement('li');
        listItem.textContent = exercicio;

        listItem.addEventListener('click', function() {
            exibirVideo(exercicio);
        });

        exerciciosList.appendChild(listItem);
    });

    exerciciosContainer.style.display = 'block';

    membros.forEach(function (m) {
        m.classList.remove('active');
    });

    for (var i = 0; i < membros.length; i++) {
        if (membros[i].textContent.toLowerCase() === membro.toLowerCase()) {
            membros[i].classList.add('active');
            break;
        }
    }
}

// Função para exibir o vídeo do YouTube em um popup
function exibirVideo(exercicio) {
    var videoId = obterVideoIdPorExercicio(exercicio);
    var url = 'https://www.youtube.com/embed/' + videoId + '?autoplay=1';

    var iframe = document.createElement('iframe');
    iframe.setAttribute('src', url);
    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('frameborder', '0');

    var popup = window.open('', '_blank', 'width=600,height=400,left=' + (window.innerWidth - 600) / 2 + ',top=' + (window.innerHeight - 400) / 2);
    popup.document.body.appendChild(iframe);
}

// Função para obter o ID do vídeo do YouTube com base no exercício 
function obterVideoIdPorExercicio(exercicio) {
    var videoIds = {
        'Desenvolvimento': '4pU-kV-OaVU?si=L3t9tQHhyTXi3nTw',
        'Elevação Lateral':'89K5H0Vvhnw?si=xLPhzRynqzwOQpT6',
        'Remada alta': 'Z6jSLKXZ0Ag?si=ta--1GOeoOWggVAg', 
        'Elevação frontal': '0K9NJHXYSm4?si=ZdIbUnuJLmT6oXAR',
        'Tríceps testa':'orMEOzQjiAs?si=boKcFUaX8Hcv3QSa', 
        'Tríceps na polia':'_KrR8248eLo?si=TWKwLXkKl7_NBOvM', 
        'Francês':'D2oQJTz-RCA?si=ffBobubNOapL283G', 
        'Tríceps coice':'MGlqvfSCWLQ?si=bwNw7suSgmB8iPpS',
        'Supino reto com barra': 'sqOw2Y6uDWQ?si=gkc3U6HhnHCU4L8h',
        'Supino inclinado com halteres': 'Z1rCZ0YHrP0?si=bFt-4o3AlR9OYmgO', 
        'Crossover': 'HNUji0rHFCs?si=9FUGONUyJ1__w329',
        'Crucifixo reto': 'dQi36EfA88c?si=B-AylkRYx3GbXmIw',
        'Pulley costas': 'v1rPzvJvwIE?si=Wup8jD9ZQvFUpDSp', 
        'Remada curvada': 'XruycmUNi1Y?si=BXNhLC46D26ARvC-', 
        'Remada baixa': 'C0-C0X7G8eQ?si=Nmi2rJ7yUp5FumsR', 
        'Pulley com triângulo': 'ej9Z_jMQpLY?si=b9WPIGsW40HsQr1n', 
        'Rosca bíceps barra': 'po8ibB0yY0Q?si=bTUgyHuNt-iX6JDz', 
        'Rosca bíceps martelo no banco inclinado': 'KnymofpyiIQ?si=qksvNDZZ83yVXS41', 
        'Bíceps corda': 'TXYeSl2QT50?si=SbE4StnCKyEIcIJe', 
        'Rosca bíceps unilateral': 'v15BcmivG8g?si=0eUOi5vD9tFq2TSy',
        'Stiff': 'Xgql23RkpBk?si=0-MP921OcnGp2yxO', 
        'Mesa flexora': 'OMKhQ2O11fc?si=GUy23EQQ_aR_glOw', 
        'Cadeira flexora': 'n8j1X_xByD4?si=mMvaN2iFlFqbZtbM',
        'Panturrilha em pé': 'GAn7R1U3EDw?si=NOUAqdeJLhAL2BwB',
        'Panturrilha na cadeira': 'gBIxBWBorB8?si=kytXbjn5NsyWJJsG',
        'Elevação pelvica': 'jqgDVIv581k?si=6DRWZInPRjBZxhUy',
        'Cadeira abdutora': 'yVZ0Vs7j6EM?si=qCKGpJ-sGKPnNIkk', 
        'Búlgaro': 'WyMsCylTcKM?si=CgLUUZ3cJNYHNtR1', 
        'Levantamento terra sumo': 'T3x53s0jEns?si=hMZKICShF4oP1jQq',
        'Agachamento livre': '4TG8JdU6NPU?si=6Aem15DMY-8BC1MB', 
        'Cadeira extensora': '1f1DjMr68hY?si=PEONYuYDQ6NNTSCW', 
        'Leg press 45': 'kyESFAj3W0E?si=j7uWZ6Y1FleFv76L', 
        'Leg horizontal': '1kjxuWNPBUc?si=_jyJ23SDLXCQtKY2', 
        'Reto': 'N5SL7rhM07c?si=_905x0GQXkogOd8P',
        'Infra': '8slFJ9J31lM?si=GScweWWVQ3d3053Y',
        'Bicicleta': 'SoB6Hn_PaM9U?si=l2r9DhGdvq-eBdYf',
        'Russian twist': '17Jl1ROBBF8?si=OaWQhqNUAloQIdTf',
        'Reto': 'N5SL7rhM07c?si=_905x0GQXkogOd8P',
        'Infra': '8slFJ9J31lM?si=GScweWWVQ3d3053Y',
        'Bicicleta': 'SoB6Hn_PaM9U?si=l2r9DhGdvq-eBdYf',
        'Russian twist': '17Jl1ROBBF8?si=OaWQhqNUAloQIdTf',
    };

    return videoIds[exercicio] || '';
}


function obterExerciciosPorMembroInferiores(membro) {
    switch (membro) {
        case 'Posterior de coxa':
            return ['Stiff', 'Mesa flexora', 'Cadeira flexora'];
        case 'Panturrilha':
            return ['Panturilha em pé', 'Panturrilha na cadeira'];
        case 'Glúteos':
            return ['Elevação pelvica', 'Cadeira abdutora', 'Búlgaro', 'Levantamento terra sumo'];
        case 'Quadríceps':
            return['Agachamento livre', 'Cadeira extensora', 'Leg press 45', 'Leg horizontal']
        default:
            return [];
    }
}

// Função para exibir exercícios de membros superiores
function exibirExerciciosSuperiores(membro) {
    var exerciciosContainer = document.getElementById('exercicios-container');
    var exerciciosList = document.getElementById('exercicios-list');
    var membros = document.querySelectorAll('.lista-membros li');

    exerciciosList.innerHTML = '';

    var exercicios = obterExerciciosPorMembro(membro);
    exercicios.forEach(function (exercicio) {
        var listItem = document.createElement('li');
        listItem.textContent = exercicio;

        listItem.addEventListener('click', function() {
            exibirVideo(exercicio);
        });

        exerciciosList.appendChild(listItem);
    });

    exerciciosContainer.style.display = 'block';

    membros.forEach(function (m) {
        m.classList.remove('active');
    });

    for (var i = 0; i < membros.length; i++) {
        if (membros[i].textContent.toLowerCase() === membro.toLowerCase()) {
            membros[i].classList.add('active');
            break;
        }
    }
}

// Função para exibir exercícios de membros inferiores
function exibirExerciciosInferiores(membro) {
    var exerciciosContainer = document.getElementById('exercicios-container-inferiores');
    var exerciciosList = document.getElementById('exercicios-list-inferiores');
    var membros = document.querySelectorAll('.lista-membros li');

    exerciciosList.innerHTML = '';

    var exercicios = obterExerciciosPorMembroInferiores(membro);
    exercicios.forEach(function (exercicio) {
        var listItem = document.createElement('li');
        listItem.textContent = exercicio;

        listItem.addEventListener('click', function() {
            exibirVideo(exercicio);
        });

        exerciciosList.appendChild(listItem);
    });

    exerciciosContainer.style.display = 'block';

    membros.forEach(function (m) {
        m.classList.remove('active');
    });

    for (var i = 0; i < membros.length; i++) {
        if (membros[i].textContent.toLowerCase() === membro.toLowerCase()) {
            membros[i].classList.add('active');
            break;
        }
    }
}

// Função para exibir exercícios de abdominais
function exibirAbdominais() {
    var exerciciosContainer = document.getElementById('exercicios-container-inferiores');
    var exerciciosList = document.getElementById('exercicios-list-inferiores');
    var membros = document.querySelectorAll('.lista-membros li');

    exerciciosList.innerHTML = '';

    var exercicios = obterExerciciosPorMembroInferiores(('Reto', 'Infra', 'Bicicleta', 'Russian twist'));  
    exercicios.forEach(function (exercicio) {
        var listItem = document.createElement('li');
        listItem.textContent = exercicio;

        listItem.addEventListener('click', function() {
            exibirVideo(exercicio);
        });

        exerciciosList.appendChild(listItem);
    });

    exerciciosContainer.style.display = 'block';

    membros.forEach(function (m) {
        m.classList.remove('active');
    });

    for (var i = 0; i < membros.length; i++) {
        if (membros[i].textContent.toLowerCase() === ('Reto', 'Infra', 'Bicicleta', 'Russian twist').toLowerCase()) { 
            membros[i].classList.add('active');
            break;
        }
    }
}

function calcImc(){
    alert("oie")
    var inpAlt = document.getElementById('inpAlt');
    var inpPeso = document.getElementById('inpKg');

    var altura = parseFloat(inpAlt.value);
    var peso = parseFloat(inpPeso.value);

    var IMC = peso/(altura*altura);

    var lblRes = document.getElementById('resultImc');
    lblRes.value = "Seu IMC é: " + IMC
}

function calcGastoCal(){

}


