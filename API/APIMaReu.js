
export default async function isUserIdentified (email,password) {
    const url = 'http://localhost:8080/users/email/' + email + '/password/' + password
  
   return await fetch(url)
    .then( (response) =>  response.json )
    .catch((error) => console.error(error))

     

}

