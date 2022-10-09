

var express = require('express');
var app = express();
var path = require('path');
var PORT = 80;
  
// View engine setup
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, "/views/index.html")));
  
// app.render('email', function (err, html) {
//     if (err) console.log(err);
//     console.log(html);
// });
app.use("/static", express.static("static")); // For serving static files
app.use(express.urlencoded());
app.use(express.json());

// app.use("/static", express.static("static")); // For serving static files
// app.use(express.urlencoded());
// app.use(express.json());

app.get("/", (req, res) => {
  const params = {};
  // res.status(200).render('index.html', params);
  res.sendFile(__dirname + "/views/index.html");
});

    
app.listen(PORT, function(err){
    if (err) console.log("Error in server setup");
    console.log("Server listening on Port", PORT);
});