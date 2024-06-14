import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar';
import { GetStarted } from './Components/GetStarted';
import { Service } from './Components/Service';
import { Avatar } from './Components/Avatar';
import { Tools } from './Components/Tools';
import { ToolsFlex } from './Components/ToolsFlex';
import { Roadmap } from './Components/Roadmap';

function App() {
  return (
    <div className="App">
      <Navbar />
      <section className="get-started">
        <GetStarted />
      </section>

      <section className='service'>
        <Service />
      </section>

      <section className='avat'>
        <Avatar/>
      </section>

      <section className='tools'>
        <Tools/>
      </section>

      <section>
        <ToolsFlex/>
      </section>

      <section className='roadmap'>
        <Roadmap/>
      </section>
    </div>
  );
}

export default App;
