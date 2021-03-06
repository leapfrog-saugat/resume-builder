import PropTypes from 'prop-types';
import React, { useState } from 'react';
import EditOptions from '~/components/editoptions/EditOptions';

const WorkExperienceShown = ({
  subTitle,
  position,
  startDate,
  endDate,
  roles,
  achievements,
  refereeName,
  refereeContact,
  preview,
  onHiddenIconClicked,
}) => {
  const [hidden, setHidden] = useState(false);

  const rolesList = roles.split('.').map(role => <li key={role}>{role}</li>);
  const achievementsList = achievements.split('.').map(achievement => <li key={achievement}>{achievement}</li>);

  if (hidden && preview) {
    return <></>;
  }

  const onHiddenIconClickedHandler = e => {
    e.preventDefault();
    setHidden(!hidden);
    onHiddenIconClicked(e, subTitle);
  };

  return (
    <div className="work-experience">
      <div className={!hidden ? 'work-experience__row' : 'work-experience__row work-experience--hidden'}>
        <div className="work-experience__row-header">
          <div className="sub-title">
            {subTitle}
            {hidden && <span className="hidden-tag">Hidden</span>}
          </div>
          {!preview && <EditOptions isHidden={hidden} onHiddenIconClicked={onHiddenIconClickedHandler} />}
        </div>
        <div className="work-experience__position">{position}</div>
        <div className="work-experience__exp-year">
          <span className="start-date">{startDate}</span> - <span className="end-date">{endDate}</span>(3 years and 3
          months)
        </div>
      </div>

      <div>
        <div className="work-experience__row">
          Roles and Responsibilities
          <ul className="work-experience__row-item">{rolesList}</ul>
        </div>
        <div className="work-experience__row">
          Achievements
          <ul className="work-experience__row-item">{achievementsList}</ul>
        </div>
        <div className="work-experience__row">
          Referee <span className="referee-name">{refereeName}</span>
          <span className="referee-email text-link">{' ' + refereeContact}</span>
        </div>
      </div>
    </div>
  );
};

WorkExperienceShown.propTypes = {
  subTitle: PropTypes.string,
  position: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  roles: PropTypes.string,
  achievements: PropTypes.string,
  refereeName: PropTypes.string,
  preview: PropTypes.bool,
  refereeContact: PropTypes.string,
  onHiddenIconClicked: PropTypes.func,
};

export default WorkExperienceShown;
