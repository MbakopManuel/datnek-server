import mongoose, { Schema } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";
import slugify from 'slugify';

class Langue {

  initSchema() {
    const schema = new Schema({
      intitule: {
        type: String,
        required: true,
      },
     ecrit: {
        type: String,
        required: true,
      },
parle: {
        type: String,
        required: true,
      },
comprehension: {
        type: String,
        required: true,
      },
    }, { timestamps: true });
    schema.plugin(uniqueValidator);
    mongoose.model("langues", schema);
  }

  getInstance() {
    this.initSchema();
    return mongoose.model("langues");
  }
}

export default Langue;
