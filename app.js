const usuario = document.querySelector('#msgUser')
let textoUsuario = usuario.value
const bot = document.querySelector('#msgBot')
let textoBot = bot.value
const enviar = document.querySelector('#botaoEnviar')
const condicaoAtual = document.querySelector('#controladorChat')
let condicao = condicaoAtual.value
let i = 0
const digiteAqui = document.querySelector('#textoMsgUser')
const rolarTela = document.querySelector('#pChat');
rolarTela.scrollTop = rolarTela.scrollHeight;


enviar.addEventListener('click', function(){
    textoUsuario = usuario.value
    textoBot = bot.value
    if (textoUsuario !== '' && condicao === 'naoIniciado'){
        document.querySelector('#controladorChat').value = 'iniciado'
        condicao = condicaoAtual.value
        let textarea = document.createElement('textarea');
        textarea.style.width = '190px'
        textarea.style.resize = 'none'
        textarea.style.borderRadius = '20px';
        textarea.style.border = '2px solid #ccc';
        textarea.style.padding = '10px';
        textarea.style.boxShadow = '2px 2px 5px rgba(0, 0, 0, 0.3)';
        textarea.style.position = 'relative'
        textarea.style.left = '20vw'
        textarea.className = 'autosize'
        textarea.value = textoUsuario
        let imagem = document.createElement("img")
        imagem.src = "IMAGENS/img_usuario.png"
        imagem.style.width = '35px'
        imagem.style.height = 'auto'
        imagem.style.position = 'relative'
        imagem.style.left = '17vw'
        imagem.style.top = '4.6vh'
        textarea.setAttribute('rows', '1')
        let chatPrincipal = document.querySelector('.chatPrincipal');
        chatPrincipal.appendChild(imagem)
        chatPrincipal.appendChild(textarea);
        autosize(textarea);
        document.querySelector('#msgUser').value = ''

    }
    if (condicao === 'iniciado' && i === 0){
        document.querySelector('#msgBot').value = 'Olá, como posso ajudar?\n1: Menu de duvidas\n2: Relatar um problema\n3: Falar com um atendente'
        document.querySelector('#controladorChat').value = 'msg1'
        condicao = condicaoAtual.value
        textoBot = bot.value
        textarea = document.createElement('textarea');
        textarea.style.width = '190px'
        textarea.style.resize = 'none'
        textarea.style.borderRadius = '20px';
        textarea.style.border = '2px solid #ccc';
        textarea.style.padding = '10px';
        textarea.style.boxShadow = '2px 2px 5px rgba(0, 0, 0, 0.3)';
        textarea.style.position = 'relative'
        textarea.style.left = '60vw'
        textarea.className = 'autosize'
        textarea.value = textoBot
        imagem = document.createElement("img")
        imagem.src = "IMAGENS/WhatsApp Image 2023-04-07 at 21.18.16.jpeg"
        imagem.style.borderRadius = '50%'
        imagem.style.width = '40px'
        imagem.style.height = 'auto'
        imagem.style.position = 'relative'
        imagem.style.left = '73vw'
        imagem.style.top = '5.5vh'
        chatPrincipal = document.querySelector('.chatPrincipal');
        chatPrincipal.appendChild(imagem)
        chatPrincipal.appendChild(textarea);
        autosize(textarea);
    }
    if (condicao === 'msg1' && i === 1){
        textoUsuario = Number(usuario.value)
        textarea = document.createElement('textarea');
        textarea.style.width = '190px'
        textarea.style.resize = 'none'
        textarea.style.borderRadius = '20px';
        textarea.style.border = '2px solid #ccc';
        textarea.style.padding = '10px';
        textarea.style.boxShadow = '2px 2px 5px rgba(0, 0, 0, 0.3)';
        textarea.style.position = 'relative'
        textarea.style.left = '20vw'
        textarea.className = 'autosize'
        textarea.value = textoUsuario
        imagem = document.createElement("img")
        imagem.src = "IMAGENS/img_usuario.png"
        imagem.style.width = '35px'
        imagem.style.height = 'auto'
        imagem.style.position = 'relative'
        imagem.style.left = '17vw'
        imagem.style.top = '4.6vh'
        textarea.setAttribute('rows', '1')
        chatPrincipal = document.querySelector('.chatPrincipal');
        chatPrincipal.appendChild(imagem)
        chatPrincipal.appendChild(textarea);
        autosize(textarea);
        switch (textoUsuario){
            case 1:
                document.querySelector('#msgBot').value = 'Menu:\n1: Quais são os requisitos para entrar no time?\n2: Como funciona a troca de divulgação do time?\n3: Quais são os principais jogos do time?\n4: O time Jaguar participa de campeonatos?'
                document.querySelector('#controladorChat').value = 'menuDuvidas'
                condicao = condicaoAtual.value
                textoBot = bot.value
                textarea = document.createElement('textarea');
                textarea.style.width = '190px'
                textarea.style.resize = 'none'
                textarea.style.borderRadius = '20px';
                textarea.style.border = '2px solid #ccc';
                textarea.style.padding = '10px';
                textarea.style.boxShadow = '2px 2px 5px rgba(0, 0, 0, 0.3)';
                textarea.style.position = 'relative'
                textarea.style.left = '60vw'
                textarea.className = 'autosize'
                textarea.value = textoBot
                imagem = document.createElement("img")
                imagem.src = "IMAGENS/WhatsApp Image 2023-04-07 at 21.18.16.jpeg"
                imagem.style.borderRadius = '50%'
                imagem.style.width = '40px'
                imagem.style.height = 'auto'
                imagem.style.position = 'relative'
                imagem.style.left = '73vw'
                imagem.style.top = '5.5vh'
                chatPrincipal = document.querySelector('.chatPrincipal');
                chatPrincipal.appendChild(imagem)
                chatPrincipal.appendChild(textarea);
                autosize(textarea);
                break;
            case 2:
                document.querySelector('#msgBot').value = 'Relate seu problema!'
                document.querySelector('#controladorChat').value = 'menuErro'
                condicao = condicaoAtual.value
                textoBot = bot.value
                textarea = document.createElement('textarea');
                textarea.style.width = '190px'
                textarea.style.resize = 'none'
                textarea.style.borderRadius = '20px';
                textarea.style.border = '2px solid #ccc';
                textarea.style.padding = '10px';
                textarea.style.boxShadow = '2px 2px 5px rgba(0, 0, 0, 0.3)';
                textarea.style.position = 'relative'
                textarea.style.left = '60vw'
                textarea.className = 'autosize'
                textarea.value = textoBot
                imagem = document.createElement("img")
                imagem.src = "IMAGENS/WhatsApp Image 2023-04-07 at 21.18.16.jpeg"
                imagem.style.borderRadius = '50%'
                imagem.style.width = '40px'
                imagem.style.height = 'auto'
                imagem.style.position = 'relative'
                imagem.style.left = '73vw'
                imagem.style.top = '5.5vh'
                chatPrincipal = document.querySelector('.chatPrincipal');
                chatPrincipal.appendChild(imagem)
                chatPrincipal.appendChild(textarea);
                autosize(textarea);
                break;
            case 3:
                document.querySelector('#msgBot').value = 'Você pode entrar em contato com o número:\n5522998192570'
                document.querySelector('#controladorChat').value = 'encerrado'
                condicao = condicaoAtual.value
                textoBot = bot.value
                textarea = document.createElement('textarea');
                textarea.style.width = '190px'
                textarea.style.resize = 'none'
                textarea.style.borderRadius = '20px';
                textarea.style.border = '2px solid #ccc';
                textarea.style.padding = '10px';
                textarea.style.boxShadow = '2px 2px 5px rgba(0, 0, 0, 0.3)';
                textarea.style.position = 'relative'
                textarea.style.left = '60vw'
                textarea.className = 'autosize'
                textarea.value = textoBot
                imagem = document.createElement("img")
                imagem.src = "IMAGENS/WhatsApp Image 2023-04-07 at 21.18.16.jpeg"
                imagem.style.borderRadius = '50%'
                imagem.style.width = '40px'
                imagem.style.height = 'auto'
                imagem.style.position = 'relative'
                imagem.style.left = '73vw'
                imagem.style.top = '5.5vh'
                chatPrincipal = document.querySelector('.chatPrincipal');
                chatPrincipal.appendChild(imagem)
                chatPrincipal.appendChild(textarea);
                autosize(textarea);
                break;
            default:
                document.querySelector('#msgBot').value = 'Opção invalida, chat encerrado'
                document.querySelector('#controladorChat').value = 'encerrado'
                condicao = condicaoAtual.value
                textoBot = bot.value
                textarea = document.createElement('textarea');
                textarea.style.width = '190px'
                textarea.style.resize = 'none'
                textarea.style.borderRadius = '20px';
                textarea.style.border = '2px solid #ccc';
                textarea.style.padding = '10px';
                textarea.style.boxShadow = '2px 2px 5px rgba(0, 0, 0, 0.3)';
                textarea.style.position = 'relative'
                textarea.style.left = '60vw'
                textarea.className = 'autosize'
                textarea.value = textoBot
                imagem = document.createElement("img")
                imagem.src = "IMAGENS/WhatsApp Image 2023-04-07 at 21.18.16.jpeg"
                imagem.style.borderRadius = '50%'
                imagem.style.width = '40px'
                imagem.style.height = 'auto'
                imagem.style.position = 'relative'
                imagem.style.left = '73vw'
                imagem.style.top = '5.5vh'
                chatPrincipal = document.querySelector('.chatPrincipal');
                chatPrincipal.appendChild(imagem)
                chatPrincipal.appendChild(textarea);
                autosize(textarea);
                break;
        }
        document.querySelector('#msgUser').value = ''
    }
    if (condicao === 'menuDuvidas' && i === 2){
        textoUsuario = Number(usuario.value)
        textarea = document.createElement('textarea');
        textarea.style.width = '190px'
        textarea.style.resize = 'none'
        textarea.style.borderRadius = '20px';
        textarea.style.border = '2px solid #ccc';
        textarea.style.padding = '10px';
        textarea.style.boxShadow = '2px 2px 5px rgba(0, 0, 0, 0.3)';
        textarea.style.position = 'relative'
        textarea.style.left = '20vw'
        textarea.className = 'autosize'
        textarea.value = textoUsuario
        imagem = document.createElement("img")
        imagem.src = "IMAGENS/img_usuario.png"
        imagem.style.width = '35px'
        imagem.style.height = 'auto'
        imagem.style.position = 'relative'
        imagem.style.left = '17vw'
        imagem.style.top = '4.6vh'
        textarea.setAttribute('rows', '1')
        chatPrincipal = document.querySelector('.chatPrincipal');
        chatPrincipal.appendChild(imagem)
        chatPrincipal.appendChild(textarea);
        autosize(textarea);
        switch (textoUsuario) {
        case 1:
            document.querySelector('#msgBot').value = 'Para entrar no time você precisa ser criador de conteúdo gamer e postar com frequência de pelo menos 1 vez ao mês!'
            document.querySelector('#controladorChat').value = 'encerrado'
            condicao = condicaoAtual.value
            textoBot = bot.value
            textarea = document.createElement('textarea');
            textarea.style.width = '190px'
            textarea.style.resize = 'none'
            textarea.style.borderRadius = '20px';
            textarea.style.border = '2px solid #ccc';
            textarea.style.padding = '10px';
            textarea.style.boxShadow = '2px 2px 5px rgba(0, 0, 0, 0.3)';
            textarea.style.position = 'relative'
            textarea.style.left = '60vw'
            textarea.className = 'autosize'
            textarea.value = textoBot
            imagem = document.createElement("img")
            imagem.src = "IMAGENS/WhatsApp Image 2023-04-07 at 21.18.16.jpeg"
            imagem.style.borderRadius = '50%'
            imagem.style.width = '40px'
            imagem.style.height = 'auto'
            imagem.style.position = 'relative'
            imagem.style.left = '73vw'
            imagem.style.top = '5.5vh'
            chatPrincipal = document.querySelector('.chatPrincipal');
            chatPrincipal.appendChild(imagem)
            chatPrincipal.appendChild(textarea);
            autosize(textarea);
            break;
        case 2: 
            document.querySelector('#msgBot').value = 'A troca de divulgação do time é feita de forma 100% reciproca, os membros podem gravar videos juntos e trocarem divulgação da forma onde ambos acham justo!'
            document.querySelector('#controladorChat').value = 'encerrado'
            condicao = condicaoAtual.value
            textoBot = bot.value
            textarea = document.createElement('textarea');
            textarea.style.width = '190px'
            textarea.style.resize = 'none'
            textarea.style.borderRadius = '20px';
            textarea.style.border = '2px solid #ccc';
            textarea.style.padding = '10px';
            textarea.style.boxShadow = '2px 2px 5px rgba(0, 0, 0, 0.3)';
            textarea.style.position = 'relative'
            textarea.style.left = '60vw'
            textarea.className = 'autosize'
            textarea.value = textoBot
            imagem = document.createElement("img")
            imagem.src = "IMAGENS/WhatsApp Image 2023-04-07 at 21.18.16.jpeg"
            imagem.style.borderRadius = '50%'
            imagem.style.width = '40px'
            imagem.style.height = 'auto'
            imagem.style.position = 'relative'
            imagem.style.left = '73vw'
            imagem.style.top = '5.5vh'
            chatPrincipal = document.querySelector('.chatPrincipal');
            chatPrincipal.appendChild(imagem)
            chatPrincipal.appendChild(textarea);
            autosize(textarea);
            break;
        case 3: 
            document.querySelector('#msgBot').value = 'O time Jaguar aceita criadores de todos os jogos, porém os principais são Fortnite e FIFA!'
            document.querySelector('#controladorChat').value = 'encerrado'
            condicao = condicaoAtual.value
            textoBot = bot.value
            textarea = document.createElement('textarea');
            textarea.style.width = '190px'
            textarea.style.resize = 'none'
            textarea.style.borderRadius = '20px';
            textarea.style.border = '2px solid #ccc';
            textarea.style.padding = '10px';
            textarea.style.boxShadow = '2px 2px 5px rgba(0, 0, 0, 0.3)';
            textarea.style.position = 'relative'
            textarea.style.left = '60vw'
            textarea.className = 'autosize'
            textarea.value = textoBot
            imagem = document.createElement("img")
            imagem.src = "IMAGENS/WhatsApp Image 2023-04-07 at 21.18.16.jpeg"
            imagem.style.borderRadius = '50%'
            imagem.style.width = '40px'
            imagem.style.height = 'auto'
            imagem.style.position = 'relative'
            imagem.style.left = '73vw'
            imagem.style.top = '5.5vh'
            chatPrincipal = document.querySelector('.chatPrincipal');
            chatPrincipal.appendChild(imagem)
            chatPrincipal.appendChild(textarea);
            autosize(textarea);
            break;
        case 4: 
            document.querySelector('#msgBot').value = 'Sim, o time Jaguar participa e cria camps, mesmo não sendo o foco principal!'
            document.querySelector('#controladorChat').value = 'encerrado'
            condicao = condicaoAtual.value
            textoBot = bot.value
            textarea = document.createElement('textarea');
            textarea.style.width = '190px'
            textarea.style.resize = 'none'
            textarea.style.borderRadius = '20px';
            textarea.style.border = '2px solid #ccc';
            textarea.style.padding = '10px';
            textarea.style.boxShadow = '2px 2px 5px rgba(0, 0, 0, 0.3)';
            textarea.style.position = 'relative'
            textarea.style.left = '60vw'
            textarea.className = 'autosize'
            textarea.value = textoBot
            imagem = document.createElement("img")
            imagem.src = "IMAGENS/WhatsApp Image 2023-04-07 at 21.18.16.jpeg"
            imagem.style.borderRadius = '50%'
            imagem.style.width = '40px'
            imagem.style.height = 'auto'
            imagem.style.position = 'relative'
            imagem.style.left = '73vw'
            imagem.style.top = '5.5vh'
            chatPrincipal = document.querySelector('.chatPrincipal');
            chatPrincipal.appendChild(imagem)
            chatPrincipal.appendChild(textarea);
            autosize(textarea);
            break;
        default:
            document.querySelector('#msgBot').value = 'Opção invalida, chat encerrado'
            document.querySelector('#controladorChat').value = 'encerrado'
            condicao = condicaoAtual.value
            textoBot = bot.value
            textarea = document.createElement('textarea');
            textarea.style.width = '190px'
            textarea.style.resize = 'none'
            textarea.style.borderRadius = '20px';
            textarea.style.border = '2px solid #ccc';
            textarea.style.padding = '10px';
            textarea.style.boxShadow = '2px 2px 5px rgba(0, 0, 0, 0.3)';
            textarea.style.position = 'relative'
            textarea.style.left = '60vw'
            textarea.className = 'autosize'
            textarea.value = textoBot
            imagem = document.createElement("img")
            imagem.src = "IMAGENS/WhatsApp Image 2023-04-07 at 21.18.16.jpeg"
            imagem.style.borderRadius = '50%'
            imagem.style.width = '40px'
            imagem.style.height = 'auto'
            imagem.style.position = 'relative'
            imagem.style.left = '73vw'
            imagem.style.top = '5.5vh'
            chatPrincipal = document.querySelector('.chatPrincipal');
            chatPrincipal.appendChild(imagem)
            chatPrincipal.appendChild(textarea);
            autosize(textarea);
            break;
        }
        document.querySelector('#msgUser').value = ''

    }
    if (condicao === 'menuErro' && i === 2){
        textoUsuario = usuario.value
        textarea = document.createElement('textarea');
        textarea.style.width = '190px'
        textarea.style.resize = 'none'
        textarea.style.borderRadius = '20px';
        textarea.style.border = '2px solid #ccc';
        textarea.style.padding = '10px';
        textarea.style.boxShadow = '2px 2px 5px rgba(0, 0, 0, 0.3)';
        textarea.style.position = 'relative'
        textarea.style.left = '20vw'
        textarea.className = 'autosize'
        textarea.value = textoUsuario
        imagem = document.createElement("img")
        imagem.src = "IMAGENS/img_usuario.png"
        imagem.style.width = '35px'
        imagem.style.height = 'auto'
        imagem.style.position = 'relative'
        imagem.style.left = '17vw'
        imagem.style.top = '4.6vh'
        textarea.setAttribute('rows', '1')
        let chatPrincipal = document.querySelector('.chatPrincipal');
        chatPrincipal.appendChild(imagem)
        chatPrincipal.appendChild(textarea);
        autosize(textarea);
        document.querySelector('#msgUser').value = ''
        document.querySelector('#msgBot').value = 'Problema relatado!'
        document.querySelector('#controladorChat').value = 'encerrado'
        condicao = condicaoAtual.value
        textoBot = bot.value
        textarea = document.createElement('textarea');
        textarea.style.width = '190px'
        textarea.style.resize = 'none'
        textarea.style.borderRadius = '20px';
        textarea.style.border = '2px solid #ccc';
        textarea.style.padding = '10px';
        textarea.style.boxShadow = '2px 2px 5px rgba(0, 0, 0, 0.3)';
        textarea.style.position = 'relative'
        textarea.style.left = '60vw'
        textarea.className = 'autosize'
        textarea.value = textoBot
        imagem = document.createElement("img")
        imagem.src = "IMAGENS/WhatsApp Image 2023-04-07 at 21.18.16.jpeg"
        imagem.style.borderRadius = '50%'
        imagem.style.width = '40px'
        imagem.style.height = 'auto'
        imagem.style.position = 'relative'
        imagem.style.left = '73vw'
        imagem.style.top = '5.5vh'
        chatPrincipal = document.querySelector('.chatPrincipal');
        chatPrincipal.appendChild(imagem)
        chatPrincipal.appendChild(textarea);
        autosize(textarea);
    }
    if (condicao === 'encerrado'){
        document.querySelector('#controladorChat').value = 'naoIniciado'
        document.querySelector('#msgUser').value = ''
        condicao = condicaoAtual.value
        i = 0
    }
    if (condicao !== 'naoIniciado'){
    i = i + 1
    }
    rolarTela.scrollTop = rolarTela.scrollHeight
})