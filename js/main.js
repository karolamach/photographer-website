let btn,
    portfolio,
    end,
    ifLoop = 0,
    count = 200;

window.onload = function () {
    btn = document.getElementById("btn");
    btn.onclick = btnOnClick;
    portfolio = document.getElementById("portfolio-images");
    end = document.getElementById("end-statement");
};

function btnOnClick() {
    for (let i = 0; i < 6; i++) {
        portfolio.innerHTML += '<img src="../img/photo" + count + 'x200"' + '>';
        count++;
    }
    ifLoop++;

    if (ifLoop >= 3) {
        end.innerHTML += "Po więcej zapraszam na mój instagram Instagram";
        end.style.display = 'table';
        btn.style.display = 'none';
    }
}