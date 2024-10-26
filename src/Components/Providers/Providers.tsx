"use client";

import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "../../../store/store";

type ProviderProps = {
  children: ReactNode;
};

const Providers = ({ children }: ProviderProps) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Providers;
