import { Project } from '../../types/project'

const DetailedView = ({ name, description, creator, tags }: Project) => {
    const headerStyle: React.CSSProperties = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }

      return (
        <div className="detailed-view">
        <head>
            {name}
        </head>
        <article>
            <header style={headerStyle}>
                <h1>{name}</h1>
                <h2>{creator.name}</h2>
            </header>
            <main>
                <p>{description}</p>
            </main>
            <footer>
                <ul>
                    {tags.map((tag) => ( <li>{tag}</li> ))}
                </ul>
            </footer>
        </article>

    </div>
      )
    

}

export default DetailedView