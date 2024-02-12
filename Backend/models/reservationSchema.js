import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
        minLength: [3, "First name must contain 3 characters"],
        maxLength: [10, "First name cannot exceed 10 characters"],
    },
    lastName:{
        type: String,
        required: true,
        minLength: [3, "Last name must contain 3 characters"],
        maxLength: [10, "Last name cannot exceed 10 characters"],
    },
    email:{
        type: String,
        required: true,
        validate: [validator.isEmail, "Provide a valid Email"],
    },
    phone:{
        type: Number,
        required: true,
        minLength: [10, "Phone number must contain 10 characters"],
    },
    time:{
        type: String,
        required: true,
    },
    date:{
        type: String,
        required: true,
    },
});

export const Reservation = mongoose.model("Reservation", reservationSchema);