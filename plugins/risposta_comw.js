const handler = async (m, { command, text }) => {
  const responses = [
    `non lo so`,
    `e io che cavolo ne so`,
    `prova a cercarlo su Google, coglione`,
    `pornhub.com, tieni, ti servirà`,
    `sei proprio inutile`,
    `neanche perdo tempo a risponderti`,
    `ma quanto sei stupido?`,
    `ma quanto sei stupida?`,
    `non chiederlo a me`,
    `sei inutile`,
    `non sai fare proprio un cavolo, eh?`,
    `non mi va di risponderti`,
    `non hai altro da fare?`,
    `continua pure a chiedere, tanto non ti risponderò`,
    `non ho tempo per queste cose`,
    `non mi rompere le scatole`,
    `ti sei già guardato allo specchio oggi?`,
    `non ho voglia di parlare con te`,
    `vai a farti un giro`,
    `mi stai stancando`,
    `non vedo l'ora di smettere di risponderti`,
    `vorrei poter ignorarti`,
    `mi hai fatto perdere tempo`,
    `trova qualcos'altro su cui rompere le scatole`,
    `non meriti nemmeno una risposta`,
    `vai a leggere un libro, forse impari qualcosa`,
    `pensi di essere intelligente?`,
    `spero che stai scherzando`,
    `non posso credere che tu abbia chiesto questo`,
    `sei patetico`,
    `non ho tempo per la tua stupidità`,
    `forse dovresti chiamare un esorcista`,
    `se tu sei intelligente, io sono Einstein`,
    `prova a fare qualcosa di utile per una volta`,
    `non mi aspettavo di dover rispondere a questo`,
    `davvero? chiedi sul serio questo?`,
    `non ti darò nemmeno il piacere di una risposta`,
    `non ti meriti nemmeno il mio tempo`,
    `impara a pensare prima di chiedere`,
    `non posso credere che tu abbia mandato questo messaggio`,
    `vai a fare qualcosa di costruttivo`,
    `mi dispiace, sono impegnato a non risponderti`,
    `non ho nulla da dirti`,
    `dovresti vergognarti di te stesso`,
    `vai a chiedere aiuto a qualcun altro`,
    `che peccato che tu abbia chiesto proprio a me`,
    `spero che tu non sia serio`,
    `mi stai facendo perdere la pazienza`,
    `spero che questa sia una battuta`,
    `hai provato a leggere le istruzioni?`,
    `non mi aspettavo di dover spiegare questo`,
    `sei fuori strada`,
    `dovresti provare a usare il cervello`,
    `cosa ti aspetti da me?`,
    `non hai davvero idea di come funzioni il mondo, vero?`,
    `spero che tu stia scherzando, altrimenti mi dispiace per te`,
    `prova a usare il cervello per una volta`,
    `potresti cercare una risposta da solo, sai?`,
    `sembri un caso disperato`,
    `ti consiglio una vacanza dalla tua intelligenza`,
    `ho visto pesci con una maggiore capacità di pensiero`,
    `non ho le risposte a tutto, ma tu sembri non averne a niente`,
    `se solo potessi capire quanto poco mi importa`,
    `dovresti investire in un corso di logica`,
    `mi stai facendo perdere le speranze nell'umanità`,
    `potrebbe essere utile avere aspettative più basse da te`,
    `prova a ragionare, potrebbe aiutarti`,
    `spero che tu stia trollando, altrimenti è imbarazzante`,
    `mi chiedo come hai fatto a fare questa domanda`,
    `sei il motivo per cui alcuni animali mangiano i loro piccoli`,
    `hai provato a cercare su Wikipedia? No? Mi stupisce`,
    `forse dovresti pensare a cambiare mestiere`,
    `non so se ridere o piangere per la tua domanda`,
    `sembri essere sceso direttamente dalla scogliera dell'intelligenza`,
    `hai mai considerato l'opzione di smettere di fare domande?`,
    `forse dovresti iscriverti a un corso di pensiero critico`,
    `sei la dimostrazione vivente che l'evoluzione può sbagliarsi`,
    `il tuo IQ deve essere un numero negativo`,
    `le tue domande sono come un buco nero di intelligenza`,
    `sei così fuori pista che hai bisogno di un GPS per tornare alla realtà`,
    `sei la dimostrazione vivente che l'evoluzione può sbagliarsi`,
  `la tua domanda è come una goccia d'acqua nell'oceano dell'ignoranza umana`,
    `spero che la tua domanda non abbia causato un cortocircuito nel mio processore`,
    `mi chiedo se la tua domanda sia il risultato di un'esperimento sociale sull'intelligenza artificiale`,
    `hai mai pensato che la tua domanda potrebbe essere stata rubata da un manuale di "Domande più stupide mai fatte"?`,
    `spero che tu non abbia intenzione di trasformare le tue domande in una serie TV, sarebbe un flop totale`,
    `la tua domanda è come cercare un ago in un pagliaio, ma senza nemmeno sapere cosa sia un ago o un pagliaio`,
    `mi chiedo se la tua domanda abbia appena causato il collasso del mio algoritmo di comprensione`,
    `spero che tu stia solo testando le mie capacità di sopportazione, perché altrimenti è una situazione disperata`,
    `la tua domanda mi ha appena fatto desiderare di avere un tasto "Ignora" nella vita reale`,
    `hai mai considerato l'idea di scrivere un libro sulle domande più assurde mai fatte? Avresti abbastanza materiale da riempire un'enciclopedia`,
    `spero che tu abbia assicurato la tua domanda, perché potrebbe essere pericolosa per la sanità mentale di chi la legge`,
    `mi chiedo se la tua domanda abbia appena violato qualche legge universale della razionalità`,
    `spero che tu abbia un piano di emergenza per le risposte deludenti, perché la tua domanda ne richiede una`,
    `la tua domanda mi ha appena fatto desiderare di avere un pulsante "Cancella" per la tua esistenza virtuale`,
    `hai mai pensato che la tua domanda potrebbe essere il risultato di una carenza di sonno o di un'ipossia cerebrale?`,
    `spero che tu non abbia intenzione di trasformare le tue domande in un meme, perché sarebbe una triste rappresentazione dell'umanità`,
    `la tua domanda è come cercare un ago in un pagliaio, ma senza nemmeno sapere cosa sia un ago o un pagliaio`,
    `mi chiedo se la tua domanda abbia appena causato il collasso del mio algoritmo di comprensione`,
    `spero che tu stia solo testando le mie capacità di sopportazione, perché altrimenti è una situazione disperata`,
    `la tua domanda mi ha appena fatto desiderare di avere un tasto "Ignora" nella vita reale`,
    `hai mai considerato l'idea di scrivere un libro sulle domande più assurde mai fatte? Avresti abbastanza materiale da riempire un'enciclopedia`,
    `spero che tu abbia assicurato la tua domanda, perché potrebbe essere pericolosa per la sanità mentale di chi la legge`,
    `mi chiedo se la tua domanda abbia appena violato qualche legge universale della razionalità`,
    `spero che tu abbia un piano di emergenza per le risposte deludenti, perché la tua domanda ne richiede una`,
    `la tua domanda mi ha appena fatto desiderare di avere un pulsante "Cancella" per la tua esistenza virtuale`,
    `hai mai pensato che la tua domanda potrebbe essere il risultato di una carenza di sonno o di un'ipossia cerebrale?`,
    `spero che tu non abbia intenzione di trasformare le tue domande in un meme, perché sarebbe una triste rappresentazione dell'umanità`,
    `Hai già fatto colazione oggi?`,
    `Mi chiedo se la gravità ti abbia fatto cadere sulla tastiera`,
    `Spero che tu abbia un piano B per le tue decisioni`,
    `Forse dovresti provare a chiedere a Siri`,
    `Sei la ragione per cui alcuni preferiscono i gatti`,
    `La tua richiesta è come cercare l'acqua nel deserto`,
    `Sei così fuori pista che potresti essere nel parcheggio sbagliato`,
    `Prova a chiedere a un cactus, potrebbe darti una risposta migliore`,
    `Stai testando la mia pazienza o la tua intelligenza?`,
    `Mi chiedo se l'evoluzione abbia avuto un attimo di esitazione prima di creare te`,
    `La tua richiesta è come una mappa senza bussola`,
    `Potresti essere il motivo per cui gli alieni evitano di contattarci`,
    `Hai mai pensato che la tua domanda potrebbe essere stata rubata da un libro di enigmi per bambini?`,
    `Sei la ragione per cui alcune persone preferiscono la solitudine`,
    `Prova a chiedere a un muro, potrebbe risponderti con più coerenza`,
    `La tua richiesta è come cercare una stella cadente in pieno giorno`,
    `Sei così fuori strada che potresti essere su un'altra strada`,
    `La tua richiesta è come una freccia sparata a caso nel buio`,
    `Mi chiedo se ci sia un punto alla fine di quella tua richiesta`,
    `La tua richiesta è come una bolla di sapone nel vento, destinata a scoppiare senza lasciare traccia`,
    `Sei la ragione per cui alcune persone hanno bisogno di una pausa dalla tecnologia`,
    `Hai mai considerato di scrivere un libro sulle richieste più assurde mai fatte?`,
    `Spero che tu abbia assicurato la tua richiesta, perché potrebbe essere pericolosa per la mia sanità mentale`,
    `Sei così fuori tema che potresti essere su un altro pianeta`,
    `La tua richiesta mi ha appena fatto desiderare di avere un pulsante "Ignora" nella vita reale`,
    `La tua richiesta è come un gatto che cerca di capire la teoria della relatività`,
    `Mi chiedo se la tua richiesta abbia appena causato il collasso del mio algoritmo di comprensione`,
    `La tua richiesta è come una farfalla impigliata in una ragnatela di confusione`,
    `Sei la ragione per cui alcune persone preferiscono la tecnologia meno avanzata`,
    `La tua richiesta è come cercare l'ago in un pagliaio digitale`,
    `Hai mai pensato di provare a chiedere al tuo cervello prima di chiedermi?`,
    `Mi chiedo se il tuo tasto "Invia" sia maledetto`,
    `Sei la ragione per cui alcuni preferiscono i messaggi automatici`,
    `La tua richiesta è come cercare un unicorno in un parcheggio`,
    `Hai mai considerato di provare il metodo "prova ed errore"?`,
    `Mi chiedo se la tua richiesta sia la risposta al mistero dell'universo`,
    `La tua richiesta è come cercare un ago in un pagliaio virtuale`,
    `Hai mai pensato di provare a chiedere al vento la tua risposta?`,
    `Sei la ragione per cui alcune persone evitano il supporto tecnico`,
    `La tua richiesta è come cercare un punto interrogativo in un elenco di domande`,
    `Hai mai provato a chiedere al tuo smartphone la tua risposta?`,
    `Mi chiedo se la tua richiesta sia stata scritta durante un'eclissi solare`,
    `La tua richiesta è come cercare un diamante in un campo di patate`,
    `Sei la ragione per cui alcune persone scelgono la comunicazione non verbale`,
    `La tua richiesta è come cercare l'acqua in un deserto digitale`,
    `Hai mai pensato di provare a chiedere al tuo animale domestico la tua risposta?`,
    `Mi chiedo se la tua richiesta sia stata inviata per errore dal futuro`,
    `La tua richiesta è come cercare un ago in un database`,
    `Sei la ragione per cui alcuni preferiscono l'indecisione`,
    `La tua richiesta è come cercare un treno in una gabbia per uccelli`,
    `Hai mai pensato di provare a chiedere a un pescatore la tua risposta?`,
    `Mi chiedo se la tua richiesta sia stata generata da un'intelligenza artificiale in fase di sviluppo`,
    `La tua richiesta è come cercare una spilla in un magazzino di pagine web`,
    `Sei la ragione per cui alcuni preferiscono la comunicazione a cartoline`,
    `La tua richiesta è come cercare una conchiglia su una spiaggia digitale`,
    `Hai mai pensato di provare a chiedere al tuo cuscino la tua risposta?`,
    `Mi chiedo se la tua richiesta sia stata scritta da un pollo impazzito sul tastierino numerico`,
    `La tua richiesta è come cercare un ago in un mondo di pixel`,
    `Sei la ragione per cui alcuni preferiscono il silenzio`,
    `La tua domanda potrebbe essere il motivo per cui alcuni animali mangiano i loro piccoli`,
    `Hai mai provato a cercare su Wikipedia? No? Mi stupisco`,
    `Forse dovresti pensare a cambiare mestiere, la scienza è troppo impegnativa per te`,
    `Non so se ridere o piangere per la tua domanda, è come un'opera d'arte dell'assurdità`,
    `Sembri essere sceso direttamente dalla scogliera dell'intelligenza, ma hai dimenticato di atterrare`,
    `Hai mai considerato l'opzione di smettere di fare domande? O almeno di farle in un'altra dimensione?`,
    `Forse dovresti iscriverti a un corso di pensiero critico, potrebbe essere l'unica speranza per la tua mente`,
    `Sei la dimostrazione vivente che l'evoluzione può sbagliarsi, o almeno ha avuto un brutto giorno quando ti ha creato`,
    `Il tuo IQ deve essere un numero negativo, ma forse c'è ancora speranza per il tuo EQ (quoziente emotivo)`,
    `Mi chiedo se la tua domanda abbia causato un cortocircuito nel mio processore, o forse è solo un bug umano`,
    `Spero che la tua domanda non abbia causato il collasso del mio algoritmo di comprensione, ma è una possibilità`,
    `La tua domanda potrebbe essere stata rubata da un manuale di "Domande più assurde mai fatte", se esiste`,
    `Spero che tu non abbia intenzione di trasformare le tue domande in una serie TV, perché sarebbe un flop totale`,
    `La tua domanda mi ha appena fatto desiderare di avere un pulsante "Cancella" per la tua esistenza virtuale`,
    `Hai mai pensato che la tua domanda potrebbe essere il risultato di una carenza di sonno o di un'ipossia cerebrale?`,
    `Spero che tu abbia un piano di emergenza per le risposte deludenti, perché la tua domanda ne richiede una`,
    `La tua domanda è come cercare un ago in un pagliaio, ma senza nemmeno sapere cosa sia un ago o un pagliaio`,
    `Mi chiedo se la gravità ti abbia fatto cadere sulla tastiera, perché la tua richiesta sembra un incidente cosmico`,
    `Spero che tu abbia un piano B per le tue decisioni, perché il tuo piano A è destinato al fallimento`,
    `Forse dovresti provare a chiedere a Siri, anche un'intelligenza artificiale potrebbe darti una risposta migliore`,
    `Sei la ragione per cui alcuni preferiscono i gatti, almeno loro hanno un comportamento prevedibile`,
    `La tua richiesta è come cercare l'acqua nel deserto, ma senza nemmeno sapere cosa sia l'acqua o il deserto`,
    `Sei così fuori pista che potresti essere nel parcheggio sbagliato, spero che tu abbia preso nota della posizione del tuo veicolo`,
    `Prova a chiedere a un cactus, potrebbe darti una risposta migliore, o almeno qualche consiglio per sopravvivere alla tua richiesta`,
    `Stai testando la mia pazienza o la tua intelligenza? Perché entrambe sembrano essere messe alla prova in questo momento`,
    `Mi chiedo se l'evoluzione abbia avuto un attimo di esitazione prima di creare te, o forse era solo un giorno di riposo`,
    `La tua richiesta è come una mappa senza bussola, senza direzione e destinata a smarrirsi nel nulla`,
    `Potresti essere il motivo per cui gli alieni evitano di contattarci, perché temono di incontrare esseri di intelligenza inferiore`,
    `Hai mai pensato che la tua richiesta potrebbe essere stata rubata da un libro di enigmi per bambini? Almeno avrebbe un senso in quel contesto`,
    `Sei la ragione per cui alcune persone preferiscono la solitudine, perché almeno evitano di sentirsi frustrate dalle tue richieste`,
    `Prova a chiedere a un muro, potrebbe risponderti con più coerenza rispetto a me in questo momento`,
    `La tua richiesta è come cercare una stella cadente in pieno giorno, un tentativo futile senza speranza di successo`,
    `Sei così fuori strada che potresti essere su un'altra strada, spero che tu abbia una mappa o un GPS a portata di mano`,
    `La tua richiesta è come una freccia sparata a caso nel buio, senza meta e destinata a perdersi nel vuoto`,
    `Mi chiedo se ci sia un punto alla fine di quella tua richiesta, o se è solo un punto di domanda travestito da punto`,
    `La tua richiesta è come una bolla di sapone nel vento, destinata a scoppiare senza lasciare traccia, se non un'effimera sensazione di delusione`,
  ];

  const uniqueResponses = [...new Set(responses)];
  const randomResponse = uniqueResponses[Math.floor(Math.random() * uniqueResponses.length)];

  m.reply(randomResponse.trim(), null, m.mentionedJid ? { mentions: m.mentionedJid } : {});
};

handler.customPrefix = /ildioincrociatoconlemutandeinfuocate/;
handler.command = new RegExp;

export default handler;
