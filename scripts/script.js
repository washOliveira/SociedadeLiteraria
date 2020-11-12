const input = document.getElementById('membro');

const membro = [
    {
        nome: 'Gustavo Rodrigues',
        apelido: 'Guto',
        niver: '20/09',
        senha: 'guto',
        img: 'imagens/guto.png'
    },
    {
        nome: 'Claudia Muriel',
        apelido: 'Muriel',
        niver: '08/09',
        senha: 'muriel',
        img: 'imagens/muriel.png'
    },
    {
        nome: 'Rayane Lima',
        apelido: 'Nany',
        niver: '00/00',
        senha: 'nany',
        img: 'imagens/nany.png'
    },
    {
        nome: 'Maíra',
        apelido: 'Maíra',
        niver: '00/00',
        senha: 'maira',
        img: 'imagens/maira.png'
    },
    {
        nome: 'Vanessa',
        apelido: 'Vanish',
        niver: '00/00',
        senha: 'vanish',
        img: 'imagens/vanish.png'
    },
    {
        nome: 'Convidado',
        apelido: 'Convidado',
        niver: '00/00',
        senha: 'convidado',
        img: 'imagens/convidado.png'
    }
]

function acesso(){
    const valorMembro = document.getElementById('membro').value.toLowerCase();
    for (var i = 0; i < membro.length; i++) {
        if (membro[i].senha === valorMembro) {

            var img = document.createElement("IMG");
            img.src = membro[i].img;
            document.getElementById('retratos').appendChild(img);

            return mostrarHome();
        }
    }
    alert("Membro não identificado");
}

function mostrarHome(){
    const acesso = document.getElementById('acesso');
    const home = document.getElementById('home');
    acesso.style.display = "none";
    home.style.display = "block";
}

function enter(event){
    if(event.key === "Enter"){
        acesso();
    }
}

input.addEventListener("keypress", enter);