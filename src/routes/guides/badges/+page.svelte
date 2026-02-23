<script lang="ts">
import '../../../app.css'
import Header from '$lib/components/Header.svelte'
import Footer from '$lib/components/Footer.svelte'
const hero = '/images/hero-banners/badges.avif'
import badgeData from '$lib/data/badgesData.json' with { type: 'json' }
</script>

<Header heroImg={hero} title="Badges" catchphrase="Gotta get them all!" />

<div class="m-5">
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
		{#each badgeData as data}
			<div class="card card-border bg-base-100">
				<div class="hover-3d">
					<!-- content -->
					<figure class="w-fit rounded-full m-4 mx-auto">
						<img src={data.image} alt={data.name} width="150" height="150" />
					</figure>
					<!-- 8 empty divs needed for the 3D effect -->
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
				<div class="card-body">
					<h2 class="card-title">{data.name}</h2>
					<p class="text-sm">{data.description}</p>
					<div class="divider my-2"></div>
					<details class="collapse collapse-arrow bg-base-200">
						<summary class="collapse-title">How to Get</summary>
						<div class="collapse-content text-sm">
							{#if data.guideType == 'num'}
								<ol class="list-decimal list-inside">
									{#each data.guide as guideData}
										<li>{guideData}</li>
									{/each}
								</ol>
							{/if}
							{#if data.guideType == 'bullet'}
								<ul class="list-disc list-inside">
									{#each data.guide as guideData}
										<li>{guideData}</li>
									{/each}
								</ul>
							{/if}
						</div>
					</details>
				</div>
			</div>
		{/each}
	</div>
</div>
<Footer />
