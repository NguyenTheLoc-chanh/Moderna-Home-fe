import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Typography from '@mui/material/Typography'

import StepPersonalInfo from './steps/StepPersonalInfo'
import StepDelivery from './steps/StepDelivery'
import StepPayment from './steps/StepPayment'

const steps = ['Personal Info', 'Delivery', 'Payment']

const CartSummary = () => {
  const [activeStep, setActiveStep] = useState(0)
  // 👉 thêm state lưu phương thức thanh toán
  const [selectedPayment, setSelectedPayment] = useState('cod')

  const handleNext = () => setActiveStep((prev) => prev + 1)
  const handleBack = () => setActiveStep((prev) => prev - 1)

  const renderStepContent = (step) => {
    switch (step) {
    case 0: return <StepPersonalInfo />
    case 1: return <StepDelivery />
    case 2: return <StepPayment selectedPayment={selectedPayment} setSelectedPayment={setSelectedPayment} />
    default: return <Typography>Unknown step</Typography>
    }
  }
  const handleCheckout = () => {
    alert(`Bạn đã chọn phương thức: ${selectedPayment}`)
  }

  return (
    <Box p={3} border="1px solid #ddd" borderRadius={2}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Typography variant='body1' fontWeight="bold" fontSize={'24px'} mt={2}>
        {steps[activeStep]}
      </Typography>

      {renderStepContent(activeStep)}

      <Box display="flex" justifyContent="space-between" mt={2}>
        <Button disabled={activeStep === 0} onClick={handleBack}>
          Back
        </Button>
        {activeStep === steps.length - 1 ? (
          <Button
            variant="contained"
            onClick={handleCheckout}
            sx={{ backgroundColor: 'primary.main', color: 'white', '&:hover': { bgcolor: '#a39278' } }}
          >
            GO TO CHECKOUT
          </Button>
        ) : (
          <Button
            variant="contained"
            onClick={handleNext}
            sx={{ backgroundColor: 'primary.main', color: 'white', '&:hover': { bgcolor: '#a39278' } }}
          >
            Next
          </Button>
        )}
      </Box>
    </Box>
  )
}

export default CartSummary
