import { useTranslation } from "react-i18next";

function Welcome(){
    const {t}=useTranslation();
    
    return(
        <>
        <h1 className="p-2">{t('welcome')}</h1>
        </>
    )
}
export default Welcome;