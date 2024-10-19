<template>
  <div>
    <nav class="bg-white shadow-md py-4 fixed w-full z-10 top-0">
      <div class="container mx-auto flex justify-between items-center px-6">
        <a href="#" class="text-2xl font-bold">D1ZEASE</a>
        <ul class="flex text-xl space-x-20">
          <li><a href="#projects" class="text-gray-700 hover:text-blue-500" @click.prevent="scrollToSection('projects')">Projects</a></li>
          <li><a href="#about" class="text-gray-700 hover:text-blue-500" @click.prevent="scrollToSection('about')">About Me</a></li>
          <li><a href="#contact" class="text-gray-700 hover:text-blue-500" @click.prevent="scrollToSection('contact')">Contact</a></li>
        </ul>
        <button class="bg-blue-600 text-white px-4 py-2 rounded-lg">🔆</button>
      </div>
    </nav>

    <section class="bg-gray-50 py-20 mt-20" id="home">
      <div class="container mx-auto flex flex-col items-center text-center">
        <h1 class="text-4xl font-bold mb-4">Hi! I'm D1ZEASE</h1>
        <p class="text-lg text-gray-600 mb-6">A Student, Developer & Design Enthusiast</p>
        <button class="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">Download CV</button>
        <img src="/src/assets/01890923f178ea5693c3816aa0bc65e2.jpg" alt="developer" class="mt-10 w-2/3" />
      </div>
    </section>

    <section id="projects" class="py-20">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold text-center mb-10">Projects Portfolio</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-for="project in projects" :key="project.id" class="bg-white shadow-lg rounded-lg p-4">
            <img :src="project.image" alt="project image" class="w-full h-40 object-cover rounded-t-lg" />
            <h3 class="text-xl font-semibold mt-4">{{ project.title }}</h3>
            <p class="text-gray-600 mt-2">{{ project.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section id="about" class="py-20 bg-gray-100">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold text-center mb-10">About Me</h2>
        <p class="text-center max-w-2xl mx-auto text-gray-700">
          I'm a passionate student and developer with a love for creating beautiful and functional web and mobile applications.
          I enjoy learning new technologies and continuously improving my skills.
        </p>
      </div>
    </section>

    <section id="contact" class="py-20">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold text-center mb-10">Contact Me</h2>
        <form class="max-w-lg mx-auto">
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="name">Name</label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your Name">
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="email">Email</label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Your Email">
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="message">Message</label>
            <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" rows="5" placeholder="Your Message"></textarea>
          </div>
          <button class="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600" type="submit">Send Message</button>
        </form>
      </div>
    </section>

    <button
      v-if="showBackToTop"
      @click="scrollToTop"
      class="fixed bottom-8 right-8 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none"
    >
      ⬆️
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          id: 1,
          title: 'Digital Portfolio',
          description: 'A portfolio website designed using Vue.js and Tailwind CSS.',
          image: 'https://via.placeholder.com/300x200',
        },
        {
          id: 2,
          title: 'Mobile App Design',
          description: 'A sleek mobile app interface built with Flutter.',
          image: 'https://via.placeholder.com/300x200',
        },
        {
          id: 3,
          title: 'E-commerce Dashboard',
          description: 'An admin dashboard for e-commerce built with React.js.',
          image: 'https://via.placeholder.com/300x200',
        },
      ],
      showBackToTop: false,
    };
  },
  methods: {
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      section.scrollIntoView({ behavior: 'smooth' });
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    handleScroll() {
      this.showBackToTop = window.scrollY > 100;
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

<style scoped>
</style>
