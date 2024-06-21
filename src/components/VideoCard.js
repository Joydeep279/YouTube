const VideoCart = (props) => {
  const { id } = props.props;
  const { title, channelTitle } = props.props.snippet;
  const { viewCount } = props.props.statistics;
  return (
    <div className="flex flex-col w-[400px] h-[324]  flex-nowrap p-5">
      <img
        src={"https://i.ytimg.com/vi/" + id + "/hq720.jpg"}
        alt={title}
        className="w-[400px] h-[224px] rounded-md"
      />
      <span className="font-medium font-sans">{title}</span>
      <span>{channelTitle}</span>
      <span>{Math.round(viewCount / 1000000)}M Views</span>
    </div>
  );
};
export default VideoCart;
