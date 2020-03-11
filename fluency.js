const getUsers = async function () {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const json = await response.json()
    return json
}

console.log(getUsers())

const printUsers = async function () {
    const users = await getUsers();
    const tbody = document.getElementById("tbody")

    users.forEach(user => {
        tbody.innerHTML += `
        <tr>
            <td>${user.name}</td>
            <td>${user.company.name}</td>
        </tr>
        `
    })
}

printUsers();
