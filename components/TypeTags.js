export default ({ types, isCentered }) => {
  return (
    <div className="tags">
      {types.map((type) => (
        <span
          key={type}
          className={`tag heading is-${type.toLowerCase()}-type`}
        >
          {type}
        </span>
      ))}
      <style jsx>{`
        .tags {
          justify-content: ${isCentered ? 'center' : 'flex-start'};
        }
        .tags .tag:not(:last-child) {
          margin-left: ${isCentered ? "0.25rem" : "0rem"};
          margin-right: ${isCentered ? "0.25rem" : "0.5rem"};
        }
        .tags .tag:last-child {
          margin-left: ${isCentered? "0.25rem" : "0rem"};
          margin-right: ${isCentered ? "0.25rem" : "0rem"};
        }
        
      `}</style>
      <style jsx>{`
        .tag {
          color: #ffffff;
        }
        .is-normal-type {
          background-color: #a8a878;
        }
        .is-fire-type {
          background-color: #f08030;
        }
        .is-fighting-type {
          background-color: #c03028;
        }
        .is-water-type {
          background-color: #6890f0;
        }
        .is-flying-type {
          background-color: #a890f0;
        }
        .is-grass-type {
          background-color: #78c850;
        }
        .is-poison-type {
          background-color: #a040a0;
        }
        .is-electric-type {
          background-color: #f8d030;
        }
        .is-ground-type {
          background-color: #e0c068;
        }
        .is-psychic-type {
          background-color: #f85888;
        }
        .is-rock-type {
          background-color: #b8a038;
        }
        .is-ice-type {
          background-color: #98d8d8;
        }
        .is-bug-type {
          background-color: #a8b820;
        }
        .is-dragon-type {
          background-color: #7038f8;
        }
        .is-ghost-type {
          background-color: #705898;
        }
        .is-dark-type {
          background-color: #705848;
        }
        .is-steel-type {
          background-color: #b8b8d0;
        }
        .is-fairy-type {
          background-color: #ee99ac;
        }
      `}</style>
    </div>
  );
};
