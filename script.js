var wrapperEle = document.body.querySelector(".wrapper");
var data =["dog","fish","cat", "shark","cat","dog"];

for(var i=0; i<6; i++){
 create(data[i]);
}

function create(str){
   var ele = document.createElement("div");
  if(str==="dog"){
   ele.innerHTML="borf borf";
  }else if(str=="fish"){
    ele.innerHTML= " I'm an Animal ";
  }else if(str=="cat"){
    ele.innerHTML="i'm a cat";
  }else if(str=="shark"){
    ele.innerHTML=" I'm an Animal";
  }else{
    ele.innerHTML=str+ " I'm an animal ";
  }
  wrapperEle.appendChild(ele);
}