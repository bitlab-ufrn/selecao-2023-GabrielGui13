import { Suggest } from '../Suggest'
import { SuggestType } from '../../types/localTypes'
import './style.scss'
import { useEffect, useState } from 'react'
import { MenuItem, Pagination, Select, SelectChangeEvent } from '@mui/material'

type SuggestBoxProps = {
	suggests: SuggestType[];
	handleRemoveSuggest: (id: string) => void;
}

export const SuggestBox = ({ suggests, handleRemoveSuggest }: SuggestBoxProps) => {
	const [page, setPage] = useState(1);
	const [limit, setLimit] = useState('3');
	const [count, setCount] = useState(suggests.length % Number(limit));
	const [filteredSuggests, setFilteredSuggets] = useState<SuggestType[]>([])

  const handleLimitChange = (event: SelectChangeEvent) => {
    setLimit(event.target.value);
  };
  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => setPage(value);

	useEffect(() => {
		setFilteredSuggets(suggests)
	}, [suggests])

	useEffect(() => {
		setCount(suggests.length > Number(limit) ? suggests.length % Number(limit) : 1)

		const pageAndLimitCalc = page * Number(limit)

		setFilteredSuggets(suggests.slice(pageAndLimitCalc - Number(limit), pageAndLimitCalc))
	}, [limit, page])
	
	return (
		<div id="suggest-box">
			<h3>Comentários</h3>

			<div id="suggests">
				<Select
					labelId="change-limit"
					id="change-limit"
					value={limit}
					label="Limite"
					onChange={handleLimitChange}
					sx={{
						marginBottom: '15px'
					}}
				>
					{/* <MenuItem value={' '}>&nbsp;</MenuItem> */}
					<MenuItem value={'3'}>3</MenuItem>
					<MenuItem value={'5'}>5</MenuItem>
					<MenuItem value={'10'}>10</MenuItem>
				</Select>

				{filteredSuggests.map((suggest: SuggestType) => <Suggest {...suggest} handleRemoveSuggest={(id: string) => handleRemoveSuggest(id)} />)}

				{suggests.length == 0 && (
					<p style={{ opacity: '0.2' }}>Não foram encontrados comentários</p>
				)}
			</div>

			{suggests.length != 0 && (
				<div id="suggests-pagination" style={{}}>
					<Pagination count={count} page={page} onChange={handlePageChange} />
				</div>
			)}
		</div>
	)
}