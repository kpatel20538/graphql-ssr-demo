import { query } from "../../utils/api";
import Box from "../../components/Box";
import Media from "../../components/Media";
import PageLayout from "../../components/PageLayout";

const Pokemon = ({ data }) => {
  return (
    <PageLayout>
      <Box>
        <Media {...data.pokemon} />
      </Box>
      {data.pokemon.evolutions && (
        <Box>
          {data.pokemon.evolutions.map((pokemon) => (
            <Media key={pokemon.id} {...pokemon} />
          ))}
        </Box>
      )}
    </PageLayout>
  );
};

export async function getServerSideProps({ params: { id } }) {
  return {
    props: await query({
      query: `
        query PokemonQuery($id: String) {
          pokemon(id: $id) {
            id
            image
            name
            types
            evolutions {
              id
              image
              name
              types
            }
          }
        }
      `,
      variables: { id },
    }),
  };
}

export default Pokemon;
