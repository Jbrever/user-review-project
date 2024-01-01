const {fakeData} = require('./data');
const {connection} = require('../connection/connection');

deleteData();

function deleteData(){
    const q = 'delete from review'
    try{
    connection.query(q,(err,result)=>{
        if(err) throw err;
            console.log('old data deleted');  
            insertData();
    })   
    }catch{
       console.log('error encounterd during deleting data',err);
    }
};


function insertData(){
    const q = 'insert into review (id , image ,name , profession , age , intro) values ?'
    try{ 
        const values = fakeData.map((data)=>[data.id , data.image , data.name , data.profession , data.age ,data.introduction]);
        connection.query(q,[values],(err,reuslt)=>{
          if(err) throw err;
          console.log('insert data successfully');
        })
     
   }catch{
    console.log('error encounterd during insert-Data',err);
   }

}

