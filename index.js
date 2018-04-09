var Database = require('better-sqlite3');
var db = new Database('public/dat/db/pal1.db');

exports.selTmp=function(usr){
var stm=db.prepare('select * from tmp where usr=?');

try{
var row=stm.all(usr);
    
}catch(err){console.log(err);}

return row;

};

exports.selMer=function(){
var stm=db.prepare('select * from mer');

try{
var row=stm.all();
}catch(err){console.log(err);}
return row;

};

exports.updTmp=function(uni,usr,sku){
var stm=db.prepare('update tmp set uni=? where usr=? and sku=? ');

try{
stm.run(uni,usr,sku);
}catch(err){console.log(err);}
};

exports.insTmp=function(usr,sku,uni){
var stm=db.prepare('insert into tmp values(?,?,?) ');

try{
stm.run(usr,sku,uni);
    
}catch(err){console.log(err);}
};


exports.cntMer=function(){
var stm=db.prepare('select sku from mer');

try{
var row=stm.all();
}catch(err){console.log(err);}
return row.length;

};
