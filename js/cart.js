function cart() {
    const cartBtn = document.querySelector('.button-cart');
    const modal = document.getElementById('modal-cart')
    const modalCloseBtn = document.querySelector('.modal-close');
    console.log(cartBtn);

    cartBtn.addEventListener('click', () =>
        modal.style.display = "flex"
    )

    modalCloseBtn.addEventListener('click', () =>
        modal.style.display = ""
    )
}
cart()