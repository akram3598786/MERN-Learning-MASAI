
async function getvideos(){
  let vid_title = document.getElementById("title_input").value;
    try{
        let API_key = "AIzaSyDxnMAsQ490wnMmMlCEYJNYsbmBpMDHOZg";
        let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${vid_title}&type=video&key=${API_key}`;
        let res=await fetch(url);
        let videos_data = await res.json();
        display_videos(videos_data.items);
     
    }catch(err){
     console.log(err);
    }
}

display_videos=(videos_list)=>{
let contents=document.querySelector(".contents");
contents.innerText="";
    videos_list.forEach(video => {  
        let video_box = document.createElement("div");
        video_box.setAttribute("class","video_box");
         // Destructuring of ES6 to get values directly from concurrent objects
       const {
            id:{videoId},
            snippet: {
                title,
                channelTitle,
                thumbnails:{
                    medium:{ url },
                },
            },
        } = video;  
        let video_id=video.id.videoId;
        let vid_title=document.createElement("p");
        vid_title.textContent=video.snippet.title;
        let chanel_title=document.createElement("p");
        chanel_title.textContent="Channel : "+video.snippet.channelTitle;
        let thumbnails = document.createElement("img");
        thumbnails.src=url;
  
     video_box.append(thumbnails,vid_title,chanel_title);
     contents.append(video_box);
     video_box.addEventListener("click",()=>{
        localStorage.setItem("video",video.id.videoId);
        window.open("play_video.html","_self");
    })
    });   
}

