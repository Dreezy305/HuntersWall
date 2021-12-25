import React from "react";
import { useAuth } from "../auth/useAuth";
import LeftSide from "../components/dashboard/leftSide";
import RightSide from "../components/dashboard/rightSide";

function Dashboard() {
  const auth = useAuth();
  console.log(auth);

  return (
    <div className="d-lg-flex">
      <LeftSide />
      <RightSide />
    </div>
  );
}

export default Dashboard;
