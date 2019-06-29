
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
function changeGa() {
  var a=document.getElementById('G1');
  a.style.opacity="1";
  a.style.transition="opacity 2s";
  var a=document.getElementById('G2');
  a.style.opacity="1";
  a.style.transition="opacity 2s";
}
function changeG1a() {
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
//LIKE DESTINATIONS FUNCS
//hover
function opacityC() {
  var pic=document.getElementsByClassName('slide');
  var blank_h=document.getElementById('heart');
  var black_h=document.getElementById('heart1');
  for (c=0;c<pic.length;c++){//TURN EVERY PICS VISIBLE OR NOT
    pic[c].style.opacity="0.5";
    pic[c].style.transition="opacity 1s";
  }
      blank_h.style.display="block";
      black_h.style.display='none';

}
//not hover
function opacityD() {
  var pic=document.getElementsByClassName('slide');
  var blank_h=document.getElementById('heart');
  var black_h=document.getElementById('heart1');
  for (c=0;c<pic.length;c++){//APPLIES TO ALL PICS VISIBLE OR NOT
    pic[c].style.opacity="1";
    pic[c].style.transition="opacity 1s";
  }
  //HIDE BOTH TYPES OF HEART GRAPHICS
  black_h.style.display="none";
  blank_h.style.display="none";
  
}
//click on heart
function changeG1() {
  var blank_h=document.getElementById('heart');
  var black_h=document.getElementById('heart1');
    black_h.style.display="none";
    blank_h.style.display="block";
    var index=time.indexOf(i);
    if (index!=-1){
      time.splice(index,1);
    }
    //show blank graphic
    //remove pic from time array
} 
//click on heart 1
function changeG() {//SELECTED
  var blank_h=document.getElementById('heart');
  var black_h=document.getElementById('heart1');
  blank_h.style.display="none";
  black_h.style.display="block";
  var index=time.indexOf(i);
  if (index==-1){
    time[time.length]=i;
  }
    //show black graphic
    //add pic to time array
}
//slide to the right
function slideR() {
  var pic=document.getElementsByClassName('slide');
  if (i<pic.length) {//if the slide was not the last slide
    pic[i+1].style.display="block";//show next slide
    pic[i].style.display="none";// hide current slide
    heart_times=2;//reset heart_times
    i++;
  } 
}
//slide to the left
function slideL() {
  var pic=document.getElementsByClassName('slide');
  if (i>0) {
    pic[i-1].style.display="block";//show previous slide
    pic[i].style.display="none";//hide current slide
    heart_times=2;//reset heart_times
    i--;
  } 
}
function show_top() {
  for (k=0; k<time.length; k++) {
    if (time[k]==0) {
      england_r++;
    } else if (time[k]==1) {
      russia_r++;
    } else if (time[k]==2) {
      tokyo_r++
    } else if (time[k]==3){
      newYork_r++;
    } else if (time[k]==4) {
      hanoi_r++;
    } else if (time[k]==5) {
      france_r++;
    }
  }
  for (h=0; h<max.length; h++) {
    max[h]=ratings[1];
    for (k=0; k<ratings.length; k++) {
      if (max[h]<ratings[k] && ratings[k]!=max[h-1]) {
        max[h]=ratings[k];
      }
  }
}
  for (h=0; h<ratings.length; h++) {
    for (k=0; k<max.length; k++) {
      if (max[k]==ratings[h]) {
        if(h==0) {
          document.getElementById('england').style.display="block";
        } else if (h==1) {
          document.getElementById('russia').style.display="block";
        } else if (h==2) {
          document.getElementById('tokyo').style.display="block";
        } else if (h==3) {
          document.getElementById('new york').style.display="block";
        } else if (h==4) {
          document.getElementById('hanoi').style.display="block";
        } else if (h==5) {
          document.getElementById('france').style.display="block";
        }
      }
    }
  }
}
function quiz_selection () {

}
