var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/connect', { useNewUrlParser: true, useUnifiedTopology: true });

var postSchema = new mongoose.Schema({
    title: String,
    body: String,
    link: String,
    category: String,
    author: String,
    // likes: { type: Number, default: 0 },
    author_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    comments: [{ body: "string", by: mongoose.Schema.Types.ObjectId, author: "string", date: { type: Date, default: Date.now }, category: { type: "string", default: "post" } }],
    tags: [String],
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Post", postSchema);