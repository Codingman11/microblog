const express = require('express');
const router = express.Router();
const Post = require('../models/PostSchema');

//GET BACK ALL THE TWEETS
router.get('/', async (req, res) => {
	try {
		const posts = await Post.find();
		res.json(posts);
	} catch (err) {
		res.json({ message: err });
	}
});
//SUBMIT A POST
router.post('/', async (req, res) => {
	let post = new Post({
        username: req.body.username,
		text: req.body.text 
	});

		const savedPost = await post.save();
		res.json(savedPost);

	
});

//DELETE A POST

router.delete('/:id', async (req, res) => {
	try {
		const removePost = Post.remove({ _id: req.params.id });
		res.json(removePost);
	} catch (err) {
		res.json({ message: err });
	}
});

module.exports = router;
