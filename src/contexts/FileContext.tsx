import React, {
  Context,
  createContext,
  Dispatch,
  useContext,
  useState,
} from "react";
const files = null;
const setFiles = null;

export const FileContext: Context<
  [File[] | null, Dispatch<React.SetStateAction<File[] | null>>] | null
> = createContext<
  [File[] | null, React.Dispatch<React.SetStateAction<File[] | null>>] | null
>(null);
