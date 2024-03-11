import CountryIcon from '../components/CountryIcon.jsx';


export default function Countries({countries}) {


  return (
    <div>
      <h1 className='countries-header'>Click a Country Flag for more information</h1>
      <div className='countries-container'>
        { countries.length > 0 && countries.map((country) => (
          <CountryIcon country={country} key={country._id} />
        ))}
      </div>
    </div>
  )
}