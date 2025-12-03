//Testing if it works
console.log("JS LOADED!");

//
function clickedHere(id, url) {
    const element = document.getElementById(id);
    element.style.cursor = "pointer";
    window.location.href = url;
}

//
window.addEventListener("DOMContentLoaded", () => {
    
    const trunk1 = document.getElementById("trunk1");
    
    trunk1.style.height = "240px";
    //around 2 seconds
    setTimeout(() => {
        const branchHS = document.getElementById("branchHS");
        branchHS.style.width = "250px";
        document.getElementById("hsCard").classList.add("show");
    }, 2000);
    //around 2.4 seconds
    setTimeout(() => {
        const trunk2 = document.getElementById("trunk2");
        trunk2.style.height = "140px";
    }, 2400);
    //around 3.6 seconds later
    setTimeout(() => {
        const branchCollege = document.getElementById("branchCollege");
        branchCollege.style.width = "250px";
        document.getElementById("collegeCard").classList.add("show");
    }, 3600);

});

// Functionality Considerations, likely will not finish before checkin
// Filter/Sort Projects (just a thought, but could implement)
// Form Validation - Contact Page 
// Enable Animation For the Appearance of My Quote or Name (typing effect or fade in effect)
// Need to think a bit more on other interactions


//=========================================================================
//                                  Function for Form Validation for Contacts
//=========================================================================

function validate() {
    //Taking value of user input (after trimmed) for name, email, msg
    const name = document.getElementById("UserName").value.trim();
    const email = document.getElementById("UserEmail").value.trim();
    const message = document.getElementById("UserText").value.trim();
    
    //Email Structure/Pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //[not space or @] + @ and [same as before].[same as before]//
    let errors = [];
    if (name === ""){
        errors.push("Name is Required!");
    }
    if (email === ""){
        errors.push("Email is Required!");
    } else if (!emailPattern.test(email)){
        errors.push("Please enter a valid email address");
    }
    if(message === ""){
        errors.push("Please enter message!");
    }
    if (errors.length > 0){
        alert(errors.join("\n"));
        return false;
    }
    alert("Form submitted successfully!");
    return true;
}
//=========================================================================
