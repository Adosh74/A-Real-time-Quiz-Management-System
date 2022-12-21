const mongoose = require('mongoose');
const Quizbe = mongoose.model('Quizbe',{
    quiz_name : {type : String },
    course_name : {type : String },
    quiz_date : {type : String },
    list_of_questions: {type : Number }
});

module.exports = Quizbe;