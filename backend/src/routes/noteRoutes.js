"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const notebookControllers_1 = require("../controllers/notebookControllers");
const noterouter = (0, express_1.Router)();
noterouter.get('/', notebookControllers_1.TestingRoute);
noterouter.get("/all", notebookControllers_1.getAllNotes);
noterouter.post("/", notebookControllers_1.addNote);
exports.default = noterouter;
