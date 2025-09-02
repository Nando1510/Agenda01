const botao_Cancelar = document.getElementById('cancelar');

botao_Cancelar.addEventListener('click', limpar);

function limpar(){
    document.getElementById('limpar_Inputs').reset();
}
