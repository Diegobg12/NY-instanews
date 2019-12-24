// //
import { KEY, NYT, SECTIONS, N_NEWS } from './configFile.min.js';

run();

function createCards(allNews, board) {
	let i = 0;
	let j = 0;

	while (j < N_NEWS) {
		let card = allNews[i];
		let abstract = card.abstract;
		let images = card.multimedia;
		let itUrl = card.url;
		let tittleUrl = card.title;

		// PREVENT NEWS WITH NO IMAGES
		if (abstract !== '' && itUrl !== '' && images.length > 3) {
			let newImage = images[4].url;
			board.append(
				'<a class= "linkNew" href=' +
					itUrl +
					'><img class="article-img" src="' +
					newImage +
					'" alt="' +
					tittleUrl +
					'" /><h1 class="article-title">' +
					abstract +
					'<div class= "tittle">' +
					tittleUrl +
					'</div><br></h1></a>'
			);
			j += 1;
			i += 1;
		} else {
			i += 1;
		}
	}
}

function run() {
	// Fill Sections -----------
	let sections = $('.sections');
	$('.content').fadeOut(0);
	SECTIONS.forEach((element) => {
		sections.append('<option value="' + element + '">' + element + '</option>');
	});

	// Conect to  API -------
	$('.sections').change(function(event) {
		let option = $('.sections').val();
		let board = $('.cards');
		let sect = 'Sections...';
		board.html(' ');

		if (option === sect) {
			$('header').removeClass('wrapperAfter');
		}
		// AVOID CONSOLE ERROR
		if (option !== sect) {
			$.ajax({
				method: 'GET',
				url: NYT + option + '.json?api-key=' + KEY
			})
				.done(function(data) {
					event.preventDefault();

					$('.content').html(option);

					const allNews = data.results;

					if (allNews.length >= N_NEWS) {
						$('header').addClass('wrapperAfter');

						createCards(allNews, board);
					} else {
						// console.log('SORRY,NO NEWS FOR TODAY IN THIS CATEGORY')
					}
				})
				//error handling added
				.fail(function() {
					$('.cards').append('<p>There was an error</p>');
				});
		}
	});

	$(document).ready(function() {
		$('select').niceSelect();
		$(document).ajaxStart(function() {
			$('#wait').css('display', 'block');
			$('.content').fadeIn(0);
			$('.content').addClass('contentAfeter');
			$('.content').fadeOut(1500);
			$('.content').html('');
		});
		$(document).ajaxComplete(function() {
			$('#wait').css('display', 'none');
		});
	});
}
