<template>
    <nav class="flex items-center justify-between flex-wrap bg-teal p-6 bg-blue-500 text-white">
        <div class="flex items-center flex-no-shrink text-white mr-6">
            <inertia-link href="/" class="font-semibold text-xl tracking-tight">Beepo Exam App</inertia-link>
        </div>
        <div class="inline-block text-right text-center w-auto font-semibold">
            <div>
                <inertia-link href="/login" class="btn btn-primary">Log in</inertia-link>
            </div>
        </div>
    </nav>
</template>
<script>
export default {
    name: "GuestHeader",
}
</script>