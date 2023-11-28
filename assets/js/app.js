const cl = console.log;

const bgcolor = document.getElementById('bgcolor');
const selectalldiv = [...document.querySelectorAll('.all')]
cl(selectalldiv)


const onChange = eve => {
    let getcolor = eve.target.value;
    cl(getcolor);
    selectalldiv.forEach(eve => eve.classList.add('d-none'));
    const selectcolorbox = [...document.getElementsByClassName(getcolor)];
    selectcolorbox.forEach(eve => eve.classList.remove('d-none'));
}

bgcolor.addEventListener('change',onChange);