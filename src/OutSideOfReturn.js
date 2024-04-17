import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import Button from 'react-bootstrap/Button';

const OutSideOfReturn = () => {
  const [showAlert, setShowAlert] = useState(false);
  const {t}=useTranslation();

  const handleButtonClick = () => {
    setShowAlert(true);
  };

  // Define the alert outside of the return statement
  const alertMessage = (
    <div className="alert" style={{height:"45px"}}>
      {t('alertText')}
    </div>
  );

  return (
    <div class="card p-2">
      <Button variant="warning" onClick={handleButtonClick}>Show Alert</Button>
      {showAlert && alertMessage}
    </div>
  );
};

export default OutSideOfReturn;
