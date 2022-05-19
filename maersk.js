var content = [{num:1, colour:'#6F98A8'},
{num:2, colour:'#2B8EAD'},
  {num:3, colour:'#2F454E'},
  {num:4, colour:'#2B8EAD'},
  {num:5, colour:'#2F454E'},
  {num:6, colour:'#BFBFBF'},
  {num:7, colour:'#BFBFBF'},
  {num:8, colour:'#6F98A8'},
  {num:9, colour:'#2F454E'}];

function boxes(data){
var container = document.getElementById("container");

for (var i = 0; i < data.length; i++) {
let box = document.createElement("div");
container.appendChild(box);
let text = document.createTextNode(data[i].num);
box.appendChild(text);
box.style.backgroundColor = data[i].colour;
box.style.color = '#FFFFFF'
box.style.textAlign = 'center';
box.style.fontSize = 'x-large';

}
}

function sortNumber(){
document.getElementById("container").innerHTML = "";
let sortData = this.content.sort((a,b)=> a.num - b.num); 
boxes(sortData)
}

function shuffleNumber(){
document.getElementById("container").innerHTML = "";
let shuffleData = this.content.sort( () => Math.random() - 0.5) 
boxes(shuffleData)
}

boxes(this.content)