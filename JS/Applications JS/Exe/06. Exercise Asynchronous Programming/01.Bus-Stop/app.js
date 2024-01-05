async function getInfo() {

    // read input value
    // request to server
    // parse data
    // display data
    // check error

    const stopId = document.getElementById('stopId').value;
    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;

    const stopNameElement = document.getElementById('stopName');
    const timeTableElement = document.getElementById('buses');

    try {
        stopNameElement.textContent = 'Loading...';
        timeTableElement.replaceChildren();
        const res = await fetch(url);

        if (res.status !== 200) {
            throw new Error('stop ID not found!');
        }
        const data = await res.json();

        stopNameElement.textContent = data.name;

        Object.entries(data.buses).forEach(b => {
            let liElement = document.createElement('li');
            liElement.textContent = `Bus ${b[0]} arrives in ${b[1]} minute`;
            timeTableElement.appendChild(liElement);
        });
    } catch (error) {
        stopNameElement.textContent = 'Error';
    }
}