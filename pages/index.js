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
  return resturants.map((resturant, index) => {
    return <Card resturant={resturant} key={index} />
  })
}

//TODO: GENERATE CARD LIST WITH RESTURANT PROP
export default function Home({ resturants }) {

  const style = {
    container: {
      maxWidth: 'initial',
      display: 'flex',
      justifyContent: 'space-evenly',
      padding: '20px 0',
      border: 'solid 0.1px'
    }
  }

  return <div style={style.container} className="container">{createCards(resturants)}</div>
}
