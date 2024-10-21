import type { CustomersReviewsBlock } from '~/models/blocks/customers-reviews-block.model';
import { getFormattedDataByLocale } from '~/utils/api.util';

export const data = [
  {
    id: 1,
    stars: 5,
    author: 'Adriano\nSilva',
    image: '/images/homepage/customers-reviews-block/adriano-silva.jpg',
    alt: {
      translations: {
        pt: 'Foto de Adriano Silva',
        en: 'Photo of Adriano Silva',
        es: 'Foto de Adriano Silva',
        'zh-sg': 'Adriano Silva的照片',
      },
    },
    review: {
      translations: {
        pt: 'Equipa ForPhysio 5 estrelas!\nProfissionais capacitados!\nA minha experiência está a ser bastante satisfatória com resultados eficazes e duradouros.\nSuper recomendo para si com a certeza de que os resultados serão positivos como estão a ser para mim.\nParabéns ForPhysio!',
        en: 'ForPhysio team 5 stars!\nCompetent professionals!\nMy experience has been very satisfying with effective and long-lasting results.\nI highly recommend it to you with the certainty that the results will be as positive as they have been for me.\nCongratulations ForPhysio!',
        es: '¡Equipo ForPhysio 5 estrellas!\n¡Profesionales capacitados!\nMi experiencia ha sido muy satisfactoria, con resultados eficaces y duraderos.\nLo recomiendo mucho para ti con la certeza de que los resultados serán tan positivos como lo han sido para mí.\n¡Felicidades ForPhysio!',
        'zh-sg':
          'ForPhysio 團隊 5 星級！\n專業人士!\n我的體驗非常滿意, 效果持久。\n我非常推薦給您, 並確信結果會像對我一樣積極。\n恭喜 ForPhysio!',
      },
    },
  },
  {
    id: 2,
    stars: 5,
    author: 'Marco\nLeal',
    image: '/images/homepage/customers-reviews-block/marco-leal.jpg',
    alt: {
      translations: {
        pt: 'Foto de Marco Leal',
        en: 'Photo of Marco Leal',
        es: 'Foto de Marco Leal',
        'zh-sg': 'Marco Leal的照片',
      },
    },
    review: {
      translations: {
        pt: 'Clínica de fisioterapia altamente recomendável para qualquer tipo de lesão.\nBoas condições e fisioterapeutas muito informados e preparados.\nEstou a ser acompanhado pela fisioterapeuta Clara de uma pós-cirurgia ao LCA e estou muito satisfeito com o processo.',
        en: 'Highly recommended physiotherapy clinic for any type of injury.\nGood facilities and very knowledgeable and prepared physiotherapists.\nI am being treated by the physiotherapist Clara after an ACL surgery, and I am very satisfied with the process.',
        es: 'Clínica de fisioterapia altamente recomendable para cualquier tipo de lesión.\nBuenas condiciones y fisioterapeutas muy informados y preparados.\nEstoy siendo tratado por la fisioterapeuta Clara después de una cirugía de LCA y estoy muy satisfecho con el proceso.',
        'zh-sg':
          '物理治療診所非常推薦, 適合任何類型的損傷。\n良好的設施和非常有知識且準備充分的物理治療師。\n我正在由物理治療師 Clara 跟進, 術後前十字韌帶(ACL)手術, 我對過程非常滿意。',
      },
    },
  },
  {
    id: 3,
    stars: 5,
    author: 'Emanuel\nFigueiredo',
    image: '/images/homepage/customers-reviews-block/emanuel-figueiredo.jpg',
    alt: {
      translations: {
        pt: 'Foto de Emanuel Figueiredo',
        en: 'Photo of Emanuel Figueiredo',
        es: 'Foto de Emanuel Figueiredo',
        'zh-sg': 'Emanuel Figueiredo的照片',
      },
    },
    review: {
      translations: {
        pt: 'Agradeço à ForPhysio por todo o apoio, profissionalismo e cuidado que demonstraram na minha recuperação após cirurgia no menisco interno, logo desde o primeiro momento.\nA cada sessão realizada pude sentir evolução e uma melhoria constante, tudo isto graças ao excelente trabalho realizado pela Fisioterapeuta Ana Clara, sempre atenta aos meus sintomas, questionando constantemente como me sentia, apontando e pormenorizando todo e cada detalhe do trabalho desenvolvido.',
        en: 'I thank ForPhysio for all the support, professionalism, and care they demonstrated in my recovery after surgery on the inner meniscus, right from the first moment.\nIn each session, I could feel progress and constant improvement, all thanks to the excellent work done by Physiotherapist Ana Clara, always attentive to my symptoms, constantly asking how I felt, noting and detailing every aspect of the work carried out.',
        es: 'Agradezco a ForPhysio por todo el apoyo, profesionalismo y cuidado que demostraron en mi recuperación después de la cirugía en el menisco interno, desde el primer momento.\nEn cada sesión realizada pude sentir evolución y una mejora constante, todo esto gracias al excelente trabajo realizado por la fisioterapeuta Ana Clara, siempre atenta a mis síntomas, cuestionando constantemente cómo me sentía, señalando y detallando cada aspecto del trabajo realizado.',
        'zh-sg':
          '感謝 ForPhysio 在我內側半月板手術後的恢復過程中, 從一開始就展現了所有的支持、專業精神和關懷。\n每次治療我都能感受到進步和持續的改善, 這一切都歸功於物理治療師 Ana Clara 出色的工作, 她時刻關注我的症狀, 不斷詢問我的感受, 並詳細記錄和說明每一個細節。',
      },
    },
  },
  {
    id: 4,
    stars: 5,
    author: 'David\nHawthorn',
    image: '/images/homepage/customers-reviews-block/david-hawthorn.jpg',
    alt: {
      translations: {
        pt: 'Foto de David Hawthorn',
        en: 'Photo of David Hawthorn',
        es: 'Foto de David Hawthorn',
        'zh-sg': 'David Hawthorn的照片',
      },
    },
    review: {
      translations: {
        pt: 'Há alguns anos fui diagnosticado com artrite no pescoço, de onde tenho sofrido com dor, desconforto e falta de mobilidade! Vários tratamentos deixaram meus sintomas iguais ou piores, sem falar no custo. A Ana, da Balance, é uma excelente fisioterapeuta que desbloqueou os músculos artríticos do meu pescoço, e anos de danos começaram a cicatrizar, e a diferença é muito perceptível. Agora estou muito melhor. Um ótimo serviço e com bom custo-benefício também.',
        en: 'Years ago now, I was diagnosed with arthritis in my neck and from which I’ve suffered pain and discomfort and immobility! Various treatments left my symptoms the same or worse to say nothing of the expense. Ana at Balance is an excellent physiotherapist who has unlocked my arthritic neck muscles and years of damage has begun to heal and the difference is so noticeable. I am now much improved. A great service and good value for money too.',
        es: 'Hace algunos años me diagnosticaron artritis en el cuello, de la cual he sufrido dolor, incomodidad y falta de movilidad. Varios tratamientos dejaron mis síntomas iguales o peores, sin mencionar el costo. Ana en Balance es una excelente fisioterapeuta que desbloqueó los músculos artríticos de mi cuello y años de daño han comenzado a sanar, y la diferencia es muy notable. Ahora estoy mucho mejor. Un gran servicio y una buena relación calidad-precio también.',
        'zh-sg':
          '几年前，我被诊断出颈部关节炎，长期以来一直感到疼痛、不适和行动不便！各种治疗都没能缓解症状，甚至变得更糟，花费也很大。Balance的Ana是一位非常出色的理疗师，她解除了我颈部关节炎导致的肌肉僵硬，多年的损伤开始愈合，效果非常明显。我现在好多了。服务很好，性价比也很高。',
      },
    },
  },
  {
    id: 5,
    stars: 5,
    author: 'Pedro\nMelo',
    image: '/images/homepage/customers-reviews-block/pedro-melo.jpg',
    alt: {
      translations: {
        pt: 'Foto de Pedro Melo',
        en: 'Photo of Pedro Melo',
        es: 'Foto de Pedro Melo',
        'zh-sg': 'Pedro Melo的照片',
      },
    },
    review: {
      translations: {
        pt: 'Na ForPhysio recuperei de uma epicondilite que durava há mais de três meses. Obrigado especial à fisioterapeuta Beatriz Silva que me acompanhou e ajudou durante o processo, com terapia e reforço muscular. Profissionais e humanos de excelência. Recomendo 100%.',
        en: 'At ForPhysio, I recovered from an epicondylitis that had lasted for over three months. A special thanks to physiotherapist Beatriz Silva, who accompanied and helped me throughout the process, with therapy and muscle strengthening. Excellent professionals and human care. I 100% recommend.',
        es: 'En ForPhysio, me recuperé de una epicondilitis que había durado más de tres meses. Un agradecimiento especial a la fisioterapeuta Beatriz Silva, que me acompañó y ayudó durante el proceso, con terapia y fortalecimiento muscular. Profesionales y humanos de excelencia. Recomiendo 100%.',
        'zh-sg':
          '在 ForPhysio，我从持续超过三个月的肱骨外上髁炎中恢复了。特别感谢物理治疗师贝娅特丽斯·席尔瓦（Beatriz Silva），她在整个过程中陪伴并帮助了我，通过治疗和肌肉强化。优秀的专业人士和人性化的护理。我 100% 推荐。',
      },
    },
  },
  {
    id: 6,
    stars: 5,
    author: 'Beatriz\nGonçalves',
    image: '/images/homepage/customers-reviews-block/beatriz-goncalves.jpg',
    alt: {
      translations: {
        pt: 'Foto de Beatriz Gonçalves',
        en: 'Photo of Beatriz Gonçalves',
        es: 'Foto de Beatriz Gonçalves',
        'zh-sg': 'Beatriz Gonçalves的照片',
      },
    },
    review: {
      translations: {
        pt: 'Obrigada à ForPhysio pelo apoio e cuidado desde a primeira sessão. Senti que as minhas lesões melhoraram significativamente, um agradecimento especial à fisioterapeuta Beatriz Silva pelo seu trabalho.',
        en: 'Thank you to ForPhysio for the support and care from the very first session. I felt my injuries improved significantly. A special thanks to physiotherapist Beatriz Silva for her work.',
        es: 'Gracias a ForPhysio por el apoyo y el cuidado desde la primera sesión. Sentí que mis lesiones mejoraron significativamente. Un agradecimiento especial a la fisioterapeuta Beatriz Silva por su trabajo.',
        'zh-sg':
          '感谢 ForPhysio 从第一节开始的支持和关怀。我感觉到我的伤势显著好转。特别感谢物理治疗师贝娅特丽斯·席尔瓦（Beatriz Silva）的工作。',
      },
    },
  },
  {
    id: 7,
    stars: 5,
    author: 'Eugénia\nFrade Lança',
    image: '/images/homepage/customers-reviews-block/eugenia-lanca.jpg',
    alt: {
      translations: {
        pt: 'Foto de Eugénia Frade Lança',
        en: 'Photo of Eugénia Frade Lança',
        es: 'Foto de Eugénia Frade Lança',
        'zh-sg': 'Eugénia Frade Lança的照片',
      },
    },
    review: {
      translations: {
        pt: 'Gostei muito da experiência na fisioterapia. Os fisioterapeutas são simpáticos e organizados. Gostei bastante da forma como trabalham e do espaço onde os exercícios são realizados. O espaço da ForPhysio está sempre limpo e arrumado. Recuperei bastante bem ao longo das sessões, retirando as canadianas e conseguindo andar muito melhor. Obrigado ForPhysio, Joaquim e Beatriz.',
        en: 'I really enjoyed my physiotherapy experience. The physiotherapists are friendly and organized. I really liked the way they work and the space where the exercises are done. The ForPhysio space is always clean and tidy. I recovered very well throughout the sessions, was able to get rid of my crutches, and can now walk much better. Thank you ForPhysio, Joaquim, and Beatriz.',
        es: 'Me gustó mucho la experiencia en fisioterapia. Los fisioterapeutas son simpáticos y organizados. Me gustó bastante la forma en que trabajan y el espacio donde se realizan los ejercicios. El espacio de ForPhysio está siempre limpio y ordenado. Me recuperé bastante bien a lo largo de las sesiones, dejando las muletas y logrando caminar mucho mejor. Gracias ForPhysio, Joaquim y Beatriz.',
        'zh-sg':
          '我非常喜欢在 ForPhysio 的物理治疗体验。物理治疗师们既友好又有条理。我非常喜欢他们的工作方式以及进行练习的场地。ForPhysio 的空间始终干净整洁。我在治疗过程中恢复得很好，不再需要拐杖，行走能力显著提高。感谢 ForPhysio、Joaquim 和 Beatriz。',
      },
    },
  },
  {
    id: 8,
    stars: 5,
    author: 'José\nDuarte',
    image: '/images/homepage/customers-reviews-block/jose-duarte.jpg',
    alt: {
      translations: {
        pt: 'Foto de José Duarte',
        en: 'Photo of José Duarte',
        es: 'Foto de José Duarte',
        'zh-sg': 'José Duarte的照片',
      },
    },
    review: {
      translations: {
        pt: 'Acompanhamento e pessoal 5 estrelas. A lesão que me levou a ir à ForPhysio teve um progresso bastante positivo logo desde a primeira sessão.',
        en: 'Five-star support and staff. The injury that brought me to ForPhysio showed very positive progress right from the first session.',
        es: 'Acompañamiento y personal de cinco estrellas. La lesión que me llevó a ForPhysio mostró un progreso bastante positivo desde la primera sesión.',
        'zh-sg': '五星级的服务和工作人员。我在 ForPhysio 接受治疗的伤病从第一次治疗开始就有了显著的进展。',
      },
    },
  },
  {
    id: 9,
    stars: 5,
    author: 'Catarina\nde Sousa',
    image: '/images/homepage/customers-reviews-block/catarina-sousa.jpg',
    alt: {
      translations: {
        pt: 'Foto de Catarina de Sousa',
        en: 'Photo of Catarina de Sousa',
        es: 'Foto de Catarina de Sousa',
        'zh-sg': 'Catarina de Sousa的照片',
      },
    },
    review: {
      translations: {
        pt: 'É com muito gosto e privilégio que falo dos acompanhamentos que já tive com a Fisioterapeuta Margarida Saboga. Se tiver de os descrever, diria que a Margarida é exemplo de um profissionalismo incrível, uma dedicação única e um acompanhamento maravilhoso! A Fisioterapeuta Margarida é e será uma referência nesta área! O conceito da ForPhysio é único! Parabéns!',
        en: 'It is with great pleasure and privilege that I speak of the care I have received from Physiotherapist Margarida Saboga. If I had to describe it, I would say Margarida is an example of incredible professionalism, unique dedication, and wonderful care! Physiotherapist Margarida is and will continue to be a reference in this field! The ForPhysio concept is unique! Congratulations!',
        es: 'Es con mucho gusto y privilegio que hablo de los seguimientos que he tenido con la Fisioterapeuta Margarida Saboga. Si tuviera que describirlo, diría que Margarida es un ejemplo de un profesionalismo increíble, una dedicación única y un acompañamiento maravilloso. ¡La fisioterapeuta Margarida es y será una referencia en esta área! ¡El concepto de ForPhysio es único! ¡Felicitaciones!',
        'zh-sg':
          '我很荣幸地谈论我与物理治疗师玛格丽达·萨博加的治疗经历。如果要描述，我会说玛格丽达展现了令人难以置信的专业精神、独特的奉献精神和出色的护理！玛格丽达物理治疗师在这个领域将一直是一位杰出人物！ForPhysio 的理念非常独特！祝贺！',
      },
    },
  },
  {
    id: 10,
    stars: 5,
    author: 'Ana\nSantos',
    image: '/images/homepage/customers-reviews-block/ana-santos.jpg',
    alt: {
      translations: {
        pt: 'Foto de Ana Santos',
        en: 'Photo of Ana Santos',
        es: 'Foto de Ana Santos',
        'zh-sg': 'Ana Santos的照片',
      },
    },
    review: {
      translations: {
        pt: 'Desde que iniciei na ForPhysio, a fisioterapia tem ajudado, e muito. A evolução que sinto a cada sessão é constante e sinto-me agora muito melhor. Obrigada por todo o empenho e dedicação da Fisioterapeuta Marisa. Sentia, apontando e pormenorizando todo e cada detalhe do trabalho desenvolvido.',
        en: 'Since I started at ForPhysio, physiotherapy has helped me a lot. The progress I feel with each session is consistent, and I feel much better now. Thank you for all the effort and dedication of Physiotherapist Marisa, who carefully detailed every aspect of the work done.',
        es: 'Desde que comencé en ForPhysio, la fisioterapia me ha ayudado mucho. La evolución que siento en cada sesión es constante y ahora me siento mucho mejor. Gracias por todo el esfuerzo y la dedicación de la fisioterapeuta Marisa, quien señaló y detalló cada aspecto del trabajo realizado.',
        'zh-sg':
          '自从我在 ForPhysio 开始治疗以来，物理治疗对我帮助很大。每次治疗后我都感到有持续的进步，现在感觉好多了。感谢物理治疗师玛丽萨的所有努力和奉献，她细致地指出并说明了每一个治疗细节。',
      },
    },
  },
  {
    id: 11,
    stars: 5,
    author: 'Diana\nCosta',
    image: '/images/homepage/customers-reviews-block/diana-costa.jpg',
    alt: {
      translations: {
        pt: 'Foto de Diana Costa',
        en: 'Photo of Diana Costa',
        es: 'Foto de Diana Costa',
        'zh-sg': 'Diana Costa的照片',
      },
    },
    review: {
      translations: {
        pt: 'Fui à primeira consulta de fisioterapia sem saber bem o que esperar. Mas saí dessa mesma consulta com um plano definido do que fazer, o que acabou por me deixar mais descansada. No final de todas as sessões aprendi imenso sobre a minha dor e o que fazer para a diminuir, recebi acompanhamento e "trabalhos de casa" para que não voltasse ao que estava antes. Sem dúvida uma grande mais valia!',
        en: 'I went to my first physiotherapy appointment not really knowing what to expect. But I left that appointment with a clear plan of action, which made me feel more at ease. By the end of all the sessions, I learned a lot about my pain and what to do to reduce it. I received support and "homework" to ensure I wouldn’t return to where I was before. Definitely a great added value!',
        es: 'Fui a mi primera consulta de fisioterapia sin saber muy bien qué esperar. Pero salí de esa misma consulta con un plan definido de lo que hacer, lo que me dejó más tranquila. Al final de todas las sesiones aprendí muchísimo sobre mi dolor y qué hacer para disminuirlo, recibí acompañamiento y "tareas para casa" para que no volviera a lo que estaba antes. ¡Sin duda un gran valor añadido!',
        'zh-sg':
          '我第一次去物理治疗咨询时并不知道该期待什么。但我离开那次咨询时有了明确的行动计划，这让我感到更加安心。在所有的治疗结束时，我学到了很多关于我的疼痛和如何减轻它的知识。我得到了支持和“家庭作业”，以确保我不会回到以前的状态。绝对是一个很大的附加值！',
      },
    },
  },
  {
    id: 12,
    stars: 5,
    author: 'Gonçalo\nCarvalho',
    image: '/images/homepage/customers-reviews-block/goncalo-carvalho.jpg',
    alt: {
      translations: {
        pt: 'Foto de Gonçalo Carvalho',
        en: 'Photo of Gonçalo Carvalho',
        es: 'Foto de Gonçalo Carvalho',
        'zh-sg': 'Gonçalo Carvalho的照片',
      },
    },
    review: {
      translations: {
        pt: 'Um agradecimento à família ForPhysio pelo acompanhamento, atenção e profissionalismo que tiveram comigo, ajudando-me a evoluir como atleta, conseguindo cumprir os meus objetivos e desafiar-me a alcançar sempre mais. Um obrigado especial ao Nutricionista Ricardo Cotovio pelo seu trabalho, motivação e constante dedicação!',
        en: 'I would like to thank the ForPhysio family for their support, attention, and professionalism in helping me evolve as an athlete, enabling me to achieve my goals and constantly challenge myself to reach for more. A special thanks to Nutritionist Ricardo Cotovio for his work, motivation, and unwavering dedication!',
        es: 'Quiero agradecer a la familia ForPhysio por su acompañamiento, atención y profesionalismo, ayudándome a evolucionar como atleta, logrando cumplir mis objetivos y desafiándome a alcanzar siempre más. ¡Un agradecimiento especial al Nutricionista Ricardo Cotovio por su trabajo, motivación y constante dedicación!',
        'zh-sg':
          '感谢ForPhysio大家庭对我的支持、关注和专业精神，帮助我作为运动员不断进步，达成我的目标，并激励我不断追求更高的成就。特别感谢营养师Ricardo Cotovio的工作、激励和不懈的奉献！',
      },
    },
  },
];

export default defineEventHandler((event): CustomersReviewsBlock[] => {
  const { locale } = getQuery(event);

  return getFormattedDataByLocale(data, locale as string);
});
