function write(name) {
    let span = document.getElementById("name");
    if (span === null) return;

    span.innerHTML = name;
}

async function getName() {
    let response = await fetch("http://localhost:3000/hello");

    console.log(response)

    let json = await response.json();

    let name = json.name;

    write(name);
}

async function sendName() {
    let name = document.getElementById("greeting").innerText;

    await fetch("http://localhost:3000/hello", {
        headers: {
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({name: name})
    })
}

getName().then(r => r);