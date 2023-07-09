import './typography.css';

const Typography = ({ text, variant }) => {
    return (
        <p
        className="com_heading_text"
        style={{
          fontSize: variant === "heading" ? "14px" : "12px",
          fontWeight: variant === "heading" ? "700" : "400",
          whiteSpace: "pre-line",
        }}
      >
        {text}
      </p>
    );
};

export default Typography;