import TypeTags from "../TypeTags";

const NUMBER_FORMATTER = Intl.NumberFormat();
const formatNumber = (value) => NUMBER_FORMATTER.format(value)

const MEASURE_PATTERN = /(?<value>[\d\.]+)(?<units>[A-Za-z]+)/;
const formatMeasurement = (value) => MEASURE_PATTERN.exec(value).groups

const StatRow = ({ label, children }) => {
  return (
    <tr>
      <th className="is-narrow">{label}</th>
      <td>{children}</td>
    </tr>
  );
};

const Measurement = ({ value, units }) => {
  return (
    <span>
      <strong className="is-size-5">{value}</strong>
      <em className="is-size-7">{units}</em>
    </span>
  );
};

export const DATA_TABLE_FRAGMENT = `
  fragment DataTableFragment on Pokemon {
    number
    name
    types
    classification
    maxHP
    maxCP
    resistant
    weaknesses
    fleeRate
    weight {
      minimum
      maximum
    }
    height {
      minimum
      maximum
    }
  }
`

export default ({ pokemon }) => {
  const {
    value: weightMinimumValue = "",
    units: weightMinimumUnits = "",
  } = formatMeasurement(pokemon.weight.minimum);
  const {
    value: weightMaximumValue = "",
    units: weightMaximumUnits = "",
  } = formatMeasurement(pokemon.weight.maximum);
  const {
    value: heightMinimumValue = "",
    units: heightMinimumUnits = "",
  } = formatMeasurement(pokemon.height.minimum);
  const {
    value: heightMaximumValue = "",
    units: heightMaximumUnits = "",
  } = formatMeasurement(pokemon.height.maximum);

  return (
    <table className="table is-striped is-hoverable is-fullwidth">
      <tbody>
        <StatRow label="Pokédex Entry">
          <code>#{pokemon.number}</code>
        </StatRow>
        <StatRow label="Name">
          {pokemon.name}
        </StatRow>
        <StatRow label="Types">
          <TypeTags types={pokemon.types} />
        </StatRow>
        <StatRow label="Classification">
          <em>The {pokemon.classification}</em>
        </StatRow>
        <StatRow label="Max HP">
          <Measurement
            value={formatNumber(pokemon.maxHP)}
            units="/4,200"
          />
          <progress
            className="progress is-danger"
            value={pokemon.maxHP}
            max={4200}
          />
        </StatRow>
        <StatRow label="Max CP">
          <Measurement
            value={formatNumber(pokemon.maxCP)}
            units="/4,200"
          />
          <progress
            className="progress is-warning"
            value={pokemon.maxCP}
            max={4200}
          />
        </StatRow>
        <StatRow label="Resistant To">
          <TypeTags types={pokemon.resistant} />
        </StatRow>
        <StatRow label="Weak To">
          <TypeTags types={pokemon.weaknesses} />
        </StatRow>
        <StatRow label="Flee Rate">
          <Measurement
            value={formatNumber(pokemon.fleeRate * 100)}
            units="%"
          />
          <progress className="progress" value={pokemon.fleeRate} max={1} />
        </StatRow>
        <StatRow label="Weight">
          <span>
            <Measurement
              value={weightMinimumValue}
              units={weightMinimumUnits}
            />{" "}
            –{" "}
            <Measurement
              value={weightMaximumValue}
              units={weightMaximumUnits}
            />
          </span>
        </StatRow>
        <StatRow label="Height">
          <span>
            <Measurement
              value={heightMinimumValue}
              units={heightMinimumUnits}
            />{" "}
            –{" "}
            <Measurement
              value={heightMaximumValue}
              units={heightMaximumUnits}
            />
          </span>
        </StatRow>
      </tbody>
    </table>
  );
};