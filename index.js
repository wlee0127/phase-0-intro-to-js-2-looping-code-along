

function writeCards(array,event){
    const greetings = [];
    for (let i = 0; i <= array.length-1; i++) {
        //console.log(array.length-1);
        //console.log(array[2])
        greetings[i]=`Thank you, ${array[i]}, for the wonderful ${event} gift!`;
    //return greetings;
    //debugger;
  }
  //console.log(greetings);
return greetings;

}
//writeCards(["Guadalupe", "Ollie", "Aki"], "surprise")


function countDown(number){
    let counter = number;
    while (counter >= 0){
        console.log(counter);
        counter--;
    }
}

