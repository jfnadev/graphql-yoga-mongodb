const { getPosts, getPost } = require('../controllers/PostController');

const Query = {
  async hello(parent, args, ctx, info) {
    console.log(getPosts());
    return getPosts();
  },
  async posts(parent, args, ctx, info) {
    return getPosts();
  },
  async post(parent, args, ctx, info) {
    return getPost(args.id);
  },
};

module.exports = Query;
