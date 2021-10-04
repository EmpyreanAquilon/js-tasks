const openBtn = document.querySelector('.open');
const body = document.body;
const successModal = createModal('Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nesciunt doloremque perferendis iusto aut expedita dolore consequatur, modi laboriosam saepe placeat nobis ratione quidem. Veritatis eaque magnam dicta pariatur perspiciatis?')

openBtn.addEventListener('click', e => {
    body.appendChild(successModal)
})

function createModal(content) {
    const overlayElement = document.createElement('div');
    overlayElement.classList.add('overlay');

    const containerElement = document.createElement('div');
    containerElement.classList.add('modal-container');
    
    const closeBtn = document.createElement('a');
    closeBtn.classList.add('close');
    
    const contentModal = document.createElement('div');
    contentModal.classList.add('content');
    contentModal.innerHTML = content;

    overlayElement.appendChild(containerElement);
    containerElement.appendChild(closeBtn);
    containerElement.appendChild(contentModal);

    closeBtn.addEventListener('click', e => {
        e.preventDefault();
        body.removeChild(overlayElement)
    })

    overlayElement.addEventListener('click', e => {
        if (e.target === overlayElement) {
            closeBtn.click()
        }
        //или другой вариант с условием клика именно по модалке
        //if (!e.target.classList.contains('content')) {}
    })
    return overlayElement
}