// Makes the Save Button invisible by default
var btn = document.getElementById('save');
btn.style.display = "none";

/*  editContent()*/
function editContent() {
    var edit_btn = document.getElementById('edit');
    edit_btn.style.display = "none";
    var save_btn = document.getElementById('save');
    save_btn.style.display = "";
    var para = document.getElementById('blogBody')
    para.style.border = "3px solid gray";
    para.setAttribute('contenteditable', 'true')

    var para = document.getElementById('blogTitleNew')
    para.style.border = "3px solid gray";
    para.setAttribute('contenteditable', 'true')

}

// saveContent
function saveContent() {
    var edit_btn = document.getElementById('save');
    edit_btn.style.display = "none";
    var save_btn = document.getElementById('edit');
    save_btn.style.display = "";
    var para = document.getElementById('blogBody')
    para.style.border = "none";
    para.setAttribute('contenteditable', 'false')
    var para = document.getElementById('blogTitleNew')
    para.style.border = "none";
    para.setAttribute('contenteditable', 'false')
}

// like counts
var likes = 0

function like() {
    // Fetch the like button action
    var btn = document.getElementById('like');
    //changes the innerHTML of the button
    btn.innerHTML = 'Liked!';
    // Shows the number of likes
    var content = document.getElementById('liker');
    likes = likes + 1
    content.innerHTML = `${likes} person likes this!`;
}

// commetn
function comment() {
    // Fetch the new comment value
    var cmnt = document.getElementById('addComment').value;
    var holder = `<p class="newComment">${cmnt}</p>` // New coment template
        // Fetch the comment holder div
    var allComment = document.getElementById("newCommentHolder");
    // Add the new comment to the comment holder
    allComment.innerHTML = holder + allComment.innerHTML;
    // Reset the value of the comment holder
    document.getElementById('addComment').value = "";

}