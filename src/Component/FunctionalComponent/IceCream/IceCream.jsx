import React from 'react'
import IceCreamStyle from './IceCream.module.css'

const IceCream = () => {
    return (
        <div>
            <div className={IceCreamStyle.icecream}>
              <p className={IceCream.cone}></p>
              <div className={IceCream.cherry}></div>
            </div>
          </div>
    )
}

export default IceCream
