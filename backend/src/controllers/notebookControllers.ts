import { Response, Request } from "express"
import {  sqlConfig } from "../config/sqlConfig";
import mssql from 'mssql'
import {v4} from 'uuid'
import Connection from '../dbhelpers/dbhelpers'
import { noteSchema } from "../validators/noteValidators"
const dbhelper = new Connection


export function TestingRoute(req:Request, res:Response){
    return res.send("Server Running well")
}


export const getAllNotes = async(req:Request, res:Response)=>{
    try {

        const pool = await mssql.connect(sqlConfig)

        let notes = (await pool.request().execute('fetchAllNotes')).recordset

        return res.status(200).json({
            notes: notes
        })
        
    } catch (error) {
        return res.json({
            error: error
        })
    }
}



  export const addNote = async(req:Request, res: Response) =>{
    console.log(req.body);
    
    try {
        let {title,description,content} = req.body



         const {error} = noteSchema.validate(req.body)

        if(error){
            return res.status(422).json(error)
        }


        let note_id = v4()

        
        
        let result = dbhelper.execute('addNote', {
            note_id, title,description,content
        })
        

        return res.status(200).json({
            message: 'Note added successfully'
        })
        
    } catch (error) {
        return res.json({
            error: error
        })
    }
}