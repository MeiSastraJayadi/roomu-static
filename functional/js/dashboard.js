const room = document.querySelectorAll(".view-2 .three-column .room")


room.forEach(item => {
   item.classList.add('out') 
})


window.addEventListener("scroll", function() {
    if ((this.scrollY > (room[0].scrollHeight - 30) && (this.scrollY < 1000))) {
        room.forEach(item => {
            item.classList.add("in"); 
        })    
    }

    if (this.scrollY < 200) {
        room.forEach(item => {
            item.classList.remove('in')
            item.classList.add('out')
        })
    } 

    if (this.scrollY > 1200) {
        room.forEach(item => {
            item.classList.remove('in')
            item.classList.add('out')
        })
    }
})

