const btn = document.createElement("btn");

btn.innerHTML = "Log In"
document.body.appendChild(btn);
const body = document.body;

body.style.backgroundColor = "#212121";
body.style.display = "flex";
body.style.justifyContent = "center";
body.style.alignItems = "center";


// btn.style.padding = "10px";
const styles = {
    backgroundColor: '#661d1dff',
    fontWeight: '800',
    fontSize: '20px',
    border: 'none',
    borderRadius: '10px',
    height: '40px',
    width: '100px',
    color: 'crimson',
    border: '1px solid black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer'
}

Object.assign(btn.style, styles)


let data = {
    userID: "35e55dp",
    greet: function() {
        console.log(`User ${this.userID} Logged In`);
        console.log(this);
        
    }
}

data.greet()