document.getElementById("teamForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const names = [
    e.target.name1.value,
    e.target.name2.value,
    e.target.name3.value,
    e.target.name4.value
  ].filter(name => name.trim() !== "");

  const message = e.target.message.value.trim(); // Para capturar o valor da mensagem

  const data = { names, message };  // Atributos com os mesmos da regra

  try {
    const response = await fetch("https://fsdt-contact.onrender.com/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      alert("Formulário enviado com sucesso!");
      e.target.reset();
    } else {
      alert("Erro ao enviar o formulário.");
    }
  } catch (error) {
    alert("Falha na conexão com o servidor.");
  }
});
