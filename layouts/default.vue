<template>
    <div>
        <app-navigation/>
        <Nuxt/>
        <template v-if="$route.path !== '/login'">
            <app-footer/>
        </template>
    </div>
</template>
