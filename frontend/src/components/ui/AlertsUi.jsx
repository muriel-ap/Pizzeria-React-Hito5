import { Alert } from "react-bootstrap"

const AlertsUi = ({ type="info",children}) => {
  const variants = {error:"danger", warning:"warning", success:"success", info:"info"}
  return (
    <Alert  variant={variants[type]} className="mt-5">
      {children}
    </Alert>
  )
};

export default AlertsUi