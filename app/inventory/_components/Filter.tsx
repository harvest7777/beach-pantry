"use client";
import { useState } from "react";
import { prettyFilters } from "../_data/filters";
import { TFilter } from "../_data/filters"
import { motion, AnimatePresence } from "framer-motion";

interface FilterProps {
  filters: TFilter;
  setFilters: React.Dispatch<React.SetStateAction<TFilter>>;
}

const FilterButton: React.FC<FilterProps> = ({ filters, setFilters }) => {
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <div className="">
      <button onClick={() => setVisible(!visible)}>Filters</button>
      {/* modal */}
      <AnimatePresence>
        {visible &&
          <div className="absolute top-0 left-0 w-full h-screen flex items-center align-middle justify-center z-50">

            <div className="absolute top-0 left-0 w-full h-full bg-muted opacity-50"></div>
            {/* modal contents */}
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="z-50 w-80 h-60 bg-white rounded-xl p-4 flex flex-col items-center">
              <h1>Apply filters</h1>
              <div className="mt-5 flex-col gap-x-10 justify-center flex-1">
                {Object.entries(filters).map(([key, value]) => (
                  <label key={key} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={value}
                      className="!outline-0"
                      onChange={(e) =>
                        setFilters((prev) => ({
                          ...prev,
                          [key]: e.target.checked,
                        }))
                      }
                    />
                    <span className="capitalize">{prettyFilters[key as keyof TFilter]}</span>
                  </label>
                ))}
              </div>
              <button onClick={() => setVisible(!visible)}>Back To Search</button>
            </motion.div>
          </div>
        }
      </AnimatePresence>
    </div>
  )
}
export default FilterButton;
