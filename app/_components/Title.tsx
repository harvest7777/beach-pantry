import { PropsWithChildren } from "react";

const Title: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <h1 className="text-4xl font-bold text-center my-5">{children}</h1>
  )
}

export default Title;
