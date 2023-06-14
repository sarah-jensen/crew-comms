  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  # Crew Comms
  
  ## Description
  This application is the backend of a social network API that allow users to share their thoughts, react to others' thoughts, and create a friend list. This project was developed as a requirement of the Berkeley Fullstack Flex Web Development coding bootcamp. Skills targeted include: using MongoDB and Mongoose to create models, schemas, interact with a MongoDB database, create CRUD routes for a variety of models and schemas, and test API routes using Postman.
  
  ## Table of Contents
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [Demo](#demo)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [License](#license)
  * [Questions](#questions)
  
  ## Installation
   1. [Clone](https://github.com/sarah-jensen/crew-comms.git) or [download](https://github.com/sarah-jensen/crew-comms/archive/refs/heads/master.zip) the repository to your computer. 
   2. This application uses the following packages: Express, Mongoose, dotenv. Type `npm i` in the command line to install `node_modules`and required dependencies from the package.json.
   3. Create a `.env` file in the root directory with these parameters: 
    `PORT=[the port you wish to use to access the server]`
   4. If you do not already have an existing API platform, such as Postman or Insomnia, you can follow instructions to create an account and install Postman [here](https://www.postman.com/).
  
  
  ## Usage
  * Navigate into the root folder of the repository and enter `node server` to start the server.
  * Open and use your API Platform (e.g., Postman) to GET, CREATE, UPDATE, and DELETE users, friends, thoughts, and reactions. For instructions related to using Postman visit their [Learning Center](https://learning.postman.com/docs/introduction/overview/)
  * The routes needed are:
    * `/apiRoutes/users`
        * `GET` all users
        * `POST` to create a user
    * `/apiRoutes/users/:userId`
        * `GET` a user by id
        * `PUT` to update a user by id
        * `DELETE`a user and associated friends by id
    * `/apiRoutes/users/:userId/friends`
        * `POST` to add a friend to a user's friend list
        * `DELETE` to delete a friend from a user's friend list
    * `/apiRoutes/thoughts`
        * `GET` all thoughts
        * `POST` to create a new thought
    * `/apiRoutes/thoughts/:thoughtId`
        * `GET` a single thought by id
        * `PUT` to update a thought by id
        * `DELETE`a thought and its associated reactions by id
    * `/apiRoutes/thoughts/:thoughtId/reactions`
        * `POST` to add a reaction by the thoughtId
        * `DELETE` to delete a reaction from a thought by id
  ---
   
  This application uses the following technologies:
  * JavaScript
  * Node.js v18.12.1
  * Express
  * MongoDB
  * Mongoose
  * Environmental Variables ('dotenv')
  
  ## Demo
  View a video walkthrough of the User APIs [here](https://drive.google.com/file/d/1DvFSwigZjCQEiCsgV9ZhL5LZCLjnJby0/view).

  View a video walkthrough of the Thought APIs [here](https://drive.google.com/file/d/1kDVl2v1dKBf49lRasKYLbtKybwPkmu7J/view).

  ## Contributing
  Source code provided by UC Berkeley Fullstack Flex Web Development coding bootcamp.
  
  ## Tests
  You may test the API routes using an API Platform such as Postman.
  
  ## License
  This project is licensed under the MIT License - see Badge link for details.
  
  ## Questions
  If you have any questions or issues with the repo, please reach out to "[sarah-jensen]("https://github.com/sarah-jensen")" or create an issue in the "["repo"](https://github.com/sarah-jensen/crew-comms)".