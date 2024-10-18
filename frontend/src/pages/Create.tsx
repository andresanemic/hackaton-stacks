import React, { useEffect, useState } from "react";
import {
  AppConfig,
  UserSession,
  showConnect,
  openContractCall,
} from "@stacks/connect";
import { StacksMocknet } from "@stacks/network";
import { stringUtf8CV } from "@stacks/transactions";
import { UserData } from "@stacks/auth";

import Header from "../components/Header";
import Footer from "../components/Footer";
import CreateCard from "../components/CreateCard";

function Create() {
  useEffect(() => {}, []);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen  gap-8 bg-gray-100 p-4">
      <Header />
      <CreateCard />

      <Footer />
    </div>
  );
}

export default Create;
