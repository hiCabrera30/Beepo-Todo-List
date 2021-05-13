<template>
    <div class="p-3 border-b border-l border-r border-gray-200">
        <div class="flex flex-row space-x-2 pb-2">

            <div v-if="!editable" class="flex-grow m-0">
                <h4 class="m-0 font-semibold" v-text="form.context"></h4>
                <span class="mt-3 text-gray-400" v-text="form.status"></span>

            </div>
            <div v-else class="flex-grow m-0 space-y-2">
                <form-input placeholder="Context" label="Context" v-model="form.context" ref="context"></form-input>
                <form-select :options="statuses" label="Status" v-model="form.status"></form-select>
            </div>

            <div v-if="!editable">
                <button v-if="!showAddTask" class="flex-none btn btn-primary" @click="displayAddItem">
                    <i class="fa fa-plus"></i>
                </button>
                <button class="flex-none btn btn-warning" @click="toggleEdit">
                    <i class="fa fa-pen"></i>
                </button>
                <button class="flex-none btn btn-danger" @click="destroy">
                    <i class="fa fa-trash"></i>
                </button>
            </div>
            <div v-else>
                
                <button class="flex-none btn btn-primary text-xs" @click="update">
                    <i class="fa fa-save mr-1"></i> Save
                </button>
                <button class="flex-none btn btn-warning text-xs" @click="toggleEdit">
                    <i class="fa fa-ban mr-1"></i> Cancel Edit
                </button>
            </div>
        </div>
        <div class="px-5">
            <div v-if="hasSubTasks" class="space-y-3">
                <task-list-item
                    v-for="subTask in task.sub_tasks" :key="subTask.id"
                    :task="subTask"
                    :statuses="statuses"
                ></task-list-item>
            </div>
            <div v-if="showAddTask" class="flex flex-row space-x-2 py-3">
                <task-create-form class="flex-grow m-0" :parent-id="task.id"></task-create-form>
                <div>
                    <button class="flex-none btn btn-default" @click="cancelAddItem">
                        <i class="fa fa-ban"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import FormInput from "../../components/FormInput";
import FormSelect from "../../components/FormSelect";
import TaskCreateForm from "./TaskCreateForm";
import mixins from "../../utils/mixins";
import axios from "axios";

export default {
    name: "TaskListItem",
    components: { FormInput, FormSelect, TaskCreateForm },

    computed: {
        hasSubTasks() {
            return this.task.sub_tasks && this.task.sub_tasks.length > 0;
        },
    },

    data() {
        return {
            editable: false,
            showAddTask: false,
            form: this.$inertia.form({
                status: this.task.status,
                parent_id: this.task.parent_id,
                context: this.task.context,
            }),
        };
    },

    methods: {
        toggleEdit() {
            if (this.editable) {
                this.form.reset("context");
            }
            this.editable = !this.editable;
        },
        displayAddItem() {
            this.showAddTask = true;
        },
        cancelAddItem() {
            this.showAddTask = false;
        },
        update() {
            axios.put(`/api/tasks/${ this.task.id }`, {
                context: this.form.context,
                status: this.form.status,
            })
            .then(response => this.updated(response))
            .catch(error => this.failedToUpdate(error))
        },
        updated(response) {
            this.editable = false;
            const task = response.data.result.task;
            this.form = this.$inertia.form({
                status: task.status,
                parent_id: task.parent_id,
                context: task.context,
            });
        },
        failedToUpdate(error) {
            if (!error.response.data) {
                return console.log(error);
            }
            if (error.response.data.errors && error.response.data.errors.context) {
                this.$refs.context.error = error.response.data.errors.context;
            }
            if (error.response.data.message) {
                this.promptErrors(error.response.data.message);
            }
            

        },
        destroy() {
            this.$inertia.delete(`/api/tasks/${ this.task.id }`);
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