
let products=JSON.parse(localStorage.getItem("cart"));

make_data_todisplay()
function make_data_todisplay(){
    let arry=[];
    products.map((ele)=>{
    let prod_obj={
      image_url:ele.image_url,
      name:ele.name,
      price:ele.price,
      quant:1,
      cart_price:function(){
        return this.quant*this.price;
      }
    }
    arry.push(prod_obj);
  });
//   localStorage.setItem("cart",JSON.stringify(arry));
  console.log(arry)
  display_cart(arry);
  localStorage.setItem("cart",JSON.stringify(arry));
}

function display_cart(arry){
    let heading=document.getElementById("heading");
    if(!products){
        heading.innerText="Cart is Empty, Please add items";
    }else{
        arry.map((ele)=>{
    let box=document.createElement("div");
    let img=document.createElement("img");
    img.setAttribute("src",ele.image_url);
    let name=document.createElement("p");
    name.innerText=ele.name;
    let price_p=document.createElement("p");
    price_p.setAttribute("id","price_p")
    price_p.innerText=ele.price;
    let quantity_div = document.createElement("div");
    quantity_div.setAttribute("class","quantity_div")
    let increase = document.createElement("button");
    increase.innerText="+";
    let deccrease = document.createElement("button");
    deccrease.innerText="-";
    quantity_div.append(increase,deccrease)
    let Quantity=document.createElement("p");
    let quntity=1
    Quantity.innerText=quntity;
    let fix_prd_price=ele.price;
    increase.addEventListener("click",function(){
     
     ele.quant++;

       /*
        fix_prd_price=parseInt(fix_prd_price);
        
        ele.price= ele.price/quntity;
        quntity++;
        Quantity.innerText=quntity;
        ele.pric=(ele.price * quntity);*/
      
    });
    deccrease.addEventListener("click",function(){
        ele.quant--;
        /*
        if(quntity>1) quntity--;
        Quantity.innerText=quntity;
        let pr=parseInt(fix_prd_price);
        price_p.innerText=(pr * quntity);*/
    });
    let tot_price=document.getElementById("total_price");
    let tot_quantity=document.getElementById("total_quantity");
    let contents=document.getElementById("contents");
    box.append(img,name,quantity_div,Quantity,price_p)
    contents.append(box);
    // container.append(contents);
    tot_price.innerText="Total Price = "+calculate_price();
    tot_quantity.innerText="Total Quantity = "+calculate_quan();

    //console.log(products)
    function calculate_price(){   

        // let out= products.reduce(function(acc,cur){
        //     console.log(cur.cart_price  )
        //     let pr=parseInt(cur.cart_price);
        //   return acc+pr;
        // },0); 

        let out= products.reduce(function(acc,cur){
           // let price_p = document.getElementById("price_p").value;
        let pr=parseInt(cur.cart_price());
         return acc+pr;
       },0); 
       return out;
     }

  });
}
 
  function calculate_quan(){
    let out= products.reduce(function(acc,cur){
        let quan=parseInt(cur.quan);
          return acc+quan;
        },0);
        return out;
  }
}

