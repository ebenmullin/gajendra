let tl = gsap.timeline({defaults: {ease: "power2.out", duration: 2}});
  
tl
    .to("nav", 2, {opacity: 1})
    .to(".text", 2, {opacity: 1});
    // .from(".text h1", 1, {ease: "power4.inOut", width: 100})
    // .from(".hero", 2, {xPercent: -130}, "=-0.5")
    // .from(".hero img", 2, {xPercent: 130}, "=-2")
    // .from(".text-container", 1, {opacity: 0, yPercent: 20}, "=-1")
    // .from(".rotate", 1, {opacity: 0}, "=-1")
    // .set(".hero", {"box-shadow": "0 0 50px rgba(0, 0, 0, 0.9)"});