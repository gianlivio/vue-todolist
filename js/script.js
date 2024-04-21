const { createApp } = Vue;
createApp({
    data() {
        return {
            todos: [
                { text: "Quaterly newsletter", done: true, category: "Editorial" },
                { text: "Recruiting blog posts", done: true, category: "Editorial" },
                { text: "Schedule meeting with Alex", done: false, category: "Management" },
                { text: "QMobileapp launch", done: false, category: "Q1 Goals" },
                { text: "Interview John H.", done: true, category: "Recruiting" },
                { text: "Summit update to mobile storefronts", done: true, category: "Mobile" },
                { text: "Homepage refresh", done: true, category: "Website" },
                { text: "Onboard new Sales team members", done: true, category: "Sales" },
                { text: "Review editorial calendar", done: true, category: "Editorial" },
                { text: "Plan Q2 marketing strategies", done: false, category: "Marketing" },
                { text: "Prepare year-end financial statements", done: false, category: "Finance" },
                { text: "Update company privacy policy", done: false, category: "Legal" },
                { text: "Organize team building event", done: false, category: "HR" },
                { text: "Renegotiate supplier contracts", done: false, category: "Operations" },
                { text: "Conduct market analysis for new product", done: false, category: "Research" }
            ]
        }
    },
    computed: {
        categorizedTasks() {
            return this.todos.reduce((acc, todo) => {
                if (!acc[todo.category]) {
                    acc[todo.category] = [];
                }
                acc[todo.category].push(todo);
                return acc;
            }, {});
        }
    },
    methods: {
        addTask() {
            if (this.newTaskText) {
                this.todos.push({ text: this.newTaskText, done: false, category: "General" });
                this.newTaskText = '';
            }
        }
    }
}).mount('#app');