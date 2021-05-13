<template>
    <div class="bg-gray-200 min-h-screen">
        <auth-header :user="user"></auth-header>

        <div class="md:container md:mx-auto mt-5">
            <div class="lg:mx-96 card bg-white">
                <tasks-chart :task-stats="taskStats"></tasks-chart>
            </div>
        </div>
    </div>
</template>

<script>
import mixins from '../../utils/mixins';
import AuthHeader from '../includes/AuthHeader';
import TasksChart from "./includes/chart-page/TasksChart";

export default {
    name: "HomePage",

    components: { AuthHeader, TasksChart },
    data() {
        return {
            pageTitle: "Beepo To-do App - Task Chart",
        };
    },

    mixins: [ mixins ],

    props: {
        user: Object,
        taskStats: Array,
    }
}
</script>