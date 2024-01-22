const FormationItemTitle = ({ title }) => {
  return (
    <div style={styles.titleContainer}>
      <h3 style={styles.title}>{title}</h3>
    </div>
  )
}

export default FormationItemTitle;

const styles = {
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#d4c8be',
    padding: '1rem',
  },
  title: {
    fontSize: '2rem',
    fontFamily: 'Cinzel, serif',
    fontWeight: 'bold',
  } 
}