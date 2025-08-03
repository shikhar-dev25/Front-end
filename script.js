const heading = document.createElement("h1");

heading.innerHTML = "Welcome to the Website!"

document.body.appendChild(heading);

// heading.style.padding = "10px";
const styles = {

    color: 'crimson',
    border: '1px solid black'
}

Object.assign(heading.style, styles)