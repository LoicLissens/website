import * as React from "react"

interface Props {
    techno: string
    
}

const InfoTechno = (props:Props): JSX.Element => {

    return (
        <div className="info-techno">
            <h4>{props.techno}</h4>
            
            
        </div>
    )
}
export default InfoTechno