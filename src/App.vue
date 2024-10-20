<template> 
  <div :class="{ 'dark': isDarkMode }">
    <nav :class="isDarkMode ? 'bg-gray-900 text-white shadow-md' : 'bg-white text-black shadow-md'" class="py-4 fixed w-full z-10 top-0">
      <div class="container mx-auto flex justify-between items-center px-6">
        <!-- Updated link for D1ZEASE -->
        <a href="https://github.com/D1ZEASE420" target="_blank" rel="noopener noreferrer" class="text-2xl font-bold">D1ZEASE</a>
        <ul class="flex text-xl space-x-20">
          <li><a href="#projects" :class="isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-blue-500'" @click.prevent="scrollToSection('projects')">Projects</a></li>
          <li><a href="#about" :class="isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-blue-500'" @click.prevent="scrollToSection('about')">About Me</a></li>
          <li><a href="#contact" :class="isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-blue-500'" @click.prevent="scrollToSection('contact')">Contact</a></li>
        </ul>
        <button @click="toggleDarkMode" :class="isDarkMode ? 'bg-yellow-400 text-black' : 'bg-blue-600 text-white'" class="px-4 py-2 rounded-lg">
          {{ isDarkMode ? '🌑' : '🔆' }}
        </button>
      </div>
    </nav>
    <section :class="isDarkMode ? 'bg-gray-800 text-white mt-16' : 'bg-gray-50 text-black mt-16'" class="py-20" id="home">
      <div class="container mx-auto flex flex-col items-center text-center">
        <h1 class="text-4xl font-bold mb-4">Hi! I'm D1ZEASE</h1>
        <p :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mb-6">A Student, Developer & Design Enthusiast</p>
        <button :class="isDarkMode ? 'bg-yellow-500 text-black' : 'bg-blue-500 text-white'" class="px-6 py-3 rounded-lg hover:bg-blue-600">Download CV</button>
        <img src="/src/assets/01890923f178ea5693c3816aa0bc65e2.jpg" alt="developer" class="mt-10 w-2/3" />
      </div>
    </section>
    <section id="projects" :class="isDarkMode ? 'bg-gray-900 text-white mt-16' : 'bg-white text-black mt-16'" class="py-20">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold text-center mb-10">Projects Portfolio</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-for="project in projects" :key="project.id" :class="isDarkMode ? 'bg-gray-800' : 'bg-white'" class="shadow-lg rounded-lg p-4">
            <img :src="project.image" alt="project image" class="w-full h-40 object-cover rounded-t-lg" />
            <h3 class="text-xl font-semibold mt-4">{{ project.title }}</h3>
            <p :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mt-2">{{ project.description }}</p>
          </div>
        </div>
      </div>
    </section>
    <section id="about" :class="isDarkMode ? 'bg-gray-800 text-white mt-16' : 'bg-gray-100 text-black mt-16'" class="py-20">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold text-center mb-10">About Me</h2>
        <p :class="isDarkMode ? 'text-gray-400' : 'text-gray-700'" class="text-center max-w-2xl mx-auto">
          I'm a passionate student and developer aspiring to learn for new skills to create beautiful and functional web and mobile applications.
          I enjoy learning new technologies and continuously improving my skills.
        </p>
      </div>
    </section>
    <section id="contact" :class="isDarkMode ? 'bg-gray-800 text-white mt-16' : 'bg-white text-black mt-16'" class="py-20">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold text-center mb-10">Contact Me</h2>
        <form class="max-w-lg mx-auto">
          <div class="mb-4">
            <label :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'" class="block text-sm font-bold mb-2" for="name">Name</label>
            <input :class="isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-black'" class="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your Name">
          </div>
          <div class="mb-4">
            <label :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'" class="block text-sm font-bold mb-2" for="email">Email</label>
            <input :class="isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-black'" class="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Your Email">
          </div>
          <div class="mb-4">
            <label :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'" class="block text-sm font-bold mb-2" for="message">Message</label>
            <textarea :class="isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-black'" class="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" id="message" rows="5" placeholder="Your Message"></textarea>
          </div>
          <button :class="isDarkMode ? 'bg-yellow-500 text-black' : 'bg-blue-500 text-white'" class="px-6 py-3 rounded-lg hover:bg-blue-600" type="submit">Send Message</button>
        </form>
      </div>
    </section>
    <button
      v-if="showBackToTop"
      @click="scrollToTop"
      :class="isDarkMode ? 'bg-yellow-500 text-black' : 'bg-blue-500 text-white'" class="fixed bottom-8 right-8 p-3 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none"
    >
      🔝
    </button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isDarkMode: false,
      projects: [
        {
          id: 1,
          title: 'mingi projekt',
          description: 'mingi projekt.',
          image: 'https://img.freepik.com/free-photo/diverse-programmers-discussing-about-html-code-compiling-discovers-errors-standing-front-multiple-screens-startup-office-software-developers-working-server-interface-development_482257-64363.jpg?ga=GA1.1.1272331478.1729328198&semt=ais_hybrid',
        },
        {
          id: 2,
          title: 'mingi projekt',
          description: 'mingi projekt.',
          image: 'https://img.freepik.com/free-photo/team-coworkers-comparing-source-codes-running-laptop-screen-computer-monitor-it-development-office-software-developers-collaborating-data-coding-group-project-while-sitting-desk_482257-41846.jpg?ga=GA1.1.1272331478.1729328198&semt=ais_hybrid',
        },
        {
          id: 3,
          title: 'mingi projekt',
          description: 'mingi projekt.',
          image: 'https://img.freepik.com/premium-photo/diverse-group-software-developers-coding-multiple-screens-with-tech-gadgets-scattered_1271244-279387.jpg?ga=GA1.1.1272331478.1729328198&semt=ais_hybrid',
        },
      ],
      showBackToTop: false,
    };
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
    },
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
.dark {
  background-color: #1a202c;
  color: white;
}
</style>
