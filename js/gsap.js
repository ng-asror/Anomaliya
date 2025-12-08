gsap.registerPlugin(
	MorphSVGPlugin,
	Observer,
	ScrollTrigger,
	ScrollSmoother,
	ScrollToPlugin,
);

/*===== body =====*/
ScrollSmoother.create({
	wrapper: '#smooth-wrapper',
	content: '#smooth-content',
	smooth: 2,
	effects: true,
	normalizeScroll: true,
	ignore: '.relevant__card-about'
})

const header = document.querySelector('header');

ScrollTrigger.create({
	trigger: '#smooth-content',
	start: "top -100",
	onEnter: () => header.classList.add('sticky'),
	onLeaveBack: () => header.classList.remove('sticky')
})