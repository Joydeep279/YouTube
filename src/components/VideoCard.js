const VideoCart = (props) => {
  const { id } = props.props;
  const { title, channelTitle } = props.props.snippet;
  const { viewCount } = props.props.statistics;
  return (
    <div className="flex flex-col w-[337px] h-[260px]  flex-nowrap p-5 overflow-hidden">
      <img
        src={"https://i.ytimg.com/vi/" + id + "/hq720.jpg"}
        alt={title}
        className="w-full h-44 rounded-lg"
      />
      <span className="font-medium font-sans text-nowrap">{title}</span>
      <span className="font-normal font-sans">{channelTitle}</span>
      <span className="font-normal font-sans">{viewCount}</span>
    </div>
  );
};
export default VideoCart;
