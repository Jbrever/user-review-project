const path = require("path");
const { connection } = require("../connection/connection");
const allData = (req, resp) => {
  const q = "select * from review";
  try {
    connection.query(q, async (err, result) => {
      if (err) throw err;
      await resp.send(result);
    });
  } catch {
    console.log("error encounterd", err);
  }
};

const reviews = async (req, resp) => {
  await resp.render("index");
};

const add_review_Form = async (req, resp) => {
  await resp.render("form-pop-up");
};

const new_review = async (req, resp) => {
  let data = [req.body];
  let arrData = data.map((data)=>[data.name , data.image , data.profession , data.age ,data.intro])
  const q = `insert into review (name , image ,  profession , age , intro ) values ?`;
  try {
    connection.query(q, [arrData] , (err, result) => {
      if (err) throw err;
      console.log("new review insert successfully");
    });
  } catch {
    console.log("error encounterd during insert new review");
  }
  await resp.redirect("/reviews");
};

module.exports = { allData, add_review_Form, reviews, new_review };
