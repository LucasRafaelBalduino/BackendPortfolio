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

ProjectSchema.virtual('image_url').get(function () {
  return `http://localhost:3333/files/${this.image}`;
});

module.exports = mongoose.model('Project', ProjectSchema);
