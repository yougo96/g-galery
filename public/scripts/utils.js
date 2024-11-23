
function toggleModal(id, data) {
    const modal = document.getElementById(id)
    if (!modal) return
    modal && (modal.open ? modal.close() : modal.showModal());

    modal.querySelector('img').src = data.baseUrl + "=w2048-h1024";
    modal.querySelectorAll('.img-info > li > b')[0].innerText = data.filename;
    modal.querySelectorAll('.img-info > li > b')[1].innerText = data.mediaMetadata.creationTime;
    modal.querySelectorAll('.img-info > li > b')[2].innerText = data.mediaMetadata.photo.cameraMake;
    modal.querySelectorAll('.img-info > li > b')[3].innerText = data.mediaMetadata.photo.cameraModel;
    modal.querySelectorAll('.img-info > li > b')[4].innerText = data.mediaMetadata.photo.focalLength;
    modal.querySelectorAll('.img-info > li > b')[5].innerText = data.mediaMetadata.photo.apertureFNumber
    modal.querySelectorAll('.img-info > li > b')[6].innerText = data.mediaMetadata.photo.isoEquivalent;
    modal.querySelectorAll('.img-info > li > b')[7].innerText = data.mediaMetadata.photo.exposureTime;
}