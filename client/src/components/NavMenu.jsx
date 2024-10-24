import ChangeLanguage from "./ChangeLanguage.jsx";
import LoginLogoutBtn from "./LoginLogoutBtn.jsx";
import NavMenuItems from "./NavMenuItems.jsx";

const NavMenu = () => {
    return (
        <div className='flex items-center gap-x-6'>
            <NavMenuItems/>
            <ChangeLanguage/>
            <LoginLogoutBtn/>
        </div>
    );
};

export default NavMenu;