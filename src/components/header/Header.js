import React from 'react';
import PropTypes from 'prop-types';

import '~/pages/_app';
import { Logo } from '~/assets/image';
import { DROPDOWN } from '~/components/icons/icon';
import UserDetail from '~/components/userdetail/UserDetail';

const Header = ({ name, status, experience, preview, onPreviewBtnClicked }) => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header__left-content">
          <div className="logo-wrapper">
            <img src={Logo} alt="Leapfrog" />
          </div>
          <div className="header__app-info">CV Builder</div>
        </div>
        <div className="header__right-content">
          <div className="profile">
            <div className="profile-detail">
              <div className="profile__name">{name}</div>
              <div className="profile__status">{status}</div>
            </div>
            <div className="dropdown">{DROPDOWN}</div>
          </div>
        </div>
      </div>
      <UserDetail name={name} experience={experience} preview={preview} onPreviewBtnClicked={onPreviewBtnClicked} />
    </header>
  );
};

Header.propTypes = {
  name: PropTypes.string,
  status: PropTypes.string,
  experience: PropTypes.string,
  preview: PropTypes.bool,
  onPreviewBtnClicked: PropTypes.func,
};

export default Header;
