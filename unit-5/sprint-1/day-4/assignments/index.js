
let items=[
    {
        name: "Food-1",
        img:"https://b.zmtcdn.com/data/pictures/7/19889097/165a25a94df3d0722510d92c927f9640_o2_featured_v2.jpg",
        id:1, 
       },
    {
        name: "Food-2",
        img:"https://b.zmtcdn.com/data/pictures/9/19883359/142b0a7d35b9794ce5fd3bc88477a0bb_o2_featured_v2.jpg",
        id:2,
    },
    {
        name: "Food-3",
        img:"https://b.zmtcdn.com/data/pictures/6/19883486/a591009127b6fba9bc326cd5422b91d0_o2_featured_v2.jpg",
        id:3,
    },
    {
        name: "Food-4",
        img:"https://b.zmtcdn.com/data/pictures/4/19891144/8b9037baefd1892aee934afb40c62771_o2_featured_v2.jpg",
        id:4,
    },
    {
        name: "Food-5",
        img:"https://b.zmtcdn.com/data/pictures/3/19891093/cab2466aa5a389cd71de13daa3411ecd_o2_featured_v2.jpg",
        id:5,
    },
    {
        name: "Food-6",
        img:"https://b.zmtcdn.com/data/pictures/4/19891144/8b9037baefd1892aee934afb40c62771_o2_featured_v2.jpg",
        id:6,
    },
    {
        name: "Food-7",
        img:"https://b.zmtcdn.com/data/pictures/4/19891024/fa61fb749a5e9ae2defe56aa6c43942b_o2_featured_v2.jpg",
        id:7,
    },
    {
        name: "Food-8",
        img:"https://b.zmtcdn.com/data/pictures/7/19106717/b5594964bbb8613bfdd9885680d5f837_o2_featured_v2.jpg?output-format=webp",
        id:8,
    },
   
];

display_items();
  let checked_id;

function display_items(){
items.map((ele)=>{
    let cont=document.getElementById("container");

    let box_div = document.createElement("div");
    let f_img=document.createElement("img");
    f_img.setAttribute("src" , ele.img);
    let name = document.createElement("p");
     name.innerText=ele.name;
    let label = document.createElement("label");
    label.innerHTML="Check This " + `<input type="checkbox" class="checkbox" value=${ele.id}>`;
    box_div.append(f_img,name,label);
    cont.append(box_div);
});
}

let checkboxes=document.querySelectorAll(".checkbox");
    for(let checkbox of checkboxes){
        checkbox.addEventListener("click",function(){
         if(this.checked==true){
            checked_id=this.value;
         }
        });
    }
 let order_btn = document.querySelector(".btn");
    order_btn.addEventListener("click", function (){
        setTimeout(function (){
            show_popups(checked_id);  
    
    },2000);
 });
/*   mypromise
.then(function (res){

})
.catch(function (err){
    console.log(err);
})
*/
function show_popups(checked_id){
    // console.log("pop-up-fun")
    let bg_modal=document.querySelector(".bg-modal");
    bg_modal.style.display = "flex";
    let checked_item=items.filter((el)=>{
       if(checked_id==el.id){
        return el.img;
       };
    })
    let selected_food_img=document.createElement("img");
    selected_food_img.setAttribute("src",checked_item[0].img);      
    let pop_up_div = document.getElementById("pop-up_box");
    let confirm_btn=document.createElement("button");
    confirm_btn.setAttribute("id","confirm_btn");
    confirm_btn.innerText="Confirm Order"+checked_item[0].id;
    pop_up_div.append(selected_food_img,confirm_btn);

    confirm_btn.addEventListener("click",function (){
        let order_id=document.getElementById("order_id");
        let order_name=document.getElementById("order_name");
        order_id.innerText="Order ID : 2345-"+checked_item[0].id;
        order_name.innerText="Product Name :"+checked_item[0].name;
    let bg_modal=document.querySelector(".bg-modal");
    bg_modal.style.display = "none"; 
    let bg_modal_2=document.querySelector(".bg-modal-2");
    bg_modal_2.style.display = "flex";
});

}

document.querySelector(".cross").addEventListener("click",function (){
    let bg_modal=document.querySelector(".bg-modal");
    bg_modal.style.display = "none"; 
});

