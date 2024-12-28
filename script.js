let menulist =document.getElementById("menulist")
menulist.style.maxHeight="0px";



function toogle(){
    if( menulist.style.maxHeight=="0px"){
        menulist.style.maxHeight="300px";
    }else{
        menulist.style.maxHeight="0px";

    }
}

// Example: Show modal with more burger details when clicking on an item
document.querySelectorAll('.burger-item').forEach(item => {
    item.addEventListener('click', function () {
        // You can open a modal here to show more details about the burger
        alert('You clicked on ' + this.querySelector('.card-title').innerText);
    });
});


// about section
// Optional: Add some JavaScript for interactive elements if needed.
// For example, you could add a smooth scroll effect or dynamic animations.
// Here's a simple script that can log to the console when the section is loaded.




// footer valid
// Example: Log clicks on social media icons
document.querySelectorAll('.social-icon').forEach(icon => {
    icon.addEventListener('click', () => {
        console.log(`Redirecting to ${icon.textContent} page`);
    });
});
