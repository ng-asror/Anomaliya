gsap.registerPlugin(
	MorphSVGPlugin,
	Observer,
	ScrollTrigger,
	ScrollSmoother,
	ScrollToPlugin
);

/*===== body =====*/
ScrollSmoother.create({
	smooth: 2,
	effects: true,
	normalizeScroll: true
})

const header = document.querySelector('header');

ScrollTrigger.create({
	trigger: '#smooth-content',
	start: "top -100",
	onEnter: () => header.classList.add('sticky'),
	onLeaveBack: () => header.classList.remove('sticky')
})

/*===== hero section =====*/
const heroes = gsap.utils.toArray('.heroes__img');
const distance = heroes[0].offsetHeight;

gsap.to(heroes, {
	y: `-=${distance * (heroes.length / 3)}`,
	duration: 10,
	ease: "linear",
	repeat: -1
});


/*===== encounter section =====*/
const encounter = document.getElementById('encounter');
const encounter__card = encounter.querySelector('.encounter__card');

ScrollTrigger.create({
	trigger: encounter,
	start: 'center bottom',
	onEnter: () => encounterAboutFN(),
})

function encounterAboutFN() {
	gsap.to('.encounter__card-about.right', {
		opacity: 1,
		duration: 3,
		delay: .5,
		ease: 'power1.out'
	})
	gsap.to('.encounter__card-about.left', {
		opacity: 0.5,
		duration: 3,
		delay: .5,
		ease: 'power1.out'
	})
}