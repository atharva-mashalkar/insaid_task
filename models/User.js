const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        firstName: { type: String },
        lastName: { type: String },
        inquiry: { type: String},
        phoneNumber: { type: Number},
        emailId: {type: String},
        creationTime: { type: Number, default: Date.now },
        lastUpdated: { type: Number, default: Date.now }
    }
);


userSchema.pre("save", function save(next) {
    const user = this;
    user.lastUpdated = Date.now()
    next();
});

userSchema.pre("updateOne", function updateOne(next) {
    const user = this;
    user.lastUpdated = Date.now()
    next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;