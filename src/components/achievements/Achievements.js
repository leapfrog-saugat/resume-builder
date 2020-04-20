import React from 'react';
import PropTypes from 'prop-types';
import { Add } from '~/assets/image';
import AchievementItem from './AchievementItem';
import CardHeader from '~/components/cardheader/CardHeader';
import CardFooter from '~/components/cardfooter/CardFooter';

const Achievements = ({ achievements, preview }) => {
  const achievementsList = achievements.map(achievement => (
    <AchievementItem
      key={achievement.title}
      title={achievement.title}
      date={achievement.date}
      visibility={achievement.visibility}
      preview={preview}
    />
  ));

  return (
    <div className="achievements-block">
      <div className="card">
        <CardHeader title="Achievements" />
        <div className="achievements">{achievementsList}</div>
        <CardFooter icon={Add} label="Add another achievement" />
      </div>
    </div>
  );
};

Achievements.propTypes = {
  achievements: PropTypes.array,
  preview: PropTypes.bool,
};

export default Achievements;
