const generateRandNum = num => {
    return Math.floor(Math.random() * num)
};

const randSelections = {
    oneLiners : ["My wife told me to stop impersonating a flamingo. I had to put my foot down.", "I failed maths so many times at school, I can’t even count.", " I was wondering why the frisbee kept getting bigger and bigger, but then it hit me.", " When life gives you melons, you might be dyslexic.", "Pretentious? Moi?"],
    songOutput : ["Everybody Dance", "Thriller", "One Dance", "Back in Black", "Here Comes The Sun"],
    movieOutput : ["Goal!", "Anchorman", "Gladiator", "Goodfellas", "Mean Girls"],
};

let entertainmentSelection = [];

for (let arr in randSelections) {
    let optionId = generateRandNum(randSelections[arr].length)

    switch(arr) {
        case 'oneLiners':
            entertainmentSelection.push(`Your random joke: ${randSelections[arr][optionId]}.`)
            break
        case 'songOutput':
            entertainmentSelection.push(`Your random song: ${randSelections[arr][optionId]}.`)
            break
        case 'movieOutput':
            entertainmentSelection.push(`Your random movie: ${randSelections[arr][optionId]}.`)
            break
        default:
            entertainmentSelection.push("INVALID INFORMATION")
            break
    }
};

let formattedMessage = entertainmentSelection.join('\n');
console.log(formattedMessage);

