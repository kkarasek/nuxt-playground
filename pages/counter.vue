<script setup lang="ts">
const name = ref('Kuba');
const counter = ref(0);

function incrementCounter() {
	counter.value++;
}

function resetCounter() {
	counter.value = 0;
}
</script>

<template>
	<div class="flex flex-col gap-4 items-center">
		<h1 class="text-xl">
			Hello from Nuxt App 💅🏻
		</h1>
		<p>I'm {{ name }}</p>
		<div class="flex gap-8 items-center jusitify-center mt-4">
			<p class="font-bold text-xl w-4 text-center">
				{{ counter }}
			</p>
			<button
				type="button"
				class="bg-gray-200 p-2 rounded-md hover:bg-gray-300 ease-in-out"
				@click="incrementCounter"
			>
				Click to Increment!
			</button>
			<button
				type="button"
				class="bg-red-200 p-2 rounded-md hover:bg-red-300 ease-in-out"
				@click="resetCounter"
			>
				Reset Counter
			</button>
		</div>
		<div />
	</div>
</template>
