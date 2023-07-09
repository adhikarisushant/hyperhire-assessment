import Typography from "../Typography";
import verified from "../../assets/verified.png";

const Header = ({ profileImg, title, description, text, btnText }) => {
  return (
    <div className="p_post_header">
      <div className="p_post_header_left">
        <div
          className="p_post_header_img"
          style={{ background: `url(${profileImg})` }}
        ></div>
        <div className="p_post_header_info_section">
          <div className="p_post_header_info_top">
            <Typography text={title} variant="heading" />
            <img src={verified} alt="verified-icon" />
            <p className="p_post_header_info_helper_text">{text}</p>
          </div>
          <div className="p_post_header_info_description">{description}</div>
        </div>
      </div>

      <button class="p_post_header_btn" role="button">
        {btnText}
      </button>
    </div>
  );
};

export default Header;
