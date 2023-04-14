import './style.scss'
import LogoImg from '../../assets/IMD_logo.png'

export const Header = () => {
	return (
		<div id="header">
				<img src={LogoImg} alt="IMD - Metrópole Digital" />
		</div>
	)
}