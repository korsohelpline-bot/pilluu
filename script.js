const pupils = document.querySelectorAll(".pupil");

document.addEventListener("mousemove", (e) => {
  pupils.forEach(pupil => {
    const rect = pupil.getBoundingClientRect();

    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    const angle = Math.atan2(e.clientY - y, e.clientX - x);

    const moveX = Math.cos(angle) * 10;
    const moveY = Math.sin(angle) * 10;

    pupil.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });
});
