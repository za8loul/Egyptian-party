// Nav
$(".nav-btn").click(function () {
  $(".side-nav").animate({ left: 0 }, 500);
  $(".home").animate({ marginLeft: "250px" }, 500);
});

$(".close-btn").click(function () {
  $(".side-nav").animate({ left: "-250px" }, 500);
  $(".home").animate({ marginLeft: "0px" }, 500);
});

// Singers
$(".singer-one h4").click(function () {
    $("#p1").slideToggle("slow");
    $(".toggle-div").not("#p1").slideUp("slow");
  });
$(".singer-two h4").click(function () {
  $("#p2").slideToggle("slow");
  $(".toggle-div").not("#p2").slideUp("slow");
});

$(".singer-three h4").click(function () {
  $("#p3").slideToggle("slow");
  $(".toggle-div").not("#p3").slideUp("slow");
});

$(".singer-four h4").click(function () {
  $("#p4").slideToggle("slow");
  $(".toggle-div").not("#p4").slideUp("slow");
});

// Duration 

// window.onload = function() {
   
//     const targetDate = new Date("2024-10-10T12:0:0").getTime();
//   }

//   function updateCountdown() {
//     const now = new Date().getTime();
//     const distance = targetDate - now;

//     // Time calculations for days, hours, minutes and seconds
//     const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     const seconds = Math.floor((distance % (1000 * 60)) / 1000);


//     $(".days").html(`${days} D`);
//     $(".hours").html(`${hours} h`);
//     $(".minutes").html(`${ minutes } m`);
//     $('.seconds').html(`${ seconds} s`);

    
//   }
//   const x = setInterval(updateCountdown, 1000);

//     // Initial call to display the countdown immediately without waiting for 1 second
//     updateCountdown();

window.onload = function() {
   
    countDown("10 october 2024 12:00:00");
    
  }

  function countDown(countTo) {
  
        let deadline = new Date(countTo);
    deadline = (deadline.getTime()/1000);

    let now = new Date();
    now = (now.getTime()/1000);

    timeDifference = (deadline- now);
        
   let days = Math.floor( timeDifference / (24*60*60));
   let hours = Math.floor((timeDifference - (days * (24*60*60))) / 3600);
   let mins = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600 )) / 60);
   let secs = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))


    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${ mins } m`);
    $('.seconds').html(`${ secs} s`)

  
    setInterval(function() {  countDown(countTo); }, 1000);
  }

  var maxChar = 100;
$('textarea').keyup(function() {
  var length = $(this).val().length;
  var AmountLeft = maxChar-length;
  if(AmountLeft<=0)
            {
                 $(".tt").text("your available character finished");
                
            }
        else{
        
        $(".text").text(AmountLeft);
        }
});
