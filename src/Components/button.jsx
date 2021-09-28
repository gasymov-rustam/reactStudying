import "./button.css";
import cx from "classnames";

export default function Button({ className, outline, size}) {
    if (className) {
        return <button className={cx("butClass", className, outline, size)}>{className.charAt(0).toUpperCase() + className.slice(1)}</button>
    } else {
        return <></>;
    }
}
