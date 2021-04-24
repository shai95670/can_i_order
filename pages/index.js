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

export default function Home({ resturants }) {
  return (
    <Container>
        <MediaCard></MediaCard> 
    </Container>
  )
}


