
const addform = document.querySelector('.add-note-form') as HTMLFormElement;


addform.addEventListener('submit', async (event) => {
    event.preventDefault();

    const ntitle = document.getElementById('ntitle') as HTMLInputElement;
    const ndescr = document.getElementById('ndescr') as HTMLInputElement;
    const ncontent = document.getElementById('ncontent') as HTMLTextAreaElement;

    const noteTitle = ntitle.value;
    const noteDescription = ndescr.value;
    const noteContent = ncontent.value;

    if (noteTitle.trim() !== '' && noteDescription.trim() !== '' && noteContent.trim() !== '') {
        try {
            const response = await fetch('http://localhost:5000/note/addNote', {
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

            const data = await response.json();

            if (data.error) {
                alert("Error occurred");
            } else {
               location.href ="index.html"
            }

            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
});


