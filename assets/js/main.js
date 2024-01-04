    
    
    $(document).ready(function () {


        //------------ testimonial slider -------------

        $('.testimonial__card__wrapper').owlCarousel({
            loop: true,
            margin: 22,
            nav: true,
            navText: ['<img src="./assets/img/testimonial/arrow-left.png">', '<img src="./assets/img/testimonial/arrow-right.png">' ],
            dots: false,
            autoWidth:true,
            smartSpeed: 1000
        });

        // video slider 
        $('.video__slider').owlCarousel({
            loop: true,
            margin: 22,
            nav: true,
            navText: ['<img src="./assets/img/testimonial/arrow-left.png">', '<img src="./assets/img/testimonial/arrow-right.png">' ],
            dots: false,
            smartSpeed: 1000,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                }
            }
        });

        // step slider
        $('.work__step__wrapper').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            navText: ['<img src="./assets/img/testimonial/arrow-left.png">', '<img src="./assets/img/testimonial/arrow-right.png">' ],
            dots: false,
            autoWidth:true,
            smartSpeed: 1000,
            responsiveClass:true,
            responsive:{
                0:{
                    autoWidth:false,
                    items:1,

                },
                576: {
                    autoWidth:false,
                    items:2,
                },
                768: {
                    autoWidth:true,
                }
            }
        })

        // purchase slider
        
        $('.purchase__slider').owlCarousel({
            loop: true,
            margin: 43,
            nav: true,
            navText: ['<img src="./assets/img/testimonial/arrow-left.png">', '<img src="./assets/img/testimonial/arrow-right.png">' ],
            dots: false,
            autoWidth:true,
            center: true,
            smartSpeed: 800
        });

        // product slider 
        $('.product__wrapper__sm').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            navText: ['<img src="./assets/img/testimonial/arrow-left.png">', '<img src="./assets/img/testimonial/arrow-right.png">' ],
            dots: false,
            smartSpeed: 1000,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                }
            }
        });

        new DataTable('#example');
        // $('#example').DataTable();


        // You can also pass an optional settings object
        // below listed default settings
        AOS.init({
            // Global settings:
            disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
            startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
            initClassName: 'aos-init', // class applied after initialization
            animatedClassName: 'aos-animate', // class applied on animation
            useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
            disableMutationObserver: false, // disables automatic mutations' detections (advanced)
            debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
            throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


            // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
            offset: 120, // offset (in px) from the original trigger point
            delay: 0, // values from 0 to 3000, with step 50ms
            duration: 400, // values from 0 to 3000, with step 50ms
            easing: 'ease', // default easing for AOS animations
            once: true, // whether animation should happen only once - while scrolling down
            mirror: false, // whether elements should animate out while scrolling past them
            anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

        });


    }); //---document-ready-----


    // video pop up
    new VenoBox({
        selector: '.play__icon',
    });