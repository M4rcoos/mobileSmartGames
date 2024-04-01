import React, { ReactNode } from 'react';
import { IGame } from '../interfaces/Interfaces';
import { api } from '../services/api';

interface GameContextType {
  games: IGame[] | null;
  setGames: (games: IGame[]) => void | null;
  error: string | null;
  input: string | undefined;
  setInput: (input: string) => void | string | null;
  setError: (error: string) => void | string | unknown;
}

export const GlobalContext = React.createContext<GameContextType>({
  games: null,
  setGames: (games: IGame[]) => { },
  error: null,
  input: undefined,
  setInput: (input: string) => '',
  setError: (error: unknown) => '',
});



type Props = {
  children: ReactNode;
};

export const GlobalStorage: React.FC<Props> = ({ children }) => {
  const [games, setGames] = React.useState<IGame[] | null>([]);
  const [error, setError] = React.useState<string | null>(null);
  const [input, setInput] = React.useState('');

  const fetchData = async (): Promise<void> => {
    try {
      const response = await api.get("/api/games");
      setGames(response.data.games)
    } catch (error) {
      console.error(JSON.stringify(error)); 
    } 
    
  };


  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <GlobalContext.Provider
      value={{ games, setGames, error, input, setInput, setError }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
