import { useState } from 'react';
import './style.scss'
import { Box, Button, Card, Fade, Modal, Paper, Stack, TextField, Typography, styled } from '@mui/material'
import { useEffect } from 'react';

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
							<Item key={word}>{word}</Item>
						))}
					</Stack>
				</Box>
			</Card>
		</Modal>
	)
}