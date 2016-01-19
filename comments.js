var pg = require('pg');
var port = 5433;
var host = '127.0.0.1';
var conString = process.env.PGCONSTR;
console.log(conString);
var client = new pg.Client(conString);
client.connect();


exports.add = function(entry){
	date = new Date().toLocaleDateString();
	client.query("create table if not exists comments(name varchar(100),comment varchar(1000),DateOn date)");
	(entry.name && entry.comment) && client.query("insert into comments values("+"\'"+entry.name+"\'"+","+"\'"+entry.comment+"\'"+","+"\'"+date+"\'"+")");
};

exports.getAll = function(res){
	var comments = [];
	var query = client.query("select * from comments order by dateon desc");
	query.on('row',function(row){
		comments.push(row);
	});
	query.on('end',function(){
		comments = comments.map(function(each){
			each.dateon = each.dateon.toLocaleDateString()+' '+each.dateon.toLocaleTimeString();
			return each;
		});
		res.send(JSON.stringify(comments));
	});
};
