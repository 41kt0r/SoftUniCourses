class FootballTeam {
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }

    findPlayer(name) {
        return this.invitedPlayers.find(p => p.name === name);
    }

    newAdditions(footballPlayers) {
        footballPlayers.map(p => {
            let [name, age, playerValue] = p.split('/');
            age = Number(age);
            playerValue = Number(playerValue);

            let player = this.findPlayer(name);
            if (player) {
                if (player.playerValue < playerValue) {
                    player.playerValue = playerValue;
                }
            } else {
                this.invitedPlayers.push({ name, age, playerValue });
            }
        });

        let result = this.invitedPlayers.map(p => p.name);
        return `You successfully invite ${result.join(', ')}.`;
    }

    signContract(selectedPlayer) {
        let [name, playerOffer] = selectedPlayer.split('/');
        let currentPlayer = this.findPlayer(name);

        if (!currentPlayer) {
            throw new Error(`${name} is not invited to the selection list!`);
        }

        if (currentPlayer.playerValue > playerOffer) {
            let priceDifference = Math.abs(playerOffer - currentPlayer.playerValue);
            throw new Error(
                `The manager's offer is not enough to sign a contract with ${name}, ${priceDifference} million more are needed to sign the contract!`
            );
        }

        currentPlayer.playerValue = 'Bought';
        return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`;
    }

    ageLimit(name, age) {
        let currentPlayer = this.findPlayer(name);

        if (!currentPlayer) {
            throw new Error(`${name} is not invited to the selection list!`);
        }

        if (currentPlayer.age >= age) {
            return `${name} is above the age limit.`;
        }

        if (age - currentPlayer.age <= 5) {
            let ageDifference = age - currentPlayer.age;
            return `${name} will sign a contract for ${ageDifference} years with ${this.clubName} in ${this.country}!`;
        } else if (age - currentPlayer.age > 5) {
            return `${name} will sign a full 5-year contract with ${this.clubName} in ${this.country}.`;
        }
    }

    transferWindowResult() {
        let buffer = 'Players list:';
        this.invitedPlayers.forEach(pl => {
            buffer += `\nPlayer ${pl.name}-${pl.playerValue}`;
        });
        return buffer;
    }
}

let fTeam = new FootballTeam('Barcelona', 'Spain');

console.log(fTeam.newAdditions(['Kylian Mbappé/23/160', 'Lionel Messi/35/50', 'Pau Torres/25/52']));
console.log(fTeam.signContract('Lionel Messi/60'));
console.log(fTeam.signContract('Kylian Mbappé/240'));
console.log(fTeam.signContract('Barbukov/10'));
