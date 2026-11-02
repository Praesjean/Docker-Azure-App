import './App.css'

function App() {
	return (
		<main className="container">
			<div className="card">
				<div className="icon">☁</div>

				<h1>Docker Cloud App</h1>

				<p className="subtitle">
					Aplicação React publicada utilizando Docker e Microsoft Azure.
				</p>

				<div className="status">
					<span className="status-dot"></span>
					Aplicação funcionando
				</div>

				<div className="technologies">
					<span>React</span>
					<span>Docker</span>
					<span>Docker Hub</span>
					<span>Azure Container Apps</span>
				</div>

				<footer>
					Projeto acadêmico | Arquitetura e Soluções Cloud
				</footer>
			</div>
		</main>
	)
}

export default App