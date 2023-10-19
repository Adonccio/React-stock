import { useContext } from "react";
import { StockContext } from "../contexts/StockContexts";

export default function useStock() {
    return useContext(StockContext)
}