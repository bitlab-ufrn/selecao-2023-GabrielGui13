import { useState } from 'react';
import './style.scss'
import { Box, Button, Card, Fade, Modal, TextField, Typography } from '@mui/material'
import { ShowWordsModal } from '../ShowWordsModal';
import { addNewWord } from '../../utils/addNewWord';
import { triggerToast } from '../../utils/triggerToast';

type AddWordModalProps = {
	open: boolean;
	handleClose: () => void;
}

export const AddWordModal = ({ open, handleClose }: AddWordModalProps) => {
	const [openModal, setOpenModal] = useState(false);
	const [word, setWord] = useState('');

	const handleCloseModal = () => setOpenModal(false);

	const handleOpenModal = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault()
		setOpenModal(true)
	}

	const handleAddNewWord = () => {
		const addWord = addNewWord(word)

		if (!addWord) {
			triggerToast({
				message: 'Palavra já adicionada!',
				type: 'error'
			})
		}
		else {
			triggerToast({
				message: 'Palavra adicionada com sucesso!',
				type: 'success'
			})
			setWord('')
			handleClose()
		}
	}
	
	return (
		<Modal 
			open={open}
			onClose={handleClose}
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				fontFamily: "'Roboto', sans-serif"
			}}
		>
			<Card
				id='new-word-card-wrapper'
				sx={{
					minWidth: '20vw',
					minHeight: '25vh',
					padding: '25px',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'start',
					alignItems: 'center',
					borderRadius: '7px'
				}}
			>
				<Typography variant='h5' sx={{ fontWeight: 'bold' }}>Encontrou algum erro?</Typography>
				<Typography variant='subtitle1' sx={{ whiteSpace: 'wrap' }}>Informe a palavra ofensiva não verificada</Typography>

				<Box id="modal-bad-word-wrapper">
					{/* <label htmlFor="modal-bad-word-input">Apelido do Github</label>	 */}
					<input type="text" id="modal-bad-word-input" placeholder='Palavra ofensiva' value={word} onChange={(e) => setWord(e.target.value)} />
				</Box>
				
				<Box id="modal-bad-word-button">
					<Button onClick={handleAddNewWord} >ENVIAR</Button>
				</Box>

				<a href='' onClick={handleOpenModal}>Ver palavras ofensivas</a>
				
				<ShowWordsModal open={openModal} handleClose={handleCloseModal} />
			</Card>
		</Modal>
	)
}