// ==========================
// HAMBURGER MENU
// ==========================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");


if (menuBtn && navLinks) {


    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        menuBtn.classList.toggle("open");

    });



    // Tutup menu setelah klik link

    document.querySelectorAll(".nav-links a").forEach(link => {


        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            menuBtn.classList.remove("open");

        });


    });


}

// ==========================
// STICKY NAVBAR
// ==========================

const navbar = document.querySelector(".navbar");


window.addEventListener("scroll", () => {


    if(navbar){

        if(window.scrollY > 60){

            navbar.classList.add("sticky");

        }else{

            navbar.classList.remove("sticky");

        }

    }


});

// ==========================
// ACTIVE MENU
// ==========================


const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");



window.addEventListener("scroll", () => {


    let current = "";


    sections.forEach(section => {


        const sectionTop = section.offsetTop - 150;


        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }


    });

    navItems.forEach(link => {


        link.classList.remove("active");


        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }


    });



});


// ==========================
// TYPING EFFECT
// ==========================


const typing = document.querySelector(".typing");


if(typing){


    const words = [

        "UI / UX Designer",
        "Graphic Designer",
        "Software Engineering Student"

    ];



    let wordIndex = 0;

    let charIndex = 0;

    let deleting = false;


    function type(){


        const currentWord = words[wordIndex];



        if(!deleting){


            typing.textContent = currentWord.substring(0,charIndex++);


            if(charIndex > currentWord.length){


                deleting = true;


                setTimeout(type,1500);


                return;


            }


        }else{


            typing.textContent = currentWord.substring(0,charIndex--);

            if(charIndex < 0){


                deleting = false;


                wordIndex++;

                if(wordIndex >= words.length){

                    wordIndex = 0;

                }


            }


        }

        setTimeout(type, deleting ? 60 : 120);

    }

    type();

}

// ==========================
// SCROLL REVEAL
// ==========================


const hiddenElements = document.querySelectorAll(".hidden");

if(hiddenElements.length > 0){

    const observer = new IntersectionObserver(entries => {


        entries.forEach(entry => {


            if(entry.isIntersecting){


                entry.target.classList.add("show");


            }


        });


    });

    hiddenElements.forEach(el => {


        observer.observe(el);


    });

}

// ==========================
// SMOOTH SCROLL
// ==========================


document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){



        e.preventDefault();



        const target = document.querySelector(this.getAttribute("href"));

        if(target){


            target.scrollIntoView({


                behavior:"smooth"

            });

        }

    });

});