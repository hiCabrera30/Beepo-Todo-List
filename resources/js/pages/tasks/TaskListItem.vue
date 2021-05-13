<template>
    <div class="p-3 border-b border-l border-r border-gray-200">
        <div class="flex flex-row space-x-2 pb-2">
            <input class="flex-none mt-2" type="checkbox" v-model="form.is_completed" />
            
            <h4 v-if="!editable" :class="contextClass" v-text="form.context"></h4>
            <form v-else @submit.prevent="update" class="flex-grow m-0">
                <form-input placeholder="Task"  v-model="form.context" ref="context"></form-input>
                <div class="text-gray-300">Press enter to save</div>
            </form>

            <div v-if="!editable">
                <button v-if="!showAddTask" class="flex-none btn btn-primary" @click="displayAddItem">
                    <i class="fa fa-plus"></i>
                </button>
                <button class="flex-none btn btn-warning" @click="toggleEdit">
                    <i class="fa fa-pen"></i>
                </button>
            </div>
            <div v-else>
                <button class="flex-none btn btn-warning" @click="toggleEdit">
                    Cancel Edit
                </button>
            </div>

            <div>
                <button class="flex-none btn btn-danger" @click="destroy">
                    <i class="fa fa-trash"></i>
                </button>
            </div>
        </div>
        <div class="px-5">
            <div v-if="hasSubTasks" class="space-y-3">
                <task-list-item
                    v-for="subTask in task.sub_tasks" :key="subTask.id"
                    :task="subTask"
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
import TaskCreateForm from "./TaskCreateForm";
import mixins from "../../utils/mixins";
import axios from "axios";

export default {
    name: "TaskListItem",
    components: { FormInput, TaskCreateForm },

    computed: {
        hasSubTasks() {
            return this.task.sub_tasks && this.task.sub_tasks.length > 0;
        },
        isCompleted() {
            return this.form.is_completed;
        },

        contextClass() {
            return {
                "flex-grow m-0": true,
                "line-through": this.isCompleted,
            }
        },
    },

    data() {
        return {
            editable: false,
            showAddTask: false,
            form: this.$inertia.form({
                is_completed: this.task.is_completed,
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
            })
            .then(response => this.updated(response))
            .catch(error => this.failedToUpdate(error))
        },
        updated(response) {
            this.editable = false;
            const task = response.data.result.task;
            this.form = this.$inertia.form({
                is_completed: task.is_completed,
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
        toggleCompletion() {
            this.$inertia.patch(`/api/tasks/${ this.task.id }/toggle-completion`);
        },
        destroy() {
            this.$inertia.delete(`/api/tasks/${ this.task.id }`);
        },
    },

    watch: {
        isCompleted(newValue, oldValue) {
            if (oldValue !== null && oldValue !== undefined) {
                this.toggleCompletion();
            }
        },
    },

    mixins: [mixins],
    props: {
        task: [Object],
        errors: [Object],
        response: [Object],
    }
}
</script>