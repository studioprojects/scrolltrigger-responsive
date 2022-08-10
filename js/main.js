
gsap.registerPlugin(ScrollTrigger);

// handy little snippet to shrink a page
// gsap.set("body", {scale: 0.3, transformOrigin: "left top"});  

const sections = gsap.utils.toArray(".cols-2")

sections.forEach((element, index) => {
  let items = element.querySelectorAll(".item");
  let distance = (index % 2 == 0) ? -100 : 100;

  let tl = gsap.timeline({paused: true})
    .from(items, {duration: 1, xPercent: gsap.utils.wrap([distance, -distance])})
    .from(items, {opacity: 0, duration: 1}, 0)

    ScrollTrigger.create({
      trigger: element,
      start: "top 50%",
      onEnter: () => tl.play()
    })

    ScrollTrigger.create({
      trigger: element,
      start: "top 100%",
      onLeaveBack: () => tl.pause(0)
    })
})

// console.log('yes')