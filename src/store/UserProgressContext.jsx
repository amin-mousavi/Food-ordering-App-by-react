import { createContext, useState } from "react";

const UserProgressContext = createContext({
  progress: "", // "cart" "checkout"
  showCart: () => {},
  hideCart: () => {},
  showCheckout: () => {},
  hideCheckout: () => {},
});

export default UserProgressContext;

export function UserProgressContextProvider({ children }) {
  const [userProgress, setUserProgress] = useState("");

  const showCart = () => setUserProgress("cart");
  const hideCart = () => setUserProgress("");
  const showCheckout = () => setUserProgress("checkOut");
  const hideCheckout = () => setUserProgress("");

  const userProgressContextValue = {
    progress: userProgress,
    showCart,
    hideCart,
    showCheckout,
    hideCheckout,
  };
  return (
    <UserProgressContext.Provider value={userProgressContextValue}>
      {children}
    </UserProgressContext.Provider>
  );
}
