import { LocationEnum } from '../contacts/locations';
import { ServicesList } from '../services';

export enum teamMembersList {
  NUNO_PINA = 1,
  BEATRIZ_SILVA = 2,
  MARGARIDA_SABOGA = 3,
  CLARA_PARDAL = 4,
  ANA_CLARA = 5,
  JOAO_FAIA = 6,
  BEATRIZ_LOPES = 7,
  JOAQUIM_COELHO = 8,
  MARISA_GOMES = 9,
  JOANA_ROCHA = 10,
  CONSTANCA_CARREIRA = 11,
  RAFAEL_MARIZ = 12,
  CATARINA_GAMA = 13,
  DUARTE_AFONSO = 14,
  RICARDO_COTOVIO = 15,
  FILIPE_VICENTE = 16,
  GUILHERME_PINA = 17,
  LUIS_MACHADO = 18,
  PAULO_PINHEIRO = 19,
}

export const data = [
  {
    id: 1,
    slug: 'nuno-pina',
    name: 'Nuno Pina',
    description: {
      translations: {
        pt: 'Nuno Pina fundou a ForPhysio Clinic em 2014. Desde então, assume as funções de gerente e fisioterapeuta. Tem dedicado a sua prática profissional às áreas da fisioterapia músculo-esquelética e performance no desporto. \n\nDesde o início da sua carreira que colaborou paralelamente com entidades desportivas nacionais de renome, como Sport Lisboa e Benfica, Comité Olímpico de Portugal, Federação Portuguesa de Natação e Sporting Clube de Portugal, onde soma mais de 30 internacionalizações.\nCo-autor do livro “Mais Natação com futuro” sobre prevenção de lesões em nadadores, desde 2018 que Nuno Pina colabora com Instituições de Ensino Superior como professor convidado em várias pós-graduações, especializadas em reabilitação e performance desportiva. \n\nEntre 2016 e 2023, foi continuamente orientador de estágios académicos em fisioterapia, tendo colaborado com 6 Escolas.\nComo dirigente associativo, foi co-fundador e vice-presidente da atual Associação Nacional de Jovens na Fisioterapia entre 2014 e 2016, membro da direção da Associação Portuguesa de Fisioterapeutas entre 2016 e 2019 e integrou o Conselho Geral da Ordem dos Fisioterapeutas de 2020 a 2023.\n\nNo início de 2023, rumou à China para assumir funções na Federação Chinesa de Natação e Comité Olímpico Chinês, onde participou nos Jogos Asiáticos em Hangzhou (2023) e Jogos Olímpicos em Paris (2024), estando diretamente ligado a 2 títulos Olímpicos e a 2 recordes do mundo de natação.\n\nAtualmente, Nuno Pina, é responsável pela expansão internacional da ForPhysio Clinic para Pequim (China), onde assume funções de coordenação.',
        en: 'Nuno Pina founded ForPhysio Clinic in 2014. Since then, he has served as manager and physiotherapist. He has dedicated his professional practice to musculoskeletal physiotherapy and sports performance.\n\nSince the beginning of his career, he has collaborated with renowned national sports entities, such as Sport Lisboa e Benfica, the Portuguese Olympic Committee, the Portuguese Swimming Federation, and Sporting Clube de Portugal, accumulating over 30 international appearances.\nHe co-authored the book “More Swimming with a Future” on injury prevention for swimmers, and since 2018, Nuno Pina has collaborated with higher education institutions as a guest lecturer in several postgraduate programs, specializing in rehabilitation and sports performance.\n\nFrom 2016 to 2023, he continuously supervised academic internships in physiotherapy, working with 6 different schools.\nAs an association leader, he co-founded and served as vice-president of the current National Association of Young Physiotherapists from 2014 to 2016, was a board member of the Portuguese Physiotherapists Association from 2016 to 2019, and joined the General Council of the Portuguese Physiotherapists Order from 2020 to 2023.\n\nAt the beginning of 2023, he moved to China to take on roles with the Chinese Swimming Federation and Chinese Olympic Committee, where he participated in the Asian Games in Hangzhou (2023) and the Paris Olympics (2024), directly contributing to 2 Olympic titles and 2 world swimming records.\n\nCurrently, Nuno Pina is responsible for the international expansion of ForPhysio Clinic to Beijing (China), where he holds coordination roles.',
        es: 'Nuno Pina fundó la clínica ForPhysio en 2014. Desde entonces, ha servido como gerente y fisioterapeuta. Ha dedicado su práctica profesional a la fisioterapia musculoesquelética y al rendimiento deportivo.\n\nDesde el inicio de su carrera, ha colaborado con destacadas entidades deportivas nacionales como el Sport Lisboa e Benfica, el Comité Olímpico Portugués, la Federación Portuguesa de Natación y el Sporting Clube de Portugal, acumulando más de 30 internacionalizaciones.\nEs coautor del libro "Más Natación con Futuro" sobre la prevención de lesiones en nadadores, y desde 2018, Nuno Pina ha colaborado con instituciones de educación superior como profesor invitado en varias especializaciones de posgrado, centradas en la rehabilitación y el rendimiento deportivo.\n\nEntre 2016 y 2023, supervisó continuamente prácticas académicas en fisioterapia, colaborando con 6 escuelas.\nComo líder asociativo, cofundó y fue vicepresidente de la actual Asociación Nacional de Jóvenes Fisioterapeutas entre 2014 y 2016, miembro de la junta directiva de la Asociación Portuguesa de Fisioterapeutas de 2016 a 2019, e integró el Consejo General de la Orden de Fisioterapeutas de 2020 a 2023.\n\nA principios de 2023, se trasladó a China para asumir funciones en la Federación China de Natación y el Comité Olímpico Chino, donde participó en los Juegos Asiáticos en Hangzhou (2023) y los Juegos Olímpicos en París (2024), estando directamente vinculado a 2 títulos olímpicos y 2 récords mundiales de natación.\n\nActualmente, Nuno Pina es responsable de la expansión internacional de la clínica ForPhysio a Pekín (China), donde ocupa cargos de coordinación.',
        'zh-sg':
          '努诺·皮纳于2014年创立了ForPhysio诊所。从那时起，他担任经理和物理治疗师。他的职业生涯专注于肌肉骨骼物理治疗和运动表现领域。\n\n从职业生涯开始，他就与著名的国家体育机构合作，如里斯本竞技、葡萄牙奥林匹克委员会、葡萄牙游泳联合会和里斯本竞技俱乐部，累计参加了超过30次国际比赛。\n他共同撰写了《未来更多的游泳》一书，介绍游泳运动员的伤病预防，自2018年以来，努诺·皮纳与多所高等教育机构合作，担任客座讲师，参与多个研究生课程，专注于康复和运动表现。\n\n在2016年至2023年期间，他持续指导物理治疗学术实习，合作了6所学校。\n作为协会领导人，他是现任葡萄牙青年物理治疗师协会的联合创始人兼副主席（2014-2016年），葡萄牙物理治疗师协会董事会成员（2016-2019年），并于2020年至2023年加入葡萄牙物理治疗师协会总理事会。\n\n2023年初，他前往中国，担任中国游泳联合会和中国奥林匹克委员会的职务，参加了杭州的亚运会（2023年）和巴黎奥运会（2024年），并直接参与了2个奥运冠军和2个游泳世界纪录的诞生。\n\n目前，努诺·皮纳负责ForPhysio诊所在中国北京的国际扩展，并担任协调职务。',
      },
    },
    role: {
      translations: {
        pt: 'Fundador e Gerente',
        en: 'Founder and Manager',
        es: 'Fundador y Gerente',
        'zh-sg': '创始人兼经理',
      },
    },
    services: [ServicesList.FISIOTERAPIA_MUSCULO_ESQUELETICA, ServicesList.FISIOTERAPIA_DESPORTO],
    location: LocationEnum.CALDAS_RAINHA,
    image: 'nuno-pina.png',
  },
  {
    id: 2,
    slug: 'beatriz-silva',
    name: 'Beatriz Silva',
    description: {
      translations: {
        pt: 'Beatriz Silva integra a equipa ForPhysio Clinic desde Dezembro de 2021. Atualmente, desempenha funções como fisioterapeuta na Unidade de Saúde Balance by ForPhysio Lumiar, exercendo a sua intervenção clínica na mesma unidade, e fisioterapeuta da equipa sénior de Hóquei em Patins, do Clube Desportivo Paço de Arcos, bem como coordenadora do departamento médico do clube. Além do mais, acumula funções de Coordenadora Geral e Gestora Financeira da ForPhysio Clinic.\n\nTendo sido atleta de alta competição de Tumbling (durante 12 anos) e de Basquetebol (durante 2 anos), manteve o seu gosto pela Fisioterapia Desportiva, tendo investido a sua formação na Pós Graduação em Fisioterapia Desportiva pela CESPU (terminada em 2023) e no curso Exos Performance Specialist (que ainda se encontra a realizar).\n\nDevido às suas funções na direção da ForPhysio Clinic, realizou os cursos: “10 Passos para Ter a Agenda Cheia” (Academia Ana Gonçalves), Comunicação Persuasiva (Speak and Lead), e Legislação e Organização de um Espaço em Fisioterapia (BluePhysio Consultoria).\nEnquanto estudante de fisioterapia, dedicou-se à organização do ENEFt’19 ao ENEFt’21, e já como estudante finalista e recém licenciada, traçou o seu percurso como dirigente associativa, iniciando-se no Grupo de Movimento Jovem na Fisioterapia (vogal-2021), e tendo evoluído para Presidente da Associação Nacional de Jovens na Fisioterapia (desde 2022). Enquanto Presidente, participou no evento da Sociedade Portuguesa da Literacia para a Saúde, “Opções dos Jovens Para a Saúde”, onde defendeu a visão dos Estudantes e Jovens Fisioterapeutas para o Futuro da Fisioterapia; e em diversas reuniões com os Partidos Políticos, com o mesmo objetivo.\n\nDesde 2023 que também assume a orientação de estágios curriculares. Também já assumiu o Seminário Integrado na Unidade de Introdução à Fisioterapia com o tema: “Conhecer a ANJF”, direcionado aos estudantes do 1º ano do Curso de Fisioterapia na Escola Superior de Saúde de Leiria.',
        en: 'Beatriz Silva has been part of the ForPhysio Clinic team since December 2021. Currently, she works as a physiotherapist at the Balance by ForPhysio Health Unit in Lumiar, performing her clinical practice at the same unit, and as a physiotherapist for the senior roller hockey team of Clube Desportivo Paço de Arcos, where she also serves as the medical department coordinator. In addition, she holds the roles of General Coordinator and Financial Manager of ForPhysio Clinic.\n\nHaving been a high-level athlete in Tumbling (for 12 years) and Basketball (for 2 years), she maintained her passion for Sports Physiotherapy, investing in further education with a Postgraduate Degree in Sports Physiotherapy from CESPU (completed in 2023) and is currently pursuing the Exos Performance Specialist course.\n\nDue to her responsibilities in the management of ForPhysio Clinic, she has completed the following courses: “10 Steps to a Full Schedule” (Ana Gonçalves Academy), Persuasive Communication (Speak and Lead), and Legislation and Organization of a Physiotherapy Clinic (BluePhysio Consulting).\nAs a physiotherapy student, she dedicated herself to organizing ENEFt’19 to ENEFt’21, and as a final-year student and recent graduate, she began her path as an association leader, first as a board member of the Young Movement Group in Physiotherapy (2021), and later becoming President of the National Association of Young Physiotherapists (since 2022). As President, she participated in the event held by the Portuguese Society of Health Literacy, “Young People’s Health Choices,” where she advocated for the vision of Students and Young Physiotherapists for the Future of Physiotherapy, and in various meetings with Political Parties, with the same goal.\n\nSince 2023, she has also been supervising academic internships. She has also given a seminar in the Introduction to Physiotherapy Unit with the theme: “Getting to Know ANJF,” aimed at first-year students of the Physiotherapy Course at Escola Superior de Saúde de Leiria.',
        es: 'Beatriz Silva forma parte del equipo de ForPhysio Clinic desde diciembre de 2021. Actualmente, trabaja como fisioterapeuta en la Unidad de Salud Balance by ForPhysio en Lumiar, donde realiza su práctica clínica, y como fisioterapeuta del equipo senior de hockey sobre patines del Clube Desportivo Paço de Arcos, donde también es coordinadora del departamento médico. Además, acumula las funciones de Coordinadora General y Gestora Financiera de ForPhysio Clinic.\n\nHabiendo sido atleta de alto nivel en Tumbling (durante 12 años) y Baloncesto (durante 2 años), mantuvo su pasión por la Fisioterapia Deportiva, invirtiendo en su formación con un Posgrado en Fisioterapia Deportiva por CESPU (completado en 2023) y actualmente está realizando el curso Exos Performance Specialist.\n\nDebido a sus funciones en la dirección de ForPhysio Clinic, realizó los siguientes cursos: “10 Pasos para Tener la Agenda Llena” (Academia Ana Gonçalves), Comunicación Persuasiva (Speak and Lead), y Legislación y Organización de un Espacio de Fisioterapia (BluePhysio Consultoría).\nComo estudiante de fisioterapia, se dedicó a la organización de ENEFt’19 a ENEFt’21, y ya como estudiante finalista y recién graduada, inició su trayectoria como líder asociativa, comenzando en el Grupo de Movimiento Joven en Fisioterapia (vocal-2021), y luego ascendiendo a Presidenta de la Asociación Nacional de Jóvenes Fisioterapeutas (desde 2022). Como Presidenta, participó en el evento de la Sociedad Portuguesa de Alfabetización en Salud, “Opciones de los Jóvenes Para la Salud”, donde defendió la visión de los Estudiantes y Jóvenes Fisioterapeutas para el Futuro de la Fisioterapia, y en diversas reuniones con los Partidos Políticos, con el mismo objetivo.\n\nDesde 2023 también asume la supervisión de prácticas curriculares. También ha impartido el Seminario Integrado en la Unidad de Introducción a la Fisioterapia con el tema: “Conociendo a la ANJF”, dirigido a los estudiantes de primer año del curso de Fisioterapia en la Escola Superior de Saúde de Leiria.',
        'zh-sg':
          'Beatriz Silva 自2021年12月起加入ForPhysio诊所团队。目前，她在Lumiar的Balance by ForPhysio健康中心担任物理治疗师，并在该单位进行临床实践，同时也是Paço de Arcos体育俱乐部高级轮滑曲棍球队的物理治疗师，并担任该俱乐部医疗部门的协调员。此外，她还兼任ForPhysio诊所的总协调员和财务经理。\n\n曾经是高水平的翻腾运动员（12年）和篮球运动员（2年），她保持了对运动物理治疗的热情，并通过CESPU的运动物理治疗研究生课程（2023年完成）和目前正在进行的Exos表现专家课程，进一步提升了自己的专业知识。\n\n由于她在ForPhysio诊所的管理职责，她还完成了“让日程表满满的10个步骤”（Ana Gonçalves学院）、“说服性沟通”（Speak and Lead）以及“物理治疗空间的立法与组织”（BluePhysio咨询）等课程。\n作为物理治疗学生，她参与组织了ENEFt’19到ENEFt’21活动，作为最后一年学生和应届毕业生，她开始了自己的协会领导生涯，首先在2021年担任青年物理治疗运动小组成员，然后自2022年以来担任葡萄牙青年物理治疗师协会的主席。作为主席，她参与了葡萄牙健康素养协会的“年轻人的健康选择”事件，在会上为学生和年轻物理治疗师的物理治疗未来愿景辩护，并与各政党举行了多次会议，目标一致。\n\n自2023年以来，她还负责指导实习课程。她还在莱里亚健康学院一年级物理治疗课程的“认识ANJF”专题讲座中担任讲师。',
      },
    },
    role: {
      translations: {
        pt: 'Fisioterapeuta, Coordenadora Geral e Gestora Financeira',
        en: 'Physiotherapist, General Coordinator, and Financial Manager',
        es: 'Fisioterapeuta, Coordinadora General y Gestora Financiera',
        'zh-sg': '物理治疗师，总协调员和财务经理',
      },
    },
    services: [
      ServicesList.FISIOTERAPIA_MUSCULO_ESQUELETICA,
      ServicesList.FISIOTERAPIA_DESPORTO,
      ServicesList.FISIOTERAPIA_ENVELHECIMENTO,
      ServicesList.FISIOTERAPIA_AQUATICA_HIDROTERAPIA,
    ],
    location: LocationEnum.LISBOA_LUMIAR,
    image: 'beatriz-silva.png',
  },
  {
    id: 3,
    slug: 'margarida-saboga',
    name: 'Margarida Saboga',
    description: {
      translations: {
        pt: 'Margarida Saboga integra a equipa ForPhysio Clinic desde 2021. Atualmente, desempenha funções como fisioterapeuta e coordenadora da unidade ForPhysio Marinha Grande, exercendo a sua intervenção clínica na mesma unidade.\nÉ licenciada em fisioterapia pela Escola Superior de Saúde de Leiria.\n\nNeste momento, colabora paralelamente com o Sporting Clube Marinhense, realizando o acompanhamento da equipa sénior de hóquei em patins.\n\nTendo especial interesse na área da fisioterapia desportiva, acompanha na unidade vários atletas de basquetebol, andebol, atletismo e muay thai.',
        en: 'Margarida Saboga has been part of the ForPhysio Clinic team since 2021. Currently, she works as a physiotherapist and coordinator at the ForPhysio Marinha Grande unit, where she performs her clinical practice.\nShe holds a degree in physiotherapy from the Escola Superior de Saúde de Leiria.\n\nAt the moment, she is also working with Sporting Clube Marinhense, providing care for the senior roller hockey team.\n\nWith a special interest in sports physiotherapy, she treats athletes from basketball, handball, athletics, and Muay Thai at the clinic.',
        es: 'Margarida Saboga forma parte del equipo de ForPhysio Clinic desde 2021. Actualmente, trabaja como fisioterapeuta y coordinadora de la unidad ForPhysio Marinha Grande, donde realiza su práctica clínica.\nTiene una licenciatura en fisioterapia por la Escuela Superior de Salud de Leiria.\n\nActualmente, también colabora con el Sporting Clube Marinhense, realizando el seguimiento del equipo senior de hockey sobre patines.\n\nCon especial interés en la fisioterapia deportiva, en la unidad atiende a varios atletas de baloncesto, balonmano, atletismo y muay thai.',
        'zh-sg':
          'Margarida Saboga 自2021年起加入ForPhysio诊所团队。目前，她在ForPhysio Marinha Grande单位担任物理治疗师和协调员，并在该单位进行临床实践。\n她毕业于莱里亚健康学院，拥有物理治疗学位。\n\n目前，她还与Sporting Clube Marinhense合作，负责为高级轮滑曲棍球队提供护理。\n\n她对运动物理治疗有着特别的兴趣，在该单位治疗的运动员包括篮球、手球、田径和泰拳运动员。',
      },
    },
    role: {
      translations: {
        pt: 'Fisioterapeuta',
        en: 'Physiotherapist',
        es: 'Fisioterapeuta',
        'zh-sg': '物理治疗师',
      },
    },
    services: [
      ServicesList.FISIOTERAPIA_MUSCULO_ESQUELETICA,
      ServicesList.FISIOTERAPIA_ENVELHECIMENTO,
      ServicesList.FISIOTERAPIA_DESPORTO,
      ServicesList.PILATES_CLINICO,
    ],
    location: LocationEnum.MARINHA_GRANDE,
    image: 'margarida-saboga.png',
  },
  {
    id: 4,
    slug: 'clara-pardal',
    name: 'Clara Pardal',
    description: {
      translations: {
        pt: 'Clara Pardal integra a equipa ForPhysio Clinic desde 2023. Atualmente, desempenha funções como fisioterapeuta na unidade ForPhysio Oeiras, exercendo a sua intervenção clínica na mesma unidade.\nÉ licenciada em fisioterapia pela Escola Superior de Saúde de Alcoitão.\n\nTendo um passado enquanto nadadora, investiu a sua formação em Strength and Conditioning, e acompanha os atletas da modalidade de natação do Clube de Futebol Os Belenenses.',
        en: 'Clara Pardal has been part of the ForPhysio Clinic team since 2023. Currently, she works as a physiotherapist at the ForPhysio Oeiras unit, where she performs her clinical practice.\nShe holds a degree in physiotherapy from the Escola Superior de Saúde de Alcoitão.\n\nWith a background as a swimmer, she has invested in training in Strength and Conditioning and works with swimmers from the Clube de Futebol Os Belenenses.',
        es: 'Clara Pardal forma parte del equipo de ForPhysio Clinic desde 2023. Actualmente, trabaja como fisioterapeuta en la unidad de ForPhysio Oeiras, donde realiza su práctica clínica.\nTiene una licenciatura en fisioterapia por la Escuela Superior de Salud de Alcoitão.\n\nCon un pasado como nadadora, ha invertido en formación en Fuerza y Acondicionamiento, y trabaja con los atletas de natación del Clube de Futebol Os Belenenses.',
        'zh-sg':
          'Clara Pardal 自2023年起成为ForPhysio诊所团队的一员。目前，她在ForPhysio Oeiras单位担任物理治疗师，并在该单位进行临床实践。\n她毕业于阿尔科伊唐健康学院，拥有物理治疗学位。\n\n作为一名前游泳运动员，她在体能训练方面进行了深造，并为Belenenses足球俱乐部的游泳运动员提供支持。',
      },
    },
    role: {
      translations: {
        pt: 'Fisioterapeuta',
        en: 'Physiotherapist',
        es: 'Fisioterapeuta',
        'zh-sg': '物理治疗师',
      },
    },
    services: [
      ServicesList.FISIOTERAPIA_MUSCULO_ESQUELETICA,
      ServicesList.FISIOTERAPIA_DESPORTO,
      ServicesList.PILATES_CLINICO,
    ],
    location: LocationEnum.OEIRAS,
    image: 'clara-pardal.png',
  },
  {
    id: 5,
    slug: 'ana-clara',
    name: 'Ana Clara',
    description: {
      translations: {
        pt: 'Ana Clara integra a equipa ForPhysio Clinic desde 2024.\nAtualmente, desempenha funções como fisioterapeuta da Unidade de Saúde Balance by ForPhysio Caldas da Rainha.\n\nÉ licenciada em fisioterapia pela Escola Superior de Saúde de Leiria. O seu percurso tem estado muito ligado à fisioterapia desportiva. Atualmente, é coordenadora do departamento médico do Caldas Rugby Clube, onde exerce funções como fisioterapeuta da equipa sénior de Rugby. Acompanha também atletas da Federação Portuguesa de Lohan Kao Tempo.',
        en: 'Ana Clara has been part of the ForPhysio Clinic team since 2024.\nShe currently works as a physiotherapist at the Balance by ForPhysio Caldas da Rainha Health Unit.\n\nShe graduated in physiotherapy from the Escola Superior de Saúde de Leiria. Her career has been closely linked to sports physiotherapy. Currently, she is the coordinator of the medical department of Caldas Rugby Club, where she serves as the physiotherapist for the senior Rugby team. She also supports athletes from the Portuguese Lohan Kao Tempo Federation.',
        es: 'Ana Clara integra el equipo de ForPhysio Clinic desde 2024.\nActualmente, desempeña funciones como fisioterapeuta de la Unidad de Salud Balance by ForPhysio Caldas da Rainha.\n\nEs licenciada en fisioterapia por la Escuela Superior de Salud de Leiria. Su trayectoria ha estado muy vinculada a la fisioterapia deportiva. Actualmente, es coordinadora del departamento médico del Caldas Rugby Club, donde ejerce funciones como fisioterapeuta del equipo sénior de Rugby. También acompaña a atletas de la Federación Portuguesa de Lohan Kao Tempo.',
        'zh-sg':
          '安娜·克拉拉自2024年起加入ForPhysio Clinic团队。\n她目前在ForPhysio Caldas da Rainha健康单位担任物理治疗师。\n\n她毕业于里斯本的健康高级学院，获得物理治疗学位。她的职业生涯与运动物理治疗密切相关。目前，她是卡尔达斯橄榄球俱乐部医疗部门的协调员，担任橄榄球高级球队的物理治疗师。她还支持葡萄牙Lohan Kao Tempo联合会的运动员。',
      },
    },
    role: {
      translations: {
        pt: 'Fisioterapeuta',
        en: 'Physiotherapist',
        es: 'Fisioterapeuta',
        'zh-sg': '物理治疗师',
      },
    },
    services: [ServicesList.FISIOTERAPIA_MUSCULO_ESQUELETICA, ServicesList.FISIOTERAPIA_DESPORTO],
    location: LocationEnum.CALDAS_RAINHA,
    image: 'ana-clara.png',
  },
  {
    id: 6,
    slug: 'joao-faia',
    name: 'João Faia',
    description: {
      translations: {
        pt: 'João Faia integra a equipa ForPhysio Clinic desde 2024.\nAtualmente, desempenha funções como fisioterapeuta na parceria Forphysio-Pard, em Beijing, China.\n\nÉ licenciado em fisioterapia pelo Instituto Politécnico do Porto e tem aprofundado o seu expertise em Strength and Conditioning, performance, e na fisioterapia desportiva. Iniciou o Mestrado em Treino de Alto Rendimento na FMH. \n\nComo trajeto profissional, passou pelo Sporting Clube de Portugal, mais especificamente pelo Basquetebol, e posteriormente no Futebol formação na Academia Cristiano Ronaldo.\nO João tem um gosto especial pelo desporto, principalmente pelo futebol. Um interesse grande por tecnologia e como esta pode melhorar o processo de avaliação e progressão ao longo da reabilitação.\n\nAcredita que o caminho para o sucesso na reabilitação, tal como na vida, é confiar no processo, tirar o melhor de cada momento e aprender o máximo possível ao longo do percurso.',
        en: 'João Faia has been part of the ForPhysio Clinic team since 2024.\nCurrently, he works as a physiotherapist in the ForPhysio-Pard partnership in Beijing, China.\n\nHe holds a degree in physiotherapy from the Instituto Politécnico do Porto and has deepened his expertise in Strength and Conditioning, performance, and sports physiotherapy. He has started a Master’s degree in High-Performance Training at FMH.\n\nHis professional path includes experience with Sporting Clube de Portugal, specifically in basketball, and later in youth football at the Cristiano Ronaldo Academy.\nJoão has a special passion for sports, especially football, and a strong interest in technology and how it can improve the evaluation and progression process throughout rehabilitation.\n\nHe believes that the path to success in rehabilitation, as in life, is to trust the process, make the most of every moment, and learn as much as possible along the way.',
        es: 'João Faia forma parte del equipo de ForPhysio Clinic desde 2024.\nActualmente, trabaja como fisioterapeuta en la colaboración ForPhysio-Pard, en Beijing, China.\n\nEs licenciado en fisioterapia por el Instituto Politécnico de Oporto y ha profundizado su experiencia en Fuerza y Acondicionamiento, rendimiento y fisioterapia deportiva. Ha iniciado el Máster en Entrenamiento de Alto Rendimiento en la FMH.\n\nSu trayectoria profesional incluye experiencia en el Sporting Clube de Portugal, específicamente en baloncesto, y posteriormente en fútbol juvenil en la Academia Cristiano Ronaldo.\nJoão tiene una pasión especial por el deporte, especialmente por el fútbol, y un gran interés por la tecnología y cómo ésta puede mejorar el proceso de evaluación y progresión durante la rehabilitación.\n\nCree que el camino hacia el éxito en la rehabilitación, al igual que en la vida, es confiar en el proceso, aprovechar al máximo cada momento y aprender lo máximo posible a lo largo del recorrido.',
        'zh-sg':
          'João Faia 自2024年起加入ForPhysio诊所团队。\n目前，他在中国北京的Forphysio-Pard合作项目中担任物理治疗师。\n\n他毕业于波尔图理工学院，拥有物理治疗学位，并在体能训练、表现和运动物理治疗方面深化了自己的专业知识。他已经开始攻读FMH的高性能训练硕士学位。\n\n他的职业生涯包括在葡萄牙体育俱乐部的篮球领域工作，随后在Cristiano Ronaldo Academy从事青少年足球培训。\nJoão 对运动，尤其是足球，怀有特别的热情，并对科技及其如何改善整个康复过程中的评估和进展有着浓厚的兴趣。\n\n他相信，康复成功的道路，就像生活一样，是信任过程，充分利用每一刻，并在此过程中尽可能多地学习。',
      },
    },
    role: {
      translations: {
        pt: 'Fisioterapeuta',
        en: 'Physiotherapist',
        es: 'Fisioterapeuta',
        'zh-sg': '物理治疗师',
      },
    },
    image: 'joao-faia.png',
  },
  {
    id: 7,
    slug: 'beatriz-lopes',
    name: 'Beatriz Lopes',
    description: {
      translations: {
        pt: 'Beatriz Lopes integra a equipa ForPhysio Clinic desde Agosto de 2024. Atualmente, desempenha funções como fisioterapeuta na Unidade de Saúde Balance by ForPhysio Lumiar, exercendo a sua intervenção clínica na mesma unidade. \n\nÉ licenciada em Fisioterapia pelo Escola Superior de Saúde de Alcoitão, e tem aprofundado o seu expertise em Strength and Conditioning, Performance, e na Fisioterapia Desportiva, encontrando-se a realizar a Pós Graduação em Fisioterapia Desportiva pela CESPU. \nAtualmente é fisioterapeuta da equipa de futebol masculino U15 do Sporting Clube de Portugal. \n\nDurante vários anos foi atleta federada de futebol, mantendo uma ligação próxima a este desporto até aos dias de hoje. \n\nUm dos maiores objetivos para a sua carreira passa por contribuir para a mudança do que é a generalidade dos cuidados de fisioterapia atuais, por acreditar que o fisioterapeuta é um profissional com competências para promover a saúde e bem-estar de forma excecional.',
        en: 'Beatriz Lopes has been part of the ForPhysio Clinic team since August 2024. Currently, she works as a physiotherapist at the Balance by ForPhysio Lumiar Health Unit, where she performs her clinical practice.\n\nShe holds a degree in Physiotherapy from the Escola Superior de Saúde de Alcoitão and has deepened her expertise in Strength and Conditioning, Performance, and Sports Physiotherapy, currently pursuing a postgraduate degree in Sports Physiotherapy at CESPU.\nShe is currently the physiotherapist for the U15 male football team of Sporting Clube de Portugal.\n\nFor several years, she was a federated football athlete, maintaining a close connection to the sport to this day.\n\nOne of her biggest career goals is to contribute to changing the general landscape of current physiotherapy care, as she believes that physiotherapists are professionals with the skills to exceptionally promote health and well-being.',
        es: 'Beatriz Lopes forma parte del equipo de ForPhysio Clinic desde agosto de 2024. Actualmente, trabaja como fisioterapeuta en la Unidad de Salud Balance by ForPhysio Lumiar, donde realiza su práctica clínica.\n\nEs licenciada en Fisioterapia por la Escuela Superior de Salud de Alcoitão y ha profundizado su experiencia en Fuerza y Acondicionamiento, Rendimiento y Fisioterapia Deportiva, y actualmente está realizando la Posgrado en Fisioterapia Deportiva en CESPU.\nActualmente es fisioterapeuta del equipo masculino de fútbol U15 del Sporting Clube de Portugal.\n\nDurante varios años fue atleta federada de fútbol, manteniendo una estrecha conexión con este deporte hasta el día de hoy.\n\nUno de sus mayores objetivos en su carrera es contribuir a cambiar la generalidad de los cuidados de fisioterapia actuales, ya que cree que el fisioterapeuta es un profesional con competencias para promover la salud y el bienestar de manera excepcional.',
        'zh-sg':
          'Beatriz Lopes 自2024年8月起加入ForPhysio诊所团队。目前，她在Balance by ForPhysio Lumiar健康单位担任物理治疗师，并在该单位进行临床实践。\n\n她毕业于阿尔科伊唐健康学院，专攻物理治疗，并在力量和体能训练、表现以及运动物理治疗方面深化了自己的专业知识，目前正在CESPU攻读运动物理治疗的研究生学位。\n她目前是葡萄牙体育俱乐部U15男子足球队的物理治疗师。\n\n多年来，她是一名注册足球运动员，并与这一运动保持密切联系至今。\n\n她职业生涯的最大目标之一是为改变当前物理治疗护理的整体状况做出贡献，因为她相信物理治疗师是一位能够卓越促进健康和福祉的专业人士。',
      },
    },
    role: {
      translations: {
        pt: 'Fisioterapeuta',
        en: 'Physiotherapist',
        es: 'Fisioterapeuta',
        'zh-sg': '物理治疗师',
      },
    },
    services: [ServicesList.FISIOTERAPIA_MUSCULO_ESQUELETICA, ServicesList.FISIOTERAPIA_DESPORTO],
    location: LocationEnum.LISBOA_LUMIAR,
    image: 'beatriz-lopes.png',
  },
  {
    id: 8,
    slug: 'joaquim-coelho',
    name: 'Joaquim Coelho',
    description: {
      translations: {
        pt: 'Joaquim Coelho integra a equipa ForPhysio Clinic desde Junho de 2024. Atualmente, desempenha funções como fisioterapeuta na Unidade de Saúde Balance by ForPhysio Lumiar, exercendo a sua intervenção clínica na mesma unidade. \n\nÉ licenciado em Fisioterapia pelo Escola Superior de Tecnologia em Saúde de Coimbra, e tem aprofundado o seu expertise em Strength and Conditioning, Performance, e na Fisioterapia Desportiva. \n\nAtualmente é fisioterapeuta da equipa B de formação de basquetebol do Sporting Clube de Portugal, no escalão S23.\n\nPara além de fisioterapeuta, o Joaquim gosta de correr e de realizar treino de força. Sente que, desta forma, o ajuda a melhorar as suas características físicas e que o ajuda a melhor compreender os problemas/situações com que é confrontado na sua prática clínica.',
        en: 'Joaquim Coelho has been part of the ForPhysio Clinic team since June 2024. Currently, he works as a physiotherapist at the Balance by ForPhysio Lumiar Health Unit, where he performs his clinical practice.\n\nHe holds a degree in Physiotherapy from the Escola Superior de Tecnologia em Saúde de Coimbra and has deepened his expertise in Strength and Conditioning, Performance, and Sports Physiotherapy.\n\nHe is currently the physiotherapist for the Sporting Clube de Portugal’s B basketball team, under-23 category.\n\nIn addition to being a physiotherapist, Joaquim enjoys running and strength training. He feels that this helps him improve his physical abilities and better understand the problems/situations he encounters in his clinical practice.',
        es: 'Joaquim Coelho forma parte del equipo de ForPhysio Clinic desde junio de 2024. Actualmente, trabaja como fisioterapeuta en la Unidad de Salud Balance by ForPhysio Lumiar, donde realiza su práctica clínica.\n\nEs licenciado en Fisioterapia por la Escuela Superior de Tecnología en Salud de Coimbra, y ha profundizado su experiencia en Fuerza y Acondicionamiento, Rendimiento y Fisioterapia Deportiva.\n\nActualmente es fisioterapeuta del equipo B de baloncesto del Sporting Clube de Portugal, en la categoría sub-23.\n\nAdemás de ser fisioterapeuta, a Joaquim le gusta correr y hacer entrenamiento de fuerza. Siente que esto le ayuda a mejorar sus capacidades físicas y a comprender mejor los problemas/situaciones que enfrenta en su práctica clínica.',
        'zh-sg':
          'Joaquim Coelho 自2024年6月起加入ForPhysio诊所团队。目前，他在Balance by ForPhysio Lumiar健康单位担任物理治疗师，并在该单位进行临床实践。\n\n他毕业于科英布拉卫生技术学院，拥有物理治疗学位，并在体能训练、表现和运动物理治疗方面深化了自己的专业知识。\n\n目前，他是葡萄牙体育俱乐部B队篮球队的物理治疗师，负责U23级别。\n\n除了作为物理治疗师外，Joaquim 还喜欢跑步和力量训练。他认为这有助于提高他的身体能力，并更好地理解在临床实践中遇到的问题/情况。',
      },
    },
    role: {
      translations: {
        pt: 'Fisioterapeuta',
        en: 'Physiotherapist',
        es: 'Fisioterapeuta',
        'zh-sg': '物理治疗师',
      },
    },
    services: [ServicesList.FISIOTERAPIA_MUSCULO_ESQUELETICA, ServicesList.FISIOTERAPIA_DESPORTO],
    location: LocationEnum.LISBOA_LUMIAR,
    image: 'joaquim-coelho.png',
  },
  {
    id: 9,
    slug: 'marisa-gomes',
    name: 'Marisa Gomes',
    description: {
      translations: {
        pt: 'Marisa  Gomes  integra  a  equipa  ForPhysio Clinic desde  2024.\nAtualmente, desempenha funções como fisioterapeuta da Unidade de Saúde  Balance by ForPhysio Caldas da Rainha, onde exerce a sua intervenção clínica.\n\nÉ licenciada em fisioterapia pela Escola Superior de Saúde de Leiria, onde se  encontra a realizar o mestrado em Fisioterapia: Ramo Prescrição Fisioterapêutica  de Exercício Físico.',
        en: 'Marisa Gomes has been part of the ForPhysio Clinic team since 2024.\nCurrently, she works as a physiotherapist at the Balance by ForPhysio Health Unit in Caldas da Rainha, where she performs her clinical practice.\n\nShe holds a degree in physiotherapy from the Escola Superior de Saúde de Leiria, where she is pursuing a master’s degree in Physiotherapy: Therapeutic Exercise Prescription.',
        es: 'Marisa Gomes forma parte del equipo de ForPhysio Clinic desde 2024.\nActualmente, trabaja como fisioterapeuta en la Unidad de Salud Balance by ForPhysio en Caldas da Rainha, donde realiza su práctica clínica.\n\nTiene una licenciatura en fisioterapia por la Escuela Superior de Salud de Leiria, donde está cursando una maestría en Fisioterapia: Prescripción de Ejercicio Terapéutico.',
        'zh-sg':
          'Marisa Gomes 自2024年起加入ForPhysio诊所团队。目前，她在Caldas da Rainha的Balance by ForPhysio健康中心担任物理治疗师，进行临床实践。\n\n她毕业于莱里亚健康学院的物理治疗专业，现正在攻读物理治疗硕士学位，专业方向为运动处方。',
      },
    },
    role: {
      translations: {
        pt: 'Fisioterapeuta',
        en: 'Physiotherapist',
        es: 'Fisioterapeuta',
        'zh-sg': '物理治疗师',
      },
    },
    services: [ServicesList.FISIOTERAPIA_MUSCULO_ESQUELETICA, ServicesList.FISIOTERAPIA_ENVELHECIMENTO],
    location: LocationEnum.CALDAS_RAINHA,
    image: 'marisa-gomes.png',
  },
  {
    id: 10,
    slug: 'joana-rocha',
    name: 'Joana Rocha',
    description: {
      translations: {
        pt: 'Joana Rocha é licenciada em Fisioterapia pela Escola Superior de Tecnologia da Saúde de Lisboa, a terminar o mestrado em Fisioterapia em Saúde da Mulher pela mesma instituição.\n\nApaixonada pela área da saúde pélvica desde cedo, para além do mestrado, realizou outros cursos dentro da área. É nesta área que integra a equipa ForPhysio desde o início de 2024, exercendo a sua prática na Unidade de Saúde Balance by ForPhysio Lumiar.\n\nA Joana não abdica de idas à praia, viagens e da prática de Pilates, que considera fundamental para manter o equilíbrio entre o corpo e a mente.',
        en: 'Joana Rocha holds a degree in Physiotherapy from the Escola Superior de Tecnologia da Saúde de Lisboa and is completing her master’s in Women’s Health Physiotherapy at the same institution.\n\nPassionate about pelvic health from an early age, in addition to her master’s, she has completed other courses in this field. It is in this area that she has been part of the ForPhysio team since the beginning of 2024, practicing at the Balance by ForPhysio Lumiar Health Unit.\n\nJoana does not forgo trips to the beach, traveling, and practicing Pilates, which she considers essential for maintaining the balance between body and mind.',
        es: 'Joana Rocha es licenciada en Fisioterapia por la Escuela Superior de Tecnología de la Salud de Lisboa y está terminando el máster en Fisioterapia en Salud de la Mujer por la misma institución.\n\nApasionada por el área de la salud pélvica desde joven, además del máster, ha realizado otros cursos en el área. Es en esta área donde integra el equipo de ForPhysio desde principios de 2024, ejerciendo su práctica en la Unidad de Salud Balance by ForPhysio Lumiar.\n\nJoana no renuncia a ir a la playa, viajar y practicar Pilates, que considera fundamental para mantener el equilibrio entre el cuerpo y la mente.',
        'zh-sg':
          'Joana Rocha毕业于里斯本健康科技高等学院，正在完成女性健康物理治疗硕士学位。\n\n从小对盆底健康充满热情，除了硕士学位，她还完成了该领域的其他课程。从2024年初开始，她加入了ForPhysio团队，在ForPhysio Lumiar健康单位从事实践。\n\nJoana不放弃去海滩、旅行和练习普拉提，认为这对保持身心平衡至关重要。',
      },
    },
    role: {
      translations: {
        pt: 'Fisioterapeuta',
        en: 'Physiotherapist',
        es: 'Fisioterapeuta',
        'zh-sg': '物理治疗师',
      },
    },
    location: LocationEnum.LISBOA_LUMIAR,
    customService: {
      translations: {
        pt: 'Fisioterapia Pélvica',
        en: 'Pelvic Physiotherapy',
        es: 'Fisioterapia Pélvica',
        'zh-sg': '盆底物理治疗',
      },
    },
    contactsPage: true,
    image: 'joana-rocha.png',
  },
  {
    id: 11,
    slug: 'constanca-carreira',
    name: 'Constança Carreira',
    description: {
      translations: {
        pt: 'Constança Carreira integra a equipa ForPhysio desde outubro de 2024. Atualmente, desempenha funções como fisioterapeuta na Unidade de Saúde Balance by ForPhysio Aveiro, exercendo a sua intervenção clínica na mesma unidade.\nÉ fisioterapeuta formada na Escola Superior de Saúde da Universidade de Aveiro, tendo vindo a direcionar a sua prática profissional para a saúde pélvica e para a pediatria, contando já com diversas formações em ambas as áreas.\n\nConsidera essencial e fascinante poder entregar os cuidados prestados a começar na Saúde Pélvica, feminina e masculina, acompanhando o processo desde a gravidez e a parentalidade até ao pós-parto e à saúde infantil.',
        en: 'Constança Carreira has been part of the ForPhysio team since October 2024. Currently, she works as a physiotherapist at the Balance by ForPhysio Aveiro Health Unit, where she performs her clinical practice.\nShe is a physiotherapist trained at the Escola Superior de Saúde da Universidade de Aveiro and has directed her professional practice towards pelvic health and pediatrics, with various training courses in both areas.\n\nShe considers it essential and fascinating to provide care that begins with Pelvic Health, both female and male, accompanying the process from pregnancy and parenthood to postpartum and child health.',
        es: 'Constança Carreira forma parte del equipo de ForPhysio desde octubre de 2024. Actualmente, trabaja como fisioterapeuta en la Unidad de Salud Balance by ForPhysio Aveiro, donde realiza su práctica clínica.\nEs fisioterapeuta formada en la Escuela Superior de Salud de la Universidad de Aveiro, y ha orientado su práctica profesional hacia la salud pélvica y la pediatría, con diversas formaciones en ambas áreas.\n\nConsidera esencial y fascinante poder brindar cuidados que comienzan en la Salud Pélvica, tanto femenina como masculina, acompañando el proceso desde el embarazo y la paternidad hasta el posparto y la salud infantil.',
        'zh-sg':
          'Constança Carreira 自2024年10月起加入ForPhysio团队。目前，她在Balance by ForPhysio Aveiro健康单位担任物理治疗师，并在该单位进行临床实践。\n她是阿威罗大学健康学院的物理治疗师，已将她的职业实践方向转向盆底健康和儿科，并在这两个领域接受了多次培训。\n\n她认为，从盆底健康开始提供护理是至关重要且迷人的，能够伴随整个过程，从怀孕和为人父母到产后和儿童健康。',
      },
    },
    role: {
      translations: {
        pt: 'Fisioterapeuta',
        en: 'Physiotherapist',
        es: 'Fisioterapeuta',
        'zh-sg': '物理治疗师',
      },
    },
    customService: {
      translations: {
        pt: 'Fisioterapia Pélvica e Infantil',
        en: 'Pelvic and Pediatric Physiotherapy',
        es: 'Fisioterapia Pélvica y Pediátrica',
        'zh-sg': '盆底和儿科物理治疗',
      },
    },
    location: LocationEnum.AVEIRO,
    image: 'constanca-carreira.png',
  },
  {
    id: 12,
    slug: 'rafael-mariz',
    name: 'Rafael Mariz',
    description: {
      translations: {
        pt: 'Rafael Mariz integra a equipa ForPhysio Clinic desde outubro de 2024. Atualmente, desempenha funções como fisioterapeuta na Unidade de Saúde Balance by ForPhysio Aveiro, exercendo a sua intervenção clínica na mesma unidade.\n\nÉ licenciado pela Escola Superior de Saúde da Universidade de Aveiro e, atualmente, frequenta o mestrado de Fisioterapia Cardiovascular e Respiratória, na mesma Instituição de Ensino Superior.\n\nDe momento, encontra-se a trabalhar na área da músculo-esquelética, e conta também com formação na área de Strength and Conditioning.\n\nAtualmente colabora com a Federação Portuguesa de Andebol.',
        en: 'Rafael Mariz has been part of the ForPhysio Clinic team since October 2024. Currently, he works as a physiotherapist at the Balance by ForPhysio Aveiro Health Unit, where he performs his clinical practice.\n\nHe holds a degree from the Escola Superior de Saúde da Universidade de Aveiro and is currently pursuing a master’s degree in Cardiovascular and Respiratory Physiotherapy at the same higher education institution.\n\nAt the moment, he is working in the musculoskeletal area and also has training in Strength and Conditioning.\n\nHe currently collaborates with the Portuguese Handball Federation.',
        es: 'Rafael Mariz forma parte del equipo de ForPhysio Clinic desde octubre de 2024. Actualmente, trabaja como fisioterapeuta en la Unidad de Salud Balance by ForPhysio Aveiro, donde realiza su práctica clínica.\n\nEs licenciado por la Escuela Superior de Salud de la Universidad de Aveiro y, actualmente, está cursando el máster en Fisioterapia Cardiovascular y Respiratoria en la misma Institución de Educación Superior.\n\nEn este momento, trabaja en el área musculoesquelética y también tiene formación en Fuerza y Acondicionamiento.\n\nActualmente colabora con la Federación Portuguesa de Balonmano.',
        'zh-sg':
          'Rafael Mariz 自2024年10月起加入ForPhysio诊所团队。目前，他在Balance by ForPhysio Aveiro健康单位担任物理治疗师，并在该单位进行临床实践。\n\n他毕业于阿威罗大学健康学院，目前正在攻读同一高等教育机构的心血管和呼吸物理治疗硕士学位。\n\n目前，他在肌肉骨骼领域工作，并在力量和体能训练方面接受过培训。\n\n他目前与葡萄牙手球协会合作。',
      },
    },
    role: {
      translations: {
        pt: 'Fisioterapeuta',
        en: 'Physiotherapist',
        es: 'Fisioterapeuta',
        'zh-sg': '物理治疗师',
      },
    },
    services: [ServicesList.FISIOTERAPIA_MUSCULO_ESQUELETICA, ServicesList.FISIOTERAPIA_DESPORTO],
    location: LocationEnum.AVEIRO,
    image: 'rafael-mariz.png',
  },
  {
    id: 13,
    slug: 'catarina-gama',
    name: 'Catarina Gama',
    description: {
      translations: {
        pt: 'Catarina Gama, fisioterapeuta licenciada pela Escola Superior de Tecnologias da Saúde de Lisboa no presente ano de 2024. Realizou o seu último estágio curricular na ForPhysio Oeiras, e, pelo seu destaque, voltou a colaborar com a ForPhysio Clinic enquanto fisioterapeuta e preparadora física da equipa de Seniores B de Hóquei em Patins do Clube Desportivo de Paço de Arcos.\n\nO desporto é uma das suas paixões, acreditando plenamente na capacidade que o exercício tem de melhorar a funcionalidade, capacidade física e performance das pessoas.\nNos seus tempos livres, gosta de praticar exercício físico diário e possui também o gosto pela criação de conteúdos no digital.',
        en: 'Catarina Gama is a physiotherapist who graduated from the Escola Superior de Tecnologias da Saúde de Lisboa in the year 2024. She completed her last internship at ForPhysio Oeiras and, due to her outstanding performance, has returned to collaborate with ForPhysio Clinic as a physiotherapist and fitness trainer for the Senior B Roller Hockey team of the Clube Desportivo de Paço de Arcos.\n\nSports is one of her passions, and she fully believes in the ability of exercise to improve functionality, physical capacity, and performance in individuals.\nIn her free time, she enjoys daily physical exercise and also has a passion for creating digital content.',
        es: 'Catarina Gama es una fisioterapeuta licenciada por la Escuela Superior de Tecnologías de la Salud de Lisboa en el presente año 2024. Realizó su última práctica curricular en ForPhysio Oeiras y, debido a su destacado rendimiento, volvió a colaborar con ForPhysio Clinic como fisioterapeuta y preparadora física del equipo de Senior B de Hockey sobre Patines del Clube Desportivo de Paço de Arcos.\n\nEl deporte es una de sus pasiones, creyendo plenamente en la capacidad que el ejercicio tiene para mejorar la funcionalidad, la capacidad física y el rendimiento de las personas.\nEn su tiempo libre, le gusta practicar ejercicio físico diariamente y también tiene gusto por la creación de contenidos digitales.',
        'zh-sg':
          'Catarina Gama是一名在2024年毕业于里斯本健康科技高等学院的物理治疗师。她在ForPhysio Oeiras完成了最后的实习，由于表现出色，重新与ForPhysio Clinic合作，担任物理治疗师和Paço de Arcos体育俱乐部B队的轮滑曲棍球体能教练。\n\n运动是她的一个热情所在，她完全相信锻炼能够提高人们的功能性、身体能力和表现。\n在空闲时间，她喜欢每天进行体育锻炼，也热衷于创作数字内容。',
      },
    },
    role: {
      translations: {
        pt: 'Fisioterapeuta',
        en: 'Physiotherapist',
        es: 'Fisioterapeuta',
        'zh-sg': '物理治疗师',
      },
    },
    services: [ServicesList.FISIOTERAPIA_MUSCULO_ESQUELETICA, ServicesList.FISIOTERAPIA_DESPORTO],
    location: LocationEnum.OEIRAS,
    image: 'catarina-gama.png',
  },
  {
    id: 14,
    slug: 'duarte-afonso',
    name: 'Duarte Afonso',
    description: {
      translations: {
        pt: 'Duarte Afonso integra a ForPhysio desde setembro de 2024, como fisioterapeuta do clube de andebol marinhense SIR 1º Maio. É licenciado pelo Instituto Politécnico de Setúbal, desde junho de 2024.\nAo longo da licenciatura, procurou ser o mais proativo possível, participando em programas de voluntariado e co-criando diversos projetos. Destaca o estágio curricular no âmbito do programa Erasmus, na Bélgica, e outros 3 cursos breves internacionais (o último na Finlândia), relacionados com as áreas da saúde na comunidade, reabilitação pediátrica e segurança no trabalho. Mais recentemente, concluiu o curso "Fisioterapia no Desporto - Screening and Assessment". \nApaixonado pelas diferentes áreas de intervenção, tem como interesse a Músculo-esquelética e o desporto, bem como uma especial curiosidade pela saúde digital e saúde ocupacional. \nFora da fisioterapia, adora viajar, fazer exercício e ser pseudo-crítico de cinema.\nFocado em melhorar a qualidade de vida de quem o rodeia, considera-se comunicativo, divertido e motivado para continuar a aprender diariamente.',
        en: 'Duarte Afonso joined ForPhysio in September 2024 as a physiotherapist for the SIR 1º Maio handball club in Marinha Grande. He graduated from the Polytechnic Institute of Setúbal in June 2024.\nThroughout his degree, he aimed to be as proactive as possible, participating in volunteer programs and co-creating various projects. He highlights his internship under the Erasmus program in Belgium, as well as three other short international courses (the last one in Finland), related to community health, pediatric rehabilitation, and occupational safety. Most recently, he completed the course "Physiotherapy in Sports - Screening and Assessment." \nPassionate about various areas of intervention, he is particularly interested in musculoskeletal health and sports, as well as having a special curiosity for digital health and occupational health. \nOutside of physiotherapy, he loves to travel, exercise, and be a pseudo-film critic.\nFocused on improving the quality of life of those around him, he considers himself communicative, fun, and motivated to continue learning every day.',
        es: 'Duarte Afonso se unió a ForPhysio en septiembre de 2024 como fisioterapeuta del club de balonmano SIR 1º Maio de Marinha Grande. Se graduó del Instituto Politécnico de Setúbal en junio de 2024.\nA lo largo de su licenciatura, buscó ser lo más proactivo posible, participando en programas de voluntariado y co-creando diversos proyectos. Destaca su práctica curricular en el marco del programa Erasmus, en Bélgica, y otros 3 cursos breves internacionales (el último en Finlandia), relacionados con las áreas de salud comunitaria, rehabilitación pediátrica y seguridad laboral. Más recientemente, completó el curso "Fisioterapia en el Deporte - Evaluación y Diagnóstico". \nApasionado por las diferentes áreas de intervención, tiene interés en la salud músculo-esquelética y el deporte, así como una especial curiosidad por la salud digital y la salud ocupacional. \nFuera de la fisioterapia, le encanta viajar, hacer ejercicio y ser un pseudo-crítico de cine.\nEnfocado en mejorar la calidad de vida de quienes le rodean, se considera comunicativo, divertido y motivado para seguir aprendiendo cada día.',
        'zh-sg':
          '杜阿尔特·阿方索自2024年9月起加入ForPhysio，担任马里尼亚·格兰德的SIR 1º Maio手球俱乐部的物理治疗师。他于2024年6月毕业于塞图巴尔理工学院。\n在学位学习期间，他努力做到尽可能主动，参加志愿者项目，并共同创建了多个项目。他强调了在比利时的伊拉斯谟计划下的实习经历，以及其他三个短期国际课程（最后一个在芬兰），这些课程与社区健康、儿童康复和职业安全有关。最近，他完成了“运动物理治疗-筛查与评估”课程。\n他热爱不同的干预领域，特别关注肌肉骨骼健康和运动，并对数字健康和职业健康有着特殊的好奇心。\n在物理治疗之外，他喜欢旅行、锻炼和当伪电影评论家。\n他专注于提高周围人生活质量，认为自己是一个善于沟通、有趣并充满动力，愿意每天继续学习的人。',
      },
    },
    role: {
      translations: {
        pt: 'Fisioterapeuta',
        en: 'Physiotherapist',
        es: 'Fisioterapeuta',
        'zh-sg': '物理治疗师',
      },
    },
    services: [
      ServicesList.FISIOTERAPIA_MUSCULO_ESQUELETICA,
      ServicesList.FISIOTERAPIA_ENVELHECIMENTO,
      ServicesList.FISIOTERAPIA_DESPORTO,
      ServicesList.PILATES_CLINICO,
    ],
    location: LocationEnum.MARINHA_GRANDE,
    image: 'duarte-afonso.png',
  },
  {
    id: 15,
    slug: 'ricardo-cotovio',
    name: 'Ricardo Cotovio',
    description: {
      translations: {
        pt: 'Ricardo Cotovio integra a equipa ForPhysio Clinic desde 2018. Coordenador da área da nutrição ForPhysio Clinic, atualmente presta consultas na unidade ForPhysio Oeiras.\n\nO Ricardo é licenciado em Dietética e Nutrição pela Escola Superior de Tecnologia da Saúde de Lisboa (2015) e membro da Ordem dos Nutricionistas (3955N) desde Dezembro 2018. \nDesde o início da sua carreira que colabora paralelamente com instituições desportivas de renome nacional e internacional como o Belenenses SAD, Al-Wehda (Arábia Saudita) e Shakhtar Donetsk (Ucrânia).\n\nJá em Portugal, colaborou com o Vitória FC e o Estrela da Amadora FC, e, neste momento, encontra-se em colaboração com a equipa sénior de futebol do Casa Pia.',
        en: 'Ricardo Cotovio has been part of the ForPhysio Clinic team since 2018. As the coordinator of the nutrition area at ForPhysio Clinic, he currently provides consultations at the ForPhysio Oeiras unit.\n\nRicardo holds a degree in Dietetics and Nutrition from the Escola Superior de Tecnologia da Saúde de Lisboa (2015) and has been a member of the Order of Nutritionists (3955N) since December 2018. Since the beginning of his career, he has collaborated with renowned national and international sports institutions such as Belenenses SAD, Al-Wehda (Saudi Arabia), and Shakhtar Donetsk (Ukraine).\n\nIn Portugal, he has collaborated with Vitória FC and Estrela da Amadora FC, and is currently working with the senior football team of Casa Pia.',
        es: 'Ricardo Cotovio forma parte del equipo de ForPhysio Clinic desde 2018. Coordinador del área de nutrición de ForPhysio Clinic, actualmente ofrece consultas en la unidad de ForPhysio Oeiras.\n\nRicardo es licenciado en Dietética y Nutrición por la Escuela Superior de Tecnología de la Salud de Lisboa (2015) y miembro de la Orden de Nutricionistas (3955N) desde diciembre de 2018. Desde el inicio de su carrera, ha colaborado con instituciones deportivas de renombre nacional e internacional, como Belenenses SAD, Al-Wehda (Arabia Saudita) y Shakhtar Donetsk (Ucrania).\n\nYa en Portugal, ha colaborado con el Vitória FC y el Estrela da Amadora FC, y en este momento, se encuentra colaborando con el equipo senior de fútbol del Casa Pia.',
        'zh-sg':
          'Ricardo Cotovio 自2018年起加入ForPhysio诊所团队。作为ForPhysio诊所营养领域的协调员，他目前在ForPhysio Oeiras单位提供咨询。\n\nRicardo于2015年毕业于里斯本健康科技高等学院，获得营养与饮食学学位，并自2018年12月以来成为营养师协会（3955N）的成员。自职业生涯初期以来，他与著名的国家和国际体育机构合作，如Belenenses SAD、Al-Wehda（沙特阿拉伯）和Shakhtar Donetsk（乌克兰）。\n\n在葡萄牙，他曾与维多利亚足球俱乐部和阿马多拉明星足球俱乐部合作，目前正与Casa Pia的男子足球队合作。',
      },
    },
    role: {
      translations: {
        pt: 'Fisioterapeuta',
        en: 'Physiotherapist',
        es: 'Fisioterapeuta',
        'zh-sg': '物理治疗师',
      },
    },
    location: LocationEnum.OEIRAS,
    services: [ServicesList.NUTRICAO],
    image: 'ricardo-cotovio.png',
  },
  {
    id: 16,
    slug: 'filipe-vicente',
    name: 'Filipe Vicente',
    description: {
      translations: {
        pt: 'Filipe Vicente integra a equipa ForPhysio Clinic desde 2021. Licenciado em Dietética e Nutrição pela Escola Superior de Saúde do Instituto Politécnico de Leiria (2019) e membro efetivo da Ordem dos Nutricionistas desde 2020.\n\nO Filipe colaborou com o Leixões Sport Clube na época 2020/2021, contando com formação especializada no âmbito da nutrição desportiva.\nAtualmente, exerce a sua prática profissional nas áreas da nutrição clínica e desportiva, prestando consultas de avaliação e acompanhamento na unidade ForPhysio Marinha Grande.\n\nAficionado por futebol e praticante de treino de resistência há alguns anos, o nosso nutricionista não se cansa de reforçar que “uma alimentação equilibrada, aliada à prática de atividade física regular, são, inegavelmente, promotores da saúde e de uma maior longevidade”.\nAcredita que fomentar uma boa relação com a comida é o fator chave para a adoção de comportamentos mais saudáveis, facilitando também a manutenção destes a longo prazo no quotidiano.',
        en: 'Filipe Vicente has been part of the ForPhysio Clinic team since 2021. He holds a degree in Dietetics and Nutrition from the Escola Superior de Saúde of the Polytechnic Institute of Leiria (2019) and has been a full member of the Order of Nutritionists since 2020.\n\nFilipe collaborated with Leixões Sport Clube during the 2020/2021 season, with specialized training in sports nutrition.\nHe currently practices in the fields of clinical and sports nutrition, providing assessment and follow-up consultations at the ForPhysio Marinha Grande unit.\n\nA football enthusiast and a resistance training practitioner for several years, our nutritionist emphasizes that “a balanced diet, combined with regular physical activity, is undeniably a promoter of health and greater longevity.”\nHe believes that fostering a good relationship with food is the key factor for adopting healthier behaviors, also facilitating the long-term maintenance of these habits in daily life.',
        es: 'Filipe Vicente forma parte del equipo de ForPhysio Clinic desde 2021. Licenciado en Dietética y Nutrición por la Escuela Superior de Salud del Instituto Politécnico de Leiria (2019) y miembro efectivo de la Orden de Nutricionistas desde 2020.\n\nFilipe colaboró con el Leixões Sport Clube durante la temporada 2020/2021, con formación especializada en nutrición deportiva.\nActualmente, ejerce su práctica profesional en las áreas de nutrición clínica y deportiva, ofreciendo consultas de evaluación y seguimiento en la unidad ForPhysio Marinha Grande.\n\nAficionado al fútbol y practicante de entrenamiento de resistencia desde hace algunos años, nuestro nutricionista no se cansa de enfatizar que “una alimentación equilibrada, unida a la práctica de actividad física regular, son, innegablemente, promotores de la salud y una mayor longevidad”.\nCree que fomentar una buena relación con la comida es el factor clave para adoptar comportamientos más saludables, facilitando también el mantenimiento de estos a largo plazo en la vida diaria.',
        'zh-sg':
          'Filipe Vicente自2021年起加入ForPhysio Clinic团队。他毕业于里斯本健康科技高等学院（2019年），获得饮食和营养学学位，并自2020年起成为营养师协会的正式会员。\n\nFilipe在2020/2021赛季与Leixões Sport Clube合作，并接受了专业的运动营养培训。\n目前，他在临床营养和运动营养领域工作，在ForPhysio Marinha Grande单位提供评估和跟踪咨询。\n\n作为一个热爱足球并且多年进行耐力训练的营养师，他不断强调“均衡饮食与规律体育锻炼是健康和长寿的重要促进因素”。\n他认为，培养与食物的良好关系是采取更健康行为的关键因素，并能帮助人们在日常生活中长期维持这些习惯。',
      },
    },
    role: {
      translations: {
        pt: 'Nutricionista',
        en: 'Nutritionist',
        es: 'Nutricionista',
        'zh-sg': '营养师',
      },
    },
    services: [ServicesList.NUTRICAO],
    location: LocationEnum.MARINHA_GRANDE,
    image: 'filipe-vicente.png',
  },
  {
    id: 17,
    slug: 'guilherme-pina',
    name: 'Guilherme Pina',
    description: {
      translations: {
        pt: 'Guilherme Pina integra a equipa ForPhysio Clinic desde 2022.\nAtualmente, desempenha funções como Personal Trainer, com foco no Strength and Conditioning.\n\nÉ licenciado em Educação Física e Desporto desde 2022 pela Universidade Lusófona e está a tirar mestrado em Treino de Alto Rendimento na Faculdade de Motricidade Humana.\n\nEstando sempre ligado à natação, neste momento é treinador desta modalidade.',
        en: 'Guilherme Pina has been part of the ForPhysio Clinic team since 2022.\nHe currently works as a Personal Trainer, focusing on Strength and Conditioning.\n\nHe graduated in Physical Education and Sports in 2022 from Universidade Lusófona and is pursuing a Master’s in High-Performance Training at the Faculty of Human Motricity.\n\nAlways connected to swimming, he is currently a coach in this discipline.',
        es: 'Guilherme Pina integra el equipo de ForPhysio Clinic desde 2022.\nActualmente, desempeña funciones como Entrenador Personal, centrado en el Strength and Conditioning.\n\nSe graduó en Educación Física y Deportes en 2022 en la Universidad Lusófona y está cursando una maestría en Entrenamiento de Alto Rendimiento en la Facultad de Motricidad Humana.\n\nSiempre vinculado a la natación, en este momento es entrenador de esta modalidad.',
        'zh-sg':
          'Guilherme Pina自2022年起加入ForPhysio Clinic团队。\n目前，他担任私人教练，专注于力量与体能训练。\n\n他于2022年毕业于里斯本的卢索方大学，获得体育教育和运动学位，目前正在人类运动学院攻读高水平训练硕士学位。\n\n他一直与游泳保持联系，目前是该项目的教练。',
      },
    },
    role: {
      translations: {
        pt: 'Fisiologista do Exercício',
        en: 'Exercise Physiologist',
        es: 'Fisiologista del Ejercicio',
        'zh-sg': '运动生理学家',
      },
    },
    image: 'guilherme-pina.png',
  },
  {
    id: 18,
    slug: 'luis-machado',
    name: 'Luís Machado',
    description: {
      translations: {
        pt: 'Luís Machado colabora com a equipa da ForPhysio Clinic desde 2023, realizando consultas de ortopedia na unidade da ForPhysio Marinha Grande.\n\nÉ cirurgião ortopedista com especial interesse e dedicação exclusiva à articulação do joelho.',
        en: 'Luís Machado has been collaborating with the ForPhysio Clinic team since 2023, providing orthopedic consultations at the ForPhysio Marinha Grande unit.\n\nHe is an orthopedic surgeon with a special interest and exclusive focus on the knee joint.',
        es: 'Luís Machado colabora con el equipo de ForPhysio Clinic desde 2023, realizando consultas de ortopedia en la unidad de ForPhysio Marinha Grande.\n\nEs cirujano ortopédico con especial interés y dedicación exclusiva a la articulación de la rodilla.',
        'zh-sg':
          'Luís Machado 自2023年起与ForPhysio诊所团队合作，在ForPhysio Marinha Grande单位提供骨科咨询服务。\n\n他是一名骨科医生，特别关注并专注于膝关节。',
      },
    },
    role: {
      translations: {
        pt: 'Cirurgião Ortopedista',
        en: 'Orthopedic Surgeon',
        es: 'Cirujano Ortopédico',
        'zh-sg': '骨科外科医生',
      },
    },
    services: [ServicesList.CONSULTAS_MEDICAS],
    location: LocationEnum.MARINHA_GRANDE,
    image: 'luis-machado.png',
    contactsPage: true,
  },
  {
    id: 19,
    slug: 'paulo-pinheiro',
    name: 'Paulo Pinheiro',
    description: {
      translations: {
        pt: 'Dr. Paulo Pinheiro colabora com a equipa da ForPhysio Clinic desde 2024, realizando consultas de ortopedia na Unidade de Saúde Balance by ForPhysio Lumiar.\nÉ especialista em Medicina Desportiva, intervindo também no Sporting Clube de Portugal e no Hospital Amadora Sintra.',
        en: 'Dr. Paulo Pinheiro has been collaborating with the ForPhysio Clinic team since 2024, providing orthopedic consultations at the Balance by ForPhysio Lumiar Health Unit.\nHe is a specialist in Sports Medicine, also working with Sporting Clube de Portugal and Hospital Amadora Sintra.',
        es: 'El Dr. Paulo Pinheiro colabora con el equipo de ForPhysio Clinic desde 2024, realizando consultas de ortopedia en la Unidad de Salud Balance by ForPhysio Lumiar.\nEs especialista en Medicina Deportiva, interviniendo también en el Sporting Clube de Portugal y en el Hospital Amadora Sintra.',
        'zh-sg':
          '保罗·皮尼罗博士自2024年起与ForPhysio Clinic团队合作，在ForPhysio Lumiar健康单位提供骨科咨询。\n他是体育医学专家，也在里斯本体育俱乐部和阿马多拉辛特医院工作。',
      },
    },
    role: {
      translations: {
        pt: 'Médico Ortopedista',
        en: 'Orthopedic Doctor',
        es: 'Médico Ortopedista',
        'zh-sg': '骨科医生',
      },
    },
    contactsPage: true,
    services: [ServicesList.CONSULTAS_MEDICAS],
    location: LocationEnum.LISBOA_LUMIAR,
    image: 'paulo-pinheiro.png',
  },
];
