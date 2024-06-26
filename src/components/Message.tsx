import "./Message.css"

const Message = ({ notification }: any) => {
    return (
      <>
        <div id="notificationHeader">
          {/* image is optional */}
          {notification.image && (
            <div id="imageContainer">
              <img src={notification.image} width={100} alt="prueba"/>
            </div>
          )}
          <span>{notification.title}</span>
        </div>
        <div id="notificationBody">{notification.body}</div>
      </>
    );
  };
  
  export default Message;