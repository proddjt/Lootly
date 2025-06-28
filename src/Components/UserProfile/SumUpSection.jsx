function SumUpSection ({isEdit, setIsEdit}){
    return (
        <div className="col-span-3 flex flex-col items-end justify-center gap-2">
            <img src="./download.png" alt="Propic" className="rounded-full"/>
            <h2 className="text-2xl highlight font-bold text-normal">Nome Cognome</h2>
            <p className="text-md text-gray-400">@username</p>
            <button onClick={() => setIsEdit(!isEdit)} disabled={isEdit} className="btn btn-primary">Edit profile</button>
        </div>
    )
}

export default SumUpSection