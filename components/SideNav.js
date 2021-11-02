import { DesktopComputerIcon, LibraryIcon,UserGroupIcon,ChipIcon,LogoutIcon} from '@heroicons/react/solid';
import SiderNav from './SiderNav';

const SideNav = () => {
    return (
        <div className="p-2 w-full lg:w-1/3  xl:min-w-{300} bg-blue-500 rounded-lg ">
            <p className="text-4xl font-semibold  ">DashBoard</p>
            <SiderNav Icon={DesktopComputerIcon} title="Computer Science" />
            <SiderNav Icon={ChipIcon} title="Electronics and Communication" />
            <a href="/clubs"><SiderNav Icon={UserGroupIcon} title="Clubs and Societes" /></a>
            <SiderNav Icon={LibraryIcon} title="Training and Placement" />
            <SiderNav Icon={LogoutIcon} title="Logout" />
        </div>
    )
}

export default SideNav


