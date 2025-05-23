import './App.css'
import ContactForm from './Components/ContactForm'
import ContactItem from './Components/ContactItem'
import ContactList from './Components/ContactList'
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {

    const [data, setData] = useLocalStorage("todos");

  return (
   <div>
    <ContactForm data={data} setData={setData}/>
    <ContactList data={data}/>
   </div>
  )
}

export default App
