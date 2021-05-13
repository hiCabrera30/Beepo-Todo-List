<template>
    <div class="bg-gray-200 min-h-screen">
        <auth-header :user="user"></auth-header>

        <div class="md:container md:mx-auto mt-5">
            <div class="w-full md:space-x-3 md:inline-block md:text-right text-center flex flex-col mb-2 space-y-2">
                <a class="btn btn-white" href="/api/tasks/download-excel">
                    <i class="fa fa-download mr-1" aria-hidden="true"></i> Download JSON
                </a>
                <a class="btn btn-white" href="/api/tasks/download-csv">
                    <i class="fa fa-download mr-1" aria-hidden="true"></i> Download CSV
                </a>
                <a class="btn btn-white" href="/api/tasks/download-json">
                    <i class="fa fa-download mr-1" aria-hidden="true"></i> Download Excel
                </a>
            </div>
            <div class="card bg-white">
                <task-create-form></task-create-form>
                <task-list :statuses="statuses" :tasks="tasks" :is-root="true"></task-list>
            </div>
        </div>
    </div>
</template>

<script>
import mixins from '../../utils/mixins';
import AuthHeader from '../includes/AuthHeader';
import TaskCreateForm from "./includes/tasks/TaskCreateForm";
import TaskList from "./includes/tasks/TaskList";

export default {
    name: "HomePage",

    components: { AuthHeader, TaskCreateForm, TaskList },
    data() {
        return {
            pageTitle: "Beepo To-do App - Dashboard",
        };
    },

    mixins: [ mixins ],

    props: {
        user: Object,
        tasks: Array,
        statuses: Array,
    }
}
</script>