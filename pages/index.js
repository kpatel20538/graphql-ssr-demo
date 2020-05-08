import { query } from "../utils/api";
import PokemonCards, {
  POKEMON_CARD_FRAGMENT,
} from "../components/fragments/PokemonCards";
import PageLayout from "../components/PageLayout";
import Section from "../components/Section";

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
    props: await query({
      query: `
        query PokemonsQuery {
          pokemons(first: 151) { 
            ...PokemonCardFragment
          }
        }
        ${POKEMON_CARD_FRAGMENT}
      `,
    }),
  };
}
