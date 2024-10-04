import type { Service } from '~/models/services.model';

export const useServices = () => {
  const services: Service[] = [
    {
      id: 1,
      slug: 'fisioterapia-musculo-esqueletica',
      title: 'Fisioterapia Músculo Esquelética',
      image: 'fisioterapia-musculo-esqueletica.jpg',
      locations: [1, 2, 3, 4, 5],
      blocks: {
        intro: {
          title: 'Fisioterapia\nmúsculo esquelética',
          text: 'A Fisioterapia Musculo Esquelética é uma área que pretende ajudar a prevenir, reduzir ou a eliminar a dor, e as limitações funcionais.\n\nTal como em outras áreas da fisioterapia, carece de uma avaliação meticulosa, e a uma intervenção que recorre a técnicas manuais, exercício e educação.',
          image: {
            mobile: '/images/services/detail/fisioterapia-musculo-esqueletica/intro/image-mobile.jpg',
            tablet: '/images/services/detail/fisioterapia-musculo-esqueletica/intro/image-tablet.jpg',
            desktop: '/images/services/detail/fisioterapia-musculo-esqueletica/intro/image-desktop.jpg',
            alt: 'Fisioterapia músculo esquelética',
          },
        },
        sideImage: {
          title: 'Para quem é indicada a fisioterapia músculo esquelética?',
          text: 'Para todas as pessoas, de <span class="highlight">todas as idades</span>, que tenham condições neuro musculo esqueléticas.',
          image: {
            mobile: '/images/services/detail/fisioterapia-musculo-esqueletica/side-image/image-mobile.jpg',
            tablet: '/images/services/detail/fisioterapia-musculo-esqueletica/side-image/image-tablet.jpg',
            desktop: '/images/services/detail/fisioterapia-musculo-esqueletica/side-image/image-desktop.jpg',
            alt: 'Para quem é indicada a fisioterapia músculo esquelética?',
          },
        },
        imageFullwidth_1: {
          image: {
            mobile: '/images/services/detail/fisioterapia-musculo-esqueletica/fullwidth-image/image-1-mobile.jpg',
            tablet: '/images/services/detail/fisioterapia-musculo-esqueletica/fullwidth-image/image-1-tablet.jpg',
            desktop: '/images/services/detail/fisioterapia-musculo-esqueletica/fullwidth-image/image-1-desktop.jpg',
            alt: 'Teste',
          },
        },
        topics_1: {
          title: 'É indicada para que situações?',
          topics: [
            'Dor (costas, ombro, cotovelo, joelho, anca)',
            'Hérnias',
            'Entorse',
            'Rotura (ligamentos, musculares)',
            'Lesões meniscais',
            'Tendinopatias',
            'Condromalacia (lesões da cartilagem)',
            'Fascite plantar',
            'Síndrome do túnel cárpico',
          ],
        },
        twoImagesGrid: {
          title: 'Quais os benefícios?',
          topics: [
            '<span class="highlight">Alívio</span> da dor',
            'Estilo de vida <span class="highlight">ativo e saudável</span>',
            '<span class="highlight">Capacitação</span> para atividades do dia a dia',
          ],
          imageBig: {
            mobile: '/images/services/detail/fisioterapia-musculo-esqueletica/two-images-grid/image-1-mobile.jpg',
            tablet: '/images/services/detail/fisioterapia-musculo-esqueletica/two-images-grid/image-1-tablet.jpg',
            desktop: '/images/services/detail/fisioterapia-musculo-esqueletica/two-images-grid/image-1-desktop.jpg',
            alt: 'Para quem é indicada a fisioterapia músculo esquelética?',
          },
          imageSmall: {
            mobile: '/images/services/detail/fisioterapia-musculo-esqueletica/two-images-grid/image-2-mobile.jpg',
            tablet: '/images/services/detail/fisioterapia-musculo-esqueletica/two-images-grid/image-2-tablet.jpg',
            desktop: '/images/services/detail/fisioterapia-musculo-esqueletica/two-images-grid/image-2-desktop.jpg',
            alt: 'Para quem é indicada a fisioterapia músculo esquelética?',
          },
        },
        topics_2: {
          title: 'Porquê optar pela ForPhysio?',
          topics: [
            'Avaliação subjetiva e física individualizada',
            '60 minutos dedicados ao cliente, sempre na presença do(a) fisioterapeuta',
            'Intervenção baseada na melhor evidência ciêntífica',
            'Monitorização constante da evolução',
            'Relatório de alta em fisioterapia',
          ],
        },
        imageFullwidth_2: {
          image: {
            mobile: '/images/services/detail/fisioterapia-musculo-esqueletica/fullwidth-image/image-2-mobile.jpg',
            tablet: '/images/services/detail/fisioterapia-musculo-esqueletica/fullwidth-image/image-2-tablet.jpg',
            desktop: '/images/services/detail/fisioterapia-musculo-esqueletica/fullwidth-image/image-2-desktop.jpg',
            alt: 'Teste',
          },
        },
        appointmentBanner: {
          image: {
            mobile: '/images/services/detail/fisioterapia-musculo-esqueletica/appointment-banner/image-mobile.jpg',
            tablet: '/images/services/detail/fisioterapia-musculo-esqueletica/appointment-banner/image-tablet.jpg',
            desktop: '/images/services/detail/fisioterapia-musculo-esqueletica/appointment-banner/image-desktop.jpg',
            alt: 'Teste',
          },
        },
      },
    },
    {
      id: 2,
      slug: 'fisioterapia-no-desporto',
      title: 'Fisioterapia no Desporto',
      image: 'fisioterapia-no-desporto.jpg',
      locations: [1, 2, 3, 4, 5],
      blocks: {
        intro: {
          title: 'Fisioterapia no Desporto',
          text: 'A Fisioterapia no Desporto tem como objetivo a promoção da atividade física de forma efetiva e segura, a redução do risco de lesões, a otimização da função e a contribuição para o melhor desempenho desportivo dos atletas de todas as idades e a diferentes níveis competitivos de diversas modalidades.',
          image: {
            mobile: '/images/services/detail/fisioterapia-desporto/intro/image-mobile.jpg',
            tablet: '/images/services/detail/fisioterapia-desporto/intro/image-tablet.jpg',
            desktop: '/images/services/detail/fisioterapia-desporto/intro/image-desktop.jpg',
            alt: 'Fisioterapia no Desporto',
          },
        },
        sideImage: {
          title: 'Para quem é indicada a fisioterapia online?',
          text: 'Atletas de <span class="highlight">todas as idades</span>, em diferentes níveis de competição e modalidades.',
          image: {
            mobile: '/images/services/detail/fisioterapia-desporto/side-image/image-mobile.jpg',
            tablet: '/images/services/detail/fisioterapia-desporto/side-image/image-tablet.jpg',
            desktop: '/images/services/detail/fisioterapia-desporto/side-image/image-desktop.jpg',
            alt: 'tbd',
          },
        },
        imageFullwidth_1: {
          image: {
            mobile: '/images/services/detail/fisioterapia-desporto/fullwidth-image/image-1-mobile.jpg',
            tablet: '/images/services/detail/fisioterapia-desporto/fullwidth-image/image-1-tablet.jpg',
            desktop: '/images/services/detail/fisioterapia-desporto/fullwidth-image/image-1-desktop.jpg',
            alt: 'tbd',
          },
        },
        topics_1: {
          title: 'É indicada para que situações?',
          topics: [
            'Redução do risco de lesões',
            'Melhoria do desempenho desportivo',
            'Momento 0 de lesão (cuidados imediatos em contexto de treino ou jogo)',
            'Dor (costas, ombro, cotovelo, joelho, anca)',
            'Hérnias',
            'Entorse do tornozelo ou punho',
            'Rotura de ligamentos',
            'Conflito subacromial',
            'Roturas musculares',
            'Lesões meniscais',
            'Tendinopatias',
            'Conflito femoro-acetabular',
            'Condromalacia (lesões da cartilagem)',
            'Fascíte plantar',
            'Reabilitação pós cirúrgica',
            'Reabilitação pós fratura e imobilização',
            'Luxações',
          ],
        },
        twoImagesGrid: {
          title: 'Quais os benefícios?',
          topics: [
            '<span class="highlight">Promoção</span> de atividade física',
            '<span class="highlight">Redução do risco</span> de lesões',
            '<span class="highlight">Reabilitação</span> de lesões',
            '<span class="highlight">Otimização</span> da função',
            '<span class="highlight">Melhoria</span> do desempenho desportivo',
            '<span class="highlight">Momento</span> 0 de lesão (treino ou jogo)',
          ],
          imageBig: {
            mobile: '/images/services/detail/fisioterapia-desporto/two-images-grid/image-1-mobile.jpg',
            tablet: '/images/services/detail/fisioterapia-desporto/two-images-grid/image-1-tablet.jpg',
            desktop: '/images/services/detail/fisioterapia-desporto/two-images-grid/image-1-desktop.jpg',
            alt: 'A definir',
          },
          imageSmall: {
            mobile: '/images/services/detail/fisioterapia-desporto/two-images-grid/image-2-mobile.jpg',
            tablet: '/images/services/detail/fisioterapia-desporto/two-images-grid/image-2-tablet.jpg',
            desktop: '/images/services/detail/fisioterapia-desporto/two-images-grid/image-2-desktop.jpg',
            alt: 'A definir',
          },
        },
        topics_2: {
          title: 'Porquê optar pela ForPhysio?',
          topics: [
            'Avaliação subjetiva e física individualizada',
            'Fisioterapeutas especializados em Fisioterapia no Desporto, com experiência comprovada na área',
            '60 minutos dedicados ao cliente, sempre na presença do(a) fisioterapeuta',
            'Intervenção baseada na melhor evidência científica',
            'Monitorização objetiva e constante da evolução',
            'Unidades equipadas com materiais e equipamentos de treino e tecnologia ideal para a recuperação de lesões desportivas',
            'Parceria com inúmeros clubes desportivos de várias modalidades',
            'Relatórios em fisioterapia',
          ],
        },
        imageFullwidth_2: {
          image: {
            mobile: '/images/services/detail/fisioterapia-desporto/fullwidth-image/image-2-mobile.jpg',
            tablet: '/images/services/detail/fisioterapia-desporto/fullwidth-image/image-2-tablet.jpg',
            desktop: '/images/services/detail/fisioterapia-desporto/fullwidth-image/image-2-desktop.jpg',
            alt: 'Teste',
          },
        },
        appointmentBanner: {
          image: {
            mobile: '/images/services/detail/fisioterapia-desporto/appointment-banner/image-mobile.jpg',
            tablet: '/images/services/detail/fisioterapia-desporto/appointment-banner/image-tablet.jpg',
            desktop: '/images/services/detail/fisioterapia-desporto/appointment-banner/image-desktop.jpg',
            alt: 'Teste',
          },
        },
      },
    },
    {
      id: 3,
      slug: 'fisioterapia-aquatica-e-hidroterapia',
      title: 'Fisioterapia Aquática e Hidroterapia',
      image: 'fisioterapia-aquatica-e-hidroterapia.jpg',
      locations: [2, 4],
      blocks: {
        intro: {
          title: 'Fisioterapia\nAquática e Hidroterapia',
          text: 'A Fisioterapia Aquática ou Hidroterapia em piscina consiste na aplicação de técnicas específicas de fisioterapia no meio aquático, tirando partido dos efeitos das propriedades físico-químicas da água.\nPode ser realizada individualmente ou em grupo, como forma única de tratamento ou como complemento de outra modalidade.',
          image: {
            mobile: '/images/services/detail/fisioterapia-aquatica-hidroterapia/intro/image-mobile.jpg',
            tablet: '/images/services/detail/fisioterapia-aquatica-hidroterapia/intro/image-tablet.jpg',
            desktop: '/images/services/detail/fisioterapia-aquatica-hidroterapia/intro/image-desktop.jpg',
            alt: 'Fisioterapia Aquática e Hidroterapia',
          },
        },
        sideImage: {
          title: 'Para quem é indicada a fisioterapia aquática e hidroterapia?',
          text: 'Para todas as pessoas, de <span class="highlight">todas as idades</span> e géneros.',
          image: {
            mobile: '/images/services/detail/fisioterapia-aquatica-hidroterapia/side-image/image-mobile.jpg',
            tablet: '/images/services/detail/fisioterapia-aquatica-hidroterapia/side-image/image-tablet.jpg',
            desktop: '/images/services/detail/fisioterapia-aquatica-hidroterapia/side-image/image-desktop.jpg',
            alt: 'tbd',
          },
        },
        imageFullwidth_1: {
          image: {
            mobile: '/images/services/detail/fisioterapia-aquatica-hidroterapia/fullwidth-image/image-1-mobile.jpg',
            tablet: '/images/services/detail/fisioterapia-aquatica-hidroterapia/fullwidth-image/image-1-tablet.jpg',
            desktop: '/images/services/detail/fisioterapia-aquatica-hidroterapia/fullwidth-image/image-1-desktop.jpg',
            alt: 'tbd',
          },
        },
        topics_1: {
          title: 'É indicada para que situações?',
          topics: [
            'Dor (costas, ombro, cotovelo, joelho, anca)',
            'Hérnias',
            'Entorse',
            'Rotura (ligamentos, musculares)',
            'Lesões meniscais',
            'Tendinopatias',
            'Condromalacia (lesões da cartilagem)',
            'Fascite plantar',
            'Síndrome do túnel cárpico',
            'Reabilitação pós cirúrgica',
            'Reabilitação pós fratura',
          ],
        },
        twoImagesGrid: {
          title: 'Quais os benefícios?',
          text: 'Os benefícios são proporcionados pelas propriedades físico-químicas da água, e pela imersão:',
          topics: [
            '<span class="highlight">Alívio</span> da dor',
            '<span class="highlight">Promoção</span> da função cardiovascular e respiratória',
            'Treino de <span class="highlight">marcha</span>',
            '<span class="highlight">Fortalecimento</span> muscular (sem carga total)',
            '<span class="highlight">Qualidade</span> de vida',
          ],
          imageBig: {
            mobile: '/images/services/detail/fisioterapia-aquatica-hidroterapia/two-images-grid/image-1-mobile.jpg',
            tablet: '/images/services/detail/fisioterapia-aquatica-hidroterapia/two-images-grid/image-1-tablet.jpg',
            desktop: '/images/services/detail/fisioterapia-aquatica-hidroterapia/two-images-grid/image-1-desktop.jpg',
            alt: 'A definir',
          },
          imageSmall: {
            mobile: '/images/services/detail/fisioterapia-aquatica-hidroterapia/two-images-grid/image-2-mobile.jpg',
            tablet: '/images/services/detail/fisioterapia-aquatica-hidroterapia/two-images-grid/image-2-tablet.jpg',
            desktop: '/images/services/detail/fisioterapia-aquatica-hidroterapia/two-images-grid/image-2-desktop.jpg',
            alt: 'A definir',
          },
        },
        topics_2: {
          title: 'Porquê optar pela ForPhysio?',
          topics: [
            'Orientado por um(a) fisioterapeuta, com conhecimento e capacidade de adaptação dos exercícios a cada pessoa e condição',
            'Por ser utilizada como complemento em diversas condições clínicas, acelera a velocidade de recuperação',
            'Excelentes instalações e equipamentos',
          ],
        },
        imageFullwidth_2: {
          image: {
            mobile: '/images/services/detail/fisioterapia-aquatica-hidroterapia/fullwidth-image/image-2-mobile.jpg',
            tablet: '/images/services/detail/fisioterapia-aquatica-hidroterapia/fullwidth-image/image-2-tablet.jpg',
            desktop: '/images/services/detail/fisioterapia-aquatica-hidroterapia/fullwidth-image/image-2-desktop.jpg',
            alt: 'Teste',
          },
        },
        appointmentBanner: {
          image: {
            mobile: '/images/services/detail/fisioterapia-aquatica-hidroterapia/appointment-banner/image-mobile.jpg',
            tablet: '/images/services/detail/fisioterapia-aquatica-hidroterapia/appointment-banner/image-tablet.jpg',
            desktop: '/images/services/detail/fisioterapia-aquatica-hidroterapia/appointment-banner/image-desktop.jpg',
            alt: 'Teste',
          },
        },
      },
    },
    {
      id: 4,
      slug: 'fisioterapia-no-envelhecimento',
      title: 'Fisioterapia no Envelhecimento',
      image: 'fisioterapia-no-envelhecimento.jpg',
      locations: [1, 2, 3, 4, 5],
      blocks: {
        intro: {
          title: 'Fisioterapia no envelhecimento ativo',
          text: 'O envelhecimento está associado a inúmeras alterações metabólicas e fisiológicas.\n\nO(a) fisioterapeuta intervém na prevenção e tratamento de possíveis lesões, bem como na melhoria das limitações e incapacidades funcionais.',
          image: {
            mobile: '/images/services/detail/fisioterapia-envelhecimento-ativo/intro/image-mobile.jpg',
            tablet: '/images/services/detail/fisioterapia-envelhecimento-ativo/intro/image-tablet.jpg',
            desktop: '/images/services/detail/fisioterapia-envelhecimento-ativo/intro/image-desktop-2.jpg',
            alt: 'Fisioterapia no envelhecimento ativo',
          },
        },
        sideImage: {
          title: 'Para quem é indicada a Fisioterapia no envelhecimento ativo?',
          text: 'Pessoas acima dos <span class="highlight">65 anos</span>.',
          image: {
            mobile: '/images/services/detail/fisioterapia-envelhecimento-ativo/side-image/image-mobile.jpg',
            tablet: '/images/services/detail/fisioterapia-envelhecimento-ativo/side-image/image-tablet.jpg',
            desktop: '/images/services/detail/fisioterapia-envelhecimento-ativo/side-image/image-desktop.jpg',
            alt: 'tbd',
          },
        },
        imageFullwidth_1: {
          image: {
            mobile: '/images/services/detail/fisioterapia-envelhecimento-ativo/fullwidth-image/image-1-mobile.jpg',
            tablet: '/images/services/detail/fisioterapia-envelhecimento-ativo/fullwidth-image/image-1-tablet.jpg',
            desktop: '/images/services/detail/fisioterapia-envelhecimento-ativo/fullwidth-image/image-1-desktop.jpg',
            alt: 'tbd',
          },
        },
        topics_1: {
          title: 'É indicada para que situações?',
          topics: [
            'Dor (costas, ombro, cotovelo, joelho, anca)',
            'Hérnias',
            'Entorse',
            'Rotura (ligamentos, musculares)',
            'Lesões meniscais',
            'Tendinopatias',
            'Condromalacia (lesões da cartilagem)',
            'Fascite plantar',
            'Síndrome do túnel cárpico',
            'Reabilitação pós cirúrgica',
            'Reabilitação pós fratura',
          ],
        },
        twoImagesGrid: {
          title: 'Quais os benefícios?',
          text: 'Os benefícios são proporcionados pelas propriedades físico-químicas da água, e pela imersão:',
          topics: [
            '<span class="highlight">Alívio</span> da dor',
            'Estilo de vida <span class="highlight">ativo e saúdavel</span>',
            '<span class="highlight">Capacitação</span> para atividades do dia-a-dia',
          ],
          imageBig: {
            mobile: '/images/services/detail/fisioterapia-envelhecimento-ativo/two-images-grid/image-1-mobile.jpg',
            tablet: '/images/services/detail/fisioterapia-envelhecimento-ativo/two-images-grid/image-1-tablet.jpg',
            desktop: '/images/services/detail/fisioterapia-envelhecimento-ativo/two-images-grid/image-1-desktop.jpg',
            alt: 'A definir',
          },
          imageSmall: {
            mobile: '/images/services/detail/fisioterapia-envelhecimento-ativo/two-images-grid/image-2-mobile.jpg',
            tablet: '/images/services/detail/fisioterapia-envelhecimento-ativo/two-images-grid/image-2-tablet.jpg',
            desktop: '/images/services/detail/fisioterapia-envelhecimento-ativo/two-images-grid/image-2-desktop.jpg',
            alt: 'A definir',
          },
        },
        topics_2: {
          title: 'Porquê optar pela ForPhysio?',
          topics: [
            'Avaliação subjetiva e física individualizada',
            '60 minutos dedicados ao cliente, sempre na presença do(a) fisioterapeuta',
            'Intervenção baseada na melhor evidência científica',
            'Monitorização constante da evolução',
            'Relatório de alta em fisioterapia',
          ],
        },
        imageFullwidth_2: {
          image: {
            mobile: '/images/services/detail/fisioterapia-envelhecimento-ativo/fullwidth-image/image-2-mobile.jpg',
            tablet: '/images/services/detail/fisioterapia-envelhecimento-ativo/fullwidth-image/image-2-tablet.jpg',
            desktop: '/images/services/detail/fisioterapia-envelhecimento-ativo/fullwidth-image/image-2-desktop.jpg',
            alt: 'Teste',
          },
        },
        appointmentBanner: {
          image: {
            mobile: '/images/services/detail/fisioterapia-envelhecimento-ativo/appointment-banner/image-mobile.jpg',
            tablet: '/images/services/detail/fisioterapia-envelhecimento-ativo/appointment-banner/image-tablet.jpg',
            desktop: '/images/services/detail/fisioterapia-envelhecimento-ativo/appointment-banner/image-desktop.jpg',
            alt: 'Teste',
          },
        },
      },
    },
    {
      id: 5,
      slug: 'fisioterapia-online',
      title: 'Fisioterapia Online',
      image: 'fisioterapia-online.jpg',
      blocks: {
        intro: {
          title: 'Fisioterapia Online',
          text: 'Sessão de fisioterapia sem ter que se deslocar às nossas instalações.',
          image: {
            mobile: '/images/services/detail/fisioterapia-online/intro/image-mobile.jpg',
            tablet: '/images/services/detail/fisioterapia-online/intro/image-tablet.jpg',
            desktop: '/images/services/detail/fisioterapia-online/intro/image-desktop.jpg',
            alt: 'Fisioterapia Online',
          },
        },
        sideImage: {
          title: 'Para quem é indicada a fisioterapia online?',
          text: 'Para <span class="highlight">todos os que não se consigam deslocar</span> até às nossas instalações e necessitem de cuidados em fisioterapia <span class="highlight">músculo-esquelética</span>, <span class="highlight">desportiva</span>, no <span class="highlight">envelhecimento</span> ou <span class="highlight">saúde na mulher</span>.',
          image: {
            mobile: '/images/services/detail/fisioterapia-online/side-image/image-mobile.jpg',
            tablet: '/images/services/detail/fisioterapia-online/side-image/image-tablet.jpg',
            desktop: '/images/services/detail/fisioterapia-online/side-image/image-desktop.jpg',
            alt: 'tbd',
          },
        },
        imageFullwidth_1: {
          image: {
            mobile: '/images/services/detail/fisioterapia-online/fullwidth-image/image-1-mobile.jpg',
            tablet: '/images/services/detail/fisioterapia-online/fullwidth-image/image-1-tablet.jpg',
            desktop: '/images/services/detail/fisioterapia-online/fullwidth-image/image-1-desktop.jpg',
            alt: 'tbd',
          },
        },
        topics_1: {
          title: 'É indicada para que situações?',
          topics: [
            'Dor (costas, ombro, cotovelo, joelho, anca)',
            'Hérnias',
            'Ombro congelado',
            'Entorse do tornozelo ou punho',
            'Rotura de ligamentos',
            'Conflito subacromial',
            'Roturas musculares',
            'Lesões meniscais',
            'Tendinopatias',
            'Conflito femoro-acetabular',
            'Condromalacia (lesões da cartilagem)',
            'Fascíte plantar',
            'Síndrome do túnel cárpico',
            'Reabilitação pós cirúrgica',
            'Reabilitação pós fratura e imobilização',
            'Luxações',
            'Preparação para o nascimento',
            'Recuperação pós-parto',
            'Diástase abdominal',
            'Disfunções sexuais (dor durante a relação, vaginismo)',
            'Dor pélvica',
            'Endometriose',
            'Obstipação',
            'Prolapso de órgãos pélvicos (descida dos órgãos)',
            'Menopausa',
            'Incontinência (perda) urinária, fecal ou de gases',
          ],
        },
        twoImagesGrid: {
          title: 'Quais os benefícios?',
          topics: [
            '<span class="highlight">Alívio</span> da dor',
            '<span class="highlight">Melhoria</span> das amplitudes articulares',
            '<span class="highlight">Fortalecimento</span> muscular (sem carga total)',
            '<span class="highlight">Melhoria da qualidade</span> do movimento e controlo motor',
            'Retorno à <span class="highlight">funcionalidade</span>',
            '<span class="highlight">Qualidade</span> de vida',
          ],
          imageBig: {
            mobile: '/images/services/detail/fisioterapia-online/two-images-grid/image-1-mobile.jpg',
            tablet: '/images/services/detail/fisioterapia-online/two-images-grid/image-1-tablet.jpg',
            desktop: '/images/services/detail/fisioterapia-online/two-images-grid/image-1-desktop.jpg',
            alt: 'A definir',
          },
          imageSmall: {
            mobile: '/images/services/detail/fisioterapia-online/two-images-grid/image-2-mobile.jpg',
            tablet: '/images/services/detail/fisioterapia-online/two-images-grid/image-2-tablet.jpg',
            desktop: '/images/services/detail/fisioterapia-online/two-images-grid/image-2-desktop.jpg',
            alt: 'A definir',
          },
        },
        topics_2: {
          title: 'Porquê optar pela ForPhysio?',
          topics: [
            'Avaliação individualizada',
            'Monitorização constante da evolução',
            '60 minutos dedicados ao cliente',
            'Relatório em fisioterapia (se necessário)',
            'Conforto da sua casa',
            'Sem necessidade de deslocação',
          ],
        },
        appointmentBanner: {
          image: {
            mobile: '/images/services/detail/fisioterapia-online/appointment-banner/image-mobile.jpg',
            tablet: '/images/services/detail/fisioterapia-online/appointment-banner/image-tablet.jpg',
            desktop: '/images/services/detail/fisioterapia-online/appointment-banner/image-desktop.jpg',
            alt: 'Teste',
          },
        },
      },
    },
    {
      id: 6,
      slug: 'fisioterapia-na-saude-da-mulher',
      title: 'Fisioterapia na Saúde da Mulher',
      image: 'fisioterapia-na-saude-da-mulher.jpg',
      blocks: {
        intro: {
          title: 'Fisioterapia na\nsaúde da mulher',
          text: 'A Saúde da Mulher é uma área de intervenção da Fisioterapia que visa reabilitar e prevenir condições pélvicas, acompanhar a Mulher no decorrer da sua gravidez e auxiliar na recuperação durante o período de pós-parto.\n\nAjudamos as Mulheres a conhecerem o seu corpo e como cuidar dele, em todas as suas fases, desde a menstruação até à menopausa, sem tabus e sem preconceitos, de forma a melhorar a sua qualidade de vida.',
          image: {
            mobile: '/images/services/detail/fisioterapia-saude-da-mulher/intro/image-mobile.jpg',
            tablet: '/images/services/detail/fisioterapia-saude-da-mulher/intro/image-tablet.jpg',
            desktop: '/images/services/detail/fisioterapia-saude-da-mulher/intro/image-desktop.jpg',
            alt: 'Fisioterapia na saúde da mulher',
          },
        },
        sideImage: {
          title: 'Para quem é indicada a fisioterapia na saúde da mulher?',
          text: 'Para todas as todas as mulheres, de <span class="highlight">todas as idades</span>.',
          image: {
            mobile: '/images/services/detail/fisioterapia-saude-da-mulher/side-image/image-mobile.jpg',
            tablet: '/images/services/detail/fisioterapia-saude-da-mulher/side-image/image-tablet.jpg',
            desktop: '/images/services/detail/fisioterapia-saude-da-mulher/side-image/image-desktop.jpg',
            alt: 'Para quem é indicada a fisioterapia na saúde da mulher?',
          },
        },
        imageFullwidth_1: {
          image: {
            mobile: '/images/services/detail/fisioterapia-saude-da-mulher/fullwidth-image/image-1-mobile.jpg',
            tablet: '/images/services/detail/fisioterapia-saude-da-mulher/fullwidth-image/image-1-tablet.jpg',
            desktop: '/images/services/detail/fisioterapia-saude-da-mulher/fullwidth-image/image-1-desktop.jpg',
            alt: 'Teste',
          },
        },
        topics_1: {
          title: 'É indicada para que situações?',
          topics: [
            'Pré e pós parto',
            'Diástase abdominal',
            'Disfunções sexuais (dor durante a relação, vaginismo)',
            'Endometriose',
            'Obstipação',
            'Prolapso de órgãos pélvicos (descida dos órgãos)',
            'Menopausa',
            'Incontinência (perda) urinária, fecal ou de gases',
          ],
        },
        twoImagesGrid: {
          title: 'Quais os benefícios?',
          topics: [
            '<span class="highlight">Conhecimento</span> corporal',
            '<span class="highlight">Alívio da dor</span> (menstrual, durante a relação sexual)',
            'Gravidez mais <span class="highlight">segura</span>',
            '<span class="highlight">Recuperação</span> do corpo após o parto',
            'Recuperação <span class="highlight">pós cirúrgica</span>',
            'Independência',
          ],
          imageBig: {
            mobile: '/images/services/detail/fisioterapia-saude-da-mulher/two-images-grid/image-1-mobile.jpg',
            tablet: '/images/services/detail/fisioterapia-saude-da-mulher/two-images-grid/image-1-tablet.jpg',
            desktop: '/images/services/detail/fisioterapia-saude-da-mulher/two-images-grid/image-1-desktop.jpg',
            alt: 'A definir',
          },
          imageSmall: {
            mobile: '/images/services/detail/fisioterapia-saude-da-mulher/two-images-grid/image-2-mobile.jpg',
            tablet: '/images/services/detail/fisioterapia-saude-da-mulher/two-images-grid/image-2-tablet.jpg',
            desktop: '/images/services/detail/fisioterapia-saude-da-mulher/two-images-grid/image-2-desktop.jpg',
            alt: 'A definir',
          },
        },
        topics_2: {
          title: 'Porquê optar pela ForPhysio?',
          topics: [
            'Avaliação subjetiva e física individualizada',
            'Fisioterapeutas especializados em Saúde da Mulher',
            '60 minutos dedicados ao cliente, sempre na presença do(a) fisioterapeuta',
            'Intervenção baseada na melhor evidência científica',
            'Monitorização constante da evolução',
            'Relatório de alta em fisioterapia',
          ],
        },
        imageFullwidth_2: {
          image: {
            mobile: '/images/services/detail/fisioterapia-saude-da-mulher/fullwidth-image/image-2-mobile.jpg',
            tablet: '/images/services/detail/fisioterapia-saude-da-mulher/fullwidth-image/image-2-tablet.jpg',
            desktop: '/images/services/detail/fisioterapia-saude-da-mulher//fullwidth-image/image-2-desktop.jpg',
            alt: 'Teste',
          },
        },
        appointmentBanner: {
          image: {
            mobile: '/images/services/detail/fisioterapia-saude-da-mulher/appointment-banner/image-mobile.jpg',
            tablet: '/images/services/detail/fisioterapia-saude-da-mulher/appointment-banner/image-tablet.jpg',
            desktop: '/images/services/detail/fisioterapia-saude-da-mulher/appointment-banner/image-desktop.jpg',
            alt: 'Teste',
          },
        },
      },
    },
    {
      id: 7,
      slug: 'pilates-clinico',
      title: 'Pilates Clínico',
      image: 'pilates-clinico.jpg',
      locations: [1],
      blocks: {
        intro: {
          title: 'Pilates Clínico',
          text: 'O Pilates Clínico é um método de controlo muscular desenvolvido por Joseph Pilates na década de 1920.\nPode ser realizado individualmente ou em grupo.',
          image: {
            mobile: '/images/services/detail/pilates-clinico/intro/image-mobile.jpg',
            tablet: '/images/services/detail/pilates-clinico/intro/image-tablet.jpg',
            desktop: '/images/services/detail/pilates-clinico/intro/image-desktop.jpg',
            alt: 'Pilates Clínico',
          },
        },
        sideImage: {
          title: 'Para quem é indicada o pilates clínico?',
          text: 'Para todas as pessoas, de <span class="highlight">todas as idades e géneros</span>, com ou sem condição clínica associada.',
          image: {
            mobile: '/images/services/detail/pilates-clinico/side-image/image-mobile.jpg',
            tablet: '/images/services/detail/pilates-clinico/side-image/image-tablet.jpg',
            desktop: '/images/services/detail/pilates-clinico/side-image/image-desktop.jpg',
            alt: 'tbd',
          },
        },
        imageFullwidth_1: {
          image: {
            mobile: '/images/services/detail/pilates-clinico/fullwidth-image/image-1-mobile.jpg',
            tablet: '/images/services/detail/pilates-clinico/fullwidth-image/image-1-tablet.jpg',
            desktop: '/images/services/detail/pilates-clinico/fullwidth-image/image-1-desktop.jpg',
            alt: 'tbd',
          },
        },
        topics_1: {
          title: 'É indicada para que situações?',
          topics: [
            'Perda de força',
            'Limitações na postura',
            'Dificuldades na marcha',
            'Alterações no equilíbrio',
            'Limitações funcionais',
            'Redução de precisão de movimentos',
          ],
        },
        twoImagesGrid: {
          title: 'Quais os benefícios?',
          topics: [
            'Aumento da <span class="highlight">estabilidade articular</span>',
            '<span class="highlight">Aumento</span> de força muscular',
            'Melhoria da <span class="highlight">flexibilidade</span>',
            'Melhoria da <span class="highlight">coordenação</span> motora',
            '<span class="highlight">Melhoria</span> do controlo postural e respiratório',
            'Aumento da <span class="highlight">capacidade</span> funcional',
            'Promoção da <span class="highlight">independência</span>',
            '<span class="highlight">Melhoria</span> da qualidade de vida',
          ],
          imageBig: {
            mobile: '/images/services/detail/pilates-clinico/two-images-grid/image-1-mobile.jpg',
            tablet: '/images/services/detail/pilates-clinico/two-images-grid/image-1-tablet.jpg',
            desktop: '/images/services/detail/pilates-clinico/two-images-grid/image-1-desktop.jpg',
            alt: 'A definir',
          },
          imageSmall: {
            mobile: '/images/services/detail/pilates-clinico/two-images-grid/image-2-mobile.jpg',
            tablet: '/images/services/detail/pilates-clinico/two-images-grid/image-2-tablet.jpg',
            desktop: '/images/services/detail/pilates-clinico/two-images-grid/image-2-desktop.jpg',
            alt: 'A definir',
          },
        },
        topics_2: {
          title: 'Porquê optar pela ForPhysio?',
          topics: [
            'Orientado por um(a) fisioterapeuta, com conhecimento e capacidade de adaptação dos exercícios a cada pessoa e condição.',
            'Vida saudável e ativa, de forma segura',
            'Tem também a possibilidade de obter reembolso de parte do valor investido através dos subsistemas de saúde e seguros de saúde.',
          ],
        },
        imageFullwidth_2: {
          image: {
            mobile: '/images/services/detail/pilates-clinico/fullwidth-image/image-2-mobile.jpg',
            tablet: '/images/services/detail/pilates-clinico/fullwidth-image/image-2-tablet.jpg',
            desktop: '/images/services/detail/pilates-clinico/fullwidth-image/image-2-desktop.jpg',
            alt: 'Teste',
          },
        },
        appointmentBanner: {
          image: {
            mobile: '/images/services/detail/pilates-clinico/appointment-banner/image-mobile.jpg',
            tablet: '/images/services/detail/pilates-clinico/appointment-banner/image-tablet.jpg',
            desktop: '/images/services/detail/pilates-clinico/appointment-banner/image-desktop.jpg',
            alt: 'Teste',
          },
        },
      },
    },
    {
      id: 8,
      slug: 'nutricao',
      title: 'Nutrição',
      image: 'nutricao.jpg',
      locations: [1, 2, 3, 5],
      blocks: {
        intro: {
          title: 'Nutrição',
          text: 'A Nutrição assume um papel importante na manutenção das capacidades físicas e na resposta ao exercício, sendo por isso um fator a ter em conta no retorno às normais atividades do dia-a-dia e retorno à atividade desportiva.',
          image: {
            mobile: '/images/services/detail/nutricao/intro/image-mobile.jpg',
            tablet: '/images/services/detail/nutricao/intro/image-tablet.jpg',
            desktop: '/images/services/detail/nutricao/intro/image-desktop.jpg',
            alt: 'Pilates Clínico',
          },
        },
        sideImage: {
          title: 'Para quem é indicada a nutrição?',
          text: 'Para todas as pessoas, de <span class="highlight">todas as idades</span>.',
          image: {
            mobile: '/images/services/detail/nutricao/side-image/image-mobile.jpg',
            tablet: '/images/services/detail/nutricao/side-image/image-tablet.jpg',
            desktop: '/images/services/detail/nutricao/side-image/image-desktop.jpg',
            alt: 'tbd',
          },
        },
        imageFullwidth_1: {
          image: {
            mobile: '/images/services/detail/nutricao/fullwidth-image/image-1-mobile.jpg',
            tablet: '/images/services/detail/nutricao/fullwidth-image/image-1-tablet.jpg',
            desktop: '/images/services/detail/nutricao/fullwidth-image/image-1-desktop.jpg',
            alt: 'tbd',
          },
        },
        text: 'Desde 2016 foram muitos os atletas de recreação e competição que confiaram no nosso serviço de nutrição.',
        twoImagesGrid: {
          text: 'Contamos com uma <span class="highlight">equipa de profissionais</span> dedicada e preparada para esclarecer as suas dúvidas e ajudar a atingir os seus <span class="highlight">objetivos</span>!',
          imageBig: {
            mobile: '/images/services/detail/nutricao/two-images-grid/image-1-mobile.jpg',
            tablet: '/images/services/detail/nutricao/two-images-grid/image-1-tablet.jpg',
            desktop: '/images/services/detail/nutricao/two-images-grid/image-1-desktop.jpg',
            alt: 'A definir',
          },
          imageSmall: {
            mobile: '/images/services/detail/nutricao/two-images-grid/image-2-mobile.jpg',
            tablet: '/images/services/detail/nutricao/two-images-grid/image-2-tablet.jpg',
            desktop: '/images/services/detail/nutricao/two-images-grid/image-2-desktop.jpg',
            alt: 'A definir',
          },
        },
        appointmentBanner: {
          image: {
            mobile: '/images/services/detail/nutricao/appointment-banner/image-mobile.jpg',
            tablet: '/images/services/detail/nutricao/appointment-banner/image-tablet.jpg',
            desktop: '/images/services/detail/nutricao/appointment-banner/image-desktop.jpg',
            alt: 'Teste',
          },
        },
      },
    },
    {
      id: 9,
      slug: 'saude-e-bem-estar',
      title: 'Saúde e Bem-estar',
      image: 'saude-e-bem-estar.jpg',
      locations: [1, 2, 3, 5],
      blocks: {
        intro: {
          title: 'Saúde e Bem-estar',
          text: 'A área da Saúde e Bem-Estar encontra-se representada na ForPhysio através dos seus serviços especializados de massagem: terapêutica, desportiva e modeladora.',
          image: {
            mobile: '/images/services/detail/saude-bem-estar/intro/image-mobile.jpg',
            tablet: '/images/services/detail/saude-bem-estar/intro/image-tablet.jpg',
            desktop: '/images/services/detail/saude-bem-estar/intro/image-desktop.jpg',
            alt: 'Pilates Clínico',
          },
        },
        sideImage: {
          title: 'Para quem é indicada o pilates clínico?',
          text: 'Para todas as pessoas, de <span class="highlight">todas as idades e géneros</span>.',
          image: {
            mobile: '/images/services/detail/saude-bem-estar/side-image/image-mobile.jpg',
            tablet: '/images/services/detail/saude-bem-estar/side-image/image-tablet.jpg',
            desktop: '/images/services/detail/saude-bem-estar/side-image/image-desktop.jpg',
            alt: 'tbd',
          },
        },
        imageFullwidth_1: {
          image: {
            mobile: '/images/services/detail/saude-bem-estar/fullwidth-image/image-1-mobile.jpg',
            tablet: '/images/services/detail/saude-bem-estar/fullwidth-image/image-1-tablet.jpg',
            desktop: '/images/services/detail/saude-bem-estar/fullwidth-image/image-1-desktop.jpg',
            alt: 'tbd',
          },
        },
        topics_1: {
          title: 'É indicada para que situações?',
          topics: [
            'Perda de força',
            'Limitações na postura',
            'Dificuldades na marcha',
            'Alterações no equilíbrio',
            'Limitações funcionais',
            'Redução de precisão de movimentos',
          ],
        },
        twoImagesGrid: {
          title: 'Quais os benefícios?',
          topics: [
            '<span class="highlight">Relaxamento</span> do corpo e mente',
            '<span class="highlight">Alívio</span> de stress',
            '<span class="highlight">Diminuição da tensão</span> muscular',
            '<span class="highlight">Equilíbrio</span> mental e físico',
            'Promoção do <span class="highlight">bem-estar geral</span>',
          ],
          imageBig: {
            mobile: '/images/services/detail/saude-bem-estar/two-images-grid/image-1-mobile.jpg',
            tablet: '/images/services/detail/saude-bem-estar/two-images-grid/image-1-tablet.jpg',
            desktop: '/images/services/detail/saude-bem-estar/two-images-grid/image-1-desktop.jpg',
            alt: 'A definir',
          },
          imageSmall: {
            mobile: '/images/services/detail/saude-bem-estar/two-images-grid/image-2-mobile.jpg',
            tablet: '/images/services/detail/saude-bem-estar/two-images-grid/image-2-tablet.jpg',
            desktop: '/images/services/detail/saude-bem-estar/two-images-grid/image-2-desktop.jpg',
            alt: 'A definir',
          },
        },
        appointmentBanner: {
          image: {
            mobile: '/images/services/detail/saude-bem-estar/appointment-banner/image-mobile.jpg',
            tablet: '/images/services/detail/saude-bem-estar/appointment-banner/image-tablet.jpg',
            desktop: '/images/services/detail/saude-bem-estar/appointment-banner/image-desktop.jpg',
            alt: 'Teste',
          },
        },
      },
    },
    {
      id: 10,
      slug: 'consultas-medicas',
      title: 'Consultas Médicas',
      image: 'consultas-medicas.jpg',
      locations: [1, 2, 3, 4, 5],
      blocks: {
        intro: {
          title: 'Consultas Médicas',
          text: 'Consultas médicas são encontros entre pacientes e médicos que permitem a avaliação, o diagnóstico e o tratamento de condições de saúde.',
          image: {
            mobile: '/images/services/detail/consultas-medicas/intro/image-mobile.jpg',
            tablet: '/images/services/detail/consultas-medicas/intro/image-tablet.jpg',
            desktop: '/images/services/detail/consultas-medicas/intro/image-desktop.jpg',
            alt: 'Consultas Médicas',
          },
        },
        sideImage: {
          title: 'Para quem são indicadas as consultas médicas?',
          text: 'As consultas médicas são indicadas para <span class="highlight">qualquer pessoa</span> que tenha uma condição de <span class="highlight">saúde</span>. Também são importantes para a <span class="highlight">prevenção de doenças</span>, orientações sobre um estilo de <span class="highlight">vida saudável</span> e para garantir a <span class="highlight">manutenção do bem-estar</span> geral.',
          image: {
            mobile: '/images/services/detail/consultas-medicas/side-image/image-mobile.jpg',
            tablet: '/images/services/detail/consultas-medicas/side-image/image-tablet.jpg',
            desktop: '/images/services/detail/consultas-medicas/side-image/image-desktop.jpg',
            alt: 'tbd',
          },
        },
        imageFullwidth_1: {
          image: {
            mobile: '/images/services/detail/consultas-medicas/fullwidth-image/image-1-mobile.jpg',
            tablet: '/images/services/detail/consultas-medicas/fullwidth-image/image-1-tablet.jpg',
            desktop: '/images/services/detail/consultas-medicas/fullwidth-image/image-1-desktop.jpg',
            alt: 'tbd',
          },
        },
        appointmentBanner: {
          image: {
            mobile: '/images/services/detail/consultas-medicas/appointment-banner/image-mobile.jpg',
            tablet: '/images/services/detail/consultas-medicas/appointment-banner/image-tablet.jpg',
            desktop: '/images/services/detail/consultas-medicas/appointment-banner/image-desktop.jpg',
            alt: 'Teste',
          },
        },
      },
    },
  ];

  const getServiceBySlug = (slug: string): Service | undefined => {
    return services.find((service) => service.slug === slug);
  };

  return {
    services,
    getServiceBySlug,
  };
};
