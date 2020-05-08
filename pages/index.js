import client from "../utils/api";
import gql from "graphql-tag";
import PokemonCards, {
  POKEMON_CARD_FRAGMENT,
} from "../components/fragments/PokemonCards";
import PageLayout from "../components/PageLayout";
import Section from "../components/Section";

const INDEX_QUERY = gql`
  query PokemonsQuery {
    pokemons(first: 151) {
      ...PokemonCardFragment
    }
  }
  ${POKEMON_CARD_FRAGMENT}
`;

export default ({ data }) => {
  return (
    <PageLayout>
      <Section>
        <PokemonCards pokemons={data.pokemons} />
      </Section>
    </PageLayout>
  );
};

export async function getStaticProps() {
  return {
    props: await client.query({
      query: INDEX_QUERY,
    }),
  };
}
