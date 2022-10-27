/* Imports */
const submitBtn = document.getElementById('submit');
const resetBtn = document.getAnimations('reset');
const promptSection = document.getElementById('prompt');
const fortuneSection = document.getElementById('fortune');
const answerP = document.getElementById('answer');
/* Get DOM Elements */

/* State */
const answers = [
    'Yes, definitely',
    'It is certain',
    'It is decidedly so',
    'Without a doubt',
    'You may rely on it',
    'As I see it, yes',
    'Most Likely',
    'Outlook good',
    'Signs point to yes',
    'Reply hazy, try again',
    'Ask again later',
    'Better not tell you now',
    'Cannot predict now',
    'Concentrate and ask again',
    'Don’t count on it',
    'My reply is no',
    'My sources say no',
    'Outlook not so good',
    'Very doubtful',
];
/* Events */

function toggleSections() {
    promptSection.classList.toggle('hide');
    fortuneSection.classList.toggle('hide');
}
submitBtn.addEventListener('click', () => {
    //console.log('clicking submit');
    toggleSections();
    //add the hide class to prompt
    //generate a random number between 0 and the length
    const randInt = Math.floor(Math.random() * answers.length);
    const randomChoice = answers[randInt];

    answerP.textContent = randomChoice;
});

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
