console.log(' Javascript Practice Session2 Script Executing. ')

username = prompt(' Enter Username : ')
password = prompt(' Enter Password : ')

function login(username, password){

    if(username === 'admin' && password === 'admin'){
        
        alert(`Welcome ${username} to Our Website. `)
    }
    else{
        alert(` Wrong User Credentials `)
    }
}

login(username, password)