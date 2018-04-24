const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const valorationSchema = new Schema ({
     puntuation: Number,
     like: Number,
     summary: String,
     favorite: Boolean
},{
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
  });
  

const Valoration = mongoose.model("Valoration", valorationSchema);

module.exports = Valoration;