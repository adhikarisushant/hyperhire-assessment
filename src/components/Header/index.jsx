import arrowLeft from '../../assets/arrow-left.png';
import bellOff from '../../assets/bell-off.png'
import './header.css';

const Header = () => {
    return (
        <div className="pop_header">
            <img src={arrowLeft} alt="arrow" />
            <h3 className="pop_header_title">자유톡</h3>
            <img src={bellOff} alt="bell" />
        </div>
    );
};

export default Header;