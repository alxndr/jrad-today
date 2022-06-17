<script context="module">
	export async function load({params, fetch, session, stuff}) {
		const response = await fetch('https://github.com/alxndr/almost-dead-net/raw/main/src/data/csv/shows.csv')
		if (response.status === 200) {
			const csvString = await response.text()
			const today = new Date()
			const todayM = today.getMonth() + 1
			const todayD = today.getDate()
			const todayMD = `${todayM}/${todayD}`
			return {
				status: 200,
				props: {
					csvString,
					todayMD,
				},
			}
		}
		return {
			status: response.status,
		}
	}
</script>

<script>
	import Papa from 'papaparse'
	const {csvString = '', todayMD = '…'} = arguments?.[1] // TODO this doesn't feel like the Right way to do it...
	let allShows = []
	Papa.parse(csvString, {
		header: true,
		complete: function(results) {
			allShows = results.data
		}
	})
	let anniversaryShows = []
	$: {
		anniversaryShows = allShows.filter(show => todayMD === show?.date?.split('/').slice(0,2).join('/'))
	}
</script>

<h1>Today in JRAD History: {todayMD}</h1>

{#if anniversaryShows.length}
	<ul>
		{#each anniversaryShows as show}
			<li><a href={`https://almost-dead.net/show/${show.id}`}>{show.tagline}</a></li>
		{/each}
	</ul>
{:else}
	<p>No shows played on this date... yet!</p>
{/if}

<style>
	h1 { text-align: center; }
</style>
