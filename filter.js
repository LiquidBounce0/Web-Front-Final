function applyFilters() {
    const filter1 = document.getElementById("inf-mat").checked;
    const filter2 = document.getElementById("phys-mat").checked;
    const filter3 = document.getElementById("geo-mat").checked;
    const filter4 = document.getElementById("creative").checked;

    localStorage.setItem("filter1", filter1);
    localStorage.setItem("filter2", filter2);
    localStorage.setItem("filter3", filter3);
    localStorage.setItem("filter4", filter4);

    const elements = document.getElementsByClassName("card");

    for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = "none";
    }
    

    if (filter1) {
        const elements = document.getElementsByClassName("inf-mat");

        for (let i = 0; i < elements.length; i++) {
            elements[i].style.display = "inline-block";
        }
    }

    if (filter2) {
        const elements = document.getElementsByClassName("phys-mat");

        for (let i = 0; i < elements.length; i++) {
            elements[i].style.display = "inline-block";
        }
    }

    if (filter3) {
        const elements = document.getElementsByClassName("geo-mat");

        for (let i = 0; i < elements.length; i++) {
            elements[i].style.display = "inline-block";
        }
    }

    if (filter4) {
        const elements = document.getElementsByClassName("creative");

        for (let i = 0; i < elements.length; i++) {
            elements[i].style.display = "inline-block";
        }
    }
}

function loadFilters() {

    document.getElementById("inf-mat").checked = localStorage.getItem("filter1") === "true";
    document.getElementById("phys-mat").checked = localStorage.getItem("filter2") === "true";
    document.getElementById("geo-mat").checked = localStorage.getItem("filter3") === "true";
    document.getElementById("creative").checked = localStorage.getItem("filter4") === "true";


    applyFilters();
}


window.onload = loadFilters;
