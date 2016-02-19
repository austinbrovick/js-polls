
var mongoose = require('mongoose');
var Table = mongoose.Schema;

var OptionTable = new Table({
    comment: String,
    created_at: {type: Date, required: true, default: Date.now},
    votes: Number,
    // _user : {type: Table.Types.ObjectId, ref: 'User'},
    _question: {type: Table.Types.ObjectId, ref: 'Question'}
})

mongoose.model('Option', OptionTable);
