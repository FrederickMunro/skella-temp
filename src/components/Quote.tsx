import { useLanguage } from "./LanguageProvider";
import QuoteFrame from "./QuoteFrame";

const Quote = () => {
  const { langNum } = useLanguage();

  return(
    <div className='soumission-container'>
      <div className="form-container">
        <h1 className='soumission-title'>{langNum ? 'Request a Quote' : 'Demandez une soumission'}</h1>
        <QuoteFrame />
      </div>
      <div className='finance-it-div'>
        <h2 className='finance-it-h'>{langNum ? 'Financing Available' : 'Financement disponible'}</h2>
        <a className='finance-it-a' href='https://www.financeit.ca/fr/direct/payment-plan/YT0mZj0mbD0mcD0zQUtMUTVHSFZMeHdaaFU1Ml9EWkFBJnE9dHJ1ZSZzPTAmdD0mdj0x/apply' target='_blank'>
            <img src='https://pub-f40ae46f468a42d88289e08f9bb73df6.r2.dev/uploads/financeit-logo.svg' alt='financeit-logo' loading='lazy' />
        </a>
      </div>
    </div>
  );
}

export default Quote;