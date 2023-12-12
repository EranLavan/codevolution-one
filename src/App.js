import React, { Component } from 'react';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Mashehu from './components/Mashehu';
import Countergpt from './components/Countergpt';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import PersonsList from './components/PersonsList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css';
import styles from './appStyles.module.css';
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
import Counter37 from './components/Counter37';
import ComponentC from './components/ComponentC';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import HookCounterFour from './components/HookCounterFour';
import HookClassCounterOne from './components/HookClassCounterOne';
import HookFunctionCounterOne from './components/HookFunctionCounterOne';
import HookClassMouse from './components/HookClassMouse';
import HookFunctionMouse from './components/HookFunctionMouse';
import HookMouseContainer from './components/HookMouseContainer';
import HookIntervalClassCounter from './components/HookIntervalClassCounter';
import HookIntervalFunctionCounter from './components/HookIntervalFunctionCounter';
import DataFetching from './components/DataFetching';

// function App() {
//   return (
//     <div className="App">
//       <AnyNameLiterally />
//     </div>
//   );
// }

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

class App extends Component {
  render() {
    return (
      <div className="App">

        {/* <ClassCounter /> */}

        {/* <HookCounter /> */}

        {/* <HookCounterTwo /> */}

        {/* <HookCounterThree /> */}

        {/* <HookCounterFour /> */}

        {/* <HookClassCounterOne />

        <HookFunctionCounterOne /> */}

        {/* <HookClassMouse /> */}

        {/* <HookFunctionMouse /> */}

        {/* <HookMouseContainer /> */}

        {/* <HookIntervalClassCounter />

        <HookIntervalFunctionCounter /> */}

        {/* <DataFetching /> */}

        {/* //////////////////////////////////// */}

        {/* <PostForm /> */}

        {/* <PostList /> */}

        <UserContext.Provider value={'Menkalinan'}>

        <ChannelContext.Provider value={'Codevolution'}>
        <ComponentC />
        </ChannelContext.Provider>

        </UserContext.Provider>

        {/* <User render={(isLoggedIn) => isLoggedIn ? 'Menkalinan' : 'Guest'}/>

        <Counter37>
          {
            (count, incrementCount) => (
              <ClickCounterTwo
              count={count}
              incrementCount={incrementCount}>
              </ClickCounterTwo>
            )
          }
        </Counter37>

        <Counter37>
          {
            (count, incrementCount) => (
              <HoverCounterTwo
              count={count}
              incrementCount={incrementCount}>
              </HoverCounterTwo>
            )
          }
        </Counter37> */}

        {/* <ClickCounter name='Menkalinan'/>

        <HoverCounter />

        <ClickCounterTwo />

        <HoverCounterTwo /> */}

        {/* <ErrorBoundary><Hero heroName='Batman' /></ErrorBoundary>
        <ErrorBoundary><Hero heroName='Superman' /></ErrorBoundary>
        <ErrorBoundary><Hero heroName='Joker' /></ErrorBoundary> */}

        {/* <PortalDemo /> */}

        {/* <FRParentInput /> */}

        {/* <FocusInput /> */}

        {/* <RefsDemo /> */}

        {/* <ParentComp /> */}

        {/* <Table /> */}

        {/* <FragmentDemo /> */}

        {/* <LifecycleA /> */}

        {/* <Form /> */}

        {/* <h1 className='error'>Error</h1>
        <h1 className={styles.success}>Success</h1>
        <Inline />
        <Stylesheet primary={true}/> */}

        {/* <Stylesheet primary={true}/> */}

        {/* <Inline /> */}

        {/* <PersonsList /> */}

        {/* <NameList /> */}

        {/* <UserGreeting /> */}

        {/* <ParentComponent /> */}
        
        {/* <FunctionClick /> */}

        {/* <EventBind /> */}

        {/* <ClassClick /> */}

        {/* <Counter /> */}

        {/* <Message />

        <Countergpt /> */}



        {/* <Greet name="Bruce" heroName="Batman">
          <p>This is children props</p>
        </Greet> */}
        
        {/* <Greet name="Clark" heroName="Superman">
          <button>Action</button>
        </Greet> */}
        
        {/* <Greet name="Diana" heroName="Wonder Woman"/> */}

        {/* <Welcome name="Bruce" heroName="Batman" /> */}
        {/* <Welcome name="Clark" heroName="Superman" /> */}
        {/* <Welcome name="Diana" heroName="Wonder Woman" /> */}
      
      </div>
    )
  }
}

export default App;
