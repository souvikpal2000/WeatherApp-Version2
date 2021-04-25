const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();

staticPath = path.join(__dirname, "../public");
viewsPath = path.join(__dirname, "../templates/views");
partialPath = path.join(__dirname, "../templates/partials");

app.use(express.static(staticPath));

app.set("views", viewsPath);
app.set('view engine', "hbs");
hbs.registerPartials(partialPath);

app.get('/', (req,res) => {
	res.render("index");
});

app.get('/about', (req,res) => {
	res.render("about");
});

app.get('/weather', (req,res) => {
	res.render("weather");
});

app.get('*', (req,res) => {
	res.render("404Error", { errMessage: 'Oops! Page not Found'});
});


const port = process.env.PORT || 3000;
app.listen(port, (err) => {
	if(err){
		console.log("Something Went Wrong");
	}else{
		console.log(`Server Listening at port ${port}`);
	}
});