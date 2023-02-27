import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '../hooks/useTypedDispatch';
import { getQuotes } from '../store/actions/quoteActions';
import { useAppSelector } from '../hooks/useTypedSelector';
import { randomInt } from '../utils/randomInt';
import { IQuote } from '../types/quoteModel';

const Quote = () => {
  const [quote, setQuote] = useState<IQuote>();
  const { quotes } = useAppSelector((state) => state.quote);
  const dispatch = useAppDispatch();

  const handleNewQuote = () => {
    const randomNum = randomInt(0, quotes!.length);
    const randomQuote = quotes![randomNum];
    setQuote(randomQuote);
  };

  useEffect(() => {
    dispatch(getQuotes());
    handleNewQuote();
  }, []);

  useEffect(() => {}, [quote]);

  return (
    <div className="flex flex-col gap-2 md:gap-4 items-center text-white">
      <button
        onClick={handleNewQuote}
        className="w-8 h-8 bg-cover bg-center bg-[url('./images/reload.svg')] opacity-80 hover:opacity-100 duration-1000 hover:rotate-180"
        type="button"
      ></button>
      <h2 className="text-2xl text-center md:text-4xl">{quote?.text}</h2>
      <p className="text-xl md:text-2xl">{quote?.author}</p>
    </div>
  );
};

export default Quote;
