import { createContext, useState } from 'react';

export const CreateTripContext = createContext();

export const CreateTripContextProvider = ({ children }) => {
  const [tripData, setTripData] = useState({
    name: '',
    coordinates: '',
    photoRef: '',
    url: '',
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
