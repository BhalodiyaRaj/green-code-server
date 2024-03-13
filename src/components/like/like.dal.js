const Like = require('../../models/like.model');

exports.model = Like;

exports.like = async (userId, type, referenceId) => {
  await Like.create({
    createdBy: userId,
    reference: referenceId,
    type,
  });
};

exports.unlike = async (userId, reference) => {
  await Like.deleteOne({ createdBy: userId, reference });
};
