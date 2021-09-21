
export default ({
  dashboardContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f7f8f8',
    paddingTop: '40px',
    paddingBottom: '40px',
    paddingLeft: '10%',
    paddingRight: '74px',
    margin: '0 auto',
  },
  dashboard: {
    margin: '0 auto',
  },
  pageTitle: {
    fontSize: '30px',
    fontWeight: 'bold'
  },
  subTitle: {
    fontSize: '18px',
    marginTop: '25px',
    fontWeight: 'bold'
  },
  wrapperBlock: {
    display: 'block',
  },
  wrapper: {
    minHeight: '90px',
    paddingTop: '14px',
    display: 'inline-flex',
    width: '242px',
    marginRight: '40px',
  },
  input: {
    width: 'calc(100% - 20px)',
    background: '#f8f8f8',
    border: 'solid 1px black',
    padding: '13px 20px 15px 20px',
    margin: '10px 0',
    color: 'black',
    fontSize: '14px',
    lineHeight: '1.29',
    '&:focus': {
      outline: 'none',
      border: 'solid 1px #000',
      boxShadow: '0 0 0.1rem 0.02rem #b3aeae',
    },
    '&:read-only': {
      border: 'solid 1px #f8f8f8',
    },
  },
  labelBlock: {
    display: 'inline-flex',
    width: 'fit-content',
    marginRight: '5px',
    minWidth: '20px',
  },
  label: {
    display: 'block',
    cursor: 'pointer',
    color: 'black',
    fontSize: '14px',
    lineHeight: '1.29',
    marginTop: '14px',
  },
  errorTxt: {
    fontSize: '12px',
    color: 'red',
  },
  infoIcon: {},
  errorInputBlock: {
    fontSize: '12px',
    lineHeight: 1.25,
    fontWeight: 'bold',
    color: 'red',
    marginTop: '-5px',
  },
  invalidInput: {
    border: 'solid 1px red',
    '&:focus': {
      border: 'solid 1px red',
    },
  },
  button: {
    height: '32px',
    width: '115px',
    fontSize: '18px',
    border: 'solid 1px #c3c3c3',
    borderRadius: '20px',
    marginTop: '20px',
  },
  buttonLoaderContainer: {
    height: '20px',
    backgroundColor: 'transparent',
  },
  buttonIcon: () => ({
    width: 'fit-content',
    alignItems: 'center',
    display: 'inline-block',
    border: 'none',
    backgroundColor: 'transparent',
    transition: 'background-color 0.15s ease 0s, border 0.15s ease 0s',
    color: 'black',
    '&:focus': {
      outline: 'none',
      boxShadow: 'transparent !important',
    },
    '&:hover': {
      cursor: 'pointer',
      color:'black',
      '& img': {
      },
    },
    '& img': {
      width: '20px',
      height: '20px',
    },
    '& span': {
      marginLeft: '10px',
      marginRight: '6px',
      maxWidth: '200px',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
  }),
});