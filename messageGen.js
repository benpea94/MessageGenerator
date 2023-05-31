const generateRandNum = num => {
    return Math.floor(Math.random() * num)
};

const randSelections = {
    oneLiners : ["My wife told me to stop impersonating a flamingo. I had to put my foot down.", "I failed maths so many times at school, I can’t even count.", " I was wondering why the frisbee kept getting bigger and bigger, but then it hit me.", " When life gives you melons, you might be dyslexic.", "Pretentious? Moi?"],
    songOutput : ["Everybody Dance", "Thriller", "One Dance", "Back in Black", "Here Comes The Sun"],
    movieOuput : ["Goal!", "Anchorman", "Gladiator", "Goodfellas", "Mean Girls"],
};

let entertainmentSelection = [];

for (let item in randSelections) {
    let optionId = generateRandNum(randSelections[item].length)

    switch(item) {
        case 'oneLiners':
            entertainmentSelection.push(`Your random joke: ${randSelections[item][optionId]}`)
            break
        case 'songOutput':
            entertainmentSelection.push(`Your random song: ${randSelections[item][optionId]}`)
        case 'movieOutput':
            entertainmentSelection.push(`Your random movie: ${randSelections[item][optionId]}`)
        default:
            entertainmentSelection.push("INVALID INFORMATION")

    }
};

let formattedMessage = entertainmentSelection.join('\n');
console.log(formattedMessage);

