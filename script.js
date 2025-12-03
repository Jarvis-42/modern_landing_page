
window.addEventListener('load', function() {

    console.log("Script loaded successfully!");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry)
            
            if (entry.isIntersecting) {
                
                entry.target.classList.remove('opacity-0'); 
                entry.target.classList.remove('translate-y-10');
                
                observer.unobserve(entry.target);
            } else {

            }
        });
    });

    const hiddenElements = document.querySelectorAll('.hidden-element');
    
    hiddenElements.forEach((el) => {
        observer.observe(el);
    });

    
    let contactForm = document.getElementById('contactForm');
    

    if(contactForm) {
        contactForm.addEventListener('submit', (e) => {
            
            e.preventDefault();
            console.log("User clicked submit");

            
            let nameInput = document.querySelector('input[type="text"]');
            let emailInput = document.querySelector('input[type="email"]');
            
            
            if(nameInput.value === "" || emailInput.value === "") {
                alert("Please fill in all fields!");
                return;
            }

            let btn = contactForm.querySelector('button');
            let oldText = "Send Message";
            
            btn.innerText = "Sending...";
            btn.disabled = true;
            btn.style.opacity = "0.5";
            btn.style.cursor = "not-allowed";
            setTimeout(function() {
                
                console.log("Data sent");
                alert("Thanks! We have received your message.");
                
                
                contactForm.reset();
                btn.innerText = oldText;
                btn.disabled = false;
                btn.style.opacity = "1";
                btn.style.cursor = "pointer";

            }, 2000);

        });
    } else {
        console.log("Error: Contact form not found on this page");
    }

});