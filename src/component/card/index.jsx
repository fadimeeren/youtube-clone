import { Link } from "react-router-dom";

const Card = ({video}) => {
    console.log(video)

    const thumbnail= video?.thumbnail.at(-1)
  
  return (
    <Link to={`/watch?v=${video.videoId}`} className="group block">
        {/* Thumbnail */}
        <div className="relative rounded-xl overflow-hidden mb-3 w-full aspect-video">
            <img src={thumbnail}  alt={video.title} className="size-full" />

            {video.lengthText && <span className="absolute bottom-1 right-1 bg-black/80 text-xs px-2 py-0.5 rounded">{video.lengthText}</span>}

            {video.isLive && (
                <span className="ablosulte bottom-1 right-1 bg-red-600 text-white text-xs px-2 py-0.5 rounded"> CANLI </span>
            )}

            {video.isLive && (
                <span className="absolute bottom-1 right-1 bg-red-600 text-white text-xs px-2 py-0.5 rounded"> 
                </span>
            )}
        </div>

        {/* Video Bilgileri */}
        <div className="flex-1 flex-col gap-2 md:gap-4">
            <h3 className="line-clamp-2 leading-tight text-lg">{video.title}</h3>
        </div>
    </Link>
  )
};

export default Card;