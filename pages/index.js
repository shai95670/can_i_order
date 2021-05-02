import Card from '../components/card/card'
import axios from 'axios'

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
  return resturants.map((resturant) => {
    return <Card resturant={resturant} />
  })
}

//TODO: GENERATE CARD LIST WITH RESTURANT PROP
export default function Home({ resturants }) {
  return <div className="container">{createCards(resturants)}</div>
}
