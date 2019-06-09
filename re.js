
function add1(){
  var inp=document.getElementById("Name").value;
  test=test+2;
};
function add2(){
  var inp1=document.getElementById("Comment").value;
  test=test+1;
};
  
function confirm(){
  if(test==3){
  alert("info recieved");
  var block=document.getElementById("block");
  block.style.display="none";
  test=0;
  var obj={
    name:inp,
    comment:inp1,
  };
  arr.push(obj);
}else{
  alert("info not recieved");
}
};
