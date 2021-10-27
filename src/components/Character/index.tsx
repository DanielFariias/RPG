import { CharacterSides } from '../../types/CharacterSides';
import * as C from './styles';

interface Props {
  x: number
  y: number
  side: CharacterSides
}

const Character: React.FC<Props> = ({ x, y, side }) => {
  const size = 30
  const sides = {
    down: 0,
    left: -30,
    right: -60,
    up: -90
  }

  return (
    <C.Container
      sidePos={sides[side]}
      size={size}
      left={x * size}
      top={y * size}
    >

    </C.Container>
  )
}

export default Character;