import * as React from "react";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

type tooltipPosition = "top" |"bottom"|"left"|"right"
interface Props{
    content: string
    position: tooltipPosition
    arrow: boolean
    children: JSX.Element
}

const Tooltip = (props:Props): JSX.Element => {
    return (
        <Tippy content={props.content}>
            {props.children}
        </Tippy>
    )
}
export default Tooltip