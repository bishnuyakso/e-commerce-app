import "../../chats.css";
const UserChat = () => {
  return (
    <>
      <input type="checkbox" id="check" />
      <label className="chat-btn" htmlFor="check">
        <i className="bi bi-chat-dots comment"></i>
        <span className="position-absolute top-0 start-10 translate-middle p-2 bg-danger border border-light rounded-circle"></span>
        <i className="bi bi-x-circle close"></i>
      </label>
      <div className="chat-wrapper">
        <div className="chat-header">
          <h6>Lets Chat - Online</h6>
        </div>

        <div className="chat-form">
          <div className="chat-msg">
            {Array.from({ length: 10 }).map((_, id) => (
              <div key={id}>
                <p>
                  <b> You wrote: </b> Hello, world! This ia a test message
                </p>
                <p className="bg-primary p-3 ms-4 text-light rounded-pill">
                  <b>Support wrote:</b> Hello, world~ This is a test message
                </p>
              </div>
            ))}
          </div>
          <p>Chat history</p>
          <textarea
            id="clientChatMsg"
            className="form-control"
            placeholder="Your Text Message"
          ></textarea>

          <button
            className="btn btn-success
          btn-block"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default UserChat;
