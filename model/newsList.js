    const db = require('./db.js')

    function NewsList(){

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



    module.exports=NewsList
