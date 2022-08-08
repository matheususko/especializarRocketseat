const url = "http://localhost:5500/api"
//get
function getUsers(){
    axios.get(url)
        .then(response => {
            apiResult.textContent = JSON.stringify(response.data)
        })
        .catch(error => console.error(error))
}
//post
function addNewUser(){
    axios.post(url, newUser)
    .then(response =>{

    })
    .catch(error => console.error(error))
}

// Get com parametros
function getUser(id){
    axios.get(`${url}/${id}`)
        .then(response => {
            const data = response.data
            userName.textContent = response.data.name
            userCity.textContent = response.data.city
            userID.textContent = response.data.id
            userAvatar.src = response.data.avatar
        })
        .catch(error => console.error(error))


}

// Put para editar
function updateUser(id, userUpdated){
    axios.put(`${url}/${id}`, userUpdated)
    .then(response => console.log(response) )
    .catch(error => console.error(error))
}

// Delete
function deleteUser(id){
    axios.delete(`${url}/${id}`)
        .then(response => console.log(response))
        .catch(error => console.error(error))
}

deleteUser(7)






const newUser =  {
    name: "Olivia Zars",
    avatar: "https://picsum.photos/200/300",
    city: "Rio de Janeiro"
}
const userUpdated = {
    name: "Marcelo Calvo",
    avatar: "https://picsum.photos/200/300",
    city: "Maranhão"
}

getUsers()
getUser()
// updateUser(3, userUpdated)
// addNewUser(newUser)

