<template>
    <div>
        <form @submit.prevent="submit">
            <form-input placeholder="Create a task"  v-model="form.context" ref="password" :disabled="form.processing"></form-input>
            <div class="text-sm text-gray-400 mt-1">Press enter to save</div>
        </form>
    </div>
</template>
<script>
import FormInput from "../../../../components/FormInput";


export default {
    name: "TaskCreateForm",
    components: { FormInput },
    data() {
        return {
            form: this.$inertia.form({
                parent_id: this.parentId || null,
                context: "",
            }),
        };
    },

    methods: {
        submit() {
            this.form.post('/api/tasks', {
                onFinish: () => this.onSubmitFinish()
            });
        },

        onSubmitFinish() {
            this.form.reset("context");
        },
    },

    props: {
        parentId: [Number],
        errors: [Object],
        response: [Object],
    }
}
</script>