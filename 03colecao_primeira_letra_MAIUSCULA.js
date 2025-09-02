const mongoose = require('mongoose');

const Nome_Colecao_Primeira_Letra_MaiusculaSchema = new mongoose.Schema({
  customId: {
    type: Number,
    unique: true,
    required: true
  },
  tarefa: {
    type: String,
    required: true
  },
  data: {
    type: Date,
    required: true
  },
   opcao: {
    type: String, // ou Boolean
    enum: ["Sim", "Não"], // restringe os valores possíveis
    required: true
  }
}, {
  timestamps: true // Isso adiciona createdAt e updatedAt automaticamente
});

module.exports = mongoose.model('Nome_Colecao_Primeira_Letra_Maiuscula', Nome_Colecao_Primeira_Letra_MaiusculaSchema);
//POR EXEMPLO, SE O NOME FOR 'Medida' SERÁ CONVERTIDO PARA medidas (MINÚSCULO E NO PLURAL) COMO NOME DA COLEÇÃO.
