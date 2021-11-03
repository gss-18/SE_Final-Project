

const SiderNav = ({Icon,title}) => {
    return (
        <div className="flex cursor-pointer items-center  space-x-2 p-4 hover:bg-gray-200 rounded-xl  ">
        {Icon && (
            <Icon className="h-8 w-8 text-red-700"/>
        )}
        <p className=" sm:inline-flex font-medium">{title}</p>
        </div>
    )
}

export default SiderNav