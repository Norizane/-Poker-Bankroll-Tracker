import { useState } from "react";
import Form from "./monthPageComponents/Form";
import Sessions from "./monthPageComponents/Sessions";

const MonthPage = () => {
  const [activePage, setActivePage] = useState<"form" | "sessions">("form");
  const [isVisible, setIsVisible] = useState(true);

  const changePage = (page: "form" | "sessions") => {
    setIsVisible(false);
    setTimeout(() => {
      setActivePage(page);
      setIsVisible(true);
    });
  };

  return (
    <>
      <div className="monthPageContainer">
        <div className="monthPageNavBar">
          <button onClick={() => changePage("sessions")}>Sessions</button>
          <button onClick={() => changePage("form")}>Form</button>
        </div>

        <div className={`page ${isVisible ? "visible" : "hidden"}`}>
          {activePage === "form" && <Form />}
          {activePage === "sessions" && <Sessions />}
        </div>
      </div>
    </>
  );
};

export default MonthPage;
