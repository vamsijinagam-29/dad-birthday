/* ==========================================================
                DAD BIRTHDAY WEBSITE
                APP.JS
                PART 1 OF 3
========================================================== */

gsap.registerPlugin(ScrollTrigger);

/* ==========================================================
                ELEMENTS
========================================================== */

const loader = document.getElementById("loader");

const startBtn = document.getElementById("startJourney");

const hero = document.getElementById("hero");

const bgMusic = document.getElementById("bgMusic");

const celebrateBtn = document.getElementById("celebrateBtn");

const sections = document.querySelectorAll(".section");

const timelineCards = document.querySelectorAll(".timeline-card");

const photoCards = document.querySelectorAll(".photo-card");

const letterCard = document.querySelector(".letter-card");

const promiseCard = document.querySelector(".promise-card");

const birthdayCard = document.querySelector(".birthday-card");

const endingCard = document.querySelector(".ending-card");

/* ==========================================================
                SETTINGS
========================================================== */

let musicStarted = false;

let voiceEnabled = true;

/* ==========================================================
                START WEBSITE
========================================================== */

startBtn.addEventListener("click", () => {

    startExperience();

});

/* ==========================================================
                START EXPERIENCE
========================================================== */

function startExperience(){

    startMusic();

    hideLoader();

    animateHero();

}

/* ==========================================================
                BACKGROUND MUSIC
========================================================== */

function startMusic(){

    if(musicStarted) return;

    bgMusic.volume = 0.35;

    bgMusic.play().catch(()=>{});

    musicStarted = true;

}

/* ==========================================================
                HIDE LOADER
========================================================== */

function hideLoader(){

    gsap.to(loader,{

        opacity:0,

        duration:1.2,

        ease:"power2.out",

        onComplete:()=>{

            loader.style.display="none";

        }

    });

}

/* ==========================================================
                HERO ANIMATION
========================================================== */

function animateHero(){

    const tl = gsap.timeline();

    tl.from(".hero-image",{

        scale:1.2,

        opacity:0,

        duration:2,

        ease:"power3.out"

    })

    .from(".hero-content h4",{

        y:50,

        opacity:0,

        duration:.8

    })

    .from(".hero-content h1",{

        y:70,

        opacity:0,

        duration:.8

    })

    .from(".hero-content h3",{

        y:40,

        opacity:0,

        duration:.6

    })

    .from(".hero-content p",{

        y:50,

        opacity:0,

        duration:.8

    });

}

/* ==========================================================
                COMMON FADE ANIMATION
========================================================== */

function fadeAnimation(element){

    gsap.from(element,{

        opacity:0,

        y:80,

        duration:1,

        ease:"power3.out",

        scrollTrigger:{

            trigger:element,

            start:"top 80%"

        }

    });

}

/* ==========================================================
                APPLY TO ALL SECTIONS
========================================================== */

sections.forEach(section=>{

    fadeAnimation(section);

});

/* ==========================================================
                HERO PARALLAX
========================================================== */

gsap.to(".hero-image",{

    scale:1.15,

    scrollTrigger:{

        trigger:"#hero",

        scrub:true,

        start:"top top",

        end:"bottom top"

    }

});

/* ==========================================================
                FLOATING EFFECT
========================================================== */

gsap.to(".hero-content",{

    y:-20,

    repeat:-1,

    yoyo:true,

    duration:3,

    ease:"sine.inOut"

});

/* ==========================================================
                GOLDEN GLOW
========================================================== */

// gsap.to("#hero::before",{

//     duration:4,

//     repeat:-1,

//     yoyo:true

// });

/* ==========================================================
                END PART 1
========================================================== */
/* ==========================================================
                APP.JS
                PART 2 OF 3
========================================================== */

/* ==========================================================
                TIMELINE ANIMATION
========================================================== */

timelineCards.forEach((card,index)=>{

    gsap.from(card,{

        opacity:0,

        y:80,

        scale:.9,

        duration:1,

        delay:index*0.15,

        ease:"power3.out",

        scrollTrigger:{

            trigger:card,

            start:"top 85%"

        }

    });

});

/* ==========================================================
                GALLERY ANIMATION
========================================================== */

photoCards.forEach((card,index)=>{

    gsap.from(card,{

        opacity:0,

        y:100,

        scale:.85,

        duration:1,

        delay:index*.08,

        ease:"power3.out",

        scrollTrigger:{

            trigger:card,

            start:"top 90%"

        }

    });

});

/* ==========================================================
                PHOTO HOVER EFFECT
========================================================== */

photoCards.forEach(card=>{

    const img=card.querySelector("img");

    card.addEventListener("mouseenter",()=>{

        gsap.to(img,{

            scale:1.08,

            duration:.45

        });

    });

    card.addEventListener("mouseleave",()=>{

        gsap.to(img,{

            scale:1,

            duration:.45

        });

    });

});

/* ==========================================================
                LETTER ANIMATION
========================================================== */

gsap.from(letterCard,{

    opacity:0,

    y:120,

    duration:1.2,

    ease:"power3.out",

    scrollTrigger:{

        trigger:"#letter",

        start:"top 75%"

    }

});

/* ==========================================================
                LETTER PARAGRAPHS
========================================================== */

document.querySelectorAll(".letter-text p").forEach((p,index)=>{

    gsap.from(p,{

        opacity:0,

        x:-40,

        duration:.8,

        delay:index*.1,

        scrollTrigger:{

            trigger:p,

            start:"top 92%"

        }

    });

});

/* ==========================================================
                PROMISE SECTION
========================================================== */

gsap.from(promiseCard,{

    opacity:0,

    scale:.92,

    duration:1,

    ease:"power3.out",

    scrollTrigger:{

        trigger:"#promise",

        start:"top 80%"

    }

});

/* ==========================================================
                PROMISE TEXT
========================================================== */

document.querySelectorAll(".promise-card p").forEach((line,index)=>{

    gsap.from(line,{

        opacity:0,

        y:30,

        duration:.6,

        delay:index*.08,

        scrollTrigger:{

            trigger:line,

            start:"top 95%"

        }

    });

});

/* ==========================================================
                SECTION TITLES
========================================================== */

document.querySelectorAll("section h2").forEach(title=>{

    gsap.from(title,{

        opacity:0,

        y:40,

        duration:1,

        scrollTrigger:{

            trigger:title,

            start:"top 85%"

        }

    });

});

/* ==========================================================
                BUTTON HOVER EFFECT
========================================================== */

document.querySelectorAll("button").forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        gsap.to(btn,{

            scale:1.05,

            duration:.25

        });

    });

    btn.addEventListener("mouseleave",()=>{

        gsap.to(btn,{

            scale:1,

            duration:.25

        });

    });

});

/* ==========================================================
                SMOOTH SCROLL
========================================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(

            this.getAttribute("href")

        );

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

/* ==========================================================
                IMAGE FLOAT EFFECT
========================================================== */

photoCards.forEach(card=>{

    gsap.to(card,{

        y:-8,

        repeat:-1,

        yoyo:true,

        duration:3+Math.random(),

        ease:"sine.inOut"

    });

});

/* ==========================================================
                END PART 2
========================================================== */
/* ==========================================================
                APP.JS
                PART 3 OF 3
========================================================== */

/* ==========================================================
                BIRTHDAY ANIMATION
========================================================== */

gsap.from(birthdayCard,{

    opacity:0,

    scale:.85,

    duration:1.2,

    ease:"back.out(1.5)",

    scrollTrigger:{

        trigger:"#birthday",

        start:"top 75%"

    }

});

/* ==========================================================
                ENDING ANIMATION
========================================================== */

gsap.from(endingCard,{

    opacity:0,

    y:100,

    duration:1.2,

    ease:"power3.out",

    scrollTrigger:{

        trigger:"#ending",

        start:"top 75%"

    }

});

/* ==========================================================
                CONFETTI
========================================================== */

celebrateBtn.addEventListener("click",()=>{

    if(typeof confetti==="function"){

        confetti({

            particleCount:220,

            spread:160,

            origin:{y:0.6}

        });

    }

});

/* ==========================================================
                BROWSER VOICE
========================================================== */

function speak(text){

    if(!("speechSynthesis" in window)) return;

    window.speechSynthesis.cancel();

    const speech = new SpeechSynthesisUtterance(text);

    speech.lang = "en-US";

    speech.rate = 0.92;

    speech.pitch = 0.85;

    speech.volume = 1;

    const voices = window.speechSynthesis.getVoices();

    const preferredMale = voices.find(v =>

        /david|mark|guy|alex|daniel|google us english|microsoft david/i.test(v.name)

    );

    if(preferredMale){

        speech.voice = preferredMale;

    }

    window.speechSynthesis.speak(speech);

}

/* ==========================================================
                BIRTHDAY VOICE
========================================================== */

celebrateBtn.addEventListener("click",()=>{

    speak(

`Happy Birthday NANNA.

You are an amazing father.

Thank you for every sacrifice.

May God bless you with good health,

happiness,

and many beautiful years ahead.

I LOVE YOU NANNA
 
ONCE AGAIN,
Happy Birthday, Nanna.`

    );

});

/* ==========================================================
                LETTER VOICE
========================================================== */

ScrollTrigger.create({

    trigger:"#letter",

    start:"top center",

    once:true,

    onEnter:()=>{

        speak(

`Dear Nanna,

Thank you for every sacrifice.

Thank you for every smile.

Whatever I become in life,

it will always be because of you.

You are my greatest inspiration.`

        );

    }

});

/* ==========================================================
                PROMISE VOICE
========================================================== */

ScrollTrigger.create({

    trigger:"#promise",

    start:"top center",

    once:true,

    onEnter:()=>{

        speak(

`Nanna,

I promise that after completing my studies,

I will take care of our family.

One day,

you will finally be able to rest,

because then,

it will be my turn.`

        );

    }

});

/* ==========================================================
                MUSIC FADE
========================================================== */

window.addEventListener("beforeunload",()=>{

    if(!bgMusic) return;

    bgMusic.pause();

});

/* ==========================================================
                REFRESH GSAP
========================================================== */

window.addEventListener("load",()=>{

    ScrollTrigger.refresh();

});

/* ==========================================================
                IMAGE LOADING
========================================================== */

document.querySelectorAll("img").forEach(img=>{

    img.loading="lazy";

});

/* ==========================================================
                DISABLE RIGHT CLICK
========================================================== */

document.addEventListener("contextmenu",(e)=>{

    e.preventDefault();

});

/* ==========================================================
                DISABLE IMAGE DRAG
========================================================== */

document.querySelectorAll("img").forEach(img=>{

    img.addEventListener("dragstart",(e)=>{

        e.preventDefault();

    });

});

/* ==========================================================
                KEYBOARD SHORTCUTS
========================================================== */

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        window.speechSynthesis.cancel();

    }

});

/* ==========================================================
                WINDOW RESIZE
========================================================== */

window.addEventListener("resize",()=>{

    ScrollTrigger.refresh();

});

/* ==========================================================
                INITIALIZE VOICES
========================================================== */

if("speechSynthesis" in window){

    window.speechSynthesis.onvoiceschanged=()=>{

        window.speechSynthesis.getVoices();

    };

}

/* ==========================================================
                FINISHED
========================================================== */

console.log(

"%c🎉 Dad Birthday Website Loaded Successfully ❤️",

"color:#D4AF37;font-size:18px;font-weight:bold;"

);
speechSynthesis.onvoiceschanged = () => {

    console.table(

        speechSynthesis.getVoices().map(v => ({

            Name: v.name,

            Language: v.lang

        }))

    );

};