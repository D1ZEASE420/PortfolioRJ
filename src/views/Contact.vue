<template>
    <div class="container mx-auto py-20">
      <h1 class="text-4xl font-bold text-center mb-6">Contact Me</h1>
      <p class="text-lg text-gray-700 text-center mb-8">
        Feel free to reach out to me for any project inquiries or collaborations.
      </p>
      <form class="max-w-lg mx-auto">
        <div class="mb-4">
          <label class="block text-gray-700">Name</label>
          <input type="text" class="w-full px-3 py-2 border rounded-lg" />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700">Email</label>
          <input type="email" class="w-full px-3 py-2 border rounded-lg" />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700">Message</label>
          <textarea class="w-full px-3 py-2 border rounded-lg"></textarea>
        </div>
        <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Send Message
        </button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Contact',
  };
  </script>
  