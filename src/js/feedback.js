export { feedback };
let call = document.querySelectorAll('.call');
let message = document.querySelectorAll('.message');
let closeSide = document.querySelector('.rightside__close');
let rightSide = document.querySelector('.rightside');
let sidebar = document.querySelector('.sidebar');
let container = document.querySelector('.container');
let feedbacks = document.querySelector('.feedback');
let feedcalls = document.querySelector('.feedcall');
let footer = document.querySelector('.footer');

function feedback() {
    for (let i = 0; i < call.length; i++) {
        call[i].addEventListener('click', function() {
            rightSide.classList.add('show-rightside-class');
            sidebar.classList.remove('show-sidebar-class');
            container.classList.add('opacity-for-container');
            feedcalls.classList.add('feedcall-show');
            feedbacks.classList.remove('feedback-show');
            sidebar.classList.add('opacity-for-sidebar');
            footer.classList.add('opacity-for-footer');
        });
    }
    for (let i = 0; i < message.length; i++) {
        message[i].addEventListener('click', function() {
            rightSide.classList.add('show-rightside-class');
            sidebar.classList.remove('show-sidebar-class');
            container.classList.add('opacity-for-container');
            feedbacks.classList.add('feedback-show');
            feedcalls.classList.remove('feedcall-show');
            sidebar.classList.add('opacity-for-sidebar');
            footer.classList.add('opacity-for-footer');
        });
    }

    closeSide.addEventListener('click', function() {
        rightSide.classList.add('hidden-class');

        function remove() {
            rightSide.classList.remove('hidden-class');
        }
        setTimeout(remove, 500);
        feedbacks.classList.remove('feedback-show');
        feedcalls.classList.remove('feedcall-show');
        rightSide.classList.remove('show-rightside-class');
        container.classList.remove('opacity-for-container');
        sidebar.classList.remove('opacity-for-sidebar');
        footer.classList.remove('opacity-for-footer');
    });



}