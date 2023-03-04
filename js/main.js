// ========== global ==========
const nav = document.querySelector("nav");



// ========== start ==========
navColor();
navClick();
count();

var typed = new Typed('.element', {
    strings: ["web designer", "web developer" , "Graphic Designer" , "CEO DevFolio"],
    typeSpeed: 100,
    startDelay:10,
    backSpeed:50,
    backDelay:10,
    loop: true,
    showCursor: false,
    smartBackspace: true,
  });
  


// ========== function ==========
function navColor(){

        document.addEventListener("scroll",function(){

            if( $(document).scrollTop() > window.innerHeight/3 ){
                $("html").addClass("dark");
                $("html").removeClass("light");
                $("nav").addClass("bg-light");
                $("nav").removeClass("bg-transparent");
            }else{
                $("html").addClass("light");
                $("html").removeClass("dark");
                $("nav").addClass("bg-transparent");
                $("nav").removeClass("bg-light");
            };
        });

};


function navClick(){
    $("nav .nav-link").click(function(e){
        e.preventDefault();
        $("html,body").animate({"scrollTop":$($(e.target).attr("href")).offset().top},150);
    });
};



function count(){
    const counter1 = new CountUp("counter1" , 0, 450);
    const counter2 = new CountUp("counter2" , 0, 15);
    const counter3 = new CountUp("counter3" , 0, 500);
    const counter4 = new CountUp("counter4" , 0, 36);

    document.addEventListener("scroll",function(){

        if( $(document).scrollTop()+.8*window.innerHeight > $(".count").offset().top ){
            counter1.start();
            counter2.start();
            counter3.start();
            counter4.start();
        };
    });
};
