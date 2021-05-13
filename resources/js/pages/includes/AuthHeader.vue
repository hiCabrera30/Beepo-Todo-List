<template>
    <nav class="flex items-center justify-between flex-wrap p-6 bg-blue-500 text-white">
        <div class="md:flex md:flex-no-shrink block items-center text-white md:w-auto w-full md:text-left text-center">
            <span class="font-semibold text-xl tracking-tight mr-5">Beepo Exam App</span>
            
            <div class="md:space-x-3 md:inline-block flex flex-col">
                <inertia-link href="/" class="link md:inline-block sm:block">Task List</inertia-link>
                <inertia-link href="/chart" class="link md:inline-block sm:block">Chart</inertia-link>
                <inertia-link href="/trash-bin" class="link md:inline-block sm:block">Trash Bin</inertia-link>
            </div>
        </div>
        <div class="md:text-right text-center md:w-auto w-full md:inline-block block">
            <div class="md:space-x-3 md:inline-block flex flex-col">
                <inertia-link href="/" class="link md:inline-block sm:block" v-text="user.name"></inertia-link>
                <inertia-link href="/logout" class="btn btn-primary md:inline-block sm:block">Log out</inertia-link>
            </div>
        </div>
    </nav>
</template>
<script>
export default {
    name: "AuthHeader",

    props: {
        user: Object
    }
}
</script>