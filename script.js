let rooms = document.querySelectorAll(".room")

let roomName = document.getElementById("roomName")
let price = document.getElementById("price")
let total = document.getElementById("total")

rooms.forEach(room=>{

room.addEventListener("click",()=>{

rooms.forEach(r=>r.classList.remove("active"))

room.classList.add("active")

let name = room.querySelector("h3").innerText
let roomPrice = room.dataset.price

roomName.innerText = name
price.innerText = roomPrice
total.innerText = roomPrice

})

})

function confirmBooking(){

alert("Booking Confirmed!\nWelcome to Golden Bay Resort 🏨")

}


 
