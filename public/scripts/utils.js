
function toggleModal(id, index) {
    const modal = document.getElementById(id)
    if (!modal) return
    if (modal.open) {
        modal.close()
    } 
    else {
        modal.showModal()
        // modal.focus()
        window.location.hash = modal;
    }


    if (index) setModalIndex(modal, index)
}