import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el: "#app",
        data: {
            items: [
                {name: "Add to PDA", completed: false, highPriority: false},
                {name: "Complete homework", completed: false, highPriority: false},
                {name: "Do washing", completed: true, highPriority: false}
            ],
            addItem: "",
            highPriority: ""
        },
        methods: {
            saveNewItem: function(){
                this.items.push({
                    name: this.addItem,
                    completed: false,
                    highPriority: this.highPriority
                });
                this.addItem = "";
            },
            completed: function(index){
                if (this.items[index].completed === false) {
                    this.items[index].completed = true;
                } else {
                    this.items[index].completed = false;
                }
            }
        }
    })

})
