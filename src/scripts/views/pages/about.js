import { createAboutTemplate } from '../templates/template-creator';

const About = {
  async render() {
    return `
      <div id="about" class="restaurant"></div>
    `;
  },

  async afterRender() {
    const aboutContainer = document.querySelector('#about');
    aboutContainer.innerHTML = createAboutTemplate();
  },
};

export default About;
