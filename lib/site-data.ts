export interface ServiceArea {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroTag: string;
  heroH1: string;
  heroH2: string;
  heroSubtext: string;
  whatIs: string;
  whatIsDetails: string[];
  situations: string[];
  howWorks: string;
  howWorksSteps: { step: string; title: string; desc: string }[];
  whySeek: string;
  whySeekPoints: { title: string; desc: string }[];
  howFirmActs: string;
  howFirmActsPoints: { title: string; desc: string }[];
  faq: { question: string; answer: string }[];
}

export const FIRM_DATA = {
  name: 'Reis Galvão Advocacia',
  shortName: 'Reis Galvão',
  category: 'Escritório de Advocacia',
  tagline: 'Advocacia Estratégica em Campinas • SP',
  phoneDisplay: '(19) 98424-0366',
  phoneRaw: '+5519984240366',
  whatsappDisplay: '(19) 98424-0366',
  whatsappUrl: 'https://wa.me/5519984240366',
  email: 'contato@reisgalvaoadvocacia.com.br',
  oab: 'OAB/SP 412.980',
  workingHours: 'Segunda a Sexta, das 08h30 às 18h00',
  address: {
    street: 'Av. Campos Sales, 532',
    complement: 'Sala 122',
    neighborhood: 'Centro',
    city: 'Campinas',
    state: 'SP',
    stateFull: 'São Paulo',
    postalCode: '13010-081',
    country: 'Brasil',
    formatted: 'Av. Campos Sales, 532 - Sala 122 - Centro, Campinas - SP, 13010-081',
  },
  authority: {
    reviewsCount: '154',
    rating: '5,0',
    stars: '★★★★★',
    highlight1: '154 avaliações com nota 5,0',
    highlight2: 'Atendimento jurídico personalizado',
    highlight3: 'Atuação em Campinas e região',
  },
  baseUrl: process.env.APP_URL || 'https://reisgalvaoadvocacia.com.br',
};

export const SERVICES: ServiceArea[] = [
  {
    slug: 'direito-bancario',
    title: 'Direito Bancário',
    metaTitle: 'Direito Bancário em Campinas | Reis Galvão Advocacia',
    metaDescription:
      'Orientação jurídica em Direito Bancário em Campinas. Conheça a atuação do Reis Galvão Advocacia e fale com um advogado sobre contratos, dívidas e financiamentos.',
    heroTag: 'DIREITO BANCÁRIO • CAMPINAS/SP',
    heroH1: 'Direito Bancário em Campinas',
    heroH2: 'Orientação jurídica para proteger seus interesses e encontrar caminhos adequados para o seu caso.',
    heroSubtext:
      'Atuação voltada à análise detalhada de relações financeiras, contratos de financiamento, renegociação de dívidas e proteção patrimonial contra práticas abusivas de instituições financeiras em Campinas e região.',
    whatIs:
      'O Direito Bancário é o ramo jurídico que regula as relações entre pessoas físicas ou jurídicas e instituições financeiras. No escritório Reis Galvão Advocacia, a atuação busca equilibrar as relações contratuais, identificando cláusulas excessivamente onerosas, cobranças indevidas e oportunidades legítimas de reestruturação de passivos.',
    whatIsDetails: [
      'Análise de legalidade de encargos e tarifas financeiras',
      'Verificação da regularidade de garantias fiduciárias e hipotecas',
      'Defesa em procedimentos de execução e busca e apreensão',
      'Orientação técnica em renegociações extrajudiciais com bancos',
    ],
    situations: [
      'Contratos de financiamento imobiliário e veicular com indícios de encargos abusivos',
      'Execuções de títulos extrajudiciais promovidas por instituições financeiras',
      'Cobranças de tarifas, seguros embutidos ou taxas não pactuadas expressamente',
      'Endividamento bancário elevado necessitando de planejamento para renegociação estruturada',
      'Fraudes eletrônicas, operações não reconhecidas e golpes bancários digitais',
      'Ações de busca e apreensão de veículos e defesa dos direitos do consumidor devedor',
    ],
    howWorks:
      'O atendimento em Direito Bancário começa com a obtenção e auditoria dos instrumentos contratuais e extratos bancários, avaliando a viabilidade jurídica antes de qualquer medida.',
    howWorksSteps: [
      {
        step: '01',
        title: 'Triagem Documental',
        desc: 'Exame de contratos, termos de adesão, extratos de evolução da dívida e notificações bancárias.',
      },
      {
        step: '02',
        title: 'Diagnóstico de Viabilidade',
        desc: 'Identificação de eventuais desproporções, cobranças sem causa ou descumprimentos normativos.',
      },
      {
        step: '03',
        title: 'Tentativa de Composição',
        desc: 'Busca de soluções negociadas diretamente com canais jurídicos dos bancos para mitigação de custos.',
      },
      {
        step: '04',
        title: 'Patrocínio Judicial Estratégico',
        desc: 'Ingresso ou defesa processual perante as varas cíveis da comarca de Campinas quando indispensável.',
      },
    ],
    whySeek:
      'Instituições bancárias possuem estruturas jurídicas padronizadas. Buscar orientação profissional permite ao cliente compreender o real alcance de suas obrigações, evitar perdas patrimoniais injustas e negociar em condições de igualdade técnica.',
    whySeekPoints: [
      {
        title: 'Prevenção de Danos',
        desc: 'Evita a consolidação de garantias e bloqueios judiciais sem a devida contestação técnica.',
      },
      {
        title: 'Clareza Financeira',
        desc: 'Permite saber exatamente o que é devido de acordo com a jurisprudência consolidada.',
      },
      {
        title: 'Tomada de Decisão Segura',
        desc: 'Oferece dados concretos sobre custos e riscos antes de aceitar repactuações bancárias unilaterais.',
      },
    ],
    howFirmActs:
      'O Reis Galvão Advocacia atua de forma transparente e sóbria, orientando o cliente sobre o que é viável segundo o entendimento dos tribunais paulistas e superiores, sem promessas ilusórias de redução mágica de dívidas.',
    howFirmActsPoints: [
      {
        title: 'Análise individualizada do contrato',
        desc: 'Cada instrumento é estudado em suas particularidades e taxas efetivas.',
      },
      {
        title: 'Orientação consultiva preventiva',
        desc: 'Esclarecimento claro antes de o cliente assinar confissões ou aditivos.',
      },
      {
        title: 'Negociação assistida',
        desc: 'Intermediação qualificada para obter descontos e prazos viáveis.',
      },
      {
        title: 'Atuação contenciosa vigorosa',
        desc: 'Defesa consistente em embargos à execução, ações revisionais e medidas cautelares.',
      },
    ],
    faq: [
      {
        question: 'O escritório atende clientes devedores de bancos em Campinas?',
        answer:
          'Sim. O Reis Galvão Advocacia atua na orientação de pessoas físicas e jurídicas domiciliadas em Campinas e região metropolitana que enfrentam cobranças, execuções de títulos bancários ou busca e apreensão.',
      },
      {
        question: 'É possível revisar qualquer contrato de financiamento?',
        answer:
          'Não todo contrato apresenta irregularidade. É fundamental realizar uma análise prévia das cláusulas e da taxa pactuada em comparação com a taxa média de mercado divulgada pelo Banco Central para verificar se há fundamento jurídico legítimo.',
      },
      {
        question: 'Como proceder ao receber uma notificação de busca e apreensão?',
        answer:
          'É imprescindível procurar orientação jurídica imediata, visto que os prazos processuais para pagamento integral ou apresentação de defesa na comarca de Campinas são curtos e estritos.',
      },
      {
        question: 'O que fazer em caso de fraude ou transferências bancárias indevidas?',
        answer:
          'Deve-se registrar Boletim de Ocorrência, comunicar formalmente a instituição financeira gerando protocolo de contestação e reunir comprovantes do ocorrido para fundamentar eventual pedido de reparação.',
      },
      {
        question: 'A renegociação bancária exige sempre um processo judicial?',
        answer:
          'Não. Priorizamos, sempre que cabível, a resolução alternativa de conflitos e a negociação direta com as gerências e assessorias dos bancos, recorrendo ao Judiciário quando os canais consensuais forem infrutíferos.',
      },
    ],
  },
  {
    slug: 'direito-de-familia-e-sucessoes',
    title: 'Direito de Família e Sucessões',
    metaTitle: 'Direito de Família e Sucessões em Campinas | Reis Galvão Advocacia',
    metaDescription:
      'Orientação jurídica em Direito de Família e Sucessões em Campinas. Divórcio, inventário, partilha e planejamento sucessório com acolhimento e técnica.',
    heroTag: 'DIREITO DE FAMÍLIA E SUCESSÕES • CAMPINAS/SP',
    heroH1: 'Direito de Família e Sucessões em Campinas',
    heroH2: 'Orientação jurídica para proteger seus interesses e encontrar caminhos adequados para o seu caso.',
    heroSubtext:
      'Atuação jurídica em questões familiares e sucessórias, com orientação individualizada para situações que exigem segurança, cuidado e compreensão das particularidades de cada caso em Campinas.',
    whatIs:
      'O Direito de Família e Sucessões abrange os atos mais sensíveis da vida civil, regulando os vínculos de parentesco, dissoluções de uniões, guarda de filhos e a transmissão patrimonial causa mortis. Nossa abordagem prima pela conciliação, preservação das relações familiares e resguardo estrito dos direitos patrimoniais.',
    whatIsDetails: [
      'Condução de inventários judiciais e extrajudiciais perante tabelionatos de Campinas',
      'Estruturação de divórcios consensuais e representação em procedimentos litigiosos',
      'Definição e revisão de pensão alimentícia, guarda e convivência familiar',
      'Planejamento sucessório patrimonial para resguardo de herdeiros e prevenção de litígios',
    ],
    situations: [
      'Abertura e processamento de inventário de bens móveis e imóveis',
      'Divórcios com necessidade de partilha de patrimônio e empresas',
      'Regulamentação de visitas, convivência e guarda compartilhada',
      'Ações de alimentos, pedidos de exoneração ou cobrança de pensão em atraso',
      'Reconhecimento e dissolução de união estável com meação de bens',
      'Elaboração de testamentos e planejamento patrimonial preventivo',
    ],
    howWorks:
      'Em matéria de família e herança, iniciamos pelo mapeamento dos fatos e documentos, privilegiando caminhos consensuais com escrituras em cartório sempre que os requisitos legais forem atendidos.',
    howWorksSteps: [
      {
        step: '01',
        title: 'Escuta Qualificada',
        desc: 'Compreensão detalhada do contexto familiar, necessidades dos envolvidos e expectativas.',
      },
      {
        step: '02',
        title: 'Levantamento de Acervo',
        desc: 'Reunião de certidões, títulos de propriedade, extratos e certidões cíveis e fiscais.',
      },
      {
        step: '03',
        title: 'Diálogo e Construção de Acordos',
        desc: 'Mediação jurídica para partilhas equilibradas e preservação de vínculos.',
      },
      {
        step: '04',
        title: 'Formalização Ágil',
        desc: 'Elaboração das minutas e petições para homologação judicial ou lavratura cartorária.',
      },
    ],
    whySeek:
      'Decisões em família envolvem repercussões duradouras financeiras e emocionais. Uma orientação jurídica responsável garante que acordos sejam juridicamente válidos, sem vícios ocultos e respeitando a legítima dos herdeiros.',
    whySeekPoints: [
      {
        title: 'Segurança Documental',
        desc: 'Garante regularidade registral de imóveis e partilhas definitivas.',
      },
      {
        title: 'Preservação de Vínculos',
        desc: 'Estimula soluções que evitam o desgaste prolongado em salas de audiência.',
      },
      {
        title: 'Economia Tributária Legal',
        desc: 'Orienta sobre o recolhimento adequado do ITCMD e custos cartorários.',
      },
    ],
    howFirmActs:
      'O Reis Galvão Advocacia oferece discrição absoluta, postura conciliadora firme e conhecimento das práticas forenses das Varas de Família e Cartórios de Notas de Campinas.',
    howFirmActsPoints: [
      {
        title: 'Atendimento humanizado e reservado',
        desc: 'Espaço seguro para tratar de matérias sensíveis com empatia técnica.',
      },
      {
        title: 'Agilidade na via extrajudicial',
        desc: 'Priorização de inventários e divórcios rápidos em cartório quando viável.',
      },
      {
        title: 'Mediação de impasses patrimoniais',
        desc: 'Busca ativa de termos de acordo justos entre coerdeiros e ex-cônjuges.',
      },
      {
        title: 'Defesa vigorosa dos interesses do cliente',
        desc: 'Representação técnica incisiva quando a via litigiosa for a única saída.',
      },
    ],
    faq: [
      {
        question: 'Qual a diferença entre inventário judicial e extrajudicial?',
        answer:
          'O inventário extrajudicial ocorre em Cartório de Notas de forma mais célere quando todos os herdeiros são maiores, capazes e estão de acordo com a partilha. O inventário judicial é exigido quando há testamento, herdeiros menores ou discordância quanto aos bens.',
      },
      {
        question: 'Quanto tempo tenho para abrir o inventário em Campinas/SP?',
        answer:
          'A legislação prevê o prazo de 60 dias a contar da data do falecimento para abertura, a fim de evitar multas sobre o imposto de transmissão (ITCMD) incidente sobre o espólio.',
      },
      {
        question: 'É possível fazer divórcio em cartório havendo filhos menores?',
        answer:
          'Recentemente, novas diretrizes permitem o divórcio extrajudicial mesmo com menores, desde que as questões de guarda, visitas e alimentos já tenham sido previamente ajustadas e homologadas judicialmente.',
      },
      {
        question: 'Como é calculada a pensão alimentícia?',
        answer:
          'Não há um percentual fixo em lei. A fixação da pensão equilibra a necessidade de quem recebe com a capacidade contributiva de quem paga, analisando despesas com saúde, educação, moradia e sustento digno.',
      },
      {
        question: 'O escritório atua na prevenção de conflitos sucessórios?',
        answer:
          'Sim. Realizamos consultoria em planejamento sucessório e testamentos para orientar a melhor forma de destinação patrimonial, respeitando a legítima e prevenindo futuras disputas entre herdeiros.',
      },
    ],
  },
  {
    slug: 'direito-do-consumidor',
    title: 'Direito do Consumidor',
    metaTitle: 'Direito do Consumidor em Campinas | Reis Galvão Advocacia',
    metaDescription:
      'Orientação e defesa em Direito do Consumidor em Campinas. Produtos defeituosos, serviços com vício, negativação indevida e reparação de danos.',
    heroTag: 'DIREITO DO CONSUMIDOR • CAMPINAS/SP',
    heroH1: 'Direito do Consumidor em Campinas',
    heroH2: 'Orientação jurídica para proteger seus interesses e encontrar caminhos adequados para o seu caso.',
    heroSubtext:
      'Orientação e defesa dos direitos do consumidor em situações envolvendo produtos, serviços, contratos, cobranças e relações de consumo em Campinas e região metropolitana.',
    whatIs:
      'O Direito do Consumidor assegura o equilíbrio nas relações de mercado com base no Código de Defesa do Consumidor (CDC). Nosso escritório atua na defesa de consumidores vulneráveis diante de falhas na prestação de serviços por concessionárias públicas, bancos, planos de saúde, companhias aéreas e fornecedores de produtos.',
    whatIsDetails: [
      'Exclusão de restrições indevidas em órgãos de proteção ao crédito (SPC/Serasa)',
      'Ações por vícios e defeitos de produtos não sanados no prazo legal',
      'Defesa contra negativas de cobertura de procedimentos por operadoras de saúde',
      'Reparação de prejuízos decorrentes de atrasos de voos, cancelamentos e extravios de bagagem',
    ],
    situations: [
      'Inscrição indevida em cadastros restritivos por dívidas inexistentes ou já pagas',
      'Recusa injustificada de fornecimento de medicamentos ou cirurgias pelo plano de saúde',
      'Atraso na entrega de imóveis comprados na planta e devolução de valores em rescisões',
      'Cobranças abusivas de concessionárias de energia, água e telecomunicações',
      'Cancelamento unilateral de passagens aéreas e problemas em viagens',
      'Compra de veículos ou bens duráveis com defeitos ocultos sem reparo pela garantia',
    ],
    howWorks:
      'Analisamos a cadeia de consumo e as provas disponíveis (protocolos de SAC, notas fiscais, contratos e trocas de mensagens) para definir a medida administrativa ou judicial mais assertiva.',
    howWorksSteps: [
      {
        step: '01',
        title: 'Verificação da Relação de Consumo',
        desc: 'Constatação do enquadramento como consumidor final e fornecedor conforme o CDC.',
      },
      {
        step: '02',
        title: 'Constituição de Prova',
        desc: 'Organização de números de protocolos, e-mails, contratos e orçamentos de reparo.',
      },
      {
        step: '03',
        title: 'Tentativa Prévia / Notificação',
        desc: 'Envio de notificação extrajudicial para oportunidade de solução espontânea pelo fornecedor.',
      },
      {
        step: '04',
        title: 'Ação Reparatória e Pedido Liminar',
        desc: 'Ajuizamento com pedido liminar de urgência perante o Juizado Especial ou Vara Cível de Campinas.',
      },
    ],
    whySeek:
      'Grandes corporações frequentemente apostam na inércia dos clientes insatisfeitos. O auxílio de um escritório qualificado restabelece a igualdade técnica, faz cumprir o dever de indenizar e resguarda o patrimônio moral e financeiro do consumidor.',
    whySeekPoints: [
      {
        title: 'Celeridade em Urgências',
        desc: 'Pedidos de tutela de urgência (liminares) para restabelecimento de serviços e saúde.',
      },
      {
        title: 'Reparação Integral',
        desc: 'Cobrança não apenas do ressarcimento material, mas da compensação por danos morais.',
      },
      {
        title: 'Inversão do Ônus da Prova',
        desc: 'Aplicação técnica dos mecanismos processuais que obrigam o fornecedor a provar o que alega.',
      },
    ],
    howFirmActs:
      'O Reis Galvão Advocacia atua com responsabilidade ética, esclarecendo ao cliente os limites da indenização de acordo com a jurisprudência atualizada dos tribunais paulistas.',
    howFirmActsPoints: [
      {
        title: 'Auditoria de protocolos e danos',
        desc: 'Identificação objetiva do descumprimento do dever de qualidade.',
      },
      {
        title: 'Notificações extrajudiciais fundamentadas',
        desc: 'Comunicação técnica para tentativa de acordo sem custos excessivos.',
      },
      {
        title: 'Atuação célere nos Juizados e Varas Cíveis',
        desc: 'Acompanhamento próximo de cada ato processual na comarca de Campinas.',
      },
      {
        title: 'Postura ética e responsável',
        desc: 'Sem teses aventureiras ou promessas desproporcionais de enriquecimento.',
      },
    ],
    faq: [
      {
        question: 'O que caracteriza negativação indevida do nome?',
        answer:
          'Ocorre quando uma instituição inscreve o CPF do consumidor no SPC ou Serasa sem que exista dívida legítima, quando a dívida já foi quitada ou decorre de fraude praticada por terceiros.',
      },
      {
        question: 'Qual o prazo para o fornecedor sanar um vício no produto?',
        answer:
          'Pelo artigo 18 do CDC, o fornecedor tem o prazo máximo de 30 dias para sanar o vício. Ultrapassado esse prazo sem solução, o consumidor pode exigir a substituição do produto, a restituição imediata da quantia paga ou o abatimento proporcional do preço.',
      },
      {
        question: 'O plano de saúde pode recusar tratamento indicado pelo médico?',
        answer:
          'Se a patologia tem cobertura contratual, a jurisprudência consolidada estabelece que cabe ao médico assistente, e não à operadora de saúde, definir a melhor conduta terapêutica para o paciente.',
      },
      {
        question: 'É necessário tentar o Procon antes de contratar um advogado?',
        answer:
          'Não é obrigatório. O Procon é um canal administrativo importante, mas o cidadão pode buscar assessoria jurídica especializada diretamente para adoção de providências com força judicial.',
      },
      {
        question: 'Como funciona a indenização em atraso ou cancelamento de voos?',
        answer:
          'Se a companhia aérea não prestar a assistência material devida (alimentação, hospedagem e reacomodação) e o passageiro sofrer atraso expressivo ou perda de compromissos essenciais, cabe reparação por danos materiais e morais.',
      },
    ],
  },
  {
    slug: 'direito-trabalhista',
    title: 'Direito Trabalhista',
    metaTitle: 'Direito Trabalhista em Campinas | Reis Galvão Advocacia',
    metaDescription:
      'Orientação jurídica em Direito Trabalhista em Campinas. Verbas rescisórias, horas extras, rescisão indireta e relações de trabalho no polo de Campinas.',
    heroTag: 'DIREITO TRABALHISTA • CAMPINAS/SP',
    heroH1: 'Direito Trabalhista em Campinas',
    heroH2: 'Orientação jurídica para proteger seus interesses e encontrar caminhos adequados para o seu caso.',
    heroSubtext:
      'Orientação jurídica para questões relacionadas às relações de trabalho, buscando compreender cada situação e apresentar os caminhos jurídicos adequados no contexto econômico de Campinas e região.',
    whatIs:
      'O Direito do Trabalho tutela as relações entre empregados e empregadores, garantindo a dignidade da pessoa humana e o cumprimento estrito das normas da CLT e convenções sindicais. Nosso escritório atua na orientação jurídica e no contencioso trabalhista na Justiça do Trabalho da 15ª Região (Campinas).',
    whatIsDetails: [
      'Cálculo e cobrança de diferenças em verbas rescisórias e multas celetistas',
      'Apuração de horas suplementares, intervalos intrajornada e prontidão',
      'Pedidos de rescisão indireta em razão de descumprimento contratual patronal',
      'Reconhecimento de vínculo de emprego e combate a pejotizações ilícitas',
    ],
    situations: [
      'Demissão sem justa causa sem o pagamento integral das parcelas devidas',
      'Jornadas exaustivas habituais sem o pagamento correto de horas extras e adicionais',
      'Desvio ou acúmulo de funções sem a devida contraprestação salarial',
      'Contratação irregular por meio de pessoa jurídica (PJ) para mascarar relação de emprego',
      'Ambiente de trabalho hostil, assédio moral ou desrespeito à segurança do colaborador',
      'Doenças profissionais e acidentes com ausência de amparo da empresa',
    ],
    howWorks:
      'Realizamos o levantamento documental completo (holerites, cartões de ponto, extratos de FGTS e contratos) para apurar créditos reais de acordo com a legislação e os entendimentos do Tribunal Regional do Trabalho da 15ª Região.',
    howWorksSteps: [
      {
        step: '01',
        title: 'Conferência Documental',
        desc: 'Exame detido dos recibos de pagamento, termos de rescisão e extratos de depósito.',
      },
      {
        step: '02',
        title: 'Cálculo Preliminar Técnico',
        desc: 'Estimativa fundada dos valores devidos conforme tabelas salariais e convenções.',
      },
      {
        step: '03',
        title: 'Verificação de Prazos Prescricionais',
        desc: 'Atenção aos marcos de dois anos após a extinção do contrato e cinco anos de verbas.',
      },
      {
        step: '04',
        title: 'Ajuizamento e Acompanhamento na 15ª Região',
        desc: 'Representação em audiências inaugurais, de instrução e fase recursal.',
      },
    ],
    whySeek:
      'Relações laborais exigem cálculo preciso e conhecimento das decisões dos juízes locais. O acompanhamento profissional previne a perda de direitos pelo decurso de prazos e garante que o acerto rescisório respeite integralmente a lei.',
    whySeekPoints: [
      {
        title: 'Precisão nos Cálculos',
        desc: 'Evita a aceitação passiva de quitações que deixam de fora reflexos essenciais.',
      },
      {
        title: 'Equilíbrio na Negociação',
        desc: 'Impede pressões indevidas para acordos extrajudiciais desfavoráveis.',
      },
      {
        title: 'Defesa de Reputação e Saúde',
        desc: 'Resguarda direitos decorrentes de assédio ou lesões físicas no trabalho.',
      },
    ],
    howFirmActs:
      'O Reis Galvão Advocacia orienta com franqueza sobre o que tem respaldo probatório, preparando o processo com documentos e testemunhas idôneas para sustentar a demanda com solidez.',
    howFirmActsPoints: [
      {
        title: 'Análise minuciosa de provas',
        desc: 'Construção fundamentada antes de propor qualquer ação.',
      },
      {
        title: 'Comunicação contínua',
        desc: 'Cliente informado sobre todas as datas de audiências e propostas de acordo.',
      },
      {
        title: 'Postura ética e técnica',
        desc: 'Foco nos direitos efetivamente lesados sem alegações vazias.',
      },
      {
        title: 'Experiência no foro de Campinas',
        desc: 'Familiaridade com os procedimentos das Varas do Trabalho da 15ª Região.',
      },
    ],
    faq: [
      {
        question: 'Qual o prazo para ingressar com uma ação trabalhista?',
        answer:
          'O trabalhador tem até 2 anos a partir do encerramento do contrato de trabalho para propor ação, podendo cobrar direitos relativos aos últimos 5 anos de vínculo (prescrição quinquenal).',
      },
      {
        question: 'O que é a rescisão indireta do contrato de trabalho?',
        answer:
          'É quando o empregado requer a extinção do vínculo por falta grave praticada pelo empregador (como atrasos reiterados de salários, não recolhimento de FGTS ou assédio), recebendo todas as verbas como se tivesse sido demitido sem justa causa.',
      },
      {
        question: 'O que caracteriza a pejotização fraudulenta?',
        answer:
          'Ocorre quando o profissional é obrigado a abrir uma empresa (PJ) para emitir notas fiscais, mas atua na prática com subordinação, habitualidade, pessoalidade e onerosidade, preenchendo todos os requisitos de um empregado celetista.',
      },
      {
        question: 'Como comprovar a realização de horas extras se a empresa não permitia o registro?',
        answer:
          'A prova pode ser feita por meio de depoimentos de testemunhas, trocas de e-mails e mensagens corporativas fora do expediente, relatórios de login em sistemas e registros de câmeras ou catracas.',
      },
      {
        question: 'O escritório atua na conciliação prévia em demandas trabalhistas?',
        answer:
          'Sim. Analisamos eventuais propostas de composição amigável apresentadas pelas empresas para verificar se atendem de forma justa e vantajosa aos interesses do cliente, sem necessidade de litígio prolongado.',
      },
    ],
  },
  {
    slug: 'direito-previdenciario',
    title: 'Direito Previdenciário',
    metaTitle: 'Direito Previdenciário em Campinas | Reis Galvão Advocacia',
    metaDescription:
      'Orientação jurídica em Direito Previdenciário em Campinas. Planejamento de aposentadoria, benefícios do INSS, auxílios e recursos administrativos.',
    heroTag: 'DIREITO PREVIDENCIÁRIO • CAMPINAS/SP',
    heroH1: 'Direito Previdenciário em Campinas',
    heroH2: 'Orientação jurídica para proteger seus interesses e encontrar caminhos adequados para o seu caso.',
    heroSubtext:
      'Orientação jurídica relacionada a benefícios previdenciários e questões envolvendo direitos perante a Previdência Social (INSS) para trabalhadores e segurados em Campinas.',
    whatIs:
      'O Direito Previdenciário assegura aos cidadãos a proteção social em momentos de inatividade, incapacidade, maternidade ou idade avançada. Nosso trabalho foca no planejamento prévio e na correção de pendências no cadastro do INSS (CNIS), viabilizando o melhor benefício legalmente admitido.',
    whatIsDetails: [
      'Planejamento previdenciário e cálculo de regras de transição pós-Reforma',
      'Concessão e restabelecimento de aposentadorias por tempo, idade e especial',
      'Requerimento de benefícios por incapacidade temporária (auxílio-doença) e permanente',
      'Recursos administrativos e ações perante a Justiça Federal de Campinas',
    ],
    situations: [
      'Dúvidas sobre a melhor data e regra de transição para requerer a aposentadoria',
      'Indicação de períodos em empresas sem recolhimento correto no extrato CNIS',
      'Trabalho em condições insalubres ou perigosas necessitando de enquadramento especial',
      'Negativa injustificada de concessão de benefício pela agência do INSS em Campinas',
      'Cessação indevida de auxílio por incapacidade em perícia médica da autarquia',
      'Revisões de valor de benefício quando constatado erro de cálculo na concessão',
    ],
    howWorks:
      'Avaliamos todo o histórico contributivo do segurado, digitalizando carteiras de trabalho, certidões de tempo de serviço e documentos de atividade especial (como PPP e LTCAT) para simular com precisão cada cenário.',
    howWorksSteps: [
      {
        step: '01',
        title: 'Auditoria do Extrato Previdenciário',
        desc: 'Conferência detalhada de cada vínculo, remuneração e indicador no CNIS.',
      },
      {
        step: '02',
        title: 'Simulação de Regras de Transição',
        desc: 'Cálculo comparativo das diferentes regras pós-EC 103/2019.',
      },
      {
        step: '03',
        title: 'Saneamento Prévio de Pendências',
        desc: 'Regularização de vínculos ausentes e acerto de dados cadastrais antes do pedido.',
      },
      {
        step: '04',
        title: 'Protocolo e Defesa do Benefício',
        desc: 'Acompanhamento do requerimento administrativo e ajuizamento na Justiça Federal se houver indeferimento.',
      },
    ],
    whySeek:
      'Aposentar-se é uma das decisões patrimoniais mais determinantes da vida adulta. Um pedido precipitado ou com pendências não resolvidas pode reduzir permanentemente a renda mensal do segurado ou postergar indevidamente o benefício.',
    whySeekPoints: [
      {
        title: 'Segurança Financeira',
        desc: 'Garante que nenhuma contribuição válida seja esquecida no cálculo da média.',
      },
      {
        title: 'Tempo Recuperado',
        desc: 'Identificação de períodos rurais, militares ou especiais que antecipam a concessão.',
      },
      {
        title: 'Defesa Técnica Contra Erros',
        desc: 'Contestação embasada de decisões automáticas equivocadas do sistema do INSS.',
      },
    ],
    howFirmActs:
      'O Reis Galvão Advocacia analisa com responsabilidade matemática e jurídica cada documento, orientando o cliente sobre o momento exato em que seu direito se consolida com a melhor renda possível.',
    howFirmActsPoints: [
      {
        title: 'Cálculos atuariais e jurídicos prévios',
        desc: 'Simulações reais para fundamentar a escolha do melhor momento.',
      },
      {
        title: 'Acompanhamento do processo administrativo',
        desc: 'Atuação atenta desde o protocolo inicial perante o INSS.',
      },
      {
        title: 'Atuação na Justiça Federal de Campinas',
        desc: 'Manejo de mandados de segurança e ações ordinárias quando a via administrativa falhar.',
      },
      {
        title: 'Transparência de prognóstico',
        desc: 'Informações claras sobre tempo de espera e perspectivas reais.',
      },
    ],
    faq: [
      {
        question: 'O que é o planejamento previdenciário e quando devo fazê-lo?',
        answer:
          'É um estudo minucioso da vida contributiva do trabalhador para identificar a regra de aposentadoria mais vantajosa financeiramente e o momento ideal para solicitar o benefício. Recomenda-se realizá-lo alguns anos antes de atingir os requisitos mínimos.',
      },
      {
        question: 'O que fazer se o INSS demorar para analisar o pedido de aposentadoria?',
        answer:
          'A legislação prevê prazos estritos para resposta do INSS. Quando há demora desproporcional e injustificada, é cabível a impetração de Mandado de Segurança na Justiça Federal de Campinas para compelir a autarquia a proferir decisão.',
      },
      {
        question: 'Tempo de serviço especial em atividade insalubre ainda pode ser convertido?',
        answer:
          'O período trabalhado sob condições nocivas à saúde até a promulgação da Reforma da Previdência (13/11/2019) pode ser convertido em tempo comum com acréscimo de tempo, exigindo laudos técnicos como PPP e LTCAT.',
      },
      {
        question: 'O escritório atende pedidos de benefício por incapacidade (auxílio-doença)?',
        answer:
          'Sim. Orientamos segurados que necessitam de auxílio por incapacidade temporária ou aposentadoria por incapacidade permanente, auxiliando na organização de relatórios médicos e na contestação de perícias indeferidas.',
      },
      {
        question: 'É possível recuperar contribuições que não constam no extrato do CNIS?',
        answer:
          'Sim. Períodos trabalhados comprovados por meio de carteira de trabalho (CTPS), holerites, fichas de registro de empregados ou ações trabalhistas transitadas em julgado podem ser averbados no CNIS para fins de tempo e cálculo.',
      },
    ],
  },
];

export const GENERAL_FAQ = [
  {
    question: 'Como funciona o primeiro atendimento jurídico no Reis Galvão Advocacia?',
    answer:
      'O primeiro contato é realizado mediante agendamento prévio pelo WhatsApp ou formulário. Nessa oportunidade, você expõe o contexto de sua necessidade, apresenta os documentos essenciais e nossa equipe jurídica realiza a análise de viabilidade para indicar os caminhos técnicos aplicáveis ao seu caso.',
  },
  {
    question: 'O Reis Galvão Advocacia atende em Campinas?',
    answer:
      'Sim. Nosso escritório possui sede física instalada no Centro de Campinas/SP (Av. Campos Sales, 532, Sala 122), atendendo clientes de toda a cidade, da Região Metropolitana de Campinas (RMC) e do interior paulista.',
  },
  {
    question: 'Quais áreas do Direito o escritório atende?',
    answer:
      'Atuamos de forma especializada em cinco áreas fundamentais: Direito Bancário, Direito de Família e Sucessões, Direito do Consumidor, Direito Trabalhista e Direito Previdenciário.',
  },
  {
    question: 'O escritório trabalha com Direito Bancário em Campinas?',
    answer:
      'Sim. Oferecemos orientação jurídica em contratos de financiamento, repactuação de passivos bancários, defesa em execuções de títulos de crédito e ações de busca e apreensão movidas por instituições financeiras.',
  },
  {
    question: 'O escritório atende questões de Direito de Família e Sucessões?',
    answer:
      'Sim. Prestamos assessoria em inventários judiciais e extrajudiciais perante tabelionatos de Campinas, divórcios, partilha de bens, pensão alimentícia, guarda de filhos e planejamento sucessório preventivo.',
  },
  {
    question: 'Como funciona a orientação em Direito do Consumidor?',
    answer:
      'Examinamos os documentos e protocolos comprobatórios da relação de consumo para defender seus direitos em casos de vícios em produtos, negativações indevidas em cadastros de crédito, abusos de concessionárias e recusas de cobertura por planos de saúde.',
  },
  {
    question: 'O escritório atua em questões trabalhistas?',
    answer:
      'Sim. Atuamos perante a Justiça do Trabalho da 15ª Região (Campinas), orientando e representando trabalhadores em matérias como rescisão de contrato, verbas rescisórias pendentes, horas extras e rescisão indireta.',
  },
  {
    question: 'O escritório atende demandas previdenciárias?',
    answer:
      'Sim. Realizamos planejamento previdenciário minucioso, acertos cadastrais no CNIS, requerimentos de aposentadorias nas regras de transição da Reforma e defesa em benefícios negados pelo INSS.',
  },
  {
    question: 'Como entrar em contato com o escritório?',
    answer:
      'Você pode entrar em contato diretamente pelo WhatsApp do escritório através do número (19) 98424-0366 ou preenchendo o formulário seguro de atendimento disponível em nossa página de contato.',
  },
  {
    question: 'Onde fica o Reis Galvão Advocacia em Campinas?',
    answer:
      'Nosso escritório está localizado na Av. Campos Sales, 532, Sala 122, no Centro de Campinas - SP, CEP 13010-081, ponto de fácil acesso na região central da cidade. Atendimentos presenciais ocorrem com agendamento prévio para garantir total privacidade.',
  },
];
