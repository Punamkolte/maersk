var content = [{num:1, colour:'#6F98A8'},
                {num:2, colour:'#2B8EAD'},
                {num:3, colour:'#2F454E'},
                {num:4, colour:'#2B8EAD'},
                {num:5, colour:'#2F454E'},
                {num:6, colour:'#BFBFBF'},
                {num:7, colour:'#BFBFBF'},
                {num:8, colour:'#6F98A8'},
                {num:9, colour:'#2F454E'}];


var windowSize = window.matchMedia("(max-width: 500px)");
function changeLayout(){
    if(windowSize.matches){
        document.getElementById("container").style.gridTemplateColumns = 'minmax(0, 1fr)';
    }else{
        document.getElementById("container").style.gridTemplateColumns = 'repeat(3, 1fr)';
    }
}
changeLayout();
window.addEventListener('resize',changeLayout);
            

function boxes(data){
    let container = document.getElementById("container");

    for (var i = 0; i < data.length; i++) {
        let box = document.createElement("div");
        container.appendChild(box);
        let text = document.createTextNode(data[i].num);
        box.appendChild(text);
        box.style.backgroundColor = windowSize.matches ? '#EFEFEF' : data[i].colour ;
        box.style.borderLeft = windowSize.matches ? '20px solid '+data[i].colour : '' ;
        
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