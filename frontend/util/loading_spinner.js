export const addMainSpinner = () => {
    const mainSpinner = document.getElementById("main-spinner");
    if (!mainSpinner) return;
    mainSpinner.classList.add("show-spinner");
}

export const removeMainSpinner = () => {
    const mainSpinner = document.getElementById("main-spinner");
    if (!mainSpinner) return;
    mainSpinner.classList.remove("show-spinner");
}