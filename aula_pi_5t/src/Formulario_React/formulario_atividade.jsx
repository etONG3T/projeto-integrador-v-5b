import { useState } from "react";

function FormularioLivro() {

  const [form, setForm] = useState({
    nome: "",
    email: "",
    cidade: "",
    perfil: "",
    observacao: "",
    receberNovidades: false
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log("nome:", form.nome);
    console.log("email:", form.email);
    console.log("cidade:", form.cidade);
    console.log("perfil:", form.perfil);
    console.log("observacao:", form.observacao);
    console.log("receberNovidades:", form.receberNovidades);

  }

  return (
    <div>
      <h2>Cadastro</h2>

      <form onSubmit={handleSubmit}>

        <div>
          <label>Nome:</label>
          <input
            type="text"
            name="nome"
            value={form.nome}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Cidade:</label>
          <input
            type="text"
            name="cidade"
            value={form.cidade}
            onChange={handleChange}
          />
        </div>
        
        <div>
          <label>Perfil:</label>
          <select
            name="perfil"
            value={form.perfil}
            onChange={handleChange}
          >
            <option value="">Selecione</option>
            <option value="estudante">Estudante</option>
            <option value="profissional">Profissional</option>
            <option value="outro">Outro</option>
          </select>
        </div>

        <div>
          <label>Observação:</label>
          <textarea
            name="observacao"
            value={form.observacao}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>
            <input
              type="checkbox"
              name="receberNovidades"
              checked={form.receberNovidades}
              onChange={handleChange}
            />
            Receber novidades por email
          </label>
        </div>

        <button type="submit">Cadastrar</button>

      </form>

      <h3>Dados digitados:</h3>
      <pre>{JSON.stringify(form, null, 2)}</pre>

    </div>
  );
}