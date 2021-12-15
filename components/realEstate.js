import React from "react";

function RealEstate() {
  const image = {
    estate: "/img/realestate.png",
  };
  return (
    <>
      <div className="col-lg-6 realEstate_content">
        <h1 className="pb-3">Asset Code: - REE-076489</h1>
        <h2 className="pb-5">Description</h2>
        <p className="">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor
          duis semper feugiat nec imperdiet fames felis. Odio at dui, erat sed.
          Eu, faucibus posuere iaculis sed auctor dignissim mattis aenean. Diam
          mauris suscipit vestibulum, morbi. Quisque placerat eget tortor
          laoreet. Sed pulvinar vitae massa amet, pretium. Massa egestas elit
          amet fringilla. Urna eget ut feugiat eget sed erat auctor tincidunt
          arcu. Et pulvinar risus fusce odio tortor varius id dui. Gravida arcu
          etiam hendrerit at cras faucibus ipsum non habitant. Porttitor amet
          mollis venenatis velit, odio quis venenatis, feugiat imperdiet. Hac
          senectus duis urna tortor, ipsum habitant sed. Orci diam rhoncus nibh
          consectetur ipsum morbi auctor elementum. Viverra in sed ut quis.
          Iaculis eget sit morbi nisi vulputate malesuada mattis. Congue nisi
          nisi.
        </p>
      </div>
      <div className="col-lg-6">
        <img src={image.estate} className="img-fluid" alt="real_estate" />
      </div>
    </>
  );
}

export default RealEstate;
