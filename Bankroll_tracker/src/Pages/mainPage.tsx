import YearPage from "../Components/yearPage";
import MonthPage from "../Components/monthPage";
import NavBar from "../Components/navBar";
import { FC } from "react";
const mainPage: FC = () => {
  return (
    <>
      <div className="mainPageContainer">
        <div className="mainComponentsContainer">
          <YearPage />
          <MonthPage />
        </div>
        <NavBar />
      </div>
    </>
  );
};

export default mainPage;
