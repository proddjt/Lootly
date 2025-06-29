import styles from "../css/EditBtn.module.css"
import { MdEdit } from "react-icons/md";
function EditBtn({setIsEdit, isEdit}){
    return (
        <button onClick={() => setIsEdit(!isEdit)} disabled={isEdit}>
            <span className={`${styles.buttonTop} flex items-center gap-2`}><MdEdit className="text-2xl"/> Modifica profilo</span>
        </button>
    )
}

export default EditBtn