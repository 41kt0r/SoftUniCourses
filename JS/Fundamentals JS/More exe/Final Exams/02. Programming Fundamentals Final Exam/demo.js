function plantExhibition(input) {
    let plants = new Map();

    // Function to calculate the average rating
    function calculateAverageRating(ratings) {
        let sum = ratings.reduce((acc, curr) => acc + curr, 0);
        return (sum / ratings.length).toFixed(2);
    }

    let n = Number(input.shift());

    // Collect plant information
    for (let i = 0; i < n; i++) {
        let [plant, rarity] = input[i].split('<->');
        plants.set(plant, { rarity: Number(rarity), ratings: [] });
    }

    // Process commands
    for (let i = n; i < input.length; i++) {
        if (input[i] === 'Exhibition') {
            break;
        }

        let [command, params] = input[i].split(': ');
        let [plant, value] = params.split(' - ');

        if (plants.has(plant)) {
            switch (command) {
                case 'Rate':
                    plants.get(plant).ratings.push(Number(value));
                    break;
                case 'Update':
                    plants.get(plant).rarity = Number(value);
                    break;
                case 'Reset':
                    plants.get(plant).ratings = [];
                    break;
                default:
                    console.log('error');
                    break;
            }
        } else {
            console.log('error');
        }
    }

    // Output the exhibition information
    console.log('Plants for the exhibition:');
    for (const [plant, data] of plants) {
        let averageRating = data.ratings.length > 0 ? calculateAverageRating(data.ratings) : '0.00';
        console.log(`- ${plant}; Rarity: ${data.rarity}; Rating: ${averageRating}`);
    }
}

// Test cases
plantExhibition([
    '3',
    'Arnoldii<->4',
    'Woodii<->7',
    'Welwitschia<->2',
    'Rate: Woodii - 10',
    'Rate: Welwitschia - 7',
    'Rate: Arnoldii - 3',
    'Rate: Woodii - 5',
    'Update: Woodii - 5',
    'Reset: Arnoldii',
    'Exhibition'
]);

plantExhibition([
    '2',
    'Candelabra<->10',
    'Oahu<->10',
    'Rate: Oahu - 7',
    'Rate: Candelabra - 6',
    'Exhibition'
]);