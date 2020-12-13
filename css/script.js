var akanMaleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku ", "Yaw", "Kofi", "Kwame"];
var akanFemaleNames = ["Akosua", "Adwoa", " Abenaa", "Akua", "  Yaa", "Afua"];
var dayOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
function akan() {
    var cc = parseInt(document.getElementById("century").value);
    var yy = parseInt(document.getElementById("year").value);
    var mm = parseInt(document.getElementById("month").value);
    var dd = parseInt(document.getElementById("day").value);
    var gender = document.getElementById("gender").value;
    var d = parseInt(((cc / 4) - 2 * cc - 1) + ((5 * yy / 4)) + ((26 * (mm + 1) / 10)) + dd) % 7
    if (mm <= 0 || mm > 12) {
        alert("Enter a valid month")
    } else
    if (dd < 1 || dd > 31) {
        alert("Enter a valid date")
    } else
    if (gender === "Male") {
        alert("Your Ghanian akan Name is " + akanMaleNames[d] + " and you were born on " + dayOfTheWeek[d])
    } else
     if (gender === "Female") {
        alert("Your akan name is " + akanFemaleNames[d] + " born on " + dayOfTheWeek[d])
    }
}
