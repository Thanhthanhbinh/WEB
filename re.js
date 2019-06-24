
function add1(){
  inp=document.getElementById("Name").value;
  test=test+2;
};
function add2(){
  inp1=document.getElementById("exampleFormControlTextarea1").value;
  test=test+1;
};
function good(){
  rate="Good";
  once=1;
};
function bad(){
  rate="Bad";
  once=1;

};
function ok(){
  rate="OK";
  once=1;
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
function change(){
  btn=document.getElementById('review');
  if (times%2==0){
    btn.innerHTML='<i class="fas fa-chevron-up"></i>';
    times=times+1;
  }
  else {
    btn.innerHTML='<i class="fas fa-chevron-down"></i>';
    times=times+1;
  }
};
function changeG() {
  var a=document.getElementById('G1');
  a.style.opacity="1";
  a.style.transition="opacity 2s";
  var a=document.getElementById('G2');
  a.style.opacity="1";
  a.style.transition="opacity 2s";
}
function changeG1() {
  var a=document.getElementById('G1');
  a.style.opacity="0";
  a.style.transition="opacity 2s";
  var a=document.getElementById('G2');
  a.style.opacity="0";
  a.style.transition="opacity 2s";
}
function Larrows_h() {
  var a=document.getElementById('left-a');
  a.style.opacity="1";
  a.style.transition="opacity 1s";
  a.style.marginLeft="30px";
  a.style.transition="margin-left 1s";
}
function Larrows_u() {
  var a=document.getElementById('left-a');
  a.style.opacity="0.1";
  a.style.transition="opacity 1s";
  a.style.marginLeft="20px";
  a.style.transition="margin-left 1s";
}
function Rarrows_h() {
  var a=document.getElementById('right-a');
  a.style.opacity="1";
  a.style.transition="opacity 1s";
  a.style.marginRight="30px";
  a.style.transition="margin-right 1s";
}
function Rarrows_u() {
  var a=document.getElementById('right-a');
  a.style.opacity="0.1";
  a.style.transition="opacity 1s";
  a.style.marginRight="20px";
  a.style.transition="margin-right 1s";
}
function move(){
  var a=document.getElementById('img3');
  a.style.left="0";
  a.style.transition="left 2s";
}
function opacityC() {
  var a=document.getElementById('img');
  a.style.opacity="0.5";
  a.style.transition="opacity 2s";
}

