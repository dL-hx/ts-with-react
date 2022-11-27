import React from "react";

interface IHelloProps{
    message ?:string
}

const Hello:React.FC<IHelloProps> = (props) => {
  return (
    <div>
      {props.message}
    </div>
  )
}

Hello.defaultProps = {
    message :"Hello World"
}

export default Hello