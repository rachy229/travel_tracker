
# Travel Tracker

## Description

_Duration: 2 Week Sprint_

Directly above this is how long it took you to develop the project. Your project description goes here. What problem did you solve? How did you solve it?

## Screen Shot



### Prerequisites

- [Node.js](https://nodejs.org/en/)
- List other prerequisites here

## Installation

How do you get your application up and running? This is a step by step list for how another developer could get this project up and running. The good target audience in terms of knowledge, would be a fellow Primer from another cohort being able to spin up this project. Note that you do not need a paragraph here to intro Installation. It should be step-by-step.

If your application has secret keys (for example --  Twilio), make sure you tell them how to set that up, both in getting the key and then what to call it in the `.env` file.

1. Create a database named `travel_tracker`,
2. The queries in the `tables.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries, 
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal
6. The `npm run client` command will open up a new browser tab for you!

## Usage
How does someone use this application? Tell a user story here.

1. open up the app and either log in or register for an account
2. Once you have logged in, you will be greeted by a list of all trips 
3. Click on any trip to see that trip's dashboard
5. The trip dashboard has a navigation bar with four different buttons, clicking on any of those buttons will allow you to view itinerary items of that type for that trip.
6. The items in the lodging section of the dashboard each include a map. Clicking on that map will bring you to an interactive version of that map. You are able to move the map and zoom in and out.

Logging in as an admin user will allow you to do everything that a regular user can do as well as create, edit and delete a trip or itinerary item. 

1. log in with the user name: 'admin' and password: 'traveltracker' will allow you to see the admin view. 
2. You will be brought to the trip list but each trip will have an edit and delete button attached to it. 
3. You can create a new trip by clicking the "Create A New Trip" button at the top of the screen.
4. clicking on a trip will bring you to a the dashboard view which has a navigation bar with four buttons on it. Each button corresponds to a different type of itinerary. Selecting any button will show all of the itinerary items of that type for that trip. 
5. The admin trip dashboard has a button at the top that reads "Add Something New". Clicking this button will bring you to a view that allows you to choose which type of itinerary item you wish to add. Each type is displayed on a button.
6. Clicking on one of the itinerary buttons will bring you to a form for that specific type of itinerary.
7. Fill out the infomation and hit "submit". This adds the item to your trip and redirects you to that portion of your dashboard.
8. Clicking the edit button on any of the items will bring you to a form with the current information prefilled. You are able to change whichever portions you want. 9. 9. Clicking "submit" to save your changes and redirect you the page you were on before you clicked "edit"

## Built With

HTML, CSS, Node, Express, React with Hooks, Redux, Redux-sagas, Prostgresql, Material UI, Mapbox GL JS, Mapbox Static Images API

## License

## Acknowledgement
Thanks to my friends and family, The Jemisin Cohort, Liz and all of the other wonderful folks over at [Prime Digital Academy](www.primeacademy.io) for all of the knowledge and support.

## Support
If you have suggestions, issues or comments, please email me at [rachelbruce922@gmail.com]