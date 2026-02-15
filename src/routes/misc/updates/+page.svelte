<!-- Licensed under CC BY-SA 4.0 and MIT - See LICENSE.md -->

<script lang="ts">
import '../../../app.css'
import Header from '$lib/components/Header.svelte'
import Footer from '$lib/components/Footer.svelte'
import hero from '$lib/images/hero-banners/updates.avif'
</script>

<Header
	heroImg={hero}
	title="Updates"
	catchphrase="We all love an update!"
/>

<div class="m-5">
	<div class="collapse bg-base-100 mb-6">
		<input type="radio" name="updates-nav" checked />
		<div class="collapse-title font-bold text-lg">Jump to Version</div>
		<div class="collapse-content">
			<div class="flex flex-wrap gap-2 p-2">
				<a href="#v.0.2.6.6" class="link">V0.2.6.6</a>
				<a href="#v.0.2.6.5" class="link">V0.2.6.5</a>
				<a href="#v.0.2.6.4" class="link">V0.2.6.4</a>
				<a href="#v.0.2.6.3" class="link">V0.2.6.3</a>
				<a href="#v.0.2.6.2" class="link">V0.2.6.2</a>
				<a href="#v.0.2.6.1" class="link">V0.2.6.1</a>
				<a href="#v.0.2.6" class="link">V0.2.6</a>
				<a href="#v.0.2.5" class="link">V0.2.5</a>
			</div>
		</div>
	</div>

	<div class="space-y-6">
		<!-- V0.2.6.6 -->
		<div class="card card-border bg-base-100" id="v.0.2.6.6">
			<div class="card-body">
				<h2 class="card-title">Version 0.2.6.6 BETA</h2>
				<h3 class="font-bold mt-2">✏️ Additions/Changes:</h3>
				<ul class="list-disc list-inside">
					<li>Added a chat icon above players' heads to indicate when you cannot chat with that player</li>
					<li>SCRAM restricted to Jr. Op+ unless in an emergency situation</li>
					<li>Additional information added to SCRAM reports</li>
					<li>Master mute restricted to Jr. Op+</li>
					<li>Added master mute logging</li>
					<li>Added turbine/bypass valve logging</li>
					<li>Added diesel generator logging</li>
					<li>Log recorder now logs the day as well</li>
				</ul>
				<h3 class="font-bold mt-4">Notable Fixes:</h3>
				<ul class="list-disc list-inside">
					<li>Patched absurdly high efficiency on pay check</li>
					<li>Renamed incorrect units</li>
				</ul>
			</div>
		</div>

		<!-- V0.2.6.5 -->
		<div class="card card-border bg-base-100" id="v.0.2.6.5">
			<div class="card-body">
				<h2 class="card-title">Version 0.2.6.5 BETA</h2>
				<p class="text-lg font-bold mt-2">Hello everyone, and happy new year! ✨</p>
				<h3 class="font-bold mt-4">✏️ Additions/Changes:</h3>
				<ul class="list-disc list-inside">
					<li>Removed Christmas decorations</li>
					<li>Low-ranked players will no longer collide with each other due to fling exploits</li>
				</ul>
			</div>
		</div>

		<!-- V0.2.6.4 -->
		<div class="card card-border bg-base-100" id="v.0.2.6.4">
			<div class="card-body">
				<h2 class="card-title">Version 0.2.6.4 BETA</h2>
				<p class="font-bold mt-2">Attention all personnel and operators!</p>
				<p class="italic mt-2 mb-4">
					A cold front has crossed over Oakridge Nuclear Power Station, bringing extra snowfall this Christmas
					season! Stay warm and enjoy unlimited complimentary coffee in the break room! Happy holidays from all of us
					here at Koyot Digital! ❄️
				</p>
				<p class="text-lg font-bold">🎁 The Christmas Event is now LIVE!</p>
				<p class="font-bold text-success">Now through Christmas Day, Sold power will be doubled!!! ✨</p>
				<h3 class="font-bold mt-4">✏️ Additions/Changes:</h3>
				<ul class="list-disc list-inside">
					<li>Sold power markup of 100%! (Limited time)</li>
					<li>Festive decoration around the map</li>
					<li>Snowfall and snow particles surround the map</li>
					<li>New music in the lobby and on the radio</li>
					<li>New Icon</li>
				</ul>
			</div>
		</div>

		<!-- V0.2.6.3 -->
		<div class="card card-border bg-base-100" id="v.0.2.6.3">
			<div class="card-body">
				<h2 class="card-title">Version 0.2.6.3 BETA</h2>
				<h3 class="font-bold mt-2">🔧 Patched</h3>
				<ul class="list-disc list-inside">
					<li>Problem with efficiency breaking randomly.</li>
					<li>Issue with power sold being miscalculated, causing a way to sell unattainable amounts of power.</li>
				</ul>
				<p class="italic mt-4">Nothing crazy or super notable, just had to be done now sooner than later.</p>
			</div>
		</div>

		<!-- V0.2.6.2 -->
		<div class="card card-border bg-base-100" id="v.0.2.6.2">
			<div class="card-body">
				<h2 class="card-title">Version 0.2.6.2 BETA</h2>
				<h3 class="font-bold mt-2">✏️ Additions/Changes:</h3>
				<ul class="list-disc list-inside">
					<li>Removed Halloween decorations and atmosphere</li>
					<li>Temporarily disabled damage from vehicles due to exploitation</li>
					<li>New top bar UI implementation</li>
					<li>New music in the lobby and on the radio</li>
					<li>Removed Herobrine</li>
				</ul>
			</div>
		</div>

		<!-- V0.2.6.1 -->
		<div class="card card-border bg-base-100" id="v.0.2.6.1">
			<div class="card-body">
				<h2 class="card-title">Version 0.2.6.1 BETA</h2>
				<p class="font-bold mt-2">Halloween has begun at Oakridge Nuclear Power Station</p>
				<h3 class="font-bold mt-4">✏️ Additions/Changes:</h3>
				<ul class="list-disc list-inside">
					<li>Decoration around the map</li>
					<li>New spooky lighting</li>
					<li>New Spooky audios</li>
					<li>Menu changed to be orange</li>
					<li>New Icon</li>
					<li>Added Herobrine</li>
				</ul>
			</div>
		</div>

		<!-- V0.2.6 -->
		<div class="card card-border bg-base-100" id="v.0.2.6">
			<div class="card-body">
				<h2 class="card-title">Version 0.2.6 BETA</h2>
				<h3 class="font-bold mt-2">✏️ Additions/Changes:</h3>
				<ul class="list-disc list-inside space-y-1">
					<li>Balanced malfunctions</li>
					<li>Bonuses from malfunctions now scale with operator rank</li>
					<li>2 additional malfunctions</li>
					<li>Reworked the shift managers' computer</li>
					<li>Monitors in the shift manager's office now display game information</li>
					<li>Option to choose the lobby as a location on spawn</li>
					<li>Added new SCRAM report to logs</li>
					<li>Added logs for manually closing pump breakers in addition to tripping</li>
					<li>Cooling basins are now functional</li>
					<li>Added Plant Director badge</li>
					<li>Increased initial fuel level for the diesel generators</li>
					<li>Added who initialized a vote-kick, along with the final vote within the server message</li>
					<li>Trainee raised to 10k</li>
					<li>New "anti-trolling measures" (should make messing with reactor and turbines harder in normal conditions)</li>
					<li>Probability of meltdown from the floppa has been limited to private servers</li>
				</ul>
				<h3 class="font-bold mt-4">🔧 Notable Fixes:</h3>
				<ul class="list-disc list-inside space-y-1">
					<li>Fixed some switches incorrectly logging</li>
					<li>Nerfed low water method</li>
					<li>Fixed turbine blade ordering</li>
					<li>Fixed auto-rods on middle panel not logging</li>
					<li>Fixed log recorder being out of order after rejoin</li>
				</ul>
			</div>
		</div>

		<!-- V0.2.5 -->
		<div class="card card-border bg-base-100" id="v.0.2.5">
			<div class="card-body">
				<h2 class="card-title">Version 0.2.5 BETA</h2>
				<h3 class="font-bold mt-2">New Features:</h3>
				<ul class="list-disc list-inside space-y-1">
					<li>Recoded vehicles on the client</li>
					<li>Shutdown Checklist</li>
					<li>Point bonus for safe shutdowns, with achievement</li>
					<li>Shift Manager / Supervisor achievement</li>
					<li>New "All Time Leaderboard" (Top 6 players)</li>
					<li>Visitor Card system (Limited access for visitors)</li>
					<li>Restricted access: Alarm test, SCRAM, turbine trip/breakers disabled for visitors</li>
					<li>Security points now tracked separately from operator points</li>
					<li>Separate ranks for Security roles</li>
					<li>Operator point offload: 1/3 of points contribute to Security</li>
					<li>Baton added for Officer rank</li>
					<li>Turnstiles cycle by default on keycard swipe</li>
					<li>Donator name tag addon</li>
					<li>Phone now has animation when used</li>
					<li>New hazmat suits created</li>
					<li>Private server owners can now use `/kick [player name]`</li>
					<li>Drivable forklifts</li>
					<li>Loading screen & main menu UI overhauled</li>
					<li>Disclaimer and rules now shown in public servers</li>
					<li>Automatic deaerator control added</li>
					<li>Removed FNAO Event</li>
					<li>ECCS reworked: Limited nitrogen, can't refill while pressurized</li>
					<li>New core heat distribution display</li>
					<li>AFK status displayed if no input after 3 and a half minutes</li>
					<li>New Gamepass: Spawn with Geiger counter</li>
				</ul>
				<h3 class="font-bold mt-4">🔧 Notable Fixes:</h3>
				<ul class="list-disc list-inside space-y-1">
					<li>Fixed turbine blade ordering issues</li>
					<li>Fixed being stuck on phone after resetting</li>
					<li>Music volume setting now saves correctly</li>
					<li>Fixed player locator highlight not clearing on reset</li>
				</ul>
			</div>
		</div>
	</div>
</div>

<Footer />
