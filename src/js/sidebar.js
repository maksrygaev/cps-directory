export { sidebarShow };
let buttonsMenu = document.querySelectorAll('.open-menu');
let buttonClose = document.querySelector('.close-menu');
let sidebar = document.querySelector('.sidebar');
let container = document.querySelector('.container');
let rightSide = document.querySelector('.rightside');
let wrapper = document.querySelector('.wrapper');
let footer = document.querySelector('.footer');
let screenWidth;

function sidebarShow() {
    for (let i = 0; i < buttonsMenu.length; i++) {
        buttonsMenu[i].addEventListener('click', function() {
            sidebar.classList.add('show-sidebar-class');
            container.classList.add('opacity-for-container');
            rightSide.classList.remove('show-rightside-class');
            footer.classList.add('opacity-for-footer');

        });
    }
    window.addEventListener('resize', function() {
        screenWidth = window.innerWidth;
        if (screenWidth > 1200) {
            sidebar.classList.remove('show-sidebar-class');
            container.classList.remove('opacity-for-container');
            sidebar.classList.remove('opacity-for-sidebar');
             footer.classList.remove('opacity-for-footer');
        }
    });
    buttonClose.addEventListener('click', function() {
        sidebar.classList.add('hidden-move-class');

        function remove() {
            sidebar.classList.remove('hidden-move-class');
        }
        setTimeout(remove, 600);
        sidebar.classList.remove('show-sidebar-class');
        container.classList.remove('opacity-for-container');
         footer.classList.remove('opacity-for-footer');
    });
    wrapper.addEventListener('click', function() {
        sidebar.classList.remove('show-sidebar-class');
        container.classList.remove('opacity-for-container');
        rightSide.classList.remove('show-rightside-class');
        sidebar.classList.remove('opacity-for-sidebar');
         footer.classList.remove('opacity-for-footer');
    });


}