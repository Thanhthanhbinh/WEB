
function add1(){
  inp=document.getElementById("Name").value;
  test=test+2;
};
function add2(){
  inp1=document.getElementById("exampleFormControlTextarea1").value;
  test=test+1;
};
function good(){
  var aa=document.getElementById("Good");
  if(once==0){
    rate="Good";
    once=1;
  };
};
function bad(){
  var aa=document.getElementById("Bad");
  if(once==0){
    rate="Bad";
    once=1;
};
};
function ok(){
  var aa=document.getElementById("OK");
  if(once==0){
    rate="OK";
    once=1;
  };
}; 
function confirm(){
  if(test==3 && once==1){
  alert("INFORMATION RECIEVED");
  var block=document.getElementById("block");
  block.style.display="none";
  var block1=document.getElementById("block-show");
  block1.style.display="block";
  test=0;
  var obj={
    name:inp,
    comment:inp1,
    rate:rate,
  };
  arr.push(obj);
}else{
  alert("NO INFROMATION");
};
};