function UploadModal({uploadAvatar, uploading}){
    return (
        <dialog id="upload_modal" className="modal">
            <div className="modal-box bg-black flex flex-col gap-5 justify-center items-center">
                <h3 className="font-bold text-2xl highlight">Carica un'immagine del profilo</h3>
                <input
                    type="file"
                    id="single"
                    accept="image/*"
                    onChange={uploadAvatar}
                    disabled={uploading}
                    className="file-input file-input-bordered file-input-primary w-full max-w-xs"
                />
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    )
}

export default UploadModal