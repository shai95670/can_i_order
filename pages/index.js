import Container from '@material-ui/core/Container';
import MediaCard from '../components/card/card';
import axios from 'axios';


// This function gets called at build time
export async function getStaticProps() {
  const { data:resturants } = await axios.get('http://localhost:3001/resturant');
  return {
    props: {
      resturants
    },
  }
}

const createCards = (resturants) => {
  return resturants.map((resturant)=> {
    return <MediaCard resturant={resturant}></MediaCard>; 
  });
};

//TODO: GENERATE CARD LIST WITH RESTURANT PROP
export default function Home({ resturants }) {
  return (
    <Container>
        {createCards()} 
    </Container>
  )
}


