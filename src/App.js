import './css/App.css';
import Layout from './components/global/Layout';

const App = ({ children }) => {
	return (
		<Layout>
			{ children }
		</Layout>
	);
}

export default App;
