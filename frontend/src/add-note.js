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
const addform = document.querySelector('.add-note-form');
addform.addEventListener('submit', (event) => __awaiter(void 0, void 0, void 0, function* () {
    event.preventDefault();
    const ntitle = document.getElementById('ntitle');
    const ndescr = document.getElementById('ndescr');
    const ncontent = document.getElementById('ncontent');
    const noteTitle = ntitle.value;
    const noteDescription = ndescr.value;
    const noteContent = ncontent.value;
    if (noteTitle.trim() !== '' && noteDescription.trim() !== '' && noteContent.trim() !== '') {
        try {
            const response = yield fetch('http://localhost:5000/note/addNote', {
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({
                    "title": noteTitle,
                    "description": noteDescription,
                    "content": noteContent
                })
            });
            const data = yield response.json();
            if (data.error) {
                alert("Error occurred");
            }
            else {
                location.href = "index.html";
            }
            console.log(data);
        }
        catch (error) {
            console.log(error);
        }
    }
}));
