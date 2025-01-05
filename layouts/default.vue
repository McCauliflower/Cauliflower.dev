<template>
    <div>
        <app-nav />
        <Nuxt/>
        <template v-if="$route.path !== '/login'">
            <app-footer/>
        </template>
    </div>
</template>
