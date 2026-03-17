// member profile page script

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".detail-btn");

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            const toast = document.createElement("div");
            toast.innerText = "아직 준비중입니다.";

            toast.style.position = "fixed";
            toast.style.bottom = "30px";
            toast.style.left = "50%";
            toast.style.transform = "translateX(-50%)";
            toast.style.backgroundColor = "black";
            toast.style.color = "white";
            toast.style.padding = "10px 20px";
            toast.style.borderRadius = "5px";

            document.body.appendChild(toast);

            setTimeout(function () {
                toast.remove();
            }, 3000);
        });
    });
});
