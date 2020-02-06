const img1 = 'http://acaopopular.net/jornal/wp-content/uploads/2018/01/recife-antigo8.jpg'
const img2 = 'https://turismo.ibossa.com.br/wp-content/uploads/2013/10/Largo-da-Alfandega.jpg'
const img3 = 'https://2.bp.blogspot.com/-TMTuedPggLM/UuOwDnyjjxI/AAAAAAAAAdY/l1ZQHvs_2Hw/s1600/Alfandega+1906.jpg'
const img4 = 'https://photos.wikimapia.org/p/00/00/65/59/88_big.jpg'
export default {
  id: '01',
  name: 'A Alfandega',
  coords: {
    lat: -8.064723,
    lng: -34.873905
  },
  discovered_count: 0,
  type: 'local',
  cover: img1,
  chapters: [
    {
      text: `Em 1723 inaugurava-se no prédio o Convento dos Oratorianos da Ordem de São Felipe. Ao lado fica a Igreja da Madre de Deus, ligada ao convento até a desativação do mesmo.
      Em 1826, o prédio passou a servir como alfândega, causando uma movimentação intensa de pessoas. Por causa disso, a ligação entre o prédio e a igreja foi desfeita, dando lugar a uma rua.`,
      img: img1,
      title: 'De convento a alfandega'
    }, {
      title: '',
      img: img2,
      text: `Essa muvuca de pessoas e embarcações fez com que toda a frente do prédio fosse repleta de pequenos comércios, que avançavam até mesmo alguns metros pelas águas do Capibaribe.
      As atividades do porto foram transferidas para o lado oposto do bairro alguns anos depois, fazendo com que o edifício da alfândega não fosse mais necessário.`
    },
    {
      text: `• convento, 1732 - A fachada com contornos retilíneos, sóbrios, quase que com um aspecto de fortaleza ainda guarda vários traços da construção original.\n\n
      • A movimentação da alfândega, 1826 - fim dos corredores e passagens que ligavam o prédio à Igreja Madre de Deus e a abertura de uma rua para suportar o fluxo do local.\n\n`,
      img: img3,
      title: 'Porto do Recife ao longo do tempo'
    },
    {
      text: `• A sede da Santa Casa da Misericórdia - após a transferência das atividades do porto para o lado oposto do bairro.\n
      • O incêndio, 1920 - transformado em armazém após a recuperação. Os rastros do armazém sobrevivem nas marcações das portas do prédio.\n\n
      • O Shopping, fim do século XX e início do século XXI - adaptações nas paredes e janelas para passarelas, refrigeração do ar e outros ambientes próprios de shopping.\n`,
      title: '',
      img: img3,
    }, {
      text: `Atualmente, no Shopping Passo Alfandega, Paineis armoriais baseados na obra de Ariano Suassuna e executados por Guilherme da Fonte.
       São vistos nas entradas do prédio e na Praça Central. As obras representadas são A Pedra do Reino (Ariano Suassuna, 1971); A Rainha do Meio Dia (Guilherme da Fonte, 2003);
        O Auto da Compadecida (Ariano Suassuna, 1955) e Uma Mulher Vestida de Sol (Ariano Suassuna, 1947).`,
      img: img4,
      title: 'Alfandega Armorial'
    }, {
      text: '',
      img: null,
      title: ''
    }
  ]
}
