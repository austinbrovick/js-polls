
var mongoose = require('mongoose');
var Table = mongoose.Schema;

var QuestionTable = new Table({
    question: String,
    created_at: {type: Date, required: true, default: Date.now},
    options: [{type: Table.Types.ObjectId, ref: 'Option'}],
    _user : {type: Table.Types.ObjectId, ref: 'User'}
})

mongoose.model('Question', QuestionTable);
