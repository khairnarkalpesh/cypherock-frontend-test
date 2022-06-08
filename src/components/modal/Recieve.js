import React, { useState, useEffect } from 'react';
import './modal.css';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';


import {
	Typography,
	TextField,
	Button,
	Stepper,
	Step,
	StepLabel,
  } from "@material-ui/core";
  import { makeStyles } from "@material-ui/core/styles";
  import {
	useForm,
	Controller,
	FormProvider,
	useFormContext,
  } from "react-hook-form";
  
  const useStyles = makeStyles((theme) => ({
	button: {
	  marginRight: theme.spacing(1),
	},
  }));


  function getSteps() {
	return [
	  "Device",
	  "Verification",
	  "Receive",
	];
  }
  const BasicForm = () => {
	const { control } = useFormContext();
	return (
	  <>
		<Controller
		  control={control}
		  name="firstName"
		  render={({ field }) => (
			<div className='instructions-container'>
				<span>Follow the instruction on device</span>
				<button className='instructions'>
					<div><ArrowForwardIcon className='right-arrow' />Select the Wallet On device</div>
					<div><CheckIcon /></div>
				</button>
			</div>
		  )}
		/>
  
		<Controller
		  control={control}
		  name="lastName"
		  render={({ field }) => (
			<div className='instructions-container'>
				<button className='instructions'>
					<div><ArrowForwardIcon className='right-arrow' />Select the Coin on device</div>
					<div><CheckIcon /></div>
				</button>
			</div>
		  )}
		/>
  
		<Controller
		  control={control}
		  name="nickName"
		  render={({ field }) => (
			<div className='instructions-container'>
				<button className='instructions'>
					<div><ArrowForwardIcon className='right-arrow' />Tap 1 card of any 4 Cards</div>
					<div><CheckIcon /></div>
				</button>
			</div>
		  )}
		/>
	  </>
	);
  };
  const Verification = () => {
	const { control } = useFormContext();
	return (
	  <>
		<Controller
		  control={control}
		  name="emailAddress"
		  render={({ field }) => (
			<div className='verification-container'>
				<button className='instructions'>
					<div className='v-code'><span className='verification-code'>25BKJNKNLJL58fjkdhfk26dnfds15</span></div>
				</button>
			</div>
		  )}
		/>
  
		<Controller
		  control={control}
		  name="phoneNumber"
		  render={({ field }) => (
			<div className='verification-container'>
				<span className='title'>Verify address on device</span>
				<button className='code'>
					<div><ArrowForwardIcon className='right-arrow' />Please match the address to be shown in X1 Wallet</div>
					<div><CheckIcon /></div>
				</button>
			</div>
		  )}
		/>
	  </>
	);
  };
  const ReceiveStep = () => {
	const { control } = useFormContext();
	return (
	  <>
		<Controller
		  control={control}
		  name="address1"
		  render={({ field }) => (
			<div className='receive-container'>
				<button className='instructions'>
					<div className='receive-code'><span className='verification-code'>25BKJNKNLJL58fjkdhfk26dnfds15</span><button className='copy-btn'>Copy</button></div>
				</button>
				<div className='address-verified'>
					<InfoOutlinedIcon />
					<span>address verified</span>
				</div>
				<div className='re-verify'>
					<button>Re-verify</button>
				</div>
			</div>
		  )}
		/>
		
	  </>
	);
  };
    
  function getStepContent(step) {
	switch (step) {
	  case 0:
		return <BasicForm />;
	  case 1:
		return <Verification />;
	  case 2:
		return <ReceiveStep />;
	  default:
		return "unknown step";
	}
  }
  

const Modal = ({ onRequestClose }) => {

	const classes = useStyles();
  const methods = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      nickName: "",
      emailAddress: "",
      phoneNumber: "",
      alternatePhone: "",
      address1: "",
      address2: "",
      country: "",
      cardNumber: "",
      cardMonth: "",
      cardYear: "",
    },
  });
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();

  const isStepOptional = (step) => {
    return step === 1 || step === 2;
  };

  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };

  const handleNext = (data) => {
    console.log(data);
    if (activeStep == steps.length - 1) {
      fetch("https://jsonplaceholder.typicode.com/comments")
        .then((data) => data.json())
        .then((res) => {
          console.log(res);
          setActiveStep(activeStep + 1);
        });
    } else {
      setActiveStep(activeStep + 1);
      setSkippedSteps(
        skippedSteps.filter((skipItem) => skipItem !== activeStep)
      );
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSkip = () => {
    if (!isStepSkipped(activeStep)) {
      setSkippedSteps([...skippedSteps, activeStep]);
    }
    setActiveStep(activeStep + 1);
  };

	// Use useEffect to add an event listener to the document
	useEffect(() => {
		function onKeyDown(event) {
			if (event.keyCode === 27) {
				// Close the modal when the Escape key is pressed
				onRequestClose();
			}
		}

		// Prevent scolling
		document.body.style.overflow = "hidden";
		document.addEventListener("keydown", onKeyDown);

		// Clear things up when unmounting this component
		return () => {
			document.body.style.overflow = "visible";
			document.removeEventListener("keydown", onKeyDown);
		};
	});

	return (
		<div className="receive">
			<div className="receice_container">
				<h3 className="receive_title">Receive</h3>
				<div>
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography
                variant="caption"
                align="center"
                style={{ display: "block" }}
              >
                optional
              </Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step {...stepProps} key={index}>
              <StepLabel {...labelProps}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <Typography variant="h3" align="center">
          Thank You
        </Typography>
      ) : (
        <>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(handleNext)}>
              {getStepContent(activeStep)}

              {/* <Button
                className={classes.button}
                disabled={activeStep === 0}
                onClick={handleBack}
              >
                back
              </Button> */}
              {/* {isStepOptional(activeStep) && (
                // <Button
                //   className={classes.button}
                //   variant="contained"
                //   color="primary"
                //   onClick={handleSkip}
                // >
                //   skip
                // </Button>
              )} */}
              {/* <Button
                className={classes.button}
                variant="contained"
                color="primary"
                // onClick={handleNext}
                type="submit"
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button> */}
            </form>
          </FormProvider>
        </>
      )}
    </div>
		<button className='modal-btn' type="button" onClick={onRequestClose}>
			<CloseIcon/>
		</button>
		{/* <div className="placeholder" />
		<div className="placeholder" />
		<div className="placeholder medium" />
		<div className="placeholder" /> */}
		</div>
	</div>
	);
};

const Receive = () => {
	const [isModalOpen, setModalIsOpen] = useState(false);
	
	console.log(useState("hello")[1])
	const toggleModal = () => {
		setModalIsOpen(!isModalOpen);
	};

	useEffect(() => {
		toggleModal();
	}, [])

	return (
		<main>
			{isModalOpen && <Modal onRequestClose={toggleModal} />}
			{/* <button className='modal-btn' onClick={toggleModal} type="button">
				Show the modal
			</button> */}
			
		</main>
	);
};

export default Receive