import React from 'react'
import { doctors } from '../assets/assets (2)'

const Topdocs = () => {
  return (
    <div>
        <div>
            Top Doctors to Book <br />
            <p>Simply browse through our extensive list of trusted <br /> doctors.</p>
            <div>
                {doctors.slice(0,10).map((item, index)=>(
                    <div>
                        <img src={item.image} alt="" />
                        <div>
                            <div> <p></p>
                            <p>Available</p></div>
                        </div>
                        <p>{item.name} </p>
                        <p>{item.speciality} </p>
                    </div>
                ))}
            </div>
        </div>
        <button>more</button>
    </div>
  )
}

export default Topdocs