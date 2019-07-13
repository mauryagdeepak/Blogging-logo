/* del() activates the modal that deletes the blog posts */
function del() {
    var modal = document.getElementById("del");
    // Display the modal to the user
    modal.style.display = "block";

    // Hides the modal if user clicks else where on the display
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }

    }
}


// hid() hides the modal that delete
function hid() {
    var btn = document.getElementsByClassName('modal')[2];
    btn.style.display = "none";

}