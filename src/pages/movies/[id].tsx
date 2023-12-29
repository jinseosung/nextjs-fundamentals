import { NextRouter, useRouter } from "next/router";
import React from "react";

const Detail: React.FC = () => {
  const router = useRouter();

  return (
    <div>
      <h4>{router.query.title || "Loading..."}</h4>
    </div>
  );
};

export default Detail;
