export const POKEMON_TITLE_BAR_FRAGMENT = `
  fragment PokemonTitleBarFragment on Pokemon {
    name
    number
  }
`
export default ({ pokemon }) => {
  return (
    <div className="level">
      <div className="level-left">
        <div className="level-item">
          <div className="subtitle is-3">{pokemon.name}</div>
        </div>
      </div>
      <div className="level-right">
        <div className="level-item">
          <div className="title is-1">#{pokemon.number}</div>
        </div>
      </div>
    </div>
  );
};