document.getElementById('apiForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    let checkboxes = document.querySelectorAll('input[name="data"]:checked');
    if (checkboxes.length === 0) {
        alert('Please select at least one option.');
        return;
    }

    let selectedValues = Array.from(checkboxes).map(cb => cb.value);
    let resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    if (selectedValues.length >= 2) {
        let promises = selectedValues.map(value => fetch(`https://jsonplaceholder.typicode.com/${value}`).then(res => res.json()));
        let data = await Promise.all(promises);

        if (selectedValues.includes('posts') && selectedValues.includes('users')) {
            let posts = data[selectedValues.indexOf('posts')];
            let users = data[selectedValues.indexOf('users')];
            let combinedList = posts.map(post => {
                const user = users.find(user => user.id === post.userId);
                return `<li>Title: ${post.title}, Body: ${post.body}, Name: ${user.name}</li>`;
            }).join('');
            resultsDiv.innerHTML = `<ul>${combinedList}</ul>`;
        } else {
            selectedValues.forEach((value, index) => {
                let list = data[index].map(item => {
                    if (value === 'comments') return `<li>Name: ${item.name}, Body: ${item.body}</li>`;
                    if (value === 'todos') return `<li>Title: ${item.title}, Completed: ${item.completed}</li>`;
                }).join('');
                resultsDiv.innerHTML += `<h3>${value.charAt(0).toUpperCase() + value.slice(1)}</h3><ul>${list}</ul>`;
            });
        }
    }
});

document.getElementById('clearButton').addEventListener('click', function() {
    document.getElementById('apiForm').reset();
    document.getElementById('results').innerHTML = '';
});
