import React from 'react'

function Container({ children }) {
    return (
        <div>
            <div>Container Component Runs</div>
            {children}
        </div>
    )
}

export default Container
