import logo from '../../resources/images/logo.png';

export default ({
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    height: '75px',
    background: '#f7f8f8',
    borderBottom: 'solid 5px #970c18'
  },
  logo: {
    display: 'flex',
    backgroundImage: `url(${logo})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
    height: '30px',
    width: '120px',
    marginLeft: '10%',
    marginTop: '25px',
  },
});