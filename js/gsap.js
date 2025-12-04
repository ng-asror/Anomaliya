gsap.registerPlugin(
	MorphSVGPlugin,
	Observer,
	ScrollTrigger,
	ScrollSmoother,
	ScrollToPlugin
);

/*===== hero section =====*/
const heroes = gsap.utils.toArray('.heroes__img');
const distance = heroes[0].offsetHeight;

gsap.to(heroes, {
	y: `-=${distance * (heroes.length / 3)}`,
	duration: 10,
	ease: "linear",
	repeat: -1
});
