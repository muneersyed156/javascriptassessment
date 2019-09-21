var fn = document.getElementById("first_name")
var ln = document.getElementById("last_name")
var em = document.getElementById("email")
var s1n = document.getElementById("StepOneNext")
var s2n = document.getElementById("StepTwoNext")
var d1 = document.getElementById("StepOneContainer")
var d2 = document.getElementById("StepTwoContainer")
var d3 = document.getElementById("StepThreeContainer")
var fne = document.getElementById("first_name_error")
var lne = document.getElementById("last_name_error")
var eme = document.getElementById("email_error")
var cte = document.getElementById("contact_error")
var cie = document.getElementById("city_error")
var coe = document.getElementById("country_error")
var spe = document.getElementById("select_program_error")
var me = document.getElementById("message_error")
var ct = document.getElementById("contact")
var ci = document.getElementById("city")
var co = document.getElementById("country")
var sp1 = document.getElementById("StepTwoPrevious")
var sp2 = document.getElementById("StepThreePrevious")
var p = document.getElementById("select_program")
var msg = document.getElementById("message")
var sn3 = document.getElementById("StepThreeSubmit")
var ss = document.getElementById("SuccessContainer")
var w = window.localStorage
var name, mail, lname, city, contact, country, program, message
name = ''
mail = ''
city = ''
contact = ''
country = ''
program = ''
message = ''
fn.addEventListener("input", function (e) {
    name = e.target.value
})
ln.addEventListener("input", function (e) {
    lname = e.target.value
})
em.addEventListener("input", function (e) {
    mail = e.target.value
})
s1n.addEventListener("click", function () {
    var c = 0
    if (name.match(/[a-zA-Z]/)) {
        c += 1
        fne.style.display = "none"
    }
    else if (name == '') {
        fne.style.display = "block"
        fne.innerHTML = "This field should not be empty"
    }
    else {
        fne.style.display = "block"
        fne.innerHTML = "Only Alphabets are allowed"
    }
    if (lname.match(/[a-zA-Z]/) && lname != '') {
        c += 1
        lne.style.display = "none"
    }
    else {
        lne.style.display = "block"
        lne.innerHTML = "Only Alphabets are allowed"
    }
    if (mail.match(/^[\w]+@(gmail|emial|yahoo|[a-zA-Z])\.(in|com|co|[a-zA-Z])$/gi)) {
        c += 1
        eme.style.display = "none"
    }
    else {
        eme.style.display = "block"
        eme.innerHTML = "Enter Valid Email id"
    }
    if (c == 3) {
        d1.style.display = "none"
        d3.style.display = "none"
        d2.style.display = "block"
    }
})
ct.addEventListener("input", function (e) {
    contact = e.target.value

})
ci.addEventListener("input", function (e) {
    city = e.target.value
})
co.addEventListener("input", function (e) {
    country = e.target.value
})
s2n.addEventListener("click", function () {
    var c = 0
    if (contact.match(/(\+91)?[0-9]{10}/)) {
        c += 1
        cte.style.display = "none"
    }
    else {
        cte.style.display = "block"
        cte.innerHTML = "A phone number has only 10 digits"
    }
    if (city.match(/[a-zA-Z]/) && city != '') {
        c += 1
        cie.style.display = "none"
    }
    else {
        cie.style.display = "block"
        cie.innerHTML = "Only Alphabets are allowed"
    }
    if (country.match(/[a-zA-Z]/gi) && country != '') {
        c += 1
        coe.style.display = "none"
    }
    else {
        coe.style.display = "block"
        coe.innerHTML = "A country doesn't have digits"
    }
    if (c == 3) {
        d1.style.display = "none"
        d2.style.display = "none"
        d3.style.display = "block"
    }
})
sp1.addEventListener("click", function () {
    d1.style.display = "block"
    d2.style.display = "none"
    d3.style.display = "none"
})
sp2.addEventListener("click", function () {
    d2.style.display = "block"
    d1.style.display = "none"
    d3.style.display = "none"
})
p.addEventListener("input", function (e) {
    program = e.target.value
})
msg.addEventListener("input", function (e) {
    message = e.target.value
})
sn3.addEventListener("click", function () {
    console.log(program)
    var c = 0
    if (program == '') {

        spe.style.display = "block"
        spe.innerHTML = "Select a valid program"
    }
    else {
        c += 1
        spe.style.display = "none"
    }
    if (message == '') {

        me.style.display = "block"
        me.innerHTML = "Enter a message"
    }
    else {
        c += 1
        me.style.display = "none"
    }
    if (c == 2) {
        d1.style.display = "none"
        d2.style.display = "none"
        d3.style.display = "none"
        ss.style.display = "block"
    }
})
//w.setItem("name", name)
