import Card from '../components/card/card'
import axios from 'axios'
import { style } from '../style'

// This function gets called at build time
export const getStaticProps = async () => {
  const { data: resturants } = await axios.get(
    'http://localhost:3001/resturant',
  )
  console.log(resturants);
  return {
    props: {
      resturants,
    },
  }
}

const createCards = (resturants) => {
  // online, public_url, name, mainimage
  return resturants.map((resturant, index) => {
    return <div key={index} style={style.column} className="column is-one-quarter"><Card resturant={resturant} /></div>
  }
  )
}

//TODO: GENERATE CARD LIST WITH RESTURANT PROP
export default function Home({ resturants }) {

  return (
    <div key={resturants.id} style={style.columns} className="columns is-multiline is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd">
      {createCards(resturants)}</div>)
}
