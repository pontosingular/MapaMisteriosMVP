const img1 = 'http://1.bp.blogspot.com/-7LGS48v_5hw/UtPqZOQiqYI/AAAAAAAAAJU/LLS9bfSfkJ8/s320/Ponte+do+Recife.png'
const img2 = 'https://peregrinacultural.files.wordpress.com/2013/05/tereza-costa-rego-boi-voador.jpg?w=584&h=214'
const img3 = 'https://cbtij.org.br/wp-content/uploads/2017/10/cbtij-acervo-tonio-carvalho-a-brincadeira-do-boi-voador-prog-m-folclore-ed-carneiro-1987.jpg'
const img4 = 'http://4.bp.blogspot.com/-zPhF8vn6oM4/UtWziAbVwHI/AAAAAAAAAKk/wK5hkA5_HmM/s400/Arcos+do+Recife.jpg'

export default {
  id: '03',
  name: 'Ponte Maurício de Nassau',
  coords: {
    lat: -8.063917,
    lng: -34.875311
  },
  discovered_count: 0,
  type: 'local',
  cover: 'http://4.bp.blogspot.com/-zPhF8vn6oM4/UtWziAbVwHI/AAAAAAAAAKk/wK5hkA5_HmM/s400/Arcos+do+Recife.jpg',
  chapters: [
    {
      text: `No início o Recife era uma vila, um povoado de mareantes e alguns pescadores que viviam em torno do Porto dos Navios. Com a dominação holandesa, e a expansão da cidade em rumo da ilha Antônio Vaz (Atual bairro de Santo Antônio), o então governante holandes Maurissio de Nassau empreendeu a construção de uma ponte em 1641, que foi a primeira ponte de grande porte da America Latina. Só em 1644, no dia 28 de fevereiro, num dia de domingo, foi possível passar do Recife à cidade Maurícia “a pé enxuto”. Foi dada por inaugurada a ponte, sob o nome de Ponte do Recife, tendo quase o dobro do comprimento de hoje.`,
      img: img1,
      title: 'A Ponte Holandesa'
    }, {
      text: `Havia no Recife um homem chamado Melchior, que possuía um boi mansinho, boi de coleira, amarelo. O boi era extremamente popular na cidade e sempre quando Melchior ia a um armazém, o boi aguardava a volta do dono, na porta. Todos adoravam o boi, que era bastante popular entre crianças e adultos.
      Nessa época, Maurício de Nassau não estava conseguindo financiar a ponte, mesmo investindo pesado do próprio bolso. Ele precisava de algo que "vendesse" a sua ideia.`,
      img: img2,
      title:'O Boi voador',
    }, {
      text: `Resolveu então dar uma grande festa na ponte, aberta a todos (mas cobrando o preço do pedágio). E anunciou que na festa o famoso boi amarelo de Melchior iria voar! Passar de um lado ao outro da ponte, e todos poderiam ver pagando apenas o pedágio de ida e volta. A cidade se alvoroçou! E boa voa? Não voa?
      Pois não é que Maurício de Nassau conseguiu fazer o boi voar?`,
      title: '',
      img: ''
    }, {
      text: `No dia da inauguração, a cidade se reuniu em peso para ver o boi de Melchior voar. Eis o truque usado por Nassau, muito interessante para a época: fez um boi de palha e couro pintado de amarelo e o suspendeu por um sistema de roldanas e cordas atravessando de um arco a outro da ponte. Na hora marcada, o boi voou, sob os olhares assombrados de toda a Recife! Eita Nassau danado! Com o lucro, ele conseguiu terminar o que faltava da ponte e ainda repor algum dinheiro ao caixa administrativo.`,
      title: '',
      img: img3
    }, {
      text: `Com a retomada dos portugueses ao poder, foram demolidas as portas de pedra que guardavam as pontes que foram reconstruídas pelos portugueses, em estilo Barroco. Os arcos da Conceição e de Santo Antônio foram marcos locais da  cidade do Recife até as suas demolições no início do Sec. XX. Sob os arcos existia um ativo comércio e festividades que reuniam toda cidade, sendo ícones da cidade do Recife até os tempos modernos.`,
      img: img4,
      title: 'Arcos, portais e festas.'
    }, {
      text: '',
      img: '',
      title: '',
    }
  ]
}
