import Typography from '../Typography';
import picture from '../../assets/picture.png';
import './inputGroup.css';

const InputGroup = () => {
    return (
        <div className="com_footer_container">
            <img src={picture} alt="image-select" />
            <input className="com_comment_text_input" type="text" name="comment" placeholder="댓글을 남겨주세요." />
            <Typography text="등록" variant="normal" />
        </div>
    );
};

export default InputGroup;