import { LocationsList } from './contacts/locations';

export enum ServicesList {
  FISIOTERAPIA_MUSCULO_ESQUELETICA = 1,
  FISIOTERAPIA_DESPORTO = 2,
  FISIOTERAPIA_AQUATICA_HIDROTERAPIA = 3,
  FISIOTERAPIA_PELVICA = 4,
  FISIOTERAPIA_ENVELHECIMENTO = 5,
  PILATES_CLINICO = 6,
  FISIOTERAPIA_ONLINE = 7,
  NUTRICAO = 8,
  SAUDE_BEM_ESTAR = 9,
  CONSULTAS_MEDICAS = 10,
}

export const data = [
  {
    id: 1,
    slug: {
      translations: {
        pt: 'fisioterapia-musculo-esqueletica',
        en: 'musculoskeletal-physiotherapy',
        es: 'fisioterapia-musculoesqueletica',
        'zh-sg': 'musculoskeletal-physiotherapy',
      },
    },
    title: {
      translations: {
        pt: 'Fisioterapia Músculo-Esquelética',
        en: 'Musculoskeletal Physiotherapy',
        es: 'Fisioterapia Musculoesquelética',
        'zh-sg': '肌肉骨骼物理治疗',
      },
    },
    image: '/images/services/list/fisioterapia-musculo-esqueletica.jpg',
    locationsId: [
      LocationsList.MARINHA_GRANDE,
      LocationsList.CALDAS_RAINHA,
      LocationsList.LISBOA_LUMIAR,
      LocationsList.OEIRAS,
      LocationsList.AVEIRO,
    ],
    homepage: true,
    blocks: {
      intro: {
        title: {
          translations: {
            pt: 'Fisioterapia\nmúsculo-esquelética',
            en: 'Musculoskeletal\nPhysiotherapy',
            es: 'Fisioterapia\nmusculoesquelética',
            'zh-sg': '肌肉骨骼\n物理治疗',
          },
        },
        text: {
          translations: {
            pt: 'A Fisioterapia Músculo-Esquelética é uma área que pretende ajudar a prevenir, reduzir ou eliminar a dor e as limitações funcionais.\n\nTal como em outras áreas da fisioterapia, carece de uma avaliação meticulosa, e de uma intervenção que recorre a técnicas manuais, exercício e educação.',
            en: 'Musculoskeletal Physiotherapy is a field that aims to help prevent, reduce, or eliminate pain and functional limitations.\n\nLike in other areas of physiotherapy, it requires a meticulous assessment and an intervention that employs manual techniques, exercise, and education.',
            es: 'La fisioterapia musculoesquelética es un área que pretende ayudar a prevenir, reducir o eliminar el dolor y las limitaciones funcionales.\n\nAl igual que en otras áreas de la fisioterapia, requiere una evaluación meticulosa y una intervención que recurre a técnicas manuales, ejercicio y educación.',
            'zh-sg':
              '肌肉骨骼物理治疗是一个旨在帮助预防、减少或消除疼痛和功能限制的领域。\n\n与物理治疗的其他领域一样，它需要细致的评估，以及使用手动技术、运动和教育的干预。',
          },
        },
        image: {
          mobile: '/images/services/detail/fisioterapia-musculo-esqueletica/intro/image-mobile.jpg',
          tablet: '/images/services/detail/fisioterapia-musculo-esqueletica/intro/image-tablet.jpg',
          desktop: '/images/services/detail/fisioterapia-musculo-esqueletica/intro/image-desktop.jpg',
          alt: {
            translations: {
              pt: 'Imagem de exercícios de fisioterapia musculo-esquelética.',
              en: 'Image of musculoskeletal physiotherapy exercises.',
              es: 'Imagen de ejercicios de fisioterapia musculoesquelética.',
              'zh-sg': '肌肉骨骼物理治疗练习的图片。',
            },
          },
        },
      },
      sideImage: {
        title: {
          translations: {
            pt: 'Para quem é indicada a fisioterapia músculo-esquelética?',
            en: 'Who is musculoskeletal physiotherapy for?',
            es: '¿Para quién es la fisioterapia musculoesquelética?',
            'zh-sg': '肌肉骨骼物理治疗适合谁？',
          },
        },
        text: {
          translations: {
            pt: 'Para todas as pessoas, de <span class="highlight">todas as idades</span>, que tenham condições neuro musculo esqueléticas.',
            en: 'For people of <span class="highlight">all ages</span> with neuromusculoskeletal conditions.',
            es: 'Para personas de <span class="highlight">todas las edades</span> que tengan condiciones neuromusculoesqueléticas.',
            'zh-sg': '适合患有神经肌肉骨骼问题的 <span class="highlight">各个年龄段</span> 的人群。',
          },
        },
        image: {
          mobile: '/images/services/detail/fisioterapia-musculo-esqueletica/side-image/image-mobile.jpg',
          tablet: '/images/services/detail/fisioterapia-musculo-esqueletica/side-image/image-tablet.jpg',
          desktop: '/images/services/detail/fisioterapia-musculo-esqueletica/side-image/image-desktop.jpg',
          alt: {
            translations: {
              pt: 'Imagem de exercícios de fisioterapia musculo-esquelética.',
              en: 'Image of musculoskeletal physiotherapy exercises.',
              es: 'Imagen de ejercicios de fisioterapia musculoesquelética.',
              'zh-sg': '肌肉骨骼物理治疗练习的图片。',
            },
          },
        },
      },
      imageFullwidth_1: {
        mobile: '/images/services/detail/fisioterapia-musculo-esqueletica/fullwidth-image/image-3-mobile.jpg',
        tablet: '/images/services/detail/fisioterapia-musculo-esqueletica/fullwidth-image/image-3-tablet.jpg',
        desktop: '/images/services/detail/fisioterapia-musculo-esqueletica/fullwidth-image/image-3-desktop.jpg',
        alt: {
          translations: {
            pt: 'Imagem de exercícios de fisioterapia musculo-esquelética.',
            en: 'Image of musculoskeletal physiotherapy exercises.',
            es: 'Imagen de ejercicios de fisioterapia musculoesquelética.',
            'zh-sg': '肌肉骨骼物理治疗练习的图片。',
          },
        },
      },
      topics_1: {
        title: {
          translations: {
            pt: 'É indicada para que situações?',
            en: 'For which conditions is it indicated?',
            es: '¿Para qué situaciones está indicada?',
            'zh-sg': '适用于哪些情况？',
          },
        },
        topics: {
          translations: {
            pt: '<ul><li>Dor (costas, ombro, cotovelo, joelho, anca)</li><li>Hérnias</li><li>Entorse</li><li>Rotura (ligamentos, musculares)</li><li>Lesões meniscais</li><li>Tendinopatias</li><li>Condromalacia (lesões da cartilagem)</li><li>Fascite plantar</li><li>Síndrome do túnel cárpico</li></ul>',
            en: '<ul><li>Pain (back, shoulder, elbow, knee, hip)</li><li>Herniations</li><li>Sprains</li><li>Tears (ligaments, muscles)</li><li>Meniscal injuries</li><li>Tendinopathies</li><li>Chondromalacia (cartilage injuries)</li><li>Plantar fasciitis</li><li>Carpal tunnel syndrome</li></ul>',
            es: '<ul><li>Dolor (espalda, hombro, codo, rodilla, cadera)</li><li>Hernias</li><li>Esguinces</li><li>Roturas (ligamentos, musculares)</li><li>Lesiones meniscales</li><li>Tendinopatías</li><li>Condromalacia (lesiones del cartílago)</li><li>Fascitis plantar</li><li>Síndrome del túnel carpiano</li></ul>',
            'zh-sg':
              '<ul><li>疼痛（背部、肩部、肘部、膝盖、髋关节）</li><li>椎间盘突出</li><li>扭伤</li><li>撕裂（韧带，肌肉）</li><li>半月板损伤</li><li>腱病</li><li>软骨软化症（软骨损伤）</li><li>足底筋膜炎</li><li>腕管综合症</li></ul>',
          },
        },
      },
      twoImagesGrid: {
        title: {
          translations: {
            pt: 'Quais os benefícios?',
            en: 'What are the benefits?',
            es: '¿Cuáles son los beneficios?',
            'zh-sg': '有什么好处？',
          },
        },
        topics: {
          translations: {
            pt: '<ul><li><span class="highlight">Alívio</span> da dor</li><li><span class="highlight">Estilo de vida ativo e saudável</span></li><li><span class="highlight">Capacitação</span> para atividades do dia a dia</li></ul>',
            en: '<ul><li><span class="highlight">Pain relief</span></li><li><span class="highlight">Active and healthy lifestyle</span></li><li><span class="highlight">Empowerment</span> for daily activities</li></ul>',
            es: '<ul><li><span class="highlight">Alivio</span> del dolor</li><li><span class="highlight">Estilo de vida activo y saludable</span></li><li><span class="highlight">Capacitación</span> para actividades diarias</li></ul>',
            'zh-sg':
              '<ul><li><span class="highlight">缓解疼痛</span></li><li><span class="highlight">积极健康的生活方式</span></li><li><span class="highlight">提升日常活动能力</span></li></ul>',
          },
        },
        imageBig: {
          mobile: '/images/services/detail/fisioterapia-musculo-esqueletica/two-images-grid/image-3-mobile.jpg',
          tablet: '/images/services/detail/fisioterapia-musculo-esqueletica/two-images-grid/image-3-tablet.jpg',
          desktop: '/images/services/detail/fisioterapia-musculo-esqueletica/two-images-grid/image-3-desktop.jpg',
          alt: {
            translations: {
              pt: 'Imagem de exercícios de fisioterapia músculo-esquelética.',
              en: 'Image of musculoskeletal physiotherapy exercises.',
              es: 'Imagen de ejercicios de fisioterapia musculoesquelética.',
              'zh-sg': '肌肉骨骼物理治疗练习的图片。',
            },
          },
        },
        imageSmall: {
          mobile: '/images/services/detail/fisioterapia-musculo-esqueletica/two-images-grid/image-2-mobile.jpg',
          tablet: '/images/services/detail/fisioterapia-musculo-esqueletica/two-images-grid/image-2-tablet.jpg',
          desktop: '/images/services/detail/fisioterapia-musculo-esqueletica/two-images-grid/image-2-desktop.jpg',
          alt: {
            translations: {
              pt: 'Imagem de exercícios de fisioterapia músculo-esquelética.',
              en: 'Image of musculoskeletal physiotherapy exercises.',
              es: 'Imagen de ejercicios de fisioterapia musculoesquelética.',
              'zh-sg': '肌肉骨骼物理治疗练习的图片。',
            },
          },
        },
      },
      topics_2: {
        title: {
          translations: {
            pt: 'Porquê optar pela ForPhysio Clinic?',
            en: 'Why choose ForPhysio Clinic?',
            es: '¿Por qué optar por ForPhysio Clinic?',
            'zh-sg': '为什么选择 ForPhysio Clinic？',
          },
        },
        topics: {
          translations: {
            pt: '<ul><li>Avaliação subjetiva e física individualizada</li><li>60 minutos dedicados ao cliente, sempre na presença do(a) fisioterapeuta</li><li>Intervenção baseada na melhor evidência científica</li><li>Monitorização constante da evolução</li><li>Relatório de alta em fisioterapia</li></ul>',
            en: '<ul><li>Individualized subjective and physical assessment</li><li>60 minutes dedicated to the client, always in the presence of the physiotherapist</li><li>Intervention based on the best scientific evidence</li><li>Constant monitoring of progress</li><li>Physiotherapy discharge report</li></ul>',
            es: '<ul><li>Evaluación subjetiva y física individualizada</li><li>60 minutos dedicados al cliente, siempre en presencia del fisioterapeuta</li><li>Intervención basada en la mejor evidencia científica</li><li>Monitorización constante de la evolución</li><li>Informe de alta en fisioterapia</li></ul>',
            'zh-sg':
              '<ul><li>个性化的主观和身体评估</li><li>每次治疗60分钟，始终有物理治疗师在场</li><li>基于最佳科学证据的干预</li><li>持续监测进展</li><li>物理治疗出院报告</li></ul>',
          },
        },
      },
      imageFullwidth_2: {
        mobile: '/images/services/detail/fisioterapia-musculo-esqueletica/fullwidth-image/image-4-mobile.jpg',
        tablet: '/images/services/detail/fisioterapia-musculo-esqueletica/fullwidth-image/image-4-tablet.jpg',
        desktop: '/images/services/detail/fisioterapia-musculo-esqueletica/fullwidth-image/image-4-desktop.jpg',
        alt: {
          translations: {
            pt: 'Imagem de exercícios de fisioterapia músculo-esquelética.',
            en: 'Image of musculoskeletal physiotherapy exercises.',
            es: 'Imagen de ejercicios de fisioterapia musculoesquelética.',
            'zh-sg': '肌肉骨骼物理治疗练习的图片。',
          },
        },
      },
      appointmentBanner: {
        image: {
          mobile: '/images/services/detail/fisioterapia-musculo-esqueletica/appointment-banner/image-mobile.jpg',
          tablet: '/images/services/detail/fisioterapia-musculo-esqueletica/appointment-banner/image-tablet.jpg',
          desktop: '/images/services/detail/fisioterapia-musculo-esqueletica/appointment-banner/image-desktop.jpg',
          alt: {
            translations: {
              pt: 'Imagem de exercícios de fisioterapia músculo-esquelética.',
              en: 'Image of musculoskeletal physiotherapy exercises.',
              es: 'Imagen de ejercicios de fisioterapia musculoesquelética.',
              'zh-sg': '肌肉骨骼物理治疗练习的图片。',
            },
          },
        },
      },
    },
  },

  {
    id: 2,
    slug: {
      translations: {
        pt: 'fisioterapia-no-desporto',
        en: 'sports-physiotherapy',
        es: 'fisioterapia-en-deporte',
        'zh-sg': 'sports-physiotherapy',
      },
    },
    title: {
      translations: {
        pt: 'Fisioterapia no Desporto',
        en: 'Sports Physiotherapy',
        es: 'Fisioterapia en el Deporte',
        'zh-sg': '運動物理治療',
      },
    },
    image: '/images/services/list/fisioterapia-no-desporto.jpg',
    locationsId: [
      LocationsList.MARINHA_GRANDE,
      LocationsList.CALDAS_RAINHA,
      LocationsList.LISBOA_LUMIAR,
      LocationsList.OEIRAS,
    ],
    homepage: true,
    detailLink: '',
    blocks: {
      intro: {
        title: {
          translations: {
            pt: 'Fisioterapia no Desporto',
            en: 'Sports Physiotherapy',
            es: 'Fisioterapia en el Deporte',
            'zh-sg': '運動物理治療',
          },
        },
        text: {
          translations: {
            pt: 'A Fisioterapia no Desporto tem como objetivo a promoção da atividade física de forma efetiva e segura, a redução do risco de lesões, a otimização da função e a contribuição para o melhor desempenho desportivo dos atletas de todas as idades e a diferentes níveis competitivos de diversas modalidades.',
            en: 'Sports Physiotherapy aims to promote physical activity effectively and safely, reduce the risk of injuries, optimize function, and contribute to better sports performance for athletes of all ages and levels in various sports.',
            es: 'La Fisioterapia en el Deporte tiene como objetivo promover la actividad física de manera efectiva y segura, reducir el riesgo de lesiones, optimizar la función y contribuir al mejor rendimiento deportivo de los atletas de todas las edades y niveles competitivos en diversas modalidades.',
            'zh-sg':
              '運動物理治療的目標是有效而安全地促進體育活動，降低受傷風險，優化功能，並為所有年齡層和各種運動的運動員貢獻更好的運動表現。',
          },
        },
        image: {
          mobile: '/images/services/detail/fisioterapia-desporto/intro/image-mobile.jpg',
          tablet: '/images/services/detail/fisioterapia-desporto/intro/image-tablet.jpg',
          desktop: '/images/services/detail/fisioterapia-desporto/intro/image-desktop.jpg',
          alt: {
            translations: {
              pt: 'Fisioterapia no Desporto',
              en: 'Sports Physiotherapy',
              es: 'Fisioterapia en el Deporte',
              'zh-sg': '運動物理治療',
            },
          },
        },
      },
      sideImage: {
        title: {
          translations: {
            pt: 'Para quem é indicada a fisioterapia no desporto?',
            en: 'Who is sports physiotherapy indicated for?',
            es: '¿Para quién está indicada la fisioterapia en el deporte?',
            'zh-sg': '运动理疗适合谁？',
          },
        },
        text: {
          translations: {
            pt: 'Atletas de <span class="highlight">todas as idades</span>, em diferentes níveis de competição e modalidades.',
            en: 'Athletes of <span class="highlight">all ages</span>, in different levels of competition and sports.',
            es: 'Atletas de <span class="highlight">todas las edades</span>, en diferentes niveles de competencia y modalidades.',
            'zh-sg': '各種運動的運動員，無論年齡和競爭水平。',
          },
        },
        image: {
          mobile: '/images/services/detail/fisioterapia-desporto/side-image/image-mobile.jpg',
          tablet: '/images/services/detail/fisioterapia-desporto/side-image/image-tablet.jpg',
          desktop: '/images/services/detail/fisioterapia-desporto/side-image/image-desktop.jpg',
          alt: {
            translations: {
              pt: 'Fisioterapia no Desporto',
              en: 'Sports Physiotherapy',
              es: 'Fisioterapia en el Deporte',
              'zh-sg': '運動物理治療',
            },
          },
        },
      },
      imageFullwidth_1: {
        mobile: '/images/services/detail/fisioterapia-desporto/fullwidth-image/image-1-mobile.jpg',
        tablet: '/images/services/detail/fisioterapia-desporto/fullwidth-image/image-1-tablet.jpg',
        desktop: '/images/services/detail/fisioterapia-desporto/fullwidth-image/image-1-desktop.jpg',
        alt: {
          translations: {
            pt: 'Fisioterapia no Desporto',
            en: 'Sports Physiotherapy',
            es: 'Fisioterapia en el Deporte',
            'zh-sg': '運動物理治療',
          },
        },
      },
      topics_1: {
        title: {
          translations: {
            pt: 'É indicada para que situações?',
            en: 'What situations is it suitable for?',
            es: '¿Para qué situaciones está indicada?',
            'zh-sg': '適合什麼情況？',
          },
        },
        topics: {
          translations: {
            pt: '<ul><li>Redução do risco de lesões</li><li>Melhoria do desempenho desportivo</li><li>Momento 0 de lesão (cuidados imediatos em contexto de treino ou jogo)</li><li>Dor (costas, ombro, cotovelo, joelho, anca)</li><li>Hérnias</li><li>Entorse do tornozelo ou punho</li><li>Rotura de ligamentos</li><li>Conflito subacromial</li><li>Roturas musculares</li><li>Lesões meniscais</li><li>Tendinopatias</li><li>Conflito femoro-acetabular</li><li>Condromalacia (lesões da cartilagem)</li><li>Fascíte plantar</li><li>Reabilitação pós cirúrgica</li><li>Reabilitação pós fratura e imobilização</li><li>Luxações</li></ul>',
            en: '<ul><li>Reduced risk of injuries</li><li>Improved sports performance</li><li>Moment 0 of injury (immediate care during training or match)</li><li>Pain (back, shoulder, elbow, knee, hip)</li><li>Herniated discs</li><li>Ankle or wrist sprain</li><li>Ligament tears</li><li>Subacromial impingement</li><li>Muscle tears</li><li>Meniscal injuries</li><li>Tendinopathies</li><li>Femoroacetabular impingement</li><li>Chondromalacia (cartilage injuries)</li><li>Plantar fasciitis</li><li>Post-surgical rehabilitation</li><li>Post-fracture and immobilization rehabilitation</li><li>Dislocations</li></ul>',
            es: '<ul><li>Reducción del riesgo de lesiones</li><li>Mejora del rendimiento deportivo</li><li>Momento 0 de lesión (cuidados inmediatos durante el entrenamiento o partido)</li><li>Dolor (espalda, hombro, codo, rodilla, cadera)</li><li>Hernias</li><li>Esguince de tobillo o muñeca</li><li>Rotura de ligamentos</li><li>Conflito subacromial</li><li>Roturas musculares</li><li>Lesiones meniscales</li><li>Tendinopatías</li><li>Conflito femoroacetabular</li><li>Condromalacia (lesiones del cartílago)</li><li>Fascitis plantar</li><li>Rehabilitación postquirúrgica</li><li>Rehabilitación post fractura e inmovilización</li><li>Luxaciones</li></ul>',
            'zh-sg':
              '<ul><li>減少受傷風險</li><li>改善運動表現</li><li>受傷的瞬間0（訓練或比賽中的即時護理）</li><li>疼痛（背部、肩膀、肘部、膝蓋、臀部）</li><li>椎間盤突出</li><li>踝關節或手腕扭傷</li><li>韌帶撕裂</li><li>肩峰下撞擊</li><li>肌肉撕裂</li><li>半月板損傷</li><li>肌腱病</li><li>股臼撞擊</li><li>軟骨軟化（軟骨損傷）</li><li>足底筋膜炎</li><li>術後康復</li><li>骨折後和固定後康復</li><li>脫臼</li></ul>',
          },
        },
      },
      twoImagesGrid: {
        title: {
          translations: {
            pt: 'Quais os benefícios?',
            en: 'What are the benefits?',
            es: '¿Cuáles son los beneficios?',
            'zh-sg': '有什麼好處？',
          },
        },
        topics: {
          translations: {
            pt: '<ul><li><span class="highlight">Promoção</span> de atividade física</li><li><span class="highlight">Redução do risco</span> de lesões</li><li><span class="highlight">Reabilitação</span> de lesões</li><li><span class="highlight">Otimização</span> da função</li><li><span class="highlight">Melhoria</span> do desempenho desportivo</li><li><span class="highlight">Momento</span> 0 de lesão (treino ou jogo)</li></ul>',
            en: '<ul><li><span class="highlight">Promotion</span> of physical activity</li><li><span class="highlight">Reduction</span> of injury risk</li><li><span class="highlight">Rehabilitation</span> of injuries</li><li><span class="highlight">Optimization</span> of function</li><li><span class="highlight">Improvement</span> of sports performance</li><li><span class="highlight">Moment</span> 0 of injury (training or match)</li></ul>',
            es: '<ul><li><span class="highlight">Promoción</span> de la actividad física</li><li><span class="highlight">Reducción</span> del riesgo de lesiones</li><li><span class="highlight">Rehabilitación</span> de lesiones</li><li><span class="highlight">Optimización</span> de la función</li><li><span class="highlight">Mejora</span> del rendimiento deportivo</li><li><span class="highlight">Momento</span> 0 de lesión (entrenamiento o partido)</li></ul>',
            'zh-sg':
              '<ul><li><span class="highlight">促進</span> 體育活動</li><li><span class="highlight">減少</span> 受傷風險</li><li><span class="highlight">受傷康復</span></li><li><span class="highlight">功能優化</span></li><li><span class="highlight">運動表現提升</span></li><li><span class="highlight">受傷的瞬間0（訓練或比賽）</li></ul>',
          },
        },
        imageBig: {
          mobile: '/images/services/detail/fisioterapia-desporto/two-images-grid/image-1-mobile.jpg',
          tablet: '/images/services/detail/fisioterapia-desporto/two-images-grid/image-1-tablet.jpg',
          desktop: '/images/services/detail/fisioterapia-desporto/two-images-grid/image-1-desktop.jpg',
          alt: {
            translations: {
              pt: 'Fisioterapia no Desporto',
              en: 'Sports Physiotherapy',
              es: 'Fisioterapia en el Deporte',
              'zh-sg': '運動物理治療',
            },
          },
        },
        imageSmall: {
          mobile: '/images/services/detail/fisioterapia-desporto/two-images-grid/image-2-mobile.jpg',
          tablet: '/images/services/detail/fisioterapia-desporto/two-images-grid/image-2-tablet.jpg',
          desktop: '/images/services/detail/fisioterapia-desporto/two-images-grid/image-2-desktop.jpg',
          alt: {
            translations: {
              pt: 'Fisioterapia no Desporto',
              en: 'Sports Physiotherapy',
              es: 'Fisioterapia en el Deporte',
              'zh-sg': '運動物理治療',
            },
          },
        },
      },
      topics_2: {
        title: {
          translations: {
            pt: 'Porquê optar pela ForPhysio Clinic?',
            en: 'Why choose ForPhysio Clinic?',
            es: '¿Por qué optar por ForPhysio Clinic?',
            'zh-sg': '為什麼選擇ForPhysio Clinic？',
          },
        },
        topics: {
          translations: {
            pt: '<ul><li>Avaliação subjetiva e física individualizada</li><li>Fisioterapeutas especializados em Fisioterapia no Desporto, com experiência comprovada na área</li><li>60 minutos dedicados ao cliente, sempre na presença do(a) fisioterapeuta</li><li>Intervenção baseada na melhor evidência científica</li><li>Monitorização objetiva e constante da evolução</li><li>Unidades equipadas com materiais e equipamentos de treino e tecnologia ideal para a recuperação de lesões desportivas</li><li>Parceria com inúmeros clubes desportivos de várias modalidades</li><li>Relatórios em fisioterapia</li></ul>',
            en: '<ul><li>Individualized subjective and physical assessment</li><li>Physiotherapists specialized in Sports Physiotherapy, with proven experience in the field</li><li>60 minutes dedicated to the client, always in the presence of the physiotherapist</li><li>Intervention based on the best scientific evidence</li><li>Objective and constant monitoring of progress</li><li>Units equipped with materials and training equipment and technology ideal for the recovery of sports injuries</li><li>Partnership with numerous sports clubs across various disciplines</li><li>Physiotherapy reports</li></ul>',
            es: '<ul><li>Evaluación subjetiva y física individualizada</li><li>Fisioterapeutas especializados en Fisioterapia en el Deporte, con experiencia comprobada en el área</li><li>60 minutos dedicados al cliente, siempre en presencia del fisioterapeuta</li><li>Intervención basada en la mejor evidencia científica</li><li>Monitoreo objetivo y constante de la evolución</li><li>Unidades equipadas con materiales y equipos de entrenamiento y tecnología ideal para la recuperación de lesiones deportivas</li><li>Colaboración con numerosos clubes deportivos de varias modalidades</li><li>Informes de fisioterapia</li></ul>',
            'zh-sg':
              '<ul><li>個性化主觀和身體評估</li><li>專注於運動物理治療的物理治療師，在該領域擁有驗證經驗</li><li>為客戶提供60分鐘的服務，始終在物理治療師的陪同下</li><li>基於最佳科學證據的干預</li><li>客觀且持續的進度監控</li><li>配備材料和訓練設備及技術的單位，適合運動損傷的康復</li><li>與多個運動俱樂部建立合作夥伴關係</li><li>物理治療報告</li></ul>',
          },
        },
      },
      imageFullwidth_2: {
        mobile: '/images/services/detail/fisioterapia-desporto/fullwidth-image/image-2-mobile.jpg',
        tablet: '/images/services/detail/fisioterapia-desporto/fullwidth-image/image-2-tablet.jpg',
        desktop: '/images/services/detail/fisioterapia-desporto/fullwidth-image/image-2-desktop.jpg',
        alt: {
          translations: {
            pt: 'Fisioterapia no Desporto',
            en: 'Sports Physiotherapy',
            es: 'Fisioterapia en el Deporte',
            'zh-sg': '運動物理治療',
          },
        },
      },
      appointmentBanner: {
        image: {
          mobile: '/images/services/detail/fisioterapia-desporto/appointment-banner/image-mobile.jpg',
          tablet: '/images/services/detail/fisioterapia-desporto/appointment-banner/image-tablet.jpg',
          desktop: '/images/services/detail/fisioterapia-desporto/appointment-banner/image-desktop.jpg',
          alt: {
            translations: {
              pt: 'Fisioterapia no Desporto',
              en: 'Sports Physiotherapy',
              es: 'Fisioterapia en el Deporte',
              'zh-sg': '運動物理治療',
            },
          },
        },
      },
    },
  },

  {
    id: 3,
    slug: 'fisioterapia-aquatica-e-hidroterapia',
    title: {
      translations: {
        pt: 'Fisioterapia Aquática e Hidroterapia',
        en: 'Aquatic Physiotherapy and Hydrotherapy',
        es: 'Fisioterapia Acuática y Hidroterapia',
        'zh-sg': '水疗和水疗理疗',
      },
    },
    image: '/images/services/list/fisioterapia-aquatica-e-hidroterapia.jpg',
    locationsId: [LocationsList.LISBOA_LUMIAR],
    homepage: true,
    blocks: {
      intro: {
        title: {
          translations: {
            pt: 'Fisioterapia\nAquática e Hidroterapia',
            en: 'Aquatic Physiotherapy\nand Hydrotherapy',
            es: 'Fisioterapia\nAcuática y Hidroterapia',
            'zh-sg': '水疗和水疗理疗',
          },
        },
        text: {
          translations: {
            pt: 'A Fisioterapia Aquática ou Hidroterapia em piscina consiste na aplicação de técnicas específicas de fisioterapia no meio aquático, tirando partido dos efeitos das propriedades físico-químicas da água.\nPode ser realizada individualmente ou em grupo, como forma única de tratamento ou como complemento de outra modalidade.',
            en: 'Aquatic Physiotherapy or Hydrotherapy in a pool consists of applying specific physiotherapy techniques in an aquatic environment, taking advantage of the effects of the physical-chemical properties of water.\nIt can be performed individually or in a group, as a unique form of treatment or as a complement to another modality.',
            es: 'La fisioterapia acuática o hidroterapia en piscina consiste en la aplicación de técnicas específicas de fisioterapia en el medio acuático, aprovechando los efectos de las propiedades físico-químicas del agua.\nPuede realizarse de forma individual o en grupo, como un tratamiento único o como complemento de otra modalidad.',
            'zh-sg':
              '水疗或水疗理疗是在水中应用特定的物理治疗技术，利用水的物理化学特性所带来的效果。\n可以单独进行或以小组形式进行，作为唯一的治疗方式或作为其他方法的补充。',
          },
        },
        image: {
          mobile: '/images/services/detail/fisioterapia-aquatica-hidroterapia/intro/image-mobile.jpg',
          tablet: '/images/services/detail/fisioterapia-aquatica-hidroterapia/intro/image-tablet.jpg',
          desktop: '/images/services/detail/fisioterapia-aquatica-hidroterapia/intro/image-desktop.jpg',
          alt: {
            translations: {
              pt: 'Fisioterapia Aquática e Hidroterapia',
              en: 'Aquatic Physiotherapy and Hydrotherapy',
              es: 'Fisioterapia Acuática y Hidroterapia',
              'zh-sg': '水疗和水疗理疗',
            },
          },
        },
      },
      sideImage: {
        title: {
          translations: {
            pt: 'Para quem é indicada a fisioterapia aquática e hidroterapia?',
            en: 'Who is aquatic physiotherapy and hydrotherapy indicated for?',
            es: '¿Para quién está indicada la fisioterapia acuática y la hidroterapia?',
            'zh-sg': '水疗和水疗理疗适合谁？',
          },
        },
        text: {
          translations: {
            pt: 'Para todas as pessoas, de <span class="highlight">todas as idades</span> e géneros.',
            en: 'For all people of <span class="highlight">all ages</span> and genders.',
            es: 'Para todas las personas, de <span class="highlight">todas las edades</span> y géneros.',
            'zh-sg': '适合所有年龄段和性别的人。',
          },
        },
        image: {
          mobile: '/images/services/detail/fisioterapia-aquatica-hidroterapia/side-image/image-mobile.jpg',
          tablet: '/images/services/detail/fisioterapia-aquatica-hidroterapia/side-image/image-tablet.jpg',
          desktop: '/images/services/detail/fisioterapia-aquatica-hidroterapia/side-image/image-desktop.jpg',
          alt: {
            translations: {
              pt: 'Fisioterapia Aquática e Hidroterapia',
              en: 'Aquatic Physiotherapy and Hydrotherapy',
              es: 'Fisioterapia Acuática y Hidroterapia',
              'zh-sg': '水疗和水疗理疗',
            },
          },
        },
      },
      imageFullwidth_1: {
        mobile: '/images/services/detail/fisioterapia-aquatica-hidroterapia/fullwidth-image/image-1-mobile.jpg',
        tablet: '/images/services/detail/fisioterapia-aquatica-hidroterapia/fullwidth-image/image-1-tablet.jpg',
        desktop: '/images/services/detail/fisioterapia-aquatica-hidroterapia/fullwidth-image/image-1-desktop.jpg',
        alt: {
          translations: {
            pt: 'Fisioterapia Aquática e Hidroterapia',
            en: 'Aquatic Physiotherapy and Hydrotherapy',
            es: 'Fisioterapia Acuática y Hidroterapia',
            'zh-sg': '水疗和水疗理疗',
          },
        },
      },
      topics_1: {
        title: {
          translations: {
            pt: 'É indicada para que situações?',
            en: 'What situations is it indicated for?',
            es: '¿Para qué situaciones está indicada?',
            'zh-sg': '适合什么情况？',
          },
        },
        topics: {
          translations: {
            pt: '<ul><li>Dor (costas, ombro, cotovelo, joelho, anca)</li><li>Hérnias</li><li>Entorse</li><li>Rotura (ligamentos, musculares)</li><li>Lesões meniscais</li><li>Tendinopatias</li><li>Condromalacia (lesões da cartilagem)</li><li>Fascite plantar</li><li>Síndrome do túnel cárpico</li><li>Reabilitação pós cirúrgica</li><li>Reabilitação pós fratura</li></ul>',
            en: '<ul><li>Pain (back, shoulder, elbow, knee, hip)</li><li>Hernias</li><li>Sprains</li><li>Tears (ligaments, muscles)</li><li>Meniscal injuries</li><li>Tendinopathies</li><li>Chondromalacia (cartilage injuries)</li><li>Plantar fasciitis</li><li>Carpal tunnel syndrome</li><li>Post-surgical rehabilitation</li><li>Post-fracture rehabilitation</li></ul>',
            es: '<ul><li>Dolor (espalda, hombro, codo, rodilla, cadera)</li><li>Hernias</li><li>Esfuerzos</li><li>Desgarros (ligamentos, musculares)</li><li>Lesiones meniscales</li><li>Tendinopatías</li><li>Condromalacia (lesiones del cartílago)</li><li>Fascitis plantar</li><li>Síndrome del túnel carpiano</li><li>Rehabilitación postquirúrgica</li><li>Rehabilitación post-fractura</li></ul>',
            'zh-sg':
              '<ul><li>疼痛（背部、肩部、肘部、膝盖、臀部）</li><li>疝气</li><li>扭伤</li><li>撕裂（韧带、肌肉）</li><li>半月板损伤</li><li>肌腱病</li><li>软骨软化（软骨损伤）</li><li>足底筋膜炎</li><li>腕管综合症</li><li>手术后康复</li><li>骨折后康复</li></ul>',
          },
        },
      },
      twoImagesGrid: {
        title: {
          translations: {
            pt: 'Quais os benefícios?',
            en: 'What are the benefits?',
            es: '¿Cuáles son los beneficios?',
            'zh-sg': '有什麼好處？',
          },
        },
        text: {
          translations: {
            pt: 'Os benefícios são proporcionados pelas propriedades físico-químicas da água, e pela imersão:',
            en: 'The benefits are provided by the physical-chemical properties of water and by immersion:',
            es: 'Los beneficios son proporcionados por las propiedades físico-químicas del agua y por la inmersión:',
            'zh-sg': '好处来自水的物理化学特性和浸泡：',
          },
        },
        topics: {
          translations: {
            pt: '<ul><li><span class="highlight">Alívio</span> da dor</li><li><span class="highlight">Promoção</span> da função cardiovascular e respiratória</li><li>Treino de <span class="highlight">marcha</span></li><li><span class="highlight">Fortalecimento</span> muscular (sem carga total)</li><li><span class="highlight">Qualidade</span> de vida</li></ul>',
            en: '<ul><li><span class="highlight">Pain relief</span></li><li><span class="highlight">Promotion</span> of cardiovascular and respiratory function</li><li><span class="highlight">Walking</span> training</li><li><span class="highlight">Muscle</span> strengthening (without total load)</li><li><span class="highlight">Quality</span> of life</li></ul>',
            es: '<ul><li><span class="highlight">Alivio</span> del dolor</li><li><span class="highlight">Promoción</span> de la función cardiovascular y respiratoria</li><li>Entrenamiento de <span class="highlight">marcha</span></li><li><span class="highlight">Fortalecimiento</span> muscular (sin carga total)</li><li><span class="highlight">Calidad</span> de vida</li></ul>',
            'zh-sg':
              '<ul><li><span class="highlight">缓解</span>疼痛</li><li><span class="highlight">促进</span>心血管和呼吸功能</li><li>步态<span class="highlight">训练</span></li><li><span class="highlight">肌肉</span>增强（不承重）</li><li><span class="highlight">生活</span>质量</li></ul>',
          },
        },
        imageBig: {
          mobile: '/images/services/detail/fisioterapia-aquatica-hidroterapia/two-images-grid/image-1-mobile.jpg',
          tablet: '/images/services/detail/fisioterapia-aquatica-hidroterapia/two-images-grid/image-1-tablet.jpg',
          desktop: '/images/services/detail/fisioterapia-aquatica-hidroterapia/two-images-grid/image-1-desktop.jpg',
          alt: {
            translations: {
              pt: 'Fisioterapia Aquática e Hidroterapia',
              en: 'Aquatic Physiotherapy and Hydrotherapy',
              es: 'Fisioterapia Acuática y Hidroterapia',
              'zh-sg': '水疗和水疗理疗',
            },
          },
        },
        imageSmall: {
          mobile: '/images/services/detail/fisioterapia-aquatica-hidroterapia/two-images-grid/image-2-mobile.jpg',
          tablet: '/images/services/detail/fisioterapia-aquatica-hidroterapia/two-images-grid/image-2-tablet.jpg',
          desktop: '/images/services/detail/fisioterapia-aquatica-hidroterapia/two-images-grid/image-2-desktop.jpg',
          alt: {
            translations: {
              pt: 'Fisioterapia Aquática e Hidroterapia',
              en: 'Aquatic Physiotherapy and Hydrotherapy',
              es: 'Fisioterapia Acuática y Hidroterapia',
              'zh-sg': '水疗和水疗理疗',
            },
          },
        },
      },
      topics_2: {
        title: {
          translations: {
            pt: 'Porquê optar pela ForPhysio Clinic?',
            en: 'Why choose ForPhysio Clinic?',
            es: '¿Por qué optar por ForPhysio Clinic?',
            'zh-sg': '为什么选择ForPhysio Clinic？',
          },
        },
        topics: {
          translations: {
            pt: '<ul><li>Orientado por um(a) fisioterapeuta, com conhecimento e capacidade de adaptação dos exercícios a cada pessoa e condição</li><li>Por ser utilizada como complemento em diversas condições clínicas, acelera a velocidade de recuperação</li><li>Excelentes instalações e equipamentos</li></ul>',
            en: '<ul><li>Guided by a physiotherapist, with knowledge and the ability to adapt exercises to each person and condition</li><li>Used as a complement in various clinical conditions, it accelerates the speed of recovery</li><li>Excellent facilities and equipment</li></ul>',
            es: '<ul><li>Orientado por un fisioterapeuta, con conocimientos y capacidad para adaptar los ejercicios a cada persona y condición</li><li>Al ser utilizada como complemento en diversas condiciones clínicas, acelera la velocidad de recuperación</li><li>Excelentes instalaciones y equipos</li></ul>',
            'zh-sg':
              '<ul><li>由具有知识和能力将练习适应每个人和情况的理疗师指导</li><li>作为多种临床情况的补充，能加快康复速度</li><li>优秀的设施和设备</li></ul>',
          },
        },
      },
      imageFullwidth_2: {
        mobile: '/images/services/detail/fisioterapia-aquatica-hidroterapia/fullwidth-image/image-2-mobile.jpg',
        tablet: '/images/services/detail/fisioterapia-aquatica-hidroterapia/fullwidth-image/image-2-tablet.jpg',
        desktop: '/images/services/detail/fisioterapia-aquatica-hidroterapia/fullwidth-image/image-2-desktop.jpg',
        alt: {
          translations: {
            pt: 'Fisioterapia Aquática e Hidroterapia',
            en: 'Aquatic Physiotherapy and Hydrotherapy',
            es: 'Fisioterapia Acuática y Hidroterapia',
            'zh-sg': '水疗和水疗理疗',
          },
        },
      },
      appointmentBanner: {
        image: {
          mobile: '/images/services/detail/fisioterapia-aquatica-hidroterapia/appointment-banner/image-mobile.jpg',
          tablet: '/images/services/detail/fisioterapia-aquatica-hidroterapia/appointment-banner/image-tablet.jpg',
          desktop: '/images/services/detail/fisioterapia-aquatica-hidroterapia/appointment-banner/image-desktop.jpg',
          alt: {
            translations: {
              pt: 'Fisioterapia Aquática e Hidroterapia',
              en: 'Aquatic Physiotherapy and Hydrotherapy',
              es: 'Fisioterapia Acuática y Hidroterapia',
              'zh-sg': '水疗和水疗理疗',
            },
          },
        },
      },
    },
  },

  {
    id: 4,
    slug: {
      translations: {
        pt: 'fisioterapia-pelvica',
        en: 'pelvic-physiotherapy',
        es: 'fisioterapia-pelvica',
        'zh-sg': 'pelvic-physiotherapy',
      },
    },
    title: {
      translations: {
        pt: 'Fisioterapia Pélvica',
        en: 'Pelvic Physiotherapy',
        es: 'Fisioterapia Pélvica',
        'zh-sg': '盆底物理治疗',
      },
    },
    image: '/images/services/list/fisioterapia-na-saude-da-mulher.jpg',
    homepage: true,
    locationsId: [LocationsList.CALDAS_RAINHA, LocationsList.AVEIRO, LocationsList.LISBOA_LUMIAR],
    blocks: {
      intro: {
        title: {
          translations: {
            pt: 'Fisioterapia Pélvica',
            en: 'Pelvic Physiotherapy',
            es: 'Fisioterapia Pélvica',
            'zh-sg': '盆底物理治疗',
          },
        },
        text: {
          translations: {
            pt: 'A Saúde Pélvica é uma área de intervenção da Fisioterapia que visa reabilitar e prevenir condições pélvicas (Homem e Mulher), acompanhar a Mulher no decorrer da sua gravidez e auxiliar na recuperação durante o período de pós-parto.\n\nAjudamos as Mulheres e os Homens a conhecerem o seu corpo e como cuidar dele, em todas as suas fases, sem tabus e sem preconceitos, de forma a melhorar a sua qualidade de vida.',
            en: 'Pelvic Health is a field of Physiotherapy focused on rehabilitating and preventing pelvic conditions (for both Men and Women), supporting Women throughout their pregnancy, and aiding in recovery during the postpartum period.\n\nWe help both Women and Men to understand their bodies and how to care for them in every phase of life, without taboos or prejudices, to improve their quality of life.',
            es: 'La Salud Pélvica es un área de intervención de la Fisioterapia que se centra en rehabilitar y prevenir condiciones pélvicas (tanto en hombres como en mujeres), acompañar a la mujer durante su embarazo y ayudar en la recuperación durante el período posparto.\n\nAyudamos a mujeres y hombres a conocer su cuerpo y cómo cuidarlo en todas sus etapas, sin tabúes ni prejuicios, para mejorar su calidad de vida.',
            'zh-sg':
              '盆腔健康是物理治疗的一个领域，旨在康复和预防盆腔疾病（包括男性和女性），支持女性在怀孕期间的身心健康，并帮助她们在产后恢复。\n\n我们帮助男性和女性了解自己的身体以及如何在生活的每个阶段照顾自己，不带任何禁忌和偏见，以改善他们的生活质量。',
          },
        },
        image: {
          mobile: '/images/services/detail/fisioterapia-saude-da-mulher/intro/image-mobile.jpg',
          tablet: '/images/services/detail/fisioterapia-saude-da-mulher/intro/image-tablet.jpg',
          desktop: '/images/services/detail/fisioterapia-saude-da-mulher/intro/image-desktop.jpg',
          alt: {
            translations: {
              pt: 'Fisioterapia Pélvica',
              en: 'Pelvic Physiotherapy',
              es: 'Fisioterapia Pélvica',
              'zh-sg': '盆底物理治疗',
            },
          },
        },
      },
      sideImage: {
        title: {
          translations: {
            pt: 'Para quem é indicada a fisioterapia na saúde da mulher?',
            en: "Who is physiotherapy in women's health indicated for?",
            es: '¿Para quién está indicada la fisioterapia en la salud de la mujer?',
            'zh-sg': '女性健康的物理治疗适用于谁？',
          },
        },
        text: {
          translations: {
            pt: 'Para todas as todas as mulheres e homens, de <span class="highlight">todas as idades</span>.',
            en: 'For all women and men, of <span class="highlight">all ages</span>.',
            es: 'Para todas las mujeres y hombres, de <span class="highlight">todas las edades</span>.',
            'zh-sg': '适用于所有年龄段的女性和男性，<span class="highlight">无论年龄</span>。',
          },
        },
        image: {
          mobile: '/images/services/detail/fisioterapia-saude-da-mulher/side-image/image-2-mobile.jpg',
          tablet: '/images/services/detail/fisioterapia-saude-da-mulher/side-image/image-2-tablet.jpg',
          desktop: '/images/services/detail/fisioterapia-saude-da-mulher/side-image/image-2-desktop.jpg',
          alt: {
            translations: {
              pt: 'Fisioterapia Pélvica',
              en: 'Pelvic Physiotherapy',
              es: 'Fisioterapia Pélvica',
              'zh-sg': '盆底物理治疗',
            },
          },
        },
      },
      imageFullwidth_1: {
        mobile: '/images/services/detail/fisioterapia-saude-da-mulher/fullwidth-image/image-3-mobile.jpg',
        tablet: '/images/services/detail/fisioterapia-saude-da-mulher/fullwidth-image/image-3-tablet.jpg',
        desktop: '/images/services/detail/fisioterapia-saude-da-mulher/fullwidth-image/image-3-desktop.jpg',
        alt: {
          translations: {
            pt: 'Fisioterapia Pélvica',
            en: 'Pelvic Physiotherapy',
            es: 'Fisioterapia Pélvica',
            'zh-sg': '盆底物理治疗',
          },
        },
      },
      topics_1: {
        title: {
          translations: {
            pt: 'É indicada para que situações?',
            en: 'What situations is it indicated for?',
            es: '¿Para qué situaciones está indicada?',
            'zh-sg': '适用于哪些情况？',
          },
        },
        topics: {
          translations: {
            pt: '<ul><li>Pré e pós parto</li><li>Diástase abdominal</li><li>Disfunções sexuais (dor durante a relação, vaginismo)</li><li>Disfunções sexuais do Homem (disfunção erétil, dor)</li><li>Endometriose</li><li>Obstipação</li><li>Prolapso de órgãos pélvicos (descida dos órgãos)</li><li>Menopausa</li><li>Incontinência (perda) urinária, fecal ou de gases</li></ul>',
            en: '<ul><li>Pre and postnatal</li><li>Abdominal diastasis</li><li>Sexual dysfunction (pain during intercourse, vaginismus)</li><li>Male sexual dysfunction (erectile dysfunction, pain)</li><li>Endometriosis</li><li>Constipation</li><li>Pelvic organ prolapse (descent of organs)</li><li>Menopause</li><li>Incontinence (loss) of urine, feces, or gas</li></ul>',
            es: '<ul><li>Antes y después del parto</li><li>Diástasis abdominal</li><li>Disfunciones sexuales (dolor durante la relación, vaginismo)</li><li>Disfunciones sexuales del Hombre (disfunción eréctil, dolor)</li><li>Endometriosis</li><li>Estreñimiento</li><li>Prolapso de órganos pélvicos (descenso de los órganos)</li><li>Menopausia</li><li>Incontinencia (pérdida) urinaria, fecal o de gases</li></ul>',
            'zh-sg':
              '<ul><li>产前和产后</li><li>腹部分离</li><li>性功能障碍（性交时疼痛，阴道痉挛）</li><li>男性性功能障碍（勃起功能障碍，疼痛）</li><li>子宫内膜异位症</li><li>便秘</li><li>盆腔器官脱垂（器官下垂）</li><li>更年期</li><li>尿失禁、粪便失禁或气体失禁</li></ul>',
          },
        },
      },
      twoImagesGrid: {
        title: {
          translations: {
            pt: 'Quais os benefícios?',
            en: 'What are the benefits?',
            es: '¿Cuáles son los beneficios?',
            'zh-sg': '有什么好处？',
          },
        },
        topics: {
          translations: {
            pt: '<ul><li><span class="highlight">Conhecimento</span> corporal</li><li><span class="highlight">Alívio da dor</span> (menstrual, durante a relação sexual)</li><li>Gravidez mais <span class="highlight">segura</span></li><li><span class="highlight">Recuperação</span> do corpo após o parto</li><li>Recuperação <span class="highlight">pós cirúrgica</span></li><li>Independência</li></ul>',
            en: '<ul><li><span class="highlight">Body</span> awareness</li><li><span class="highlight">Relief</span> from pain (menstrual, during sexual intercourse)</li><li>Safer <span class="highlight">pregnancy</span></li><li><span class="highlight">Recovery</span> of the body after childbirth</li><li><span class="highlight">Post-surgical</span> recovery</li><li>Independence</li></ul>',
            es: '<ul><li><span class="highlight">Conocimiento</span> corporal</li><li><span class="highlight">Alivio del dolor</span> (menstrual, durante la relación sexual)</li><li>Embarazo más <span class="highlight">seguro</span></li><li><span class="highlight">Recuperación</span> del cuerpo después del parto</li><li><span class="highlight">Recuperación</span> <span class="highlight">postquirúrgica</span></li><li>Independencia</li></ul>',
            'zh-sg':
              '<ul><li><span class="highlight">身体</span>意识</li><li><span class="highlight">疼痛</span>缓解（痛经，性交时）</li><li>更安全的<span class="highlight">怀孕</span></li><li>分娩后的<span class="highlight">身体恢复</span></li><li><span class="highlight">术后</span>恢复</li><li>独立性</li></ul>',
          },
        },
        imageBig: {
          mobile: '/images/services/detail/fisioterapia-saude-da-mulher/two-images-grid/image-3-mobile.jpg',
          tablet: '/images/services/detail/fisioterapia-saude-da-mulher/two-images-grid/image-3-tablet.jpg',
          desktop: '/images/services/detail/fisioterapia-saude-da-mulher/two-images-grid/image-3-desktop.jpg',
          alt: {
            translations: {
              pt: 'Fisioterapia Pélvica',
              en: 'Pelvic Physiotherapy',
              es: 'Fisioterapia Pélvica',
              'zh-sg': '盆底物理治疗',
            },
          },
        },
        imageSmall: {
          mobile: '/images/services/detail/fisioterapia-saude-da-mulher/two-images-grid/image-4-mobile.jpg',
          tablet: '/images/services/detail/fisioterapia-saude-da-mulher/two-images-grid/image-4-tablet.jpg',
          desktop: '/images/services/detail/fisioterapia-saude-da-mulher/two-images-grid/image-4-desktop.jpg',
          alt: {
            translations: {
              pt: 'Fisioterapia Pélvica',
              en: 'Pelvic Physiotherapy',
              es: 'Fisioterapia Pélvica',
              'zh-sg': '盆底物理治疗',
            },
          },
        },
      },
      topics_2: {
        title: {
          translations: {
            pt: 'Porquê optar pela ForPhysio Clinic?',
            en: 'Why choose ForPhysio Clinic?',
            es: '¿Por qué optar por ForPhysio Clinic?',
            'zh-sg': '为什么选择ForPhysio Clinic？',
          },
        },
        topics: {
          translations: {
            pt: '<ul><li>Avaliação subjetiva e física individualizada</li><li>Fisioterapeutas especializados em Saúde Pélvica</li><li>60 minutos dedicados ao cliente, sempre na presença do(a) fisioterapeuta</li><li>Intervenção baseada na melhor evidência científica</li><li>Monitorização constante da evolução</li><li>Relatório de alta em fisioterapia</li></ul>',
            en: '<ul><li>Individualized subjective and physical assessment</li><li>Pelvic Health specialized physiotherapists</li><li>60 minutes dedicated to the client, always in the presence of the physiotherapist</li><li>Intervention based on the best scientific evidence</li><li>Constant monitoring of progress</li><li>Discharge report in physiotherapy</li></ul>',
            es: '<ul><li>Evaluación subjetiva y física individualizada</li><li>Fisioterapeutas especializados en Salud Pélvica</li><li>60 minutos dedicados al cliente, siempre en presencia del fisioterapeuta</li><li>Intervención basada en la mejor evidencia científica</li><li>Monitoreo constante de la evolución</li><li>Informe de alta en fisioterapia</li></ul>',
            'zh-sg':
              '<ul><li>个性化的主观和身体评估</li><li>专业于盆腔健康的物理治疗师</li><li>为客户提供60分钟的专注时间，始终在物理治疗师的陪伴下</li><li>基于最佳科学证据的干预</li><li>不断监测进展</li><li>物理治疗的出院报告</li></ul>',
          },
        },
      },
      imageFullwidth_2: {
        mobile: '/images/services/detail/fisioterapia-saude-da-mulher/fullwidth-image/image-2-mobile.jpg',
        tablet: '/images/services/detail/fisioterapia-saude-da-mulher/fullwidth-image/image-2-tablet.jpg',
        desktop: '/images/services/detail/fisioterapia-saude-da-mulher/fullwidth-image/image-2-desktop.jpg',
        alt: {
          translations: {
            pt: 'Fisioterapia Pélvica',
            en: 'Pelvic Physiotherapy',
            es: 'Fisioterapia Pélvica',
            'zh-sg': '盆底物理治疗',
          },
        },
      },
      appointmentBanner: {
        image: {
          mobile: '/images/services/detail/fisioterapia-saude-da-mulher/appointment-banner/image-2-mobile.jpg',
          tablet: '/images/services/detail/fisioterapia-saude-da-mulher/appointment-banner/image-2-tablet.jpg',
          desktop: '/images/services/detail/fisioterapia-saude-da-mulher/appointment-banner/image-2-desktop.jpg',
          alt: {
            translations: {
              pt: 'Fisioterapia Pélvica',
              en: 'Pelvic Physiotherapy',
              es: 'Fisioterapia Pélvica',
              'zh-sg': '盆底物理治疗',
            },
          },
        },
      },
    },
  },

  {
    id: 5,
    slug: 'fisioterapia-no-envelhecimento',
    title: {
      translations: {
        pt: 'Fisioterapia no Envelhecimento',
        en: 'Physiotherapy in Aging',
        es: 'Fisioterapia en el Envejecimiento',
        'zh-sg': '老年医学物理治疗',
      },
    },
    image: '/images/services/list/fisioterapia-no-envelhecimento.jpg',
    locationsId: [
      LocationsList.MARINHA_GRANDE,
      LocationsList.CALDAS_RAINHA,
      LocationsList.LISBOA_LUMIAR,
      LocationsList.OEIRAS,
    ],
    homepage: true,
    blocks: {
      intro: {
        title: {
          translations: {
            pt: 'Fisioterapia no Envelhecimento Ativo',
            en: 'Physiotherapy in Active Aging',
            es: 'Fisioterapia en el envejecimiento activo',
            'zh-sg': '活跃老龄化中的物理治疗',
          },
        },
        text: {
          translations: {
            pt: 'O envelhecimento está associado a inúmeras alterações metabólicas e fisiológicas.\n\nO(a) fisioterapeuta intervém na prevenção e tratamento de possíveis lesões, bem como na melhoria das limitações e incapacidades funcionais.',
            en: 'Aging is associated with numerous metabolic and physiological changes.\n\nThe physiotherapist intervenes in the prevention and treatment of possible injuries, as well as improving functional limitations and disabilities.',
            es: 'El envejecimiento está asociado a numerosos cambios metabólicos y fisiológicos.\n\nEl fisioterapeuta interviene en la prevención y tratamiento de posibles lesiones, así como en la mejora de limitaciones y discapacidades funcionales.',
            'zh-sg': '老龄化与多种代谢和生理变化相关。\n\n理疗师介入可能的损伤的预防和治疗，以及改善功能限制和残疾。',
          },
        },
        image: {
          mobile: '/images/services/detail/fisioterapia-envelhecimento-ativo/intro/image-mobile.jpg',
          tablet: '/images/services/detail/fisioterapia-envelhecimento-ativo/intro/image-tablet.jpg',
          desktop: '/images/services/detail/fisioterapia-envelhecimento-ativo/intro/image-desktop-2.jpg',
          alt: {
            translations: {
              pt: 'Fisioterapia no envelhecimento ativo',
              en: 'Physiotherapy in Active Aging',
              es: 'Fisioterapia en el envejecimiento activo',
              'zh-sg': '活跃老龄化中的物理治疗',
            },
          },
        },
      },
      sideImage: {
        title: {
          translations: {
            pt: 'Para quem é indicada a fisioterapia no envelhecimento ativo?',
            en: 'Who is physiotherapy in active aging indicated for?',
            es: '¿Para quién está indicada la fisioterapia en el envejecimiento activo?',
            'zh-sg': '活跃老龄化中的物理治疗适合谁？',
          },
        },
        text: {
          translations: {
            pt: 'Pessoas acima dos <span class="highlight">65 anos</span>.',
            en: 'People over <span class="highlight">65 years</span> old.',
            es: 'Personas mayores de <span class="highlight">65 años</span>.',
            'zh-sg': '65岁以上的人。',
          },
        },
        image: {
          mobile: '/images/services/detail/fisioterapia-envelhecimento-ativo/side-image/image-mobile.jpg',
          tablet: '/images/services/detail/fisioterapia-envelhecimento-ativo/side-image/image-tablet.jpg',
          desktop: '/images/services/detail/fisioterapia-envelhecimento-ativo/side-image/image-desktop.jpg',
          alt: {
            translations: {
              pt: 'Fisioterapia no envelhecimento ativo',
              en: 'Physiotherapy in Active Aging',
              es: 'Fisioterapia en el envejecimiento activo',
              'zh-sg': '活跃老龄化中的物理治疗',
            },
          },
        },
      },
      imageFullwidth_1: {
        mobile: '/images/services/detail/fisioterapia-envelhecimento-ativo/fullwidth-image/image-1-mobile.jpg',
        tablet: '/images/services/detail/fisioterapia-envelhecimento-ativo/fullwidth-image/image-1-tablet.jpg',
        desktop: '/images/services/detail/fisioterapia-envelhecimento-ativo/fullwidth-image/image-1-desktop.jpg',
        alt: {
          translations: {
            pt: 'Fisioterapia no envelhecimento ativo',
            en: 'Physiotherapy in Active Aging',
            es: 'Fisioterapia en el envejecimiento activo',
            'zh-sg': '活跃老龄化中的物理治疗',
          },
        },
      },
      topics_1: {
        title: {
          translations: {
            pt: 'É indicada para que situações?',
            en: 'What situations is it indicated for?',
            es: '¿Para qué situaciones está indicada?',
            'zh-sg': '适合什么情况？',
          },
        },
        topics: {
          translations: {
            pt: '<ul><li>Dor (costas, ombro, cotovelo, joelho, anca)</li><li>Hérnias</li><li>Entorse</li><li>Rotura (ligamentos, musculares)</li><li>Lesões meniscais</li><li>Tendinopatias</li><li>Condromalacia (lesões da cartilagem)</li><li>Fascite plantar</li><li>Síndrome do túnel cárpico</li><li>Reabilitação pós cirúrgica</li><li>Reabilitação pós fratura</li></ul>',
            en: '<ul><li>Pain (back, shoulder, elbow, knee, hip)</li><li>Hernias</li><li>Sprains</li><li>Tears (ligaments, muscles)</li><li>Meniscal injuries</li><li>Tendinopathies</li><li>Chondromalacia (cartilage injuries)</li><li>Plantar fasciitis</li><li>Carpal tunnel syndrome</li><li>Post-surgical rehabilitation</li><li>Post-fracture rehabilitation</li></ul>',
            es: '<ul><li>Dolor (espalda, hombro, codo, rodilla, cadera)</li><li>Hernias</li><li>Esfuerzos</li><li>Desgarros (ligamentos, musculares)</li><li>Lesiones meniscales</li><li>Tendinopatías</li><li>Condromalacia (lesiones del cartílago)</li><li>Fascitis plantar</li><li>Síndrome del túnel carpiano</li><li>Rehabilitación postquirúrgica</li><li>Rehabilitación post-fractura</li></ul>',
            'zh-sg':
              '<ul><li>疼痛（背部、肩部、肘部、膝盖、臀部）</li><li>疝气</li><li>扭伤</li><li>撕裂（韧带、肌肉）</li><li>半月板损伤</li><li>肌腱病</li><li>软骨软化（软骨损伤）</li><li>足底筋膜炎</li><li>腕管综合症</li><li>手术后康复</li><li>骨折后康复</li></ul>',
          },
        },
      },
      twoImagesGrid: {
        title: {
          translations: {
            pt: 'Quais os benefícios?',
            en: 'What are the benefits?',
            es: '¿Cuáles son los beneficios?',
            'zh-sg': '有什麼好處？',
          },
        },
        text: {
          translations: {
            pt: 'Os benefícios são proporcionados pelas propriedades físico-químicas da água, e pela imersão:',
            en: 'The benefits are provided by the physical-chemical properties of water and by immersion:',
            es: 'Los beneficios son proporcionados por las propiedades físico-químicas del agua y por la inmersión:',
            'zh-sg': '好处来自水的物理化学特性和浸泡：',
          },
        },
        topics: {
          translations: {
            pt: '<ul><li><span class="highlight">Alívio</span> da dor</li><li>Estilo de vida <span class="highlight">ativo e saudável</span></li><li><span class="highlight">Capacitação</span> para atividades do dia-a-dia</li></ul>',
            en: '<ul><li><span class="highlight">Pain relief</span></li><li><span class="highlight">Active and healthy</span> lifestyle</li><li><span class="highlight">Empowerment</span> for daily activities</li></ul>',
            es: '<ul><li><span class="highlight">Alivio</span> del dolor</li><li>Estilo de vida <span class="highlight">activo y saludable</span></li><li><span class="highlight">Capacitación</span> para actividades diarias</li></ul>',
            'zh-sg':
              '<ul><li><span class="highlight">缓解</span>疼痛</li><li><span class="highlight">积极健康</span>的生活方式</li><li><span class="highlight">赋能</span>日常活动</li></ul>',
          },
        },
        imageBig: {
          mobile: '/images/services/detail/fisioterapia-envelhecimento-ativo/two-images-grid/image-1-mobile.jpg',
          tablet: '/images/services/detail/fisioterapia-envelhecimento-ativo/two-images-grid/image-1-tablet.jpg',
          desktop: '/images/services/detail/fisioterapia-envelhecimento-ativo/two-images-grid/image-1-desktop.jpg',
          alt: {
            translations: {
              pt: 'Fisioterapia no envelhecimento ativo',
              en: 'Physiotherapy in Active Aging',
              es: 'Fisioterapia en el envejecimiento activo',
              'zh-sg': '活跃老龄化中的物理治疗',
            },
          },
        },
        imageSmall: {
          mobile: '/images/services/detail/fisioterapia-envelhecimento-ativo/two-images-grid/image-2-mobile.jpg',
          tablet: '/images/services/detail/fisioterapia-envelhecimento-ativo/two-images-grid/image-2-tablet.jpg',
          desktop: '/images/services/detail/fisioterapia-envelhecimento-ativo/two-images-grid/image-2-desktop.jpg',
          alt: {
            translations: {
              pt: 'Fisioterapia no envelhecimento ativo',
              en: 'Physiotherapy in Active Aging',
              es: 'Fisioterapia en el envejecimiento activo',
              'zh-sg': '活跃老龄化中的物理治疗',
            },
          },
        },
      },
      topics_2: {
        title: {
          translations: {
            pt: 'Porquê optar pela ForPhysio Clinic?',
            en: 'Why choose ForPhysio Clinic?',
            es: '¿Por qué optar por ForPhysio Clinic?',
            'zh-sg': '为什么选择ForPhysio Clinic？',
          },
        },
        topics: {
          translations: {
            pt: '<ul><li>Avaliação subjetiva e física individualizada</li><li>60 minutos dedicados ao cliente, sempre na presença do(a) fisioterapeuta</li><li>Intervenção baseada na melhor evidência científica</li><li>Monitorização constante da evolução</li><li>Relatório de alta em fisioterapia</li></ul>',
            en: '<ul><li>Individualized subjective and physical assessment</li><li>60 minutes dedicated to the client, always in the presence of the physiotherapist</li><li>Intervention based on the best scientific evidence</li><li>Constant monitoring of progress</li><li>Physiotherapy discharge report</li></ul>',
            es: '<ul><li>Evaluación subjetiva y física individualizada</li><li>60 minutos dedicados al cliente, siempre en presencia del fisioterapeuta</li><li>Intervención basada en la mejor evidencia científica</li><li>Monitoreo constante de la evolución</li><li>Informe de alta en fisioterapia</li></ul>',
            'zh-sg':
              '<ul><li>个性化的主观和身体评估</li><li>60分钟专注于客户，始终在物理治疗师的陪同下</li><li>基于最佳科学证据的干预</li><li>不断监测进展</li><li>物理治疗出院报告</li></ul>',
          },
        },
      },
      imageFullwidth_2: {
        mobile: '/images/services/detail/fisioterapia-envelhecimento-ativo/fullwidth-image/image-2-mobile.jpg',
        tablet: '/images/services/detail/fisioterapia-envelhecimento-ativo/fullwidth-image/image-2-tablet.jpg',
        desktop: '/images/services/detail/fisioterapia-envelhecimento-ativo/fullwidth-image/image-2-desktop.jpg',
        alt: {
          translations: {
            pt: 'Fisioterapia no envelhecimento ativo',
            en: 'Physiotherapy in Active Aging',
            es: 'Fisioterapia en el envejecimiento activo',
            'zh-sg': '活跃老龄化中的物理治疗',
          },
        },
      },
      appointmentBanner: {
        image: {
          mobile: '/images/services/detail/fisioterapia-envelhecimento-ativo/appointment-banner/image-mobile.jpg',
          tablet: '/images/services/detail/fisioterapia-envelhecimento-ativo/appointment-banner/image-tablet.jpg',
          desktop: '/images/services/detail/fisioterapia-envelhecimento-ativo/appointment-banner/image-desktop.jpg',
          alt: {
            translations: {
              pt: 'Fisioterapia no envelhecimento ativo',
              en: 'Physiotherapy in Active Aging',
              es: 'Fisioterapia en el envejecimiento activo',
              'zh-sg': '活跃老龄化中的物理治疗',
            },
          },
        },
      },
    },
  },

  {
    id: 6,
    slug: {
      translations: {
        pt: 'pilates-clinico',
        en: 'clinical-pilates',
        es: 'pilates-clinico',
        'zh-sg': 'clinical-pilates',
      },
    },
    title: {
      translations: {
        pt: 'Pilates Clínico',
        en: 'Clinical Pilates',
        es: 'Pilates Clínico',
        'zh-sg': '临床普拉提',
      },
    },
    image: '/images/services/list/pilates-clinico.jpg',
    locationsId: [LocationsList.MARINHA_GRANDE, LocationsList.OEIRAS],
    homepage: false,
    blocks: {
      intro: {
        title: {
          translations: {
            pt: 'Pilates Clínico',
            en: 'Clinical Pilates',
            es: 'Pilates Clínico',
            'zh-sg': '临床普拉提',
          },
        },
        text: {
          translations: {
            pt: 'O Pilates Clínico é um método de controlo muscular desenvolvido por Joseph Pilates na década de 1920.\nPode ser realizado individualmente ou em grupo.',
            en: 'Clinical Pilates is a muscle control method developed by Joseph Pilates in the 1920s.\nIt can be performed individually or in groups.',
            es: 'El Pilates Clínico es un método de control muscular desarrollado por Joseph Pilates en la década de 1920.\nSe puede realizar de forma individual o en grupo.',
            'zh-sg': '临床普拉提是由约瑟夫·普拉提在20世纪20年代开发的一种肌肉控制方法。\n可以单独或以小组形式进行。',
          },
        },
        image: {
          mobile: '/images/services/detail/pilates-clinico/intro/image-mobile.jpg',
          tablet: '/images/services/detail/pilates-clinico/intro/image-tablet.jpg',
          desktop: '/images/services/detail/pilates-clinico/intro/image-desktop.jpg',
          alt: {
            translations: {
              pt: 'Pilates Clínico',
              en: 'Clinical Pilates',
              es: 'Pilates Clínico',
              'zh-sg': '临床普拉提',
            },
          },
        },
      },
      sideImage: {
        title: {
          translations: {
            pt: 'Para quem é indicada o pilates clínico?',
            en: 'Who is clinical Pilates indicated for?',
            es: '¿Para quién está indicado el pilates clínico?',
            'zh-sg': '临床普拉提适合谁？',
          },
        },
        text: {
          translations: {
            pt: 'Para todas as pessoas, de <span class="highlight">todas as idades e géneros</span>, com ou sem condição clínica associada.',
            en: 'For all people, of <span class="highlight">all ages and genders</span>, with or without associated clinical conditions.',
            es: 'Para todas las personas, de <span class="highlight">todas las edades y géneros</span>, con o sin condiciones clínicas asociadas.',
            'zh-sg': '适合所有人，<span class="highlight">所有年龄和性别</span>，无论是否有相关的临床状况。',
          },
        },
        image: {
          mobile: '/images/services/detail/pilates-clinico/side-image/image-mobile.jpg',
          tablet: '/images/services/detail/pilates-clinico/side-image/image-tablet.jpg',
          desktop: '/images/services/detail/pilates-clinico/side-image/image-desktop.jpg',
          alt: {
            translations: {
              pt: 'Pilates Clínico',
              en: 'Clinical Pilates',
              es: 'Pilates Clínico',
              'zh-sg': '临床普拉提',
            },
          },
        },
      },
      imageFullwidth_1: {
        mobile: '/images/services/detail/pilates-clinico/fullwidth-image/image-1-mobile.jpg',
        tablet: '/images/services/detail/pilates-clinico/fullwidth-image/image-1-tablet.jpg',
        desktop: '/images/services/detail/pilates-clinico/fullwidth-image/image-1-desktop.jpg',
        alt: {
          translations: {
            pt: 'Pilates Clínico',
            en: 'Clinical Pilates',
            es: 'Pilates Clínico',
            'zh-sg': '临床普拉提',
          },
        },
      },
      topics_1: {
        title: {
          translations: {
            pt: 'É indicada para que situações?',
            en: 'What situations is it indicated for?',
            es: '¿Para qué situaciones está indicada?',
            'zh-sg': '适用于哪些情况？',
          },
        },
        topics: {
          translations: {
            pt: '<ul><li>Perda de força</li><li>Limitações na postura</li><li>Dificuldades na marcha</li><li>Alterações no equilíbrio</li><li>Limitações funcionais</li><li>Redução de precisão de movimentos</li></ul>',
            en: '<ul><li>Loss of strength</li><li>Postural limitations</li><li>Walking difficulties</li><li>Balance changes</li><li>Functional limitations</li><li>Reduced movement accuracy</li></ul>',
            es: '<ul><li>Pérdida de fuerza</li><li>Limitaciones en la postura</li><li>Dificultades en la marcha</li><li>Cambios en el equilibrio</li><li>Limitaciones funcionales</li><li>Reducción de la precisión de los movimientos</li></ul>',
            'zh-sg':
              '<ul><li>力量下降</li><li>姿势限制</li><li>步态困难</li><li>平衡变化</li><li>功能性限制</li><li>动作准确性降低</li></ul>',
          },
        },
      },
      twoImagesGrid: {
        title: {
          translations: {
            pt: 'Quais os benefícios?',
            en: 'What are the benefits?',
            es: '¿Cuáles son los beneficios?',
            'zh-sg': '有什么好处？',
          },
        },
        topics: {
          translations: {
            pt: '<ul><li>Aumento da <span class="highlight">estabilidade articular</span></li><li><span class="highlight">Aumento</span> de força muscular</li><li>Melhoria da <span class="highlight">flexibilidade</span></li><li>Melhoria da <span class="highlight">coordenação</span> motora</li><li><span class="highlight">Melhoria</span> do controlo postural e respiratório</li><li>Aumento da <span class="highlight">capacidade</span> funcional</li><li>Promoção da <span class="highlight">independência</span></li><li><span class="highlight">Melhoria</span> da qualidade de vida</li></ul>',
            en: '<ul><li>Increased <span class="highlight">joint stability</span></li><li><span class="highlight">Increased</span> muscle strength</li><li>Improved <span class="highlight">flexibility</span></li><li>Improved <span class="highlight">motor coordination</span></li><li><span class="highlight">Improved</span> postural and respiratory control</li><li>Increased <span class="highlight">functional capacity</span></li><li>Promotion of <span class="highlight">independence</span></li><li><span class="highlight">Improved</span> quality of life</li></ul>',
            es: '<ul><li>Aumento de la <span class="highlight">estabilidad articular</span></li><li><span class="highlight">Aumento</span> de la fuerza muscular</li><li>Mejora de la <span class="highlight">flexibilidad</span></li><li>Mejora de la <span class="highlight">coordinación</span> motora</li><li><span class="highlight">Mejora</span> del control postural y respiratorio</li><li>Aumento de la <span class="highlight">capacidad</span> funcional</li><li>Promoción de la <span class="highlight">independencia</span></li><li><span class="highlight">Mejora</span> de la calidad de vida</li></ul>',
            'zh-sg':
              '<ul><li>提高<span class="highlight">关节稳定性</span></li><li><span class="highlight">提高</span>肌肉力量</li><li>改善<span class="highlight">柔韧性</span></li><li>改善<span class="highlight">运动协调能力</span></li><li><span class="highlight">改善</span>姿势和呼吸控制</li><li>提高<span class="highlight">功能能力</span></li><li>促进<span class="highlight">独立性</span></li><li><span class="highlight">改善</span>生活质量</li></ul>',
          },
        },
        imageBig: {
          mobile: '/images/services/detail/pilates-clinico/two-images-grid/image-1-mobile.jpg',
          tablet: '/images/services/detail/pilates-clinico/two-images-grid/image-1-tablet.jpg',
          desktop: '/images/services/detail/pilates-clinico/two-images-grid/image-1-desktop.jpg',
          alt: {
            translations: {
              pt: 'Pilates Clínico',
              en: 'Clinical Pilates',
              es: 'Pilates Clínico',
              'zh-sg': '临床普拉提',
            },
          },
        },
        imageSmall: {
          mobile: '/images/services/detail/pilates-clinico/two-images-grid/image-2-mobile.jpg',
          tablet: '/images/services/detail/pilates-clinico/two-images-grid/image-2-tablet.jpg',
          desktop: '/images/services/detail/pilates-clinico/two-images-grid/image-2-desktop.jpg',
          alt: {
            translations: {
              pt: 'Pilates Clínico',
              en: 'Clinical Pilates',
              es: 'Pilates Clínico',
              'zh-sg': '临床普拉提',
            },
          },
        },
      },
      topics_2: {
        title: {
          translations: {
            pt: 'Porquê optar pela ForPhysio Clinic?',
            en: 'Why choose ForPhysio Clinic?',
            es: '¿Por qué optar por ForPhysio Clinic?',
            'zh-sg': '为什么选择ForPhysio Clinic？',
          },
        },
        topics: {
          translations: {
            pt: '<ul><li>Orientado por um(a) fisioterapeuta, com conhecimento e capacidade de adaptação dos exercícios a cada pessoa e condição.</li><li>Vida saudável e ativa, de forma segura</li><li>Tem também a possibilidade de obter reembolso de parte do valor investido através dos subsistemas de saúde e seguros de saúde.</li></ul>',
            en: '<ul><li>Guided by a physiotherapist, with knowledge and ability to adapt exercises to each person and condition.</li><li>Healthy and active life, in a safe way</li><li>There is also the possibility of obtaining reimbursement for part of the amount invested through health subsystems and health insurance.</li></ul>',
            es: '<ul><li>Guiado por un(a) fisioterapeuta, con conocimiento y capacidad de adaptación de los ejercicios a cada persona y condición.</li><li>Vida sana y activa, de manera segura</li><li>También existe la posibilidad de obtener el reembolso de parte del importe invertido a través de subsistemas de salud y seguros de salud.</li></ul>',
            'zh-sg':
              '<ul><li>由物理治疗师指导，具有将练习适应于每个人和每种情况的知识和能力。</li><li>以安全的方式过上健康和积极的生活</li><li>也可以通过健康子系统和健康保险获得部分投资金额的报销。</li></ul>',
          },
        },
      },
      imageFullwidth_2: {
        mobile: '/images/services/detail/pilates-clinico/fullwidth-image/image-2-mobile.jpg',
        tablet: '/images/services/detail/pilates-clinico/fullwidth-image/image-2-tablet.jpg',
        desktop: '/images/services/detail/pilates-clinico/fullwidth-image/image-2-desktop.jpg',
        alt: {
          translations: {
            pt: 'Pilates Clínico',
            en: 'Clinical Pilates',
            es: 'Pilates Clínico',
            'zh-sg': '临床普拉提',
          },
        },
      },
      appointmentBanner: {
        image: {
          mobile: '/images/services/detail/pilates-clinico/appointment-banner/image-mobile.jpg',
          tablet: '/images/services/detail/pilates-clinico/appointment-banner/image-tablet.jpg',
          desktop: '/images/services/detail/pilates-clinico/appointment-banner/image-desktop.jpg',
          alt: {
            translations: {
              pt: 'Pilates Clínico',
              en: 'Clinical Pilates',
              es: 'Pilates Clínico',
              'zh-sg': '临床普拉提',
            },
          },
        },
      },
    },
  },

  {
    id: 7,
    slug: {
      translations: {
        pt: 'fisioterapia-online',
        en: 'online-physiotherapy',
        es: 'fisioterapia-en-linea',
        'zh-sg': 'online-physiotherapy',
      },
    },
    title: {
      translations: {
        pt: 'Fisioterapia Online',
        en: 'Online Physiotherapy',
        es: 'Fisioterapia en línea',
        'zh-sg': '在线物理治疗',
      },
    },
    image: '/images/services/list/fisioterapia-online.jpg',
    homepage: false,
    blocks: {
      intro: {
        title: {
          translations: {
            pt: 'Fisioterapia Online',
            en: 'Online Physiotherapy',
            es: 'Fisioterapia en línea',
            'zh-sg': '在线物理治疗',
          },
        },
        text: {
          translations: {
            pt: 'Sessão de fisioterapia sem ter que se deslocar às nossas instalações.',
            en: 'Physiotherapy session without having to travel to our facilities.',
            es: 'Sesión de fisioterapia sin necesidad de desplazarse a nuestras instalaciones.',
            'zh-sg': '无需前往我们的设施的物理治疗会议。',
          },
        },
        image: {
          mobile: '/images/services/detail/fisioterapia-online/intro/image-mobile.jpg',
          tablet: '/images/services/detail/fisioterapia-online/intro/image-tablet.jpg',
          desktop: '/images/services/detail/fisioterapia-online/intro/image-desktop.jpg',
          alt: {
            translations: {
              pt: 'Fisioterapia Online',
              en: 'Online Physiotherapy',
              es: 'Fisioterapia en línea',
              'zh-sg': '在线物理治疗',
            },
          },
        },
      },
      sideImage: {
        title: {
          translations: {
            pt: 'Para quem é indicada a fisioterapia online?',
            en: 'Who is online physiotherapy for?',
            es: '¿Para quién es la fisioterapia en línea?',
            'zh-sg': '在线物理治疗适合谁？',
          },
        },
        text: {
          translations: {
            pt: 'Para <span class="highlight">todos os que não se consigam deslocar</span> até às nossas instalações e necessitem de cuidados em fisioterapia <span class="highlight">músculo-esquelética</span>, <span class="highlight">desportiva</span>, no <span class="highlight">envelhecimento</span> ou <span class="highlight">saúde na mulher</span>.',
            en: 'For <span class="highlight">everyone who cannot travel</span> to our facilities and needs care in <span class="highlight">musculoskeletal</span>, <span class="highlight">sports</span>, <span class="highlight">aging</span>, or <span class="highlight">women\'s health</span> physiotherapy.',
            es: 'Para <span class="highlight">todos los que no puedan desplazarse</span> a nuestras instalaciones y necesiten cuidados en fisioterapia <span class="highlight">músculo-esquelética</span>, <span class="highlight">deportiva</span>, <span class="highlight">envejecimiento</span> o <span class="highlight">salud de la mujer</span>.',
            'zh-sg':
              '对于<span class="highlight">无法前往</span>我们设施的每个人，需要<span class="highlight">肌肉骨骼</span>、<span class="highlight">体育</span>、<span class="highlight">老龄化</span>或<span class="highlight">女性健康</span>的物理治疗。',
          },
        },
        image: {
          mobile: '/images/services/detail/fisioterapia-online/side-image/image-mobile.jpg',
          tablet: '/images/services/detail/fisioterapia-online/side-image/image-tablet.jpg',
          desktop: '/images/services/detail/fisioterapia-online/side-image/image-desktop.jpg',
          alt: {
            translations: {
              pt: 'Fisioterapia Online',
              en: 'Online Physiotherapy',
              es: 'Fisioterapia en línea',
              'zh-sg': '在线物理治疗',
            },
          },
        },
      },
      imageFullwidth_1: {
        mobile: '/images/services/detail/fisioterapia-online/fullwidth-image/image-1-mobile.jpg',
        tablet: '/images/services/detail/fisioterapia-online/fullwidth-image/image-1-tablet.jpg',
        desktop: '/images/services/detail/fisioterapia-online/fullwidth-image/image-1-desktop.jpg',
        alt: {
          translations: {
            pt: 'Fisioterapia Online',
            en: 'Online Physiotherapy',
            es: 'Fisioterapia en línea',
            'zh-sg': '在线物理治疗',
          },
        },
      },
      topics_1: {
        title: {
          translations: {
            pt: 'É indicada para que situações?',
            en: 'What situations is it indicated for?',
            es: '¿Para qué situaciones se indica?',
            'zh-sg': '适合什么情况？',
          },
        },
        topics: {
          translations: {
            pt: '<ul><li>Dor (costas, ombro, cotovelo, joelho, anca)</li><li>Hérnias</li><li>Ombro congelado</li><li>Entorse do tornozelo ou punho</li><li>Rotura de ligamentos</li><li>Conflito subacromial</li><li>Roturas musculares</li><li>Lesões meniscais</li><li>Tendinopatias</li><li>Conflito femoro-acetabular</li><li>Condromalacia (lesões da cartilagem)</li><li>Fascíte plantar</li><li>Síndrome do túnel cárpico</li></ul><ul><li>Reabilitação pós cirúrgica</li><li>Reabilitação pós fratura e imobilização</li><li>Luxações</li><li>Preparação para o nascimento</li><li>Recuperação pós-parto</li><li>Diástase abdominal</li><li>Disfunções sexuais (dor durante a relação, vaginismo)</li><li>Dor pélvica</li><li>Endometriose</li><li>Obstipação</li><li>Prolapso de órgãos pélvicos (descida dos órgãos)</li><li>Menopausa</li><li>Incontinência (perda) urinária, fecal ou de gases</li></ul>',
            en: '<ul><li>Pain (back, shoulder, elbow, knee, hip)</li><li>Hernias</li><li>Frozen shoulder</li><li>Ankle or wrist sprains</li><li>Ligament tears</li><li>Subacromial conflict</li><li>Muscle tears</li><li>Meniscus injuries</li><li>Tendinopathies</li><li>Femoroacetabular conflict</li><li>Chondromalacia (cartilage injuries)</li><li>Plantar fasciitis</li><li>Carpal tunnel syndrome</li><li>Post-surgical rehabilitation</li><li>Post-fracture and immobilization rehabilitation</li><li>Dislocations</li><li>Preparation for childbirth</li><li>Postpartum recovery</li><li>Abdominal diastasis</li><li>Sexual dysfunctions (pain during intercourse, vaginismus)</li><li>Pelvic pain</li><li>Endometriosis</li><li>Constipation</li><li>Pelvic organ prolapse (descent of organs)</li><li>Menopause</li><li>Urinary, fecal or gas incontinence (leakage)</li></ul>',
            es: '<ul><li>Dolor (espalda, hombro, codo, rodilla, cadera)</li><li>Hernias</li><li>Hombro congelado</li><li>Esguinces de tobillo o muñeca</li><li>Desgarros de ligamentos</li><li>Conflicto subacromial</li><li>Desgarros musculares</li><li>Lesiones meniscales</li><li>Tendinopatías</li><li>Conflicto femoro-acetabular</li><li>Condromalacia (lesiones del cartílago)</li><li>Fascitis plantar</li><li>Síndrome del túnel carpiano</li><li>Rehabilitación postquirúrgica</li><li>Rehabilitación post-fractura e inmovilización</li><li>Luxaciones</li><li>Preparación para el parto</li><li>Recuperación postparto</li><li>Diástasis abdominal</li><li>Disfunciones sexuales (dolor durante la relación, vaginismo)</li><li>Dolor pélvico</li><li>Endometriosis</li><li>Estreñimiento</li><li>Prolapso de órganos pélvicos (descenso de órganos)</li><li>Menopausia</li><li>Incontinencia (pérdida) urinaria, fecal o de gases</li></ul>',
            'zh-sg':
              '<ul><li>疼痛（背部、肩部、肘部、膝盖、臀部）</li><li>疝气</li><li>冻结肩</li><li>脚踝或手腕扭伤</li><li>韧带撕裂</li><li>肩胛下冲突</li><li>肌肉撕裂</li><li>半月板损伤</li><li>肌腱病</li><li>股骨与髋臼冲突</li><li>软骨软化（软骨损伤）</li><li>足底筋膜炎</li><li>腕管综合症</li><li>手术后康复</li><li>骨折和固定后的康复</li><li>脱位</li><li>分娩准备</li><li>产后恢复</li><li>腹部分离</li><li>性功能障碍（性交疼痛、阴道痉挛）</li><li>盆腔疼痛</li><li>子宫内膜异位症</li><li>便秘</li><li>盆腔器官脱垂（器官下垂）</li><li>更年期</li><li>尿失禁、粪便失禁或气体失禁（泄漏）</li></ul>',
          },
        },
      },
      twoImagesGrid: {
        title: {
          translations: {
            pt: 'Quais os benefícios?',
            en: 'What are the benefits?',
            es: '¿Cuáles son los beneficios?',
            'zh-sg': '有什么好处？',
          },
        },
        topics: {
          translations: {
            pt: '<ul><li><span class="highlight">Alívio</span> da dor</li><li><span class="highlight">Melhoria</span> das amplitudes articulares</li><li><span class="highlight">Fortalecimento</span> muscular (sem carga total)</li><li><span class="highlight">Melhoria da qualidade</span> do movimento e controlo motor</li><li>Retorno à <span class="highlight">funcionalidade</span></li><li><span class="highlight">Qualidade</span> de vida</li></ul>',
            en: '<ul><li><span class="highlight">Relief</span> from pain</li><li><span class="highlight">Improvement</span> of joint ranges</li><li><span class="highlight">Muscle strengthening</span> (without full load)</li><li><span class="highlight">Improvement of quality</span> of movement and motor control</li><li>Return to <span class="highlight">functionality</span></li><li><span class="highlight">Quality</span> of life</li></ul>',
            es: '<ul><li><span class="highlight">Alivio</span> del dolor</li><li><span class="highlight">Mejora</span> de las amplitudes articulares</li><li><span class="highlight">Fortalecimiento</span> muscular (sin carga total)</li><li><span class="highlight">Mejora de la calidad</span> del movimiento y control motor</li><li>Retorno a la <span class="highlight">funcionalidad</span></li><li><span class="highlight">Calidad</span> de vida</li></ul>',
            'zh-sg':
              '<ul><li><span class="highlight">缓解</span>疼痛</li><li><span class="highlight">改善</span>关节活动范围</li><li><span class="highlight">肌肉增强</span>（不完全负载）</li><li><span class="highlight">提高</span>运动质量和运动控制</li><li>恢复<span class="highlight">功能</span></li><li><span class="highlight">生活质量</span></li></ul>',
          },
        },
        imageBig: {
          mobile: '/images/services/detail/fisioterapia-online/two-images-grid/image-1-mobile.jpg',
          tablet: '/images/services/detail/fisioterapia-online/two-images-grid/image-1-tablet.jpg',
          desktop: '/images/services/detail/fisioterapia-online/two-images-grid/image-1-desktop.jpg',
          alt: {
            translations: {
              pt: 'Fisioterapia Online',
              en: 'Online Physiotherapy',
              es: 'Fisioterapia en línea',
              'zh-sg': '在线物理治疗',
            },
          },
        },
        imageSmall: {
          mobile: '/images/services/detail/fisioterapia-online/two-images-grid/image-2-mobile.jpg',
          tablet: '/images/services/detail/fisioterapia-online/two-images-grid/image-2-tablet.jpg',
          desktop: '/images/services/detail/fisioterapia-online/two-images-grid/image-2-desktop.jpg',
          alt: {
            translations: {
              pt: 'Fisioterapia Online',
              en: 'Online Physiotherapy',
              es: 'Fisioterapia en línea',
              'zh-sg': '在线物理治疗',
            },
          },
        },
      },
      topics_2: {
        title: {
          translations: {
            pt: 'Porquê optar pela ForPhysio Clinic?',
            en: 'Why choose ForPhysio Clinic?',
            es: '¿Por qué optar por ForPhysio Clinic?',
            'zh-sg': '为什么选择ForPhysio Clinic？',
          },
        },
        topics: {
          translations: {
            pt: '<ul><li>Avaliação individualizada</li><li>Monitorização constante da evolução</li><li>60 minutos dedicados ao cliente</li><li>Relatório em fisioterapia (se necessário)</li><li>Conforto da sua casa</li><li>Sem necessidade de deslocação</li></ul>',
            en: '<ul><li>Individualized assessment</li><li>Constant monitoring of progress</li><li>60 minutes dedicated to the client</li><li>Physiotherapy report (if necessary)</li><li>Comfort of your home</li><li>No need to travel</li></ul>',
            es: '<ul><li>Evaluación individualizada</li><li>Monitoreo constante de la evolución</li><li>60 minutos dedicados al cliente</li><li>Informe en fisioterapia (si es necesario)</li><li>Comodidad de su hogar</li><li>Sin necesidad de desplazarse</li></ul>',
            'zh-sg':
              '<ul><li>个性化评估</li><li>持续监测进展</li><li>为客户提供60分钟的服务</li><li>物理治疗报告（如有必要）</li><li>在家里的舒适</li><li>无需旅行</li></ul>',
          },
        },
      },
      appointmentBanner: {
        image: {
          mobile: '/images/services/detail/fisioterapia-online/appointment-banner/image-mobile.jpg',
          tablet: '/images/services/detail/fisioterapia-online/appointment-banner/image-tablet.jpg',
          desktop: '/images/services/detail/fisioterapia-online/appointment-banner/image-desktop.jpg',
          alt: {
            translations: {
              pt: 'Fisioterapia Online',
              en: 'Online Physiotherapy',
              es: 'Fisioterapia en línea',
              'zh-sg': '在线物理治疗',
            },
          },
        },
      },
    },
  },

  {
    id: 8,
    slug: {
      translations: {
        pt: 'nutricao',
        en: 'nutrition',
        es: 'nutrición',
        'zh-sg': 'nutrition',
      },
    },
    title: {
      translations: {
        pt: 'Nutrição',
        en: 'Nutrition',
        es: 'Nutrición',
        'zh-sg': '营养',
      },
    },
    image: '/images/services/list/nutricao.jpg',
    locationsId: [LocationsList.MARINHA_GRANDE, LocationsList.OEIRAS],
    homepage: false,
    blocks: {
      intro: {
        title: {
          translations: {
            pt: 'Nutrição',
            en: 'Nutrition',
            es: 'Nutrición',
            'zh-sg': '营养',
          },
        },
        text: {
          translations: {
            pt: 'A Nutrição assume um papel importante na manutenção das capacidades físicas e na resposta ao exercício, sendo por isso um fator a ter em conta no retorno às normais atividades do dia-a-dia e retorno à atividade desportiva.',
            en: 'Nutrition plays an important role in maintaining physical abilities and responding to exercise, making it a factor to consider when returning to normal daily activities and sports activities.',
            es: 'La nutrición desempeña un papel importante en el mantenimiento de las capacidades físicas y en la respuesta al ejercicio, por lo que es un factor a tener en cuenta al regresar a las actividades diarias normales y a la actividad deportiva.',
            'zh-sg':
              '营养在维持身体能力和应对运动方面发挥着重要作用，因此在恢复正常日常活动和体育活动时是一个需要考虑的因素。',
          },
        },
        image: {
          mobile: '/images/services/detail/nutricao/intro/image-mobile.jpg',
          tablet: '/images/services/detail/nutricao/intro/image-tablet.jpg',
          desktop: '/images/services/detail/nutricao/intro/image-desktop.jpg',
          alt: {
            translations: {
              pt: 'Nutrição',
              en: 'Nutrition',
              es: 'Nutrición',
              'zh-sg': '营养',
            },
          },
        },
      },
      sideImage: {
        title: {
          translations: {
            pt: 'Para quem é indicada a nutrição?',
            en: 'Who is nutrition indicated for?',
            es: '¿Para quién está indicada la nutrición?',
            'zh-sg': '营养适合谁？',
          },
        },
        text: {
          translations: {
            pt: 'Para todas as pessoas, de <span class="highlight">todas as idades</span>.',
            en: 'For all people, of <span class="highlight">all ages</span>.',
            es: 'Para todas las personas, de <span class="highlight">todas las edades</span>.',
            'zh-sg': '适合所有人，<span class="highlight">所有年龄</span>。',
          },
        },
        image: {
          mobile: '/images/services/detail/nutricao/side-image/image-mobile.jpg',
          tablet: '/images/services/detail/nutricao/side-image/image-tablet.jpg',
          desktop: '/images/services/detail/nutricao/side-image/image-desktop.jpg',
          alt: {
            translations: {
              pt: 'Nutrição',
              en: 'Nutrition',
              es: 'Nutrición',
              'zh-sg': '营养',
            },
          },
        },
      },
      imageFullwidth_1: {
        mobile: '/images/services/detail/nutricao/fullwidth-image/image-1-mobile.jpg',
        tablet: '/images/services/detail/nutricao/fullwidth-image/image-1-tablet.jpg',
        desktop: '/images/services/detail/nutricao/fullwidth-image/image-1-desktop.jpg',
        alt: {
          translations: {
            pt: 'Nutrição',
            en: 'Nutrition',
            es: 'Nutrición',
            'zh-sg': '营养',
          },
        },
      },
      text: {
        translations: {
          pt: 'Desde 2016 foram muitos os atletas de recreação e competição que confiaram no nosso serviço de nutrição.',
          en: 'Since 2016, many recreational and competitive athletes have relied on our nutrition service.',
          es: 'Desde 2016, muchos atletas recreativos y de competición han confiado en nuestro servicio de nutrición.',
          'zh-sg': '自2016年以来，许多休闲和竞技运动员信任我们的营养服务。',
        },
      },
      twoImagesGrid: {
        text: {
          translations: {
            pt: 'Contamos com uma <span class="highlight">equipa de profissionais</span> dedicada e preparada para esclarecer as suas dúvidas e ajudar a atingir os seus <span class="highlight">objetivos</span>!',
            en: 'We have a dedicated <span class="highlight">team of professionals</span> ready to answer your questions and help you achieve your <span class="highlight">goals</span>!',
            es: '¡Contamos con un <span class="highlight">equipo de profesionales</span> dedicado y preparado para aclarar sus dudas y ayudarle a alcanzar sus <span class="highlight">objetivos</span>!',
            'zh-sg':
              '我们拥有一支专门的<span class="highlight">专业团队</span>，随时准备解答您的问题并帮助您实现您的<span class="highlight">目标</span>！',
          },
        },
        imageBig: {
          mobile: '/images/services/detail/nutricao/two-images-grid/image-1-mobile.jpg',
          tablet: '/images/services/detail/nutricao/two-images-grid/image-1-tablet.jpg',
          desktop: '/images/services/detail/nutricao/two-images-grid/image-1-desktop.jpg',
          alt: {
            translations: {
              pt: 'Nutrição',
              en: 'Nutrition',
              es: 'Nutrición',
              'zh-sg': '营养',
            },
          },
        },
        imageSmall: {
          mobile: '/images/services/detail/nutricao/two-images-grid/image-2-mobile.jpg',
          tablet: '/images/services/detail/nutricao/two-images-grid/image-2-tablet.jpg',
          desktop: '/images/services/detail/nutricao/two-images-grid/image-2-desktop.jpg',
          alt: {
            translations: {
              pt: 'Nutrição',
              en: 'Nutrition',
              es: 'Nutrición',
              'zh-sg': '营养',
            },
          },
        },
      },
      appointmentBanner: {
        image: {
          mobile: '/images/services/detail/nutricao/appointment-banner/image-mobile.jpg',
          tablet: '/images/services/detail/nutricao/appointment-banner/image-tablet.jpg',
          desktop: '/images/services/detail/nutricao/appointment-banner/image-desktop.jpg',
          alt: {
            translations: {
              pt: 'Nutrição',
              en: 'Nutrition',
              es: 'Nutrición',
              'zh-sg': '营养',
            },
          },
        },
      },
    },
  },

  {
    id: 9,
    slug: {
      translations: {
        pt: 'saude-e-bem-estar',
        en: 'health-and-wellbeing',
        es: 'salud-y-bienestar',
        'zh-sg': 'health-and-wellbeing',
      },
    },
    title: {
      translations: {
        pt: 'Saúde e Bem-estar',
        en: 'Health and Well-being',
        es: 'Salud y Bienestar',
        'zh-sg': '健康与幸福',
      },
    },
    image: '/images/services/list/saude-e-bem-estar.jpg',
    locationsId: [LocationsList.MARINHA_GRANDE, LocationsList.CALDAS_RAINHA, LocationsList.OEIRAS],
    homepage: false,
    blocks: {
      intro: {
        title: {
          translations: {
            pt: 'Saúde e Bem-estar',
            en: 'Health and Well-being',
            es: 'Salud y Bienestar',
            'zh-sg': '健康与幸福',
          },
        },
        text: {
          translations: {
            pt: 'A área da Saúde e Bem-Estar encontra-se representada na ForPhysio através dos seus serviços especializados de massagem: terapêutica, desportiva e modeladora.',
            en: 'The area of Health and Well-being is represented at ForPhysio through its specialized massage services: therapeutic, sports, and modeling.',
            es: 'El área de Salud y Bienestar está representada en ForPhysio a través de sus servicios de masaje especializados: terapéutico, deportivo y modelador.',
            'zh-sg': '健康与幸福领域在ForPhysio通过其专业的按摩服务得到体现：治疗性、运动性和塑形性按摩。',
          },
        },
        image: {
          mobile: '/images/services/detail/saude-bem-estar/intro/image-mobile.jpg',
          tablet: '/images/services/detail/saude-bem-estar/intro/image-tablet.jpg',
          desktop: '/images/services/detail/saude-bem-estar/intro/image-desktop.jpg',
          alt: {
            translations: {
              pt: 'Saúde e Bem-estar',
              en: 'Health and Well-being',
              es: 'Salud y Bienestar',
              'zh-sg': '健康与幸福',
            },
          },
        },
      },
      sideImage: {
        title: {
          translations: {
            pt: 'Para quem é indicada a massagem?',
            en: 'Who is massage indicated for?',
            es: '¿Para quién está indicada la masajística?',
            'zh-sg': '按摩适合谁？',
          },
        },
        text: {
          translations: {
            pt: 'Para todas as pessoas, de <span class="highlight">todas as idades e géneros</span>.',
            en: 'For all people, of <span class="highlight">all ages and genders</span>.',
            es: 'Para todas las personas, de <span class="highlight">todas las edades e géneros</span>.',
            'zh-sg': '适合所有人，<span class="highlight">所有年龄和性别</span>。',
          },
        },
        image: {
          mobile: '/images/services/detail/saude-bem-estar/side-image/image-mobile.jpg',
          tablet: '/images/services/detail/saude-bem-estar/side-image/image-tablet.jpg',
          desktop: '/images/services/detail/saude-bem-estar/side-image/image-desktop.jpg',
          alt: {
            translations: {
              pt: 'Saúde e Bem-estar',
              en: 'Health and Well-being',
              es: 'Salud y Bienestar',
              'zh-sg': '健康与幸福',
            },
          },
        },
      },
      imageFullwidth_1: {
        mobile: '/images/services/detail/saude-bem-estar/fullwidth-image/image-1-mobile.jpg',
        tablet: '/images/services/detail/saude-bem-estar/fullwidth-image/image-1-tablet.jpg',
        desktop: '/images/services/detail/saude-bem-estar/fullwidth-image/image-1-desktop.jpg',
        alt: {
          translations: {
            pt: 'Saúde e Bem-estar',
            en: 'Health and Well-being',
            es: 'Salud y Bienestar',
            'zh-sg': '健康与幸福',
          },
        },
      },
      topics_1: {
        title: {
          translations: {
            pt: 'É indicada para que situações?',
            en: 'Is it indicated for which situations?',
            es: '¿Está indicada para qué situaciones?',
            'zh-sg': '适合于哪些情况？',
          },
        },
        topics: {
          translations: {
            pt: '<ul><li>Perda de força</li><li>Limitações na postura</li><li>Dificuldades na marcha</li><li>Alterações no equilíbrio</li><li>Limitações funcionais</li><li>Redução de precisão de movimentos</li></ul>',
            en: '<ul><li>Loss of strength</li><li>Postural limitations</li><li>Difficulties in walking</li><li>Changes in balance</li><li>Functional limitations</li><li>Reduced movement accuracy</li></ul>',
            es: '<ul><li>Pérdida de fuerza</li><li>Limitaciones en la postura</li><li>Dificultades en la marcha</li><li>Cambios en el equilibrio</li><li>Limitaciones funcionales</li><li>Reducción de la precisión de los movimientos</li></ul>',
            'zh-sg':
              '<ul><li>力量下降</li><li>姿势限制</li><li>行走困难</li><li>平衡变化</li><li>功能限制</li><li>运动精度降低</li></ul>',
          },
        },
      },
      twoImagesGrid: {
        title: {
          translations: {
            pt: 'Quais os benefícios?',
            en: 'What are the benefits?',
            es: '¿Cuáles son los beneficios?',
            'zh-sg': '有哪些好处？',
          },
        },
        topics: {
          translations: {
            pt: '<ul><li><span class="highlight">Relaxamento</span> do corpo e mente</li><li><span class="highlight">Alívio</span> de stress</li><li><span class="highlight">Diminuição da tensão</span> muscular</li><li><span class="highlight">Equilíbrio</span> mental e físico</li><li>Promoção do <span class="highlight">bem-estar geral</span></li></ul>',
            en: '<ul><li><span class="highlight">Relaxation</span> of body and mind</li><li><span class="highlight">Relief</span> from stress</li><li><span class="highlight">Reduction</span> of muscle tension</li><li><span class="highlight">Mental</span> and physical balance</li><li>Promotion of <span class="highlight">overall well-being</span></li></ul>',
            es: '<ul><li><span class="highlight">Relajación</span> del cuerpo y la mente</li><li><span class="highlight">Alivio</span> del estrés</li><li><span class="highlight">Reducción</span> de la tensión muscular</li><li><span class="highlight">Equilibrio</span> mental y físico</li><li>Promoción del <span class="highlight">bienestar general</span></li></ul>',
            'zh-sg':
              '<ul><li><span class="highlight">放松</span> 身体和心灵</li><li><span class="highlight">缓解</span> 压力</li><li><span class="highlight">减少</span> 肌肉紧张</li><li><span class="highlight">心理</span> 和身体的平衡</li><li>促进<span class="highlight">整体幸福</span></li></ul>',
          },
        },
        imageBig: {
          mobile: '/images/services/detail/saude-bem-estar/two-images-grid/image-1-mobile.jpg',
          tablet: '/images/services/detail/saude-bem-estar/two-images-grid/image-1-tablet.jpg',
          desktop: '/images/services/detail/saude-bem-estar/two-images-grid/image-1-desktop.jpg',
          alt: {
            translations: {
              pt: 'Saúde e Bem-estar',
              en: 'Health and Well-being',
              es: 'Salud y Bienestar',
              'zh-sg': '健康与幸福',
            },
          },
        },
        imageSmall: {
          mobile: '/images/services/detail/saude-bem-estar/two-images-grid/image-2-mobile.jpg',
          tablet: '/images/services/detail/saude-bem-estar/two-images-grid/image-2-tablet.jpg',
          desktop: '/images/services/detail/saude-bem-estar/two-images-grid/image-2-desktop.jpg',
          alt: {
            translations: {
              pt: 'Saúde e Bem-estar',
              en: 'Health and Well-being',
              es: 'Salud y Bienestar',
              'zh-sg': '健康与幸福',
            },
          },
        },
      },
      appointmentBanner: {
        image: {
          mobile: '/images/services/detail/saude-bem-estar/appointment-banner/image-mobile.jpg',
          tablet: '/images/services/detail/saude-bem-estar/appointment-banner/image-tablet.jpg',
          desktop: '/images/services/detail/saude-bem-estar/appointment-banner/image-desktop.jpg',
          alt: {
            translations: {
              pt: 'Saúde e Bem-estar',
              en: 'Health and Well-being',
              es: 'Salud y Bienestar',
              'zh-sg': '健康与幸福',
            },
          },
        },
      },
    },
  },

  {
    id: 10,
    slug: {
      translations: {
        pt: 'consultas-medicas',
        en: 'medical-appointments',
        es: 'consultas-médicas',
        'zh-sg': '医疗咨询',
      },
    },
    title: {
      translations: {
        pt: 'Consultas Médicas',
        en: 'Medical Appointments',
        es: 'Consultas Médicas',
        'zh-sg': '医疗咨询',
      },
    },
    image: '/images/services/list/consultas-medicas.jpg',
    locationsId: [LocationsList.MARINHA_GRANDE, LocationsList.LISBOA_LUMIAR],
    homepage: false,
    blocks: {
      intro: {
        title: {
          translations: {
            pt: 'Consultas Médicas',
            en: 'Medical appointments',
            es: 'Consultas Médicas',
            'zh-sg': '医疗咨询',
          },
        },
        text: {
          translations: {
            pt: 'Consultas médicas são encontros entre pacientes e médicos que permitem a avaliação, o diagnóstico e o tratamento de condições de saúde.',
            en: 'Medical appointments are meetings between patients and doctors that allow for the evaluation, diagnosis, and treatment of health conditions.',
            es: 'Las consultas médicas son encuentros entre pacientes y médicos que permiten la evaluación, el diagnóstico y el tratamiento de condiciones de salud.',
            'zh-sg': '医疗咨询是患者和医生之间的会议，允许评估、诊断和治疗健康状况。',
          },
        },
        image: {
          mobile: '/images/services/detail/consultas-medicas/intro/image-mobile.jpg',
          tablet: '/images/services/detail/consultas-medicas/intro/image-tablet.jpg',
          desktop: '/images/services/detail/consultas-medicas/intro/image-desktop.jpg',
          alt: {
            translations: {
              pt: 'Consultas Médicas',
              en: 'Medical appointments',
              es: 'Consultas Médicas',
              'zh-sg': '医疗咨询',
            },
          },
        },
      },
      sideImage: {
        title: {
          translations: {
            pt: 'Para quem são indicadas as consultas médicas?',
            en: 'Who are medical appointments indicated for?',
            es: '¿Para quiénes están indicadas las consultas médicas?',
            'zh-sg': '医疗咨询适合谁？',
          },
        },
        text: {
          translations: {
            pt: 'As consultas médicas são indicadas para <span class="highlight">qualquer pessoa</span> que tenha uma condição de <span class="highlight">saúde</span>. Também são importantes para a <span class="highlight">prevenção de doenças</span>, orientações sobre um estilo de <span class="highlight">vida saudável</span> e para garantir a <span class="highlight">manutenção do bem-estar</span> geral.',
            en: 'Medical appointments are indicated for <span class="highlight">anyone</span> who has a <span class="highlight">health</span> condition. They are also important for <span class="highlight">disease prevention</span>, guidance on a <span class="highlight">healthy lifestyle</span>, and to ensure the <span class="highlight">maintenance of general well-being</span>.',
            es: 'Las consultas médicas están indicadas para <span class="highlight">cualquier persona</span> que tenga una <span class="highlight">condición de salud</span>. También son importantes para la <span class="highlight">prevención de enfermedades</span>, orientaciones sobre un <span class="highlight">estilo de vida saludable</span> y para garantizar el <span class="highlight">mantenimiento del bienestar</span> general.',
            'zh-sg':
              '医疗咨询适合<span class="highlight">任何人</span>，只要他们有<span class="highlight">健康</span>问题。它们对于<span class="highlight">疾病预防</span>、关于<span class="highlight">健康生活方式</span>的指导以及确保<span class="highlight">整体福祉的维护</span>也很重要。',
          },
        },
        image: {
          mobile: '/images/services/detail/consultas-medicas/side-image/image-mobile.jpg',
          tablet: '/images/services/detail/consultas-medicas/side-image/image-tablet.jpg',
          desktop: '/images/services/detail/consultas-medicas/side-image/image-desktop.jpg',
          alt: {
            translations: {
              pt: 'Consultas Médicas',
              en: 'Medical appointments',
              es: 'Consultas Médicas',
              'zh-sg': '医疗咨询',
            },
          },
        },
      },
      imageFullwidth_1: {
        mobile: '/images/services/detail/consultas-medicas/fullwidth-image/image-1-mobile.jpg',
        tablet: '/images/services/detail/consultas-medicas/fullwidth-image/image-1-tablet.jpg',
        desktop: '/images/services/detail/consultas-medicas/fullwidth-image/image-1-desktop.jpg',
        alt: {
          translations: {
            pt: 'Teste',
            en: 'Test',
            es: 'Prueba',
            'zh-sg': '测试',
          },
        },
      },
      topics: {
        title: {
          translations: {
            pt: 'Quais são as situações que necessitam de consultas médicas?',
            en: 'What situations require medical appointments?',
            es: '¿Qué situaciones requieren consultas médicas?',
            'zh-sg': '哪些情况需要医疗咨询？',
          },
        },
        topics: {
          translations: {
            pt: '<ul><li>Doenças crônicas</li><li>Problemas respiratórios</li><li>Dores persistentes</li><li>Sintomas incomuns</li><li>Exames de rotina</li><li>Orientações de saúde</li></ul>',
            en: '<ul><li>Chronic illnesses</li><li>Respiratory problems</li><li>Persistent pain</li><li>Unusual symptoms</li><li>Routine examinations</li><li>Health guidance</li></ul>',
            es: '<ul><li>Enfermedades crónicas</li><li>Problemas respiratorios</li><li>Dolores persistentes</li><li>Síntomas inusuales</li><li>Exámenes de rutina</li><li>Orientaciones de salud</li></ul>',
            'zh-sg':
              '<ul><li>慢性疾病</li><li>呼吸问题</li><li>持续疼痛</li><li>异常症状</li><li>常规检查</li><li>健康指导</li></ul>',
          },
        },
      },
      appointmentBanner: {
        image: {
          mobile: '/images/services/detail/consultas-medicas/appointment-banner/image-mobile.jpg',
          tablet: '/images/services/detail/consultas-medicas/appointment-banner/image-tablet.jpg',
          desktop: '/images/services/detail/consultas-medicas/appointment-banner/image-desktop.jpg',
          alt: {
            translations: {
              pt: 'Teste',
              en: 'Test',
              es: 'Prueba',
              'zh-sg': '测试',
            },
          },
        },
      },
    },
  },
];
