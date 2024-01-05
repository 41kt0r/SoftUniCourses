    function friendList(data) {
        let friends = data.shift().split(', ');
        let blacklistedCount = 0;
        let lostCount = 0;
    
        for (let i = 0; i < data.length; i++) {
        if (data[i] === 'Report') {
            break;
        }
    
        let [command, frienindex] = data[i].split(' ');
    
        if (command === 'Blacklist') {
            let index = friends.indexOf(frienindex);
            if (index !== -1) {
            friends[index] = 'Blacklisted';
            console.log(`${frienindex} was blacklisted.`);
            blacklistedCount++;
            } else {
            console.log(`${frienindex} was not found.`);
            }
        } else if (command === 'Error') {
            let index = Number(frienindex);
            if (index >= 0 && index < friends.length) {
            if (friends[index] !== 'Lost' && friends[index] !== 'Blacklisted') {
                
                console.log(`${friends[index]} was lost due to an error.`);
                friends[index] = 'Lost';
                lostCount++;
            }
            }
        } else if (command === 'Change') {
            let index = Number(frienindex);
            let newName = data[i].split(' ')[2];
            if (index >= 0 && index < friends.length) {
            console.log(`${friends[index]} changed his username to ${newName}.`);
            friends[index] = newName;
            }
        }
        }
    
        console.log(`Blacklisted names: ${blacklistedCount}`);
        console.log(`Lost names: ${lostCount}`);
        console.log(friends.join(' '));
    }
  friendList((["Mike, John, Eddie, William", "Error 3", "Error 3", "Change 0 Mike123", "Report"]));
//   // Example usage
//   let data = [
//     'John, Tom, Jane',
//     'Blacklist Tom',
//     'Error 0',
//     'Change 2 Mike',
//     'Report'
//   ];
//   friendList(data);