const startBtnRef = document.querySelector('button[data-start]');
const stopBtnRef = document.querySelector('button[data-stop]');
const bodyRef = document.querySelector('body');

const colorSwitcher = {
  intervalId: null,
  isActive: false,
  startSwitch() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    this.intervalId = setInterval(() => {
      let color = getRandomHexColor();
      bodyRef.style.backgroundColor = color;
    }, 1000);
  },

  stopSwitch() {
    clearInterval(this.intervalId);
    this.isActive = false;
  },
};

startBtnRef.addEventListener('click', () => {
  colorSwitcher.startSwitch();
});

stopBtnRef.addEventListener('click', () => {
  colorSwitcher.stopSwitch();
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
