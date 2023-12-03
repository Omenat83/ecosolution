import { LineDiv } from "./Line.styled";

const Line = ({ color = 'var(--accent-main)' } ) => {
  return <LineDiv style={{backgroundColor: color}}></LineDiv>;
};

export default Line;
