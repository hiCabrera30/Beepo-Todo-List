<template>
    <div class="bg-gray-200 min-h-screen">
        <auth-header :user="user"></auth-header>

        <div class="md:container md:mx-auto bg-white mt-5 card">
            <task-create-form></task-create-form>
            <div class="">
                <task-list-item
                    v-for="task in tasks" :key="task.id"
                    :task="task"
                ></task-list-item>
            </div>
        </div>
    </div>
</template>

<script>
import mixins from '../../utils/mixins';
import AuthHeader from '../includes/AuthHeader';
import TaskCreateForm from "../tasks/TaskCreateForm";
import TaskListItem from "../tasks/TaskListItem";

export default {
    name: "DashboardPage",

    components: { AuthHeader, TaskCreateForm, TaskListItem },
    data() {
        return {
            pageTitle: "Beepo To-do App - Dashboard",
        };
    },

    mixins: [ mixins ],

    props: {
        user: Object,
        tasks: Array,
    }
}
</script>