
// // 
import { KEY, NYT, SECTIONS, N_NEWS } from './configFile.min.js';
import Box from './Box.min.js'


run();


 
function createCards(allNews){
    // newsSelected = [];
    let i = 0;
    while (i <= N_NEWS) {
        let card = allNews[i];
        let abstract = card.abstract;
        let images = card.multimedia;
        let itUrl = card.url;
        if (abstract !== '' && itUrl !== '' && images.length > 3) {
            var element = new Box();
            i+=1;
        }
    }
    // if
    //  console.log(allNews.results[1]);
    
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
        $.ajax({
            method: "GET",
            url: NYT + option + '.json?api-key=' + KEY
            }).done(function(data){
                event.preventDefault();
                let test = NYT + option + '.json?api-key=' + KEY;
                console.log(test);
                const allNews = data.results;
                // console.log(allNews);
                // if (allNews.length >= N_NEWS) {
                //     createCards(allNews);
                // }else{

                // }
                createCards(allNews);
            });

        });

}


