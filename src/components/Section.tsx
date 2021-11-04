import * as React from 'react'
type SectionProps = {
    children: any
    id: string
}
const Section = ({children}:SectionProps): JSX.Element => {
    return (
        <section>
            {children}
        </section>
    )
}
export default Section