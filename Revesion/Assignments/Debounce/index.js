let cnt = 0;
function getData(){
    console.log("doing task", cnt++)
}

function debounce(fun, delay){

    let timerId;
    return function(){
        let args = arguments;
        let context = this;
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            getData.call(context,args);
        }, delay);
    }
  
}

const goodfun = debounce(getData, 300);


// Toggle button to get color on div
let flg = false;
function getColor() {
    // console.log(event.target);
   let container = document.getElementById("container");

   flg = !flg;
   if(flg){
    container.style.backgroundColor = 'salmon';
   }else{
    container.style.backgroundColor = 'white';
   }
    
    // 👇️ change background color
    // event.target.style.backgroundColor = 'salmon';
  
    // 👇️ optionally change text color
    // event.target.style.color = 'white';
  }