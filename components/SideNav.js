import { DesktopComputerIcon, LibraryIcon,UserGroupIcon,ChipIcon,LogoutIcon} from '@heroicons/react/solid';
import SiderNav from './SiderNav';

const SideNav = () => {
    return (
        <div className="p-2 w-full lg:w-1/3  xl:min-w-{300} bg-red-100 space-y-3 md:m-24  md:mt-0 rounded-xl">
            <p className="text-4xl  font-bold text-center p-3 text-red-900 ">DashBoard</p>
            <a href="/cse"><SiderNav Icon={DesktopComputerIcon} title="Computer Science" /></a>
            <a href="/ece"><SiderNav Icon={ChipIcon} title="Electronics and Communication" /></a>
            <a href="/clubs"><SiderNav Icon={UserGroupIcon} title="Clubs and Societes" /></a>
            <a href="/tpo"><SiderNav Icon={LibraryIcon} title="Training and Placement" /></a>
            <SiderNav Icon={LogoutIcon} title="Logout" />
        </div>
    )
}

export default SideNav


