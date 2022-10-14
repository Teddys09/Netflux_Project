
# Netflux

Netlfux is a personal project, which is a new UI built on React/Redux Toolkit of a famous Entertainement's channel.

The objective of this project is to highlight my skills with React and an external API .

I decided to use Redux Toolkit because the time to fetch from the movieDB was too long and I have solved this issue by :

. First display all images on the first load and add all the data to Redux.

. Then while the user is consulting the page, download and convert all images to blob and move it to our Store with Redux.

. Then navigating to another page and loading images will be done in real time !


# Technos used

React , Redux , Redux Toolkit , Axios .


# Install Netflux 

Clone the repository then use npm install to download all dependencies !

Then create a .env and inside setup : 

REACT_APP_PRIVATE_KEY="PlaceYourAPIKey"


To get this API key consult : https://developers.themoviedb.org/3/getting-started/authentication




# Start Netflux

To start the project run npm start


