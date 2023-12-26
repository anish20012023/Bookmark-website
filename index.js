let tabBtn = document.querySelectorAll(".tabBtn")
let tabitems = document.querySelectorAll(".tabsitem")


tabBtn.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        tabBtn.forEach((item) => {
            item.classList.remove("current");
        })
        tabitems.forEach((item) => {
            item.classList.add('hidden')
        })

        btn.classList.add("current");
        tabitems[index].classList.remove("hidden")
    })

});

// Qtn ans

let qtnbtn = document.querySelectorAll(".qtnbtn");
let ans = document.querySelectorAll(".ans");

qtnbtn.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        ans.forEach(item => {
            item.classList.add("hidden")
        })
        qtnbtn.forEach((btn) => {
            btn.classList.remove('activeQtn')
        })
        btn.classList.add('activeQtn')
        ans[index].classList.remove("hidden")

    })
})