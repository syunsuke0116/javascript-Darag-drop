window.onload = function(){

const fill = document.querySelector(".fill");
const emptys = document.querySelectorAll(".empty");
console.log(fill);

function dragStart(){
    console.log("start")
   fill.className += " hold";
   setTimeout(() => {
    fill.className = "invisible";
   },0); 
}

function dragEnd(){
    console.log("end");
  fill.className = "fill";
}


function dragOver(e){
    e.preventDefault();
    console.log("over");
};

function dragEnter(){
    console.log("enter");
    this.className += " hoverd";
};

function dragLeave(){
    console.log("leave");
    this.className = "empty";
};

function dragDrop(){
    console.log("drop");
    this.className = "empty";
    this.appendChild(fill);
};

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

for(const empty of emptys){
   empty.addEventListener("dragover", dragOver);
   empty.addEventListener("dragenter", dragEnter);
   empty.addEventListener("dragleave", dragLeave);
   empty.addEventListener("drop", dragDrop);
};

};
