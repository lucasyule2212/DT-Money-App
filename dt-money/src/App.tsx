import React, { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from "react-modal";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./contexts/TransactionsContext";
import { ThemeProvider } from "styled-components";
import { dark } from "./styles/themes/dark";
import { light } from "./styles/themes/light";
import { usePersistedState } from "./util/usePersistedState";

Modal.setAppElement("#root");
function App() {
  const[theme,setTheme]=usePersistedState('theme',light);
  function toggleTheme() {
    setTheme(theme.title==='light'?dark:light);
  }
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);
  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }
  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }
  return (
    <TransactionsProvider>
      <ThemeProvider theme={theme}>
        <Header toggleTheme={toggleTheme} onOpenNewTransactionModal={handleOpenNewTransactionModal} />
        <Dashboard />
        <NewTransactionModal
          isOpen={isNewTransactionModalOpen}
          onRequestClose={handleCloseNewTransactionModal}
        />
        <GlobalStyle/>
      </ThemeProvider>
    </TransactionsProvider>
  );
}

export { App };
