import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUseStyles } from 'react-jss';
import classnames from 'classnames';
import { fetchCountries, registerUser } from '../../redux/actions';
import styles from './RegistrationPage.styles';
import Loader from '../custom/Loader';
import CustomSelect from '../custom/CustomSelect';
import * as constants from '../../utils/constants';
import { getCountries } from '../../redux/selectors';
import infoIcon from '../../resources/images/icons-size-1-info-info.svg';

const useStyles = createUseStyles(styles);

const RegistrationPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const countries = useSelector(getCountries);
  const [registrationData, setRegistrationData] = useState({
    title: '',
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    confirmEmail: '',
    nationalInsuranceNumber: '',
    region: '',
    countryOfNationatilty: ''
  });
  const [countryNames, setCountryNames] = useState([]);
  const [showButtonSpinner, setShowButtonSpinner] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState('');

  const defaultConfig = {
    title: ['Mr', 'Ms'],
    regions: ['Americas', 'Asia', 'Africa', 'Oceania', 'Europe', 'Polar']
  };
  
  useEffect(() => {
    dispatch(fetchCountries(constants.DEFAULT_REGION))
  }, []);

  const hasError = (fieldName) => (errors && errors[fieldName]);

  const renderError = (fieldName) => {
    return (
      <span className={classnames(classes.errorInputBlock)}>
        {errors[fieldName]}
      </span>
    );
  };

  const renderDescTooltip = (tooltipMsg) => {
    if (tooltipMsg) {
      return (
        <span className="tooltip" data-tip={tooltipMsg}>
          <button
            className={classes.buttonIcon}
            type="button"
          >
            <img src={infoIcon} alt={infoIcon} />
          </button>
        </span>
      );
    }
    return null;
  };

  const renderLabel = (label) => {
    if (label) {
      return (
        <span className={classnames(classes.labelBlock)}>
          {label}
        </span>
      );
    }
    return null;
  };

  const handleFormChange = (filedName, value) => {
    let modifiedRegistrationData = {...registrationData};
    modifiedRegistrationData[filedName] = value;
    console.log(`value`, value)
    if(value !== '') {
      validateFormField(filedName);
    } else {

    }
    
    if(filedName === 'region') {
      const regionCountries = countries.filter(country => (country.region == value));
      if(regionCountries.length > 0) {
        setCountryNames(regionCountries.map(country => country.name))
      } else {
        setCountryNames([])
        modifiedRegistrationData.countryOfNationatilty = '';
      }
    }
    if(filedName ==='nationalInsuranceNumber') {
      modifiedRegistrationData[filedName] = value.toUpperCase();
    }
    setRegistrationData(modifiedRegistrationData);
  }

  const validateEmail = (value) => {
    var emailRgx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return value.match(emailRgx);
  }

  const validateFormField = (fieldName) => {
    let modifiedErrors = {...errors};
    modifiedErrors[fieldName] = '';
    //Email format validation
    if(fieldName === 'email' || fieldName === 'confirmEmail') {
      if (!validateEmail(registrationData[fieldName])) {
        modifiedErrors[fieldName] = 'Email is invalid';
      }
    }
    //nationalInsuranceNumber format validation
    if(fieldName === 'nationalInsuranceNumber') {
      const regexInsuranceNo = /[a-z, A-Z]{2}[0-9]{7}[a-z, A-Z]{1}/;
      if(!registrationData[fieldName].match(regexInsuranceNo)) {
        modifiedErrors[fieldName] = 'Please enter valid number';
      }
    }
    setErrors(modifiedErrors);
  }

  const handleNextClick = async () => {
    setShowButtonSpinner(true);
    let modifiedErrors = {...errors};
    Object.keys(registrationData).map(inputItem => {
      modifiedErrors[inputItem] = '';
      if(inputItem !== 'middleName' && registrationData[inputItem] === '') {
        modifiedErrors[inputItem] = 'Please enter a value';
      }
      validateFormField(inputItem);
    });
    setErrors(modifiedErrors);

    const isFormDataValid = Object.keys(modifiedErrors).filter((field => modifiedErrors[field] !== '')).length == 0;
    console.log(`isFormDataValid`, isFormDataValid)
    if(isFormDataValid) {
      //TO DO: dispatch register User action to register user.
      // await dispatch(registerUser(registrationData));
      setSubmitStatus('success');
    }
    //TO DO: setTimeOut To be removed after api integration for submit request
    setTimeout(() => {
      setShowButtonSpinner(false);
    }, 1000);
  }

  return (
    <section className={classes.dashboardContainer}>
      <label className={classes.pageTitle}>{'Please fill in your details to complete the process'}</label>
      <br/>
      <label className={classes.subTitle}>{'About You'}</label>
      <form autoComplete="off">
      <div className={classnames(classes.wrapperBlock)}>
        <div className={classnames(classes.wrapper)}>
          <label className={classnames(classes.label)}>
            {renderLabel('Title')}
            <CustomSelect 
              name='title' 
              selectedValue={registrationData?.title}
              options={defaultConfig.title} 
              onChange={(val) => handleFormChange('title', val)}
              hasError={hasError('title')}/>
            {hasError('title') ? renderError('title') : null}
          </label>
        </div>
      </div>

      <div className={classnames(classes.wrapperBlock)}>
        <div className={classnames(classes.wrapper)}>
          <label className={classnames(classes.label)}>
            {renderLabel('Legal First Name')}
            <input
              className={classnames(
                classes.input,
                hasError('firstName') && classes.invalidInput,
              )}
              name='firstName'
              type='text'
              value={registrationData?.firstName}
              autoComplete="off"
              onChange={(e) => handleFormChange('firstName', e.target.value)}
            />
            {hasError('firstName') ? renderError('firstName') : null}
          </label>
        </div>
        <div className={classnames(classes.wrapper)}>
          <label className={classnames(classes.label)}>
            {renderLabel('Middle Name(s)')}
            <input
              className={classnames(
                classes.input,
                hasError('middleName') && classes.invalidInput,
              )}
              name='middleName'
              type='text'
              value={registrationData?.middleName}
              autoComplete="off"
              onChange={(e) => handleFormChange('middleName', e.target.value)}
            />
            {hasError('middleName') ? renderError('middleName') : null}
          </label>
        </div>
        <div className={classnames(classes.wrapper)}>
          <label className={classnames(classes.label)}>
            {renderLabel('Last Name')}
            <input
              className={classnames(
                classes.input,
                hasError('lastName') && classes.invalidInput,
              )}
              name='lastName'
              type='text'
              value={registrationData?.lastName}
              autoComplete="off"
              onChange={(e) => handleFormChange('lastName', e.target.value)}
            />
            {hasError('lastName') ? renderError('lastName') : null}
          </label>
        </div>
      </div>

      <div className={classnames(classes.wrapperBlock)}>
        <div className={classnames(classes.wrapper)}>
          <label className={classnames(classes.label)}>
            {renderLabel('Email')}
            <input
              className={classnames(
                classes.input,
                hasError('email') && classes.invalidInput,
              )}
              name='email'
              type='text'
              value={registrationData?.email}
              autoComplete="off"
              onChange={(e) => handleFormChange('email', e.target.value)}
            />
            {hasError('email') ? renderError('email') : null}
          </label>
        </div>
        <div className={classnames(classes.wrapper)}>
          <label className={classnames(classes.label)}>
            {renderLabel('Confirm Email')}
            <input
              className={classnames(
                classes.input,
                hasError('confirmEmail') && classes.invalidInput,
              )}
              name='confirmEmail'
              type='text'
              value={registrationData?.confirmEmail}
              autoComplete="off"
              onChange={(e) => handleFormChange('confirmEmail', e.target.value)}
            />
            {hasError('confirmEmail') ? renderError('confirmEmail') : null}
          </label>
        </div>
      </div>

      <div className={classnames(classes.wrapperBlock)}>
        <div className={classnames(classes.wrapper)}>
          <label className={classnames(classes.label)}>
            {renderLabel('National Insurance Number')}
            {renderDescTooltip('National Insurance Number, eg. SN123456G')}
            <input
              className={classnames(
                classes.input,
                hasError('nationalInsuranceNumber') && classes.invalidInput,
              )}
              name='nationalInsuranceNumber'
              type='text'
              value={registrationData?.nationalInsuranceNumber}
              autoComplete="off"
              onChange={(e) => handleFormChange('nationalInsuranceNumber', e.target.value)}
            />
            {hasError('nationalInsuranceNumber') ? renderError('nationalInsuranceNumber') : null}
          </label>
        </div>
        
        <div className={classnames(classes.wrapperBlock)}>
          <div className={classnames(classes.wrapper)}>
            <label className={classnames(classes.label, 'country-select')}>
              {renderLabel('Region')}
              {renderDescTooltip('Region')}
              <CustomSelect 
                name='region' 
                selectedValue={registrationData?.region}
                options={defaultConfig.regions} 
                onChange={(val) => handleFormChange('region', val)}
                hasError={hasError('region')}/>
              {hasError('region') ? renderError('region') : null}
            </label>
          </div>
        </div>

        <div className={classnames(classes.wrapperBlock)}>
          <div className={classnames(classes.wrapper)}>
            <label className={classnames(classes.label, 'country-select')}>
              {renderLabel('Country Of Nationality')}
              {renderDescTooltip('Country Of Nationality, Please select Region to populate country')}
              <CustomSelect 
                name='countryOfNationatilty' 
                selectedValue={registrationData?.countryOfNationatilty}
                options={countryNames} 
                disabled={countryNames?.length === 0}
                onChange={(val) => handleFormChange('countryOfNationatilty', val)}
                hasError={countryNames?.length && hasError('countryOfNationatilty')}/>
              {countryNames?.length && hasError('countryOfNationatilty') 
                ? renderError('countryOfNationatilty') 
                : null}
            </label>
          </div>
        </div>

        <div className={classnames(classes.wrapperBlock)}>
          <div className={classnames(classes.wrapper)}>
            <button
              className={classes.button}
              type="button"
              onClick={handleNextClick}
            >
              {showButtonSpinner ? (
                <Loader
                  className={classnames(classes.buttonLoaderContainer, 'buttonLoader')}
                />
              ) : (
                <span>{'Next'}</span>
              )}
            </button>
          </div>
        </div>
        {submitStatus === 'success' && <span>{'User Registered Successfully !!'}</span>}
      </div>
      </form>
    </section>
  );
};

export default RegistrationPage;