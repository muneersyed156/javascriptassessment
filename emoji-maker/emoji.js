var ys = document.getElementById("yellow-skin")
var gs = document.getElementById("green-skin")
var rs = document.getElementById("red-skin")
var ri = document.getElementById("skin")
var re = document.getElementById("eyes")
var sec = document.getElementById("select-eyes-card")
var ssc = document.getElementById("select-skin-card")
var smc = document.getElementById("select-mouth-card")
var en = document.getElementById("eye-normal")
var ec = document.getElementById("eye-closed")
var el = document.getElementById("eye-long")
var ela = document.getElementById("eye-laughing")
var er = document.getElementById("eye-rolling")
var ew = document.getElementById("eye-winking")
var mo = document.getElementById("mouth-open")
var ms = document.getElementById("mouth-smiling")
var mst = document.getElementById("mouth-straight")
var msd = document.getElementById("mouth-sad")
var mt = document.getElementById("mouth-teeth")
var rm = document.getElementById("mouth")
var a1 = document.getElementById("show-eyes-card")
var a2 = document.getElementById("show-skin-card")
var a3 = document.getElementById("show-mouth-card")
var a4 = document.getElementById("show-eyes-card2")
a1.addEventListener("click", function () {
    eyes()
})
a2.addEventListener("click", function () {
    skin()
})
a3.addEventListener("click", function () {
    mouth()
})
a4.addEventListener("click", function () {
    eyes()
})
skin()
function skin() {
    ssc.style.display = "block"
    smc.style.display = "none"
    sec.style.display = "none"
    ys.addEventListener("click", function () {
        ri.src = "./assets/skin/yellow.png"
        eyes()
    })
    gs.addEventListener("click", function () {
        ri.src = "./assets/skin/green.png"
        eyes()
    })
    rs.addEventListener("click", function () {
        ri.src = "./assets/skin/red.png"
        eyes()
    })
}
function eyes() {
    ssc.style.display = "none"
    smc.style.display = "none"
    sec.style.display = "block"
    en.addEventListener("click", function () {
        re.src = "./assets/eyes/normal.png"
        mouth()
    })
    ec.addEventListener("click", function () {
        re.src = "./assets/eyes/closed.png"
        mouth()
    })
    el.addEventListener("click", function () {
        re.src = "./assets/eyes/long.png"
        mouth()
    })
    ela.addEventListener("click", function () {
        re.src = "./assets/eyes/laughing.png"
        mouth()
    })
    er.addEventListener("click", function () {
        re.src = "./assets/eyes/rolling.png"
        mouth()
    })
    ew.addEventListener("click", function () {
        re.src = "./assets/eyes/winking.png"
        mouth()
    })

}
function mouth() {
    ssc.style.display = "none"
    sec.style.display = "none"
    smc.style.display = "block"
    mo.addEventListener("click", function () {
        rm.src = "./assets/mouth/open.png"
    })
    ms.addEventListener("click", function () {
        rm.src = "./assets/mouth/smiling.png"
    })
    mst.addEventListener("click", function () {
        rm.src = "./assets/mouth/straight.png"
    })
    msd.addEventListener("click", function () {
        rm.src = "./assets/mouth/sad.png"
    })
    mt.addEventListener("click", function () {
        rm.src = "./assets/mouth/teeth.png"
    })
}

