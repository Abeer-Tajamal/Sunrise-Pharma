function refillEmailTemplate(
  firstName,
  lastName,
  email,
  phone,
  dateofbirth,
  deliverType,
  address,
  medicines
) {
  return `<div style="padding: 20px; background-color: #ffffff; border-radius: 10px">
    <h1 style="color: #333333; text-align: center">Sunrise Pharmacy</h1>
<div style="border: 2px solid black; padding: 20px">
  <p>
    We are having an issue connecting to your Pharmacy Management System.
    You have receieved this email to ensure that your pharmacy receives
    all of
    </p>
    <p>
    the refill requested by your patients. If the problem persists please
    call our office toll free at (475) 209-9284 or email sunrisepharmrx@gmail.com.
    <strong> (Some Rx Numbers may be duplicated) </strong>
    </p>
    </div>
    <br />
    <div style="display: flex; justify-content: space-around">
    <table>
    <tr>
    <th>PATIENT INFO</th>
    </tr>
    <tr>
    <td style="border: 2px solid black">Full Name:</td>
    <td style="border: 2px solid black">${firstName}  ${lastName}</td>
    </tr>
    <tr>
    <td style="border: 2px solid black">Date of Birth:</td>
    <td style="border: 2px solid black">${dateofbirth}</td>
    </tr>
    <tr>
    <td style="border: 2px solid black">Email Address:</td>
    <td style="border: 2px solid black">${email}</td>
    </tr>
    <tr>
    <td style="border: 2px solid black">Phone Number:</td>
    <td style="border: 2px solid black">${phone}</td>
    </tr>
    </table>
    <table>
    <tr>
    <th>REFILL DETAILS</th>
    </tr>
    <tr>
    <td style="border: 2px solid black">Date Sent:</td>
    <td style="border: 2px solid black">${new Date()}</td>
    </tr>
    <tr>
    <td style="border: 2px solid black">Source:</td>
    <td style="border: 2px solid black">Website</td>
    </tr>
    </table>
    </div>
    <div style="display: flex; justify-content: flex-start">
    <table>
    <tr>
    <th>SUBMITTED PRESCRIPTIONS</th>
    </tr>
    ${medicines.map((item) => {
      return `<tr>
      <td style="border: 2px solid black">Rx Number</td>
      <td style="border: 2px solid black">${item.number}</td>
      </tr>
      <tr>
      <td style="border: 2px solid black">Medication</td>
      <td style="border: 2px solid black">${item.name}</td>
      </tr>
      <tr>
      <td style="border: 2px solid black">Patient Notes</td>
      <td style="border: 2px solid black">${item.notes}</td>
      </tr>`;
    })}
    </table>
    </div>
    <div style="display: flex; justify-content: space-around">
    <table>
    <tr>
    <th>DELIVERY METHOD</th>
    </tr>
    <tr>
    <td style="border: 2px solid black">Method:</td>
    <td style="border: 2px solid black">${deliverType}</td>
    </tr>
    <tr>
      <td style="border: 2px solid black">Address:</td>
      <td style="border: 2px solid black">${address}</td>
      </tr>
      </table>
  </div>
  <p>
  This HIPAA complaint email contains important medication refill
  information sumitted by your patients on your branded website or mobile
  app. For customer support or to modify or stop
  </p>
  <p>
  service call toll-free (475) 209-9284 or email
  sunrisepharmrx@gmail.com.
  </p>
  </div>`;
}

module.exports = refillEmailTemplate;
