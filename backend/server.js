const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const ejs = require('ejs');
const port = process.env.PORT || 9000;
const {route} = require('./router/userRoute');
// const data = require('./insertFakeData/insertData');
app.use(cors({origin:'*',methods:['get','post']}));
app.use(bodyParser.json());
app.set('view engine' , 'ejs');
app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname , '/public')))

app.use('/',route);
app.listen(port , ()=>{
    console.log('server started at port number -: ',port);
})



// const express = require('express');
// const path = require('path');
// const cors = require('cors');
// const app = express();
// const bodyParser = require('body-parser');
// const port = process.env.PORT || 9000;
// const { route } = require('./router/userRoute');

// // Allow requests from all origins, you can adjust this in production
// app.use(cors());

// // Use the bodyParser middleware to parse JSON requests
// app.use(bodyParser.json());

// // Serve static files from the 'public' directory
// app.use(express.static(path.join(__dirname, 'public')));

// // Use the 'route' for handling routes starting with '/'
// app.use('/', route);

// // Start the server
// app.listen(port, () => {
//     console.log('Server started at port number:', port);
// });
