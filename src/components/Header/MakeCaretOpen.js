import { HiOutlinePencil } from 'react-icons/hi';
import { VscAccount } from 'react-icons/vsc';
import { BsQuestionCircle } from 'react-icons/bs';

import LogoUserGreen from '../../img/Netflix-avatar-green.png';
import LogoUserRed from '../../img/Netflix-avatar-red.png';
import LogoUserPinguin from '../../img/Netflix-avatar-pinguin.png';
import LogoUserKids from '../../img/kids-netflix.png';

export const MakeCaretOpen = () => {
  return (
    <div className="caret-open ">
      <ul>
        <li>
          <img src={LogoUserGreen} alt="Logo User Green" /> user2
        </li>
        <li>
          <img src={LogoUserRed} alt="Logo user Red" /> user3
        </li>
        <li>
          <img src={LogoUserPinguin} alt="Logo user Pinguin" /> user4
        </li>
        <li>
          <img className="kids-logo" src={LogoUserKids} alt="Logo Kids" /> Kids
        </li>
        <li className="li-svg">
          <HiOutlinePencil /> <p>Manage Profiles</p>
        </li>
        <li className="li-breack"></li>
        <li className="li-svg">
          <VscAccount />
          <p>Account</p>
        </li>
        <li className="li-svg">
          <BsQuestionCircle />
          <p>Help Centre</p>
        </li>
        <li className="li-breack"></li>
        <li className="li-signout">
          <p>Sign out</p>
        </li>
      </ul>
    </div>
  );
};
