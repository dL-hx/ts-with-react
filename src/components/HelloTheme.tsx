import React, { useContext } from "react";
import { ThemeContext } from '../context/theme'

interface IHelloProps {
    message?: string
}

const HelloTheme: React.FC<IHelloProps> = (props) => {
    const theme = useContext(ThemeContext)
    const style = {
        background: theme.background,
        color: theme.color
    }
    return (
        <div style={style}>
            {props.message}
        </div>
    )
}

HelloTheme.defaultProps = {
    message: "Hello World"
}

export default HelloTheme