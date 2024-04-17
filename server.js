const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require('dotenv');
const port = process.env.PORT || 3000;
dotenv.config()
const ejs = require('ejs');
app.use(express.json());

app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine','ejs');
    
app.use(express.static('public'));
app.use(express.static('JavaScript'));

// mongoose.connect("mongodb+srv://justinaisat:aisat@cluster0.xonu9gs.mongodb.net/Evaluation");
mongoose.connect("mongodb+srv://justinaisat:aisat@cluster0.xonu9gs.mongodb.net/Evaluation")

const dataAisatSchema = new mongoose.Schema({
    teacher: String,
    section: String,
    Q1: Number,
    Q2: Number,
    Q3: Number,
    Q4: Number,
    Q5: Number,
    Q6: Number,
    Q7: Number,
    Q8: Number,
    Q9: Number,
    Q10: Number,
    Q11: Number,
    Q12: Number,
    Q13: Number,
    Q14: Number,
    Q15: Number,
    Q16: Number,
    Q17: Number,
    Q18: Number,
    Q19: Number,
    Q20: Number,
    comment: String,
})
const teacherSchema = new mongoose.Schema({
    tValue: String,
    switch: String,
    switchSign: String,
})
const instructorSchema = new mongoose.Schema({
  Instructor: String,
})




const Teacher = mongoose.model("Teacher", teacherSchema)
const Data = mongoose.model("Data", dataAisatSchema,);
const Instructor = mongoose.model("Instructor",instructorSchema);








app.get("/", async (req,res) => {

    const data = await Data.find();
    const code = await Teacher.find();
    const instructor = await Instructor.find();
    res.render('index',{
        dataList: data,
        teacherCode: code,
        instructorName: instructor,
    })
})
app.get("/viewAdminTable", async function(req,res){
  const data = await Data.find();
    const code = await Teacher.find();
    const instructor = await Instructor.find();
  res.render("viewAdminTable",{
        dataList: data,
        teacherCode: code,
        instructorName: instructor,
  })
})
app.get("/viewAdmin", async function(req,res){
  const data = await Data.find();
    const code = await Teacher.find();
    const instructor = await Instructor.find();
  res.render("viewAdmin",{
        dataList: data,
        teacherCode: code,
        instructorName: instructor,
  })
})
app.get("/updatePage", async function(req,res){
  const data = await Data.find();
    const code = await Teacher.find();
    const instructor = await Instructor.find();
  res.render("updatePage",{
        dataList: data,
        teacherCode: code,
        instructorName: instructor,
  })
})
app.get("/ranking", async function(req,res){
  const data = await Data.find();
    const code = await Teacher.find();
    const instructor = await Instructor.find();
  res.render("ranking",{
        dataList: data,
        teacherCode: code,
        instructorName: instructor,
  })
})
app.get("/deleteView", async function(req,res){
  const data = await Data.find();
    const code = await Teacher.find();
    const instructor = await Instructor.find();
  res.render("deleteView",{
        dataList: data,
        teacherCode: code,
        instructorName: instructor,
  })
})






app.post("/addTeacher", function(req,res){
    let newInstructor = new Instructor({
      Instructor: req.body.Instructor,
    });
    newInstructor.save();
    res.redirect('/viewAdmin')
});




app.post("/", function(req,res){
    let newData = new Data({ 
        teacher: req.body.teacher,
        section: req.body.section,
        Q1: req.body.Q1,
        Q2: req.body.Q2,
        Q3: req.body.Q3,
        Q4: req.body.Q4,
        Q5: req.body.Q5,
        Q6: req.body.Q6,
        Q7: req.body.Q7,
        Q8: req.body.Q8,
        Q9: req.body.Q9,
        Q10: req.body.Q10,
        Q11: req.body.Q11,
        Q12: req.body.Q12,
        Q13: req.body.Q13,
        Q14: req.body.Q14,
        Q15: req.body.Q15,
        Q16: req.body.Q16,
        Q17: req.body.Q17,
        Q18: req.body.Q18,
        Q19: req.body.Q19,
        Q20: req.body.Q20,
        comment: req.body.comment,
    });
    newData.save();
    res.redirect('/');
});
// app.post("/tForm", function(req,res){
//     let teacher = new Teacher({
//         tValue: req.body.tValue,
//         tName: req.body.tName,
//     });
//     teacher.save();
// });


app.patch("/tForm/:id", async (req, res) => {
    try {
      const updatedData = await Teacher.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });
      res.status(200).json({
        updated: updatedData,
      });
    } catch (err) {
      res.status(500).json({
        error: err,
      });
    }
  });


// For updating single task
app.post("/tForm", async function (req, res) {
    console.log(req.body.id);
    console.log(req.body)
    try {
      const updatedData = await Teacher.findByIdAndUpdate(req.body.id, {tValue: req.body.tValue}, {
        new: true,
        runValidators: true,
      });
      // res.status(200).json({
      //   content: updatedData
      // })
      res.redirect('/viewAdminTable')
    } catch (err) {
      console.log(err);
    }
  });

//   app.post("/switch", function(req,res){
//     let Switch = new Teacher({
//         switch: req.body.switch,
//         switchSign: req.body.switchSign,
//     });
//     Switch.save();
//     res.redirect('/')
// });





app.patch("/updatePage/:id", async (req, res) => {
  try {
    const updatedData = await Instructor.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      updated: updatedData,
    });
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
});

// For updating single task
app.post("/UpdateTeacher", async function (req, res) {
  console.log(req.body.id);
  console.log(req.body)
  try {
    const updatedData = await Instructor.findByIdAndUpdate(req.body.id, {Instructor: req.body.UpdatedTeacher}, {
      new: true,
      runValidators: true,
    });
    res.redirect('/viewAdmin')
    // res.status(200).json({
    //   content: updatedData
    // })
  } catch (err) {
    console.log(err);
  }
});



  app.post("/switch", async function (req, res) {
    console.log(req.body.id);
    console.log(req.body)
    try {
      const updatedData = await Teacher.findByIdAndUpdate(req.body.id, {switch: req.body.switch, switchSign: req.body.switchSign}, {
        new: true,
        runValidators: true,
      });
      // res.status(200).json({
      //   content: updatedData
      // })
      res.redirect('/viewAdmin')
    } catch (err) {
      console.log(err);
    }
  });


  app.get("/updatePage/:id", async function (req, res) {
    try {
      const instructor = await Instructor.findById(req.params.id);
      if(!instructor){
        return res.render('errorpage', {
          content: 'No content'
        })
      }
      // res.status(200).json({
      //   content: instructor
      // })
      res.render("updatePage", {
        instructorName: instructor,
      });
      console.log(instructor);
    } catch (err) {
      console.log(err);
    }
  });

  app.get("/deleteView/:id", async function (req, res) {
    try {
      const instructor = await Instructor.findById(req.params.id);
      if (!instructor) {
        return res.render("viewAdmin", {
          content: "No content",
        });
      }
      res.render("deleteView", {
        instructorName: instructor,
      });
      console.log(instructor);
    } catch (err) {
      console.log(err);
    }
  });

  app.post("/deleteTeacher", async function (req, res) {
    console.log(req.body.id);
  try {
    const deletedTask = await Instructor.findByIdAndDelete(req.body.id);
    if (deletedTask) {
      return res.redirect("/viewAdmin");
    }
  } catch (err) {
    console.error("Error deleting task : ", err);
  }
  });





  app.post('/adminPage', async function(req,res){
    res.redirect('/viewAdmin')
  })

  app.post('/back', async function(req,res){
    res.redirect('/viewAdmin')
  })
  app.post('/adminSignOut', async function(req,res){
    res.redirect('/');
  })
  app.post('/ranking', async function(req,res){
    res.redirect('/ranking');
  })
  


  

  
app.listen(port, function(){
    console.log('server started')
})
