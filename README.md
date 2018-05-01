# ColorizeMe
![ColorizeMe screencap][https://i.imgur.com/vGJZd2n.png]
ColorizeMe is an app created to allow users to preview color schemes on website templates in order to make the process of deciding on, and arranging the color scheme of their webiste easier. Users can sign in with a Google+ account, create color schemes, name them, save them, edit them, and delete them if need be!
## Visit ColorizeMe
* [ColorizeMe on Heroku](https://colorizeme.herokuapp.com/ "ColorizeMe")
## Built With
* [MERN](http://mern.io/ "Mern")
    * [MongoDB](https://www.mongodb.com/ "MongoDB")
    * [Express](https://expressjs.com/ "Express js")
    * [React](https://reactjs.org/ "React js")
    * [Node](https://nodejs.org/en/ "Node js")
#### Back-end
* [Body-Parser](https://www.npmjs.com/package/body-parser "Body-Parser")
* [Mongoose](http://mongoosejs.com/ "Mongoose")
* [Nodemon](https://nodemon.io/ "Nodemon")
#### Front-end
* [Axios](https://www.npmjs.com/package/axios "Axios")
* [React-Bootstrap](https://react-bootstrap.github.io/ "React-Bootstrap")
* [React-Color](https://casesandberg.github.io/react-color/ "React-Color")
* [React-Google-Login](https://www.npmjs.com/package/react-google-login-component "React-Google-Login")
## Running Locally
#### Prerequisites 
* Node
* MongoDB 
* Internet connection for Google+ login
### Download Instructions
1. Clone repo  
```git clone git@github.com:frankwichw/ColorizeMe.git```  
2. Run Mongo server  
```mongod```  
3. Install dependences inside client folder  
```yarn install```  
4. Install dependencies inside ColorizeMe folder  
```npm install```  
5. Run application in ColorizeMe folder with `yarn start`, ***or*** run `nodemon server.js` in the ColorizeMe folder, and `yarn start` in the client folder. You should be all set!
### Created by
* Wenona Frankwich - sole developer