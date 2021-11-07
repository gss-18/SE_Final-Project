import React from 'react'
import Loader from "react-loader-spinner";
const LoadingScreen = (props) => {
    return (
            <div className={props.loading?"z-50 fixed flex justify w-full h-full bg-white align-center rounded-lg":"hidden"}>
              <div className="m-auto">
                <Loader
                  type="Puff"
                  color="#D73533"
                  height={75}
                  width={75}
                  //3 secs
                  />
              </div>
            </div>
    )
}

export default LoadingScreen