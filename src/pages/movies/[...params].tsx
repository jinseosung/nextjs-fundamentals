import Seo from "@/components/Seo";
import { GetServerSidePropsContext } from "next";
import React from "react";

interface DetailProps {
  dataUrl: string[];
}

const Detail: React.FC<DetailProps> = ({ dataUrl }) => {
  const [title, id] = dataUrl ? (dataUrl as [string, number]) : [];

  if (title) {
    return (
      <div>
        <Seo title={title} />
        <h4>{title || "Loading..."}</h4>
      </div>
    );
  }
};

export async function getServerSideProps({
  params: params,
}: GetServerSidePropsContext) {
  const dataUrl = params?.params;

  return {
    props: { dataUrl },
  };
}

export default Detail;
