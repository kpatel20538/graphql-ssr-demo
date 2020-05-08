export default ({ type }) => (
  <span className={`tag is-${type.toLowerCase()}-type`}>
    {type}
    <style jsx>{`
      .is-normal-type {
        background-color: #a8a878;
        color: #ffffff;
      }
      .is-fire-type {
        background-color: #f08030;
        color: #ffffff;
      }
      .is-fighting-type {
        background-color: #c03028;
        color: #ffffff;
      }
      .is-water-type {
        background-color: #6890f0;
        color: #ffffff;
      }
      .is-flying-type {
        background-color: #a890f0;
        color: #ffffff;
      }
      .is-grass-type {
        background-color: #78c850;
        color: #ffffff;
      }
      .is-poison-type {
        background-color: #a040a0;
        color: #ffffff;
      }
      .is-electric-type {
        background-color: #f8d030;
        color: #ffffff;
      }
      .is-ground-type {
        background-color: #e0c068;
        color: #ffffff;
      }
      .is-psychic-type {
        background-color: #f85888;
        color: #ffffff;
      }
      .is-rock-type {
        background-color: #b8a038;
        color: #ffffff;
      }
      .is-ice-type {
        background-color: #98d8d8;
        color: #ffffff;
      }
      .is-bug-type {
        background-color: #a8b820;
        color: #ffffff;
      }
      .is-dragon-type {
        background-color: #7038f8;
        color: #ffffff;
      }
      .is-ghost-type {
        background-color: #705898;
        color: #ffffff;
      }
      .is-dark-type {
        background-color: #705848;
        color: #ffffff;
      }
      .is-steel-type {
        background-color: #b8b8d0;
        color: #ffffff;
      }
      .is-fairy-type {
        background-color: #ee99ac;
        color: #ffffff;
      }
    `}</style>
  </span>
);
