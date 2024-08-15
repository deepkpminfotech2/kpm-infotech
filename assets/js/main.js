$(document).ready(function () {
  $("#header").load("header.html",function () {
    var currentPage = window.location.pathname.split("/").pop();
    var pageMap = {
      'index.html': '#home-link',
      'technology.html': '#technology-link',
      'services.html': '#services-link',
      'whychoosekpm.html': '#whychoosekpm-link',
      'career.html': '#career-link'
    };
    if (pageMap[ currentPage ])
    {
      $(pageMap[ currentPage ]).addClass('font-extrabold');
    }
  });

  $("#footer").load("footer.html",function () {
    $('#footer-slider').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      autoplayHoverPause: true,
      autoplay: true,
      autoplaySpeed: 1000,
      autoplayTimeout: 3000,
      responsive: {
        0: {
          items: 1
        },
        500: {
          items: 2
        },
        850: {
          items: 3
        },
        1200: {
          items: 4
        },
        1500: {
          items: 5
        },
        1800: {
          items: 6
        },
      }
    });
  });

  $("#sidebar").load("sidebar.html",function () {
    // Toggle sidebar and overlay
    document.querySelector('.sidebar-toggle').addEventListener('click',function () {
      document.querySelector('.sidebar').classList.toggle('translate-x-full');
      document.querySelector('.overlay').classList.toggle('hidden');
      // document.body.classList.toggle('overflow-hidden');
    });
    // Close sidebar and overlay
    document.querySelector('.sidebar-close').addEventListener('click',function () {
      document.querySelector('.sidebar').classList.add('translate-x-full');
      document.querySelector('.overlay').classList.add('hidden');
      // document.body.classList.remove('overflow-hidden');
    });
    // Close sidebar when clicking on the overlay
    document.querySelector('.overlay').addEventListener('click',function () {
      document.querySelector('.sidebar').classList.add('translate-x-full');
      document.querySelector('.overlay').classList.add('hidden');
      // document.body.classList.remove('overflow-hidden');
    });

    var currentPage = window.location.pathname.split("/").pop();
    var pageMap = {
      'index.html': '#home-link',
      'technology.html': '#technology-link',
      'services.html': '#services-link',
      'whychoosekpm.html': '#whychoosekpm-link',
      'career.html': '#career-link',
      'contactus.html': '#contactus-link'
    };
    if (pageMap[ currentPage ])
    {
      $(pageMap[ currentPage ] + ' a').addClass('font-extrabold');
    }
  });


  // Initialize AOS
  AOS.init({
    duration: 2000,
  });


  $('#frontend-technology').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplayHoverPause: true,
    autoplay: true,
    autoplaySpeed: 1000,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      550: {
        items: 3
      },
      1000: {
        items: 4
      },
      1200: {
        items: 5
      },
      1400: {
        items: 6
      }
    }
  });
  // Set aria-label for all owl-dot buttons
  $('.owl-dot').attr('aria-label','navigation dots');

  // Mouse scroll event for triggering prev and next
  // $('#frontend-technology').on('mousewheel DOMMouseScroll',function (e) {
  //   var owl = $(this);
  //   if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0)
  //   {
  //     // Scroll up
  //     owl.trigger('prev.owl.carousel');
  //   } else
  //   {
  //     // Scroll down
  //     owl.trigger('next.owl.carousel');
  //   }
  //   e.preventDefault();
  // });




  // Initialize tilt
  $(".3d1").tilt({
    reverse: false,  // reverse the tilt direction
    maxTilt: 25,    // max tilt rotation (degrees)
    startX: 0,      // the starting tilt on the X axis, in degrees.
    startY: 0,      // the starting tilt on the Y axis, in degrees.
    perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.05,      // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000,    // Speed of the enter/exit transition
    transition: false,   // Set a transition on enter/exit.
    axis: null,   // What axis should be enabled. Can be "x" or "y"
    reset: true,   // If the tilt effect has to be reset on exit.
    "reset-to-start": true,   // Whether the exit reset will go to [0,0] (default) or [startX, startY]
    easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    glare: false,  // if it should have a "glare" effect
    "max-glare": 0.2,      // the maximum "glare" opacity (1 = 100%, 0.5 = 50%)
    "glare-prerender": false,  // false = VanillaTilt creates the glare elements for you, otherwise
    // you need to add .js-tilt-glare>.js-tilt-glare-inner by yourself
    "mouse-event-element": null,   // css-selector or link to HTML-element what will be listen mouse events
    gyroscope: true,   // Boolean to enable/disable device orientation detection,
    gyroscopeMinAngleX: -65,    // This is the bottom limit of the device angle on X axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the left border of the element;
    gyroscopeMaxAngleX: 65,     // This is the top limit of the device angle on X axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the right border of the element;
    gyroscopeMinAngleY: -65,    // This is the bottom limit of the device angle on Y axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the top border of the element;
    gyroscopeMaxAngleY: 65,     // This is the top limit of the device angle on Y axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the bottom border of the element;
  });
  $(".3d2").tilt({
    reverse: false,
    max: 35,
    startX: 0,
    startY: 0,
    perspective: 1000,
    scale: 0.95,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    "reset-to-start": true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
    glare: false,
    "max-glare": 0.2,
    "glare-prerender": false,
    "mouse-event-element": null,
    gyroscope: true,
    gyroscopeMinAngleX: -65,
    gyroscopeMaxAngleX: 65,
    gyroscopeMinAngleY: -65,
    gyroscopeMaxAngleY: 65,
  });
});





particlesJS("particles-js",{
  particles: {
    number: { value: 80,density: { enable: true,value_area: 800 } },
    color: { value: "#000000" },
    shape: { type: "circle",stroke: { width: 0,color: "#000000" },polygon: { nb_sides: 5 },image: { src: "img/github.svg",width: 100,height: 100 } },
    opacity: { value: 0.5,random: false,anim: { enable: false,speed: 1,opacity_min: 0.1,sync: false } },
    size: { value: 3,random: true,anim: { enable: false,speed: 40,size_min: 0.1,sync: false } },
    line_linked: { enable: true,distance: 150,color: "#000000",opacity: 0.4,width: 1 },
    move: { enable: true,speed: 4,direction: "none",random: false,straight: false,out_mode: "out",bounce: false,attract: { enable: false,rotateX: 600,rotateY: 1200 } },
  },
  interactivity: {
    detect_on: "canvas",
    events: { onhover: { enable: true,mode: "repulse" },onclick: { enable: true,mode: "push" },resize: true },
    modes: {
      grab: { distance: 400,line_linked: { opacity: 1 } },
      bubble: { distance: 400,size: 40,duration: 2,opacity: 8,speed: 3 },
      repulse: { distance: 100,duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
})
var count_particles,stats,update
stats = new Stats();
stats.setMode(0)
stats.domElement.style.position = "absolute"
stats.domElement.style.left = "0px"
stats.domElement.style.top = "0px"
document.body.appendChild(stats.domElement)
count_particles = document.querySelector(".js-count-particles")
update = function () {
  stats.begin()
  stats.end()
  if (window.pJSDom[ 0 ].pJS.particles && window.pJSDom[ 0 ].pJS.particles.array)
  {
    count_particles.innerText = window.pJSDom[ 0 ].pJS.particles.array.length
  }
  requestAnimationFrame(update)
}
requestAnimationFrame(update)



document.addEventListener('DOMContentLoaded',() => {
  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\\.,;:\s@\"]+\.)+[^<>()[\]\\.,;:\s@\"]{2,})$/i
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    document.getElementById('fname-error').textContent = '';
    document.getElementById('lname-error').textContent = '';
    document.getElementById('email-error').textContent = '';
    document.getElementById('phone-error').textContent = '';
    document.getElementById('expertise-error').textContent = '';
    document.getElementById('message-error').textContent = '';

    const fname = document.getElementById('fname').value.trim();
    const lname = document.getElementById('lname').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const expertise = document.getElementById('expertise').value.trim();
    const message = document.getElementById('message').value.trim();

    let hasError = false;

    if (!fname)
    {
      document.getElementById('fname-error').textContent = '* required.';
      hasError = true;
    } else if (!/^[A-Za-z]+$/.test(fname))
    {
      document.getElementById('fname-error').textContent = 'First name must only contain alphabetic characters.';
      hasError = true;
    }
    if (!lname)
    {
      document.getElementById('lname-error').textContent = '* required.';
      hasError = true;
    } else if (lname === fname)
    {
      document.getElementById('lname-error').textContent = 'Last name cannot be the same as first name.';
      hasError = true;
    } else if (!/^[A-Za-z]+$/.test(lname))
    {
      document.getElementById('lname-error').textContent = 'Last name must only contain alphabetic characters.';
      hasError = true;
    }
    if (!validateEmail(email))
    {
      document.getElementById('email-error').textContent = 'Invalid E-mail';
      hasError = true;
    }
    if (!phone)
    {
      document.getElementById('phone-error').textContent = '* required.';
      hasError = true;
    } else if (!/^\d{9,11}$/.test(phone))
    {
      document.getElementById('phone-error').textContent = 'Phone number must be between 9 and 11 digits.';
      hasError = true;
    }

    if (expertise.split(/\s+/).length < 50)
    {
      document.getElementById('expertise-error').textContent = 'Expertise must contain a minimum of 50 words.';
      hasError = true;
    }
    if (message.split(/\s+/).length < 100)
    {
      document.getElementById('message-error').textContent = 'Message must contain a minimum of 100 words.';
      hasError = true;
    }
    if (!hasError)
    {
      const formData = {
        fname,
        lname,
        email,
        phone,
        expertise,
        message
      };

      console.log(formData);
    }
  };

  document.getElementById('myForm').addEventListener('submit',handleSubmit);
});