type VideoGridItemProps = {
    id: string
    title: string
    channel: {
        id: string
        name: string
        profileUrl: string
    }
    views: number
    postedAt: Date
    duration: number
    thumbnailUrl: string
    videoUrl: string
}

function formatDuration(seconds: number): string {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const remainingSeconds = seconds % 60

    if (hours > 0) {
        return `${hours}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`
    }
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
}

function formatViewCount(views: number): string {
    if (views >= 1000000) {
        return `${(views / 1000000).toFixed(1)}M views`
    } else if (views >= 1000) {
        return `${(views / 1000).toFixed(1)}K views`
    }
    return `${views} views`
}

function formatTimeAgo(date: Date): string {
    const now = new Date()
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000)
    
    if (diffInSeconds < 60) return `${diffInSeconds} seconds ago`
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`
    if (diffInSeconds < 2592000) return `${Math.floor(diffInSeconds / 86400)} days ago`
    if (diffInSeconds < 31536000) return `${Math.floor(diffInSeconds / 2592000)} months ago`
    return `${Math.floor(diffInSeconds / 31536000)} years ago`
}

export function VideoGridItem({
    id,
    title,
    channel,
    views,
    postedAt,
    duration,
    thumbnailUrl,
    videoUrl,
}: VideoGridItemProps) {
    return (
        <div className="flex flex-col gap-3">
            <a href={`/watch?v=${videoUrl}`} className="relative aspect-video group">
                <img 
                    src={thumbnailUrl}
                    className="block w-full h-full object-cover rounded-xl group-hover:rounded-none transition-all duration-100"
                    alt={title}
                />
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-sm px-2 py-1 rounded">
                    {formatDuration(duration)}
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-200 rounded-xl group-hover:rounded-none"></div>
            </a>
            
            <div className="flex gap-3">
                <a href={`/@${channel.id}`} className="flex-shrink-0">
                    <img 
                        src={channel.profileUrl} 
                        className="w-10 h-10 rounded-full"
                        alt={channel.name}
                    />
                </a>
                <div className="flex flex-col gap-1 min-w-0">
                    <a href={`/watch?v=${id}`} className="font-medium text-base line-clamp-2 hover:text-blue-600 transition-colors">
                        {title}
                    </a>
                    <a href={`/@${channel.id}`} className="text-secondary-text text-sm hover:text-blue-500 transition-colors">
                        {channel.name}
                    </a>
                    <div className="text-secondary-text text-sm">
                        {formatViewCount(views)} • {formatTimeAgo(postedAt)}
                    </div>
                </div>
            </div>
        </div>
    )
}