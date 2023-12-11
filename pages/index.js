"use client";

import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [urlInput, setUrlInput] = useState("");
  const [data, setData] = useState();

  /* const axiosClient = axios.create({
    withCredentials: true,
    baseURL: "https://dev.api.haras.pro/api/",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjgxYTBhMmVjLTZiOWEtNGFmYi1iYjEzLWZkYjAyY2U5ZDJiMiIsImVtYWlsIjoidmluaWNpdXNAY29uZXhwYXkuY29tLmJyIiwiVXNlck5hbWUiOiJ2aW5pY2l1cyIsIlVzZXJJbWFnZSI6InVuZGVmaW5lZCIsInJvbGVzIjoiU3lzdGVtIiwibmJmIjoxNzAxOTc1OTAzLCJleHAiOjE3MDIwNjIzMDMsImlhdCI6MTcwMTk3NTkwMywiaXNzIjoiSXNzdWVyIiwiYXVkIjoiQXVkaWVuY2UifQ.Q3-of0eOxPDwtDmp0hWKtb5-nScdxDRBYIrVggd5V3g",
    },
  });

  const teste = useCallback(async () => {
    const response = await axiosClient.get("Farms");
    console.log(response);
  }, []);

  useEffect(() => {
    teste();
  }, [teste]); */

  const testando = async () => {
    const response = await axios.get(urlInput, {
      withCredentials: true,
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjgxYTBhMmVjLTZiOWEtNGFmYi1iYjEzLWZkYjAyY2U5ZDJiMiIsImVtYWlsIjoidmluaWNpdXNAY29uZXhwYXkuY29tLmJyIiwiVXNlck5hbWUiOiJ2aW5pY2l1cyIsIlVzZXJJbWFnZSI6InVuZGVmaW5lZCIsInJvbGVzIjoiU3lzdGVtIiwibmJmIjoxNzAyMzA4NzUzLCJleHAiOjE3MDIzOTUxNTMsImlhdCI6MTcwMjMwODc1MywiaXNzIjoiSXNzdWVyIiwiYXVkIjoiQXVkaWVuY2UifQ.oupP6qD_fG9AYmxo6XVxIllBEOyk9eol_vjWHzdqHzs",
      },
    });
    setData(response.data);
  };

  return (
    <>
      <label>Digite a URL:</label>
      <input value={urlInput} onChange={(e) => setUrlInput(e.target.value)} />
      <button type="button" onClick={() => testando()}>
        Testar
      </button>

      <h1>Dados carregados:</h1>
      <h3>{JSON.stringify(data)}</h3>
    </>
  );
}
