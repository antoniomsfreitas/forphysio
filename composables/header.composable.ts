export const useHeader = () => {
  const headerMenu = {
    mainMenu: [
      {
        name: 'Sobre',
        link: '/sobre-nos',
        submenu: [],
      },
      {
        name: 'Equipa',
        link: '/equipa',
        submenu: [],
      },
      {
        name: 'Serviços',
        link: '/servicos',
        submenu: [
          { name: 'Ver todos', link: '/', viewAll: true },
          { name: 'Fisioterapia músculo esquelética', link: '/' },
          { name: 'Fisioterapia no desporto', link: '/blog' },
          { name: 'Fisioterapia aquática e hidroterapia', link: '/' },
          { name: 'Fisioterapia no envelhecimento', link: '/' },
          { name: 'Fisioterapia online', link: '/' },
          { name: 'Fisioterapia na saúde da mulher', link: '/' },
          { name: 'Pilates clínico', link: '/' },
          { name: 'Nutrição', link: '/' },
          { name: 'Saúde e bem-estar', link: '/' },
          { name: 'Consultas médicas', link: '/' },
        ],
      },
      {
        name: 'Acordos',
        link: '/acordos',
        submenu: [],
      },
      {
        name: 'Blog',
        link: '/blog',
        submenu: [],
      },
      {
        name: 'Contactos',
        link: '/contactos',
        submenu: [],
      },
    ],
    searchOption: {
      name: 'Pesquisa',
      link: '/pesquisa',
    },
    buttonOption: {
      name: 'Marcar consulta',
      link: '/contactos',
    },
  };

  const mainMenu = computed(() => headerMenu?.mainMenu);

  const searchOption = computed(() => headerMenu?.searchOption);

  const buttonOption = computed(() => headerMenu?.buttonOption);

  return {
    mainMenu,
    searchOption,
    buttonOption,
  };
};
