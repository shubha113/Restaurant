import ErrorHandler from "../error/error.js";
import {Reservation} from "../models/reservationSchema.js";
import { catchAsyncError } from "../middleware/catchAsyncError.js";


export const sendReservation = catchAsyncError(async(req, res, next)=>{
    const {firstName, lastName, email, phone, time, date} = req.body;
    if(!firstName || !lastName || !email || !phone || !time || !date)
    return next (new ErrorHandler("Please Enter all fields", 400));
    await Reservation.create({firstName, lastName, email, phone, time, date});
    res.status(200).json({
        success: true,
        message: "Reservation Sent Successfully",
    });
});