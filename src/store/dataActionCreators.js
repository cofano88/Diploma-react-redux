import * as types from './actionTypes'

export const searchRequest = (search) => {
	return async (dispatch) => {
		const apiKey = `${process.env.REACT_APP_API_KEY}`
		const resp = await fetch(
			`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&q=${search}&type=video&key=${apiKey}`,
		)
		const lastSearch = search
		const dataObj = await resp.json()
		const data = dataObj.items
		const nextPage = dataObj.nextPageToken
		const videoIdArr = data.map((item) => item.id.videoId)
		let videoIdList = ''
		videoIdArr.forEach((el) => {
			videoIdList = videoIdList + el + '%2C'
		})
		const resp2 = await fetch(
			`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoIdList}&key=${apiKey}`,
		)
		const statsObj = await resp2.json()
		const stats = statsObj.items
		dispatch({ type: types.SEARCH_REQUEST, data, stats, nextPage, lastSearch })
	}
}

export const nextPageRequest = () => {
	return async (dispatch, getState) => {
		const state = getState()
		const nextPageToken = state.nextPage
		const apiKey = `${process.env.REACT_APP_API_KEY}`
		const search = state.lastSearch
		const resp = await fetch(
			`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&q=${search}&pageToken=${nextPageToken}&type=video&key=${apiKey}`,
		)
		const dataObj = await resp.json()
		const data = dataObj.items
		const nextPage = dataObj.nextPageToken

		const videoIdArr = data.map((item) => item.id.videoId)
		let videoIdList = ''
		videoIdArr.forEach((el) => {
			videoIdList = videoIdList + el + '%2C'
		})
		const resp2 = await fetch(
			`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoIdList}&key=${apiKey}`,
		)
		const statsObj = await resp2.json()
		const stats = statsObj.items

		dispatch({ type: types.NEXT_PAGE_REQUEST, data, stats, nextPage })
	}
}
