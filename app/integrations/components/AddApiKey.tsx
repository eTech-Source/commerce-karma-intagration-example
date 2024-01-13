"use client";

import { checkApiKey } from "@/app/commerce-karma-components-light/script";
import { useState } from "react";
import { useCookies } from "next-client-cookies";

export default function AddApiKey() {
  const [apiKey, setApiKey] = useState("");
  const cookies = useCookies();

  // Add key to on button click
  const addKey = async (apiKey: string) => {
    // Validate key
    const key = await checkApiKey(apiKey);

    // If validation is successful
    if (!(key.response instanceof Error)) {
      // This is required
      cookies.set("CK-api-key", key.apiKey, {expires: 3000});

      // Your logic for saving the key to your db
    }

    // Your error handling logic

  };

  return (
    <>
      <input
        placeholder="Add your Commerce Karma API key."
        value={apiKey}
        onChange={(e) => setApiKey(e.target.value)}
        id="inputPassword5" className="form-control"
      />
      <button onClick={() => addKey(apiKey)}>Add</button>
    </>
  );
}
