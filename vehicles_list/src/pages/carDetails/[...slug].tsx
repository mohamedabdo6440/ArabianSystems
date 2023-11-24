import React, { useState } from "react";
import { useRouter } from "next/router";
import CardDetails from "@/components/CardUse/CardDetails";
const index = () => {
  const router = useRouter();
  const { slug } = router.query;
const []=useState()
  return (
    <div>
      <h1>Dynamic Page</h1>
      <p>Slug: {slug}</p>
      {/* <CardDetails /> */}
    </div>
  );
};

export default index;
