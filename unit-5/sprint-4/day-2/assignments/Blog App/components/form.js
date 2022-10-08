
const form = `
<form action="submit">
<label for="">Title : 
 <input id="title" type="text" value="">
</label>
<label for="">Author : 
  <input id="author" type="text" value="">
</label>
<label for="">Category : 
 <select id="category" value="">
  <option value="" name="" id="">Select</option>
  <option value="news" name="" id="">News</option>
  <option value="sports" name="" id="">Sports</option>
  <option value="entertainment" name="" id="">Entertainment</option>
  <option value="education" name="educational" id="">Education</option>
 </select>
</label>
<textarea name="" id="body" cols="40" rows="7" value=""></textarea>  
</form>
<button id="submit_btn">Post Blog</button>
`;

export default form;