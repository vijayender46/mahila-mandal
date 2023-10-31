import React from 'react'

export default function SectionTitle({subTitle, title, text}) {
  return (
         <div className="mm-section-title">
            <h4 className="mm-subtitle">{subTitle}</h4>
            <h1>{title}</h1>
            <p>{text}</p>
        </div>
  )
}
