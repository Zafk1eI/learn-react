import './App.css';
import React, { useState } from 'react';

function App() {
  const [inputText, setInputText] = useState('');
  const [transliteratedText, setTransliteratedText] = useState('');
  const [inputNumber, setInputNumber] = useState('');
  const [sum, setSum] = useState(0);

  const calculateSum = (text) => {
    const numbers = text
      .split('\n') // Разбиваем текст на строки
      .map(line => line.trim()) // Убираем лишние пробелы с каждой строки
      .filter(line => line !== '') // Удаляем пустые строки
      .map(Number); // Преобразуем строки в числа
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }
  const transliterate = (text) => {
    const translitMap = {
      а: 'a', б: 'b', в: 'v', г: 'g', д: 'd', е: 'e', ё: 'yo', ж: 'zh',
      з: 'z', и: 'i', й: 'y', к: 'k', л: 'l', м: 'm', н: 'n', о: 'o',
      п: 'p', р: 'r', с: 's', т: 't', у: 'u', ф: 'f', х: 'kh', ц: 'ts',
      ч: 'ch', ш: 'sh', щ: 'sch', ъ: '', ы: 'y', ь: '', э: 'e', ю: 'yu',
      я: 'ya',
      А: 'A', Б: 'B', В: 'V', Г: 'G', Д: 'D', Е: 'E', Ё: 'Yo', Ж: 'Zh',
      З: 'Z', И: 'I', Й: 'Y', К: 'K', Л: 'L', М: 'M', Н: 'N', О: 'O',
      П: 'P', Р: 'R', С: 'S', Т: 'T', У: 'U', Ф: 'F', Х: 'Kh', Ц: 'Ts',
      Ч: 'Ch', Ш: 'Sh', Щ: 'Sch', Ъ: '', Ы: 'Y', Ь: '', Э: 'E', Ю: 'Yu',
      Я: 'Ya',
      ' ': ' ', '-': '-', '.': '.', ',': ',', '!': '!', '?': '?', ':': ':',
      ';': ';'
    };

<<<<<<< HEAD
    return text.split('').map(char => translitMap[char] || char).join('');
  };

  const handleInputChange = (event) => {
    const text = event.target.value;
    setInputText(text);
    setTransliteratedText(transliterate(text));
  };

  const handleNumberChange = (event) => {
    const text = event.target.value;
    setInputNumber(text);
    setSum(calculateSum(text));
  };

  return (
    <>
      <div>
        <h1>Транслитерация текста</h1>
        <textarea
          value={inputText}
          onChange={handleInputChange}
          placeholder="Введите текст..."
          rows={5}
          cols={50}
        />
        <p>{transliteratedText}</p>
      </div>
      <div>
        <h1>Сумма введенных чисел</h1>
        <textarea
          value={inputNumber}
          onChange={handleNumberChange}
          placeholder="Введите числа, каждое с новой строки..."
          rows={5}
          cols={50}
        />
        <p>Сумма: {sum}</p>
      </div>
    </>
  );
};

export default App;
