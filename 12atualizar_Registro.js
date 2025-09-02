// ROTA PARA ATUALIZAR REGISTRO
app.put('/atualizar/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const { tarefa, data, opcao} = req.body;

  try {
    await Controle.updateOne(
      { customId: id },
      { $set: { tarefa, data, opcao} }
    );
    res.sendStatus(200);
  } catch (err) {
    console.error('Erro ao atualizar:', err);
    res.status(500).send('Erro ao atualizar registro');
  }
});
