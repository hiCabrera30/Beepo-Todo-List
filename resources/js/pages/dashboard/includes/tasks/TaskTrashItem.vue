<template>
    <div class="p-3 border-b border-l border-r border-gray-200">
        <div class="flex flex-row space-x-2 pb-2">
            <div class="flex-grow">
                <h4 class="m-0 font-semibold" v-text="form.context"></h4>
                <span class="mt-3 text-gray-400" v-text="form.status"></span>
            </div>

            <div>
                <button class="flex-none btn btn-primary text-xs" @click="restore">
                    <i class="fas fa-trash-restore mr-1"></i>Restore
                </button>
                <button class="flex-none btn btn-danger text-xs" @click="destroy">
                    <i class="fa fa-trash mr-1"></i> Permanently Delete
                </button>
            </div>
        </div>
    </div>
</template>
<script>
import mixins from "../../../../utils/mixins";

export default {
    name: "TaskTrashItem",

    computed: {
        hasSubTasks() {
            return this.task.sub_tasks && this.task.sub_tasks.length > 0;
        },
    },

    data() {
        return {
            form: this.$inertia.form({
                status: this.task.status,
                parent_id: this.task.parent_id,
                context: this.task.context,
            }),
        };
    },

    methods: {
        restore() {
            this.$inertia.patch(`/api/tasks/${ this.task.id }/restore`);
        },
        destroy() {
            this.$inertia.delete(`/api/tasks/${ this.task.id }/permanent-delete`);
        },
    },

    mixins: [mixins],
    props: {
        task: [Object],
        statuses: [Array],
        errors: [Object],
        response: [Object],
    }
}
</script>