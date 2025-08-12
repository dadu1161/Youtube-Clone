import { VideoGridItem } from "./VideoGridItem"


type Video = {
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

type VideoGridProps = {
    videos: Video[]
}

export function VideoGrid({ videos }: VideoGridProps) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {videos.map(video => (
                <VideoGridItem key={video.id} {...video} />
            ))}
        </div>
    )
}
