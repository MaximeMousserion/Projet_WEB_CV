function toggle(element) {
    let list = element.nextElementSibling;

    if (list.classList.contains("hidden")) {
        list.classList.remove("hidden");
    } else {
        list.classList.add("hidden");
    }
}