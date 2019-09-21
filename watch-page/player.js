var vd = document.getElementById("video-player")
var c1 = document.getElementById("card1")
var c2 = document.getElementById("card2")
var c3 = document.getElementById("card3")
var c4 = document.getElementById("card4")
var c5 = document.getElementById("card5")
var c6 = document.getElementById("card6")
var vc = document.getElementById("views-count")
var vt = document.getElementById("video-title")
var vp = document.getElementById("video-description")
c1.addEventListener("click", change)
c2.addEventListener("click", change)
c3.addEventListener("click", change)
c4.addEventListener("click", change)
c5.addEventListener("click", change)
c6.addEventListener("click", change)
var details
var id
var l = []
function change() {
    id = this.id
    var m = this.id
    id = id.replace(/card/g, '')
    $.get("http://5d76bf96515d1a0014085cf9.mockapi.io/video/" + (id.toString()), function (data, status) {
        var t = data.vimeoId
        vd.src = "https://player.vimeo.com/video/" + t
        vc.innerHTML = data.views
        vt.innerHTML = data.title
        vp.innerHTML = data.description
        window.scrollTo({ top: 0, behavior: 'smooth' });
        if (l.length == 0) {
            l.push(m)
        }
        else {
            console.log(l)
            var tk = document.getElementById(l[0])
            tk.classList.remove("active-card")
            l.pop()
            l.push(m)
            var k = document.getElementById(m)
            k.classList.add("active-card")
        }
        console.log(k)
    })

}