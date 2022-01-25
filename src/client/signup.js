document.getElementById("register_button").addEventListener("click", validate)

// var http = new XMLHttpRequest();    
// http.open('POST', "http://localhost:3333/users", true);
// http.setRequestHeader('Content-Type', 'application/json',);

async function validate() {
    // var nameValue = document.getElementById("name").value
    // var emailValue = document.getElementById("email").value
    // var passwordValue = document.getElementById("password").value

    const data = {
        "name": 'teste',
        "email": "teste@email.com",
        "password": "teste56"
    }
    
    window.alert("uma parenta de jorge");
    const rawResponse = await fetch('https://cors-anywhere.herokuapp.com/http://localhost:3333/users', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'*'
        },
        body: JSON.stringify(data)
    });
    const content = await rawResponse.json();
    
    window.alert(content); 
}
