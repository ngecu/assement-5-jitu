import { Router, Request, Response } from "express";
import { addNote,  getAllNotes,  TestingRoute } from "../controllers/notebookControllers";


const noterouter: Router  = Router()

noterouter.get('/', TestingRoute)
noterouter.get("/allNotes", getAllNotes)
noterouter.post("/addNote", addNote)






export default noterouter;