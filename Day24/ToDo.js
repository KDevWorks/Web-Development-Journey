let btn = document.querySelector('button');
let ul= document.querySelector('ul');
let input= document.querySelector('input');

btn.addEventListener("click", function(){
    let item = document.createElement('li');
    item.innerText = input.value;
    ul.appendChild(item);
    input.value = "";
    // console.log("Clicked");
    // console.log(item.innerText);

    let dlbtn = document.createElement('button');
    dlbtn.innerText = "Delete Task";
    dlbtn.classList.add('delete');
    // console.log(dlbtn);
    item.append(dlbtn);
})

ul.addEventListener('click', function(event){
//   console.log("clicked"); 
//   console.log(event.target.nodeName); 

  if(event.target.nodeName == "BUTTON"){
    // console.log("delete");
    let deltask = event.target.parentElement;
    deltask.remove();
    console.log(deltask);
}
//   else{
//     console.log("don't delete");
//   }
  
}
);



// let delbt = document.querySelectorAll('.delete');
// for(bt of delbt){
//     bt.addEventListener('click', function(){
//         let par = this.parentElement;
//         par.remove();
//         // console.log(par);
        
//     })
// }