// ROTA PARA SALVAR OS DADOS
app.post('/salvar', async (req, res) => {
  try {
    let { tarefa, data, opcao } = req.body;

    // Converte string da data para objeto Date
    if (data) {
      data = new Date(data);
    }

    const customId = await gerarCustomId();

    const controle = new Controle({ customId, tarefa, data, opcao });
    await controle.save();

    console.log('Dados salvos:', controle);
    
  } catch (error) {
    console.error('Erro ao salvar dados:', error);
    res.status(500).json({ message: 'Erro ao salvar dados' });
  }
});
