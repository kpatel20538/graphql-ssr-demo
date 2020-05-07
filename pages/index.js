import { query } from "../utils/api";
import Link from "next/link";
import Card from "../components/Card";

const Home = ({ data }) => (
  <div className="section">
    <div className="container">
      <div className="box">
        {data.pokemons.map(({ id,...pokemon}) => (
          <Link key={id} href={`/pokemon/${id}`}>
            <Card {...pokemon} />
          </Link>
        ))}
      </div>
    </div>
  </div>
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
