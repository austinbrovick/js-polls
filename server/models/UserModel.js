var mongoose = require('mongoose');
var Table = mongoose.Schema;

var UserTable = new Table({
    name: String,
    created_at: {type: Date, required: true, default: Date.now},
    created_questions: [{type: Table.Types.ObjectId, ref: "Poll"}],// one to many relationship because there is an array
})

mongoose.model('User', UserTable);
