import React from "react";
import { hot } from 'react-hot-loader/root';

const ButtonReact = ({nameBtn}) => {
    return(
        <button>
            REACT - {nameBtn}
        </button>
    )
}

export default hot(ButtonReact);