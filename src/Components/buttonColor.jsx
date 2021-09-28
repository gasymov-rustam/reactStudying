export default function ButtonColor({ text, hover, colorFont, backgroundColor, border, size }) {
    const butClass = {
        margin: "20px",
        padding: "8px 16px",
        fontSize: `${size ? `${size}em` : "2em"}`,
        border: `${border ? `1px solid ${border}` : "none"}`,
        cursor: "pointer",
        color: `${colorFont ? colorFont : "white"}`,
        background: `${backgroundColor ? backgroundColor : "none"}`,
        borderRadius: "5px",
        transition: ".5s",
        textDecoration: `${backgroundColor ? "none" : "underline"}`,
    };

    const butClassHov = {
        margin: "20px",
        padding: "8px 16px",
        fontSize: `${size ? `${size}em` : "2em"}`,
        border: `${backgroundColor ? `1px solid ${backgroundColor}` : "none"}`,
        cursor: "pointer",
        color: backgroundColor || "lightgray",
        background: "white",
        borderRadius: "5px",
        transition: ".5s",
    };

    function handler(e) {
        e.target.style.background = `${backgroundColor ? backgroundColor : "none"}`;
        e.target.style.color = `${colorFont ? colorFont : "black"}`;
    }

    function handlerLeave(e) {
        e.target.style.background = "white";
        e.target.style.color = backgroundColor || "lightgray";
    }

    if (text) {
        if (hover) {
            return (
                <button onMouseEnter={handler} onMouseLeave={handlerLeave} style={butClassHov}>
                    {text.charAt(0).toUpperCase() + text.slice(1)}
                </button>
            );
        }
        if (!hover) {
            return <button style={butClass}>{text.charAt(0).toUpperCase() + text.slice(1)}</button>;
        }
    }

    if (!text) return <></>;
}
