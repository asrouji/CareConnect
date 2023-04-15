import sampleData from './sampleData'

describe('Sample Data', () => {
  it('the sample data is present', async () => {
    expect(sampleData.projects.length).toBeGreaterThan(0)
    expect(sampleData.users.length).toBeGreaterThan(0)
    expect(sampleData.users[0].projects.length).toBeGreaterThan(0)
    expect(sampleData.projects[0].members.length).toBeGreaterThan(0)
  })
})
