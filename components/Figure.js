export default ({ src, alt }) => {
  return (
    <figure className="image is-1by1">
      <img src={src} alt={alt} />
      <style jsx>
        {`
          figure img {
            padding: 1em;
            object-fit: contain;
            object-position: center;
          }
        `}
      </style>
    </figure>
  );
};
