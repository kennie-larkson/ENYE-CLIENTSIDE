import React from "react";

const Profile = ({ profile }) => {
  const {
    FirstName,
    LastName,
    CreditCardNumber,
    CreditCardType,
    PaymentMethod,
  } = profile;
  return (
    <>
      {/* <h2>This is a single profile</h2> */}
      <div>
        <h4>
          Customer Name: {FirstName} {LastName}
        </h4>
        <h4>Credit Card Number: {CreditCardNumber}</h4>
        <h4>Credit Card Type: {CreditCardType}</h4>
        <h4>Payment Method: {PaymentMethod}</h4>
      </div>
    </>
  );
};

export default Profile;
