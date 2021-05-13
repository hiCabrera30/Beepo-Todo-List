<template>
    <div class="small">
        <task-pie-chart :chart-data="chartdata"></task-pie-chart>
    </div>
</template>
<script>
import TaskPieChart from './TaskPieChart';

export default {
    name: "TasksChart",
    components: { TaskPieChart },

    computed: {
        labels() {
            return this.taskStats.map(stat => stat.status)
        },
        taskStatValues() {
            return this.taskStats.map(stat => stat.amount)
        },
    },

    data() {
        return {
            chartdata: {},
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        }
    },
    
    methods: {
        initialize() {
            this.chartdata = {
                labels: this.labels,
                datasets: [{
                    label: 'Task Statuses',
                    backgroundColor: this.getRandomColors(),
                    data: this.taskStatValues
                }]
            };
        },
        getRandomColors() {
            const colors = [];
            for (const iterator of this.taskStats) {
                const r = Math.round (Math.random () * 255);
                const g = Math.round (Math.random () * 255);
                const b = Math.round (Math.random () * 255);
                
                colors.push(`rgb(${r}, ${g}, ${b})`);
            }
            return colors;
        }
    },

    props: {
        taskStats: Array,
    },

    mounted() {
        this.initialize();
    }

}
</script>