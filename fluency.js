const usersURl = `https://jsonplaceholder.typicode.com/users`

const getData = async function() {
    const response = await fetch(usersURl);
    const data = await response.json();
    return data;
};

async function createTable() {
    const data = await getData();
    const tableBody = document.getElementById('tableBody');

    data.map(user => {
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        td1.innerHTML += `${user.name}`;
        td2.innerHTML += `${user.company.name}`;
        tr.appendChild(td1);
        tr.appendChild(td2);
        tableBody.appendChild(tr);
    });
}
createTable();
