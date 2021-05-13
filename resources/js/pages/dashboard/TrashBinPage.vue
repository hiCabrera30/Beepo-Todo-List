<template>
    <div class="bg-gray-200 min-h-screen">
        <auth-header :user="user"></auth-header>

        <div class="md:container md:mx-auto mt-5">
            <div class="card bg-white">
                <div class="">
                    <div v-if="tasks.length == 0">
                        <h2 class="text-5xl text-gray-300 font-bold p-5">No tasks found</h2>
                    </div>
                    <task-trash-item
                        v-for="task in tasks" :key="task.id"
                        :task="task"
                        :statuses="statuses"
                    ></task-trash-item>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import mixins from '../../utils/mixins';
import AuthHeader from '../includes/AuthHeader';
import TaskTrashItem from "./includes/tasks/TaskTrashItem";

export default {
    name: "TrashBinPage",

    components: { AuthHeader, TaskTrashItem },
    data() {
        return {
            pageTitle: "Beepo To-do App - Trash Bin",
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