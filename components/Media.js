import Link from "next/link";

export default ({ id, image, name, types }) => (
  <article className="media">
    <figure className="media-left">
      <Link href={`/pokemon/${id}`}>
        <a>
          <p className="image is-64x64">
            <img src={image} />
          </p>
        </a>
      </Link>
    </figure>
    <div className="media-content">
      <div className="content">
        <p>
          <strong>
            <Link href={`/pokemon/${id}`}>
              <a>{name}</a>
            </Link>
          </strong>
          <br />
          <span className="tags">
            {types.map((type) => (
              <span key={type} className="tag">
                {type}
              </span>
            ))}
          </span>
        </p>
      </div>
    </div>
  </article>
);
