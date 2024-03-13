let quotes = ["You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one. -John Lennon",
"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. -James Cameron",
"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. -Oprah Winfrey",
"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. -Steve Jobs",
"The way to get started is to quit talking and begin doing. -Walt Disney",
"The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela",
"Well done is better than well said. -Benjamin Franklin",
"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that. -Martin Luther King Jr.",
"Many of life's failures are people who did not realize how close they were to success when they gave up. -Thomas A. Edison",
"You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one. -John Lennon",
"If you want to make your dreams come true, the first thing you have to do is wake up. -J.M. Power"
]


let qouteContainer = document.querySelector(".quotecontainer");
const div = document.createElement('div')
qouteContainer.appendChild(div);


// for (a of quotes){
// div.innerHTML = `<p> ${a}  <br> </p>`;
// }


function ShowQuote(){
    var Index = Math.floor(Math.random() * 6);
    div.innerHTML = quotes[Index];
    div.setAttribute('class', 'quote')
}

  


