import i18n from './i18n';
import { useTranslation } from "react-i18next";

function greet() {
    const helloTranslation = i18n.t('hello');
    console.log(helloTranslation); // Output: "Hello"
  }



function OutSideReactConsol(){
    const {t}=useTranslation();
    greet();
    
    return(
        <>
        <h1 className='p-2'>Printed in Browser Consol(Applying Outside React)  </h1>
        
        </>
    )
}

  
export default OutSideReactConsol;




