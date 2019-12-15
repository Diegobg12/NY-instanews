# NEW YORK TIMES API

Project nº3 of RED ACADEMY Web Developer program.

# ABOUT

This is an app to take the news from the New York Times database, and display it according to Desing team especifications.

#  CONFIG STEPS

 + Download initial documents from [Project 3 - Instanews App](https://red-wdp-ws.herokuapp.com/project/project-03/)
 + Create initial folder and files such as `js` `index.html` `sass`.
 + On the project folder in your terminal install `npm install`. 
 + Instal gulp with `npm install gulp --save-dev`.
 + Install sass `npm install -g sass`.
 + Create `gulpfile.js`and install all modules required.
 ```
    gulp = require('gulp'),
    terser = require('gulp-terser'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    autoprefixer = require("gulp-autoprefixer"),
    cssnano = require("gulp-cssnano"),
    eslint = require('gulp-eslint');
 ```
 + Acording to the configuration in gulpFile.js, all the files on `js`and `sass` folder will convert to the min version in `build`folder.
 + Run `gulp`on the terminal, the index.html file will open on the browser.
 
# GET THE API KEY.
  
  + Go to [New York](https://developer.nytimes.com/) and sing in.
  + Create a new project and copy the API.
  + Paste the KEY on `configFile.js`.
  + Create the link to get access to the news from new york times database:
  `https://api.nytimes.com/svc/topstories/v2/science.json?api-key=yourkey`


# DESIGN REQUIRMENTS
  
  + Design first for mobile version then adapt to Tablet and Desktop.
  + The `header`element adapt to screen size using FLEX
  + The CARDS are agruped using a GRID BOX.
  
  #  SPECIAL FEATURES
  
  + The `select`element is stylized using https://hernansartorio.com/jquery-nice-select/
  + usins `JQUERY`to add an other class to the header element. The new class adapts the element to the top of the website using `transition: all 1s;`on the sass file.
  + Using `transition` funtionality on css the article abstract moves on y-axe. Also the tittle displays when the element is hoover.
  
 # SOURCES
  +[NPM](https://docs.npmjs.com/cli/install)
  + [GULP](https://gulpjs.com/)
  + [JQUERY](https://jquery.com/)
  + [NEW YOTK TIME](https://developer.nytimes.com/).
  + [GRID](https://getbootstrap.com/docs/4.0/layout/grid/)
  
  

