// VISUALIZAÇÃO DE FOTO POR CADA ESTADO
// SOMENTE COLOQUEI 2 ESTADOS DOS 26
var estados = {
  AC: { melhores: [6,7,8,9], feriado: { mes: 6, dia: 15, nome: "Aniversário do Acre" }, cidades: [
    ["Rio Branco", -9.97, -67.81, "Palácio Rio Branco e Gameleira",
      ["Calçadão da Gameleira, Rio Branco Acre (cropped).jpg", "Centro de Rio Branco - Noturno.jpg",
        "Confira as imagens da iluminação natalina de Rio Branco (15789397768).jpg"
      ]],
    ["Cruzeiro do Sul", -7.63, -72.67, "Parque Nacional da Serra do Divisor", 
      ["Praça em Cruzeiro do Sul 02.jpg", "Catedral, Cruzeiro do Sul 02.jpg", "Ponte da União, Cruzeiro do Sul, Acre.jpg"]
    ] ] },
  AL: { melhores: [9,10,11,12,1,2], feriado: { mes: 9, dia: 16, nome: "Emancipação Política de Alagoas" }, cidades: [
    ["Maceió", -9.67, -35.74, "Piscinas naturais de Pajuçara", ["Maceió, Alagoas (52108977954).jpg", "Maceió, Alagoas, 2022 (52476801406).jpg",
      "Praia de Ipioca - Maceió - Alagoas (11394603505).jpg", "Maceió, Alagoas, 2022 (52476801701).jpg", "Orla de Maceió 2023.jpg",
      "Ponta Verde Lighthouse landscape - Maceió, Brazil (edited).jpg", "Maceió, Alagoas (52109245180).jpg", "Panoramica do Porto de Jaraguá Maceió Alagoas.jpg"
    ]],
    ["Maragogi", -9.01, -35.22, "Galés de Maragogi", ["Marco Ankosqui Praia de Maragogi Maragogi-AL (40850123031).jpg", "Praia de Burgalhau -4 (51724000179).jpg",
      "Praia de Barra Grande - Maragogi-4 (51712941503).jpg", "Divisa Japaratinga-Maragogi (51723592788).jpg", "Maragogi - Alagoas - Brasil (11531767023).jpg", 
      "Mirante em Maragogi - Alagoas.jpg", "Divisa Japaratinga-Maragogi (51723592788).jpg", "Maragogi Alagoas.jpg"
    ]] ] },
}

//BRASILAPI - lista de estados: https://brasilapi.com.br/api/ibge/uf/v1
async function carregarEstados() {
  try {
    var resposta = await fetch("https://brasilapi.com.br/api/ibge/uf/v1");
    if (!resposta.ok) throw new Error("Erro " + resposta.status);
    var lista = await resposta.json(); // [{ id, sigla, nome, regiao }]
    lista.sort(function (x, y) { return x.nome.localeCompare(y.nome); });

    selectEstado.innerHTML = '<option value="">Escolha um estado</option>';
    lista.forEach(function (uf) {
      if (!estados[uf.sigla]) return;
      estados[uf.sigla].nome = uf.nome;
      estados[uf.sigla].regiao = uf.regiao.nome;
      var op = document.createElement("option");
      op.value = uf.sigla;
      op.textContent = uf.nome + " (" + uf.sigla + ")";
      selectEstado.appendChild(op);
    });
  } catch (erro) {
    selectEstado.innerHTML = '<option value="">Erro ao carregar</option>';
    mensagem.textContent = "Não foi possível carregar os estados da BrasilAPI. Verifique a internet.";
    console.error(erro);
  }
}

// BrasilAPI - feriados nacionais: https://brasilapi.com.br/api/feriados/v1/{ano}
async function buscarFeriados(ano) {
  var resposta = await fetch("https://brasilapi.com.br/api/feriados/v1/" + ano);
  if (!resposta.ok) throw new Error("Erro ao buscar feriados: " + resposta.status);
  return await resposta.json(); // [{ date, name, type }]
}
