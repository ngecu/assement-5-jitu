"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addNote = exports.getAllNotes = exports.TestingRoute = void 0;
const mssql_1 = __importDefault(require("mssql"));
const sqlConfig_1 = require("../config/sqlConfig");
function TestingRoute(req, res) {
    return res.send("Server Running well");
}
exports.TestingRoute = TestingRoute;
function getAllNotes(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const checkNoteQuery = `SELECT * FROM notes`;
            mssql_1.default.connect(sqlConfig_1.sqlConfig)
                .then(pool => {
                return pool.request().query(checkNoteQuery);
            })
                .then((result) => __awaiter(this, void 0, void 0, function* () {
                if (result.recordset.length > 0) {
                    console.log("success", result);
                    return res.status(200).json(result.recordset);
                }
            }));
        }
        catch (error) {
            return res.json({
                error: error
            });
        }
    });
}
exports.getAllNotes = getAllNotes;
function addNote(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let { title, description, content } = req.body;
        let query = `INSERT INTO notes (note_id, title, content) VALUES ('${id}', '${title}', '${content}')`;
        mssql_1.default.connect(sqlConfig_1.sqlConfig).then(pool => {
            return pool.request().query(query);
        }).then(result => {
            console.log("success", result);
        }).catch(err => {
            console.log(err);
            return res.status(500).json({
                error: err.message || 'An error occurred while registering the note.'
            });
        });
    });
}
exports.addNote = addNote;
