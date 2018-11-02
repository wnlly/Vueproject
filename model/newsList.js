    const db = require('./db.js')

    function NewsList(News){
      this.id = News.id
    }




    NewsList.getLunbo = function(callback){
        db.query('select * from lunbo',function(error,data){
            if(error){
                return callback(error)
            }

            callback(error,data)
        })
    }

    NewsList.getnewslist = function (callback){
      db.query('select * from newsList',function(error,data){
        if(error){
          return callback(error)
        }
        callback(error,data)
      })
    }

    NewsList.getnewslistDetail = function(id,callback){
      db.query('select * from newslistdetail where id = ?',[id],function(error,data){
        if (error) {
          return callback(error);
        }
        var result=data[0];
        callback(error, result);
      })
    }


    module.exports=NewsList
