export const clinic = {
  name: "Dra. Fabiana Lustosa",
  role: "Endocrinologista em Fortaleza",
  crm: "CRM-CE 6123",
  rqe: "RQE 6609",
  whatsapp: "5585988896437",
  whatsappDisplay: "(85) 98889-6437",
  email: "drafabianalustosa@gmail.com",
  instagram: "drafabianalustosa.endocrino",
  instagramUrl: "https://www.instagram.com/drafabianalustosa.endocrino",
  addressLine: "Av. Dom Luís, 1233 — 20º andar, sala 2007",
  addressArea: "Meireles — Fortaleza — CE — CEP 60160-230",
  building: "Harmony Medical Center",
  hours: "Segunda a Sexta, das 8h às 18h",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Harmony+Medical+Center+Av+Dom+Luís+1233+Meireles+Fortaleza",
};

export const whatsappLink = (msg?: string) =>
  `https://wa.me/${clinic.whatsapp}${
    msg ? `?text=${encodeURIComponent(msg)}` : ""
  }`;

export const credentials = [
  "Formada UFC",
  "Residência USP",
  "Mestrado UNIFESP",
  "Membro da SBEM",
];

export type Treatment = {
  slug: string;
  title: string;
  short: string;
  body: string;
  forWho: string[];
};

export const treatments: Treatment[] = [
  {
    slug: "emagrecimento",
    title: "Emagrecimento",
    short:
      "Investigação metabólica e hormonal completa antes de qualquer prescrição.",
    body: "Emagrecimento não é sobre força de vontade. É sobre entender o que o seu metabolismo, seus hormônios e o seu histórico clínico estão fazendo com o seu corpo. Avaliamos resistência à insulina, função tireoidiana, níveis hormonais, sono e composição corporal pela bioimpedância InBody, montando uma estratégia real, que pode incluir ou não medicamentos modernos como semaglutida e tirzepatida.",
    forWho: [
      "Tentou várias dietas sem resultado duradouro",
      "Tem dificuldade de perder peso mesmo comendo pouco",
      "Suspeita de problema hormonal ou metabólico",
      "Quer usar semaglutida ou tirzepatida com segurança",
      "Perdeu peso mas voltou tudo rapidamente",
    ],
  },
  {
    slug: "menopausa",
    title: "Menopausa e climatério",
    short:
      "Reposição hormonal bem indicada que transforma a qualidade de vida.",
    body: "Fogacho, insônia, ganho de gordura abdominal, irritabilidade, queda de libido, cansaço sem causa aparente. Esses sintomas não são obrigatórios da menopausa, são sinais de que o seu corpo precisa de suporte hormonal. A terapia de reposição hormonal, quando bem indicada, transforma a qualidade de vida. Avaliamos benefícios, riscos e contraindicações antes de qualquer prescrição.",
    forWho: [
      "Está na pré-menopausa, menopausa ou pós-menopausa",
      "Sofre com fogachos, suores noturnos ou insônia",
      "Percebeu aumento de gordura abdominal após os 45 anos",
      "Quer entender se a TRH é indicada para o seu caso",
      "Tem histórico familiar e quer avaliação de risco",
    ],
  },
  {
    slug: "diabetes",
    title: "Controle do diabetes",
    short:
      "Controle real da glicemia, da hemoglobina glicada e do risco cardiovascular.",
    body: "Diabetes tipo 2 não é uma sentença. Com acompanhamento especializado, é possível controlar a glicemia, reduzir a hemoglobina glicada e diminuir o risco cardiovascular de forma significativa. Avaliamos o quadro completo: glicemia de jejum, HbA1c, resistência à insulina, função renal e risco cardiovascular. Pré-diabetes também tem tratamento.",
    forWho: [
      "Tem diagnóstico de diabetes tipo 1 ou tipo 2",
      "Está no pré-diabetes e quer reverter o quadro",
      "Tem dificuldade de controlar a glicemia hoje",
      "Tem histórico familiar e quer prevenção",
      "Busca um especialista em diabetes em Fortaleza",
    ],
  },
  {
    slug: "reposicao-hormonal",
    title: "Reposição hormonal",
    short:
      "Equilíbrio hormonal restaurado com base em exames, não em achismo.",
    body: "Mau humor persistente, cansaço, falta de energia, queda de cabelo, baixa libido, dificuldade de concentração. Esses sintomas têm causas, e muitas vezes a causa é hormonal. Investigamos deficiências de testosterona, estrogênio, progesterona, hormônio do crescimento, vitamina D e outros marcadores relevantes. Reposição hormonal não é só para mulheres na menopausa.",
    forWho: [
      "Sente cansaço e falta de energia sem causa aparente",
      "Tem suspeita ou diagnóstico de desequilíbrio hormonal",
      "Está emagrecendo e precisa de ajuste hormonal",
      "Tem hipotireoidismo ou suspeita dele",
      "Quer avaliação completa de hormônios",
    ],
  },
  {
    slug: "hipertrofia",
    title: "Hipertrofia e performance",
    short:
      "Identificar o que trava o seu progresso por dentro, com base em evidências.",
    body: "Você treina, segue dieta, usa suplementação e mesmo assim não consegue ganhar massa muscular no ritmo esperado. Antes de trocar o programa de treino, vale investigar o que está acontecendo por dentro. Analisamos níveis hormonais, função tireoidiana, deficiências de vitaminas e minerais, qualidade do sono e composição corporal pela bioimpedância InBody.",
    forWho: [
      "Treina consistentemente mas não vê progresso",
      "Quer otimizar suplementação com base em exames",
      "Suspeita de baixa testosterona ou deficiência hormonal",
      "Pratica esportes de alta performance",
    ],
  },
  {
    slug: "longevidade",
    title: "Longevidade saudável",
    short:
      "Prevenção ativa: corrigir desequilíbrios antes que virem doenças.",
    body: "Envelhecer bem não é sorte, é o resultado de decisões tomadas anos antes dos problemas aparecerem. A medicina de longevidade trabalha com prevenção ativa: identificar e corrigir desequilíbrios metabólicos, hormonais e nutricionais antes que se tornem doenças. O objetivo é que você chegue aos 70, 80 anos com saúde real.",
    forWho: [
      "Quer envelhecer com saúde e energia",
      "Busca prevenção ativa, não só tratamento",
      "Quer avaliar risco cardiovascular e metabólico",
      "Valoriza acompanhamento de longo prazo",
    ],
  },
];

export const process = [
  {
    n: "01",
    title: "Você no centro",
    text: "Na primeira consulta, dedico pelo menos uma hora para entender sua história: hábitos, rotina, tentativas anteriores, exames antigos e objetivos reais. Realizamos a bioimpedância InBody e solicitamos um painel de exames personalizado.",
  },
  {
    n: "02",
    title: "Diagnóstico real",
    text: "Com os resultados em mãos, avaliamos o quadro completo: função hormonal, metabolismo, composição corporal, marcadores inflamatórios e risco metabólico. É aqui que identificamos o que de fato está impedindo seus resultados.",
  },
  {
    n: "03",
    title: "Plano personalizado",
    text: "Montamos a estratégia: dieta com nutricionista, ajuste hormonal se necessário, suplementação baseada em exames e, quando indicado, medicamentos modernos de emagrecimento. Tudo com acompanhamento médico em cada passo.",
  },
  {
    n: "04",
    title: "Acompanhamento contínuo",
    text: "Reavaliação periódica com nova bioimpedância, ajuste de medicações e análise comparativa da composição corporal. O acompanhamento termina quando você atinge e mantém seus objetivos.",
  },
];

export const testimonials = [
  {
    quote:
      "A Dra. Fabiana é muito competente e atenciosa. Seus diagnósticos são assertivos e o seu acompanhamento é muito eficaz.",
    name: "Gleyciane Nunes",
    treatment: "Acompanhamento de emagrecimento",
  },
  {
    quote:
      "Excelente médica, atenciosa, simpática. Consulta bem detalhada. Gostei muito.",
    name: "Maria Belchior",
    treatment: "Endocrinologia e reposição hormonal",
  },
  {
    quote:
      "Dra. Fabiana maravilhosa! Super atenciosa, inteligente, prestativa, carismática. Me passou muita segurança e calma. Me fez confiar que tudo ia dar certo!",
    name: "Lurdinha",
    treatment: "Tratamento de menopausa",
  },
  {
    quote:
      "A Dra. Fabiana é muito competente em sua área! Sempre está à frente das novidades e novos estudos em sua especialidade!",
    name: "Phalema",
    treatment: "Acompanhamento endocrinológico",
  },
  {
    quote:
      "Profissional de altíssima qualidade. Super atenciosa, fazendo questão de deixar o paciente à vontade.",
    name: "Isabela",
    treatment: "Emagrecimento",
  },
];

export const forWho = [
  "Tentou emagrecer várias vezes e não conseguiu manter o resultado",
  "Quer entender por que seu metabolismo não responde como deveria",
  "Sofre com sintomas da menopausa e quer qualidade de vida",
  "Tem diabetes ou pré-diabetes e busca controle real",
  "Sente que algo hormonal está errado mas os exames voltam normais",
  "Treina e se alimenta bem, mas não evolui em composição corporal",
  "Quer envelhecer com saúde e prevenir doenças antes que apareçam",
];

export const faqs = [
  {
    q: "Qual endocrinologista é boa em Fortaleza?",
    a: "A Dra. Fabiana Lustosa é endocrinologista em Fortaleza, CE, com formação na UFC, Residência em Endocrinologia na USP e Mestrado na UNIFESP. Atende no bairro Meireles, no Harmony Medical Center.",
  },
  {
    q: "O que faz um endocrinologista?",
    a: "O endocrinologista é o médico especialista no sistema hormonal e metabólico. Trata condições como obesidade, diabetes, hipotireoidismo, menopausa, desequilíbrios hormonais e resistência à insulina, entre outros.",
  },
  {
    q: "Qual médico devo procurar para emagrecer?",
    a: "O endocrinologista é o especialista indicado para investigar as causas metabólicas e hormonais do excesso de peso. A Dra. Fabiana atende casos de emagrecimento com avaliação completa de hormônios, metabolismo e composição corporal.",
  },
  {
    q: "A Dra. Fabiana prescreve semaglutida e tirzepatida?",
    a: "Sim. A Dra. Fabiana avalia e prescreve medicamentos modernos para emagrecimento como semaglutida (Ozempic/Wegovy) e tirzepatida (Mounjaro), sempre com acompanhamento médico completo, bioimpedância periódica e ajuste de dose individualizado.",
  },
  {
    q: "Onde fica a clínica da Dra. Fabiana Lustosa?",
    a: "A clínica fica no Harmony Medical Center, Av. Dom Luís, 1233, 20º andar, sala 2007, bairro Meireles, Fortaleza, Ceará. É um dos endereços médicos mais acessíveis da cidade, próximo aos principais bairros nobres.",
  },
  {
    q: "Quanto custa uma consulta com endocrinologista em Fortaleza?",
    a: "O valor da consulta é informado diretamente pela clínica. Entre em contato pelo WhatsApp (85) 98889-6437 para verificar disponibilidade e valores. Não aceitamos planos de saúde, mas emitimos recibo para reembolso.",
  },
  {
    q: "A clínica aceita convênio?",
    a: "Não aceitamos convênios. Trabalhamos com atendimento particular para garantir o tempo de qualidade e a atenção individualizada que cada consulta exige. Emitimos nota fiscal ou recibo para reembolso junto ao seu plano.",
  },
  {
    q: "Qual a duração da consulta?",
    a: "A consulta tem duração aproximada de uma hora. Esse tempo é essencial para entender sua história clínica, realizar a bioimpedância InBody e planejar os próximos passos do seu acompanhamento.",
  },
  {
    q: "O que é a bioimpedância InBody?",
    a: "É um exame de composição corporal que avalia, em minutos: percentual de gordura corporal, massa muscular por segmento, gordura visceral, taxa metabólica basal e nível de hidratação. Realizamos esse exame em todas as consultas.",
  },
  {
    q: "Qual endocrinologista trata menopausa em Fortaleza?",
    a: "A Dra. Fabiana Lustosa é especialista em menopausa e climatério em Fortaleza, com avaliação completa de terapia de reposição hormonal (TRH), manejo de sintomas e acompanhamento de longo prazo.",
  },
];
