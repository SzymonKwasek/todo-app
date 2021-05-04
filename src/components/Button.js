import React from "react";


export const Button = (props) => {

    // const zmienna = props.Text;

    return (
        <button onClick={props.OnClick}>
            {props.Text}
        </button>
    )
}

// export const Button2 = () => {
//     return (
//         <button>

//         </button>
//     )
// }

// export default Button