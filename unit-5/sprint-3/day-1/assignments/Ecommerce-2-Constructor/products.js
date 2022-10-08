
 
 display();
 function add_id(products_list) {
     let count = 1;
     products_list.forEach((el) => {
         el.id = count;
         count++;
     })
     return products_list;
 }

 function display() {
     let products_cont = document.querySelector(".products_cont");
     let products_list = JSON.parse(localStorage.getItem("Products")) || [];
     products_cont.innerText = "";
     if (products_list.length == 0) {
         let msg = document.createElement("h1");
         msg.innerText = "No Products Addded so far!"
         msg.style.color = "red";
         msg.setAttribute("class", "center");
         products_cont.style.display = "block";
         products_cont.append(msg);
     } else {
        let counter = document.getElementById("counter");
        counter.innerText="Products Count : "+ products_list.length;
         products_list = add_id(products_list);
         products_list.forEach(ele => {
             let box = document.createElement("div");
             box.setAttribute("class", "product");
             let img = document.createElement("img");
             img.src = ele.image_url;
             let name = document.createElement("p");
             name.innerText = ele.name;
             let price = document.createElement("p");
             price.innerText = "Rs. " + ele.price;
             let buttons = document.createElement("div");
             buttons.setAttribute("class", "buttons");
             let sold = document.createElement("button");
             sold.innerText = ele.sold;
             sold.style.color = "white";
             if (ele.sold) sold.style.backgroundColor = "red";
             else sold.style.backgroundColor = "green";
             sold.addEventListener("click", () => {
                 if (ele.sold) ele.sold = false;
                 else ele.sold = true;
                 sold.innerText = ele.sold;
                 if (ele.sold) sold.style.backgroundColor = "red";
                 else sold.style.backgroundColor = "green";
                 localStorage.setItem("Products", JSON.stringify(products_list));
             });
             let delete_btn = document.createElement("button");
             delete_btn.innerText = "DELETE";
             delete_btn.addEventListener("click", () => {
                 delete_product(ele.id, products_list);
             })
             buttons.append(sold, delete_btn);
             box.append(img, name, price, buttons);
             products_cont.append(box);
         });
     }
 }

 function delete_product(id, products_list) {
     console.log(id)
     let new_list = products_list.filter((el) => {
         return el.id != id
     });
     //  event.target.parentNode.remove();
     localStorage.setItem("Products", JSON.stringify(new_list));
     display();
 }
