var Add_button=document.getElementById("Comment-button")
var User_Name=document.getElementById("User-Name")
var User_Comment=document.getElementById("User-Comment")
let Like_count=0
let Dislike_count=0
Add_button.addEventListener("click",function(e){
    
    if(User_Name.value=="" || User_Comment.value =="" ){
        return alert("Please Enter The Required Details")
    }
    let Entered_Comment=localStorage.getItem("Entered_Comment")
    if(Entered_Comment==null){
        comments=[]
    }else{
        comments=JSON.parse(Entered_Comment)
    }
    let commentdetails={
        userNAME:User_Name.value,
        userCOMMENT:User_Comment.value,
        Like_count:0,
        Dislike_count:0
    }
    comments.push(commentdetails)
    localStorage.setItem("Entered_Comment",JSON.stringify(comments))
    User_Name=""
    User_Comment=""
    display_comments()
})
function display_comments(){
    let Entered_Comment=localStorage.getItem("Entered_Comment")
    if(Entered_Comment==null){
        comments=[]
    }else{
        comments=JSON.parse(Entered_Comment)
    }
    let x=""
    comments.forEach(function(element,index){
        x+=`
        <div class="registered-Comments">
            <h3> <i class="fa-solid fa-user"></i> &nbsp; &nbsp; ${element.userNAME}</h3>
            <p id="User-Comment"><i class="fa-solid fa-comment">&nbsp; &nbsp;</i> ${element.userCOMMENT}</p>
            <p id="User-interest" >Likes-${element.Like_count}<i id="${index}" onclick="like(this.id)" class="fa-regular fa-thumbs-up like-icon"></i>
            &nbsp; DisLikes-${element.Dislike_count}<i id="${index}" onclick="dislike(this.id)" class="fa-regular fa-thumbs-down dislike-icon"></i>
            </p>
            <p id="${index}" class="delete-icon" onclick="deletecomment(this.id)" ><i class="fa-solid fa-trash"> </i></p>
          </div>
        `
    });
    let new_comments=document.getElementById("comments-data")
    if(comments.length!=0){
        new_comments.innerHTML=x
       }
       else{
        document.getElementById("no-comments").innerHTML="No Comments Yet"
       }
}


function deletecomment(index) {
    let Del = confirm("Delete This Comment...?");
    if (Del == true) {
        let Entered_Comment = localStorage.getItem("Entered_Comment");
        if (Entered_Comment == null) {
            comments = [];
        } else {
            comments = JSON.parse(Entered_Comment);
        }
        comments[index].Like_count=0
        comments[index].Dislike_count=0
        comments.splice(index, 1);
        localStorage.setItem("Entered_Comment", JSON.stringify(comments));
        display_comments()
    }
  
}
function like(index){
    Like_count++
  document.querySelectorAll(".like-icon")[index].innerHTML=Like_count;
  updateLikes(index,Like_count)
}

function dislike(index){
    Dislike_count++;
  document.querySelectorAll(".dislike-icon")[index].innerHTML=Dislike_count;
  updateDislikes(index,Dislike_count)
}
display_comments()

function updateLikes(index){
let Entered_Comment=localStorage.getItem("Entered_Comment")
    if(Entered_Comment==null){
        comments=[]
    }else{
        comments=JSON.parse(Entered_Comment)
    }
    comments[index].Like_count+=1
    comments=localStorage.setItem("Entered_Comment",JSON.stringify(comments))
    display_comments()
}

function updateDislikes(index){
    let Entered_Comment=localStorage.getItem("Entered_Comment")
    if(Entered_Comment==null){
        comments=[]
    }else{
        comments=JSON.parse(Entered_Comment)
    }
    comments[index].Dislike_count+=1
    comments=localStorage.setItem("Entered_Comment",JSON.stringify(comments))
    display_comments()
}
