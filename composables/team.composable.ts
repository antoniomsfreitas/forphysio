export const useTeam = () => {
  const teamServices = [
    {
      id: 1,
      title: 'Fisioterapeuta',
    },
    {
      id: 2,
      title: 'Saúde e Bem-Estar',
    },
    {
      id: 3,
      title: 'Cirurgião ortopedista',
    },
  ];

  const teamLocations = [
    {
      id: 1,
      title: 'Marinha Grande',
      selected: false,
    },
    {
      id: 2,
      title: 'Caldas da Rainha',
      selected: true,
    },
    {
      id: 3,
      title: 'Oeiras',
      selected: false,
    },
    {
      id: 4,
      title: 'Lisboa - Lumiar',
      selected: false,
    },
  ];

  const teamMembers = [
    {
      id: 1,
      name: 'Nuno Pina',
      description:
        'Nuno Pina fundou a ForPhysio em 2014. Desde então, assume funções como  diretor da empresa. Tem dedicado a sua prática às áreas da fisioterapia músculo esquelética e desportiva. Desde o início da sua carreira que colaborou com entidades desportivas de renome como o Sport Lisboa e Benfica, Comité Olímpico de Portugal, Federação Portuguesa de Natação e Sporting Clube de Portugal. Neste  momento, é o fisioterapeuta e preparador físico da China National Swimming Team.<br>Por ser considerado um expert na sua área, é também formador em empresas de  formação de Fisioterapia, professor convidado em algumas Instituições de Ensino  Superior e palestrante convidado em diversos eventos.',
      service: 1,
      location: 2,
      image: 'nuno-pina.png',
    },
    {
      id: 2,
      name: 'Marisa Gomes',
      description:
        'Marisa  Gomes  integra  a  equipa  ForPhysio  desde  2024. Atualmente, desempenha funções como fisioterapeuta da Unidade de Saúde Balance by ForPhysio Caldas da Rainha, onde exerce a sua intervenção clínica.<br>É licenciada em fisioterapia pela Escola Superior de Saúde de Leiria, onde se  encontra a realizar o mestrado em Fisioterapia: Ramo Prescrição Fisioterapêutica  de Exercício Físico.',
      service: 1,
      location: 2,
      image: 'marisa-gomes.png',
    },
    {
      id: 3,
      name: 'Beatriz Silva',
      description:
        'Beatriz  Silva integra a equipa ForPhysio desde 2022.  Atualmente, desempenha funções como Coordenadora Geral da ForPhysio, e  fisioterapeuta das Unidades de Saúde Balance by ForPhysio do Lumiar. É licenciada em fisioterapia pela Escola Superior de Saúde de Leiria. Atualmente, é coordenadora do departamento médico do Clube Desportivo Paço de Arcos,  onde exerce funções como fisioterapeuta e preparadora física dos seniores de  hóquei em patins. Tem desenvolvido a sua formação na área da fisioterapia desportiva e na área da  gestão e gestão financeira. A Beatriz é ainda Presidente da Associação Nacional de Jovens na Fisioterapia.',
      service: 1,
      location: 4,
      image: 'beatriz-silva.png',
    },
    {
      id: 4,
      name: 'Clara Pardal',
      description:
        'Clara Pardal integra a equipa ForPhysio desde 2023.  Atualmente, desempenha funções como fisioterapeuta na unidade ForPhysio Oeiras, exercendo a sua intervenção clínica na mesma unidade. É licenciada em fisioterapia pela Escola Superior de Saúde de Alcoitão.<br>Tendo um passado enquanto nadadora, investiu a sua formação em Strenght and Conditioning, e acompanha os atletas da modalidade de natação do Clube de  Futebol Os Belenenses.',
      service: 1,
      location: 3,
      image: 'clara-pardal.png',
    },
    {
      id: 5,
      name: 'João Faia',
      description:
        'João Faia integra a equipa  ForPhysio desde 2024.  Atualmente, desempenha funções como fisioterapeuta na Unidade de Saúde Balance by ForPhysio Lumiar, exercendo a sua intervenção clínica na mesma unidade.<br>É licenciado em fisioterapia pelo Instituto Politécnico do Porto e tem  aprofundado o seu expertise em Strength and Conditioning, performance, e na  fisioterapia desportiva. Atualmente é fisioterapeuta da equipa de formação de futebol do Sporting Clube de Portugal.',
      service: 1,
      location: 4,
      image: 'joao-faia.png',
    },
    {
      id: 6,
      name: 'Luís Machado',
      description:
        'Luís Machado colabora com a equipa da ForPhysio desde 2023, realizando  consultas de ortopedia na unidade da ForPhysio Marinha Grande.<br>É cirurgião ortopedista com especial interesse e dedicação na articulação do Joelho.',
      service: 3,
      location: 1,
      image: 'luis-machado.png',
    },
    {
      id: 7,
      name: 'Margarida Saboga',
      description:
        'Margarida Saboga integra  a  equipa  ForPhysio desde  2021.  Atualmente, desempenha funções como fisioterapeuta e coordenadora da  unidade ForPhysio Marinha Grande, exercendo a sua intervenção clínica na  mesma unidade.<br>É licenciada em fisioterapia pela Escola Superior de Saúde de Leiria. Atualmente, colabora paralelamente com o Sporting Clube Marinhense, realizando o acompanhamento das equipas seniores de hóquei em patins.<br><br>Tendo especial interesse na área da fisioterapia desportiva, acompanha na unidade vários atletas de basquetebol, andebol, atletismo e muay thai.',
      service: '1',
      location: '1',
      image: 'margarida-saboga.png',
    },
    {
      id: 8,
      name: 'Joana Guimarães',
      description:
        'Joana Guimarães integra a equipa ForPhysio desde 2023.<br><br>Atualmente, desempenha funções como Profissional de Técnica de Massagem na  Unidade de Saúde Balance by ForPhysio Caldas da Rainha.',
      service: '',
      location: '',
      image: 'joana-guimaraes.png',
    },
    {
      id: 9,
      name: 'Ema Duarte',
      description: '',
      service: 2,
      location: 2,
      image: 'ema-duarte.png',
    },
  ];

  const getLocation = (id: number) => {
    return teamLocations.find((location) => location.id === id);
  };

  const getService = (id: number) => {
    return teamServices.find((service) => service.id === id);
  };

  const getTeamLocations = () => {
    return teamLocations.filter((location) => teamMembers.some((member) => member.location === location.id));
  };

  const getTeamServices = () => {
    return teamServices.filter((service) => teamMembers.some((member) => member.service === service.id));
  };

  return {
    getTeamServices,
    getTeamLocations,
    teamMembers,
  };
};
