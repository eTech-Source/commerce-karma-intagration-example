"use client"

import { useCookies } from "next-client-cookies";
import AddApiKey from "./components/AddApiKey";


export default function Integrations() {

  // Get the API key in this case using cookies. Thise can be swaped with a call to yor DB
  const cookiesStore = useCookies()
  const apiKey = cookiesStore.get("CK-api-key");

  // API key found

  if (apiKey) {
    return (
      <div className="container">
        <h1 className="ext-3xl font-bold underline">Commerce Karma</h1>
        <input type="password" value={apiKey} readOnly />
        <button onClick={() => cookiesStore.remove("CK-api-key")}>Disconnect Key</button>
        <p>
          To invalidate this key:
          <ul>
            <li>Settings &gt; Add API Key</li>
            <li>Click delete key</li>
          </ul>
        </p>
      </div>
    );
  }

  // No api key found

  return (
    <div className="container">
      <h1 className="ext-3xl font-bold underline">Commerce Karma</h1>
      <article>
        <p>
          Commerce Karma allowes you (the business) to rate the customer
          (client). Each user has page that allows you to view your prospective
          customer&aops;s rating.
        </p>
        <br />
        <p>
          Commerce Karma for EXAMPLE APP allows you to view a customers rating
          or add them to Commerce Karma if they do not already exist.
        </p>
        <br />
        <p>
          To connect go to Commerce Karma then:
          <ul>
            <li>Settings &gt; Add API Key</li>
            <li>Follow the on screen instructions.</li>
            <li>Click Copy Key.</li>
            <li>Paste the key below.</li>
          </ul>
        </p>
      </article>
      {/* Add api key component */}
      <h1>Reload to see the changes</h1>
      <AddApiKey />
    </div>
  );
}
