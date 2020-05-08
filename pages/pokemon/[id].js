import client from "../../utils/api";
import gql from 'graphql-tag';
import PokemonTitleBar, {
  POKEMON_TITLE_BAR_FRAGMENT,
} from "../../components/fragments/PokemonTitleBar";
import DataTable, {
  DATA_TABLE_FRAGMENT,
} from "../../components/fragments/DataTable";
import PokemonCards, {
  POKEMON_CARD_FRAGMENT,
} from "../../components/fragments/PokemonCards";
import Figure from "../../components/Figure";
import PageLayout from "../../components/PageLayout";
import Section from "../../components/Section";

const POKEMON_QUERY = gql`
  query PokemonQuery($id: String) {
    pokemon(id: $id) {
      name
      image           
      ...PokemonTitleBarFragment
      ...DataTableFragment
      evolutions {
        ...PokemonCardFragment
      }
    }
  }
  ${POKEMON_TITLE_BAR_FRAGMENT}
  ${DATA_TABLE_FRAGMENT}
  ${POKEMON_CARD_FRAGMENT}
`;

export default ({ data }) => {
  return (
    <PageLayout>
      <Section>
        <PokemonTitleBar pokemon={data.pokemon} />
        <div className="columns">
          <div className="column is-two-fifths">
            <div className="box">
              <Figure src={data.pokemon.image} alt={data.pokemon.name} />
            </div>
          </div>
          <div className="column is-three-fifths">
            <DataTable pokemon={data.pokemon} />
          </div>
        </div>
      </Section>
      {data.pokemon.evolutions && (
        <Section>
          <div className="title has-text-centered">Evolutions</div>
          <PokemonCards pokemons={data.pokemon.evolutions} />
        </Section>
      )}
    </PageLayout>
  );
};

export async function getServerSideProps({ params: { id } }) {
  return {
    props: await client.query({
      query: POKEMON_QUERY,
      variables: { id },
    }),
  };
}
