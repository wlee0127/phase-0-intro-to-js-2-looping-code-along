/*const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);
*/
//const array = ["teddy bear", "drone", "doll"];

function writeCards(array,event){
    for (let i = 0; i <= array.length-1; i++) {
        //console.log(array.length-1);
        //console.log(array[2])
    console.log(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
    //debugger;
  }


}
//writeCards(["Charlie", "Samip", "Ali"], "birthday")

//"Thank you, (Charlie), for the wonderful (birthday) gift!"

function countDown(number){
    let counter = number;
    while (counter >= 0){
        console.log(counter);
        counter--;
    }
}

