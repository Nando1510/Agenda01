async function excluirRegistro(id) {
      if (!confirm('Deseja realmente excluir este registro?')) return;

      const res = await fetch(`/excluir/${id}`, { method: 'DELETE' });
      if (res.ok) carregarDados();
      else alert('Erro ao excluir registro');
    }
