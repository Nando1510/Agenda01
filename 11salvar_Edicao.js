async function salvarEdicao(id) {
    // Pega os valores do formulário de edição
    const tarefa = document.getElementById(`edit-tarefa-${id}`).value.trim();
    const data = document.getElementById(`edit-data-${id}`).value; // tipo date, string "YYYY-MM-DD"
    const opcao = document.querySelector(`input[name="edit-opcao-${id}"]:checked`)?.value; // "sim" ou "nao"

    let validar = true;

    // Validação
    if (!tarefa){
        document.getElementById('error-tarefa').textContent = 'Campo tarefa obrigatório!!!';
        validar = false;
    }

    if (!data){
        document.getElementById('error-data').textContent = 'Campo data obrigatório!!!';
        validar = false;
    }

    if (!opcao){
        document.getElementById('error-opcao').textContent = 'Escolha uma opção!!!';
        validar = false;
    }

    if (validar){


           const res = await fetch(`/atualizar/${id}`, {
              method: 'PUT',
              headers: {'Content-Type':'application/json'},
              body: JSON.stringify({ tarefa, data, opcao})  // inclui resultado
            });

            if (res.ok) carregarDados();
            else alert('Erro ao salvar edição');

            
          // Exibe mensagem de sucesso
          document.getElementById('sucesso').textContent = 'Dados atualizados com sucesso!!!';

          setTimeout(() => {
                  document.getElementById('sucesso').textContent = '';
              }, 3000);

          
          // Atualiza a tabela
          carregarDados();

          // Limpa inputs
          limpar();

          // Esconde a mensagem de sucesso após 3 segundos
         
    }  

}
