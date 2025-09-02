function iniciarEdicao(elemento, id) {
  const linha = elemento.closest('tr');
  const celula = linha.querySelectorAll('td');

  ['tarefa', 'data', 'opcao'].forEach((field, idx) => {
    const td = celula[idx + 1];
    const valor = td.textContent.trim();

    if (field === 'opcao') {
      // aqui você monta os radios
      td.innerHTML = `
        <label>
          <input type="radio" name="edit-opcao-${id}" value="Sim" ${valor === 'Sim' ? 'checked' : ''}> Sim
        </label>
        <label>
          <input type="radio" name="edit-opcao-${id}" value="Não" ${valor === 'Não' ? 'checked' : ''}> Não
        </label>
      `;
    } else if (field === 'data') {
      // para a data, já coloca o input date
      td.innerHTML = `<input type="date" class="edit-field" id="edit-${field}-${id}" value="${valor}">`;
    } else {
      // para texto normal
      td.innerHTML = `<input type="text" class="edit-field" id="edit-${field}-${id}" value="${valor}">`;
    }
  });

  elemento.textContent = '💾';
  elemento.onclick = () => salvarEdicao(id);
}
