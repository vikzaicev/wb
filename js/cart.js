function cart() {
    const cartBtn = document.querySelector('.button-cart');
    const modal = document.getElementById('modal-cart')
    const modalCloseBtn = document.querySelector('.modal-close');

    cartBtn.addEventListener('click', () =>
        modal.style.display = "flex"
    )

    modalCloseBtn.addEventListener('click', () =>
        modal.style.display = ""
    )

    document.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = ""
        }
    }
    )
}
cart()