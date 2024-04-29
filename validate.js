// Função para validar e enviar o formulário
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.formcontato__form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();


        const nome = document.getElementById('nome');
        const email = document.getElementById('email');
        const assunto = document.getElementById('assunto');
        const mensagem = document.getElementById('mensagem');


        if (nome.value === '' || email.value === '' || assunto.value === '' || mensagem.value === '') {
            alert('Por favor, preencha todos os campos do formulário.');
            return;
        }


        const mensagemParaEnviar = {
            nome: nome.value,
            email: email.value,
            assunto: assunto.value,
            mensagem: mensagem.value
        };


        enviarMensagem(mensagemParaEnviar);
    });

    function enviarMensagem(mensagem) {

        console.log('Mensagem enviada:', mensagem);
        

        nome.value = '';
        email.value = '';
        assunto.value = '';
        mensagem.value = '';

        alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');
    }
});
