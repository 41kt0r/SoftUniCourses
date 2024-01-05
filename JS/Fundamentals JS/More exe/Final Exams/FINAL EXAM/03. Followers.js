function solve(input) {
    let result = new Map();
    let followers = 0;

    for (const line of input) {
        if (line === "Log out") {
            console.log(`${followers} followers`);
            for (const [username, [countOfLikes, countOfComments]] of result) {
                console.log(`${username}: ${countOfLikes + countOfComments}`);
            }
            break;
        }
        let tokens = line.split(": ");
        let username = tokens[1];

        if (line.includes("New follower")) {
            if (!result.has(username)) {
                result.set(username, [0, 0]);
                followers++;
            }
        } else if (line.includes("Like")) {
            let countOfLikes = +tokens[2];
            if (result.has(username)) {
                result.get(username)[0] += countOfLikes;
            } else {
                result.set(username, [countOfLikes, 0]);
                followers++;
            }
        } else if (line.includes("Comment")) {
            if (!result.has(username)) {
                result.set(username, [0, 1]);
                followers++;
            } else {
                result.get(username)[1] += 1;
            }
        } else if (line.includes("Blocked")) {
            if (result.has(username)) {
                result.delete(username);
                followers -= 1;
            } else {
                console.log(`${username} doesn't exist.`);
            }
        }
    }


}

solve(["Like: Katy: 3",

"Comment: Katy",

"New follower: Bob",

"Blocked: Bob",

"New follower: Amy",

"Like: Amy: 4",

"Log out"]);
