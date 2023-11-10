import { useEffect, useState, ReactNode, FC } from "react"
import { stateContext } from "@/context"

interface ClientStateProviderProps {
  children: ReactNode;
};

const ClientStateProvider: FC<ClientStateProviderProps> = ({ children }) => {
  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <stateContext.Provider value={isClient}>
      {children}
    </stateContext.Provider>
  )
};

export default ClientStateProvider