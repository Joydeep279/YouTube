const VideoCart = (props) => {
  const { thumbnails, title, channelTitle } = props.props.snippet;
  const { viewCount } = props.props.statistics;
  return (
    <div className="flex flex-col w-72 h-72 gap-2">
      <img
        src={thumbnails.medium.url}
        alt={title}
        className="w-72 h-40 rounded-md"
      />
      <span>{title}</span>
      <span>{channelTitle}</span>
      <span>{viewCount / 1000000}M</span>/
    </div>
  );
};
export default VideoCart;
