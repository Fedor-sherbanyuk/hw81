import React from "react";

class Alert extends React.Component {
    render() {
        const {text, type} = this.props;
        const validTypes = [
            "primary",
            "secondary",
            "success",
            "danger",
            "warning",
            "info",
            "light",
            "dark",
        ];
        const alertType = validTypes.includes(type) ? type : "primary";
        const style =
            `alert alert-${alertType}`;
        return (
            <div className={style} role="alert">
                {text}
            </div>
        );
    }
}

export default Alert;