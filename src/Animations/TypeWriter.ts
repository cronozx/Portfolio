import gsap from "gsap";

export function typewriter(firstNameRef:HTMLElement, lastNameRef:HTMLElement) {
    if (!firstNameRef || !lastNameRef) return gsap.timeline();

    const timeline = gsap.timeline()

    timeline.to(firstNameRef, {
        duration: 0.5,
        text: 'Joseph',
    })

    timeline.to(lastNameRef, {
        duration: 0.8,
        text: 'Greenhouse'
    })

    return timeline
}