function solve(input) {



    let pattern = /([=]|[\/])(?<place>[A-Z][A-Za-z]{2,})\1/g;

    let placesArray = [];

    let match = pattern.exec(input);
    while (match) {
        let place = match.groups.place;
        placesArray.push(place);

        match = pattern.exec(input);
    }

    const newArray = placesArray.flatMap(item => item.split(''));

    console.log(`Destinations: ${placesArray.join(", ")}`);
    console.log(`Travel Points: ${newArray.length}`);

}
solve(("ThisIs some InvalidInput") );