<template>
    <div>
        <div v-if="isRoot && tasks.length == 0">
            <h2 class="text-5xl text-gray-300 font-bold p-5">No tasks found</h2>
        </div>
        <draggable 
            v-model="orderedTasks"
            v-bind="dragOptions"
            @change="orderChanged"
            :emptyInsertThreshold="100"
            class="p-4 w-full"
            >
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
            if (event.added) {
                return this.draggedNewItemToList(event.added)
            } else if (event.moved) {
                return this.updateItemOrder(event.moved)
            }

        },

        draggedNewItemToList(event) {
            const newIndex = event.newIndex;
            const task = event.element;

            axios.put("/api/tasks/insert-to-list", {
                task_id: task.id,
                old_parent_id: task.parent_id,
                new_parent_id: this.parentId,
                new_index: newIndex,
            })
                .then(response => {})
                .catch(error => this.failedToUpdateOrder(error));
        },

        updateItemOrder(event) {
            console.log(event);
            const newIndex = event.newIndex;
            const oldIndex = event.oldIndex;
            const task = event.element;
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
        parentId: {
            default: null,
            type: Number,
        },
        statuses: Array,
        isRoot: {
            type: Boolean,
            default: true,
        },
        tasks: Array,
    }
    
}
</script>