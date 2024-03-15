import { createContext, useContext, useState } from 'react';

const MyContext = createContext(); // Replace with default value
const MyProvider = ({ children }) => {
    const [userId, setUserId] = useState(false);
  
    return (
      <MyContext.Provider value={{ userId, setUserId }}>
        {children}
      </MyContext.Provider>
    );
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  export const LoginStat=() => useContext(MyContext);

  export default MyProvider;