import { types } from 'react-bricks'
import { website } from 'react-bricks-ui'
import HeroUnit from './MyHeroUnit'
import Thumbnail from './Thumbnail'
import Gallery from './Gallery'


// React Bricks UI + Custom HeroUnit brick
const bricks: types.Brick<any>[] = [...website, HeroUnit, Thumbnail, Gallery]

export default bricks