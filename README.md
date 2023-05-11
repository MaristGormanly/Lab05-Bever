# Hello thank you for downloading and taking a look at the project I put alot of time into, the website is called the Paddock and is designed to be a F1 Forum like website where users can discuss all things Formula 1. 

As of now it is missing many of the features I wouldve liked it to possess, for example in the original design there was a page for all F1 teams so Ferrari Fans could best discuss how terrible our team is. It is also lacking in object perminance as I could not get the database to work. I plan on fixing this myself and making the Paddock as good as it should be but as of now it can handle creating new posts through the text inputs.

As for the installation here is the Quick start setup
After installing and configuring Node.js and Postgres
Make a copy of the .env.example file called .env in the project home directory
In the .env file:
Note the FRONT_END_NAME in the future you can change this to use your own front end / Theme
   Edit Postgres settings to connect to your database server
   Set a random session secret string
   SESSION_SECRET EUOee33unt5haEAOUOMAKE_THIS_YOUR_OWNa34uei58355

 You can set email, stripe and github integrations off by setting the following:
 EMAIL_TOGGLE = false
 STRPIE_TOGGLE = false
 GITHUB_TOGGLE = false

 To use any of these integrations (email is a good one as you will need it for user email verification and password reset) set the parameter to 'true' (lowercase without the single quotes). You must also then set all the affiliated settings for that integration.
 Save your .env file
 Install dependencies
 npm i

 Start the service
 cd (directory)
 npm start

 ----- output ------

 [userRoutes] initialized
 [userController] initialized
 [Model] initialized
 [postRoute] Initialized
 [postController] initialized
 [Post] Initialized
 Lights out and away we go



# Navigate your web browser to http://localhost:1337 
# All set!