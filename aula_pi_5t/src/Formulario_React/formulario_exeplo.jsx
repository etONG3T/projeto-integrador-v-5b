import { useState } from "react";

function FormularioLivro() {

  const [form, setForm] = useState({
    livro: "",
    autor: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log("Livro:", form.livro);
    console.log("Autor:", form.autor);
  }

  return (
    <div>
      <h2>Cadastro de Livro</h2>

      <form onSubmit={handleSubmit}>

        <div>
          <label>Livro:</label>
          <input
            type="text"
            name="livro"
            value={form.livro}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Autor:</label>
          <input
            type="text"
            name="autor"
            value={form.autor}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Cadastrar</button>

      </form>

      <h3>Dados digitados:</h3>
      <pre>{JSON.stringify(form, null, 2)}</pre>

    </div>
  );
}