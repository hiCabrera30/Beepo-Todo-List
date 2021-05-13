<template>
    <div>
        <div v-if="isRoot && tasks.length == 0">
            <h2 class="text-5xl text-gray-300 font-bold p-5">No tasks found</h2>
        </div>
        <draggable v-model="orderedTasks" v-bind="dragOptions" @change="orderChanged">
            <transition-group>
                <task-list-item
                    v-for="task in orderedTasks" :key="task.id"
                    :task="task"
                    :statuses="statuses"
                ></task-list-item>
            </transition-group>
        </draggable>
    </div>
</template>
<script>
import TaskListItem from "./TaskListItem";
import draggable from 'vuedraggable';
import axios from "axios";
import mixins from "../../../../utils/mixins";

export default {
    name: "TaskList",
    
    components: { draggable, TaskListItem },
    

    data() {
        return {
            orderedTasks: [...this.tasks],
            dragOptions: {
                animation: 2,
                group: "description",
                disabled: false,
                ghostClass: "ghost"
            },
        };
    },

    methods: {
        orderChanged(event) {
            const { newIndex, oldIndex } = event.moved;
            const task = this.orderedTasks[newIndex];
            axios.put("/api/tasks/update-order", {
                parent_id: task.parent_id,
                task_id: task.id,
                old_index: oldIndex,
                new_index: newIndex,
            })
                .then(response => {})
                .catch(error => this.failedToUpdateOrder(error));
        },
        
        failedToUpdateOrder(error) {
            if (!error.response.data) {
                return console.log(error);
            }
            if (error.response.data.message) {
                this.promptErrors(error.response.data.message);
            }
        },
    },

    mixins: [mixins],

    watch: {
        tasks(newValue) {
            return this.orderedTasks = newValue;
        },
    },

    props: {
        statuses: Array,
        isRoot: {
            type: Boolean,
            default: true,
        },
        tasks: Array,
    }
    
}
</script>