// import chroma from 'chroma-js'

import { tags } from '../data/tags'
import { Tag } from '../types/tag'

type TagButtonProps = {
  name: string,
  color?: string,
  textColor?: string,
}

const TagButton = ({ name, color = 'white', textColor = 'black' }: TagButtonProps) => {
  const buttonStyle = {
    backgroundColor: color,
    color: textColor,
    border: 'none',
    borderRadius: 0,
    // '&:hover': {
      // backgroundColor: chroma(color).,
    // }
  }

  return (
    <button style={buttonStyle}>#{name}</button>
  )
}

const renderTagButton = (tag: Tag) => {
  return <TagButton name={tag} key={tag} color={tags[tag].colors[0]} textColor={tags[tag].colors[1]}/>
}

export default renderTagButton