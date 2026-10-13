function idaderestante() {

    //1. Captura o valor digitado no campo de input pelo usuário;

    const elementoinput = document.getElementById("campoIdade");
    const idadeDigitada = parseInt(elementoinput.value);
    const nome = document.getElementById("campoNome").value;

    const idaderestante = 18 - idadeDigitada;


    //o .value pega o valor digitado no input;

    //2. Localiza o elemento onde o texto de resultado será exibido

    const elementoResultado = document.getElementById("mensagemResultado");

    //3. Validação preventiva: Impede processamento se o campo estiver em branco;

    if (isNaN(idadeDigitada)) { // Nan = Not a number (não é um número)
        elementoResultado.innerText = 'Por favor. Digite uma idade numérica válida.';
        elementoResultado.style.color = "#dc2626";
        return;
        //return = para a execução
    }

    //4. Tomada de decisão: bifurcação do fluxo entre maior e menor de idade
    if (idadeDigitada >= 18) {
        elementoResultado.innerText = `Olá ${nome}! Você tem ${idadeDigitada} anos e seu acesso foi liberado com sucesso.`;

        elementoResultado.style.color = "#16a34a";
        console.log(`Verificação aprovada: ${idadeDigitada} anos (maior de idade).`);

        return;
    }

    else {
        elementoResultado.innerText = `Olá ${nome}! Você tem ${idadeDigitada} anos e ainda é menor de idade. Faltam ${idaderestante} ano(s) para atingir a maioridade`;
        elementoResultado.style.color = "#d97706";
        console.log(`Verificação informativa: ${idadeDigitada} anos (Menor de idade)`);
    }
}
