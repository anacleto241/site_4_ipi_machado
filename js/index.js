import * as  prismic from 'https://cdn.skypack.dev/@prismicio/client';
const repositoryName = 'quarta-ipi';
const client = prismic.createClient(repositoryName);

// CARD DE AVISOS 1
const init = async () => {
    const prismicDoc = await client.getFirst()
    const {titlecard1, dateevent1,descriptioncard1,
           titlecard2, dateevent2, descriptioncard2,
           nextevent1, descevent1 
            } = prismicDoc.data;
            
    console.log('Dados do Prismic para Avisos:', prismicDoc.data);
    
    const titlecard1HTML = prismic.asHTML(titlecard1);
    const dateEvent1HTML = prismic.asHTML(dateevent1);
    const descriptioncard1HTML = prismic.asHTML(descriptioncard1);

    const tituloCard1DOM = document.getElementById('news-title-1');
    const dataEvent1DOM = document.getElementById('news-date-1');
    const descriptioncard1DOM = document.getElementById('description-card-1');

    tituloCard1DOM.innerHTML = titlecard1HTML;
    dataEvent1DOM.innerHTML = dateEvent1HTML;
    descriptioncard1DOM.innerHTML = descriptioncard1HTML;

    //CARD DE AVISOS 2
    const titlecard2HTML = prismic.asHTML(titlecard2);
    const dataEvent2HTML = prismic.asHTML(dateevent2);
    const descriptioncard2HTML = prismic.asHTML(descriptioncard2);

    const tituloCard2DOM = document.getElementById('news-title-2');
    const dataEvent2DOM = document.getElementById('news-date-2');
    const descriptioncard2DOM = document.getElementById('description-card-2');    

    tituloCard2DOM.innerHTML = titlecard2HTML;
    dataEvent2DOM.innerHTML = dataEvent2HTML;
    descriptioncard2DOM.innerHTML = descriptioncard2HTML;

    //CARD DE PROXIMOS EVENTOS
    const nextevent1HTML = prismic.asHTML(nextevent1);
    const descevent1HTML = prismic.asHTML(descevent1);

    const nextevent1DOM = document.getElementById('time-event-card-1');
    const descevent1DOM = document.getElementById('event-card-desc-1');

    nextevent1DOM.innerHTML = nextevent1HTML;
    descevent1DOM.innerHTML = descevent1HTML;

};

init();