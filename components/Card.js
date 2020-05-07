export default ({ image, name, types }) => (
  <article class="media">
    <figure class="media-left">
      <p class="image is-64x64">
        <img src={image} />
      </p>
    </figure>
    <div class="media-content">
      <div class="content">
        <p>
          <strong>{name}</strong>
          <br />
          <div className="tags">
            {types.map((type) => (
              <div key={type} className="tag">
                {type}
              </div>
            ))}
          </div>
        </p>
      </div>
    </div>
  </article>
);
