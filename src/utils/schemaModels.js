//utils/schemaModels.js

import mongoose from "mongoose";

const Schema = mongoose.Schema;

const BeansSchema = new Schema(
  {
    username: String,
    coffee: String,
    roast: String,
    roastMessage: String,
    aromaDryStrength: String,
    aromaCrustStrength: String,
    aromaBreakStrength: String,
    aromaDryQuality: String,
    aromaCrustQuality: String,
    aromaBreakQuality: String,
    aromaMessage: String,
    defects: String,
    defectsMessage: String,
    cleancap: String,
    cleancapMessage: String,
    sweet: String,
    sweetMessage: String,
    acidity: String,
    acidityMessage: String,
    acidityStrength: String,
    mouthfeel: String,
    mouthfeelMessage: String,
    bodyStrength: String,
    flavor: String,
    flavorMessage: String,
    after: String,
    afterMessage: String,
    balance: String,
    balanceMessage: String,
    overall: String,
    impression: String,
    result: String,
    total: String,
    date: String,
  },
  { timestamps: true }
);
// BeansSchema.add({ name: String });
const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

//データーベースをdb変数に代入

export const BeansModel =
  mongoose.models.Beans || mongoose.model("Beans", BeansSchema);
export const UserModel =
  mongoose.models.User || mongoose.model("User", UserSchema);
