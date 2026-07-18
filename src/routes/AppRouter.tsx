import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import { MainLayout } from "../components/layout/MainLayout";

import { ResearchPage } from "../pages/overview/ResearchPage";

import { ColorsPage } from "../pages/tokens/ColorsPage";
import { TypographyPage } from "../pages/tokens/TypographyPage";
import { SpacingPage } from "../pages/tokens/SpacingPage";
import { RadiusPage } from "../pages/tokens/RadiusPage";
import { ShadowPage } from "../pages/tokens/ShadowPage";
import { IconsPage } from "../pages/tokens/IconsPage";
import { DesignTokensPage } from "../pages/tokens/DesignTokensPage";
import { MotionPage } from "../pages/tokens/MotionPage";
import { GridPage } from "../pages/tokens/GridPage";

import { ButtonPage } from "../pages/components/ButtonPage";
import { InputPage } from "../pages/components/InputPage";
import { CheckboxPage } from "../pages/components/CheckboxPage";
import { BadgePage } from "../pages/components/BadgePage";
import { CardPage } from "../pages/components/CardPage";
import { ModalPage } from "../pages/components/ModalPage";
import { DropdownPage } from "../pages/components/DropdownPage";
import { TablePage } from "../pages/components/TablePage";
import { AlertPage } from "../pages/components/AlertPage";
import { TabsPage } from "../pages/components/TabsPage";
import { ToastPage } from "../pages/components/ToastPage";
import { TooltipPage } from "../pages/components/TooltipPage";
import { VersionHistoryPage } from "../pages/VersionHistoryPage";


export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
          <Route
      path="/"
      element={<LandingPage />}
    />
        <Route element={<MainLayout />}>

          <Route
  path="/docs"
  element={<Navigate to="/research" replace />}
/>

      

          <Route
            path="/research"
            element={<ResearchPage />}
          />

        

          <Route
            path="/colors"
            element={<ColorsPage />}
          />

          <Route
            path="/typography"
            element={<TypographyPage />}
          />

          <Route
            path="/spacing"
            element={<SpacingPage />}
          />

          <Route
            path="/radius"
            element={<RadiusPage />}
          />

          <Route
            path="/shadow"
            element={<ShadowPage />}
          />
          <Route
            path="/icons"
            element={<IconsPage />}
          />
          <Route
            path="/tokens"
            element={<DesignTokensPage />}
          />
         
          <Route
            path="/motion"
            element={<MotionPage />}
          />
            <Route
            path="/grid"
            element={<GridPage />}
          />

          

          <Route
            path="/button"
            element={<ButtonPage />}
          />

          <Route
            path="/input"
            element={<InputPage />}
          />

          <Route
            path="/checkbox"
            element={<CheckboxPage />}
          />

          <Route
            path="/badge"
            element={<BadgePage />}
          />

          <Route
            path="/card"
            element={<CardPage />}
          />

          <Route
            path="/modal"
            element={<ModalPage />}
          />

          <Route
            path="/dropdown"
            element={<DropdownPage />}
          />

          <Route
            path="/table"
            element={<TablePage />}
          />

          
          <Route
            path="/alert"
            element={<AlertPage />}
          />

          <Route
            path="/tabs"
            element={<TabsPage />}
          />

          <Route
            path="/toast"
            element={<ToastPage />}
          />

          <Route
            path="/tooltip"
            element={<TooltipPage />}
          />


 

  <Route
            path="/versionhistory"
            element={<VersionHistoryPage />}
          />


          <Route
            path="*"
            element={<Navigate to="/research" replace />}
          />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}