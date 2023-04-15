const Explore = () => {
  const headerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'flex-end',
  }

  return (
    <>
      <head>
        <title>Explore</title>
      </head>
      <body>
        <article>
          <header style={headerStyle}>
            <h1 style={{ marginRight: '500px' }}>CareConnect</h1>
            <div style={{ display: 'flex', gap: '25px', paddingRight: '30px' }}>
              <h2>+</h2>
              <h2>Profile</h2> {/* TODO Add profile button */}
            </div>
          </header>
          <main></main> {/* TODO Add project cards */}
          <footer></footer> {/* TODO Add project plus button*/}
        </article>
        <h1>=</h1>
        {/* <ProjectCard name="Project Name" description="Project description" tags={['No Poverty']} /> */}
      </body>
    </>
  )
}

export default Explore
