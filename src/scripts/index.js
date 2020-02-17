// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
// Import any additional modules you want to include below \/


// \/ All of your javascript should go here \/

const modalBox = document.getElementById('myModal');
const closeBox = document.querySelector('.close');

new Promise((resolve) => {
    setTimeout(() => {
        resolve(modalBox)
    }, (1000 * 60))
});

then(() => {
    modalBox.style.display = 'block';
})

closeBox.addEventListener('click', () => modalBox.style.display = 'none')
