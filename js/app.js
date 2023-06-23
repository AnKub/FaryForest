window.addEventListener('scroll', e=> {
document.body.style.cssText += `--scrollTop: ${this.scrollY}px`
})
gsap.registerPlugin(scrollTrigger,ScrollSmoother)
ScreenOrientation.create({
    wrapper:'.wrapper',
    content: '.content'
})