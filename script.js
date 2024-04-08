const randomQuoteGenerator = () => {
    let messageArray = ["It takes courage to grow up and become who you really are.", "Your self-worth is determined by you. You dont have to depend on someone telling you who you are.",
    "Nothing is impossible. The word itself says I'm possible!", "Champions keep playing until they get it right.", "Believe you can and you're halfway there."];
    let i = Math.floor(Math.random() * messageArray.length);
    return messageArray[i];
}


const printMotivationalQuote = () => {
    console.log(randomQuoteGenerator());
}

printMotivationalQuote();