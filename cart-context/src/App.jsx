import Cart from './components/Cart'
import Item from './components/Item'


const App = () => {
  
  return (
    <div>
      <Item name={"HP Pavillion Gaming"} price={"700"}/>
      <Item name={'Sony Bravia 43"inch'} price={"400"}/>
      <Item name={"Iqoo Neo 10r"} price={"350"}/>
      <Cart></Cart>
    </div>
  )
}

export default App
