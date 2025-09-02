async function carregarDados(){

  try{
    const resposta = await fetch('/registros');
    const dados = await resposta.json();
    const corpo = document.getElementById('tbody');
    corpo.innerHTML = '';
    
    for (let i = 0; i < dados.length; i++){
        const item = dados[i];
        const dataFormatada = item.data ? new Date(item.data).toISOString().split('T')[0] : '';
        const linha = document.createElement('tr');

        linha.innerHTML = `
            <td>${item.customId}</td>
            <td>${item.tarefa}</td>
            <td>${dataFormatada}</td>
            <td>${item.opcao}</td>

            <td>   
                <span class = "icon" onclick="iniciarEdicao(this, ${item.customId})">✏️</span>
                <span class = "icon" onclick="excluirRegistro(${item.customId})">🗑️</span>
            
            </td>
        
        
        
        
        `;

        corpo.appendChild(linha);
       

    };
  } catch (err) {
    console.error("erro")
  }
}
