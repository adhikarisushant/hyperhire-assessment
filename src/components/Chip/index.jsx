import './chip.css';

const Chip = ({
    text,
}) => {
    return (
    <button class="pop_chip" role="button">{text}</button>
    );
};

export default Chip;