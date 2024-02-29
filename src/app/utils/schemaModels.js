//utils/schemaModels.js

import mongoose from "mongoose";

const Schema = mongoose.Schema;

const BeansSchema = new Schema(
  {
    username: String,
    email: String,
    coffee: String,
    roast: String,
    roastDegree: String,
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
    cleancap: Number,
    cleancapMessage: String,
    sweet: Number,
    sweetMessage: String,
    acidity: Number,
    acidityMessage: String,
    acidityStrength: String,
    mouthfeel: Number,
    mouthfeelMessage: String,
    bodyStrength: String,
    flavor: Number,
    flavorMessage: String,
    after: Number,
    afterMessage: String,
    balance: Number,
    balanceMessage: String,
    overall: Number,
    impression: String,
    result: Number,
    total: Number,
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
