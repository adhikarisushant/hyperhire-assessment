import Header from "./Header";
import verified from '../../assets/verified.png';
import Typography from "../Typography";
import dots from "../../assets/dots.png";
import heart from "../../assets/heart.png";
import message from "../../assets/message.png";
import profileImg from "../../assets/profile.png";
import profileImg02 from "../../assets/profile02.png";

const Comments = ({
    userOne,
    userTwo,
    text,
    comment,
    likesCount,
    commentsCount,
    reply
}) => {
  return (
    <>
      <div className="com_comments_container">
        <div className="p_post_header_left">
          <div
            className="p_post_header_img"
            style={{ background: `url(${profileImg})` }}
          ></div>
          <div className="p_post_header_info_section">
            <div className="p_post_header_info_top">
              <Typography text={userOne} variant="heading" />
              <img src={verified} alt="verified-icon" />
              <p className="p_post_header_info_helper_text">{text}</p>
            </div>
          </div>
        </div>
 
        <img src={dots} alt="dots" />
      </div>
      <div className="com_comments">
        <Typography text={comment} variant="normal" />
        <div className="com_comments_icons_container">
          <img src={heart} alt="heart" height="25px" width="25px" />{" "}
          <span className="com_comments_icons">{likesCount}</span>
          <img src={message} alt="message" height="25px" width="25px" />
          <span className="com_comments_icons">{commentsCount}</span>
        </div>
        <>
          <div className="com_comments_reply">
            <div className="p_post_header_left">
          <div
            className="p_post_header_img"
            style={{ background: `url(${profileImg02})` }}
          ></div>
          <div className="p_post_header_info_section">
            <div className="p_post_header_info_top">
              <Typography text={userTwo} variant="heading" />
              {/* <img src={verified} alt="verified-icon" /> */}
              <p className="p_post_header_info_helper_text">{text}</p>
            </div>
          </div>
        </div>

            <img src={dots} alt="dots" />
          </div>
          <div className="com_comments_reply_section">
            <Typography text={reply} variant="normal" />
            <div className="com_comments_icons_container">
              <img src={heart} alt="heart" height="25px" width="25px" />{" "}
              <span className="com_comments_icons">{likesCount}</span>
            </div>
          </div>
        </>
      </div>
    </>
  );
};

export default Comments;
