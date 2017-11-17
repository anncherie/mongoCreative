var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/commentDB',{useMongoClient:true});
var commentSchema = mongoose.Schema({
	Name:String,
	Comment:String
});

var Comment = mongoose.model('Comment',commentSchema);
var Comment2 = mongoose.model('Comment2', commentSchema);
var Comment3 = mongoose.model('Comment3', commentSchema);
var db = mongoose.connection;

db.on('error', console.error.bind(console,'connection error:'));
db.once('open',function(){ console.log("Connected")});


router.get('/fake',function(req,res,next) {
	console.log("Fake");
	var fakelist = [{Name:"Jim", Comment:"Hi"}];
	res.json(fakelist);
});

router.get('/comment1',function(req,res,next) {
	console.log("comment");
	Comment.find(function(err,commentList) {
		if(err) return console.error(err);
		else {
			console.log(commentList);
			res.json(commentList);
		}
	});
});

router.get('/comment2',function(req,res,next) {
	console.log("comment");
	Comment2.find(function(err,commentList) {
		if(err) return console.error(err);
		else {
			console.log(commentList);
			res.json(commentList);
		}
	});
});

router.get('/comment3',function(req,res,next) {
	console.log("comment");
	Comment3.find(function(err,commentList) {
		if(err) return console.error(err);
		else {
			console.log(commentList);
			res.json(commentList);
		}
	});
});

// router.delete('/comment',function(req,res,next) {
// 	console.log("delete");
// 	Comment.remove(function(err) {
// 		if(err) return console.error(err);	
// 		else {
// 			console.log("Delete worked");
// 			res.sendStatus(200);
// 		}
// 	});
// });

router.post('/comment',function(req,res,next) {
	console.log("comment");
	console.log(req.body);
	var newcomment = new Comment(req.body);
	newcomment.save(function(err,post) {
		if(err) return console.error(err);
		console.log(post);
		res.sendStatus(200); 
	});
});

router.post('/comment2',function(req,res,next) {
	console.log("comment");
	console.log(req.body);
	var newcomment = new Comment2(req.body);
	newcomment.save(function(err,post) {
		if(err) return console.error(err);
		console.log(post);
		res.sendStatus(200); 
	});
});

router.post('/comment3',function(req,res,next) {
	console.log("comment");
	console.log(req.body);
	var newcomment = new Comment3(req.body);
	newcomment.save(function(err,post) {
		if(err) return console.error(err);
		console.log(post);
		res.sendStatus(200); 
	});
});

module.exports = router;
