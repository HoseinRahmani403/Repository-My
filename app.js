function toggle() {
    var toggleButton = document.getElementById('aside-toggle');
    toggleButton.classList.toggle("aside");
}

function toggleList(id, className) {
    var list = document.getElementById(id);
    list.classList.toggle(className);
}
function btntoggle() {
    toggleList("list", "show");
}

function btntoggle2() {
    toggleList("list2", "show2");

}