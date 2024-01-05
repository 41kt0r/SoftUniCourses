function Solve(input) {

    let inventory = [];

    for (const line of input) {

        let [name, level, item] = line.split(' / ');

        let hero = {
            name: name,
            level: Number(level),
            item: item
        };

        inventory.push(hero);

    }

    inventory.sort((a, b) => a.level - b.level)

    for (const heroElement of inventory) {
        console.log(`Hero: ${heroElement.name}
level => ${heroElement.level}
items => ${heroElement.item}`);
    }
}
Solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);
console.log("-------");
Solve([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
]);