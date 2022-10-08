import { getData } from "../utility_functions/getData.js";
import { display_blogs } from "../utility_functions/displayBlogs.js";

let tbody = document.querySelector("tbody");
const take_blogs = async () => {
  try {
    let data = await getData("http://localhost:3000/blogs");
    //    console.log(data);
    display_blogs(data, tbody);
  } catch (err) {
    console.log(err);
  }
};

take_blogs();

const deletedata = async (id_no) => {
  try {
    let res = await fetch(`http://localhost:3000/blogs/${id_no}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    console.log(err);
  }
};

let delete_id = localStorage.getItem("delete_id")
  ? localStorage.getItem("delete_id")
  : null;
console.log(delete_id);
if (delete_id) {
  deletedata(delete_id);
  localStorage.removeItem("delete_id");
}
