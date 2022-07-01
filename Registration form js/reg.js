console.log("This is validation form with javascript document form")
function GEEKFORGEEKS(){
    var name=document.forms["regform"]["fname"];
    var lname=document.forms["regform"]["lname"];
    var email=document.forms["regform"]["email"];
    var address=document.forms["regform"]["address"];
    var pnumber=document.forms["regform"]["number"];
    var cnumber=document.forms["regform"]["cnic"];
    var gender=document.forms["regform"]["gender"];
    var development=document.forms["regform"]["course"];


    if (name.value == "") {
        window.alert("Please enter your name.");
        name.focus();
        return false;
    }

    if (lname.value == "") {
        window.alert("Please enter your last-name.");
        lname.focus();
        return false;
    }

    if (email.value == "") {
        window.alert(
          "Please enter a valid e-mail address.");
        email.focus();
        return false;
    }

    if (address.value == "") {
        window.alert(
          "Please enter your current address.");
        address.focus();
        return false;
    }

    if (pnumber.value == "") {
        window.alert("Please enter your phone-number");
        pnumber.focus();
        return false;
    }
    if (cnumber.value == "") {
        window.alert("Please enter your C-N-I-C");
        cnumber.focus();
        return false;
    }
    if (gender.value < 1) {
        alert("Please select your Gender .");
        gender.focus();
        return false;
    }
    if (development.value < 1) {
        alert("Please chose any two courses  .");
        gender.focus();
        return false;
    }

    else{
        alert("You successfully submit this form")
    }

    return true;
}
