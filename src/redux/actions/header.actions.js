export const HEADER_ACTIONS = {
	UPDATE_SEARCH_TEXT: 'UPDATE_SEARCH_TEXT',
	GET_ALCOHOL_LIST: 'GET_ALCOHOL_LIST'
}

export const updateSearchText = searchText => ({
	type: HEADER_ACTIONS.UPDATE_SEARCH_TEXT,
	payload: searchText,
})

export const getAlcoholList = alcohol => ({
	type: HEADER_ACTIONS.GET_ALCOHOL_LIST,
	payload: alcohol,
})
