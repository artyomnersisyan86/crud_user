import './app.css';
import 'antd/dist/antd.css'
import 'antd/dist/antd.less'
import UserCrud from "../UserCrud/UserCrud";

function App() {
    return (
        <div className="App">
            <UserCrud/>
        </div>
    );
}

export default App;
