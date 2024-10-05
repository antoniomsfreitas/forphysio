import type { CustomersReviewsBlock } from '~/models/blocks/customers-reviews-block.model';
import { getFormattedDataByLocale } from '~/utils/api.util';

export const data = [
  {
    id: 1,
    stars: 5,
    author: 'Adriano\nSilva',
    image: '/images/homepage/customers-reviews-block/adriano-silva.png',
    alt: {
      translations: {
        pt: 'Um senhor a sorrir vestido com uma camisola de desporto azul',
        en: 'A gentleman smiling, wearing a blue sports jersey',
        es: 'Un señor sonriendo, vestido con una camiseta deportiva azul',
        'zh-sg': '一位穿著藍色運動衫微笑的先生',
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
    image: '/images/homepage/customers-reviews-block/marco-leal.png',
    alt: {
      translations: {
        pt: 'Um jovem a sorrir vestido com uma camisola casual amarela',
        en: 'A young man smiling, wearing a casual yellow shirt',
        es: 'Un joven sonriendo, vestido con una camiseta casual amarilla',
        'zh-sg': '一位穿著黃色休閒上衣微笑的年輕人',
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
    image: '/images/homepage/customers-reviews-block/emanual-figueiredo.png',
    alt: {
      translations: {
        pt: 'Um senhor vestido com um casaco desportivo azul marinho',
        en: 'A gentleman wearing a navy blue sports jacket',
        es: 'Un señor vestido con una chaqueta deportiva azul marino',
        'zh-sg': '一位穿著海軍藍運動外套的先生',
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
    image: '/images/homepage/customers-reviews-block/david-hawthorn.png',
    alt: {
      translations: {
        pt: 'Um senhor vestido com uma camisa cor de rosa aos quadrados',
        en: 'A gentleman wearing a pink checkered shirt',
        es: 'Un señor vestido con una camisa rosa a cuadros',
        'zh-sg': '一位穿著粉紅色格子襯衫的先生',
      },
    },
    review: {
      translations: {
        pt: 'Há alguns anos, fui diagnosticado com artrite no pescoço, o que me causou dor, desconforto e imobilidade!\nVários tratamentos, incluindo fisioterapia e quiropraxia, deixaram-me com os sintomas iguais ou ainda piores, sem falar no custo associado.\nA Ana da Balance é uma excelente fisioterapeuta que desbloqueou os músculos do meu pescoço, revertendo anos de dores acumuladas.\nA diferença é tão perceptível - e depois de anos resignado à dor, agora estou muito melhor e estou muito feliz por me ter encaminhado para a fisioterapia com a Balance Gym.\nUm ótimo serviço e um excelente custo-benefício.',
        en: 'Years ago now, I was diagnosed with arthritis in my neck, which caused me pain, discomfort, and immobility!\nVarious treatments including physios and chiropractors left my symptoms the same or worse, not to mention the expense.\nAna at Balance is an excellent physiotherapist who has unlocked my arthritic neck muscles, and years of damage have begun to heal.\nThe difference is so noticeable - and after years of being resigned to the pain, I am now much improved and am delighted I self-referred myself for physiotherapy with Balance Gym.\nA great service and good value for money too.',
        es: 'Hace algunos años, me diagnosticaron artritis en el cuello, lo que me causó dolor, incomodidad e inmovilidad.\nVarios tratamientos, incluidos fisioterapeutas y quiroprácticos, dejaron mis síntomas iguales o peores, por no hablar del costo.\nAna en Balance es una excelente fisioterapeuta que ha desbloqueado los músculos artríticos de mi cuello y años de daño han comenzado a sanar.\nLa diferencia es tan notable, y después de años de estar resignado al dolor, ahora estoy mucho mejor y estoy encantado de haberme referido a mí mismo para fisioterapia en Balance Gym.\nUn gran servicio y buena relación calidad-precio también.',
        'zh-sg':
          '幾年前, 我被診斷出頸部關節炎, 這讓我感到疼痛、不適和行動不便！\n包括物理治療師和脊椎按摩師在內的各種治療, 讓我的症狀沒有改善甚至更糟, 更不用說費用了。\nBalance 的 Ana 是一位出色的物理治療師, 她打開了我因關節炎僵硬的頸部肌肉, 並且多年來的損傷開始愈合。\n這種改善非常明顯——經過多年的痛苦折磨, 我現在感覺好多了, 並且很高興我自己轉介到 Balance Gym 進行物理治療。\n這是一項很棒的服務, 性價比也很高。',
      },
    },
  },
];

export default defineEventHandler((event): CustomersReviewsBlock[] => {
  const { locale } = getQuery(event);

  return getFormattedDataByLocale(data, locale as string);
});
