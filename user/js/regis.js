let input = document.querySelectorAll("form input")
let label = document.querySelectorAll("form label:not(.jurusan)")


input.forEach(function(item) {
    item.addEventListener("focus", () => {
        input.forEach(function(i) {
            if (i.value === ""){
                let s = `.container label[for="${i.name}"]`
                let l = document.querySelector(s)
                l.classList.remove('active')
            }
        })

        let selector = `.container label[for="${item.name}"]`
        let label = document.querySelector(selector)
        label.classList.add('active')
    })

    item.addEventListener("focusout", () => {
        if (item.value === ""){
            let selector = `.container label[for="${item.name}"]`
            let label = document.querySelector(selector)
            label.classList.remove('active')
        }
    })
})

label.forEach(function(item) {
    item.addEventListener("click", () => {
        label.forEach(function(i) {
            let repr = i.attributes.for.nodeValue
            let s = `.container input[name="${repr}"]`
            let ip = document.querySelector(s)
            if (ip.value === ""){
                i.classList.remove('active')
            }
        })
        let repr = item.attributes.for.nodeValue

        let selector = `.container input[name="${repr}"]`
        let ipt = document.querySelector(selector)
        item.classList.toggle('active')
        ipt.focus()
    })
})

