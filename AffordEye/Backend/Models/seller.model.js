const mongoose = require("mongoose");

const sellerSchema = mongoose.Schema({
  first_name: String,
  last_name: String,
  email: { type: String, require: true },
  password: { type: String, require: true },
  ph_no: Number,
  address:String,
  gst_no:String
});

const sellerModel = mongoose.model("seller", sellerSchema);

module.exports = {
  sellerModel,
};
