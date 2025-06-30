function UserMsg({text, username, date, direction}){ 
    return (
        <div className={`chat chat-${direction}`}>
            <div className="chat-header text-white mb-1">
                {username}
                <time className="text-xs opacity-50">{date}</time>
            </div>
            <div className="chat-bubble bg-[yellow] text-black rounded-sm">{text}</div>
        </div>
    )
}

export default UserMsg