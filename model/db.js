const mysql = require("mysql");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "123",
  database: "vue"
});

exports.query = function() {
  let args = arguments;
  let sqlStr = args[0];
  let params = [];
  let callback;

  if (args.length === 2 && typeof args[1] === "function") {
    callback = args[1];
  } else if (args.length === 3 && Array.isArray(args[1]) &&typeof args[2] === "function") {
    params = args[1];
      callback=args[2];
  }else{
      return new Error('参数个数不匹配')
  }

  pool.getConnection(function(error,connection){
    if(error){
        return callback(error)
    }
    connection.query(sqlStr,params,function(err,data){
        if(err){
            return callback(err)
        }
        connection.release();
        callback.apply(null,arguments)
    })
  })
};
