import { useEffect, useState } from 'react';
import CheckboxInput from './components/CheckboxInput';
import DateInput from './components/DateInput';
import { Header } from './components/Header';
import { Main } from './components/Main';
import OnlineOffline from './components/OnlineOffline';
import TextInput from './components/Textinput';
import Timer from './components/Timer';
import { getAgeFrom } from './helpers/dateHelpers';
import { getNewId } from './services/idService';

export default function App() {
  const [name, setName] = useState('Iago');
  const [birthDate, setBirthDate] = useState('2001-04-01');
  const [showTimer, setShowTimer] = useState(false);
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    document.title = name;
  }, [name]);

  useEffect(() => {
    function toggleOnline(){
      setIsOnline(true);
    }
    function toggleOffline(){
      setIsOnline(false);
    }

    window.addEventListener('online', toggleOnline);
    window.addEventListener('offline', toggleOffline);

    return() => {
      window.removeEventListener('online', toggleOnline);
      window.removeEventListener('offline', toggleOffline);
    }
  }, [])

  function handleNameChange(newName) {
    setName(newName);
  }

  function handleBirthDate(newBirthDate) {
    setBirthDate(newBirthDate);
  }

  function toggleShowTimer() {
    setShowTimer(currentShowTimer => !currentShowTimer);
  }
  return (
    <>
      <Header isOnline={isOnline} >React Hello</Header>

      <Main>
        <OnlineOffline isOnline={isOnline}/>
        {showTimer && (
          <div className="text-right mt-1">
            <Timer />
          </div>
        )}
        <CheckboxInput labelDescription="Mostrar cronômetro" onCheckboxChange={toggleShowTimer} />

        <TextInput
          id={getNewId()}
          labelDescription="Digite o seu nome:"
          inputValue={name}
          onInputChange={handleNameChange}
          autofocus
        />
        <DateInput
          id={getNewId()}
          labelDescription="Digite a sua data de nascimento"
          inputValue={birthDate}
          onInputChange={handleBirthDate}
        />
        <p>
          o seu nome é {name}, com {name.length} caracteres e você possui{' '}
          {getAgeFrom(birthDate)} anos.
        </p>
      </Main>
    </>
  );
}
