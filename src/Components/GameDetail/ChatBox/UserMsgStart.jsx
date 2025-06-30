function UserMsgStart({text, username, date}){
    function formatRelativeTime(isoDateStr) {
    const now = new Date();
    const date = new Date(isoDateStr);
    const diffMs = now - date; // differenza in millisecondi

    const seconds = Math.floor(diffMs / 1000);
    const minutes = Math.floor(diffMs / (1000 * 60));
    const hours = Math.floor(diffMs / (1000 * 60 * 60));
    const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (days >= 2) {
        // Mostra data completa: es. 28 giugno 2025
        return date.toLocaleDateString('it-IT', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        });
    }

    if (days === 1) {
        return 'ieri';
    }

    if (hours >= 1) {
        return hours === 1 ? 'un’ora fa' : `${hours} ore fa`;
    }

    if (minutes >= 1) {
        return minutes === 1 ? 'un minuto fa' : `${minutes} minuti fa`;
    }

    return 'alcuni secondi fa';
}
    return (
        <div className="chat chat-start">
            <div className="chat-header text-white mb-1">
                {username}
            </div>
            <div className="chat-bubble bg-[yellow] text-black rounded-sm">{text}</div>
            <div className="chat-footer opacity-50">{formatRelativeTime(date)}</div>
        </div>
    )
}

export default UserMsgStart