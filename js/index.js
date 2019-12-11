
// // 
import { KEY, NYT, SECTIONS, N_NEWS } from './configFile.min.js';


run();

function createCards(allNews){
    let i = 0;
    let j = 0;

    
    while (i < N_NEWS) {
        let card = allNews[i];
        let abstract = card.abstract;
        let images = card.multimedia;
        let itUrl = card.url;
        let tittle = card.tittle;

        if (abstract !== '' && itUrl !== '' && images.length > 3) {
            let newImage = images[4].url;
            board.append('<a href=' + itUrl +'><img class="article-img" src="' + newImage +'" alt="' + tittle + '" /><h1 class="article-title">'+ abstract +'</h1></a>')
            
            j+=1;
            i+=1;
        }else{
            i+=1;

        }
        
        
    }
}



function run (){
    // Fill Sections -----------
        let sections = $('.sections');

        SECTIONS.forEach(element => {
            sections.append('<option value="' + element + '">' + element + '</option>');
        });

        // Conect to  API -------
        $('.sections').change(function(event){
        let option = $('.sections').val();
        let board = $(".cards")
        board.html(" ");
        $.ajax({
            method: "GET",
            url: NYT + option + '.json?api-key=' + KEY
            }).done(function(data){
                event.preventDefault();
                let test = NYT + option + '.json?api-key=' + KEY;
                console.log(test);
                const allNews = data.results;

                // if (allNews.length >= N_NEWS) {
                //     createCards(allNews);
                // }else{

                // }
                let board = $(".cards")
                board.html(" ");
                createCards(allNews);
            });

        });

}

