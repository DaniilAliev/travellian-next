import { useEffect, useState } from "react"
import { stateContext } from "@/context"

const ClientStateProvider = ({ children }) => {
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