// 1) DADOS DOS ESTADOS
// melhores = meses ideais (1 a 12) | feriado = data estadual
// cidades = [nome, latitude, longitude, passeio turístico]
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
  AP: { melhores: [8,9,10,11], feriado: { mes: 3, dia: 19, nome: "Dia de São José, padroeiro do Amapá" }, cidades: [
    ["Macapá", 0.03, -51.07, "Fortaleza de São José e Marco Zero do Equador", ["Macapá (29645965587).jpg", "Desfile da Boêmios do Laguinho no Carnaval de 2024, Macapá, Brasil 04.jpg",
      "MarciaDoCarmo Curiau Macapa AP (26099519377).jpg", "2023 LII Expofeira do Amapá 01.jpg", "ChicoRasta Macapa Maramar LuisCorreia PI (40864331761).jpg", "Macapa-5 (40802876902).jpg",
      "Macapá (43696686905).jpg", "Macapá (29646710767).jpg"
    ]],
    ["Oiapoque", 3.84, -51.83, "Fronteira com a Guiana Francesa e Cabo Orange", ["Oiapoque (44561158741).jpg", "Rio Oiapoque (2710451174).jpg", "Monte Karupina, Terra Indígena Uaçá.jpg",
      "Operação Ágata 10 (22159507943).jpg", "Rio Oiapoque (2710449650).jpg", "Igreja em Clevelândia do Norte.jpg", "Rio Oiapoque (2710448132).jpg", "Oiapoque (43651599335).jpg"
    ]] ] },
  AM: { melhores: [7,8,9,10], feriado: { mes: 9, dia: 5, nome: "Elevação do Amazonas à categoria de província" }, cidades: [
    ["Manaus", -3.12, -60.02, "Teatro Amazonas e Encontro das Águas", ["Cargo ferry transporting cars passing by the Meeting of the Waters, Manaus, Brazil 2.jpg",
      "Inner-city architecture, Manaus, Brazil 08.jpg", "Inner-city architecture, Manaus, Brazil 05.jpg", "Palace of Justice (Manaus).jpg", "Praia da Ponta Negra (Manaus).jpg",
      "Soberane-Manaus-2024.jpg", "Praia da Lua Manaus Amazonas Brasil.jpg", "Porto de Manaus 2012.jpg"
    ]],
    ["Presidente Figueiredo", -2.03, -60.02, "Cachoeiras e cavernas", ["Presidente Figueiredo Amazonas.jpg", "Presidente Figueiredo-AM (4891889073).jpg", "Gruta dos olhos da terra Presidente Figueiredo Amazonas Brasil.jpg",
      "Praia de Presidente Figueiredo - AM.jpg", "Cachoeira Cascata da Pedra Furada, Presidente Figueiredo, AM.JPG", "MarioOliveira Cachoeira das Lajes Presidente Figueiredo AM (41150664021).jpg", 
      "MarioOliveira Cachoeira de Iracema Presidente Figueiredo AM (41107150222).jpg", "Cachoeira do Santuário (6877578337).jpg"
    ]] ] },
  BA: { melhores: [9,10,11,12,1,2], feriado: { mes: 7, dia: 2, nome: "Independência da Bahia" }, cidades: [
    ["Salvador", -12.97, -38.51, "Pelourinho e Elevador Lacerda"],
    ["Lençóis", -12.56, -41.39, "Chapada Diamantina e Morro do Pai Inácio"] ] },
  CE: { melhores: [7,8,9,10,11,12], feriado: { mes: 3, dia: 25, nome: "Data Magna do Ceará" }, cidades: [
    ["Fortaleza", -3.73, -38.53, "Praia do Futuro e Mercado Central"],
    ["Jijoca de Jericoacoara", -2.79, -40.51, "Duna do Pôr do Sol e Pedra Furada"] ] },
  DF: { melhores: [5,6,7,8,9], feriado: { mes: 11, dia: 30, nome: "Dia do Evangélico" }, cidades: [
    ["Brasília (Eixo Monumental)", -15.80, -47.86, "Praça dos Três Poderes e Catedral"],
    ["Brasília (Lago Paranoá)", -15.83, -47.83, "Ponte JK e Pontão do Lago Sul"] ] },
  ES: { melhores: [4,5,9,10], feriado: null, cidades: [
    ["Vila Velha", -20.33, -40.29, "Convento da Penha"],
    ["Guarapari", -20.67, -40.50, "Praias e Praia do Morro"] ] },
  GO: { melhores: [5,6,7,8,9], feriado: null, cidades: [
    ["Pirenópolis", -15.85, -48.96, "Centro histórico e cachoeiras"],
    ["Alto Paraíso de Goiás", -14.13, -47.52, "Chapada dos Veadeiros"] ] },
  MA: { melhores: [7,8,9,10], feriado: { mes: 7, dia: 28, nome: "Adesão do Maranhão à Independência" }, cidades: [
    ["São Luís", -2.53, -44.30, "Centro Histórico (Patrimônio da UNESCO)"],
    ["Barreirinhas", -2.74, -42.82, "Lençóis Maranhenses"] ] },
  MT: { melhores: [5,6,7,8,9], feriado: null, cidades: [
    ["Cuiabá", -15.60, -56.10, "Centro histórico e Mercado do Porto"],
    ["Chapada dos Guimarães", -15.46, -55.75, "Cachoeira Véu de Noiva e mirantes"] ] },
  MS: { melhores: [5,6,7,8,9], feriado: { mes: 10, dia: 11, nome: "Criação do Estado de Mato Grosso do Sul" }, cidades: [
    ["Bonito", -21.13, -56.48, "Gruta do Lago Azul e flutuação em rios"],
    ["Corumbá", -19.01, -57.65, "Pantanal e passeios de barco"] ] },
  MG: { melhores: [4,5,6,7,8,9], feriado: null, cidades: [
    ["Ouro Preto", -20.39, -43.50, "Centro histórico e igrejas barrocas"],
    ["Tiradentes", -21.11, -44.18, "Centro histórico e Chafariz de São José"] ] },
  PA: { melhores: [7,8,9,10,11], feriado: { mes: 8, dia: 15, nome: "Adesão do Grão-Pará à Independência" }, cidades: [
    ["Belém", -1.46, -48.50, "Ver-o-Peso e Estação das Docas"],
    ["Santarém (Alter do Chão)", -2.50, -54.95, "Praia da Ilha do Amor"] ] },
  PB: { melhores: [9,10,11,12,1,2], feriado: { mes: 8, dia: 5, nome: "Fundação do Estado da Paraíba" }, cidades: [
    ["João Pessoa", -7.12, -34.86, "Ponta do Seixas e Praia de Tambaú"],
    ["Campina Grande", -7.23, -35.88, "Festa de São João"] ] },
  PR: { melhores: [3,4,5,9,10], feriado: { mes: 12, dia: 19, nome: "Emancipação Política do Paraná" }, cidades: [
    ["Curitiba", -25.43, -49.27, "Jardim Botânico e Ópera de Arame"],
    ["Foz do Iguaçu", -25.55, -54.58, "Cataratas do Iguaçu e Itaipu"] ] },
  PE: { melhores: [9,10,11,12,1,2], feriado: null, cidades: [
    ["Recife", -8.05, -34.88, "Marco Zero e Recife Antigo"],
    ["Fernando de Noronha", -3.85, -32.42, "Baía do Sancho e mergulho"] ] },
  PI: { melhores: [6,7,8,9], feriado: { mes: 10, dia: 19, nome: "Dia do Piauí" }, cidades: [
    ["Parnaíba", -2.90, -41.78, "Delta do Parnaíba"],
    ["São Raimundo Nonato", -9.02, -42.70, "Parque Nacional Serra da Capivara"] ] },
  RJ: { melhores: [4,5,8,9,10], feriado: { mes: 4, dia: 23, nome: "Dia de São Jorge" }, cidades: [
    ["Rio de Janeiro", -22.95, -43.21, "Cristo Redentor e Pão de Açúcar" ,
      ["Redentor Over Clouds 1.jpg", "Rio skyline and Cristo Redentor from Sugarloaf Mountain, Brazil.jpg"]],
    ["Paraty", -23.22, -44.71, "Centro histórico e passeio de escuna"] ] },
  RN: { melhores: [9,10,11,12,1,2], feriado: { mes: 10, dia: 3, nome: "Mártires de Cunhaú e Uruaçu" }, cidades: [
    ["Natal", -5.79, -35.21, "Dunas de Genipabu e Forte dos Reis Magos"],
    ["Tibau do Sul (Pipa)", -6.23, -35.05, "Praia do Madeiro e Santuário Ecológico"] ] },
  RS: { melhores: [5,6,7,8,9,12], feriado: { mes: 9, dia: 20, nome: "Revolução Farroupilha" }, cidades: [
    ["Gramado", -29.38, -50.87, "Lago Negro e Rua Coberta"],
    ["Bento Gonçalves", -29.17, -51.52, "Vale dos Vinhedos"] ] },
  RO: { melhores: [6,7,8,9], feriado: { mes: 1, dia: 4, nome: "Criação do Estado de Rondônia" }, cidades: [
    ["Porto Velho", -8.76, -63.90, "Estrada de Ferro Madeira-Mamoré"],
    ["Guajará-Mirim", -10.79, -65.34, "Fronteira com a Bolívia e Rio Mamoré"] ] },
  RR: { melhores: [12,1,2,3], feriado: { mes: 10, dia: 5, nome: "Criação do Estado de Roraima" }, cidades: [
    ["Boa Vista", 2.82, -60.67, "Orla Taumanan e Praça das Águas"],
    ["Uiramutã", 4.60, -60.18, "Região do Monte Roraima"] ] },
  SC: { melhores: [11,12,1,2,3], feriado: { mes: 8, dia: 11, nome: "Dia do Estado de Santa Catarina" }, cidades: [
    ["Florianópolis", -27.60, -48.55, "Lagoa da Conceição e Praia Mole"],
    ["Blumenau", -26.92, -49.07, "Oktoberfest e arquitetura alemã"] ] },
  SP: { melhores: [4,5,6,7,8,9], feriado: { mes: 7, dia: 9, nome: "Revolução Constitucionalista" }, cidades: [
    ["São Paulo", -23.55, -46.63, "Avenida Paulista e MASP"],
    ["Ubatuba", -23.43, -45.08, "Praias e Projeto Tamar"] ] },
  SE: { melhores: [9,10,11,12,1,2], feriado: { mes: 7, dia: 8, nome: "Emancipação Política de Sergipe" }, cidades: [
    ["Aracaju", -10.91, -37.07, "Orla de Atalaia e Passarela do Caranguejo"],
    ["Canindé de São Francisco", -9.64, -37.79, "Cânions do Xingó"] ] },
  TO: { melhores: [5,6,7,8,9], feriado: { mes: 10, dia: 5, nome: "Criação do Estado do Tocantins" }, cidades: [
    ["Palmas", -10.18, -48.33, "Praça dos Girassóis e Praia da Graciosa"],
    ["Mateiros", -10.55, -46.42, "Jalapão: fervedouros e dunas"] ] }
};

var nomesMeses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
                  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
var nomesDias = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"];

// 2) ELEMENTOS DA PÁGINA
var selectEstado = document.getElementById("estado");
var selectAno = document.getElementById("ano");
var mensagem = document.getElementById("mensagem");
var resultado = document.getElementById("resultado");

var anoAtual = new Date().getFullYear();
for (var a = anoAtual; a <= anoAtual + 2; a++) {
  var opAno = document.createElement("option");
  opAno.value = a;
  opAno.textContent = a;
  selectAno.appendChild(opAno);
}

// 3) MAPA (Leaflet + mapa da Esri)
var mapa = L.map("mapa").setView([-14.2, -51.9], 4);
L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}", {
  maxZoom: 18,
  attribution: "Tiles &copy; Esri"
}).addTo(mapa);

var marcadores = {}; //lista de marcadores

for (const sigla in estados) {
  marcadores[sigla] = [];
  estados[sigla].cidades.forEach(function (c, idx) {
    var m = L.marker([c[1], c[2]]).addTo(mapa);
    m.bindPopup("<b>" + c[0] + " (" + sigla + ")</b><br>" + c[3]);
    // clicar no marcador seleciona o estado e a cidade 
    m.on("click", function () {
      selectEstado.value = sigla;
      cidadeEscolhida = idx;
      estadoAtualSigla = sigla;
      montarRoteiro();
    });
    marcadores[sigla].push(m);
  });
}

// 4) BRASILAPI - https://brasilapi.com.br/api/ibge/uf/v1
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
    await restaurarEscolhas();   // devolve o que tinha escolhido da última vez
    atualizarSelectFavoritos();  // marca com coração os estados no menu
  } catch (erro) {
    selectEstado.innerHTML = '<option value="">Erro ao carregar</option>';
    mensagem.textContent = "Não foi possível carregar os estados da BrasilAPI. Verifique a internet.";
    console.error(erro);
  }
}

// BrasilAPI - https://brasilapi.com.br/api/feriados/v1/{ano}
async function buscarFeriados(ano) {
  var resposta = await fetch("https://brasilapi.com.br/api/feriados/v1/" + ano);
  if (!resposta.ok) throw new Error("Erro ao buscar feriados: " + resposta.status);
  return await resposta.json(); // [{ date, name, type }]
}

// FOTOS - Wikimedia Commons 
var ultimaBusca = ""; 

async function buscarFotos(termo) {
  var url = "https://commons.wikimedia.org/w/api.php?action=query&generator=search" +
    "&gsrsearch=" + encodeURIComponent(termo + " filetype:bitmap") +
    "&gsrnamespace=6&gsrlimit=50&prop=imageinfo&iiprop=url%7Cmime&iiurlwidth=600" +
    "&format=json&origin=*";
  var resposta = await fetch(url);
  if (!resposta.ok) throw new Error("Erro ao buscar fotos: " + resposta.status);
  var dados = await resposta.json();

  var paginas = [];
  if (dados.query) {
    for (var id in dados.query.pages) paginas.push(dados.query.pages[id]);
  }
  paginas.sort(function (x, y) { return x.index - y.index; });

  var fotos = [];
  paginas.forEach(function (p) {
    if (!p.imageinfo) return;
    var info = p.imageinfo[0];
    // só fotos JPEG 
    if (info.mime === "image/jpeg" && info.thumburl) {
      fotos.push({ url: info.thumburl, pagina: info.descriptionurl, titulo: p.title.replace("File:", "") });
    }
  });
  return fotos;
}

async function carregarFotos(nomeLocal, arquivos) {
  var galeria = document.getElementById("galeria");
  var termo = nomeLocal.replace(/\(.*\)/, "").trim(); // tira "(Eixo Monumental)"
  ultimaBusca = termo;

  document.getElementById("secaoFotos").hidden = false; // mostra a seção de fotos no fim da página

  document.getElementById("tituloFotos").textContent = "Fotos de " + termo;
  galeria.innerHTML = "<p>Carregando fotos...</p>";

  try {
    var fotos;
    if (arquivos && arquivos.length > 0) {
      // fotos ESCOLHIDAS por você (5º item da cidade em "estados")
      fotos = arquivos.map(function (nome) {
        var arq = encodeURIComponent(nome.replace(/ /g, "_"));
        return {
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/" + arq + "?width=900",
          pagina: "https://commons.wikimedia.org/wiki/File:" + arq,
          titulo: nome
        };
      });
    } else {
      // sem fotos escolhidas: busca automática
      fotos = await buscarFotos(termo + " Brasil");
      if (fotos.length === 0) fotos = await buscarFotos(termo);   // plano B
    }
    if (ultimaBusca !== termo) return;

    galeria.innerHTML = "";
    if (fotos.length === 0) {
      galeria.innerHTML = "<p>Nenhuma foto encontrada.</p>";
      return;
    }
    fotos.slice(0, 10).forEach(function (f) {
      var link = document.createElement("a");
      link.href = f.pagina;   // página com autor e licença
      link.target = "_blank";
      var img = document.createElement("img");
      img.src = f.url;
      img.alt = f.titulo;
      img.loading = "lazy";
      link.appendChild(img);
      galeria.appendChild(link);
    });
  } catch (erro) {
    galeria.innerHTML = "<p>Não foi possível carregar as fotos.</p>";
    console.error(erro);
  }
}

// 5) FUNÇÕES AUXILIARES
function criarData(texto) {
  var p = texto.split("-");
  return new Date(Number(p[0]), Number(p[1]) - 1, Number(p[2]));
}

function formatar(data) {
  var dia = String(data.getDate()).padStart(2, "0");
  var mes = String(data.getMonth() + 1).padStart(2, "0");
  return dia + "/" + mes + " (" + nomesDias[data.getDay()] + ")";
}

function adicionarTag(li, texto, classe) {
  var tag = document.createElement("span");
  tag.className = "tag " + classe;
  tag.textContent = texto;
  li.appendChild(tag);
}

// ESCOLHAS DA PESSOA (ficam guardadas no navegador)
var CHAVE_SALVA = "roteiroBrasil";
var abaAtual = "cidades";
var mesEscolhido = 0;       // 1 a 12 (0 = nenhum mês escolhido)
var cidadeEscolhida = 0;    // posição da cidade na lista do estado
var estadoAtualSigla = "";
var feriadosAtuais = [];    // feriados do ano (BrasilAPI + estadual)
var statusFeriados = "";    // "carregando", "ok" ou "erro"
var contadorFeriados = 0;   // evita que uma resposta antiga sobrescreva a nova

var nomesDiasCurtos = ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"];

function salvarEscolhas() {
  try {
    localStorage.setItem(CHAVE_SALVA, JSON.stringify({
      estado: selectEstado.value,
      ano: selectAno.value,
      mes: mesEscolhido,
      cidade: cidadeEscolhida,
      aba: abaAtual
    }));
  } catch (erro) {
    console.error(erro);
  }
}

function lerEscolhas() {
  try {
    return JSON.parse(localStorage.getItem(CHAVE_SALVA)) || {};
  } catch (erro) {
    return {};
  }
}

// FAVORITOS (salvos no navegador)
var CHAVE_FAVORITOS = "roteiroBrasilFavoritos";

function lerFavoritos() {
  try {
    return JSON.parse(localStorage.getItem(CHAVE_FAVORITOS)) || [];
  } catch (e) {
    return [];
  }
}

function alternarFavorito(sigla) {
  if (!sigla) return;
  var favs = lerFavoritos();
  var idx = favs.indexOf(sigla);
  if (idx === -1) {
    favs.push(sigla);
  } else {
    favs.splice(idx, 1);
  }
  localStorage.setItem(CHAVE_FAVORITOS, JSON.stringify(favs));
  atualizarBotaoFavorito(sigla);
  atualizarSelectFavoritos();
}

function atualizarBotaoFavorito(sigla) {
  var btn = document.getElementById("btnFavorito");
  var favoritado = lerFavoritos().indexOf(sigla) !== -1;
  btn.classList.toggle("ativo", favoritado);
  btn.title = favoritado ? "Remover dos favoritos" : "Favoritar estado";
}

function atualizarSelectFavoritos() {
  var favs = lerFavoritos();
  Array.prototype.forEach.call(selectEstado.options, function (op) {
    if (!op.value || !estados[op.value]) return;
    var base = estados[op.value].nome + " (" + op.value + ")";
    op.textContent = favs.indexOf(op.value) !== -1 ? "♥ " + base : base;
  });
}

// AUXILIARES DE DATA
function somarDias(data, n) {
  return new Date(data.getFullYear(), data.getMonth(), data.getDate() + n);
}

function dataCurta(data) {
  var dia = String(data.getDate()).padStart(2, "0");
  var mes = String(data.getMonth() + 1).padStart(2, "0");
  return dia + "/" + mes;
}

function periodo(inicio, fim) {
  return nomesDiasCurtos[inicio.getDay()] + " " + dataCurta(inicio) +
         " a " + nomesDiasCurtos[fim.getDay()] + " " + dataCurta(fim);
}

// diz o quanto um feriado rende, de acordo com o dia da semana
// ordem: 0 = melhor, 3 = pior (usada para ordenar a lista)
function classificarFeriado(data) {
  var dia = data.getDay();
  if (dia === 1) return { ordem: 0, tag: "feriadão", classe: "feriadao",
    detalhe: "Fim de semana de 3 dias: " + periodo(somarDias(data, -2), data) };
  if (dia === 5) return { ordem: 0, tag: "feriadão", classe: "feriadao",
    detalhe: "Fim de semana de 3 dias: " + periodo(data, somarDias(data, 2)) };
  if (dia === 2) return { ordem: 1, tag: "possível emenda", classe: "emenda",
    detalhe: "Emendando a segunda, dá 4 dias: " + periodo(somarDias(data, -3), data) };
  if (dia === 4) return { ordem: 1, tag: "possível emenda", classe: "emenda",
    detalhe: "Emendando a sexta, dá 4 dias: " + periodo(data, somarDias(data, 3)) };
  if (dia === 3) return { ordem: 2, tag: "meio de semana", classe: "neutra",
    detalhe: "Cai na quarta: só compensa com mais dias de folga." };
  return { ordem: 3, tag: "fim de semana", classe: "neutra",
    detalhe: "Cai no fim de semana: não ganha dia de folga." };
}

// 6) MONTANDO O ROTEIRO
async function montarRoteiro() {
  mensagem.textContent = "";
  var sigla = selectEstado.value;
  if (sigla === "") {
    mensagem.textContent = "Escolha um estado primeiro.";
    return;
  }
  var estado = estados[sigla];

  // trocou de estado: volta para a 1ª cidade
  if (sigla !== estadoAtualSigla) {
    cidadeEscolhida = 0;
    estadoAtualSigla = sigla;
  }
  if (cidadeEscolhida >= estado.cidades.length) cidadeEscolhida = 0;

  // mapa: aproxima das cidades do estado
  var pontos = estado.cidades.map(function (c) { return [c[1], c[2]]; });
  mapa.flyToBounds(pontos, { padding: [60, 60], maxZoom: 9 });
  marcadores[sigla][cidadeEscolhida].openPopup();

  mostrarEstado(sigla, estado);
  salvarEscolhas();
  await atualizarFeriados();
  resultado.hidden = false;
}

// busca os feriados na BrasilAPI e atualiza as listas (também usada ao trocar o ano)
async function atualizarFeriados() {
  var sigla = selectEstado.value;
  if (sigla === "") return;
  var estado = estados[sigla];
  var ano = Number(selectAno.value);
  var minhaVez = ++contadorFeriados;

  statusFeriados = "carregando";
  mostrarDatasDoMes();

  try {
    var nacionais = await buscarFeriados(ano);
    var lista = [];
    nacionais.forEach(function (f) {
      lista.push({ data: criarData(f.date), nome: f.name });
    });
    if (estado.feriado) {
      lista.push({
        data: new Date(ano, estado.feriado.mes - 1, estado.feriado.dia),
        nome: estado.feriado.nome + " (feriado estadual)"
      });
    }
    lista.sort(function (x, y) { return x.data - y.data; });
    if (minhaVez !== contadorFeriados) return;   // chegou atrasada, ignora
    feriadosAtuais = lista;
    statusFeriados = "ok";
    mostrarFeriados(lista, estado);
  } catch (erro) {
    if (minhaVez !== contadorFeriados) return;
    feriadosAtuais = [];
    statusFeriados = "erro";
    mensagem.textContent = "Não foi possível carregar os feriados. Tente de novo.";
    console.error(erro);
  }
  mostrarDatasDoMes();
}

function mostrarEstado(sigla, estado) {
  document.getElementById("nomeEstado").textContent = (estado.nome || sigla) + " (" + sigla + ")";
  atualizarBotaoFavorito(sigla); // atualiza o coraçãozinho ao abrir o estado
  document.getElementById("regiao").textContent = "Região " + (estado.regiao || "");

  var ul = document.getElementById("cidades");
  ul.innerHTML = "";
  estado.cidades.forEach(function (c, i) {
    var li = document.createElement("li");
    li.innerHTML = "<b>📍 " + c[0] + "</b><span>" + c[3] + "</span>";
    li.title = "Clique para ver no mapa";
    if (i === cidadeEscolhida) li.classList.add("sel");
    li.addEventListener("click", function () {
      selecionarCidade(sigla, i);
    });
    ul.appendChild(li);
  });

  // meses: os 12, todos clicáveis; os ideais do estado ficam marcados
  var box = document.getElementById("melhoresMeses");
  box.innerHTML = "";
  nomesMeses.forEach(function (nome, i) {
    var mes = i + 1;
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "mes-btn";
    btn.dataset.mes = mes;
    btn.textContent = nome;
    if (estado.melhores.indexOf(mes) !== -1) {
      btn.classList.add("ideal");
      btn.title = "Mês ideal para viajar";
    }
    btn.addEventListener("click", function () { escolherMes(mes); });
    box.appendChild(btn);
  });
  marcarMesEscolhido();

  document.getElementById("vazio").hidden = true;
  resultado.hidden = false;

  var cidade = estado.cidades[cidadeEscolhida];
  carregarFotos(cidade[0], cidade[4]);   // fotos da cidade escolhida
}

function selecionarCidade(sigla, i) {
  var c = estados[sigla].cidades[i];
  cidadeEscolhida = i;
  mapa.flyTo([c[1], c[2]], 11);
  marcadores[sigla][i].openPopup();
  carregarFotos(c[0], c[4]);   // troca as fotos ao clicar na cidade
  document.querySelectorAll("#cidades li").forEach(function (li, pos) {
    li.classList.toggle("sel", pos === i);
  });
  salvarEscolhas();
}

// clicar num mês: marca o mês, mostra as melhores datas e vai para a aba "Melhores datas"
function escolherMes(mes) {
  mesEscolhido = mes;
  marcarMesEscolhido();
  mostrarDatasDoMes();
  mostrarAba("datas");   // já salva as escolhas
  document.querySelector(".painel").scrollTo({ top: 0, behavior: "smooth" });
}

function marcarMesEscolhido() {
  document.querySelectorAll(".mes-btn").forEach(function (b) {
    var sel = Number(b.dataset.mes) === mesEscolhido;
    b.classList.toggle("sel", sel);
    b.setAttribute("aria-pressed", sel ? "true" : "false");
  });
}

// ABA "MELHORES DATAS": as melhores datas dentro do mês escolhido
function mostrarDatasDoMes() {
  var titulo = document.getElementById("tituloDatas");
  var resumo = document.getElementById("resumoMes");
  var ul = document.getElementById("sugestoes");
  var tituloFds = document.getElementById("tituloFds");
  var fds = document.getElementById("fimDeSemana");
  ul.innerHTML = "";
  fds.innerHTML = "";
  resumo.className = "resumo-mes";

  var sigla = selectEstado.value;
  if (sigla === "" || mesEscolhido === 0) {
    titulo.textContent = "Melhores datas";
    resumo.textContent = "Escolha um mês na aba 📍 Cidades para ver as melhores datas dele.";
    tituloFds.hidden = true;
    return;
  }

  var estado = estados[sigla];
  var nomeEstado = estado.nome || sigla;
  var nomeMes = nomesMeses[mesEscolhido - 1];
  var ano = Number(selectAno.value);
  var ideal = estado.melhores.indexOf(mesEscolhido) !== -1;

  titulo.textContent = "Melhores datas em " + nomeMes + " de " + ano;
  if (ideal) {
    resumo.textContent = "★ " + nomeMes + " é um mês ideal para viajar para " + nomeEstado + ".";
    resumo.classList.add("ideal");
  } else {
    resumo.textContent = nomeMes + " não está entre os meses ideais para " + nomeEstado +
      ". Os meses ideais aparecem marcados com ★ na aba 📍 Cidades.";
  }

  // feriados do mês
  if (statusFeriados === "carregando") {
    ul.innerHTML = "<li>Carregando feriados...</li>";
  } else if (statusFeriados === "erro") {
    ul.innerHTML = "<li>Não foi possível carregar os feriados. Os fins de semana abaixo continuam valendo.</li>";
  } else {
    var doMes = feriadosAtuais
      .filter(function (f) { return f.data.getMonth() + 1 === mesEscolhido; })
      .map(function (f) { return { f: f, c: classificarFeriado(f.data) }; });
    doMes.sort(function (x, y) { return (x.c.ordem - y.c.ordem) || (x.f.data - y.f.data); });

    if (doMes.length === 0) {
      ul.innerHTML = "<li>Nenhum feriado em " + nomeMes + ". Veja os fins de semana abaixo.</li>";
    }
    doMes.forEach(function (item) {
      var li = document.createElement("li");
      li.appendChild(document.createTextNode(formatar(item.f.data) + " - " + item.f.nome));
      adicionarTag(li, item.c.tag, item.c.classe);
      var detalhe = document.createElement("span");
      detalhe.className = "detalhe";
      detalhe.textContent = item.c.detalhe;
      li.appendChild(detalhe);
      if (item.c.ordem <= 1) li.className = "ideal";
      ul.appendChild(li);
    });
  }

  // fins de semana do mês
  tituloFds.hidden = false;
  var ultimoDia = new Date(ano, mesEscolhido, 0).getDate();
  for (var d = 1; d <= ultimoDia; d++) {
    var sabado = new Date(ano, mesEscolhido - 1, d);
    if (sabado.getDay() !== 6) continue;
    var chip = document.createElement("span");
    chip.className = "mes";
    chip.textContent = "sáb " + dataCurta(sabado) + " e dom " + dataCurta(somarDias(sabado, 1));
    fds.appendChild(chip);
  }
}

function mostrarFeriados(lista, estado) {
  var ul = document.getElementById("feriados");
  ul.innerHTML = "";
  document.getElementById("buscaFeriado").value = "";   // limpa a busca ao refazer a lista

  lista.forEach(function (f) {
    var li = document.createElement("li");
    var mes = f.data.getMonth() + 1;
    var dia = f.data.getDay();

    li.appendChild(document.createTextNode(formatar(f.data) + " - " + f.nome));

    var ideal = estado.melhores.indexOf(mes) !== -1;
    var longo = (dia === 1 || dia === 5);
    var emenda = (dia === 2 || dia === 4);

    if (ideal) {
      li.className = "ideal";
      adicionarTag(li, "mês ideal", "bom");
    }
    if (longo) adicionarTag(li, "feriadão", "feriadao");
    if (emenda) adicionarTag(li, "possível emenda", "emenda");

    // evento CLICK: destaca o feriado clicado
    li.title = "Clique para destacar";
    li.addEventListener("click", function () {
      li.classList.toggle("destaque");
    });

    ul.appendChild(li);
  });
}

// 7) EVENTOS
document.getElementById("buscar").addEventListener("click", montarRoteiro);
selectEstado.addEventListener("change", montarRoteiro);
selectAno.addEventListener("change", function () {
  atualizarFeriados();   // recarrega os feriados do novo ano
  salvarEscolhas();
});
document.getElementById("verBrasil").addEventListener("click", function () {
  mapa.flyTo([-14.2, -51.9], 4);
  mapa.closePopup();
});
document.getElementById("irParaFeriados").addEventListener("click", function () {
  mostrarAba("feriados");
  document.querySelector(".painel").scrollTo({ top: 0, behavior: "smooth" });
});
document.getElementById("btnFavorito").addEventListener("click", function () {
  alternarFavorito(selectEstado.value);
});

/*--------- DARK E LIGHT ---------*/
var CHAVE_TEMA = "roteiroBrasilTema";
var btnTema = document.getElementById("btnTema");

function aplicarTema(escuro) {
  document.body.classList.toggle("dark", escuro);
  btnTema.innerHTML = escuro ? '<i data-lucide="sun"></i>' : '<i data-lucide="moon"></i>';
  btnTema.title = escuro ? "Mudar para tema claro" : "Mudar para tema escuro";
  if (window.lucide) lucide.createIcons();
}

aplicarTema(localStorage.getItem(CHAVE_TEMA) === "dark");

btnTema.addEventListener("click", function () {
  var vaiParaEscuro = !document.body.classList.contains("dark");
  localStorage.setItem(CHAVE_TEMA, vaiParaEscuro ? "dark" : "light");
  aplicarTema(vaiParaEscuro);
});

// evento INPUT: filtra a lista de feriados enquanto a pessoa digita
var campoBusca = document.getElementById("buscaFeriado");
campoBusca.addEventListener("input", function () {
  var texto = this.value.toLowerCase();
  document.querySelectorAll("#feriados li").forEach(function (li) {
    li.hidden = li.textContent.toLowerCase().indexOf(texto) === -1;
  });
});
// evento KEYDOWN: a tecla Esc limpa a busca
campoBusca.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    this.value = "";
    this.dispatchEvent(new Event("input"));
  }
});

// ABAS DO MENU
function mostrarAba(nome) {
  abaAtual = nome;
  document.querySelectorAll(".aba").forEach(function (b) {
    b.classList.toggle("ativa", b.dataset.aba === nome);
  });
  document.querySelectorAll(".conteudo-aba").forEach(function (sec) {
    sec.classList.toggle("ativa", sec.id === "aba-" + nome);
  });
  salvarEscolhas();
}
document.querySelectorAll(".aba").forEach(function (b) {
  b.addEventListener("click", function () { mostrarAba(b.dataset.aba); });
});

// VOLTA AS ESCOLHAS SALVAS (estado, ano, mês, cidade e aba)
async function restaurarEscolhas() {
  try {
    var salvo = lerEscolhas();

    if (salvo.ano) {
      var existe = Array.prototype.some.call(selectAno.options, function (o) {
        return o.value === String(salvo.ano);
      });
      if (existe) selectAno.value = salvo.ano;
    }
    if (!salvo.estado || !estados[salvo.estado]) return;

    mesEscolhido = Number(salvo.mes) || 0;
    cidadeEscolhida = Number(salvo.cidade) || 0;
    estadoAtualSigla = salvo.estado;   // evita voltar para a 1ª cidade
    selectEstado.value = salvo.estado;

    var pronto = montarRoteiro();
    mostrarAba(salvo.aba || "cidades");
    await pronto;
  } catch (erro) {
    console.error(erro);
  }
}

carregarEstados();