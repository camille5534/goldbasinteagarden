export default {
    template:`
    <nav class="bg-[#E5E3C9]/80 border-gray-200 px-2 sm:px-4 py-2.5 shadow-md rounded fixed w-full z-[999]">
        <div class="container flex flex-wrap w-3/4 sm:w-5/6 justify-between items-center mx-auto">
            <a href="./index.html" class="flex items-center justify-start">
                <img src="./img/tealogo.png" class="aspect-square mr-3 h-7 sm:h-9 hover:w-[36px] hover:h-[36px] hover:opacity-75" alt="">
                <span class="self-center text-3xl text-[#006872] font-semibold whitespace-nowrap dark:text-white tracking-wider font-noto-700 ">金盆茶園</span>
            </a>
            <button id ="navbar-menu" data-collapse-toggle="navbar-panel" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
            <div class="hidden w-full md:block md:w-auto space-x-1" id="navbar-panel">
                <ul class="flex flex-col p-4 mt-4 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                    <a href="./about_us.html" class="block py-2 pr-4 pl-3 text-2xl text-right text-[#006872] font-semibold tracking-wide rounded hover:bg-[#94B49F] hover:shadow-md hover:rounded-xl hover:tracking-wider duration-500 font-noto-300">關於我們</a>
                </li>
                <li>
                    <a href="./products.html" class="block py-2 pr-4 pl-3 text-2xl text-right text-[#006872] font-semibold tracking-wide rounded hover:bg-[#94B49F] hover:shadow-md hover:rounded-xl hover:tracking-wider duration-500 font-noto-300">商品清單</a>
                </li>
                <li>
                    <a href="./contacts.html" class="block py-2 pr-4 pl-3 text-2xl text-right text-[#006872] font-semibold tracking-wide rounded hover:bg-[#94B49F] hover:shadow-md hover:rounded-xl hover:tracking-wider duration-500 font-noto-300">聯絡我們</a>
                </li>
                </ul>
            </div>
        </div>
    </nav>
    `
}