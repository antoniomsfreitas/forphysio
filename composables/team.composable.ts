import type { TeamMember, TeamLocation, TeamService } from '~/models/team.model';

export const useTeam = () => {
  const teamServices: TeamService[] = [
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

  const teamLocations: TeamLocation[] = [
    {
      id: 1,
      title: 'Marinha Grande',
      selected: false,
      googleMapsSrc:
        'https://maps.google.com/maps?width=100%25&height=470&hl=en&q=Forphysio%20marinha%20grande+(Forphysio%20%7C%20Marinha%20Grande)&t=&z=14&ie=UTF8&iwloc=B&output=embed',
    },
    {
      id: 2,
      title: 'Caldas da Rainha',
      selected: true,
      googleMapsSrc:
        'https://maps.google.com/maps?width=100%25&height=470&hl=en&q=Forphysio%20caldas%20da%20rainha+(Forphysio%20%7C%20Caldas%20da%20Rainha)&t=&z=14&ie=UTF8&iwloc=B&output=embed',
    },
    {
      id: 3,
      title: 'Oeiras',
      selected: false,
      googleMapsSrc:
        'https://maps.google.com/maps?width=100%25&height=470&hl=en&q=Forphysio%20R.%20Sacadura%20Cabral%2065a,%201495-207%20Cruz%20Quebrada+(Forphysio%20%7C%20Oeiras)&t=&z=14&ie=UTF8&iwloc=B&output=embed',
    },
    {
      id: 4,
      title: 'Lisboa - Lumiar',
      selected: false,
      googleMapsSrc:
        'https://maps.google.com/maps?width=100%25&height=470&hl=en&q=Forphysio%20lumiar+(Forphysio%20%7C%20Lumiar)&t=&z=14&ie=UTF8&iwloc=B&output=embed',
    },
  ];

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      slug: 'nuno-pina',
      name: 'Nuno Pina',
      description:
        'Nuno Pina fundou a ForPhysio em 2014. Desde então, assume funções como diretor da empresa.\nTem dedicado a sua prática às áreas da fisioterapia músculo esquelética e desportiva. Desde o início da sua carreira que colaborou com entidades desportivas de renome como o Sport Lisboa e Benfica, Comité Olímpico de Portugal, Federação Portuguesa de Natação e Sporting Clube de Portugal. Neste momento, é o fisioterapeuta e preparador físico da China National Swimming Team.\n\nPor ser considerado um expert na sua área, é também formador em empresas de formação de Fisioterapia, professor convidado em algumas Instituições de Ensino Superior e palestrante convidado em diversos eventos.',
      service: 1,
      location: 2,
      image: 'nuno-pina.png',
    },
    {
      id: 2,
      slug: 'marisa-gomes',
      name: 'Marisa Gomes',
      description:
        'Marisa Gomes integra a equipa ForPhysio desde 2024. Atualmente, desempenha funções como fisioterapeuta da Unidade de Saúde Balance by ForPhysio Caldas da Rainha, onde exerce a sua intervenção clínica.\n\nÉ licenciada em fisioterapia pela Escola Superior de Saúde de Leiria, onde se encontra a realizar o mestrado em Fisioterapia: Ramo Prescrição Fisioterapêutica de Exercício Físico.',
      service: 1,
      location: 2,
      image: 'marisa-gomes.png',
    },
    {
      id: 3,
      slug: 'beatriz-silva',
      name: 'Beatriz Silva',
      description:
        'Beatriz Silva integra a equipa ForPhysio desde 2022. Atualmente, desempenha funções como Coordenadora Geral da ForPhysio, e fisioterapeuta das Unidades de Saúde Balance by ForPhysio do Lumiar. É licenciada em fisioterapia pela Escola Superior de Saúde de Leiria.\n\nAtualmente, é coordenadora do departamento médico do Clube Desportivo Paço de Arcos, onde exerce funções como fisioterapeuta e preparadora física dos seniores de hóquei em patins.\n\nTem desenvolvido a sua formação na área da fisioterapia desportiva e na área da gestão e gestão financeira. A Beatriz é ainda Presidente da Associação Nacional de Jovens na Fisioterapia.',
      service: 1,
      location: 4,
      image: 'beatriz-silva.png',
    },
    {
      id: 4,
      slug: 'clara-pardal',
      name: 'Clara Pardal',
      description:
        'Clara Pardal integra a equipa ForPhysio desde 2023. Atualmente, desempenha funções como fisioterapeuta na unidade ForPhysio Oeiras, exercendo a sua intervenção clínica na mesma unidade. É licenciada em fisioterapia pela Escola Superior de Saúde de Alcoitão.\n\nTendo um passado enquanto nadadora, investiu a sua formação em Strenght and Conditioning, e acompanha os atletas da modalidade de natação do Clube de Futebol Os Belenenses.',
      service: 1,
      location: 3,
      image: 'clara-pardal.png',
    },
    {
      id: 5,
      slug: 'joao-faia',
      name: 'João Faia',
      description:
        'João Faia integra a equipa ForPhysio desde 2024. Atualmente, desempenha funções como fisioterapeuta na Unidade de Saúde Balance by ForPhysio Lumiar, exercendo a sua intervenção clínica na mesma unidade.\n\nÉ licenciado em fisioterapia pelo Instituto Politécnico do Porto e tem aprofundado o seu expertise em Strength and Conditioning, performance, e na fisioterapia desportiva.\n\nAtualmente é fisioterapeuta da equipa de formação de futebol do Sporting Clube de Portugal.',
      service: 1,
      location: 4,
      image: 'joao-faia.png',
    },
    {
      id: 6,
      slug: 'luis-machado',
      name: 'Luís Machado',
      description:
        'Luís Machado colabora com a equipa da ForPhysio desde 2023, realizando consultas de ortopedia na unidade da ForPhysio Marinha Grande.\n\nÉ cirurgião ortopedista com especial interesse e dedicação na articulação do Joelho.',
      service: 3,
      location: 1,
      image: 'luis-machado.png',
    },
    {
      id: 7,
      slug: 'margarida-saboga',
      name: 'Margarida Saboga',
      description:
        'Margarida Saboga integra a equipa ForPhysio desde 2021. Atualmente, desempenha funções como fisioterapeuta e coordenadora da unidade ForPhysio Marinha Grande, exercendo a sua intervenção clínica na mesma unidade.\n\nÉ licenciada em fisioterapia pela Escola Superior de Saúde de Leiria. Atualmente, colabora paralelamente com o Sporting Clube Marinhense, realizando o acompanhamento das equipas seniores de hóquei em patins.\n\nTendo especial interesse na área da fisioterapia desportiva, acompanha na unidade vários atletas de basquetebol, andebol, atletismo e muay thai.',
      service: 1,
      location: 1,
      image: 'margarida-saboga.png',
    },
    {
      id: 8,
      slug: 'joana-guimaraes',
      name: 'Joana Guimarães',
      description:
        'Joana Guimarães integra a equipa ForPhysio desde 2023.\n\nAtualmente, desempenha funções como Profissional de Técnica de Massagem na Unidade de Saúde Balance by ForPhysio Caldas da Rainha.',
      service: 2,
      location: 2,
      image: 'joana-guimaraes.png',
    },
    // {
    //   id: 9,
    //   slug: 'ema-duarte',
    //   name: 'Ema Duarte',
    //   description: '',
    //   service: 2,
    //   location: 2,
    //   image: 'ema-duarte.png',
    // },
    {
      id: 10,
      slug: 'ana-clara',
      name: 'Ana Clara',
      description:
        'Ana Clara integra a equipa ForPhysio Clinic desde 2024.\n\nAtualmente, desempenha funções como fisioterapeuta da Unidade de Saúde Balance by ForPhysio Caldas da Rainha e na ForPhysio Caldas da Rainha (Rua do  Funchal).\n\nÉ licenciada em fisioterapia pela Escola Superior de Saúde de Leiria. O seu percurso tem estado muito ligado à fisioterapia desportiva. Atualmente, é coordenadora do departamento médico do Caldas Rugby Clube, onde exerce funções como fisioterapeuta da equipa sénior de Rugby. Acompanha também atletas da Federação Portuguesa de Lohan Kao Tempo.\n\nEspecialidade: Fisioterapia Músculo-Esquelética e Desportiva',
      service: 2,
      location: 1,
      image: 'ana-clara.png',
    },
  ];

  const getService = (id?: number): TeamService | undefined => {
    if (!id) return;
    return teamServices.find((service) => service.id === id);
  };

  const getLocation = (id?: number): TeamLocation | undefined => {
    if (!id) return;
    return teamLocations.find((location) => location.id === id);
  };

  const getTeamLocations = (): TeamLocation[] => {
    return teamLocations.filter((location) => teamMembers.some((member) => member.location === location.id));
  };

  const getTeamServices = (): TeamService[] => {
    return teamServices.filter((service) => teamMembers.some((member) => member.service === service.id));
  };

  const getDefaultLocationId = (): number => {
    const teamLocations: TeamLocation[] = getTeamLocations();
    return teamLocations?.find((location) => location.selected == true)?.id ?? 0;
  };

  const getTeamMembers = (locationId?: number, serviceId?: number): TeamMember[] => {
    let filteredTeamMembers = teamMembers;

    if (locationId) {
      filteredTeamMembers = filteredTeamMembers.filter((member) => member.location === locationId);
    }

    if (serviceId) {
      filteredTeamMembers = filteredTeamMembers.filter((member) => member.service === serviceId);
    }

    return filteredTeamMembers;
  };

  const getTeamMemberBySlug = (slug: string): TeamMember | undefined => {
    if (!slug.length) return;

    return teamMembers.find((member) => member.slug === slug);
  };

  const getServicesByLocation = (locationId: number) => {
    const teamMembers = getTeamMembers(locationId);
    const services = teamMembers.map((member) => getService(member.service));

    return Array.from(new Map(services.map((service) => [service?.id, service])).values());
  };

  return {
    getTeamMembers,
    getTeamServices,
    getService,
    getLocation,
    getTeamLocations,
    getDefaultLocationId,
    getTeamMemberBySlug,
    getServicesByLocation,
  };
};
