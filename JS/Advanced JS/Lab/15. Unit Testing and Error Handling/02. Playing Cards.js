function createCard(face, suit) {
    const cardFaces = [
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "J",
        "Q",
        "K",
        "A"
    ];

    const cardSuites = {
        S: '\u2660',
        H: '\u2665',
        D: '\u2666',
        C: '\u2663',
    }

    const isCardFaceValid = cardFaces.includes(face);
    const isCardSuitValid = Object.keys(cardSuites).includes(suit);

    if (isCardFaceValid && isCardSuitValid) {
        return {
            face,
            suit,
            toString() {
                return(`${face}${cardSuites[suit]}`)
            }
        }
    } else {
        throw new Error('Error');
    }
}

const card = createCard('10', 'H');
card.toString();