import Link from "next/link";
import Figure from "../Figure";
import TypeTags from "../TypeTags";

export const POKEMON_CARD_FRAGMENT = `
  fragment PokemonCardFragment on Pokemon {
    id
    image
    name
    classification
    types
  }
`;

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="card">
      <div className="card-image">
        <Link href={`/pokemon/${pokemon.id}`}>
          <Figure src={pokemon.image} alt={pokemon.name} />
        </Link>
      </div>
      <div className="card-content">
        <div className="columns is-centered is-mobile">
          <div className="column has-text-centered">
            <div className="title is-4">
              <Link href={`/pokemon/${pokemon.id}`}>
                <a>{pokemon.name}</a>
              </Link>
            </div>
            <div className="subtitle is-6">The {pokemon.classification}</div>
            <div>
              <TypeTags types={pokemon.types} isCentered />
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .title,
          .subtitle {
            word-break: normal;
          }
          .card {
            height: 100%;
          }
        `}
      </style>
    </div>
  );
};

export default ({ pokemons }) => {
  return (
    <div className="columns is-centered is-mobile is-multiline">
      {pokemons.map((pokemon) => (
        <div
          key={pokemon.id}
          className="column has-text-centered is-2-fullhd is-one-quarter-desktop is-one-third-tablet is-half-mobile"
        >
          <PokemonCard pokemon={pokemon} />
        </div>
      ))}
    </div>
  );
};
