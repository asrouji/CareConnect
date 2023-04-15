import { tagColors } from '../data/tags'

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
  }

  return (
    <button style={buttonStyle}>#{name}</button>
  )
}

const renderTagButton = (tag: keyof typeof tagColors) => {
  return <TagButton name={tag} key={tag} color={tagColors[tag][0]} textColor={tagColors[tag][1]}/>
}

export default renderTagButton