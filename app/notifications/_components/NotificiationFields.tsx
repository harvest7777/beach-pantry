"use client";
import { useState } from "react";

export default function NotificationFields() {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("We support phone and email notifications!");

  const handleOptIn = () => {
    setMessage("Successfully opted in!");
    setTimeout(() => setMessage("We support phone and email notifications!"), 3000); // clear message after 3 seconds
  };

  return (
    <>
      <p>{message}</p>
      <div>
        <label>Phone Notifications</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter phone number"
        />
        <button onClick={handleOptIn}>Opt In</button>
      </div>

      <div>
        <label>Email Notifications</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
        />
        <button onClick={handleOptIn}>Opt In</button>
      </div>
    </>
  );
}

