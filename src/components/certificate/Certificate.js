import React, { useContext } from 'react';

import { AppContext } from '~/pages';
import { Add } from '~/assets/image';
import CertificateItem from './CertificateItem';
import CardFooter from '~/components/cardfooter/CardFooter';
import CardHeader from '~/components/cardheader/CardHeader';

const Certificate = () => {
  const context = useContext(AppContext);
  const certificates = context.data.get.certificates;
  const preview = context.preview.get;

  /**
   * Update the hidden state of skill.
   *
   * @param {React.MouseEvent} e [ on click event ].
   * @param {string} key [ name of a particular certificate].
   */
  const updateHiddenStateCertificates = (e, key) => {
    e.preventDefault();

    const data = context.data.get;

    data['certificates'].find(({ name, hidden }, index) => {
      if (name === key) {
        const newState = !hidden;

        data['certificates'][index].hidden = newState;
        context.data.set(data); // new state of data
      }
    });
  };

  const certificatesList = certificates.map(({ name, link, date, description }) => (
    <CertificateItem
      key={name}
      title={name}
      link={link}
      year={date}
      description={description}
      preview={preview}
      onHiddenIconClicked={updateHiddenStateCertificates}
    />
  ));

  return (
    <div className="certificate-block">
      <div className="card">
        <CardHeader title="Certificates" />
        <div className="certificate">{certificatesList}</div>
        <CardFooter icon={Add} hide={preview} label="Add another certificate" />
      </div>
    </div>
  );
};

export default Certificate;
