import { createContext, useState } from 'react';

export const CreateTripContext = createContext();

export const CreateTripContextProvider = ({ children }) => {
  const [tripData, setTripData] = useState({
    locationInfo: {},
    traveler: {},
  });
  return (
    <CreateTripContext.Provider
      value={{
        tripData,
        setTripData,
      }}
    >
      {children}
    </CreateTripContext.Provider>
  );
};
