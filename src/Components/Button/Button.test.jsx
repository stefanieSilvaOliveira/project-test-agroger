import React from 'react';
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import BaseButton from '../BaseButton/BaseButton';
import Button from'./index';

describe("Button Componente", () => {
  it("deve verificar se o botão existe, se ele é clicável, se ele mostra os itens dentro da div container-button e exibe o componente BaseButton", async () => {
    render(
      <>
        <Button />
        <BaseButton />
      </>
    );


    const button = screen.getByRole("button", { name: /NOVA SESSÃO DE PROVA/i });
    expect(button).toBeInTheDocument();

   
    fireEvent.click(button);

    
    const loadingButtons = screen.getAllByText(/Carregando/i);
    expect(loadingButtons.length).toBeGreaterThan(0);

   
    await waitFor(() => {
      expect(screen.getByTestId("container-section")).toBeInTheDocument();
    });
  });
});