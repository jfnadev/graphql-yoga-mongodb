const mongoose = require('mongoose');
const Post = require('../models/Post');

exports.getPosts = async (req, res) => {
  const posts = await Post.find({});
  return posts.map(post => ({
    id: mongoose.Types.ObjectId(post._id),
    title: post.title,
    body: post.body,
    user_id: post.user_id,
  }));
};

exports.getPost = async id => {
  const post = await Post.findOne({ _id: id });
  return {
    id: mongoose.Types.ObjectId(post._id),
    title: post.title,
    body: post.body,
    user_id: post.user_id,
  };
};

exports.addingPost = async (title, body, userid) => {
  const post = new Post({ title, body, user_id: userid });
  const add = await post.save(new Post({ title, body, user_id: userid }));
  return add;
};
