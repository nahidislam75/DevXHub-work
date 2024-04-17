import React from 'react';
import { useTranslation } from "react-i18next";

const OutSideReact = () => {
  const { t } = useTranslation();
  const helloTranslation = <div className='p-2'>{t('hello')}</div>; 

  // Return JSX
  return (
    <div >
      {helloTranslation}
    </div>
  );
};

export default OutSideReact;