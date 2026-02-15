<!-- Licensed under CC BY-SA 4.0 and MIT - See LICENSE.md -->

<script lang="ts">
import '../../../app.css'
import Header from '$lib/components/Header.svelte'
import Footer from '$lib/components/Footer.svelte'
import hero from '$lib/images/hero-banners/utilities.avif'

let demandValue = 1000
let reactorPower = 4200
let plantOutput = 1000
let plantUsage = 4200
let hoursInput = 8
let mwInput = 1000
let bonusSelect = 1.0
let effSlider = 1.0

let turbineCalcResult = ''
let turbineCalcResultPlus = ''
let efficiencyResult = ''
let paycheckResult = ''

function runCalculationTurbine() {
	const result = demandValue / 2
	turbineCalcResult = result.toFixed(2)
	turbineCalcResultPlus = (result + 12).toFixed(2)
}

function runCalculationEfficiency() {
	const O = plantOutput
	const P = reactorPower
	const C = plantUsage

	if (P === 1600 || C === 0) {
		efficiencyResult = 'Invalid'
		return
	}

	const term1 = 65 * (O / (P - 1600))
	const term2 = 35 * ((77 * (O / 4570 + 0.65)) / C)
	const result = term1 + term2

	const percentage = (result * 100).toFixed(2)
	efficiencyResult = percentage + '%'
}

function runCalculationPaycheck() {
	if (!hoursInput || !mwInput) {
		paycheckResult = '—'
		return
	}

	const mwSold = mwInput * effSlider
	const baseCal = mwSold * 0.2
	const withBonus = baseCal * bonusSelect
	const withHours = (withBonus * (hoursInput * 14)) / 24
	const result = withHours / 2

	paycheckResult = result.toFixed(0)
}

runCalculationTurbine()
</script>

<Header
	heroImg={hero}
	title="Utilities"
	catchphrase="Ever Needed a little Help Getting that Turbine Bypass?"
/>

<div class="m-5">
	<!-- Turbine Calculator -->
	<div class="card card-border bg-base-100 mb-6" id="turbine-calc">
		<div class="card-body">
			<h2 class="card-title">Turbine Auto Bypass Calculator</h2>

			<p class="text-sm mb-4">
				The formula for what to input into each auto-bypass <span class="font-bold text-success">with</span>
				extra efficiency is: Demand ÷ 2 + 12
			</p>
			<p class="text-sm mb-4">
				The formula for what to input into each auto-bypass <span class="font-bold text-error">without</span>
				extra efficiency is: Demand ÷ 2
			</p>
			<p class="text-sm mb-4">
				The Deaerator significantly contributes to the amount of steam the reactor can produce; adjust the inlet and outlet valves accordingly.
			</p>

			<div class="form-control mb-4">
				<label class="label">
					<span class="label-text">Demand: <span class="font-bold">{demandValue} MW</span></span>
				</label>
				<input
					type="range"
					min="950"
					max="1500"
					step="10"
					bind:value={demandValue}
					on:input={runCalculationTurbine}
					class="range"
				/>
			</div>

			<div class="space-y-2">
				<div class="flex justify-between items-center p-2 bg-base-200 rounded">
					<span>AutoBalance MW:</span>
					<span class="font-mono font-bold">{turbineCalcResult}</span>
				</div>
				<div class="flex justify-between items-center p-2 bg-base-200 rounded">
					<span>AutoBalance MW (+12):</span>
					<span class="font-mono font-bold">{turbineCalcResultPlus}</span>
				</div>
			</div>
		</div>
	</div>

	<!-- Efficiency Calculator -->
	<div class="card card-border bg-base-100 mb-6" id="efficiency-calc">
		<div class="card-body">
			<h2 class="card-title">Efficiency Calculator</h2>
			<p class="text-sm mb-4">
				Formula: (65 × (O ÷ (P - 1600)) + 35 × (77 × (O ÷ 4570 + 0.65) ÷ C))
			</p>

			<div class="space-y-4">
				<div class="form-control">
					<label class="label">
						<span class="label-text">Reactor Power (MW):</span>
					</label>
					<input
						type="number"
						min="1000"
						max="5000"
						step="1"
						bind:value={reactorPower}
						on:input={runCalculationEfficiency}
						class="input input-bordered"
					/>
				</div>

				<div class="form-control">
					<label class="label">
						<span class="label-text">Plant Output (MW):</span>
					</label>
					<input
						type="number"
						min="950"
						max="1500"
						step="1"
						bind:value={plantOutput}
						on:input={runCalculationEfficiency}
						class="input input-bordered"
					/>
				</div>

				<div class="form-control">
					<label class="label">
						<span class="label-text">Plant Usage:</span>
					</label>
					<input
						type="number"
						min="1"
						max="5000"
						step="1"
						bind:value={plantUsage}
						on:input={runCalculationEfficiency}
						class="input input-bordered"
					/>
				</div>

				<div class="flex justify-between items-center p-3 bg-base-200 rounded">
					<span class="font-bold">Efficiency Percentage:</span>
					<span class="font-mono font-bold text-lg">{efficiencyResult}</span>
				</div>
			</div>
		</div>
	</div>

	<!-- Paycheck Calculator -->
	<div class="card card-border bg-base-100" id="paycheck-calc">
		<div class="card-body">
			<h2 class="card-title">Paycheck Points Calculator</h2>
			<p class="text-sm mb-4">
				Formula: ((MW Sold × Efficiency × 0.2) × Bonus) × (hours × 14.00 ÷ 24) ÷ 2
			</p>

			<div class="space-y-4">
				<div class="form-control">
					<label class="label">
						<span class="label-text">Hours Worked:</span>
					</label>
					<input
						type="number"
						min="1"
						step="1"
						bind:value={hoursInput}
						on:input={runCalculationPaycheck}
						class="input input-bordered"
						placeholder="Enter hours"
					/>
				</div>

				<div class="form-control">
					<label class="label">
						<span class="label-text">Base MW Output:</span>
					</label>
					<input
						type="number"
						min="1"
						step="1"
						bind:value={mwInput}
						on:input={runCalculationPaycheck}
						class="input input-bordered"
						placeholder="Enter MW"
					/>
				</div>

				<div class="form-control">
					<label class="label">
						<span class="label-text">Bonus Multiplier:</span>
					</label>
					<select
						bind:value={bonusSelect}
						on:change={runCalculationPaycheck}
						class="select select-bordered"
					>
						<option value={1.0}>0% (Visitor, Trainee)</option>
						<option value={1.1}>10% (Jr. Operator)</option>
						<option value={1.35}>35% (Sr. Operator)</option>
						<option value={1.7}>70% (Supervisor)</option>
						<option value={2.15}>115% (Shift Manager)</option>
						<option value={2.7}>170% (Plant Director)</option>
						<option value={3.1}>210% (NRC Inspector)</option>
					</select>
				</div>

				<div class="form-control">
					<label class="label">
						<span class="label-text">Efficiency Rating:</span>
					</label>
					<input
						type="number"
						min="0"
						max="5"
						step="0.1"
						bind:value={effSlider}
						on:input={runCalculationPaycheck}
						class="input input-bordered"
					/>
				</div>

				<div class="flex justify-between items-center p-3 bg-base-200 rounded">
					<span class="font-bold">Total Points:</span>
					<span class="font-mono font-bold text-lg">{paycheckResult}</span>
				</div>
			</div>
		</div>
	</div>
</div>

<Footer />
