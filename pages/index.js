import { query } from "../utils/api";
import Box from "../components/Box";
import Media from "../components/Media";
import PageLayout from "../components/PageLayout";

const Home = ({ data }) => (
  <PageLayout>
    <Box>
      {data.pokemons.map((pokemon) => (
        <Media key={pokemon.id} {...pokemon} />
      ))}
    </Box>
  </PageLayout>
);

export async function getServerSideProps() {
  return {
    props: await query({
      query: `
        query PokemonsQuery {
          pokemons(first: 151) { 
            id
            name
            image
            types
          }
        }
      `,
    }),
  };
}

export default Home;
