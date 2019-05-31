
window.onload = (event) => {
    const scoreElement = document.querySelector('#score');
    const totalElement = document.querySelector('#total');

    scoreElement.textContent = localStorage.getItem('score');
    totalElement.textContent = localStorage.getItem('total');
}




