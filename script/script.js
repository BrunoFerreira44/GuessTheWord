const arrCasa = ["casa", "porta", "janela", "parede", "teto", "chão", "quarto", "sala", "cozinha", "banheiro", "varanda", "garagem", "escada", "corredor", "armário", "cama", "sofá", "mesa", "cadeira", "geladeira", "fogão", "pia", "espelho", "toalha", "cortina", "tapete", "luminária", "abajur", "ventilador", "travesseiro", "lençol", "cobertor", "cortina", "tapete", "vassoura", "rodo", "esponja", "detergente", "sabão", "lixeira", "vassoura", "pano", "aspirador", "ferro", "tábua", "varal", "cabide", "gancho", "prateleira", "guarda-roupa", "cortina", "toalha", "sabonete", "shampoo", "escova", "pente", "despertador", "almofada", "edredom", "panela", "prato", "copo", "garfo", "faca", "colher", "vaso", "vassoura", "rodo", "balde"];

const arrComida = ["arroz", "feijão", "carne", "frango", "peixe", "ovo", "leite", "queijo", "pão", "manteiga", "açúcar", "sal", "café", "chá", "água", "suco", "refrigerante", "fruta", "banana", "maçã", "laranja", "uva", "morango", "abacaxi", "mamão", "cenoura", "batata", "tomate", "alface", "cebola", "pão de queijo", "cuscuz", "mingau", "canjica", "rapadura", "goiabada", "queijadinha", "pudim", "gelatina", "mousse", "salsicha", "mortadela", "salame", "patê", "requeijão", "coalhada", "farofa", "molho", "ketchup", "mostarda", "macarrão", "sopa", "sanduíche", "bolo", "biscoito", "chocolate", "pipoca", "mel", "presunto", "queijo", "iogurte", "sorvete", "pizza", "hambúrguer", "batata frita", "salada", "repolho", "abobrinha", "mandioca", "pimentão"];

const arrNatureza = ["sol", "lua", "estrela", "chuva", "vento", "neve", "rio", "mar", "montanha", "floresta", "árvore", "flor", "grama", "animal", "cachorro", "gato", "pássaro", "peixe", "vaca", "cavalo", "porco", "abelha", "formiga", "borboleta", "aurora", "pôr do sol", "lua cheia", "eclipse", "arco-íris", "geada", "granizo", "vendaval", "redemoinho", "tsunami", "vulcão", "oásis", "prado", "charco", "lagoa", "pântano", "rochedo", "penhasco", "gruta", "caverna", "nuvem", "tempestade", "relâmpago", "trovão", "lago", "cachoeira", "deserto", "neblina", "orvalho", "trigo", "milho", "cacto", "folha", "tronco", "raiz", "semente", "joaninha", "minhoca", "gafanhoto", "libélula"];

const arrCorpoHumano = ["cabeça", "olho", "nariz", "boca", "orelha", "cabelo", "braço", "perna", "mão", "pé", "dedo", "pele", "osso", "sangue", "coração", "barriga", "cílios", "sobrancelhas", "bigode", "barba", "covinha", "sardas", "verruga", "cicatriz", "tatuagem", "pintinha", "musculo", "tendão", "veia", "artéria", "pele", "poro", "glândula", "hormônio", "anticorpo", "vitamina", "sobrancelha", "cílio", "unha", "dente", "língua", "garganta", "ombro", "cotovelo", "joelho", "tornozelo", "bochecha", "queixo", "pescoço", "costas", "barriga", "umbigo", "cintura", "quadril", "peito", "pulmão"];

const arrRoupa = ["camisa", "calça", "vestido", "saia", "meia", "sapato", "tênis", "chinelo", "boné", "chapéu", "casaco", "luva", "cachecol", "óculos", "relógio", "biquíni", "maiô", "sungão", "pijama", "robe", "camisola", "suspensório", "cachecol", "bandana", "touca", "luvas", "máscara", "óculos de sol", "boné", "chapéu de palha", "tiara", "presilha", "elástico", "cueca", "calcinha", "sutiã", "pijama", "uniforme", "agasalho", "short", "bermuda", "blusa", "jaqueta", "meia-calça", "cinto", "bolso", "zíper", "botão", "etiqueta", "laço", "renda", "velcro", "pulseira"];

const arrObjeto = ["livro", "caneta", "lápis", "caderno", "borracha", "tesoura", "cola", "régua", "mochila", "telefone", "computador", "televisão", "rádio", "câmera", "chave", "óculos", "guarda-chuva", "escova", "pente", "ventilador", "aquecedor", "umidificador", "despertador", "cronômetro", "termômetro", "balança", "fita métrica", "tesoura", "alicate", "martelo", "chave de fenda", "parafuso", "pregos", "arame", "cola", "fita adesiva", "clipe", "grampo", "perfurador", "lanterna", "bateria", "fio", "lâmpada", "interruptor", "tomada", "faca", "garfo", "colher", "prato", "panela", "tampa", "pote", "jarra", "frigideira", "assadeira", "ralador", "descascador", "escorredor", "cafeteira"];

const arrVerbo = ["correr", "pular", "nadar", "dormir", "comer", "beber", "ler", "escrever", "cantar", "dançar", "rir", "chorar", "falar", "ouvir", "ver", "tocar", "pegar", "jogar", "gostar", "amar", "andar", "sentar", "levantar", "subir", "descer", "empurrar", "puxar", "abrir", "fechar", "girar", "esperar", "pensar", "sonhar", "respirar", "espirrar", "tossir", "bocejar", "coçar", "acariciar", "aplaudir", "cozinhar", "assar", "ferver", "fritar", "grelhar", "misturar", "bater", "descascar", "ralar", "cortar", "costurar", "tricotar", "pintar", "desenhar", "esculpir", "construir", "consertar", "varrer", "limpar", "organizar"];

const arrCor = ["azul", "verde", "amarelo", "vermelho", "preto", "branco", "cinza", "marrom", "rosa", "roxo", "laranja"];

const arrNumero = ["um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez"];

const arrFamilia = ["pai", "mãe", "filho", "filha", "irmão", "irmã", "avô", "avó", "tio", "tia", "primo", "prima", "neto", "neta", "sobrinho", "sobrinha", "madrinha", "padrinho", "cunhado", "cunhada", "genro", "nora", "afilhado", "afilhada", "enteado", "enteada", "sogro", "sogra"];

const arrProfissao = ["médico", "professor", "enfermeiro", "padeiro", "carteiro", "bombeiro", "polícia", "motorista", "vendedor", "cozinheiro", "dentista", "cabelereiro", "mecânico", "eletricista", "pintor", "pedreiro", "jardineiro", "faxineiro", "secretária", "garçom", "arquiteto", "engenheiro", "programador", "designer", "jornalista", "escritor", "ator", "cantor", "músico", "dançarino"];

const arrLugar = ["escola", "hospital", "parque", "praça", "mercado", "padaria", "farmácia", "biblioteca", "cinema", "praia", "shopping", "aeroporto", "estação", "supermercado", "lanchonete", "restaurante", "sorveteria", "pet shop", "zoologico", "aquario", "livraria", "floricultura", "loja", "sacolão", "feira", "peixaria", "açougue", "padaria", "doceira", "cafeteria", "estádio", "estacionamento", "Avenida Paulista", "Parque Ibirapuera", "Cristo Redentor", "Torre Eiffel", "Burj Khalifa", "São Paulo", "Campos do Jordão", "Ilha Bela", "Museu do Louvre", "Central Park", "Parque da Disney", "Brasil", "Argentina", "Chile", "Estados Unidos", "Portugal", "Espanha", "França", "Alemanha", "Inglaterra", "Russia", "Japão", "Rio de Janeiro", "Parana", "Bahia", "Buenos Aires", "Lisboa", "Madrid", "Paris", "Berlim", "Londres", "Tokio"];

const arrBrincadeira = ["bola", "boneca", "carrinho", "pipas", "queimada", "lego", "dado", "dominó", "quebra-cabeça", "pião", "peteca", "elástico", "amarelinha", "esconde-esconde", "pega-pega", "mímica", "telefone sem fio"];

const arrTransporte = ["bicicleta", "carro", "ônibus", "trem", "avião", "barco", "moto", "caminhão", "trator", "táxi", "metrô", "barca", "helicóptero", "foguete", "submarino", "charrete", "carroça", "triciclo", "skate", "nave espacial", "balsa", "cruzeiro", "navio", "elevador", "uber"];

const arrSentimento = ["alegria", "tristeza", "raiva", "medo", "amor", "ódio", "ciúme", "paixão", "calma", "ansiedade", "gratidão", "esperança", "solidão", "frustração", "tédio", "ânimo", "orgulho", "vergonha", "surpresa", "confusão"];

const arrData = ["manhã", "tarde", "noite", "madrugada", "segunda", "terça", "quarta", "quinta", "sexta", "sábado", "domingo", "primavera", "verão", "outono", "inverno", "aniversário", "feriado", "fim de semana", "natal", "páscoa", "carnaval"];

const arrWords = [...new Set([...arrCasa, ...arrComida, ...arrNatureza, ...arrCorpoHumano, ...arrRoupa, ...arrObjeto, ...arrVerbo, ...arrCor, ...arrNumero, ...arrFamilia, ...arrProfissao, ...arrLugar, ...arrBrincadeira, ...arrTransporte, ...arrSentimento, ...arrData])];

const randomArrWords = embaralharArray(arrWords);

const h1 = document.querySelector(".words-changing");
const main = document.querySelector(".screen-game");

h1.innerText = randomArrWords[Math.floor(Math.random() * randomArrWords.length)];

main.addEventListener('click', () => {

   let index = Math.floor(Math.random() * randomArrWords.length);
   h1.innerText = randomArrWords[index];
   console.log("index: " + index);
});


function embaralharArray(array) {
   for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // Escolhe um índice aleatório entre 0 e i
      [array[i], array[j]] = [array[j], array[i]]; // Troca os elementos
   }
   return array;
}