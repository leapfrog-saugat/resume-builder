import React, { useContext, useState } from 'react';

import SkillItem from './SkillItem';
import { Add } from '~/assets/image';
import { AppContext } from '~/pages';
import CardHeader from '~/components/cardheader/CardHeader';
import CardFooter from '~/components/cardfooter/CardFooter';
import AddSkill from '../form/skill/AddSkill';

const Skills = () => {
  const context = useContext(AppContext);

  const preview = context.preview.get;
  // previous state of data
  const skills = context.data.get.skills;

  const [showModel, setModal] = useState(false);

  const editBtnHandler = e => {
    e.preventDefault();
    setModal(!showModel);
  };

  const closeBtnHandler = e => {
    e.preventDefault();
    setModal(!showModel);
  };

  /**
   * Update the hidden state of skill.
   *
   * @param {React.MouseEvent} e [ on click event ].
   * @param {string} key [ label of a particular skill].
   */
  const updateHiddenStateSkill = (e, key) => {
    e.preventDefault();

    const data = context.data.get;

    data['skills'].find(({ label, hidden }, index) => {
      if (label === key) {
        const newState = !hidden;

        data['skills'][index].hidden = newState;
        context.data.set(data); // new state of data
      }
    });
  };

  const skillsList = skills.map(({ name, label, subSkills }) => (
    <SkillItem
      key={name}
      title={label}
      values={subSkills}
      preview={preview}
      onHiddenIconClicked={updateHiddenStateSkill}
    />
  ));

  return (
    <>
      <CardHeader title="Skills" />
      <div className="skills">{skillsList}</div>
      <CardFooter
        icon={Add}
        hide={preview}
        label="Add another skill"
        showModal={showModel}
        onAdd={editBtnHandler}
        component={AddSkill}
        onClose={closeBtnHandler}
      />
    </>
  );
};

export default Skills;
