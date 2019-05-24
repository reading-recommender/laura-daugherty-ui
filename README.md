# laura-daugherty-ui

This repo contains files for the marketing and about pages for the Reading Recommender App. It can be run by visiting https://serene-ptolemy-8ccf45.netlify.com or opening the index.html file in your browser.

The main intention of this product is What the product is to expand reading material choice and offer users new book recommendations based on a simple quiz. 

The marketing page is intended to clearly communicate to our customer what our app is for and who built it. The marketing page provides information about the company, app design and the books suggested by our app.

The about the team page is designed to showcase the talent behind our product and direct our customers to Amazon Affiliate links.

The app that this page promotes is featured in https://github.com/reading-recommender/Data_science GitHub repo where more information can be found about the mechanics of the data science model behind our product.
In a nutshell users answer 10 questions and their answers are run through a database. The app then returns a list of suggested books for the user to read. The app uses a predictive model to recognize patterns in survey questions and recommend books based on the model’s output.

The file structure is organized as follows:

Index.html is the main marketing and landing page for our app.

About.html is the about us page.

Less files are organized by components that are shared throughout both .html documents.

index.less : main file containing all less component files for less compiling
navigation.less : Header and Nav bar styling
footer.less : Footer styling
about.less : Tab and Card styling
global.less : global styles
reset.less : standard style reset
mixins.less : global mixins
variables : global variables

images are stored in the images folder.