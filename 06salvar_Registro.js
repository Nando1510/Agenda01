const botao_Salvar = document.getElementById('salvar');
botao_Salvar.addEventListener('click', salvar_Registro);


async function salvar_Registro(event){
    event.preventDefault();
    const tarefa = document.getElementById('tarefa').value.trim();
    const data = document.getElementById('data').value.trim();
    const opcao = document.querySelector('input[name="opcao"]:checked')?.value;

    document.getElementById('error-tarefa').textContent = '';
    document.getElementById('error-data').textContent = '';
    document.getElementById('error-opcao').textContent = '';

    document.getElementById('sucesso').textContent = '';

    let validar = true;

    if (!tarefa){
        document.getElementById('error-tarefa').textContent = 'Campo tarefa obrigatório!!!';
        validar = false;
    }

    if (!data){
        document.getElementById('error-data').textContent = 'Campo data obrigatório!!!';
        validar = false;
    }

    if (!opcao){
        document.getElementById('error-opcao').textContent = 'Escolha uma opção!!!'
        validar = false;
    }

    if (validar){       

        document.getElementById('sucesso').textContent = 'Dados cadastrados com sucesso!!!';       
       
      
        setTimeout(() => {
            document.getElementById('sucesso').textContent = '';
        }, 3000);
        

         try {
          const resposta = await fetch('/salvar', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ tarefa, data, opcao})
          });

          const respostaservidor = await resposta.json();

          if (resposta.ok) {
            alert(respostaservidor.message);
            
            
            
          } else {
            alert('Erro ao salvar: ' + respostaservidor.message);
          }
        } catch (error) {
          alert('Erro na comunicação com o servidor.');
          console.error(error);
        }

    }

     carregarDados();

    //location.reload();

}
