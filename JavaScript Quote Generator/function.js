// variables
let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
    {
        quote: `"Start writing, no matter what. The water does not flow until the faucet is turned on."`,
        person: `Louis L’Amour`
    },
    {
        quote: `"Get it down. Take chances. It may be bad, but it's the only way you can do anything really good."`,
        person: `William Faulkner`
    },
    {
        quote: `"You don’t start out writing good stuff. You start out writing crap and thinking it’s good stuff, and then gradually you get better at it."`,
        person: `Octavia E. Butler`
    },
    {
        quote: `"You can always edit a bad page. You can’t edit a blank page`,
        person: `Jodi Picoult`
    },
    {
        quote: `"First, find out what your hero wants, then just follow him!"`,
        person: `Ray Bradbury`
    },
    {
        quote: `"Half my life is an act of revision."`,
        person: `John Irving`
    },
    {
        quote: `"If you have no critics, you’ll likely have no success."`,
        person: `Malcolm X`
    },
    {
        quote: `"Imagination is everything. It is the preview of life’s coming attractions."`,
        person: `Albert Einstein`
    },
    {
        quote: `"A bird doesn’t sing because it has an answer; it sings because it has a song."`,
        person: `Maya Angelou`
    },
    {
        quote: `"Ignore all hatred and criticism. Live for what you create, and die protecting it."`,
        person: `Lady Gaga`
    },
    {
        quote: `"Difficulties mastered are opportunities won."`,
        person: `Winston Churchill`
    }
];

btn.addEventListener('click', function() {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})