import { useState } from "react"
import DetailsSection from "../Components/UserProfile/DetailsSection"
import SumUpSection from "../Components/UserProfile/SumUpSection"

function UserProfile(){
    const [isEdit, setIsEdit] = useState(false)
    return (
        <div className="w-full h-full grid grid-cols-8">
            <SumUpSection isEdit={isEdit} setIsEdit={setIsEdit}/>
            <DetailsSection isEdit={isEdit} setIsEdit={setIsEdit}/>
        </div>
    )
}

export default UserProfile