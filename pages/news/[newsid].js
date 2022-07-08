import { useRouter } from 'next/router'

// our-domain.com/news/nejaka-zprava

function NejakaZprava() {
	const router = useRouter()

	const newsId = router.query.newsid

	// send a request to the backend API
	// to fetch the news item with newsId

	return <h1>Nějaká Zpráva</h1>
}

export default NejakaZprava
