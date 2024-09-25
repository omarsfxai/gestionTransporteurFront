import React from 'react';
import './offer.css';

const OffreTransport = ({ data }) => {
  return (
    <div className='Demande'>
      <div className="item1">
        <div className='blueBox'> 
          <p>{data?.title || 'Offre de transport'}</p>
        </div>
        <p className="packagingDetail">Détails de l'offre:</p>
        <p className='km'>{data?.kilos} Kg / {data?.distance} Km</p>
        <div className={data?.status === 7 ? 'voir offre' : 'offre expiré'}>
          {data?.status === 0 ? 'offre expiré' : 'voir offre'}

          
         
        </div>
      </div>

      <div className="item">
        <p className='pickup'>Transporteur</p>
        <p className='km'>{data?.transporteur}</p>
      </div>

      <div className="item">
        <p className='pickup'>Prix</p>
        <p className='km'>{data?.prix} €</p>
      </div>

      <div className="item">
        <p className='pickup'>Durée de transport</p>
        <p className='km'>{data?.duree}</p>
      </div>

     

      <div className="item4">
        <button type='submit' className='submit'>Modifier l'offre</button>
      </div>
    </div>
  );
}

export default OffreTransport;