import * as React from 'react';
interface Props {
  children: React.ReactNode;
  isAlert: boolean;
}

const Alert = ({ children, isAlert }: Props) => {
  const [showAlert, setShowAlert] = React.useState(false);
  setShowAlert(isAlert);
  return (
    <>
      {showAlert == true}
      <div className="alert alert-warning" role="alert">
        {children}
      </div>
    </>
  );
};

export default Alert;
