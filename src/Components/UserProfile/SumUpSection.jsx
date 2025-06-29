import Avatar from "./Avatar"
import EditBtn from "./EditBtn"

function SumUpSection ({isEdit, setIsEdit, session, onUpload, url, setSuccess, setError}){
    const {user_metadata: user} = session.user
    return (
        <div className="col-span-3 flex flex-col items-end justify-center gap-2">
            <Avatar session={user} onUpload={onUpload} url={url} setSuccess={setSuccess} setError={setError}/>
            <h2 className="text-2xl highlight font-bold text-normal">{user.first_name} {user.last_name}</h2>
            <p className="text-md text-gray-400">@{user.username}</p>
            <EditBtn setIsEdit={setIsEdit} isEdit={isEdit}/>
        </div>
    )
}

export default SumUpSection