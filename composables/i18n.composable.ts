// DRAFT VERSION
export const useI18n = () => {
  const langs = ref([
    {
      code: 'pt',
      name: 'Português',
      selected: true,
    },
    {
      code: 'en',
      name: 'Inglês',
      selected: false,
    },
    {
      code: 'es',
      name: 'Espanhol',
      selected: false,
    },
    {
      code: 'zg-sg',
      name: 'Chinês',
      selected: false,
    },
  ]);

  const getCurrentLang = computed(() => {
    return langs.value.find((lang) => lang.selected);
  });

  const isCurrentLang = (code: string) => {
    return getCurrentLang.value?.code === code;
  };

  function changeLang(code: string) {
    // TO DO :: change language logic
    langs.value.forEach((lang) => (lang.selected = lang.code === code));
  }

  return {
    langs,
    getCurrentLang,
    isCurrentLang,
    changeLang,
  };
};
