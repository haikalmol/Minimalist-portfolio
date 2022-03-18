import React from 'react'
import Previous from "../images/icons/arrow-left.svg"
import Next from "../images/icons/arrow-right.svg"
import { Link } from "gatsby"
import detailNavStyle from "./styles/detailNav.module.scss"

const detailNav = (props) => {
    return (
        <div className={detailNavStyle.detailNav}>
            <Link to={props.prevLink} className={detailNavStyle.prevDetail}>
                <Previous/>
                <div>
                    <h3>{props.prev}</h3>
                    <p>Previous Project</p>
                </div>
            </Link>
            <div className={detailNavStyle.separation}></div>
            <Link to={props.nextLink} className={detailNavStyle.nextDetail}>
            <div>
    <h3>{props.next}</h3>
                    <p>Next Project</p>
                </div>
                <Next/>
            </Link>
            
        </div>
    )
}

export default detailNav