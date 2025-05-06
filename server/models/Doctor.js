module.exports = mongoose.model("Doctor", new mongoose.Schema({
     name: String,
     specialization: String,
       availableTimes: [String]
   }));