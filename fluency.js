const requestMethod = (method,url,data) =>{
  return fetch(url, {
    method: method,
    body: JSON.stringify(data),
    headers: data ? {'Content-Type': 'application/json'} : {}
  })
};

const getData = async () => {
  const data = await requestMethod('GET', 'https://jsonplaceholder.typicode.com/users');
  const response = await data.json();
  return response
}

const paintDOM = async() =>{
  const users = await getData();
    
  users.forEach(user => {
    document.getElementById('tbody').innerHTML +=`
     <tr>
        <td>${user.name}</td>
        <td>${user.company.name}</td>
      </tr>
    `
  })
}
paintDOM()