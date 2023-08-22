import styled from 'styled-components';

const Planet = styled.div`
  margin: 0 auto;
  width: 70%;
  color: #000;
  background-color: #fff;
  padding: 10px;
  border-radius: 8px;
  font-size: 18px;
`;

export function PlanetCard({ planet }) {
  return (
    <Planet>
      <h2>{planet.name}</h2>
      <p>
        Climate:
        {planet.climate}
      </p>
      <p>
        Terrain:
        {planet.terrain}
      </p>
      <p>
        Population:
        {planet.population}
      </p>
      <p>
        Diameter:
        {planet.diameter}
      </p>
      <p>
        Orbital period:
        {planet.orbital_period}
      </p>
      <p>
        Rotation period:
        {planet.rotation_period}
      </p>
      <p>
        Gravity:
        {planet.gravity}
      </p>
      <p>
        Surface water:
        {planet.surface_water}
      </p>
    </Planet>
  );
}
