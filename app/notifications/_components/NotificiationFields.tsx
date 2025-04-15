"use client";
import { useState } from "react";

export default function NotificationFields() {
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [phoneSuccess, setPhoneSuccess] = useState("");

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [emailSuccess, setEmailSuccess] = useState("");

  const handleOptInPhone = () => {
    const isValidPhone: boolean = /^\d{3}-\d{3}-\d{4}$/.test(phone);
    if (!isValidPhone) {
      setPhoneError("Invalid format. Must be ###-###-####");
      setTimeout(() => setPhoneError(""), 3000); // clear message after 3 seconds
      return;
    } else setPhoneError("");
    setPhoneSuccess("Successfully opted in!");
    setTimeout(() => setPhoneSuccess(""), 3000); // clear message after 3 seconds

  }


  const handleOptInEmail = () => {
    const isValidEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    if (!isValidEmail) {
      setEmailError("Invalid format. Must be xxxxx@yyy.zzz");
      setTimeout(() => setEmailError(""), 3000); // clear message after 3 seconds
      return;
    } else setEmailError("");
    setEmailSuccess("Successfully opted in!");
    setTimeout(() => setEmailSuccess(""), 3000); // clear message after 3 seconds

  }
  return (
    <div className="w-full flex flex-col items-center gap-y-3">
      <p className="italic">You may opt in to receive restock notifications</p>

      <div>
        <label>Phone Notifications</label>
        <div className="flex gap-x-2">
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="123-456-7890"

            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleOptInPhone();
              }
            }}
          />
          <button className="flex-1" onClick={() => handleOptInPhone()}>Opt In</button>
        </div>
        {phoneError && <p className="errorMessage">{phoneError}</p>}
        {phoneSuccess && <p className="text-emerald-500 text-sm">{phoneSuccess}</p>}
      </div>
      <div>
        <label>Email Notifications</label>
        <div className="flex gap-x-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="someone@gmail.com"

            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleOptInEmail();
              }
            }}
          />
          <button className="flex-1" onClick={() => handleOptInEmail()}>Opt In</button>
        </div>
        {emailError && <p className="errorMessage">{emailError}</p>}
        {emailSuccess && <p className="text-emerald-500 text-sm">{emailSuccess}</p>}
      </div>
    </div>
  );
}

