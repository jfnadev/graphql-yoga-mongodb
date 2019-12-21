const { addingPost } = require('../controllers/PostController');

const Mutation = {
  async addPost(parent, args, ctx, info) {
    return addingPost(args.title, args.body, args.user_id);
  },
};
module.exports = Mutation;
