import Box from '@mui/material/Box'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import Typography from '@mui/material/Typography'
import Radio from '@mui/material/Radio'

const paymentMethods = [
  {
    id: 'cod',
    label: 'Thanh toán khi giao hàng (COD)',
    icon: '📦' // bạn thay bằng hình ảnh thật
  },
  {
    id: 'bank',
    label: 'Chuyển khoản qua ngân hàng',
    icon: '💳'
  },
  {
    id: 'momo',
    label: 'Ví MoMo',
    icon: '👜'
  },
  {
    id: 'vnpay',
    label: 'Thẻ ATM/Visa/Master/JCB/QR Pay qua cổng VNPAY',
    icon: '🏦'
  }
]

export default function StepPayment({ selectedPayment, setSelectedPayment }) {
  return (
    <FormControl component="fieldset" fullWidth>
      <Typography variant="h6" gutterBottom>
        Phương thức thanh toán
      </Typography>
      <RadioGroup
        value={selectedPayment}
        onChange={(e) => setSelectedPayment(e.target.value)}
      >
        {paymentMethods.map((method) => (
          <Box
            key={method.id}
            sx={{
              display: 'flex',
              alignItems: 'center',
              border: '1px solid #ddd',
              borderRadius: 2,
              p: 2,
              mb: 1
            }}
          >
            <FormControlLabel
              value={method.id}
              control={<Radio />}
              label={
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{ fontSize: '24px', marginRight: '12px' }}>
                    {method.icon}
                  </span>
                  <Typography>{method.label}</Typography>
                </Box>
              }
              sx={{ flex: 1, m: 0 }}
            />
          </Box>
        ))}
      </RadioGroup>
    </FormControl>
  )
}
