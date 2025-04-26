<template>
	<nav class="flex items-center h-12 px-4 shadow-md">
		<ul class="flex gap-4">
			<li><NuxtLink :to="{ name: 'counter' }">Counter</NuxtLink></li>
			<li><NuxtLink :to="{ name: 'input' }">Input</NuxtLink></li>
			<li><NuxtLink :to="{ name: 'data-fetching' }">Data Fetching</NuxtLink></li>
		</ul>
	</nav>
</template>
