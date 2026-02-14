<script lang="ts">
import '../../../app.css'
import Header from '$lib/components/Header.svelte'
import Footer from '$lib/components/Footer.svelte'
import hero from '$lib/images/hero-banners/locations.avif'
</script>

<Header
	heroImg={hero}
	title="Locations"
	catchphrase="The facility is vast and can be disorienting for visitors to navigate in. Use this guide to find the locations listed here."
/>

<div class="m-5">
	<div class="join join-vertical w-full">
		<!-- Entrance -->
		<div class="collapse collapse-arrow join-item border-base-300 border">
			<input type="radio" name="location-accordion" />
			<div class="collapse-title font-semibold">Entrance</div>
			<div class="collapse-content">
				<ol class="list-decimal list-inside">
					<li>
						Drive left of spawn until you see a sign that says "Welcome to Oakridge"
					</li>
					<li>Turn right, then left after crossing the railway</li>
					<li>Interact with Hugh and give them your card</li>
					<li>Turn right into the parking lot</li>
				</ol>
			</div>
		</div>

		<!-- Staff Intake -->
		<div class="collapse collapse-arrow join-item border-base-300 border">
			<input type="radio" name="location-accordion" />
			<div class="collapse-title font-semibold">Staff Intake</div>
			<div class="collapse-content">
				<ol class="list-decimal list-inside">
					<li>Go through the entrance and turn right</li>
					<li>Go down the hallway and checkpoint until you reach the spin gate</li>
					<li>
						Scan your card at the keycard reader while holding it, then click on the
						spin gate
					</li>
					<li>Take the elevator or stairwell to the Lower Level (LL for elevator)</li>
					<li>
						Turn right, then right again, then left until you reach the area with the
						dosimeters
					</li>
				</ol>
			</div>
		</div>

		<!-- Control Room -->
		<div class="collapse collapse-arrow join-item border-base-300 border">
			<input type="radio" name="location-accordion" />
			<div class="collapse-title font-semibold">Control Room</div>
			<div class="collapse-content">
				<h3 class="font-bold mt-2 mb-2">Overview</h3>
				<p class="mb-4">
					The Control Room is the nerve center of the facility, with advanced consoles and
					monitoring systems.
				</p>

				<h3 class="font-bold mb-2">How to Access</h3>
				<ol class="list-decimal list-inside mb-4">
					<li>Enter through Staff Intake.</li>
					<li>Pass dosimeter gates by scanning while holding the dosimeter.</li>
					<li>Use Plant Access A and take the elevator to L3.</li>
					<li>Turn left twice to arrive at the Control Room.</li>
				</ol>

				<h3 class="font-bold mb-2">Alternative Route</h3>
				<ol class="list-decimal list-inside mb-4">
					<li>Take elevator to L2 from Staff Intake.</li>
					<li>Turn right and go through Plant Access B.</li>
					<li>Pass dosimeter gates again.</li>
					<li>Take elevator to L3 and follow signs to Control Room.</li>
				</ol>
			</div>
		</div>

		<!-- Reactor Hall -->
		<div class="collapse collapse-arrow join-item border-base-300 border">
			<input type="radio" name="location-accordion" />
			<div class="collapse-title font-semibold">Reactor Hall</div>
			<div class="collapse-content">
				<ol class="list-decimal list-inside">
					<li>While in the staff intake area, go through Plant Access A</li>
					<li>
						Turn right and scan your keycard to enter Sector 1, then click on the doors
					</li>
					<li>Walk through the dosimeter gates and scanner</li>
					<li>Walk forward until you see a door that leads to "Sector 1A - 2AB"</li>
					<li>Go through the door</li>
					<li>Walk down the corridor and turn right</li>
					<li>Use the stairwell or elevator to reach Level 3 (L3 for elevator)</li>
					<li>Go through Sector 2</li>
					<li>Walk through the dosimeter gates and scanner</li>
					<li>
						Go down the corridor and through the doors (Do not go to the Orion
						Skybridge)
					</li>
					<li>Keep going until you reach the end of the corridor</li>
					<li>Turn right and enter the Reactor Hall</li>
					<li>
						Make sure you wear a hazmat suit (located left of the stairwell entrance)
					</li>
					<li>Go up the stairwell until you reach "Reactor Hall Level 4"</li>
					<li>Go through the door</li>
					<li>Click cycle, wait until the light turns green, then click on the valve</li>
					<li>Go inside and close the door</li>
					<li>Click cycle again and wait until the second door unlocks</li>
					<li>Then click on the second door</li>
				</ol>
			</div>
		</div>

		<!-- Turbine Hall -->
		<div class="collapse collapse-arrow join-item border-base-300 border">
			<input type="radio" name="location-accordion" />
			<div class="collapse-title font-semibold">Turbine Hall</div>
			<div class="collapse-content">
				<ol class="list-decimal list-inside">
					<li>While at the entrance of the Control Room.</li>
					<li>Take the left hallway and go through Radiation Checkpoint B.</li>
					<li>Scan your keycard and go through the Turbine Hall doors.</li>
					<li>Go through the scanners and the dosimeter gates.</li>
					<li>
						Take either a left or right turn (Green door leads to Turbine B, Blue door
						leads to Turbine A)
					</li>
				</ol>
			</div>
		</div>

		<!-- Steam Separators -->
		<div class="collapse collapse-arrow join-item border-base-300 border">
			<input type="radio" name="location-accordion" />
			<div class="collapse-title font-semibold">Steam Separators (and under the reactor)</div>
			<div class="collapse-content">
				<ol class="list-decimal list-inside">
					<li>While in the Staff Intake area, go through Plant Access A.</li>
					<li>Go through the Sector 1 door and checkpoint.</li>
					<li>Go down the hallway, take a left, and through Sector 1B.</li>
					<li>
						Go down the hallway, turn right, and head down until you see Steam Line
						Tunnel-B.
					</li>
					<li>Go through the door and follow the stairs.</li>
					<li>
						Keep going down the path until you reach an intersection. Go straight, then
						turn left and then right.
					</li>
					<li>Go down the corridor then turn right. Climb the stairs.</li>
					<li>The Reactor is located on the right of the Steam Separators.</li>
				</ol>
			</div>
		</div>

		<!-- EDG's (Diesel Generators) -->
		<div class="collapse collapse-arrow join-item border-base-300 border">
			<input type="radio" name="location-accordion" />
			<div class="collapse-title font-semibold">EDG's (Diesel Generators)</div>
			<div class="collapse-content">
				<ol class="list-decimal list-inside">
					<li>While at the entrance of the Control Room.</li>
					<li>Turn right and go through Radiation Checkpoint B.</li>
					<li>Turn right and go through the green lead-lined doors.</li>
					<li>Turn right and go through the door labeled "Sector 2A".</li>
					<li>Take the door on the left.</li>
					<li>Take the West Staircase and go down to Ground Level.</li>
					<li>Turn left and go through the doors labeled "Diesel Generators".</li>
				</ol>
			</div>
		</div>
	</div>
</div>

<Footer />
