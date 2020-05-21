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

ProjectSchema.virtual('image_url').get(() => `${process.BASE_UPLOAD}/files/${this.image}`);

module.exports = mongoose.model('Project', ProjectSchema);
