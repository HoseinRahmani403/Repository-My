// function toggle() {
//     var toggleButton = document.getElementById('aside-toggle');
//     toggleButton.classList.toggle("aside");
// }

// function toggleList(id, className) {
//     var list = document.getElementById(id);
//     list.classList.toggle(className);
// }
// function btntoggle() {
//     toggleList("list", "show");
// }

// function btntoggle2() {
//     toggleList("list2", "show2");

// }

const toggle = () => {
    const toggleButton = document.querySelector('#aside-toggle');
    toggleButton.classList.toggle("aside");
};

const toggleList = (id, className) => {
    const list = document.querySelector(`#${id}`);
    list.classList.toggle(className);
};

const btntoggle = () => {
    toggleList("list", "show");
};

const btntoggle2 = () => {
    toggleList("list2", "show2");
};