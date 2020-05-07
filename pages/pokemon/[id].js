import { query } from "../../utils/api";
import Link from "next/link";
import { useRouter } from "next/router";
import Card from "../../components/Card";

const Pokemon = ({ data }) => {
  const { back } = useRouter();

  return (
    <div className="section">
      <div className="container">
        <button className="button" onClick={() => back()}>
          Go Back
        </button>
        <div className="box">
          <a>
            <Card {...data.pokemon} />
          </a>
        </div>
        {data.pokemon.evolutions && (
          <div className="box">
            {data.pokemon.evolutions.map(({ id, ...pokemon }) => (
              <Link key={id} href={`/pokemon/${id}`}>
                <a>
                  <Card {...pokemon} />
                </a>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
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
