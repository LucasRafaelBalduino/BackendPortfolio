const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const { BASE_UPLOAD } = process.env;

const ProjectSchema = new mongoose.Schema({
  name: String,
  image: String,
  link: String,
  description: String,
  url: String,
  stack: [String],
}, {
  toJSON: {
    virtuals: true,
  },
});

ProjectSchema.virtual('image_url').get(function () {
  return `${BASE_UPLOAD}/files/${this.image}`;
});


module.exports = mongoose.model('Project', ProjectSchema);
