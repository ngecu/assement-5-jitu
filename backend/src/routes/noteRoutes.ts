import { Router, Request, Response } from "express";
import { addNote,  getAllNotes,  TestingRoute } from "../controllers/notebookControllers";


const noterouter: Router  = Router()

noterouter.get('/', TestingRoute)
noterouter.get("/all", getAllNotes)
noterouter.post("/", addNote)






export default noterouter;