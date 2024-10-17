import { LocationEnum } from '../contacts/locations';
import { ServicesEnum } from '../services';

export enum teamEnum {
  NUNO_PINA = 1,
  MARISA_GOMES = 2,
  BEATRIZ_SILVA = 3,
  CLARA_PARDAL = 4,
  JOAO_FAIA = 5,
  LUIS_MACHADO = 6,
  MARGARIDA_SABOGA = 7,
  JOAQUIM_COELHO = 8,
  CONSTANCA_CARREIRA = 9,
  RAFAEL_MARIZ = 10,
  BEATRIZ_LOPES = 11,
  RICARDO_COTOVIO = 12,
  JOANA_ROCHA = 13,
  CATARINA_GAMA = 14,
  FILIPE_VICENTE = 15,
  GUILHERME_PINA = 16,
  PAULO_PINHEIRO = 17,
}

export const data = [
  {
    id: 1,
    slug: 'nuno-pina',
    name: 'Nuno Pina',
    description: {
      translations: {
        pt: 'Nuno Pina fundou a ForPhysio em 2014. Desde então, assume as funções de gerente e fisioterapeuta. Tem dedicado a sua prática profissional às áreas da fisioterapia músculo-esquelética e performance no desporto.\nDesde o início da sua carreira que colaborou paralelamente com entidades desportivas nacionais de renome, como Sport Lisboa e Benfica, Comité Olímpico de Portugal, Federação Portuguesa de Natação e Sporting Clube de Portugal, onde soma mais de 30 internacionalizações.\n\nCo-autor do livro “Mais Natação com futuro” sobre prevenção de lesões em nadadores, desde 2018 que Nuno Pina colabora com Instituições de Ensino Superior como professor convidado em várias pós-graduações, especializadas em reabilitação e performance desportiva.\nEntre 2016 e 2023, foi continuamente orientador de estágios académicos em fisioterapia, tendo colaborado com 6 Escolas.\nComo dirigente associativo, foi co-fundador e vice-presidente da atual Associação Nacional de Jovens na Fisioterapia entre 2014 e 2016, membro da direção da Associação Portuguesa de Fisioterapeutas entre 2016 e 2019 e integrou o Conselho Geral da Ordem dos Fisioterapeutas de 2020 a 2023.\nNo início de 2023, rumou à China para assumir funções na Federação Chinesa de Natação e Comité Olímpico Chinês, onde participou nos Jogos Asiáticos em Hangzhou (2023) e Jogos Olímpicos em Paris (2024), estando diretamente ligado a 2 títulos Olímpicos e a 2 recordes do mundo de natação.\n\nAtualmente, Nuno Pina, é responsável pela expansão internacional da ForPhysio Clinic para Pequim (China), onde assume funções de coordenação.',
        en: 'Nuno Pina founded ForPhysio in 2014. Since then, he has held the roles of manager and physiotherapist. He has dedicated his professional practice to musculoskeletal physiotherapy and sports performance.\nSince the beginning of his career, he has worked with renowned national sports entities such as Sport Lisboa e Benfica, the Portuguese Olympic Committee, the Portuguese Swimming Federation, and Sporting Clube de Portugal, with over 30 international appearances.\n\nCo-author of the book “More Swimming with a Future” on injury prevention in swimmers, since 2018, Nuno Pina has been collaborating with Higher Education Institutions as a guest professor in several post-graduate programs, specializing in sports rehabilitation and performance.\nBetween 2016 and 2023, he was continuously a supervisor of academic internships in physiotherapy, working with 6 schools.\nAs a leader in associations, he co-founded and was vice-president of the current National Association of Young Physiotherapists from 2014 to 2016, a board member of the Portuguese Physiotherapists Association from 2016 to 2019, and a member of the General Council of the Portuguese Order of Physiotherapists from 2020 to 2023.\nIn early 2023, he moved to China to take on roles with the Chinese Swimming Federation and the Chinese Olympic Committee, participating in the Asian Games in Hangzhou (2023) and the Paris Olympic Games (2024), directly involved in 2 Olympic titles and 2 swimming world records.\n\nCurrently, Nuno Pina is responsible for the international expansion of ForPhysio Clinic to Beijing (China), where he holds a coordination role.',
        es: 'Nuno Pina fundó ForPhysio en 2014. Desde entonces, ha desempeñado los roles de gerente y fisioterapeuta. Ha dedicado su práctica profesional a la fisioterapia musculoesquelética y el rendimiento deportivo.\nDesde el comienzo de su carrera, ha trabajado con entidades deportivas nacionales de renombre como Sport Lisboa e Benfica, el Comité Olímpico de Portugal, la Federación Portuguesa de Natación y el Sporting Clube de Portugal, con más de 30 internacionalidades.\n\nCoautor del libro “Más Natación con Futuro” sobre la prevención de lesiones en nadadores, desde 2018, Nuno Pina ha colaborado con Instituciones de Educación Superior como profesor invitado en varios programas de postgrado, especializados en rehabilitación deportiva y rendimiento.\nEntre 2016 y 2023, fue supervisor continuo de prácticas académicas en fisioterapia, colaborando con 6 escuelas.\nComo líder asociativo, cofundó y fue vicepresidente de la actual Asociación Nacional de Jóvenes en Fisioterapia entre 2014 y 2016, miembro de la junta de la Asociación Portuguesa de Fisioterapeutas entre 2016 y 2019, y formó parte del Consejo General de la Orden de Fisioterapeutas de 2020 a 2023.\nA principios de 2023, se trasladó a China para asumir funciones en la Federación China de Natación y el Comité Olímpico Chino, participando en los Juegos Asiáticos en Hangzhou (2023) y los Juegos Olímpicos en París (2024), involucrado directamente en 2 títulos olímpicos y 2 récords mundiales de natación.\n\nActualmente, Nuno Pina es responsable de la expansión internacional de ForPhysio Clinic a Beijing (China), donde desempeña un rol de coordinación.',
        'zh-sg':
          'Nuno Pina 于 2014 年创立了 ForPhysio。自那时以来，他担任经理和物理治疗师。他的职业实践专注于肌肉骨骼物理治疗和运动表现。\n自职业生涯开始以来，他一直与知名的国家体育实体合作，如里斯本竞技俱乐部、本菲卡俱乐部、葡萄牙奥林匹克委员会、葡萄牙游泳联合会和葡萄牙体育俱乐部，拥有超过 30 次国际出场记录。\n\n作为《更多游泳的未来》一书的共同作者，内容涉及游泳运动员的伤病预防。自 2018 年以来，Nuno Pina 一直与高等教育机构合作，担任多所体育康复和表现研究生课程的客座教授。\n在 2016 年至 2023 年间，他持续担任物理治疗学术实习的导师，与 6 所学校合作。\n作为协会领袖，他于 2014 年至 2016 年共同创立并担任现任国家年轻物理治疗师协会副主席，2016 年至 2019 年担任葡萄牙物理治疗师协会理事会成员，2020 年至 2023 年担任葡萄牙物理治疗师协会理事会成员。\n2023 年初，他前往中国，加入中国游泳联合会和中国奥林匹克委员会，在 2023 年杭州亚运会和 2024 年巴黎奥运会上担任职务，直接参与 2 个奥运冠军和 2 个游泳世界纪录。\n\n目前，Nuno Pina 负责 ForPhysio 诊所向中国北京的国际扩展，并担任协调职务。',
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
    services: [ServicesEnum.FISIOTERAPIA_MUSCULO_ESQUELETICA, ServicesEnum.FISIOTERAPIA_DESPORTO],
    location: LocationEnum.CALDAS_RAINHA,
    image: 'nuno-pina.png',
  },
  {
    id: 2,
    slug: 'marisa-gomes',
    name: 'Marisa Gomes',
    description: {
      translations: {
        pt: 'Marisa Gomes integra a equipa ForPhysio desde 2024. Atualmente, desempenha funções como fisioterapeuta da Unidade de Saúde Balance by ForPhysio Caldas da Rainha, onde exerce a sua intervenção clínica.\n\nÉ licenciada em fisioterapia pela Escola Superior de Saúde de Leiria, onde se encontra a realizar o mestrado em Fisioterapia: Ramo Prescrição Fisioterapêutica de Exercício Físico.',
        en: 'Marisa Gomes joined the ForPhysio team in 2024. Currently, she works as a physiotherapist at the Balance by ForPhysio Health Unit in Caldas da Rainha, where she conducts her clinical practice.\n\nShe holds a degree in physiotherapy from the School of Health Sciences of Leiria, where she is pursuing a master’s in Physiotherapy: Prescription of Physical Exercise.',
        es: 'Marisa Gomes se unió al equipo de ForPhysio en 2024. Actualmente, trabaja como fisioterapeuta en la Unidad de Salud Balance by ForPhysio en Caldas da Rainha, donde realiza su práctica clínica.\n\nEs licenciada en fisioterapia por la Escuela Superior de Salud de Leiria, donde está cursando una maestría en Fisioterapia: Prescripción de Ejercicio Físico.',
        'zh-sg':
          'Marisa Gomes 于 2024 年加入 ForPhysio 团队。目前，她在卡尔达斯达莱因哈的 Balance by ForPhysio 健康中心担任物理治疗师，进行临床实践。\n\n她毕业于莱里亚健康科学学院物理治疗专业，目前正在攻读物理治疗硕士学位：体力锻炼处方方向。',
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
    services: [ServicesEnum.FISIOTERAPIA_MUSCULO_ESQUELETICA],
    location: LocationEnum.CALDAS_RAINHA,
    image: 'marisa-gomes.png',
  },
  {
    id: 3,
    slug: 'beatriz-silva',
    name: 'Beatriz Silva',
    description: {
      translations: {
        pt: 'Beatriz Silva integra a equipa ForPhysio desde Dezembro de 2021. Atualmente, desempenha funções como fisioterapeuta na Unidade de Saúde Balance by ForPhysio Lumiar, exercendo a sua intervenção clínica na mesma unidade, e fisioterapeuta da equipa sénior de Hóquei em Patins, do Clube Desportivo Paço de Arcos, bem como coordenadora do departamento médico do clube. Além do mais, acumula funções de Diretora Geral e Gestora Financeira da ForPhysio.\n\nTendo sido atleta de alta competição de Tumbling (durante 12 anos) e de Basquetebol (durante 2 anos), manteve o seu gosto pela Fisioterapia Desportiva, tendo investido a sua formação na Pós Graduação em Fisioterapia Desportiva pela CESPU (terminada em 2023) e no curso Exos Performance Specialist (que ainda se encontra a realizar).\n\nDevido às suas funções na direção da ForPhysio, realizou os cursos: “10 Passos para Ter a Agenda Cheia” (Academia Ana Gonçalves), Comunicação Persuasiva (Speak and Lead), e Legislação e Organização de um Espaço em Fisioterapia (BluePhysio Consultoria).\nEnquanto estudante de fisioterapia, dedicou-se à organização do ENEFt’19 ao ENEFt’21, e já como estudante finalista e recém licenciada, traçou o seu percurso como dirigente associativa, iniciando-se no Grupo de Movimento Jovem na Fisioterapia (vogal-2021), e tendo evoluído para Presidente da Associação Nacional de Jovens na Fisioterapia (desde 2022). Enquanto Presidente, participou no evento da Sociedade Portuguesa da Literacia para a Saúde, “Opções dos Jovens Para a Saúde”, onde defendeu a visão dos Estudantes e Jovens Fisioterapeutas para o Futuro da Fisioterapia; e em diversas reuniões com os Partidos Políticos, com o mesmo objetivo.\n\nDesde 2023 que também assume a orientação de estágios curriculares. Também já assumiu o Seminário Integrado na Unidade de Introdução à Fisioterapia com o tema: “Conhecer a ANJF”, direcionado aos estudantes do 1º ano do Curso de Fisioterapia na Escola Superior de Saúde de Leiria.',
        en: 'Beatriz Silva has been part of the ForPhysio team since December 2021. Currently, she works as a physiotherapist at the Balance by ForPhysio Lumiar Health Unit, performing her clinical intervention at the same unit, and as a physiotherapist for the senior Roller Hockey team of Clube Desportivo Paço de Arcos, as well as coordinator of the club’s medical department. Additionally, she holds the positions of General Director and Financial Manager of ForPhysio.\n\nHaving been a high-performance athlete in Tumbling (for 12 years) and Basketball (for 2 years), she maintained her passion for Sports Physiotherapy, investing in her education with a Postgraduate Degree in Sports Physiotherapy from CESPU (completed in 2023) and the Exos Performance Specialist course (which she is still completing).\n\nDue to her roles in the management of ForPhysio, she has completed the courses: "10 Steps to Have a Full Agenda" (Academia Ana Gonçalves), Persuasive Communication (Speak and Lead), and Legislation and Organization of a Physiotherapy Space (BluePhysio Consulting).\nAs a physiotherapy student, she dedicated herself to organizing the ENEFt’19 to ENEFt’21, and as a final-year student and recent graduate, she outlined her path as an association leader, starting with the Young Physiotherapy Movement Group (board member - 2021), and later advancing to President of the National Association of Young Physiotherapists (since 2022). As President, she participated in the event of the Portuguese Society of Health Literacy, "Youth Options for Health", where she defended the vision of Students and Young Physiotherapists for the Future of Physiotherapy; and in several meetings with Political Parties, with the same goal.\n\nSince 2023, she has also been supervising internships. She has also conducted the Integrated Seminar in the Introduction to Physiotherapy Unit with the theme: "Getting to Know ANJF", aimed at 1st-year students of the Physiotherapy Course at the Leiria School of Health.',
        es: 'Beatriz Silva forma parte del equipo de ForPhysio desde diciembre de 2021. Actualmente, trabaja como fisioterapeuta en la Unidad de Salud Balance by ForPhysio Lumiar, realizando su intervención clínica en la misma unidad, y como fisioterapeuta del equipo senior de Hockey sobre Patines del Clube Desportivo Paço de Arcos, así como coordinadora del departamento médico del club. Además, desempeña funciones de Directora General y Gestora Financiera de ForPhysio.\n\nHabiendo sido atleta de alto rendimiento en Tumbling (durante 12 años) y Baloncesto (durante 2 años), mantuvo su pasión por la Fisioterapia Deportiva, invirtiendo en su formación con un Postgrado en Fisioterapia Deportiva en CESPU (completado en 2023) y el curso de Exos Performance Specialist (que todavía está realizando).\n\nDebido a sus funciones en la dirección de ForPhysio, ha realizado los cursos: "10 Pasos para Tener la Agenda Llena" (Academia Ana Gonçalves), Comunicación Persuasiva (Speak and Lead), y Legislación y Organización de un Espacio en Fisioterapia (BluePhysio Consultoría).\nComo estudiante de fisioterapia, se dedicó a la organización del ENEFt’19 al ENEFt’21, y ya como estudiante de último año y recién graduada, trazó su camino como líder asociativa, comenzando en el Grupo de Movimiento Juvenil en Fisioterapia (vocal-2021), y luego avanzando a Presidenta de la Asociación Nacional de Jóvenes en Fisioterapia (desde 2022). Como Presidenta, participó en el evento de la Sociedad Portuguesa de Alfabetización en Salud, "Opciones de los Jóvenes para la Salud", donde defendió la visión de los Estudiantes y Jóvenes Fisioterapeutas para el Futuro de la Fisioterapia; y en varias reuniones con los Partidos Políticos, con el mismo objetivo.\n\nDesde 2023 también ha asumido la supervisión de prácticas. También ha impartido el Seminario Integrado en la Unidad de Introducción a la Fisioterapia con el tema: "Conocer a ANJF", dirigido a los estudiantes de 1º año del Curso de Fisioterapia de la Escuela Superior de Salud de Leiria.',
        'zh-sg':
          'Beatriz Silva 自2021年12月起加入ForPhysio团队。目前，她在ForPhysio Lumiar Balance 健康中心担任物理治疗师，在同一单位进行临床干预，并担任Clube Desportivo Paço de Arcos高级轮滑曲棍球队的物理治疗师及俱乐部医疗部门协调员。此外，她还兼任ForPhysio的总经理和财务经理职务。\n\n作为一名高水平的翻腾运动员（12年）和篮球运动员（2年），她始终保持对运动物理治疗的热爱，并通过CESPU的运动物理治疗研究生课程（于2023年完成）和Exos Performance Specialist课程（仍在进行中）继续深造。\n\n由于她在ForPhysio管理层的职责，她还完成了以下课程：“如何让日程表排满的10个步骤”（Academia Ana Gonçalves），说服性沟通（Speak and Lead），以及物理治疗空间的立法与组织（BluePhysio Consulting）。\n作为物理治疗学生，她积极组织了ENEFt"19到ENEFt"21，作为应届毕业生和年轻领导者，她开启了她的协会领导之路，最初是物理治疗青年运动组织的董事会成员（2021年），随后从2022年起担任全国青年物理治疗师协会主席。作为主席，她参与了葡萄牙健康素养学会的活动“青年人的健康选择”，为学生和年轻物理治疗师的未来愿景发声，并出席了与政党的多次会议，表达相同目标。\n\n自2023年起，她还承担了实习监督工作。她还在Leiria健康学院为一年级物理治疗专业学生主持了“认识ANJF”主题的综合研讨会。',
      },
    },
    role: {
      translations: {
        pt: 'Fisioterapeuta, Diretora Geral e Gestora Financeira',
        en: 'Physiotherapist, General Director and Financial Manager',
        es: 'Fisioterapeuta, Directora General y Gestora Financiera',
        'zh-sg': '物理治疗师，总经理及财务经理',
      },
    },
    services: [
      ServicesEnum.FISIOTERAPIA_MUSCULO_ESQUELETICA,
      ServicesEnum.FISIOTERAPIA_DESPORTO,
      ServicesEnum.FISIOTERAPIA_AQUATICA_HIDROTERAPIA,
    ],
    location: LocationEnum.LISBOA_LUMIAR,
    image: 'beatriz-silva.png',
  },
  {
    id: 4,
    slug: 'clara-pardal',
    name: 'Clara Pardal',
    description: {
      translations: {
        pt: 'Clara Pardal integra a equipa ForPhysio desde 2023. Atualmente, desempenha funções como fisioterapeuta na unidade ForPhysio Oeiras, exercendo a sua intervenção clínica na mesma unidade.\nÉ licenciada em fisioterapia pela Escola Superior de Saúde de Alcoitão.\n\nTendo um passado enquanto nadadora, investiu a sua formação em Strenght and Conditioning, e acompanha os atletas da modalidade de natação do Clube de Futebol Os Belenenses.',
        en: 'Clara Pardal has been part of the ForPhysio team since 2023. She currently works as a physiotherapist at the ForPhysio Oeiras unit, providing clinical intervention at the same location.\nShe holds a degree in physiotherapy from the Escola Superior de Saúde de Alcoitão.\n\nWith a background as a swimmer, she has invested in Strength and Conditioning training and follows the swimmers of Clube de Futebol Os Belenenses.',
        es: 'Clara Pardal forma parte del equipo de ForPhysio desde 2023. Actualmente, trabaja como fisioterapeuta en la unidad ForPhysio Oeiras, realizando su intervención clínica en la misma unidad.\nTiene una licenciatura en fisioterapia por la Escuela Superior de Salud de Alcoitão.\n\nCon un pasado como nadadora, ha invertido en formación en Strenght and Conditioning, y acompaña a los atletas de la modalidad de natación del Clube de Futebol Os Belenenses.',
        'zh-sg':
          'Clara Pardal 自2023年起成为ForPhysio团队的一员。她目前在ForPhysio Oeiras单位担任物理治疗师，在同一单位提供临床干预。\n她毕业于Alcoitão健康学院，获得物理治疗学位。\n\n曾是一名游泳运动员的她，专注于力量与体能训练，并跟踪Os Belenenses足球俱乐部游泳运动员的表现。',
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
      ServicesEnum.FISIOTERAPIA_MUSCULO_ESQUELETICA,
      ServicesEnum.FISIOTERAPIA_DESPORTO,
      ServicesEnum.PILATES_CLINICO,
    ],
    location: LocationEnum.OEIRAS,
    image: 'clara-pardal.png',
  },
  {
    id: 5,
    slug: 'joao-faia',
    name: 'João Faia',
    description: {
      translations: {
        pt: 'João Faia integra a equipa ForPhysio desde 2024.\nAtualmente, desempenha funções como fisioterapeuta na parceria ForPhysio-Pard, em Beijing, China.\n\nÉ licenciado em fisioterapia pelo Instituto Politécnico do Porto e tem aprofundado o seu expertise em Strength and Conditioning, performance, e na fisioterapia desportiva. Iniciou o Mestrado em Treino de Alto Rendimento na FMH.\n\nComo trajeto profissional, passou pelo Sporting Clube de Portugal, mais especificamente pelo Basquetebol, e posteriormente no Futebol formação na Academia Cristiano Ronaldo.\nO João tem um gosto especial pelo desporto, principalmente pelo futebol. Um interesse grande por tecnologia e como esta pode melhorar o processo de avaliação e progressão ao longo da reabilitação.\n\nAcredita que o caminho para o sucesso na reabilitação, tal como na vida, é confiar no processo, tirar o melhor de cada momento e aprender o máximo possível ao longo do percurso.',
        en: 'João Faia has been part of the ForPhysio team since 2024.\nHe currently works as a physiotherapist in the ForPhysio-Pard partnership in Beijing, China.\n\nHe holds a degree in physiotherapy from the Polytechnic Institute of Porto and has deepened his expertise in Strength and Conditioning, performance, and sports physiotherapy. He has started a Master’s in High-Performance Training at FMH.\n\nIn his professional journey, he has worked with Sporting Clube de Portugal, specifically in Basketball, and later in Football training at the Cristiano Ronaldo Academy.\nJoão has a special passion for sports, particularly football. He has a strong interest in technology and how it can enhance the evaluation and progression process during rehabilitation.\n\nHe believes that the path to success in rehabilitation, just like in life, is to trust the process, make the most of each moment, and learn as much as possible along the way.',
        es: 'João Faia forma parte del equipo de ForPhysio desde 2024.\nActualmente, trabaja como fisioterapeuta en la colaboración ForPhysio-Pard, en Beijing, China.\n\nEs licenciado en fisioterapia por el Instituto Politécnico de Oporto y ha profundizado su experiencia en Strength and Conditioning, rendimiento y fisioterapia deportiva. Ha iniciado un Máster en Entrenamiento de Alto Rendimiento en la FMH.\n\nEn su trayectoria profesional, ha pasado por el Sporting Clube de Portugal, específicamente en Baloncesto, y posteriormente en formación de Fútbol en la Academia Cristiano Ronaldo.\nJoão tiene un interés especial por el deporte, principalmente el fútbol. Tiene un gran interés por la tecnología y cómo esta puede mejorar el proceso de evaluación y progresión a lo largo de la rehabilitación.\n\nCree que el camino hacia el éxito en la rehabilitación, al igual que en la vida, es confiar en el proceso, aprovechar al máximo cada momento y aprender lo más posible a lo largo del recorrido.',
        'zh-sg':
          'João Faia 自2024年起成为ForPhysio团队的一员。\n他目前在中国北京的ForPhysio-Pard合作伙伴关系中担任物理治疗师。\n\n他毕业于波尔图理工学院，深入研究力量与体能训练、运动表现和运动物理治疗。他已开始在FMH攻读高水平训练硕士学位。\n\n在职业生涯中，他曾在葡萄牙体育俱乐部工作，特别是在篮球方面，后来又在克里斯蒂亚诺·罗纳尔多学院的足球培训中工作。\nJoão 对运动有着特别的热爱，尤其是足球。他对技术有着浓厚的兴趣，尤其是它如何改善评估和康复过程中的进展。\n\n他相信，成功康复的道路与生活一样，是相信过程、充分利用每一个时刻并在过程中尽可能多地学习。',
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
    id: 6,
    slug: 'luis-machado',
    name: 'Luís Machado',
    description: {
      translations: {
        pt: 'Luís Machado colabora com a equipa da ForPhysio desde 2023, realizando consultas de ortopedia na unidade da ForPhysio Marinha Grande.\nÉ cirurgião ortopedista com especial interesse e dedicação na articulação do Joelho.',
        en: 'Luís Machado has been collaborating with the ForPhysio team since 2023, conducting orthopedic consultations at the ForPhysio Marinha Grande unit.\nHe is an orthopedic surgeon with a special interest and dedication to the knee joint.',
        es: 'Luís Machado colabora con el equipo de ForPhysio desde 2023, realizando consultas de ortopedia en la unidad de ForPhysio Marinha Grande.\nEs cirujano ortopédico con especial interés y dedicación en la articulación de la rodilla.',
        'zh-sg':
          'Luís Machado 自2023年起与ForPhysio团队合作，在ForPhysio Marinha Grande单位进行骨科咨询。\n他是一名专注于膝关节的骨科外科医生。',
      },
    },
    role: {
      translations: {
        pt: 'Cirurgião ortopedista',
        en: 'Orthopedic surgeon',
        es: 'Cirujano ortopédico',
        'zh-sg': '骨科外科医生',
      },
    },
    services: [ServicesEnum.CONSULTAS_MEDICAS],
    location: LocationEnum.MARINHA_GRANDE,
    image: 'luis-machado.png',
  },
  {
    id: 7,
    slug: 'margarida-saboga',
    name: 'Margarida Saboga',
    description: {
      translations: {
        pt: 'Margarida Saboga integra a equipa ForPhysio desde 2021. Atualmente, desempenha funções como fisioterapeuta e coordenadora da unidade ForPhysio Marinha Grande, exercendo a sua intervenção clínica na mesma unidade.\nÉ licenciada em fisioterapia pela Escola Superior de Saúde de Leiria. Atualmente, colabora paralelamente com o Sporting Clube Marinhense, realizando o acompanhamento das equipas seniores de hóquei em patins.\n\nTendo especial interesse na área da fisioterapia desportiva, acompanha na unidade vários atletas de basquetebol, andebol, atletismo e muay thai.',
        en: 'Margarida Saboga has been part of the ForPhysio team since 2021. She currently works as a physiotherapist and coordinator of the ForPhysio Marinha Grande unit, providing clinical intervention at the same location.\nShe holds a degree in physiotherapy from the Escola Superior de Saúde de Leiria. Currently, she also collaborates with Sporting Clube Marinhense, providing support for the senior roller hockey teams.\n\nWith a special interest in sports physiotherapy, she works with several basketball, handball, athletics, and muay thai athletes at the unit.',
        es: 'Margarida Saboga forma parte del equipo de ForPhysio desde 2021. Actualmente, trabaja como fisioterapeuta y coordinadora de la unidad ForPhysio Marinha Grande, realizando su intervención clínica en la misma unidad.\nEs licenciada en fisioterapia por la Escuela Superior de Salud de Leiria. Actualmente, colabora paralelamente con el Sporting Clube Marinhense, proporcionando apoyo a los equipos senior de hockey sobre patines.\n\nCon un especial interés en la fisioterapia deportiva, acompaña a varios atletas de baloncesto, balonmano, atletismo y muay thai en la unidad.',
        'zh-sg':
          'Margarida Saboga 自2021年起加入ForPhysio团队。她目前担任ForPhysio Marinha Grande单位的物理治疗师和协调员，在同一单位提供临床干预。\n她毕业于Leiria健康学院，获得物理治疗学位。目前，她还与Marinhense体育俱乐部合作，为高级轮滑曲棍球队提供支持。\n\nMargarida 对运动物理治疗特别感兴趣，在单位中跟踪多名篮球、手球、田径和泰拳运动员。',
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
      ServicesEnum.FISIOTERAPIA_MUSCULO_ESQUELETICA,
      ServicesEnum.FISIOTERAPIA_DESPORTO,
      ServicesEnum.PILATES_CLINICO,
    ],
    location: LocationEnum.MARINHA_GRANDE,
    image: 'margarida-saboga.png',
  },
  {
    id: 8,
    slug: 'joaquim-coelho',
    name: 'Joaquim Coelho',
    description: {
      translations: {
        pt: 'Joaquim Coelho integra a equipa ForPhysio desde Junho de 2024. Atualmente, desempenha funções como fisioterapeuta na Unidade de Saúde Balance by ForPhysio Lumiar, exercendo a sua intervenção clínica na mesma unidade.\n\nÉ licenciado em Fisioterapia pela Escola Superior de Tecnologia em Saúde de Coimbra, e tem aprofundado o seu expertise em Strength and Conditioning, Performance, e na Fisioterapia Desportiva.\nAtualmente é fisioterapeuta da equipa B de formação de basquetebol do Sporting Clube de Portugal, no escalão S23.\n\nPara além de fisioterapeuta, o Joaquim gosta de correr e de realizar treino de força. Sente que, desta forma, o ajuda a melhorar as suas características físicas e que o ajuda a melhor compreender os problemas/situações com que é confrontado na sua prática clínica.',
        en: 'Joaquim Coelho has been part of the ForPhysio team since June 2024. He currently works as a physiotherapist at the Balance by ForPhysio Lumiar Health Unit, providing clinical intervention at the same location.\n\nHe holds a degree in Physiotherapy from the Coimbra School of Health Technology and has deepened his expertise in Strength and Conditioning, Performance, and Sports Physiotherapy.\nHe is currently the physiotherapist for the U23 B training basketball team of Sporting Clube de Portugal.\n\nIn addition to being a physiotherapist, Joaquim enjoys running and strength training. He feels that this helps him improve his physical characteristics and better understand the problems and situations he encounters in his clinical practice.',
        es: 'Joaquim Coelho forma parte del equipo de ForPhysio desde junio de 2024. Actualmente, trabaja como fisioterapeuta en la Unidad de Salud Balance by ForPhysio Lumiar, realizando su intervención clínica en la misma unidad.\n\nEs licenciado en fisioterapia por la Escuela Superior de Tecnología en Salud de Coimbra, y ha profundizado su experiencia en Strength and Conditioning, rendimiento y fisioterapia deportiva.\nActualmente es fisioterapeuta del equipo B de formación de baloncesto del Sporting Clube de Portugal, en la categoría S23.\n\nAdemás de ser fisioterapeuta, Joaquim disfruta correr y realizar entrenamiento de fuerza. Siente que esto le ayuda a mejorar sus características físicas y a comprender mejor los problemas y situaciones a los que se enfrenta en su práctica clínica.',
        'zh-sg':
          'Joaquim Coelho 自2024年6月起成为ForPhysio团队的一员。他目前在ForPhysio Lumiar的健康单位担任物理治疗师，在同一单位提供临床干预。\n\n他毕业于科英布拉健康技术学院，获得物理治疗学位，并深入研究力量与体能训练、表现和运动物理治疗。\n他目前是葡萄牙体育俱乐部U23 B培训篮球队的物理治疗师。\n\n除了担任物理治疗师，Joaquim还喜欢跑步和进行力量训练。他觉得这有助于改善自己的身体素质，并帮助他更好地理解在临床实践中遇到的问题和情况。',
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
    services: [ServicesEnum.FISIOTERAPIA_MUSCULO_ESQUELETICA, ServicesEnum.FISIOTERAPIA_DESPORTO],
    location: LocationEnum.LISBOA_LUMIAR,
    image: 'joaquim-coelho.png',
  },
  {
    id: 9,
    slug: 'constanca-carreira',
    name: 'Constança Carreira',
    description: {
      translations: {
        pt: 'Constança Carreira, fisioterapeuta formada na Escola Superior de Saúde da Universidade de Aveiro.\nA Constança tem vindo a direcionar a sua prática profissional para a saúde pélvica e para a pediatria, contando já com diversas formações nas áreas.\n\nPorquê pélvica e pediatria? Considera essencial e fascinante poder entregar os cuidados prestados a começar na Saúde Pélvica, feminina e masculina, acompanhando o processo desde a gravidez e a parentalidade até ao pós-parto e à saúde infantil.',
        en: 'Constança Carreira, a physiotherapist graduated from the School of Health at the University of Aveiro.\nConstança has been focusing her professional practice on pelvic health and pediatrics, already having several trainings in these areas.\n\nWhy pelvic health and pediatrics? She considers it essential and fascinating to provide care starting with Pelvic Health, both for women and men, supporting the process from pregnancy and parenthood to postpartum and child health.',
        es: 'Constança Carreira, fisioterapeuta graduada en la Escuela Superior de Salud de la Universidad de Aveiro.\nConstança ha estado orientando su práctica profesional hacia la salud pélvica y la pediatría, contando ya con diversas formaciones en estas áreas.\n\n¿Por qué salud pélvica y pediatría? Considera esencial y fascinante poder brindar cuidados que comienzan en la salud pélvica, tanto femenina como masculina, acompañando el proceso desde el embarazo y la parentalidad hasta el posparto y la salud infantil.',
        'zh-sg':
          'Constança Carreira 是一名毕业于阿威罗大学健康学院的物理治疗师。\nConstança 一直将她的职业实践方向集中在骨盆健康和儿科领域，并已在这些领域获得多项培训。\n\n为什么选择骨盆健康和儿科？她认为，从骨盆健康（包括女性和男性）开始提供护理，并支持从怀孕、育儿到产后及儿童健康的过程，是非常必要且令人着迷的。',
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
    services: [ServicesEnum.FISIOTERAPIA_MUSCULO_ESQUELETICA, ServicesEnum.FISIOTERAPIA_DESPORTO],
    location: LocationEnum.AVEIRO,
    image: 'constanca-carreira.png',
  },
  {
    id: 10,
    slug: 'rafael-mariz',
    name: 'Rafael Mariz',
    description: {
      translations: {
        pt: 'Rafael Mariz integra a equipa ForPhysio desde outubro de 2024. Atualmente, desempenha funções como fisioterapeuta na Unidade de Saúde Balance by ForPhysio Aveiro, exercendo a sua intervenção clínica na mesma unidade.\nÉ licenciado pela Escola Superior de Saúde da Universidade de Aveiro e, atualmente, frequenta o mestrado de Fisioterapia Cardiovascular e Respiratória, na mesma Instituição de Ensino Superior.\nDe momento, encontra-se a trabalhar na área da Musculoesquelética, e conta também com formação na área de Strength and Conditioning.\n\nAtualmente colabora com a Federação Portuguesa de Andebol.',
        en: 'Rafael Mariz has been part of the ForPhysio team since October 2024. He currently works as a physiotherapist at the Balance by ForPhysio Aveiro Health Unit, providing clinical intervention at the same location.\nHe graduated from the School of Health at the University of Aveiro and is currently pursuing a master’s degree in Cardiovascular and Respiratory Physiotherapy at the same institution.\nAt present, he is working in the Musculoskeletal area and also has training in Strength and Conditioning.\n\nHe is currently collaborating with the Portuguese Handball Federation.',
        es: 'Rafael Mariz forma parte del equipo de ForPhysio desde octubre de 2024. Actualmente, trabaja como fisioterapeuta en la Unidad de Salud Balance by ForPhysio Aveiro, realizando su intervención clínica en la misma unidad.\nEs licenciado por la Escuela Superior de Salud de la Universidad de Aveiro y, actualmente, cursa un máster en Fisioterapia Cardiovascular y Respiratoria en la misma Institución de Educación Superior.\nEn este momento, trabaja en el área musculoesquelética y también cuenta con formación en Strength and Conditioning.\n\nActualmente colabora con la Federación Portuguesa de Balonmano.',
        'zh-sg':
          'Rafael Mariz 自2024年10月起加入ForPhysio团队，目前在ForPhysio Aveiro健康中心担任物理治疗师，在同一单位提供临床干预。\n他毕业于阿威罗大学健康学院，目前正在同一所大学攻读心血管和呼吸系统物理治疗硕士学位。\n目前，他从事肌肉骨骼领域的工作，并且还接受了力量与体能训练方面的培训。\n\n他目前与葡萄牙手球联合会合作。',
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
    services: [ServicesEnum.FISIOTERAPIA_MUSCULO_ESQUELETICA, ServicesEnum.FISIOTERAPIA_DESPORTO],
    location: LocationEnum.AVEIRO,
    image: 'rafael-mariz.png',
  },
  {
    id: 11,
    slug: 'beatriz-lopes',
    name: 'Beatriz Lopes',
    description: {
      translations: {
        pt: 'Beatriz Lopes integra a equipa ForPhysio desde Agosto de 2024. Atualmente, desempenha funções como fisioterapeuta na Unidade de Saúde Balance by ForPhysio Lumiar, exercendo a sua intervenção clínica na mesma unidade.\n\nÉ licenciada em Fisioterapia pelo Escola Superior de Saúde de Alcoitão, e tem aprofundado o seu expertise em Strength and Conditioning, Performance, e na Fisioterapia Desportiva, encontrando-se a realizar a Pós Graduação em Fisioterapia Desportiva pela CESPU.\nAtualmente é fisioterapeuta da equipa de futebol masculino U15 do Sporting Clube de Portugal.\n\nDurante vários anos foi atleta federada de futebol, mantendo uma ligação próxima a este desporto até aos dias de hoje.\n\nUm dos maiores objetivos para a sua carreira passa por contribuir para a mudança do que é a generalidade dos cuidados de fisioterapia atuais, por acreditar que o fisioterapeuta é um profissional com competências para promover a saúde e bem-estar de forma excecional.',
        en: 'Beatriz Lopes has been part of the ForPhysio team since August 2024. She currently works as a physiotherapist at the Balance by ForPhysio Lumiar Health Unit, providing clinical intervention at the same location.\n\nShe holds a degree in Physiotherapy from the Alcoitão School of Health and has deepened her expertise in Strength and Conditioning, Performance, and Sports Physiotherapy, currently pursuing a Postgraduate degree in Sports Physiotherapy at CESPU.\nShe is currently the physiotherapist for the U15 men’s football team of Sporting Clube de Portugal.\n\nFor many years, Beatriz was a federated football player, maintaining a close connection to the sport to this day.\n\nOne of her main career goals is to contribute to the transformation of current physiotherapy care, as she believes physiotherapists have the skills to promote health and well-being in an exceptional way.',
        es: 'Beatriz Lopes forma parte del equipo de ForPhysio desde agosto de 2024. Actualmente, trabaja como fisioterapeuta en la Unidad de Salud Balance by ForPhysio Lumiar, realizando su intervención clínica en la misma unidad.\n\nEs licenciada en Fisioterapia por la Escuela Superior de Salud de Alcoitão y ha profundizado su experiencia en Strength and Conditioning, rendimiento y fisioterapia deportiva, actualmente cursando un posgrado en Fisioterapia Deportiva en CESPU.\nActualmente es fisioterapeuta del equipo de fútbol masculino U15 del Sporting Clube de Portugal.\n\nDurante muchos años fue jugadora federada de fútbol, manteniendo una estrecha conexión con este deporte hasta el día de hoy.\n\nUno de los mayores objetivos para su carrera es contribuir al cambio en la fisioterapia actual, ya que cree que los fisioterapeutas son profesionales capacitados para promover la salud y el bienestar de manera excepcional.',
        'zh-sg':
          'Beatriz Lopes 自2024年8月起加入ForPhysio团队，目前在ForPhysio Lumiar健康中心担任物理治疗师，在同一单位提供临床干预。\n\n她毕业于Alcoitão健康学院，拥有物理治疗学位，并在力量与体能训练、表现和运动物理治疗方面深入发展，目前正在CESPU攻读运动物理治疗研究生课程。\n目前，她是葡萄牙体育俱乐部U15男子足球队的物理治疗师。\n\n多年来，Beatriz一直是足球联合会的运动员，并保持着与这项运动的紧密联系。\n\n她职业生涯的主要目标之一是推动当前物理治疗护理的变革，因为她相信物理治疗师具有卓越的能力，可以促进健康和福祉。',
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
    services: [ServicesEnum.FISIOTERAPIA_MUSCULO_ESQUELETICA, ServicesEnum.FISIOTERAPIA_DESPORTO],
    location: LocationEnum.LISBOA_LUMIAR,
    image: 'beatriz-lopes.png',
  },
  {
    id: 12,
    slug: 'ricardo-cotovio',
    name: 'Ricardo Cotovio',
    description: {
      translations: {
        pt: 'Ricardo Cotovio integra a equipa ForPhysio desde 2018. Coordenador da área da nutrição ForPhysio, atualmente presta consultas na unidade ForPhysio Oeiras.\n\nO Ricardo é licenciado em Dietética e Nutrição pela Escola Superior de Tecnologia da Saúde de Lisboa (2015) e membro da Ordem dos Nutricionistas (3955N) desde Dezembro 2018.\n\nDesde o início da sua carreira que colabora paralelamente com instituições desportivas de renome nacional e internacional como o Belenenses SAD, Al-Wehda (Arábia Saudita) e Shakhtar Donetsk (Ucrânia).\nJá em Portugal, colaborou com o Vitória FC e o Estrela da Amadora FC, e, neste momento, encontra-se em colaboração com a equipa sénior de futebol do Casa Pia.',
        en: 'Ricardo Cotovio has been part of the ForPhysio team since 2018. As the coordinator of the ForPhysio nutrition department, he currently provides consultations at the ForPhysio Oeiras unit.\n\nRicardo holds a degree in Dietetics and Nutrition from the Lisbon School of Health Technology (2015) and has been a member of the Order of Nutritionists (3955N) since December 2018.\n\nSince the beginning of his career, he has worked alongside national and international sports institutions of renown, such as Belenenses SAD, Al-Wehda (Saudi Arabia), and Shakhtar Donetsk (Ukraine).\nIn Portugal, he has collaborated with Vitória FC and Estrela da Amadora FC, and is currently working with the senior football team of Casa Pia.',
        es: 'Ricardo Cotovio forma parte del equipo de ForPhysio desde 2018. Coordinador del área de nutrición de ForPhysio, actualmente ofrece consultas en la unidad ForPhysio Oeiras.\n\nRicardo es licenciado en Dietética y Nutrición por la Escuela Superior de Tecnología de la Salud de Lisboa (2015) y miembro de la Orden de Nutricionistas (3955N) desde diciembre de 2018.\n\nDesde el comienzo de su carrera, ha colaborado paralelamente con instituciones deportivas de renombre nacional e internacional como Belenenses SAD, Al-Wehda (Arabia Saudita) y Shakhtar Donetsk (Ucrania).\nYa en Portugal, ha colaborado con Vitória FC y Estrela da Amadora FC, y actualmente está colaborando con el equipo de fútbol sénior de Casa Pia.',
        'zh-sg':
          'Ricardo Cotovio 自2018年以来一直是ForPhysio团队的一员。作为ForPhysio营养部门的协调员，他目前在ForPhysio Oeiras单位提供咨询服务。\n\nRicardo 毕业于里斯本健康技术学院，拥有营养与饮食学学位（2015年），自2018年12月以来一直是营养师协会（3955N）的成员。\n\n自职业生涯开始以来，他一直与国内外知名的体育机构合作，如Belenenses SAD、Al-Wehda（沙特阿拉伯）和Shakhtar Donetsk（乌克兰）。\n在葡萄牙，他与Vitória FC和Estrela da Amadora FC合作，目前正在与Casa Pia足球俱乐部的成年队合作。',
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
    services: [ServicesEnum.NUTRICAO],
    image: 'ricardo-cotovio.png',
  },
  {
    id: 13,
    slug: 'joana-rocha',
    name: 'Joana Rocha',
    description: {
      translations: {
        pt: 'Joana Rocha é licenciada em Fisioterapia pela Escola Superior de Tecnologia da Saúde de Lisboa, a terminar o mestrado em Fisioterapia em Saúde da Mulher pela mesma instituição.\n\nApaixonada pela área da saúde pélvica desde cedo, para além do mestrado, realizou outros cursos dentro da área.\n\nA Joana não abdica de idas à praia, viagens e da prática de Pilates, que considera fundamental para manter o equilíbrio entre o corpo e a mente.',
        en: 'Joana Rocha holds a degree in Physiotherapy from the Lisbon School of Health Technology and is completing her master’s in Women’s Health Physiotherapy at the same institution.\n\nPassionate about pelvic health from an early age, she has also completed additional courses in this field alongside her master’s degree.\n\nJoana enjoys beach outings, travel, and Pilates, which she considers essential for maintaining balance between body and mind.',
        es: 'Joana Rocha tiene una licenciatura en Fisioterapia por la Escuela Superior de Tecnología de la Salud de Lisboa y está finalizando su máster en Fisioterapia en Salud de la Mujer en la misma institución.\n\nApasionada por la salud pélvica desde joven, además del máster, ha realizado otros cursos en el área.\n\nJoana disfruta de ir a la playa, viajar y practicar Pilates, que considera fundamental para mantener el equilibrio entre cuerpo y mente.',
        'zh-sg':
          'Joana Rocha 毕业于里斯本健康技术学院，拥有物理治疗学学位，目前正在同一所学校完成妇女健康物理治疗硕士学位。\n\n她从小就对盆底健康充满热情，除了硕士学位之外，还完成了该领域的其他课程。\n\nJoana 喜欢去海滩、旅行，并练习普拉提，她认为这对保持身心平衡至关重要。',
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
    services: [ServicesEnum.FISIOTERAPIA_MUSCULO_ESQUELETICA, ServicesEnum.FISIOTERAPIA_DESPORTO],
    location: LocationEnum.LISBOA_LUMIAR,
    image: 'joana-rocha.png',
  },
  {
    id: 14,
    slug: 'catarina-gama',
    name: 'Catarina Gama',
    description: {
      translations: {
        pt: 'Catarina Gama, fisioterapeuta licenciada pela Escola Superior de Tecnologias da Saúde de Lisboa no presente ano de 2024. Realizou o seu último estágio curricular na ForPhysio Oeiras, e, pelo seu destaque, voltou a colaborar com a ForPhysio enquanto fisioterapeuta e preparadora física da equipa de Seniores B de Hóquei em Patins do Clube Desportivo de Paço de Arcos.\n\nO desporto é uma das suas paixões, acreditando plenamente na capacidade que o exercício tem de melhorar a funcionalidade, capacidade física e performance das pessoas.\nNos seus tempos livres, gosta de praticar exercício físico diário e possui também o gosto pela criação de conteúdos no digital.',
        en: 'Catarina Gama, a physiotherapist who graduated from the Lisbon School of Health Technologies in 2024. She completed her final internship at ForPhysio Oeiras, and due to her exceptional performance, she returned to collaborate with ForPhysio as a physiotherapist and strength and conditioning coach for the Senior B Roller Hockey team of Clube Desportivo de Paço de Arcos.\n\nSports are one of her passions, and she fully believes in the power of exercise to improve functionality, physical capacity, and performance.\nIn her free time, she enjoys daily physical exercise and has a passion for creating digital content.',
        es: 'Catarina Gama, fisioterapeuta licenciada por la Escuela Superior de Tecnologías de la Salud de Lisboa en el año 2024. Realizó su última práctica curricular en ForPhysio Oeiras y, debido a su destacado desempeño, volvió a colaborar con ForPhysio como fisioterapeuta y preparadora física del equipo Sénior B de Hockey sobre Patines del Clube Desportivo de Paço de Arcos.\n\nEl deporte es una de sus pasiones, creyendo plenamente en la capacidad que tiene el ejercicio para mejorar la funcionalidad, la capacidad física y el rendimiento de las personas.\nEn su tiempo libre, le gusta hacer ejercicio físico diario y también tiene afición por la creación de contenido digital.',
        'zh-sg':
          'Catarina Gama 是 2024 年毕业于里斯本健康技术学院的物理治疗师。她在 ForPhysio Oeiras 完成了最后的实习，并因其出色表现，回到 ForPhysio 担任物理治疗师和 Paço de Arcos 俱乐部 B 级成人轮滑曲棍球队的体能教练。\n\n体育运动是她的热情之一，她完全相信锻炼能够改善人的功能性、体能和表现。\n在业余时间，她喜欢每天进行体育锻炼，并对数字内容创作充满兴趣。',
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
    services: [ServicesEnum.FISIOTERAPIA_MUSCULO_ESQUELETICA, ServicesEnum.FISIOTERAPIA_DESPORTO],
    location: LocationEnum.AVEIRO,
    image: 'catarina-gama.png',
  },
  {
    id: 15,
    slug: 'filipe-vicente',
    name: 'Filipe Vicente',
    description: {
      translations: {
        pt: 'Filipe Vicente integra a equipa ForPhysio desde 2021. Licenciado em Dietética e Nutrição pela Escola Superior de Saúde do Instituto Politécnico de Leiria (2019) e membro efetivo da Ordem dos Nutricionistas desde 2020.\n\nO Filipe colaborou com o Leixões Sport Clube na época 2020/2021, contando com formação especializada no âmbito da nutrição desportiva.\nAtualmente, exerce a sua prática profissional nas áreas da nutrição clínica e desportiva, prestando consultas de avaliação e acompanhamento na unidade ForPhysio Marinha Grande.\n\nAficionado por futebol e praticante de treino de resistência há alguns anos, o nosso nutricionista não se cansa de reforçar que “uma alimentação equilibrada, aliada à prática de atividade física regular, são, inegavelmente, promotores da saúde e de uma maior longevidade”.\nAcredita que fomentar uma boa relação com a comida é o fator chave para a adoção de comportamentos mais saudáveis, facilitando também a manutenção destes a longo prazo no quotidiano.',
        en: 'Filipe Vicente has been part of the ForPhysio team since 2021. He holds a degree in Dietetics and Nutrition from the Health School of the Polytechnic Institute of Leiria (2019) and has been a full member of the Nutritionists’ Order since 2020.\n\nFilipe collaborated with Leixões Sport Club during the 2020/2021 season, specializing in sports nutrition. Currently, he practices in the areas of clinical and sports nutrition, offering evaluation and follow-up consultations at the ForPhysio Marinha Grande unit.\n\nA football enthusiast and resistance training practitioner for several years, Filipe is a firm believer in the saying, “A balanced diet, combined with regular physical activity, is undeniably a promoter of health and longevity.”\nHe believes that fostering a positive relationship with food is the key to adopting healthier behaviors and maintaining them in everyday life over the long term.',
        es: 'Filipe Vicente forma parte del equipo ForPhysio desde 2021. Es licenciado en Dietética y Nutrición por la Escuela Superior de Salud del Instituto Politécnico de Leiria (2019) y miembro activo de la Orden de Nutricionistas desde 2020.\n\nFilipe colaboró con Leixões Sport Clube en la temporada 2020/2021 y cuenta con formación especializada en nutrición deportiva. Actualmente, ejerce su práctica profesional en las áreas de nutrición clínica y deportiva, ofreciendo consultas de evaluación y seguimiento en la unidad ForPhysio Marinha Grande.\n\nAficionado al fútbol y practicante de entrenamiento de resistencia durante varios años, Filipe siempre refuerza la idea de que "una alimentación equilibrada, unida a la actividad física regular, son innegablemente promotores de la salud y una mayor longevidad”.\nCree que fomentar una buena relación con la comida es clave para adoptar comportamientos más saludables y mantenerlos a largo plazo en la vida cotidiana.',
        'zh-sg':
          'Filipe Vicente 自 2021 年起成为 ForPhysio 团队的一员。他于 2019 年毕业于莱里亚理工学院健康学院，获得饮食与营养学学位，并自 2020 年起成为营养师协会的正式成员。\n\nFilipe 在 2020/2021 赛季与 Leixões 运动俱乐部合作，专注于运动营养领域。目前，他在临床和运动营养领域开展工作，并在 ForPhysio Marinha Grande 单位提供评估和随访咨询。\n\n作为足球爱好者和多年来的耐力训练者，Filipe 坚信“均衡的饮食与规律的体育锻炼相结合，无疑是健康和长寿的推动力”。\n他相信，培养良好的饮食关系是采纳更健康行为的关键，并有助于在日常生活中长期维持这些行为。',
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
    services: [ServicesEnum.NUTRICAO],
    location: LocationEnum.MARINHA_GRANDE,
    image: 'filipe-vicente.png',
  },
  {
    id: 16,
    slug: 'guilherme-pina',
    name: 'Guilherme Pina',
    description: {
      translations: {
        pt: 'Guilherme Pina integra a equipa ForPhysio desde 2022.\nAtualmente, desempenha funções como Personal Trainer, com foco no Strength and Conditioning.\n\nÉ licenciado em Educação Física e Desporto desde 2022 pela Universidade Lusófona e está a tirar mestrado em Treino de Alto Rendimento na Faculdade de Motricidade Humana.\nEstando sempre ligado à natação, neste momento é treinador desta modalidade.',
        en: 'Guilherme Pina has been part of the ForPhysio team since 2022.\nCurrently, he works as a Personal Trainer, focusing on Strength and Conditioning.\n\nHe holds a degree in Physical Education and Sports from Lusófona University (2022) and is pursuing a Master’s degree in High-Performance Training at the Faculty of Human Kinetics.\nHaving always been connected to swimming, he is now a coach in this sport.',
        es: 'Guilherme Pina forma parte del equipo ForPhysio desde 2022.\nActualmente, trabaja como Entrenador Personal, con un enfoque en Strength and Conditioning.\n\nEs licenciado en Educación Física y Deporte por la Universidad Lusófona (2022) y está cursando un máster en Entrenamiento de Alto Rendimiento en la Facultad de Motricidad Humana.\nSiempre ha estado vinculado a la natación y actualmente es entrenador en esta modalidad.',
        'zh-sg':
          'Guilherme Pina 自 2022 年起成为 ForPhysio 团队的一员。\n目前，他担任私人教练，专注于力量和体能训练。\n\n他于 2022 年毕业于卢索福纳大学，获得体育教育和运动学士学位，并正在攻读人体运动学院的高性能训练硕士学位。\n他一直与游泳运动紧密联系，目前是一名游泳教练。',
      },
    },
    role: {
      translations: {
        pt: 'Personal Trainer',
        en: 'Personal Trainer',
        es: 'Entrenador Personal',
        'zh-sg': '私人教练',
      },
    },
    image: 'guilherme-pina.png',
  },
  {
    id: 17,
    slug: 'paulo-pinheiro',
    name: 'Paulo Pinheiro',
    description: {
      translations: {
        pt: '',
        en: '',
        es: '',
        'zh-sg': '',
      },
    },
    role: {
      translations: {
        pt: 'Cirurgião ortopedista',
        en: 'Orthopedic surgeon',
        es: 'Cirujano ortopédico',
        'zh-sg': '骨科外科医生',
      },
    },
    services: [ServicesEnum.CONSULTAS_MEDICAS],
    location: LocationEnum.MARINHA_GRANDE,
    image: 'paulo-pinheiro.png',
  },
  {
    id: 17,
    slug: 'ana-clara',
    name: 'Ana Clara',
    description: {
      translations: {
        pt: 'Ana Clara integra a equipa ForPhysio Clinic desde 2024.\nAtualmente, desempenha funções como fisioterapeuta da Unidade de Saúde Balance by ForPhysio Caldas da Rainha e na ForPhysio Caldas da Rainha (Rua do Funchal).\n\nÉ licenciada em fisioterapia pela Escola Superior de Saúde de Leiria. O seu percurso tem estado muito ligado à fisioterapia desportiva. Atualmente, é coordenadora do departamento médico do Caldas Rugby Clube, onde exerce funções como fisioterapeuta da equipa sénior de Rugby. Acompanha também atletas da Federação Portuguesa de Lohan Kao Tempo.',
        en: 'Ana Clara has been part of the ForPhysio Clinic team since 2024.\nCurrently, she works as a physiotherapist at the Balance by ForPhysio Health Unit in Caldas da Rainha and at ForPhysio Caldas da Rainha (Rua do Funchal).\n\nShe holds a degree in physiotherapy from the School of Health Sciences of Leiria. Her career has been closely linked to sports physiotherapy. Currently, she is the coordinator of the medical department at Caldas Rugby Club, where she works as a physiotherapist for the senior rugby team. She also supports athletes from the Portuguese Lohan Kao Tempo Federation.',
        es: 'Ana Clara forma parte del equipo de ForPhysio Clinic desde 2024.\nActualmente, trabaja como fisioterapeuta en la Unidad de Salud Balance by ForPhysio en Caldas da Rainha y en ForPhysio Caldas da Rainha (Rua do Funchal).\n\nEs licenciada en fisioterapia por la Escuela Superior de Salud de Leiria. Su carrera ha estado muy vinculada a la fisioterapia deportiva. Actualmente, es coordinadora del departamento médico del Caldas Rugby Club, donde trabaja como fisioterapeuta del equipo de rugby sénior. También apoya a los atletas de la Federación Portuguesa de Lohan Kao Tempo.',
        'zh-sg':
          'Ana Clara 自 2024 年起成为 ForPhysio 诊所团队的一员。\n目前，她在卡尔达斯达莱因哈的 Balance by ForPhysio 健康中心以及位于 Funchal 街的 ForPhysio 健康中心担任物理治疗师。\n\n她毕业于莱里亚健康科学学院物理治疗专业。她的职业生涯与运动物理治疗密切相关。目前，她是卡尔达斯橄榄球俱乐部医疗部门的协调员，并为该俱乐部的成年橄榄球队担任物理治疗师。同时，她还为葡萄牙洛汉卡奥天步联合会的运动员提供支持。',
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
    services: [ServicesEnum.FISIOTERAPIA_MUSCULO_ESQUELETICA, ServicesEnum.FISIOTERAPIA_DESPORTO],
    location: LocationEnum.CALDAS_RAINHA,
    image: 'ana-clara.png',
  },
];
