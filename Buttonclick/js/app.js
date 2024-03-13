
// Butona klik edəndə səhifənin arxa fon rənginin dəyişmə funksiyası

let clickcount = 0
function setColor(){
  clickcount++;
  if( clickcount == 1){
    document.body.setAttribute("style",  "background-color:red")
  }
  else if( clickcount == 2){
    document.body.setAttribute("style",  "background-color: blue")
    clickcount = 0
  }
 
}


//  İnputdan daxil olunan məlumatların göstərilməsi funksiyası

function ShowFullName(){
    let name = document.querySelector('.name').value;
    let surname = document.querySelector('.surname').value;
    let container = document.querySelector('.container');
container.innerHTML = `${name}  ${surname}`
console.log(name+surname)
}

