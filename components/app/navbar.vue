<template>
	<nav class="flex items-center h-12 px-4 shadow-md">
		<ul class="flex gap-4">
			<li><NuxtLink to="/">Counter</NuxtLink></li>
			<li><NuxtLink :to="{ name: 'input' }">Input</NuxtLink></li>
		</ul>
	</nav>
</template>
