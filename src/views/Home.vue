<template>
    <div>
      <nav class="bg-white shadow-md py-4">
        <div class="container mx-auto flex justify-between items-center px-6">
            <router-link to="/" class="text-2xl font-bold">D1ZEASE</router-link>
          <ul class="flex text-xl space-x-20">
            <li><router-link to="/projects" class="text-gray-700 hover:text-blue-500">Projects</router-link></li>
            <li><router-link to="/about" class="text-gray-700 hover:text-blue-500">About Me</router-link></li>
            <li><router-link to="/contact" class="text-gray-700 hover:text-blue-500">Contact</router-link></li>
          </ul>
          <button class="bg-blue-600 text-white px-4 py-2 rounded-lg">🔆</button>
        </div>
      </nav>
  
      <section class="bg-gray-50 py-20">
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
      };
    },
  };
  </script>
  