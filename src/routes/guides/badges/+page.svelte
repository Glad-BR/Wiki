<script lang="ts">
import '../../../app.css'
import Header from '$lib/components/Header.svelte'
import Footer from '$lib/components/Footer.svelte'
import hero from '$lib/images/hero-banners/badges.avif'
</script>

<Header heroImg={hero} title="Badges" catchphrase="Gotta get them all!" />

<div class="m-5">
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
		<!-- Speedrunner Badge -->
		<div class="card card-border bg-base-100">
			<div class="card-body">
				<h2 class="card-title">Speedrunner</h2>
				<p class="text-sm">Blow up the reactor within 8 minutes.</p>
				<p class="text-xs text-warning">Note: This badge is no longer obtainable</p>
				<div class="divider my-2"></div>
				<details class="collapse collapse-arrow bg-base-200">
					<summary class="collapse-title">How to Get</summary>
					<div class="collapse-content text-sm">
						<ol class="list-decimal list-inside">
							<li>Disable Auto Scram</li>
							<li>
								Disable Main Circ Pumps and isolation valves, withdraw rods as fast
								as possible
							</li>
							<li>Explode the reactor within 8 minutes</li>
						</ol>
					</div>
				</details>
			</div>
		</div>

		<!-- What? Badge -->
		<div class="card card-border bg-base-100">
			<div class="card-body">
				<h2 class="card-title">?????</h2>
				<p class="text-sm">"What?"</p>
				<div class="divider my-2"></div>
				<details class="collapse collapse-arrow bg-base-200">
					<summary class="collapse-title">How to Get</summary>
					<div class="collapse-content text-sm">
						<ol class="list-decimal list-inside">
							<li>
								Climb on top of the first cooling tower (left relative to train
								tracks)
							</li>
							<li>
								Turn left and walk around the cooling tower until you see a floppa
								cube
							</li>
							<li>Push the floppa</li>
						</ol>
					</div>
				</details>
			</div>
		</div>

		<!-- #1 Enemy of Staff Morale Badge -->
		<div class="card card-border bg-base-100">
			<div class="card-body">
				<h2 class="card-title">#1 Enemy of Staff Morale</h2>
				<p class="text-sm">Throw all the pizza into the spent fuel pool.</p>
				<div class="divider my-2"></div>
				<details class="collapse collapse-arrow bg-base-200">
					<summary class="collapse-title">How to Get</summary>
					<div class="collapse-content text-sm">
						<ol class="list-decimal list-inside">
							<li>
								Grab all pizza from the staff cafeteria (repeatedly touch the pizza
								circle)
							</li>
							<li>Head to the Reactor Hall</li>
							<li>Look for a water pool on your right when entering</li>
							<li>Drop pizzas in your inventory into the pool (press backspace)</li>
						</ol>
					</div>
				</details>
			</div>
		</div>

		<!-- Deep Fried Badge -->
		<div class="card card-border bg-base-100">
			<div class="card-body">
				<h2 class="card-title">Deep Fried</h2>
				<p class="text-sm">Make contact with live wires in the bridge circuit room.</p>
				<div class="divider my-2"></div>
				<details class="collapse collapse-arrow bg-base-200">
					<summary class="collapse-title">How to Get</summary>
					<div class="collapse-content text-sm">
						<ol class="list-decimal list-inside">
							<li>
								Go to either generator bridge circuit room (left/right of Turbine
								Sub Level)
							</li>
							<li>Go behind the breakers, away from the barrier</li>
							<li>
								Jump up and down until you get electrocuted by hitting the wires
							</li>
						</ol>
					</div>
				</details>
			</div>
		</div>

		<!-- Sufficiently Ionized Badge -->
		<div class="card card-border bg-base-100">
			<div class="card-body">
				<h2 class="card-title">Sufficiently Ionized</h2>
				<p class="text-sm">Reach a fatal dosage of ionizing radiation.</p>
				<div class="divider my-2"></div>
				<details class="collapse collapse-arrow bg-base-200">
					<summary class="collapse-title">How to Get</summary>
					<div class="collapse-content text-sm">
						<ol class="list-decimal list-inside">
							<li>Go to a radiation source (spent fuel pools or reactor hall)</li>
							<li>Stay there until your dosimeter reads 600 rem</li>
						</ol>
					</div>
				</details>
			</div>
		</div>

		<!-- Power to the People Badge -->
		<div class="card card-border bg-base-100">
			<div class="card-body">
				<h2 class="card-title">Power to the People</h2>
				<p class="text-sm">Connect to the grid and deliver power.</p>
				<div class="divider my-2"></div>
				<details class="collapse collapse-arrow bg-base-200">
					<summary class="collapse-title">How to Get</summary>
					<div class="collapse-content text-sm">
						<ul class="list-disc list-inside">
							<li>Successfully sync a turbine and start producing positive power</li>
						</ul>
					</div>
				</details>
			</div>
		</div>

		<!-- BOOP Badge -->
		<div class="card card-border bg-base-100">
			<div class="card-body">
				<h2 class="card-title">BOOP!</h2>
				<p class="text-sm">:3c</p>
				<div class="divider my-2"></div>
				<details class="collapse collapse-arrow bg-base-200">
					<summary class="collapse-title">How to Get</summary>
					<div class="collapse-content text-sm">
						<ol class="list-decimal list-inside">
							<li>Go to the turbine hall entrance (next to control room)</li>
							<li>Take the south stairwell and climb to the top</li>
							<li>Turn left and go through the door</li>
							<li>
								Walk forward until you see a blue furry plushy, click it (may need
								multiple tries)
							</li>
						</ol>
					</div>
				</details>
			</div>
		</div>

		<!-- Floor Pizza Badge -->
		<div class="card card-border bg-base-100">
			<div class="card-body">
				<h2 class="card-title">Floor Pizza</h2>
				<p class="text-sm">Kinda gross, ngl</p>
				<div class="divider my-2"></div>
				<details class="collapse collapse-arrow bg-base-200">
					<summary class="collapse-title">How to Get</summary>
					<div class="collapse-content text-sm">
						<ol class="list-decimal list-inside">
							<li>At the elevators in the entrance, head to level 2</li>
							<li>Take the door on the far left</li>
							<li>Look left until you see pizza with a wet sign</li>
							<li>Touch and eat the loose pizza slice</li>
						</ol>
					</div>
				</details>
			</div>
		</div>

		<!-- You're Fired Badge -->
		<div class="card card-border bg-base-100">
			<div class="card-body">
				<h2 class="card-title">You're Fired!</h2>
				<p class="text-sm">Fail to produce any power within 48 hours.</p>
				<div class="divider my-2"></div>
				<details class="collapse collapse-arrow bg-base-200">
					<summary class="collapse-title">How to Get</summary>
					<div class="collapse-content text-sm">
						<ul class="list-disc list-inside">
							<li>Don't make any power for 2 days</li>
						</ul>
					</div>
				</details>
			</div>
		</div>

		<!-- 7 Nights at Oakridge Badge -->
		<div class="card card-border bg-base-100">
			<div class="card-body">
				<h2 class="card-title">7 Nights at Oakridge</h2>
				<p class="text-sm">Complete a whole week at the plant.</p>
				<div class="divider my-2"></div>
				<details class="collapse collapse-arrow bg-base-200">
					<summary class="collapse-title">How to Get</summary>
					<div class="collapse-content text-sm">
						<ul class="list-disc list-inside">
							<li>
								Successfully produce power and maintain the reactor for 7 days
								without meltdowns
							</li>
						</ul>
					</div>
				</details>
			</div>
		</div>

		<!-- Senior Operator Badge -->
		<div class="card card-border bg-base-100">
			<div class="card-body">
				<h2 class="card-title">Senior Operator</h2>
				<p class="text-sm">You've proven yourself in the art of reactor operation.</p>
				<div class="divider my-2"></div>
				<details class="collapse collapse-arrow bg-base-200">
					<summary class="collapse-title">How to Get</summary>
					<div class="collapse-content text-sm">
						<ul class="list-disc list-inside">
							<li>Gain 500,000 total points as an operator</li>
						</ul>
					</div>
				</details>
			</div>
		</div>

		<!-- By the Book Badge -->
		<div class="card card-border bg-base-100">
			<div class="card-body">
				<h2 class="card-title">By the Book</h2>
				<p class="text-sm">Reach 100% efficiency while meeting demand.</p>
				<div class="divider my-2"></div>
				<details class="collapse collapse-arrow bg-base-200">
					<summary class="collapse-title">How to Get</summary>
					<div class="collapse-content text-sm">
						<ol class="list-decimal list-inside">
							<li>
								Reach 100% efficiency by lowering bypass usage on turbine while
								meeting demand
							</li>
							<li>
								Lower reactor power in 50 MW increments until bypass is fully closed
								(requires Auto Bypass)
							</li>
						</ol>
					</div>
				</details>
			</div>
		</div>

		<!-- Teamwork Sounds Like a Liability Badge -->
		<div class="card card-border bg-base-100">
			<div class="card-body">
				<h2 class="card-title">Teamwork? Sounds Like a Liability</h2>
				<p class="text-sm">Complete an entire shift all on your own.</p>
				<div class="divider my-2"></div>
				<details class="collapse collapse-arrow bg-base-200">
					<summary class="collapse-title">How to Get</summary>
					<div class="collapse-content text-sm">
						<ul class="list-disc list-inside">
							<li>
								Complete a shift by yourself without exploding/melting the reactor
							</li>
						</ul>
					</div>
				</details>
			</div>
		</div>

		<!-- GET ME FEEDWATER Badge -->
		<div class="card card-border bg-base-100">
			<div class="card-body">
				<h2 class="card-title">GET ME FEEDWATER!</h2>
				<p class="text-sm">Don't always take things at face value.</p>
				<div class="divider my-2"></div>
				<details class="collapse collapse-arrow bg-base-200">
					<summary class="collapse-title">How to Get</summary>
					<div class="collapse-content text-sm">
						<ol class="list-decimal list-inside">
							<li>Toggle the red/grey switches on the end of the operator panel</li>
							<li>
								When the reactor water level line graph shows a straight line, click
								on it multiple times
							</li>
						</ol>
					</div>
				</details>
			</div>
		</div>

		<!-- Junior Operator Badge -->
		<div class="card card-border bg-base-100">
			<div class="card-body">
				<h2 class="card-title">Junior Operator</h2>
				<p class="text-sm">Hope you were paying attention.</p>
				<div class="divider my-2"></div>
				<details class="collapse collapse-arrow bg-base-200">
					<summary class="collapse-title">How to Get</summary>
					<div class="collapse-content text-sm">
						<ul class="list-disc list-inside">
							<li>Reach 75,000 total points as an operator</li>
						</ul>
					</div>
				</details>
			</div>
		</div>

		<!-- Energy Tycoon Badge -->
		<div class="card card-border bg-base-100">
			<div class="card-body">
				<h2 class="card-title">Energy Tycoon</h2>
				<p class="text-sm">Sell over 20 gigawatt-hours of power in one day</p>
				<div class="divider my-2"></div>
				<details class="collapse collapse-arrow bg-base-200">
					<summary class="collapse-title">How to Get</summary>
					<div class="collapse-content text-sm">
						<ol class="list-decimal list-inside">
							<li>Sell a total of 20000 MW of power in a single day</li>
							<li>Check power sold above the condensate pump panel</li>
						</ol>
					</div>
				</details>
			</div>
		</div>

		<!-- Supervisor Badge -->
		<div class="card card-border bg-base-100">
			<div class="card-body">
				<h2 class="card-title">Supervisor</h2>
				<p class="text-sm">Share your wisdom and guide your peers to success!</p>
				<div class="divider my-2"></div>
				<details class="collapse collapse-arrow bg-base-200">
					<summary class="collapse-title">How to Get</summary>
					<div class="collapse-content text-sm">
						<ul class="list-disc list-inside">
							<li>Earn a total of 1,250,000 points as an operator</li>
						</ul>
					</div>
				</details>
			</div>
		</div>

		<!-- OSHA would be proud Badge -->
		<div class="card card-border bg-base-100">
			<div class="card-body">
				<h2 class="card-title">OSHA would be proud</h2>
				<p class="text-sm">Safely shut down the reactor without mishap.</p>
				<div class="divider my-2"></div>
				<details class="collapse collapse-arrow bg-base-200">
					<summary class="collapse-title">How to Get</summary>
					<div class="collapse-content text-sm">
						<ol class="list-decimal list-inside">
							<li>Reach the end of a shift and receive the shutdown call</li>
							<li>Follow the shutdown checklist</li>
							<li>
								Ensure systems are properly configured before inspection:
								<ul class="list-disc list-inside ml-4">
									<li>Turbine Gear engaged for both turbines</li>
									<li>Breaker 18M-G1 is off</li>
									<li>Offline Core Cooling and OCC pumps enabled</li>
								</ul>
							</li>
							<li>Receive the badge if all criteria are met</li>
						</ol>
					</div>
				</details>
			</div>
		</div>

		<!-- Shift Manager Badge -->
		<div class="card card-border bg-base-100">
			<div class="card-body">
				<h2 class="card-title">Shift Manager</h2>
				<p class="text-sm">Middle management, maximum ego.</p>
				<div class="divider my-2"></div>
				<details class="collapse collapse-arrow bg-base-200">
					<summary class="collapse-title">How to Get</summary>
					<div class="collapse-content text-sm">
						<ol class="list-decimal list-inside">
							<li>Reach a total of 2,500,000 points as an operator</li>
						</ol>
					</div>
				</details>
			</div>
		</div>

		<!-- Plant Director Badge -->
		<div class="card card-border bg-base-100">
			<div class="card-body">
				<h2 class="card-title">Plant Director</h2>
				<p class="text-sm">Certified to blame others when things explode.</p>
				<div class="divider my-2"></div>
				<details class="collapse collapse-arrow bg-base-200">
					<summary class="collapse-title">How to Get</summary>
					<div class="collapse-content text-sm">
						<ol class="list-decimal list-inside">
							<li>Reach a total of 5,000,000 points as an operator</li>
						</ol>
					</div>
				</details>
			</div>
		</div>
	</div>
</div>

<Footer />
