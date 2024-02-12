import express from "express";
import cors from 'cors';
import dotenv from "dotenv";
import { dbConnection} from "./database/dbConnection.js";
import { errorMiddlerware } from "./error/error.js";
import reservationRouter from "./routes/reservationRoute.js";

dotenv.config({ path: "./config/config.env" });

const app = express();

app.use(cors({
    origin: 'http://localhost:5173',  
    credentials: true,
  }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/reservation", reservationRouter);

dbConnection();

app.use(errorMiddlerware);

export default app;
