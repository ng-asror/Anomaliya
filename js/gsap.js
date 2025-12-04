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
const heroBtn = document.querySelector('.hero-wrapper__btn');

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
	start: 'top center',
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


/*===== results section =====*/
ScrollTrigger.create({
	trigger: '.card-learning',
	start: 'top center',
	onEnter: () => {
		const tl = gsap.timeline();
		tl.to('#count', {
			textContent: 37,
			duration: 3,
			snap: { textContent: 1 },
			ease: "power1.out"
		}, 0)

			.to('img.ellipsis', {
				rotate: 150,
				duration: 3,
				ease: 'power1.out'
			}, 0);
	}
});


ScrollTrigger.create({
	trigger: '.card-partners',
	start: 'top center',
	onEnter: () => {
		const images = [...gsap.utils.toArray('.partners .partner-img'), '.main-partner img']
		gsap.to(images, {
			scale: 1.2,
			translateY: "-8",
			duration: 3,
			ease: 'power3.out'
		})
	}
})
ScrollTrigger.create({
	trigger: '.card-overcome',
	start: 'top center',
	onEnter: () => {
		gsap.to('.card-overcome img', {
			translate: "-15px -15px",
			duration: 3,
			ease: 'power3.out'
		})
	}
})
const wrapper = document.querySelector("#results");
const sticky = document.querySelector(".results-wrapper__left");
ScrollTrigger.create({
	trigger: wrapper,
	start: "top+=60 top",
	end: `${wrapper.offsetHeight += sticky.offsetHeight}px`,
	pin: sticky,
	pinSpacing: false,
	scrub: true
});