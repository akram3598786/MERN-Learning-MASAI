import form from "../components/form.js";

document.querySelector("main").innerHTML = form;

document.getElementById("submit_btn").addEventListener("click", () => {
  event.preventDefault();
  let title = document.getElementById("title").value;
  let category = document.getElementById("category").value;
  let author = document.getElementById("author").value;
  let body = document.getElementById("body").value;

  const obj = new Obj(title, category, author, body);
  console.log(obj);
  addData(obj);
  document.querySelector("form").reset();
  window.open("home.html", "_self");
});

function Obj(title, category, author, body) {
  this.title = title;
  this.category = category;
  this.author = author;
  this.body = body;
}

const addData = async (obj) => {
  try {
    let res = await fetch("http://localhost:3000/blogs", {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.Error) {
      console.log("Error");
    }
  } catch (err) {
    console.log("Error occured");
    console.log(err);
  }
};
