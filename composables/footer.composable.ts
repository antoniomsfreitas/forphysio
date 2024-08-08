export const useFooter = () => {
  const footerMenu = {
    mainMenu: {
      left: [
        {
          name: 'Serviços',
          link: '/servicoes',
        },
        {
          name: 'Sobre nós',
          link: '/sobre-nos',
        },
        {
          name: 'Equipa',
          link: '/equipa',
        },
        {
          name: 'Acordos',
          link: '/acordos',
        },
        {
          name: 'Blog',
          link: '/blog',
        },
      ],
      right: [
        {
          name: 'Contactos',
          link: '/contactos',
        },
        {
          name: 'Unidades',
          link: '/unidades',
        },
        {
          name: 'Política de cancelamento',
          link: '/politica-cancelamento',
        },
        {
          name: 'Política de privacidade',
          link: '/politica-privacidade',
        },
        {
          name: "FAQ's",
          link: '/faqs',
        },
      ],
    },
    socialMenu: [
      {
        name: 'Facebook',
        link: 'https://www.facebook.com/forphysio',
        icon: 'facebook',
      },
      {
        name: 'Instagram',
        link: 'https://www.instagram.com/forphysio/',
        icon: 'instagram',
      },
      {
        name: 'Whatsapp',
        link: 'https://wa.me/+351917730222',
        icon: 'whatsapp',
      },
      {
        name: 'Youtube',
        link: 'https://www.youtube.com/@forphysio6999',
        icon: 'youtube',
      },
    ],
    logosMenu: [
      {
        name: 'Livro de Reclamações',
        link: 'https://www.livroreclamacoes.pt/Inicio/',
        image: 'livro_reclamacoes.svg',
      },
      {
        name: 'Livro de elogios',
        link: 'https://livrodeelogios.com/',
        image: 'livro_elogios.svg',
      },
    ],
  };

  const mainMenu = computed(() => footerMenu?.mainMenu);

  const socialMenu = computed(() => footerMenu?.socialMenu);

  const logosMenu = computed(() => footerMenu?.logosMenu);

  return {
    mainMenu,
    socialMenu,
    logosMenu,
  };
};
