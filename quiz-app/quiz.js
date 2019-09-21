var c = 0
var key = []
var mw = document.getElementById("modal-wrapper")
var re = document.getElementById("result")
$.get("http://5d76bf96515d1a0014085cf9.mockapi.io/quiz", function (data, status) {
    for (var i = 0; i < data.length; i++) {
        key.push(data[i].answer)
    }
})
var bt = document.getElementById("btn-submit")
var ir = document.getElementsByTagName("input")
var ans = []
bt.addEventListener("click", function () {
    for (var i = 0; i < ir.length - 1; i++) {
        if (ir[i].checked === true) {
            ans.push(ir[i].value)
        }
    }
    for (var i = 0; i < ans.length; i++) {
        if (ans[i] == key[i]) {
            c += 1
        }
    }
    console.log(c)
    mw.style.display = "block"
    re.innerHTML = c.toString() + "/" + "5"
})

console.log(key)
console.log(ans)
