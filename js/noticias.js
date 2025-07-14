import * as prismic from 'https://cdn.skypack.dev/@prismicio/client';
const repositoryName = 'quarta-ipi';
const client = prismic.createClient(repositoryName);

// SCRIPT PARA PÁGINA DE NOTÍCIAS
const initNoticias = async () => {
    try {
        const prismicResponse = await client.getByType('noticies');
        console.log('Resposta completa:', prismicResponse);
        
        // getByType retorna um array de documentos nos results
        if (prismicResponse.results && prismicResponse.results.length > 0) {
            const prismicDoc = prismicResponse.results[0]; // Pega o primeiro documento
            console.log('Documento selecionado:', prismicDoc);
            console.log('Dados do documento:', prismicDoc.data);
            
            // Mapeia os campos reais que você tem no Prismic
            const {
                news1_category, news1_date, news1_description, news1_title,
                news2_category, news2_date, news2_description, news2_title,
                news3_category, news3_date, news3_description, news3_title,
                news4_category, news4_date, news4_description, news4_title,
                upcoming_event1_title, upcoming_event1_date,
                upcoming_event2_title, upcoming_event2_date,
                upcoming_event3_title, upcoming_event3_date
            } = prismicDoc.data;
        
        console.log('Dados do Prismic para Notícias:', prismicDoc.data);
        
        // SEÇÃO DE NOTÍCIAS PRINCIPAIS
        
        // Notícia 1
        
            const news1CategoryHTML = prismic.asHTML(news1_category);
            const news1TitleHTML = prismic.asHTML(news1_title);
            const news1DateHTML = prismic.asHTML(news1_date);
            const news1DescriptionHTML = prismic.asHTML(news1_description);
            
            const news1TitleDOM = document.getElementById('news-1-title');
            const news1DateDOM = document.getElementById('news-1-date');
            const news1CategoryDOM = document.getElementById('news-1-category');
            const news1DescriptionDOM = document.getElementById('news-1-description');
            
            if (news1TitleDOM) news1TitleDOM.innerHTML = news1TitleHTML;
            if (news1DateDOM) news1DateDOM.innerHTML = news1DateHTML;
            if (news1CategoryDOM) news1CategoryDOM.innerHTML = news1CategoryHTML;
            if (news1DescriptionDOM) news1DescriptionDOM.innerHTML = news1DescriptionHTML;
        
        
        // Notícia 2
        
            const news2CategoryHTML = prismic.asHTML(news2_category);
            const news2TitleHTML = prismic.asHTML(news2_title);
            const news2DateHTML = prismic.asHTML(news2_date);
            const news2DescriptionHTML = prismic.asHTML(news2_description);
            
            const news2CategoryDOM = document.getElementById('news-2-category');
            const news2TitleDOM = document.getElementById('news-2-title');
            const news2DateDOM = document.getElementById('news-2-date');
            const news2DescriptionDOM = document.getElementById('news-2-description');
            
            if (news2CategoryDOM) news2CategoryDOM.innerHTML = news2CategoryHTML;
            if (news2TitleDOM) news2TitleDOM.innerHTML = news2TitleHTML;
            if (news2DateDOM) news2DateDOM.innerHTML = news2DateHTML;
            if (news2DescriptionDOM) news2DescriptionDOM.innerHTML = news2DescriptionHTML;
        
        
        // Notícia 3
            const news3CategoryHTML = prismic.asHTML(news3_category);
            const news3TitleHTML = prismic.asHTML(news3_title);
            const news3DateHTML = prismic.asHTML(news3_date);
            const news3DescriptionHTML = prismic.asHTML(news3_description);
            
            const news3CategoryDOM = document.getElementById('news-3-category');
            const news3TitleDOM = document.getElementById('news-3-title');
            const news3DateDOM = document.getElementById('news-3-date');
            const news3DescriptionDOM = document.getElementById('news-3-description');

            if (news3CategoryDOM) news3CategoryDOM.innerHTML = news3CategoryHTML;
            if (news3TitleDOM) news3TitleDOM.innerHTML = news3TitleHTML;
            if (news3DateDOM) news3DateDOM.innerHTML = news3DateHTML;
            if (news3DescriptionDOM) news3DescriptionDOM.innerHTML = news3DescriptionHTML;
        
        
        // Notícia 4
            const news4CategoryHTML = prismic.asHTML(news4_category);
            const news4TitleHTML = prismic.asHTML(news4_title);
            const news4DateHTML = prismic.asHTML(news4_date);
            const news4DescriptionHTML = prismic.asHTML(news4_description);
            
            const news4CategoryDOM = document.getElementById('news-4-category');
            const news4TitleDOM = document.getElementById('news-4-title');
            const news4DateDOM = document.getElementById('news-4-date');
            const news4DescriptionDOM = document.getElementById('news-4-description');

            if (news4CategoryDOM) news4CategoryDOM.innerHTML = news4CategoryHTML;
            if (news4TitleDOM) news4TitleDOM.innerHTML = news4TitleHTML;
            if (news4DateDOM) news4DateDOM.innerHTML = news4DateHTML;
            if (news4DescriptionDOM) news4DescriptionDOM.innerHTML = news4DescriptionHTML;
        
        
        // SEÇÃO DE PRÓXIMOS EVENTOS
        
        // Evento 1
        if (upcoming_event1_title) {
            const event1TitleHTML = prismic.asHTML(upcoming_event1_title);
            const event1DateHTML = prismic.asHTML(upcoming_event1_date);
            
            const event1TitleDOM = document.getElementById('upcoming-event-1-title');
            const event1DateDOM = document.getElementById('upcoming-event-1-date');
            
            if (event1TitleDOM) event1TitleDOM.innerHTML = event1TitleHTML;
            if (event1DateDOM) event1DateDOM.innerHTML = event1DateHTML;
        }
        
        // Evento 2
        if (upcoming_event2_title) {
            const event2TitleHTML = prismic.asHTML(upcoming_event2_title);
            const event2DateHTML = prismic.asHTML(upcoming_event2_date);
            
            const event2TitleDOM = document.getElementById('upcoming-event-2-title');
            const event2DateDOM = document.getElementById('upcoming-event-2-date');
            
            if (event2TitleDOM) event2TitleDOM.innerHTML = event2TitleHTML;
            if (event2DateDOM) event2DateDOM.innerHTML = event2DateHTML;
        }
        
        // Evento 3
        if (upcoming_event3_title) {
            const event3TitleHTML = prismic.asHTML(upcoming_event3_title);
            const event3DateHTML = prismic.asHTML(upcoming_event3_date);
            
            const event3TitleDOM = document.getElementById('upcoming-event-3-title');
            const event3DateDOM = document.getElementById('upcoming-event-3-date');
            
            if (event3TitleDOM) event3TitleDOM.innerHTML = event3TitleHTML;
            if (event3DateDOM) event3DateDOM.innerHTML = event3DateHTML;
        }
        
        } else {
            alert('Nenhum documento encontrado no tipo "noticies"');
        }
        
    } catch (error) {
        console.error('Erro ao buscar dados do Prismic para notícias:', error);
        alert('Erro ao carregar notícias: ' + error.message);
        
        // Fallback: manter conteúdo estático em caso de erro
        console.log('Mantendo conteúdo estático devido ao erro');
    }
};

// Inicializa quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    initNoticias();
});
