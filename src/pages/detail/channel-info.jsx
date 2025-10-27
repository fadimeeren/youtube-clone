import { AiFillDislike } from "react-icons/ai";

const ChannelInfo = ({ video }) => {
  return (
    <div className="flex justify-between items-center">
      {/* Sol */}
      <div className="flex items-center gap-3">
        <div>
          <img
            src={video?.channelTumbnail[0]?.url}
            className="rounded-full size-10 sm:size-12"
          />
          <div>
            <h4 className="font-bold">{video.channelTitle}</h4>
            <p className="text-gray-400">{video.subscriberCounterText}</p>
          </div>
          <button className="bg-white px-4 py-1 text-black rounded-full"> Abone Ol</button>
        </div>
      </div>

      {/* Sağ  */}
      <div className="flex items-center bg-[#272727] cursor-pointer max-sm:mt-3 max-sm:w-fit rounded-full">
        <div className="flex py-2 px-3 sm:px4 items-center gap-2 font-bold border-r border-gray-500">
          <AiFillLike />
          <span className="text-sm"> {millify(video.likeCount)} </span>
        </div>
        <div className="py-1 px-3 sm.px-4">
          <AiFillDislike />
        </div>
      </div>
    </div>
  );
};

export default ChannelInfo;
