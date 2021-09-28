export default function Breadcrumbs({ way, symbol }) {
    const list = {
        display: "flex",
    };
    const currentField = {
        margin: "10px",
        padding: "8px 16px",
        fontSize: "1.5em",
        color: "black",
    };

    const currentLink = {
        textDecoration: "none",
    };

    if (way.length > 0) {
        return (
            <ul style={list}>
                {way.map((item) =>
                    item?.link ? (
                        <li style={currentField} key={item.id}>
                            <a style={currentLink} href={item.link}>
                                {item.text}
                                {"\u00A0\u00A0"} {`${symbol || "/"}`}
                            </a>
                        </li>
                    ) : (
                        <li style={currentField} key={item.id}>
                            {item.text}
                        </li>
                    )
                )}
            </ul>
        );
    }
    if (!way) {
        return <></>;
    }
}
