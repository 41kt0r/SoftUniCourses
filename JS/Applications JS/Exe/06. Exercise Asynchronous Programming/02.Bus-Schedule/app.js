function solve() {

    const lable = document.querySelector('#info span');
    const departButton = document.getElementById('depart');
    const arriveButton = document.getElementById('arrive');

    let stop = {
        next: 'depo5t'
    };

    async function depart() {
        // get info for next stop
        // display next stop

        departButton.disabled = true;
        const url = `http://localhost:3030/jsonstore/bus/schedule/${stop.next}`;
        const res = await fetch(url);

        if (res.status !== 200) {
            lable.textContent = `Error`;
            departButton.disabled = true;
            arriveButton.disabled = true;
            alert (`Wrong data!`)
        }

        stop = await res.json();
        lable.textContent = `Next stop ${stop.name}`;
        arriveButton.disabled = false;
    }

    function arrive() {
        lable.textContent = `Arriving at ${stop.name}`;
        departButton.disabled = false;
        arriveButton.disabled = true;


    }

    return {
        depart,
        arrive
    };
}

let result = solve();