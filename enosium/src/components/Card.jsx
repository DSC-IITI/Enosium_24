import React from 'react';

const Card = () => {
  return (
    <section>
  <div class="space-y-8 px-5 py-4 lg:divide-y lg:divide-gray-100">

    <div class="pt-8  sm:flex lg:items-end group">
      <div class="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4">
        <img class="w-full rounded-md h-40 lg:w-50 object-cover" src="https://th.bing.com/th/id/OIP.lM0JN2VxymAZWpqVvqMPTwHaE5?w=299&h=198&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="text"/>
      </div>
      <div  >
        <span class="text-sm text-gray-500">August 20.20.21</span>
        <p class="mt-3 text-lg font-medium leading-6">
          <a href="./blog-post.html" class="text-xl text-gray-800 group-hover:text-gray-500 lg:text-2xl">12 Graphic Design Skills You Need To Get Hired (&amp; How to Develop Them) </a>
        </p>
        <p class="mt-2 text-lg text-gray-500">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
      </div>
    </div>
    
  </div>
</section>
  )
}

export default Card