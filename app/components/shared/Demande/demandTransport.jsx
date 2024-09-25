import React from 'react';
import './demandTransport.css';

const Demande = ({data}) => {
  return (
    <div className='Demande'>
      <div className="item1">
        <div className='blueBox'> 
          <p> {data?.title||'Demande de transport'}</p>
        </div>
        <p className="packagingDetail">détail de packaging:</p>
        <p className='km'>180 Kg / 280 Km</p>
        <div className={data?.status==7?'ouvert':'enCours'}>{data?.status==0?'ouvert':'enCours'}</div>
      </div>

      <div className="item">
        <p className='pickup'>Pick-up</p>
        <p className='km'>22 November 2023 <br></br>Tunis</p>
        <p className='adress'>2118 Thornridge Cir. Syracuse, Connecticut 35624</p>
        <p className='km'>9h:30</p>
      </div>

      <div className="item">
        <p className='pickup'>Deposer</p>
        <p className='km'>23 November 2023 <br></br>Djerba</p>
        <p className='adress'>2118 Thornridge Cir. <br></br>Syracuse, Connecticut 35624</p>
        <p className='km'>13h:30</p>
      </div>

      <div className="item4">
        <button type='submit' className='submit'>Detail et modification</button>
        <button type='submit' className='submitwhite'>4 Offres</button>
      </div>
    </div>
  );
}

export default Demande;