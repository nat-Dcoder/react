/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export const Header = (props)=> {
    return(
        <nav>
            <div>
                <ul>
                    <li><a href="#">{props.homeLink}</a></li>
                </ul>
            </div>
        </nav>
    )
}