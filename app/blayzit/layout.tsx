import "../globals.css";
import "../styles/blayzit-enterprise.css";
import { ThemeProvider } from "../providers/ThemeProvider";
import { UserProvider } from "../providers/UserProvider";

export default function BlayzitLayout({ children }) {
  return (
    <ThemeProvider>
      <UserProvider>
        {children}
      </UserProvider>
    </ThemeProvider>
  );
}
