<div
  id="layout"
  class="container flex items-center justify-between w-full max-w-3xl px-6 py-10 mx-auto xl:max-w-5xl"
>
  <a rel="noopener noreferrer" href="/" class="block h-6 text-2xl font-semibold"
    >homepage</a
  >
  <nav class="flex items-center">
    <ul class="hidden space-x-2 font-medium sm:block">
      <a href="/blog/2023.11.07" class="">1st blog post</a>
      <a href="/blog" class="p-1">blog</a>
      <button
        aria-label="Toggle Dark Mode"
        type="button"
        class="w-8 h-8 p-1 ml-1 mr-1 rounded sm:ml-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="dark:text-gray-900"
        >
          <path
            d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
          />
        </svg>
      </button>
      <div class="sm:hidden">
        <button
          type="button"
          aria-label="Toggle Menu"
          class="w-8 h-8 ml-1 mr-1 rounded"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="dark:text-gray-900"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <div
          class="fixed right-0 z-10 w-full h-full duration-300 ease-in-out transform translate-x-full top-24"
        >
          <button
            type="button"
            aria-label="toggle modal"
            class="fixed w-full h-full cursor-auto focus:outline-none"
          />
          <nav class="fixed h-full mt-8">
            <div class="px-12 py-4">
              <a
                rel="noopener noreferrer"
                href="/"
                class="text-2xl font-bold tracki dark:text-gray-900">Blog</a
              >
            </div>
            <div class="px-12 py-4">
              <a
                rel="noopener noreferrer"
                href="/"
                class="text-2xl font-bold tracki dark:text-gray-900">Tags</a
              >
            </div>
            <div class="px-12 py-4">
              <a
                rel="noopener noreferrer"
                href="/"
                class="text-2xl font-bold tracki dark:text-gray-900">Projects</a
              >
            </div>
            <div class="px-12 py-4">
              <a
                rel="noopener noreferrer"
                href="/"
                class="text-2xl font-bold tracki dark:text-gray-900">About</a
              >
            </div>
          </nav>
        </div>
      </div>
    </ul>
  </nav>
</div>
