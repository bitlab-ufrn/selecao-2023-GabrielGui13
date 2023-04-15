import { useState } from 'react';
import './style.scss'
import { Box, Card, Modal, Paper, Stack, Typography, styled } from '@mui/material'
import { useEffect } from 'react';
import { BsFillTrashFill } from 'react-icons/bs'
import { removeWord } from '../../utils/removeWord';
import { triggerToast } from '../../utils/triggerToast';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

type ShowWordsModalProps = {
	open: boolean;
	handleClose: () => void;
}

export const ShowWordsModal = ({ open, handleClose }: ShowWordsModalProps) => {	
	const [words, setWords] = useState<string[]>([])

	useEffect(() => {
		const getWords = localStorage.getItem('words');
		const parsedWords: string[] = JSON.parse(getWords || '').reverse()

		setWords(parsedWords)
	}, [])

	const handleRemoveWord = (word: string) => {
		removeWord(word)
		triggerToast({
			message: 'Palavra removida com sucesso!',
			type: 'success'
		})
		handleClose()
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
				<Typography variant='h5' sx={{ fontWeight: 'bold' }}>Palavras ofensivas</Typography>

				<Box
					sx={{
						maxHeight: '50vh',
						margin: '10px 0',
						overflowY: 'scroll',
					}}
				>
					<Stack 
						spacing={2}
						sx={{
							padding: '20px'
						}}
					>
						{words.map(word => (
							<Box
								sx={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'space-between',
								}}
							>
								<Item key={word}>{word}</Item>
								<BsFillTrashFill 
									style={{
										color: '#08357e',
										cursor: 'pointer',
									}}
									onClick={() => handleRemoveWord(word)}
								/>
							</Box>
						))}
					</Stack>
				</Box>
			</Card>
		</Modal>
	)
}