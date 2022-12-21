const { isFromDtsFile } = require('@angular/compiler-cli/src/ngtsc/util/src/typescript');
const express = require('express');
const Quizbe = require('../src/app/models/quizbe');
const router = express.Router();

const mongoType = require('mongoose').Types;
const quizbe = require('../src/app/models/quizbe');

//post faculty api

router.post('/quizbe',(req,res) =>{
    let QuizObj = new Quiz({
        quiz_name : req.body.quiz_name,
        quiz_Id : req.body.quiz_Id,
        course_name : req.body.course_name,
        quiz_date : req.body.quiz_date,
        list_of_questions: req.body.list_of_questions
    });

    QuizObj.save((err, doc) => {
        if(err) {
            console.log('Error occured while adding new Quiz');
            res.status(400).send('Internal error'+ err);
        } else {
            res.send(doc);
        }
    })

})
router.get('/quizbe',(req,res) => {
    Quizbe.find((err,doc) =>{
        if(err) {
            console.log("Error while fetching");
            res.status(400).send("Internal error");
        } else {
            res.status(200).send(doc);
        }
    })
})
module.exports = router;