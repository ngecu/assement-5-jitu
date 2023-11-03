import { Response, Request } from "express"
import mssql from 'mssql'
import {  sqlConfig } from "../config/sqlConfig";


export function TestingRoute(req:Request, res:Response){
    return res.send("Server Running well")
}

export async function getAllNotes(req:Request, res:Response) {
    try {
          const checkNoteQuery = `SELECT * FROM notes`;
  
          mssql.connect(sqlConfig)
          .then(pool => {
              return pool.request().query(checkNoteQuery);
          })
          .then(async result => {
              if (result.recordset.length > 0) {
                  console.log("success", result);
  
                  return res.status(200).json(result.recordset)
  
              }
  
      })
          
      } catch (error) {
          return res.json({
              error: error
          })
      }
  }

  export async function addNote(req: Request, res: Response){
    let { title,description, content } = req.body;
    let query = `INSERT INTO notes (note_id, title, content) VALUES ('${id}', '${title}', '${content}')`;

    mssql.connect(sqlConfig).then(pool => {
          return pool.request().query(query);
      }).then(result => {
          console.log("success", result);
    }).catch(err => {
          console.log(err);

        
          return res.status(500).json({
              error: err.message || 'An error occurred while registering the note.'
          });
      });
          
    }