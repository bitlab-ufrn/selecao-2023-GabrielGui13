import { Form } from "../../components/Form"
import { Header } from "../../components/Header"
import "./style.scss"

export const Home = () => {
	return (
		<>
			<Header />

			<div className="page-layout">
				<div id="floating-box">
					<h2>Portal de sugestões do IMD</h2>
					<p style={{ marginBottom: '20px' }}>Faça uma sugestão das coisas que o IMD deve melhorar.</p>

					<Form />
					<hr />
				</div>
			</div>	
		</>
	)
}