import React from "react"
import SecondaryBtn from "./SecondaryBtn"
import ContentStyle from "./styles/contentSide.module.scss"

const ContentSide = props => {
  return (
    <div className={ContentStyle.contentSide}>
      <h2>{props.title}</h2>
      <p className={ContentStyle.content}>
        {props.paragraph}
      </p>
      <div className={ContentStyle.highlights}>
      {props.highlight && (props.highlight).map((el,index)=><p className={ContentStyle.highlight} key={index}>{el}</p>)}
      </div>
      <SecondaryBtn btnTitle={props.btnTitle} link={props.link} />
    </div>
  )
}

export default ContentSide
