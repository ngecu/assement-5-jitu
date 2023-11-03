const all_tbody2 = document.querySelector('tbody') as HTMLDivElement;

const getAllNotes = async () => {
    try {
        const response = await fetch('http://localhost:5000/note/allNotes', {
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            method: 'GET',
        });

        const data = await response.json();

        const no_data_tr = `<tr class="no-data-row">
            <td colspan="3">No Notes</td>
        </tr>
        `;

        if (data.notes === "No Notes") {
            all_tbody2.innerHTML = "";
            all_tbody2.innerHTML = no_data_tr;
        } else {
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
    } catch (error) {
        console.error(error);
        // Handle the error as needed
    }
};

getAllNotes();
