"use client";

import { ReactNode } from "react";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { store } from "../../../store/store";

const PersistGateProvider = ({ children }: { children: ReactNode }) => {
  let persistor = persistStore(store);
  return (
    <PersistGate loading={null} persistor={persistor}>
      {children}
    </PersistGate>
  );
};

export default PersistGateProvider;
