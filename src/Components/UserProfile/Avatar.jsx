import { useState, useEffect } from "react";
import supabase from "../../supabase/supabase-client";
import UploadModal from "./UploadModal";
import { ImFilePicture } from "react-icons/im";

function Avatar({url, size, onUpload, setSuccess, setError}){
    const [avatarUrl, setAvatarUrl] = useState(null)
    const [uploading, setUploading] = useState(false)

    useEffect(() => {
        if (url) downloadImage(url)
    }, [url])


const downloadImage = async (path) => {
    try {
        const { data, error } = await supabase.storage.from('avatars').download(path)
        if (error) {
            throw error
        }
        const url = URL.createObjectURL(data)
        setAvatarUrl(url)
    } catch (error) {
        setError('Errore durante il download della tua immagine', error.message)
        setTimeout(() => {
            setError(null)
        }, 5010);
    }
    }
    const uploadAvatar = async (event) => {
        try {
            setUploading(true)
        if (!event.target.files || event.target.files.length === 0) {
            throw new Error('You must select an image to upload.')
        }
        const file = event.target.files[0]
        const fileExt = file.name.split('.').pop()
        const fileName = `${Math.random()}.${fileExt}`
        const filePath = `${fileName}`

        const { error: uploadError } = await supabase.storage.from('avatars').upload(filePath, file)

        if (uploadError) {
            throw uploadError
        }

        onUpload(event, filePath)
        } catch (error) {
            alert(error.message)
        } finally {
        setUploading(false)
        document.getElementById('upload_modal').close()
        setSuccess("Immagine caricata con successo!")
        setAvatarUrl(URL.createObjectURL(file));
        }
    }
    return (
        <>
            <div className="relative">
                {
                    avatarUrl ? <img src={avatarUrl} alt="Propic" className="h-[250px] object-cover"/> : <img src="./download.png" alt="Propic" className="rounded-full"/>
                }
                <button className="absolute tooltip tooltip-right tooltip-primary bottom-0 right-0 outline-2 p-3 outline-[yellow] highlight bg-black" data-tip="Cambia immagine" onClick={() => document.getElementById('upload_modal').showModal()}><ImFilePicture className="text-xl"/></button>
            </div>
            <UploadModal uploadAvatar={uploadAvatar} uploading={uploading} />
        </>
    )
}

export default Avatar