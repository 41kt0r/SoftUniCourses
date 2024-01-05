function solve(input) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;

        }
    }

    let songs = [];
    let numberOfSongs = input.shift();
    let typeOfSongs = input.pop();

    for (let i = 0; i < numberOfSongs; i++) {
        let [typeList, name, time] = input[i].split('_');
        let song = new Song(typeList, name, time);
        songs.push(song);
    }

    if (typeOfSongs === "all") {
        songs.forEach((i) => console.log(i.name));
    }
    else {
        let filteredSong = songs.filter((i) => i.typeList === typeOfSongs);
        filteredSong.forEach((i) => console.log(i.name));
    }
}
solve([3, 'favourite_DownTown_3:14', 'favourite_Kiss_4:16', 'favourite_Smooth Criminal_4:01', 'favourite'])