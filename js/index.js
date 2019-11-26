
// // 
import { KEY, NYT, SECTIONS } from './configFile.min.js';


let sections = $('.sections');

for (let i = 0; i < SECTIONS.length; i++) {
    let category = SECTIONS[i]
    let newSection = $(`<option value=${category}>${category}</option>`)
    sections.append(newSection)
}



// Conect to 
$('.sections').change(function(event){
    let option = $('.sections').val();
    // let urt = NYT + option + '.json?api-key=' + KEY;
    // console.log(urt);
    $.ajax({
        method: "GET",
        url: NYT + option + '.json?api-key=' + KEY
      }).done(function(data){
        event.preventDefault();
        const first = data.results[1];
        console.log(first);
      });

});

