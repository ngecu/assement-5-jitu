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
const all_tbody2 = document.querySelector('tbody');
const getAllNotes = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch('http://localhost:5000/note/allNotes', {
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            method: 'GET',
        });
        const data = yield response.json();
        const no_data_tr = `<tr class="no-data-row">
            <td colspan="3">No Notes</td>
        </tr>
        `;
        if (data.notes === "No Notes") {
            all_tbody2.innerHTML = "";
            all_tbody2.innerHTML = no_data_tr;
        }
        else {
            let tableHTML = '';
            data.forEach((element, index) => {
                tableHTML += `
                    <tr>
                        <td>${index + 1}</td>
                        <td>${element.title}</td>
                        <td>${element.description}</td>
                        <td>${element.content}</td>
                        <td>
                            <button class="edit-button" onclick="editNote(${index})">Edit</button>
                            <button class="delete-button" onclick="deleteNote(${index})">Delete</button>
                        </td>
                    </tr>
                `;
            });
            const tableBody = document.querySelector('table tbody');
            tableBody.innerHTML = tableHTML;
        }
    }
    catch (error) {
        console.error(error);
        // Handle the error as needed
    }
});
getAllNotes();
