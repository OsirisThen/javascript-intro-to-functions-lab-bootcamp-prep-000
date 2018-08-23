
function shout(string) {

  let u= string.toUpperCase();
  return u;
}

function whisper(string) {

  let l= string.toLowerCase();
  return l;
}

function logShout(string) {
  var uppercase = string;
  if(string.toUpperCase() === string){
      console.log(string)
  }
}

function logWhisper(string) {
  var lowercase = string;
  if(string.toLowerCase() === string){
      console.log(string)
  }

}


function sayHiToGrandma(string) {
  let result= '';
  let granddother =  "I love you, Grandma."

  if(string.toUpperCase() === string){
    result= "YES INDEED!";
  }

  if(string.toLowerCase() === string){
    result= 'I can\'t hear you!';
  }

  if(granddother === string){
    result= "I love you, too."
  }

  return result;
}
