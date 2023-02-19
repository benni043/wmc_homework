function write(name) {
    let span = document.getElementById("name");
    if (span === null) return;

    span.innerHTML = name;
}

async function getName() {
    let response = await fetch("http://localhost:3000/getName");
    let json = await response.json();

    write(json.name);
}

async function sendName() {
    let name = document.getElementById("greeting").value;
    let json = {name: name};

    await fetch("http://localhost:3000/hello", {
        headers: {
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(json)
    })

    return false;
}

getName().then();
setInterval(() => {
    getName().then();
}, 1000)