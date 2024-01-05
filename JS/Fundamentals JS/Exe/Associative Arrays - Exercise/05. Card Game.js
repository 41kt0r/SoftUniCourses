function cardGame(input) {
    let playerHandValues = new Map();
  
    for (const line of input) {
      const [person, cards] = line.split(': ');
      const personCards = cards.split(', ');
  
      if (!playerHandValues.has(person)) {
        playerHandValues.set(person, []);
      }
  
      let currentCards = playerHandValues.get(person);
      for (const card of personCards) {
        if (!currentCards.includes(card)) {
          currentCards.push(card);
        }
      }
    }
  
    let result = new Map();
    for (const [person, cards] of playerHandValues) {
      let handValue = 0;
      for (const card of cards) {
        const power = card.slice(0, -1);
        const type = card.slice(-1);
        const powerValues = {
          '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10,
          'J': 11, 'Q': 12, 'K': 13, 'A': 14
        };
        const typeMultipliers = { 'S': 4, 'H': 3, 'D': 2, 'C': 1 };
        handValue += powerValues[power] * typeMultipliers[type];
      }
      result.set(person, handValue);
    }
  
    for (let [person, handValue] of result) {
        console.log(`${person}: ${handValue}`)
    };
}
cardGame([ 'Peter: 2C, 4H, 9H, AS, QS', 'Tomas: 3H, 10S, JC, KD, 5S, 10S', 'Andrea: QH, QC, QS, QD', 'Tomas: 6H, 7S, KC, KD, 5S, 10C', 'Andrea: QH, QC, JS, JD, JC', 'Peter: JD, JD, JD, JD, JD, JD' ]);