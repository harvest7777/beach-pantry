"use client";
import { useState } from "react";

export default function NotificationFields() {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("Opt in to get notified about product restocks");

  const handleOptIn = () => {
    setMessage("Successfully opted in!");
    setTimeout(() => setMessage("Opt in to get notified about product restocks"), 3000); // clear message after 3 seconds
  };

  return (
    <div className="w-full flex flex-col items-center gap-y-3">
      <p className="italic">{message}</p>

      <div>
        <label>Phone Notifications</label>
        <div className="flex gap-x-2">
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="123-456-7890"
          />
          <button className="flex-1" onClick={handleOptIn}>Opt In</button>
        </div>
      </div>
      <div>
        <label>Email Notifications</label>
        <div className="flex gap-x-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="someone@gmail.com"
          />
          <button className="flex-1" onClick={handleOptIn}>Opt In</button>
        </div>
      </div>
    </div>
  );
}

