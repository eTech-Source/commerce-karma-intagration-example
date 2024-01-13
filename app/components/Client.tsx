"use client";

import { useEffect } from "react";
import {
  injectCustomer,
} from "../commerce-karma-components-light/script.js";
import { usePathname } from "next/navigation";
import "../commerce-karma-components-light/styles.css";

export default function Client() {
  const pathname = usePathname();

  //Inject the customer
  useEffect(() => {
    const main = async () => {
      const user = await injectCustomer();
    };
    main()
  });
  return (
    <>
      <div id="CK-customers"></div>
      <div id="CK-signin"></div>
    </>
  );
}
