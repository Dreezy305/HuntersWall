import React from "react";
import Card from "./card";
import { All } from "../data/all";

function AllAssets() {
  return (
    <>
      {All.map((item) => (
        <>
          <div className="col-lg-4 my-3" key={item.id}>
            <Card
              AssetCode={item.AssetCode}
              assetCode={item.assetCode}
              Iov={item.Iov}
              AssetClaimTime={item.AssetClaimTime}
              subscriptions={item.subscriptions}
              offertime={item.offertime}
              AssetContent={item.AssetContent}
            />
          </div>
        </>
      ))}
    </>
  );
}

export default AllAssets;
