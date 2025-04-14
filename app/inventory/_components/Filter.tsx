"use client";
import { useState } from "react";
import { prettyFilters } from "../_data/filters";
import { TFilter } from "../_data/filters"

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
      {visible &&
        <div className="absolute top-0 left-0 w-full h-screen flex items-center align-middle justify-center z-50">

          <div className="absolute top-0 left-0 w-full h-full bg-muted opacity-50"></div>
          {/* modal contents */}
          <div className="z-50 w-1/2 h-80 bg-white rounded-xl p-4 flex flex-col items-center">
            <h1>Apply filters</h1>
            <div className="flex gap-x-10 flex-wrap flex-1">
              {Object.entries(filters).map(([key, value]) => (
                <label key={key} className="flex items-center gap-2">
                  <span className="capitalize">{prettyFilters[key as keyof TFilter]}</span>
                  <input
                    type="checkbox"
                    checked={value}
                    onChange={(e) =>
                      setFilters((prev) => ({
                        ...prev,
                        [key]: e.target.checked,
                      }))
                    }
                  />
                </label>
              ))}
            </div>
            <button onClick={() => setVisible(!visible)}>Back To Search</button>
          </div>
        </div>
      }
    </div>
  )
}
export default FilterButton;
