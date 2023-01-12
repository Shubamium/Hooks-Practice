import ContextExample from './components/ContextExample'
import MemoExample from './components/MemoExample'
import ReducerExample from './components/ReducerExample'
import UseRefExample from './components/UseRefExample'
import CallbackExample from './components/CallbackExample'
function App() {

  return (
    <div className="App">
      <p>Hello World!</p>

      <div className="m-6 p-4 border-2 border-white">
        <p className="font-bold text-blue-400 text-lg">Context API / UseContext Example</p>
        <ContextExample />
      </div>

      <div className="m-6 p-4 border-2 border-white">
        <p className="font-bold text-blue-400 text-lg">Reducer Example</p>
        <ReducerExample />
      </div>

      <div className="m-6 p-4 border-2 border-white">
        <p className="font-bold text-blue-400 text-lg">UseRef Example</p>
        <UseRefExample />
      </div>
      {/* <div className="m-6 p-4 border-2 border-white">
        <p className="font-bold text-blue-400 text-lg">Memo Example</p>
        <MemoExample />
      </div> */}

      <div className="m-6 p-4 border-2 border-white">
        <p className="font-bold text-blue-400 text-lg">useCallback Example</p>
        <CallbackExample />
      </div>

    </div>
  )
}

export default App
