var Cus_Details_Button = document.getElementById("Details-sub-Button") 
 
var Cus_Email = document.getElementById("enter-email")
//date
const date = new Date();
let day = date.getDate();
let month = date.getMonth() +1;
let year = date.getFullYear();
let timehr=date.getHours()
let timemin=date.getMinutes()
let currentDate = `${day}-${month}-${year} at ${timehr}:${timemin}`;

Cus_Details_Button.addEventListener("click",function(e){
    var Cus_Name = document.getElementById("enter-name")

    var Cus_Mobile = document.getElementById("enter-mobile")

    if(Cus_Name.value =="" || Cus_Mobile.value ==""  || Cus_Email.value==""){
        return alert("Enter Required Details")
    }
let Bookingdetails=localStorage.getItem("Bookingdetails")
if(Bookingdetails== null){
details=[]
}
else{
details=JSON.parse(Bookingdetails)
}
let userdetails={
userNAME:Cus_Name.value,
userMOBILE:Cus_Mobile.value,
userEMAIL:Cus_Email.value,
Time:currentDate.value
}
details.push(userdetails)
localStorage.setItem("Bookingdetails",JSON.stringify(details))
Cus_Name=""
Cus_Mobile=""
Cus_Email=""
custemor()
})

function custemor(){
let Bookingdetails =localStorage.getItem("Bookingdetails")
if(Bookingdetails== null){
details=[]
}
else{
details=JSON.parse(Bookingdetails)
}
let html="";
details.forEach(function(element,num) {
   
    html+=`
    <div class="registered-users-details">
    <p>TABLE ${num+1}</p>
    <p>Time ${`${day}-${month}-${year} at ${timehr}:${timemin}`}</p>
    <p id="User-Name">Customer Name : ${element.userNAME}</p>
    <p id="User-Number">Customer Mobile : ${element.userMOBILE}</p>
    <p id="User-Mail-id">Customer E-Mail : ${element.userEMAIL}</p>
  </div> `  
  if(num>7){
    return alert("no more bookings")
  }
});
let bookings=document.getElementById("user-data")
if(details.length!=0){
    bookings.innerHTML=html
}
else{
    msg="NO bookings yet"
    document.getElementById("no-reserves").innerHTML=msg
}
}
custemor()


        
