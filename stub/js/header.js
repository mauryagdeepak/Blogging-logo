// for Sign Up modal
var modal = document.getElementById("id02");

// Get the button
var btn = document.getElementById("sign-Up");

// Get the <span> element that closes the modal
var span = document.getElementById("close2");

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on x, close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// Get the Sign In modal
var modal1 = document.getElementById("id01");

// Get the button that opens the Sign In modal
var btn1 = document.getElementById("sign-In");

// Get the span element that closes the modal
var span1 = document.getElementById("close1");

// When the user clicks the button, open the modal 
btn1.onclick = function() {
    modal1.style.display = "block";
}

// When the user clicks on x, close the modal
span1.onclick = function() {
    modal1.style.display = "none";
}

// close it
window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}

/* newUser() move the active visitor from sign in modal to the sign up modal */
function newUser() {
    // Fetches the sign in modals and hides it
    var modal1 = document.getElementById("id01");
    modal1.style.display = "none";
    // After hiding the sign in modal it make the sign up modal visible
    var modal = document.getElementById("id02");
    modal.style.display = 'block';
}