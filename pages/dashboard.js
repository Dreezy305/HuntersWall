import React from "react";
import { useAuth } from "../auth/useAuth";

function Dashboard() {
  const auth = useAuth();
  console.log(auth);

  return (
    <div>
      <h1>
        Hi {auth.user.firstName} {auth.user.lastName}, Welcome to your Dashboard
      </h1>
    </div>
  );
}

export default Dashboard;
