import { DesktopComputerIcon, LibraryIcon,UserGroupIcon,ChipIcon,LogoutIcon} from '@heroicons/react/solid';
import SiderNav from './SiderNav';

const SideNav = () => {
    return (
        <div className="p-2 w-full lg:w-1/3  xl:min-w-{300} ">
            <p className="text-xl font-semibold font-mono ">DashBoard</p>
            <SiderNav Icon={DesktopComputerIcon} title="Computer Science" />
            <SiderNav Icon={ChipIcon} title="Electronics and Communication" />
            <SiderNav Icon={UserGroupIcon} title="Clubs and Societes" />
            <SiderNav Icon={LibraryIcon} title="Training and Placement" />
            <SiderNav Icon={LogoutIcon} title="Logout" />
        </div>
    )
}

export default SideNav


