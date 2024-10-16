"use client";
import Image from "next/image";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import {Novels, fetchNovels as fetchNovelsData} from "@/hooks/use-novels";

const getStatusStyle = (status: string) => {
  switch (status) {
    case "New":
      return "pending-style style1";
    case "Published":
      return "pending-style style2";
    case "Processing":
      return "pending-style style3";
    default:
      return "";
  }
};

const NovelsDataTable = ({ selectedType }: { selectedType: string }) => {
  const [novels, setNovels] = useState<Novels[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchNovelsData();
        setNovels(data);
      } catch (error) {
        console.error("Error fetching novels:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const filteredNovels = novels.filter(
      (novel) =>
          selectedType === "all" || novel.type.toLowerCase() === selectedType.toLowerCase()
  );

  const changeType = (value: string) => {
    if (value === "all") {
      return "All Types";
    }

    if (value === "fanfic") {
      return "Fanfic";
    }

    if (value === "novel") {
      return "Novels";
    }
  };

  return (
      <table className="table-style3 table at-savesearch ">
        <thead className="t-head">
        <tr>
          <th scope="col">{changeType(selectedType)}</th>
          <th scope="col">Status</th>
          <th scope="col">Section</th>
          <th scope="col">Word</th>
          <th scope="col">Views</th>
          <th scope="col">Collection</th>
          <th scope="col">Action</th>
        </tr>
        </thead>
        <tbody className="t-body">
        {filteredNovels.map((novel) => (
            <tr key={novel.id}>
              <th scope="row">
                <div className="listing-style1 dashboard-style d-xxl-flex align-items-center mb-0">
                  <div className="list-thumb">
                    <Image
                        width={110}
                        height={94}
                        className="w-100"
                        src={novel.imageSrc}
                        alt="novel"
                    />
                  </div>
                  <div className="list-content py-0 p-0 mt-2 mt-xxl-0 ps-xxl-4">
                    <div className="h6 list-title">
                      <Link href={`/dashboard-my-novel/${novel.id}`}>{novel.title}</Link>
                    </div>
                  </div>
                </div>
              </th>
              <td className="vam">
                <span className={getStatusStyle(novel.status)}>{novel.status}</span>
              </td>
              <td className="vam">{novel.section}</td>
              <td className="vam">{novel.word}</td>
              <td className="vam">{novel.views}</td>
              <td className="vam">{novel.collection}</td>
              <td className="vam">
                <div className="d-flex">
                  <button
                      className="icon"
                      style={{ border: "none" }}
                      data-tooltip-id={`edit-${novel.id}`}
                  >
                    <span className="fas fa-pen fa" />
                  </button>
                  <button
                      className="icon"
                      style={{ border: "none" }}
                      data-tooltip-id={`delete-${novel.id}`}
                  >
                    <span className="flaticon-bin" />
                  </button>
                  <ReactTooltip id={`edit-${novel.id}`} place="top" content="Edit" />
                  <ReactTooltip id={`delete-${novel.id}`} place="top" content="Delete" />
                </div>
              </td>
            </tr>
        ))}
        </tbody>
      </table>
  );
};

export default NovelsDataTable;