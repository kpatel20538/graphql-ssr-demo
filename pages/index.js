import { query } from "../utils/api";
import Link from "next/link";
import PageLayout from "../components/PageLayout";
import TypeTag from "../components/TypeTag";

const PokemonCard = ({ id, name, classification, image, types }) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-1by1">
          <Link href={`/pokemon/${id}`}>
            <a>
              <img src={image} alt={name} />
            </a>
          </Link>
        </figure>
      </div>
      <div className="card-content">
        <div className="columns is-centered is-mobile">
          <div className="column has-text-centered">
            <div className="title is-4">
              <Link href={`/pokemon/${id}`}>
                <a>{name}</a>
              </Link>
            </div>
            <div className="subtitle is-6">{classification}</div>
            <div>
              <span className="tags">
                {types.map((type) => (
                  <TypeTag key={type} type={type} />
                ))}
              </span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          figure img {
            padding: 1em;
            object-fit: contain;
            object-position: center;
          }
          .tags {
            justify-content: center;
          }
          .title,
          .subtitle {
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
        `}
      </style>
    </div>
  );
};

const Home = ({ data }) => (
  <PageLayout>
    <div className="columns is-centered is-mobile is-multiline">
      {data.pokemons.map((pokemon) => (
        <div
          key={pokemon.id}
          className="column has-text-centered is-2-fullhd is-one-quarter-desktop is-one-third-tablet is-half-mobile"
        >
          <PokemonCard {...pokemon} />
        </div>
      ))}
    </div>
  </PageLayout>
);

export async function getStaticProps() {
  return {
    props: await query({
      query: `
        query PokemonsQuery {
          pokemons(first: 151) { 
            id
            name
            classification
            image
            types
          }
        }
      `,
    }),
  };
}

export default Home;
