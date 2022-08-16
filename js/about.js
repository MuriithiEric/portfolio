var listElems = document.querySelectorAll(".link");
listElems.forEach(item => {
    item.addEventListener('click', (event) => {
        event.preventDefault();
        let elementText = event.target.innerText;
        changeInfo(elementText)
    });
});

var aboutInfo = [
    {
        id: 'who',
        desc: 'Who We are?',
        title: 'About Us',
        info: 'Lorem Ipsum Dolor Sit Amet'
    },
    {
        id: 'sus',
        desc: 'Sustainability',
        title: 'Sustainability 2020',
        info: 'Lorem Ipsum Dolor Sit Amet'
    },
    {
        id: 'sus',
        desc: 'Test',
        title: 'Tester',
        info: 'Hi this is demo content.'
    }
];

let title = document.querySelector('.title');
let desc = document.querySelector('.desc');
let info = document.querySelector('.txt');

function changeInfo(val) {
    console.log('changed');
    let selected = aboutInfo.find((obj) => {
        return obj.desc === val;
    });
    console.log(selected);
    title.innerHTML = selected.title + '<span class="flag"></span>';
    info.innerHTML = selected.info;
    desc.innerHTML = selected.desc;
}