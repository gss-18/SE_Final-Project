

const clubCard = (props) => {
    return (
        <div className="m-6 lg:ml-0 flex">
             <div className="flex flex-col h-full max-w-lg mx-auto bg-blue-900 rounded-xl">
                <img className="rounded-xl rounded-b-none" src={props.imgUrl} alt="thumbnail" loading="lazy" />
                <div className="flex justify-between -mt-4 px-4">
                    <span className="inline-block ring-4 bg-blue-500 ring-gray-800 rounded-full text-sm font-medium tracking-wide text-gray-100 px-3 py-1">{props.category}</span>
                </div>
                    <div className="py-2 px-4">
                         <h1 className="text-2xl font-bold leading-6 tracking-wide text-gray-100 hover:text-blue-500 ">
                         {props.title}
                         </h1>
                    </div>
                    <div className="text-right w-full">
                    <div className="px-4 py-2 text-left text-white font-semibold"> <span className="text-pink-500">{props.exp}</span></div>
                    <a href={props.link} className="px-5 font-bold hover:text-pink-600 text-blue-100 text-right pb-2">Read more</a>
                    </div>
                    <div className="flex flex-row items-end h-full w-full px-4">
                    <div className="flex border-t border-gray-500 w-full mt-3 pt-2 pb-4">
                        <div className="flex items-center space-x-3  w-full">
                            <div className="flex flex-wrap">
                                <p className="flex flex-wrap" >{/* <Tags arr={props.tags} /> */}</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

    )   
}

export default clubCard