module.exports = mongoose.model("User", new mongoose.Schema({
     name: String,
     email: { type: String, unique: true },
     password: String,
     role: { type: String, enum: ["patient", "admin"], default: "patient" }
    }));