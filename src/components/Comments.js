const commentsCommentData = [
  {
    name: "Joydeep",
    text: "lorem dsf sdfe adew asdr sasdrt assss",
    replies: [
      { name: "Joydeep", text: "lorem dsf sdfe adew asdr sasdrt assss" },
      { name: "Joydeep", text: "lorem dsf sdfe adew asdr sasdrt assss" },
      { name: "Joydeep", text: "lorem dsf sdfe adew asdr sasdrt assss" },
    ],
  },
  {
    name: "Joydeep",
    text: "lorem dsf sdfe adew asdr sasdrt assss",
    replies: [
      { name: "Joydeep", text: "lorem dsf sdfe adew asdr sasdrt assss" },
      { name: "Joydeep", text: "lorem dsf sdfe adew asdr sasdrt assss" },
      { name: "Joydeep", text: "lorem dsf sdfe adew asdr sasdrt assss" },
      { name: "Joydeep", text: "lorem dsf sdfe adew asdr sasdrt assss" },
      { name: "Joydeep", text: "lorem dsf sdfe adew asdr sasdrt assss" },
    ],
  },
  {
    name: "Joydeep",
    text: "lorem dsf sdfe adew asdr sasdrt assss",
    replies: [
      { name: "Joydeep", text: "lorem dsf sdfe adew asdr sasdrt assss" },
      { name: "Joydeep", text: "lorem dsf sdfe adew asdr sasdrt assss" },
      { name: "Joydeep", text: "lorem dsf sdfe adew asdr sasdrt assss" },
      { name: "Joydeep", text: "lorem dsf sdfe adew asdr sasdrt assss" },
      {
        name: "Joydeep",
        text: "lorem dsf sdfe adew asdr sasdrt assss",
        replies: [
          { name: "Joydeep", text: "lorem dsf sdfe adew asdr sasdrt assss" },
          { name: "Joydeep", text: "lorem dsf sdfe adew asdr sasdrt assss" },
          { name: "Joydeep", text: "lorem dsf sdfe adew asdr sasdrt assss" },
          { name: "Joydeep", text: "lorem dsf sdfe adew asdr sasdrt assss" },
          { name: "Joydeep", text: "lorem dsf sdfe adew asdr sasdrt assss" },
        ],
      },
    ],
  },
  {
    name: "Joydeep",
    text: "lorem dsf sdfe adew asdr sasdrt assss",
    replies: [
      { name: "Joydeep", text: "lorem dsf sdfe adew asdr sasdrt assss" },
      { name: "Joydeep", text: "lorem dsf sdfe adew asdr sasdrt assss" },
      { name: "Joydeep", text: "lorem dsf sdfe adew asdr sasdrt assss" },
      { name: "Joydeep", text: "lorem dsf sdfe adew asdr sasdrt assss" },
      { name: "Joydeep", text: "lorem dsf sdfe adew asdr sasdrt assss" },
    ],
  },
];

const Comment = ({ CommentData }) => {
  const { name, text } = CommentData;
  return (
    <div className="flex flex-row items-start gap-2 bg-slate-200 rounded-2xl w-1/2">
      <img
        className="rounded-full w-6 h-6"
        src="https://avatars.githubusercontent.com/u/109482893?v=4"
        alt="User"
      />
      <div>
        <div className="font-bold">{name}:</div>
        <div>Reply: {text}</div>
      </div>
    </div>
  );
};

const Nested = ({ CommentData }) => {
  return CommentData?.map((ele) => (
    <div>
      <div>
        <Comment CommentData={ele} />;
      </div>
      <div className="pl-5">
        <Nested CommentData={ele.replies} />
      </div>
    </div>
  ));
};

const CommentContainer = () => {
  return (
    <>
      <h1>Comments:</h1>
      <Nested CommentData={commentsCommentData} />
    </>
  );
};
export default CommentContainer;
