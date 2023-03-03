// ========== global ==========
const nav = document.querySelector("nav");



// ========== start ==========
navColor();
navClick();

var typed = new Typed('.element', {
    strings: ["web designer", "web developer" , "Graphic Designer" , "CEO DevFolio"],
    typeSpeed: 100,
    startDelay:10,
    backSpeed:50,
    backDelay:10,
    loop: true,
    showCursor: false,
    smartBackspace: true,
    shuffle: true,

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




