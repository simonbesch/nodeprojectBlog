import express from "express"
const stories = express.Router()
import { Story } from '../model/story'
import multer from 'multer'
const uploads = multer({dest:'./uploads'})
import bodyParser from "body-parser"



stories.get("/", (req, res) => {
  Story.find({}, (err,stories)=>{
    if(err) throw err
    res.render("membre",{ stories , title:"Histoires" })
  }).populate('auteur')
});

stories.get("/creatblog", (req, res) => {
  res.render("creatblog",{title:"Writing History"})
});



stories.post('/creatblog', (req, res) => {
  req.body.auteur = req.user._id;
  const newStory = new Story(req.body)
  if (req.file) {
    console.log('uploding img');
    const profileimage = req.file.filename
  }
  else {
    console.log('no img uploaded');
    const profileimage = 'noimage.png'
  }
  newStory.save((err, story) => {
    if (err) {
      // res.send(err)
      res.redirect('/')
      // alert("votre requete n'à pas était enregistrer, veuillez ressayer")
      console.log(err, "votre requete n'à pas était enregistrer, veuillez ressayer");
    } else {
      res.redirect('/')
      // res.send(req.body);
      console.log(req.body);
    }
  })
  // req.flash('succcess', 'vous pouvais vous co vous etes dans la BdD')
  //res.redirect('/')
})

stories.get("/:id", (req, res) => {
  console.log(req.params.id);
  Story.find({_id:req.params.id}, (err,story)=>{
    if(err) throw err
    console.log(story[0]);
    console.log(story[0].name);
    story=story[0]

    res.render("histoire",{
      story,
      title: story.name
    })
  })
});

stories.get('/delete/:id', function (req, res) {
  const _id = req.params.id;
  Story.findOneandRemove({_id}, (err)=>{
    if(err) throw err
    res.redirect("http://localhost:4567/stories")
  })
});


export {stories}
