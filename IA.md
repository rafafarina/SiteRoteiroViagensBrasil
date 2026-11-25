Diário de Uso de IA — Projeto Roteiro Brasil
19/10 – Lívia Ramos – Claude (Free)

Prompt: "Como estruturar semanticamente o HTML5 do site Roteiro Brasil separando o cabeçalho, os filtros de estado e ano, o mapa interativo, as abas de informações e a galeria de fotos?"

Resposta: Sugeriu a divisão do documento utilizando tags semânticas (header, main, section, nav e aside) para isolar cada módulo visual e facilitar a estilização e a navegação.

Aceitei: A divisão modular da página em seções semânticas, que serviu de base para organizarmos a estrutura inicial do index.html.

Rejeitei: O uso de bibliotecas externas de layout sugeridas na resposta; optamos por construir a estrutura com HTML e CSS puro conforme o escopo da disciplina.

22/10 – Rafael Farina – ChatGPT (Free)

Prompt: "Quais tópicos essenciais devem compor um arquivo README.md técnico para uma aplicação web em HTML, CSS e JavaScript puro, destacando objetivo, funcionalidades e estrutura de pastas?"

Resposta: Apresentou um modelo padrão de documentação contendo visão geral, lista de recursos, arquitetura de diretórios e instruções de execução local.

Aceitei: A estrutura de tópicos sugerida para organizar o README.md do repositório de forma clara.

Rejei: Seções voltadas para instalação de dependências e servidores (como Node.js/npm), já que o projeto roda diretamente no navegador sem necessidade de build.

22/10 – Giovanni – Gemini Pro

Prompt: "Quais boas práticas de CSS (variáveis, sombras e microinterações) posso aplicar para harmonizar uma paleta em tons de verde e lima em cartões e botões sem prejudicar o contraste de leitura?"

Resposta: Recomendou o uso de variáveis CSS (:root) para centralizar a paleta, aplicação de sombras suaves para hierarquia visual e transições curtas (transition) nos estados de :hover.

Aceitei: A padronização das cores por meio de variáveis CSS e os efeitos sutis de interação nos cartões e botões.

Rejeitei: Sugestões de tons de verde-lima muito saturados para fundos de texto, pois comprometeriam a legibilidade; ajustamos manualmente os contrastes.

22/10 – Vanildo Filho – ChatGPT (Free)

Prompt: "Qual a melhor abordagem com CSS Grid e Flexbox dentro de media queries para reorganizar o mapa interativo e o painel lateral de informações em telas de celulares sem achatar o SVG do mapa?"

Resposta: Indicou a transição de um layout em duas colunas (desktop) para uma coluna única empilhada (mobile) abaixo de 768px, mantendo a proporção do mapa com largura fluida.

Aceitei: A estratégia de quebra de layout em coluna única para dispositivos móveis e o ajuste proporcional do contêiner do mapa.

Rejeitei: O ocultamento de elementos secundários no mobile sugerido pela ferramenta; preferimos reorganizá-los verticalmente para manter todas as informações acessíveis.

22/10 – João Marcomini – ChatGPT (Free)

Prompt: "Como melhorar a usabilidade e a área de toque de campos <select>, abas de navegação e botões em telas pequenas utilizando media queries no CSS?"

Resposta: Recomendou aumentar o espaçamento interno (padding), definir largura total (width: 100%) para seletores em telas menores e ajustar o tamanho das fontes para evitar zoom automático em navegadores móveis.

Aceitei: As diretrizes de espaçamento e redimensionamento dos controles de filtro e abas para melhorar a navegação por toque.

Rejeitei: Alterações de posicionamento fixo (position: fixed) nos filtros, pois cobriam parte do conteúdo útil da tela durante a rolagem.

29/10 – Giovanni – Gemini Pro

Prompt: "Tenho um objeto JavaScript com os dados turísticos e feriados de cada estado brasileiro. Como estruturar uma função limpa para filtrar e atualizar dinamicamente o DOM ao clicar no mapa ou mudar o <select> sem duplicar ouvintes de eventos?"

Resposta: Explicou o padrão de centralizar a atualização da interface em uma única função renderizadora acionada tanto pelo evento change do seletor quanto pelo click nas regiões do mapa.

Aceitei: A lógica de centralização da renderização, que evitou repetição de código no arquivo JavaScript e manteve o mapa e o menu sempre sincronizados.

Rejeitei: A sugestão de recriar toda a estrutura HTML via innerHTML a cada clique; optamos por atualizar apenas os nós de texto e atributos necessários para preservar a performance.

04/11 – Rafael Farina – ChatGPT (Free)

Prompt: "Por que o cálculo de feriados móveis (como Carnaval e Páscoa) no meu script JavaScript está apresentando diferença de um dia em determinados anos ao converter datas com new Date()?"

Resposta: Identificou que a criação de datas a partir de strings no formato YYYY-MM-DD é interpretada em UTC pelo JavaScript, sofrendo deslocamento de fuso horário no Brasil (UTC-3).

Aceitei: A correção técnica de instanciar as datas passando ano, mês e dia como parâmetros numéricos separados (new Date(ano, mes - 1, dia)), resolvendo o bug de fuso horário.

Rejeitei: A sugestão de importar uma biblioteca externa de datas (como Day.js), mantendo a solução nativa em JavaScript puro.

08/11 – Vanildo Filho – Claude (Free)

Prompt: "Quais atributos ARIA e ajustes de navegação por teclado devo adicionar às abas de informações (Resumo, Melhores Datas, Feriados e Galeria) para torná-las mais acessíveis?"

Resposta: Recomendou o uso dos atributos role="tablist", role="tab", aria-selected e o gerenciamento de foco para permitir a alternância entre abas sem depender exclusivamente do mouse.

Aceitei: A inclusão dos atributos semânticos de acessibilidade (aria-selected e role) nos botões das abas e a sincronização com o JavaScript.

Rejeitei: A navegação por setas direcionais complexa entre painéis, priorizando a navegação padrão via tecla Tab para manter o código simples e legível para toda a equipe.

12/11 – Lívia Ramos – Claude (Free)

Prompt: "Qual a forma mais segura e organizada de salvar a preferência de tema (Dark/Light) e a lista de estados favoritados do usuário usando localStorage, tratando possíveis erros caso o armazenamento esteja bloqueado?"

Resposta: Sugeriu encapsular as leituras e gravações do localStorage em funções auxiliares com blocos try/catch e serializar a lista de estados favoritos com JSON.stringify e JSON.parse.

Aceitei: O uso de blocos try/catch para evitar falhas na aplicação e a estrutura de persistência para o tema e os estados favoritos.

Rejeitei: A sugestão de sincronizar o tema automaticamente com o sistema operacional (prefers-color-scheme) a cada carregamento, pois queríamos que a escolha manual do usuário no botão do cabeçalho tivesse prioridade absoluta.

12/11 – Lívia Ramos – Gemini Pro

Prompt: "Revise este texto de resumo das novas funcionalidades implementadas (Modo Dark/Light, Favoritar Estados, Navegação Rápida para Feriados e ajustes no rodapé) para deixá-lo claro e objetivo para a documentação do projeto."

Resposta: Reorganizou os tópicos em formato de lista estruturada com destaque em negrito para cada funcionalidade e corrigiu pequenas redundâncias na descrição.

Aceitei: A clareza na organização dos tópicos para registrar as entregas da sprint na documentação da equipe.

Rejeitei: Termos técnicos excessivamente formais que fugiam do padrão simples adotado no restante da documentação do projeto.

16/11 – João Marcomini – Gemini Pro

Prompt: "Como implementar o carregamento preguiçoso (loading="lazy") e um tratamento de erro (onerror) na galeria de fotos dos estados para evitar imagens quebradas caso algum link falhe?"

Resposta: Explicou o uso do atributo nativo loading="lazy" nas tags <img> e a atribuição de uma imagem padrão de fallback no evento onerror.

Aceitei: A adição do atributo loading="lazy" para melhorar o tempo de carregamento inicial da página e a criação de uma imagem reserva local caso alguma foto não carregue.

Rejeitei: O uso de um observador de interseção manual (IntersectionObserver) em JavaScript, já que o atributo nativo do HTML atendeu perfeitamente à necessidade.
