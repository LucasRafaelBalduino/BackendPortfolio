const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  name: String,
  image: String,
  link: String,
  description: String,
  stack: [String],
}, {
  toJSON: {
    virtuals: true,
  },
});

ProjectSchema.virtual('image_url').get(() => {
  if (process.PRODUCTION === 'PRODUCTION') {
    return `${process.PRODUCTION}/files/${this.image}`;
  }
  return `https://myportfolio007.herokuapp.com/files/${this.image}`;
});

module.exports = mongoose.model('Project', ProjectSchema);
