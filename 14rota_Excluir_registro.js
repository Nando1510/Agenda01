// ROTA PARA EXCLUIR REGISTRO
app.delete('/excluir/:customId', async (req, res) => {
  await Controle.findOneAndDelete({ customId: req.params.customId });
  res.json({ message: 'Registro excluído!' });
});
